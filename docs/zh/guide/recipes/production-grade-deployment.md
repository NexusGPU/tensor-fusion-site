
# 生产环境高可用部署

## Change Replicas

--replicas=2

## Using High Available GreptimeDB

- Using GreptimeDB Operator
- Switch to Cloud GreptimeDB

Upgrade with custom values

```yaml
greptime:
  isCloud: true
  installStandalone: false
  host: <db-instance>.us-west-2.aws.greptime.cloud
  user: username
  db: db-id-public
  password: your-own-password
  port: 5001
```

## Preserve Enough Disk Space

Disk space is critical for VRAM expansion and tiering, and also for GPU hot-migration.

## High-Speed Network

Considering switch to higher speed and low-latency network, such as AWS EFA, for heavy workloads to get better performance, especially when you have lots of remote GPU sharing workloads.

## Configure More Conservative AutoScaling Policies

### GPU Node autoscaling parameters

### AI Workload autoscaling parameters