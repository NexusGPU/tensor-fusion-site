---
outline: deep
---

# How TenClass Saved 80% on GPU Costs with TensorFusion ?

## Background

[TenClass](https://www.tenclass.com/) is a vocational education company based in Shenzhen, China, providing digital literacy and professional skills courses to help users enhance their digital skills.

## Problem

To provide a convenient and high-quality hands-on learning environment, TenClass developed a virtual machine manager [mvisor](https://github.com/tenclass/mvisor), but in the construction of hands-on learning environments for AI drawing and AI video courses, due to the need for direct GPU access in online laboratories, **due to the immaturity of GPU virtualization technology, providing a dedicated AI drawing environment for each learner is very difficult and expensive**.

## Solution

After learning that TensorFusion can achieve GPU virtualization and pooling, after a period of evaluation and implementation, TenClass became the first customer of TensorFusion.

TensorFusion provided the following solution to TenClass, solving the **cost problem** and **GPU availability** of **cloud hands-on learning environments**:

- Build a GPU pool of T4 GPUs in Linux environment
- Each T4 is cut into 2 or 3 virtual GPUs, cooling the GPU memory to host memory when not active, suspending the virtual GPU power
- Each user's exclusive Windows virtual machine hands-on learning environment, built-in TensorFusion Client, automatically connecting to virtual GPU when starting or executing drawing workflow, and getting AI computing power


## Results

| Before using TensorFusion | After using TensorFusion |
|:--------------------------|:--------------------------|
| <span style="color: #FF6B6B;">😕 Have to buy GPU from cloud vendor for every learner</span> | <span style="color: #4ECB71;">😊 Save >80% costs</span> |
| <span style="color: #FF6B6B;">😕 GPU not available sometimes, impacting user experience</span> | <span style="color: #4ECB71;">😊 With GPU pooling, AI computing availability increased to 99.9%</span> |
| <span style="color: #FF6B6B;">😕 Long set up time of new hands-on lab environment</span> | <span style="color: #4ECB71;">😊 Reduced 45% setup time for new hands-on lab</span> |