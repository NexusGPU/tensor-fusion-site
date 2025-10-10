# Configure AutoScaling for AI Workloads

## Enable AutoScaling

### Simple Configuration with Pod AutoScaling Annotations

```yaml
  # Enable vertical scaling
  autoResources: true
  # Configure target resource, options: all|tflops|vram, if empty only provides recommendations
  targetResource: all 
  # Enable horizontal scaling
  autoReplicas: true
```

### Detailed Configuration Using Workload Configuration File

```yaml
autoScalingConfig:
    # Vertical scaling configuration
    autoSetResources:
      # Enable/disable
      enable: true
      # Target resource
      targetResource: all
      # Tflops usage percentile that will be used as a base for tflops target recommendation. Default: 0.9
      targetTflopsPercentile: 0.9
      # Tflops usage percentile that will be used for the lower bound on tflops recommendation. Default: 0.5
      lowerBoundTflopsPercentile: 0.5
      # Tflops usage percentile that will be used for the upper bound on tflops recommendation. Default: 0.95
      upperBoundTflopsPercentile: 0.95
      # Vram usage percentile that will be used as a base for vram target recommendation. Default: 0.9
      targetVramPercentile: 0.9
      # Vram usage percentile that will be used for the lower bound on vram recommendation. Default: 0.5
      lowerBoundVramPercentile: 0.5
      # Vram usage percentile that will be used for the upper bound on vram recommendation. Default: 0.95
      upperBoundVramPercentile: 0.95
      # Fraction of usage added as the safety margin to the recommended request. Default: 0.15
      requestMarginFraction: 0.15
      # The time interval used for computing the confidence multiplier for the lower and upper bound. Default: 24h
      confidenceInterval: 24h
    autoSetReplicas: {}
    # Cron-based scaling configuration
    cronScalingRules:
        # Enable/disable this rule
      - enable: True
        # Rule name
        name: "test"
        # Rule start time
        start: "0 0 * * Thu"
        # Rule end time
        end: "59 23 * * Thu"
        # Desired GPU resource 
        desiredResources:
          limits:
            tflops: "99"
            vram: 10Gi
          requests:
            tflops: "44"
            vram: 5Gi
```

## Monitor Scaling Status

### View GPU Resource Recommendations via TensorFusionWorkload Status

```yaml
status:
  conditions:
    # Reason for GPU resource recommendation
    - lastTransitionTime: '2025-10-09T09:16:46Z'
      message: TFLOPS scaled up due to (1) below lower bound (2)
      reason: OutOfEstimatedBound
      status: 'True'
      type: RecommendationProvided
  # Current GPU resource recommendations
  recommendation:
    limits:
      tflops: '13'
      vram: 1Gi
    requests:
      tflops: '13'
      vram: 1Gi
  # Number of replicas with applied GPU resource recommendations
  appliedRecommendedReplicas: 3
  # Currently active cron scaling rule
  activeCronScalingRule: <...>
```