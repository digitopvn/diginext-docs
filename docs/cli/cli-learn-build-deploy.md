---
sidebar_position: 5
---

# Build & deploy apps

- Request DXUP Server to build the application & push that image to the Container Registry (**It won't deploy the app**):
    
    ```bash
    dx build
    
    # options
    dx build --registry=<registry-slug>
    dx build --image=<image_url>:<image_tag>
    ```
    
- Deploy your web app to **DEV environment**:
    
    ```bash
    dx up
    # is equalivent with
    dx up --dev
    ```
    
- Deploy to **PRODUCTION environment**:
    
    ```bash
    dx up --prod
    
    # to any other clusters
    dx up --prod --select-cluster
    
    ```
    
    (*) **Notes: new deployment of PROD environment will not be rolled out immediately like other environments.**
    
    After the build process finished, access [DXUP Workspace](https://hobby.diginext.site/) to preview the deployment, if everything is okay, you can process ROLLING OUT within the Admin UI.
    
- Deploy to **custom enviroments**:
    
    ```bash
    dx up --env=canary
    ```