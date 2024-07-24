---
sidebar_position: 3
---

# Clusters

At the moment, `dx` supports these Kubernetes cluster providers:

- Google Kubernetes Engine (GKE)
- Digital Ocean Managed-Kubernetes (DOK)
- Bare-metal Kubernetes Cluster (operated with Rancher K3S or MicroK8S)

Don’t see your Kubernetes cluster provider? Check out my [Roadmap](https://www.notion.so/Roadmap-6a8266c2929c48ad8d4c11c954e9d852?pvs=21) 

## Add a GKE cluster to your workspace

DXUP needs authorization with a Gcloud Service Account to access your Kubernetes cluster.

## Add a DOK cluster to your workspace

In order to deploy apps to DOK clusters, DXUP requires access to it with Digital Ocean API access token.

## Add a bare metal Kubernetes cluster to your workspace

In DXUP, the only way to access a bare metal K8S cluster is through the **kubeconfig**.