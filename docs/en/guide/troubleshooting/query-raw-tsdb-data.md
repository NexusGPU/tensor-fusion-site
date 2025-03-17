---
outline: deep
---

# Query Raw TSDB Data

TensorFusion deployed with GreptimeDB by default, you can  deep dive to metrics and logs by query raw TSDB data.

```bash
kubectl port-forward -n tensor-fusion-sys svc/greptime 4001:4001
```

Open `http://localhost:4001/dashboard` in your browser.

You can query raw TSDB data by following SQL, all tables and fields are documented [here](/reference/metrics):

```sql
SELECT * FROM tensor_fusion_cluster;
```

Example output:

<!-- ![](TODO) -->

Note: 
If you configured GreptimeDB Cloud, you can query data from GreptimeDB Cloud Console directly.

<!-- ![](TODO) -->