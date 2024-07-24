---
sidebar_position: 3
---

# Development Workflow

# First thing first

Fork these repos:

- [DXUP (Server & CLI)](https://github.com/digitopvn/diginext)
- [DXUP Dashboard (Admin UI)](https://github.com/digitopvn/diginext-admin)
- [DXUP Documentation](https://github.com/digitopvn/diginext-docs)

# With Docker Compose

The fastest way to start developing DXUP is using Docker Compose, since mostly everything (like developer tools) is pre-installed and pre-configurated inside the container images.

You can use this example `docker-compose.dev.example.yaml`

```yaml
version: "3"
networks:
    bridge:
        driver: bridge
volumes:
		mongo:
    home:
    node:
services:
    mongo:
        ports:
            - '27017:27017'
        container_name: mongo
        restart: always
        logging:
            driver: none
        networks:
            - bridge
        environment:
            - MONGO_INITDB_ROOT_USERNAME=root
            - MONGO_INITDB_ROOT_PASSWORD=diginext
        image: mongo
        volumes:
            - mongo:/data/db
    diginext:
        container_name: diginext
        build:
            context: .
            dockerfile: Dockerfile.dev
        working_dir: /usr/app/
        ports:
            - "6969:6969"
        networks:
            - bridge
        entrypoint: /usr/app/scripts/startup-dev.sh
        volumes:
            # docker.sock -> comment this out if you're using PODMAN
            - "/var/run/docker.sock:/var/run/docker.sock"
            # Persist NODE_MODULES & HOME DIR with named Docker volume
            - node:/usr/app/node_modules/
            - home:/home/app/
            # Persist data with host path -> HOST:CONTAINER
            - ./src:/usr/app/src
            - ./public:/usr/app/public
            - ./storage:/var/app/storage
            - ./scripts:/usr/app/scripts
        environment:
            - NODE_ENV=development
            - PORT=6969
            - BASE_URL=http://localhost:6969
            - MONGODB_CONNECTION_STRING=mongodb://root:diginext@mongo:27017/diginext?authSource=admin
            - CLI_MODE=server
            - JWT_SECRET=
            - JWT_EXPIRE_TIME=48h
            - GOOGLE_CLIENT_ID=
            - GOOGLE_CLIENT_SECRET=
```

Start your development environment with: `docker compose -f docker-compose.dev.yaml up --attach diginext`

Check out your server endpoint at: http://localhost:6969 

# Manual

Developing inside a Docker Container environment sometime consumes a lot of your computer’s resources, or you just simply want to get started from scratch. 

There you go:

> *I use `pnpm` instead of `npm` because I find it a bit faster. Therefore, I recommend that you also use `pnpm`, especially since I have set up some scripts in `package.json` that utilize `pnpm`.*
> 

## DXUP Server & CLI

After cloning `[digitopvn/diginext](https://github.com/digitopvn/diginext)`, run `npm install` to fetch its dependencies. Then, you can run several commands:

1. `npm run dev` runs DXUP Server locally, the Dashboard UI should be: http://localhost:6969 
2. `npm run lint` checks the code style.
3. `npm run build` to build the TypeScript to JavaScript at `dist/` and link the current directory to global `node_modules`, so you can test your CLI commands locally.

### Development Tools

- Git
- Node.js (16+)
- Docker
    - Docker BuildX
- Podman
- OpenSSH
- kubectl
- gcloud
    - google-cloud-sdk-gke-gcloud-auth-plugin
- doctl
- helm

## Workspace Dashboard

The repository of workspace dashboard is located at `[digitopvn/diginext-admin](https://github.com/digitopvn/diginext-admin)`, clone it to your computer and place at the same level of the DXUP Server source code. 

For example:

```bash
- **diginext/**
    - src/
    - dist/
    - public/
    - …
- **diginext-admin/**
    - src/
    - pages/
    - …
```

Run `npm install` and `npm run dev` to start development, your dev link should be http://localhost:3000 

1. `npm run dev` runs Workspace Dashboard website locally.
2. `npm run lint` checks the code style.
3. `npm run export:cli` to export Workspace Dashboard to static HTML files and copy to `../diginext/public` directory