---
sidebar_position: 4
---

# Command Line Interface (CLI)

is the ***developer-friendly*** tool to help you communicate with the build server and also assists you in daily basis development tasks, such as `git` and `deploy` apps, etc.

## Installation

Install the **Command Line Interface (CLI)** is simple & straightforward, you only need to install `Node.js` (16+), then install `dx` directly from NPM package library:

```bash
npm i @topgroup/diginext --location=global
```

That's it!

## Connect with Diginext server

To interact with your workspace’s resources, such as deploying apps for example, you will need to connect your CLI with the server with this command:

```bash
dx login <build-server-url>

# example
dx login http://localhost:6969
```

This would open a new tab on your browser and request for authentication, just follow the login steps and copy the access token string.

## Dependencies

It depends on the role you're playing, or the purpose that brings you here. You might need to install some dependency packages:

### Developers

- `git` is the only one package you should care.

### DevOps

Well, `dx` comes with a set of enhancement commands to help you interact with the infrastructure, so you will need to install:

- `kubectl`:
- If your infrastructure is provided by Google Cloud, install `gcloud`:
- If your infrastructure is provided by Digital Ocean, install `doctl`:
- If you want to use `helm` enhancement commands, install `helm`:
- If you want to build the container on your machine, install `docker` or `podman`

## What you can do with `dx`?

Find out here: [Command Line Interface (CLI)](https://www.notion.so/Command-Line-Interface-CLI-9a7cb013548e485582c002658822f8e4?pvs=21) 

## What’s next?

Check out the [Quick start](https://www.notion.so/Quick-start-d4e78e0e8ee141cf85585d2a27280396?pvs=21)