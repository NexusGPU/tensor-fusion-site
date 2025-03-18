---
outline: deep
---

# Query Raw TSDB Metrics & Logs

TensorFusion deployed with GreptimeDB by default, you can  deep dive to metrics and logs by query raw TSDB data.

```bash
kubectl port-forward -n tensor-fusion-sys svc/greptime 4000:4000
```

Open `http://localhost:4000/dashboard` in your browser.

You can query raw TSDB data by following SQL, all tables and fields are documented [here](/reference/metrics):

```sql
SELECT * FROM tensor_fusion_cluster;
```

Example output:

<!-- ![](TODO) -->

Note: 
If you configured GreptimeDB Cloud, you can query data from GreptimeDB Cloud Console directly.

<!-- ![](TODO) -->