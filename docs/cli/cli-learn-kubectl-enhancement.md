---
sidebar_position: 7
---

# Kubectl command enhancement

## Service

(TBU)

## Ingress

(TBU)

## Deployment

- Update `image` of all containers of a deployment:
    
    ```bash
    dx kb set deploy
    # [1] select cluster
    # [2] select namespace
    # [3] select deployment
    # [4] select propery: "image"
    # [5] input the new image's URL
    ```
    
- Update `port` of all containers of a deployment:
    
    ```bash
    dx kb set deploy
    # [1] select cluster
    # [2] select namespace
    # [3] select deployment
    # [4] select propery: "port"
    # [5] input the new port number
    ```
    
- Update `imagePullSecrets` of a deployment:
    
    ```bash
    dx kb set deploy
    # [1] select cluster
    # [2] select namespace
    # [3] select deployment
    # [4] select propery: "imagePullSecrets"
    # [5] input the new secret name
    ```