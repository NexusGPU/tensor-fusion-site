---
outline: deep
---

# Tensor Fusion Deployment for Kubernetes

## Prerequisites

1. Create a Kubernetes cluster with GPU pool enabled, GPU Operator enabled
2. Kubernetes is able to connect to Docker Hub to pull public images
3. Create tensor-fusion-test namespace for evaluation

```bash
kubectl create ns tensor-fusion-test
```

## Step 1. Run server side on GPU node

```yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: tensor-fusion-gpu-server
  namespace: tensor-fusion-test
spec:
  replicas: 1
  selector:
    matchLabels:
      workload: test
  template:
    metadata:
      labels:
        workload: test
    spec:
      # Recommend to use fixed node during testing and evaluation of TensorFusion
      nodeSelector:
        kubernetes.io/hostname: replace-me-with-kubernetes-node-name // [!code highlight]
      hostNetwork: true  // [!code highlight]
      containers:
        - name: server
          image: tensor-fusion/tensor-fusion-worker:v1.0.1-beta
          command:
          - sh
          - -c
          # when driver version is 535.183.*, -k is 0x298, when it's 550.*, -k is 0x268 // [!code highlight]
          - "vcuda -n native -s 9997 -r 9998 -p 9999 -a 0x1129 -k 0x298" // [!code highlight]
          resources:
            limits:
              nvidia.com/gpu: '1' // obtain one GPU for testing, could be multiple // [!code highlight]
```

## Step 2. Deploy client side test app

After serverside running successfully, copy the NodeIP, replace the vcuda-client startup command.

REPLACE_ME => Server Node IP

Before patch exiting workload to move to away from GPU node and schedule to CPU node, you can run this on CPU node to test the functionality.

```yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: tensor-fusion-test-cpu-client
  namespace: tensor-fusion-test
spec:
  replicas: 1
  selector:
    matchLabels:
      workload: test
  template:
    metadata:
      labels:
        workload: test
    spec:
      volumes:
        - name: vcuda-libs
          emptyDir: {}
      initContainers:
        - name: init-hook
          image: tensor-fusion/tensor-fusion-client:v1.0.1-beta
          command: 
          - sh
          - -c
          - cp /lib/vcuda/*.so /target/lib/vcuda/ && cp /lib/vcuda/official.libcuda.so.1 /target/lib/vcuda/libcuda.so.1
          volumeMounts:
            - mountPath: /target/lib/vcuda
              name: vcuda-libs
      containers:
        - name: app
          image: pytorch/pytorch:2.3.1-cuda12.1-cudnn8-runtime
          lifecycle:
            postStart:
              exec:
                command: ["/bin/sh", "-c", "mkdir -p /usr/local/nvidia/lib/ && cp -r /lib/vcuda/libcuda.so.1 /usr/local/nvidia/lib/ && pip3 install transformers sentencepiece"]
          env:
            - name: DISABLE_ADDMM_CUDA_LT
              value: "1"
            - name: VCUDA_NODE_INDICE_LIST
              value: "0"
            - name: VCUDA_NODE_HOST_LIST
              value: "REPLACE_ME" // [!code highlight]
            - name: VCUDA_NODE_PROTOCOL_LIST
              value: "native"
            - name: VCUDA_NODE_SEND_PORT_LIST
              value: "9998"
            - name: VCUDA_NODE_RECV_PORT_LIST
              value: "9997"
            - name: VCUDA_NODE_PORT_LIST
              value: "9999"
            - name: VCUDA_GPU_INDICE_LIST
              value: "0"
            - name: "LD_PRELOAD"
              value: "/lib/vcuda/libutilities.so:/lib/vcuda/libvcuda.so"
          command:
            - sleep
            - infinity
          volumeMounts:
            - mountPath: /lib/vcuda
              name: vcuda-libs
```

Then run "kubectl exec" into the "app" container, run this command inside the shell to start python REPL console.

```bash
python3
```

Finally, test a simple Google T5 model inference in CPU pod, initialization duration will be 20s to 2 minutes, depends on intranet latency, afterwards, it should translate English "Hello" to German "Hallo" in seconds.

```python
from transformers import pipeline
pipe = pipeline("translation_en_to_de", model="google-t5/t5-base", device="cuda:0")
pipe("Hello")
```

## Step 3. Patch your existing service deployment

If you've installed Kyverno, apply this yaml into Kubernetes. It mainly auto inject following changes, **only if "tensor-fusion.ai/enabled" is "true" annotation present on the Deployment podTemplate**:

1. Add 'vcuda-libs' emptyDir volume to the deployment
2. Inject init container to copy LD_PRELOAD libs into application container
3. Inject other environment variables to set configurations, note that the value of VCUDA_NODE_HOST_LIST should be replaced with the server Node IP

If you don't have Kyverno installed, please manually perform actions above.

```yaml
apiVersion: kyverno.io/v1
kind: ClusterPolicy
metadata:
  name: inject-tensor-fusion
  annotations:
    policies.kyverno.io/title: Inject Tensor Fusion runtime
    policies.kyverno.io/subject: Deployment,Volume
    policies.kyverno.io/minversion: 1.6.0
    policies.kyverno.io/description: >-
      Inject Tensor fusion runtime include a sidecar client container, an init container to provide cuda stub and hook pytorch
spec:
  admission: true
  background: true
  rules:
    - name: inject-tensor-fusion-sidecar
      match:
        any:
          - resources:
              annotations:
                tensor-fusion.ai/enabled: 'true'
              kinds:
                - Pod
      mutate:
        patchStrategicMerge:
          spec:
            containers:
              - name: app # the container name must be app  // [!code highlight]
                env:
                  - name: DISABLE_ADDMM_CUDA_LT
                    value: "1"
                  - name: VCUDA_NODE_INDICE_LIST
                    value: "0"
                  - name: VCUDA_NODE_HOST_LIST
                    value: "REPLACE_ME"           // [!code highlight]
                  - name: VCUDA_NODE_PROTOCOL_LIST
                    value: "native"
                  - name: VCUDA_NODE_SEND_PORT_LIST
                    value: "9998"
                  - name: VCUDA_NODE_RECV_PORT_LIST
                    value: "9997"
                  - name: VCUDA_NODE_PORT_LIST
                    value: "9999"
                  - name: VCUDA_GPU_INDICE_LIST
                    value: "0"
                  - name: LD_LIBRARY_PATH
                    value: /lib/vcuda/official
                  - name: LD_PRELOAD
                    value: /lib/vcuda/libutilities.so:/lib/vcuda/libvcuda.so
                volumeMounts:
                  - name: vcuda-libs
                    mountPath: /lib/vcuda
            initContainers:
              - command:
                  - sh
                  - '-c'
                  - >-
                    mkdir -p /target/lib/vcuda/official && mv /lib/vcuda/official.libcuda.so.1 /target/lib/vcuda/official/libcuda.so.1 && cp /lib/vcuda/*.so /target/lib/vcuda/
                image: tensor-fusion/tensor-fusion-client:v1.0.1-beta
                imagePullPolicy: IfNotPresent
                name: copy-runtime-libs
                volumeMounts:
                  - mountPath: /target/lib/vcuda
                    name: vcuda-libs
            volumes:
              - emptyDir: {}
                name: vcuda-libs
      
```

Then you could apply the following yaml to create a simple pytorch workload to test the injection.

```yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: tensor-fusion-test-on-cpu-node-kyverno
  namespace: tensor-fusion-test
spec:
  replicas: 1
  selector:
    matchLabels:
      workload: test
  template:
    metadata:
      labels:
        workload: test
      annotations:
        tensor-fusion.ai/enabled: "true"
    spec:
      containers:
        - name: app
          image: pytorch/pytorch:2.3.1-cuda12.1-cudnn8-runtime
          command:
            - sleep
            - infinity
```

After pod started, run this command. If everything is fine, you could modify the existing Deployment pod template to trigger kyverno injection and migrate to Tensor Fusion

```bash
pip3 install transformers sentencepiece

LD_PRELOAD="" cat <<EOT >> t5.test.py
from transformers import T5Tokenizer, T5ForConditionalGeneration
from transformers import TextStreamer

model_id = "google-t5/t5-base"
tokenizer = T5Tokenizer.from_pretrained(model_id)
streamer = TextStreamer(tokenizer)
model = T5ForConditionalGeneration.from_pretrained(model_id)
model = model.to("cuda:0")

input_text = "translate English to German: How old are you?"
input_ids = tokenizer(input_text, return_tensors="pt").input_ids.to("cuda")
outputs = model.generate(input_ids, streamer=streamer)
EOT

python3 t5.test.py

# Output <pad>Wie alt bist  du?</s> in the end
```
