---
sidebar_position: 3
---

# Server - Manual installation

Alright, this is the most complicated way to spin up your build server, as you might need to install a lot of dependencies and spend more efford to secure your server.

However, for any reasons, or just for learning purpose, you still want to get the build server up this way… then ***suit up, folks! We've got a date with destiny!***

> Difficulty: **Advanced**
> 

## Dependencies

Here is the list of dependencies which you need to install on your server:

- Git
- Node.js (16+)
- Docker
    - Docker BuildX
- Podman
- OpenSSH
- kubectl
    - google-cloud-sdk-gke-gcloud-auth-plugin
- helm
- gcloud
- doctl

## Database

Diginext Server needs a database to store all of the cloud resources & activities, I used MongoDB, so you have to.

<aside>
👉 Install MongoDB: https://www.mongodb.com/docs/manual/installation/

</aside>

Well, if you don’t want to install the MongoDB, there are plenty of managed-MongoDB service options available out there for you:

- [MongoDB Atlas](https://www.mongodb.com/atlas/database)
- [Google Cloud MongoDB Atlas](https://cloud.google.com/mongodb)
- [Digital Ocean MongoDB on-demand](https://www.digitalocean.com/products/managed-databases-mongodb)
- [MongoDB Atlas on AWS](https://aws.amazon.com/vi/solutions/partners/mongodb-atlas/)
- [MongoDB on ScaleGrid](https://scalegrid.io/mongodb/)
- [MongoDB on IBM](https://www.ibm.com/cloud/databases-for-mongodb)

Just spin up one and you’re good to go.

Save the MongoDB connection string for later setup.

## Installation

Similar with the CLI, I already tried to simplize the installation steps as much as possible, you only need to install `dx` directly from NPM package manager with:

```bash
npm i @topgroup/diginext --location=global

# or with pnpm
pnpm add -g @topgroup/diginext

# or yarn
yarn global add @topgroup/diginext
```

## Configuration

The only required configuration for Diginext server is `MONGODB_CONNECTION_STRING` environment variable, copy your MongoDB connection string and set it up with:

```bash
export MONGODB_CONNECTION_STRING=<your-mongodb-connection-string>
```

There are more environment variables which you might want to customized, such as:

```bash
# default to 6969
DX_PORT=
# default to a random 64 characters string
DX_JWT_SECRET=
# default to 48h
DX_JWT_EXPIRE=
# default to empty
DX_GOOGLE_CLIENT_ID=
# default to empty
DX_GOOGLE_CLIENT_SECRET=
# default to "podman", another option: "docker"
DX_BUILDER=
```

*(*) These environment variables are located at a hidden directory named `.diginext` in your home directory.*

## Start the server

Now you can turn your build server on with:

```bash
dx server up
```

By default, the Diginext server runs on `http://127.0.0.1:6969`

You can set up domain access and SSL certificates on your own so that your team can connect to your server via the CLI or access the admin dashboard. However, this is beyond the scope of this manual.

## Secure your server

### RULE #01: Never run your server with `root` user!

### RULE #02: Trust nobody!

### RULE #03: Limiting access to your cloud resources

## Other setup

Check this out: [Configuration](https://www.notion.so/Configuration-d069c95f48404c19ae624cc20cf5314a?pvs=21) 

## Troubleshooting

(TBU)

## What’s next?

Learn more about [Command Line Interface (CLI)](https://www.notion.so/Command-Line-Interface-CLI-12d8c4a19afc4ac498d500edd67b6223?pvs=21)