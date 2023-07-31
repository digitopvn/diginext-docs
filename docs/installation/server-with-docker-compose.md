---
sidebar_position: 1
---

# Server - With Docker Compose

For simple installation, you usually like to spin up the Diginext build server with Docker / Docker Compose. 

**Diginext Build Server** provides 2 popular container engines - **Docker & Podman** - to help you build your container apps.

## Using Docker Engine as the builder

:::info
👉 This is the concept of [Docker-in-Docker](https://www.docker.com/blog/docker-can-now-run-within-docker/). Click on the link if you want to learn more.

:::

You can use the `docker-compose.example-docker.yaml` template which I provided in the repository, rename it to `docker-compose.docker.yaml` and modify some environment variables as the following instruction:

```yaml
version: "3"
networks:
    bridge:
        driver: bridge
services:
    mongo:
        ports:
            - '27017'
        container_name: mongo
        restart: always
        logging:
            options:
                max-size: 1g
        networks:
            - bridge
        environment:
            - MONGO_INITDB_ROOT_USERNAME=root
            - MONGO_INITDB_ROOT_PASSWORD=diginext
        image: mongo
        volumes:
            - ./storage/mongo:/data/db
    diginext:
        image: "digitop/diginext:latest"
        container_name: diginext
        working_dir: /usr/app/
        ports:
            - "6969:6969"
        restart: unless-stopped
        depends_on:
            - mongo
        networks:
            - bridge
        privileged: true
        entrypoint: /usr/app/scripts/startup.sh
        volumes:
            # DOCKER SOCK
            - "/var/run/docker.sock:/var/run/docker.sock"
            # CACHE NODE_MODULES & HOME DIR
            - /usr/app/node_modules/
            - /home/app/
            # HOST:CONTAINER
            - ./storage:/var/app/storage
        environment:
            - NODE_ENV=production
            - PORT=6969
            - BASE_URL=http://localhost:6969
            - MONGODB_CONNECTION_STRING=mongodb://root:diginext@mongo:27017/diginext?authSource=admin
            - CLI_MODE=server
            - BUILDER=docker
            - JWT_SECRET=
            - JWT_EXPIRE_TIME=48h
            - GOOGLE_CLIENT_ID=
            - GOOGLE_CLIENT_SECRET=
```

Now spin it up with this command:

```bash
docker compose -f docker-compose.dev.yaml up

# if everything is goingg well without any errors, you can kill the process and start it up again in background with
docker compose -f docker-compose.dev.yaml up -d
```

Your server should be ready at: http://localhost:6969 

Click on the link and check it out.

## Using Podman Engine

> *Podman-in-Docker*
> 

You can use the `docker-compose.example-podman.yaml` template which I provided in the repository, notice the differences in environment variables (`BUILDER=podman`) and some **security & capability limits** for the Diginext container:

```yaml
version: "3"
networks:
    bridge:
        driver: bridge
volumes:
    mongo:
        external: true
        name: mongo
services:
    # mongo database
    mongo:
        image: mongo
        container_name: mongo
        restart: always
        ports:
            - '27017'
        networks:
            - bridge
        logging:
            options:
                max-size: 1g
        volumes:
            - mongo:/data/db
        environment:
            - MONGO_INITDB_ROOT_USERNAME=root
            - MONGO_INITDB_ROOT_PASSWORD=diginext
    # build server
    diginext:
        image: digitop/diginext:beta
        container_name: diginext
        working_dir: /usr/app/
        ports:
            - "6969:6969"
        restart: unless-stopped
        networks:
            - bridge
        depends_on:
            - mongo
        # ----------- [START] FOR PODMAN TO RUN INSIDE DOCKER WITHOUT PRIVILEDGE MODE ----------
        devices:
            - "/dev/fuse"
        security_opt:
            - "seccomp=unconfined"
            - "label=disable"
        cap_add:
            - sys_admin
            - mknod
        # ----------- [END] FOR PODMAN TO RUN INSIDE DOCKER WITHOUT PRIVILEDGE MODE ----------
        volumes:
            # PERSIST NODE_MODULES & HOME DIR
            - /usr/app/node_modules/
            - /home/app/
            # HOST:CONTAINER
            - ./storage:/var/app/storage
        environment:
            - TZ=Asia/Ho_Chi_Minh
            - NODE_ENV=production
            - PORT=6969
            - BASE_URL=http://localhost:6969
            - MONGODB_CONNECTION_STRING=mongodb://root:diginext@mongo:27017/diginext-cli?authSource=admin
            - CLI_MODE=server
            - JWT_SECRET= # <--- insert here
            - JWT_EXPIRE_TIME=48h
            - GOOGLE_CLIENT_ID= # <--- insert here
            - GOOGLE_CLIENT_SECRET= # <--- insert here
            - BUILDER=podman # <---- select PODMAN as a main builder here
```

Similar with the above method, you can spin up your build server container with:

```yaml
docker compose -f docker-compose.dev.yaml up -d
```

Then access http://localhost:6969 to see if everything is up.

:::info
👉 I highly recommend using Podman as a builder instead of Docker due to security risk, read more about it here: [Security](https://www.notion.so/Security-51f72063bcd0461b93258af6d9459bb4?pvs=21)

:::

### Podman in Podman? RunC? Containerd?

Sorry, this is too much for me at the moment 😅  But I believe the concept should remain similar. 

Please feel free to contribute if you’re up to. 

:::info
🔎 For example: [Podman in Podman](https://www.redhat.com/sysadmin/podman-inside-container)

:::