---
sidebar_position: 6
---

# Releases

When the builds are success, it will be converted to Releases before deploying.

So Releases are quite similar to builds, with some additional information such as:

- Roll out time
- Author of the release
- The generated Kubernetes YAML files

Think of it like a snapshot of your app’s deployment, so when you want to roll back to any versions, you only need to select one release and roll it out.

### Lifecycle

- Undeployed
- Deploying
- Healthy
- Partial healthy
- Failed
- Crashed
- Unknown