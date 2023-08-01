---
sidebar_position: 2
---

# Server - With Kubernetes

Take one of these example Kubernetes deployment below.

## Example with Podman builder (RECOMMENDED)

```yaml
# NAMESPACE CONFIGURATION
apiVersion: v1
kind: Namespace
metadata:
  name: dx-server
---
# SERVICE CONFIGURATION
apiVersion: v1
kind: Service
metadata:
  name: dx-svc
  namespace: dx-server
spec:
  ports:
    - port: 6969
  selector:
    app: dx
---
# DEPLOYMENT CONFIGURATION
apiVersion: apps/v1
kind: Deployment
metadata:
  name: dx
  namespace: dx-server
spec:
  replicas: 1
  strategy:
    type: RollingUpdate
    rollingUpdate:
      maxSurge: 1
      maxUnavailable: 0
  selector:
    matchLabels:
      app: dx
  template:
    metadata:
      labels:
        app: dx
    spec:
      containers:
        - name: dx
          image: digitop/diginext-cli:latest
          ports:
            - containerPort: 6969
          securityContext:
            runAsUser: 1000
            runAsGroup: 1000
          env:
            - name: PORT
              value: "6969"
            - name: NODE_ENV
              value: production
            - name: CLI_MODE
              value: server
            - name: BASE_URL
              value: https://build.example.com
            - name: MONGODB_CONNECTION_STRING
              value: mongodb://...
            - name: JWT_SECRET
              value: # 64 random characters string
            - name: JWT_EXPIRE_TIME
              value: 48h
            - name: GOOGLE_CLIENT_ID
              value: ...
            - name: GOOGLE_CLIENT_SECRET
              value: ...
            - name: BUILDER
              value: podman
            - name: LOG_DIR
              value: /usr/diginext-cli/public/logs
          volumeMounts:
            - name: storage
              mountPath: /var/app/storage
            - name: logs
              mountPath: /usr/diginext-cli/public/logs
            - name: home
              mountPath: /root
      volumes:
        - name: storage
          hostPath:
            path: /home/dev/diginext-cli/storage
        - name: logs
          hostPath:
            path: /home/dev/diginext-cli/public/logs
        - name: home
          hostPath:
            path: /home/dev/diginext-cli/storage/home
```

## Example with Docker builder (NOT RECOMMEND)

```yaml
# SERVICE CONFIGURATION
apiVersion: v1
kind: Service
metadata:
  name: dx-svc
  namespace: dx-server
spec:
  # type: NodePort
  ports:
    - port: 6969
  selector:
    app: dx
---
# POD DEPLOYMENT CONFIGURATION
apiVersion: apps/v1
kind: Deployment
metadata:
  name: dx
  namespace: dx-server
spec:
  replicas: 3
  strategy:
    type: RollingUpdate
    rollingUpdate:
      maxSurge: 1
      maxUnavailable: 0
  selector:
    matchLabels:
      app: dx
  template:
    metadata:
      labels:
        app: dx
    spec:
      containers:
        - name: dx
          image: digitop/diginext-cli:latest
          ports:
            - containerPort: 6969
          securityContext:
						# THIS IS WHY I DON'T RECOMMEND!!!
            privileged: true
            runAsUser: 0 
          env:
            - name: PORT
              value: "6969"
            - name: NODE_ENV
              value: production
            - name: CLI_MODE
              value: server
            - name: BASE_URL
              value: https://your-domain.example
            - name: MONGODB_CONNECTION_STRING
              value: mongodb://...
            - name: JWT_SECRET
              value: # 64 random characters string
            - name: JWT_EXPIRE_TIME
              value: 48h
            - name: GOOGLE_CLIENT_ID
              value: ...
            - name: GOOGLE_CLIENT_SECRET
              value: ...
            - name: LOG_DIR
              value: /usr/diginext-cli/public/logs
            - name: BUILDER
              value: docker
          volumeMounts:
						# THIS IS WHY I DON'T RECOMMEND!!!
            - name: docker-sock
              mountPath: "/var/run/docker.sock"
            - name: storage
              mountPath: /var/app/storage
            - name: logs
              mountPath: /usr/diginext-cli/public/logs
            - name: home
              mountPath: /root
      volumes:
				# THIS IS WHY I DON'T RECOMMEND!!!
        - name: docker-sock
          hostPath:
            path: "/var/run/docker.sock"
        - name: storage
          hostPath:
            path: /home/dev/diginext-cli/storage
        - name: logs
          hostPath:
            path: /home/dev/diginext-cli/public/logs
        - name: home
          hostPath:
            path: /home/dev/diginext-cli/storage/home
```

### Why this is NOT RECOMMEND?

Take a look closely at the `securityContext` and `volumeMounts` of the deployment, you will see it’s mounting the `/var/run/docker.sock` at a host path into the container, then running it in `priviledged` mode with `root` user. **This is super dangerous!**

### You need to understand the security risk: [Security](/security.md)