---
outline: deep
---

# 查询原始监控指标和日志

**Under Construction**

默认情况下，TensorFusion部署时会包含GreptimeDB，您可以通过查询原始TSDB数据深入了解指标和日志。

```bash
kubectl port-forward -n tensor-fusion-sys svc/greptime 4000:4000
```

在浏览器中打开 `http://localhost:4000/dashboard`。

您可以使用以下SQL查询原始TSDB数据，所有表格和字段的文档可以在[这里](/reference/metrics)找到：

```sql
SELECT * FROM tensor_fusion_cluster;
```

示例输出：

<!-- ![](TODO) -->

注意：
如果您配置了GreptimeDB Cloud，可以直接从GreptimeDB Cloud控制台查询数据。

<!-- ![](TODO) -->