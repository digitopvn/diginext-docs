---
sidebar_position: 3
---

# Architecture

This document provides a high level overview of Diginext's architecture.

## Diagram

![dx-architecture.png](/img/dx-architecture.png)

## Command Line Interface (CLI)

is the ***developer-friendly*** tool to help you communicate with the build server and also assists you in daily basis development tasks, such as `git` and `deploy` apps, etc.

:::info
👉 Learn more about `dx` [Command Line Interface (CLI)](/docs/cli/cli-usage)

:::

## Diginext Server (or Workspace Dashboard)

is where your app will be built and deployed to the destination clusters, and also is where you manage all of your cloud resources.

:::info
👉 Learn more about `dx` [Workspace Dashboard](/docs/dashboard/workspace)

:::

### Workspace

You can treat it as your **organization**. 

At the highest level, a workspace is a set of development tools and cloud resources, which your organization is managing. These resources can be Kubernetes clusters, git repositories, databases, storage buckets, or whatever else added into the DX ecosystem in the future.

## Login to your workspace

Examples: 

- `dx login http://localhost:6969`
- `dx login http://<workspace>.diginext.site` (replace `<workspace>` with yours, you can get this domain by create new workspace on my website - https://diginext.site)

Below is what happens in the background:

![Diginext_LoginAndCreateWorkspace.png](/img/Diginext_LoginAndCreateWorkspace.png)