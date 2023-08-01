---
sidebar_position: 9
---

# Security

Diginext uses **Podman & Docker** container engine under the hood to build your applications.

## Why PODMAN over DOCKER?

For simple installation, we usually want to spin up the build server with **Docker / Docker Compose** or **Kubernetes**, this is the concept of [Docker-in-Docker](https://www.docker.com/blog/docker-can-now-run-within-docker/).

For your information, Docker Engine requires deamonset to build your image, therefore you need to run the container as `root` user with `privileged` mode & also mount `/var/run/docker.sock` volume into it. And that is **a bad idea** since it would lead to security risks (if you don't know this, [read here](https://www.trendmicro.com/en_us/research/19/l/why-running-a-privileged-container-in-docker-is-a-bad-idea.html)).

<aside>
👉 **Short explaination**
*The owner of the docker `/var/run/docker.sock` is `root` of the host where the container is running, with default group membership to `docker` group. That's why mounting `var/run/docker.sock` inside another container gives you root privileges since now you can do anything that a `root` user with group membership of `docker` can.*

</aside>

On the other hand, [Podman](https://podman.io/) is a **daemonless container engine** for developing, managing, and running OCI Containers. Containers can either be run as `root` or in `rootless` mode. Podman also has similar commands with Docker, so it would be simpler to implement into **Diginext**.

**Therefore, I would like to recommend using `BUILDER=podman` in the environment variables to use Podman as the container builder, instead of `docker`.**

## Trade off

There is a bit of a tradeoff when using Podman instead of Docker as a builder - **build speed**. You will notice a slightly increased build time when using Podman. However, I would accept this rather than face any potential risks in the future.

(…unless you’re totally understand what you’re doing).

## Disclaimers

Although I do understand this security issue clearly, after many hours and attempts, I still haven't had any success running the build server with PODMAN on Kubernetes at `rootless` mode.

:::info
🔎 This is what I’ve tried: ****[How to use Podman inside of Kubernetes](https://www.redhat.com/sysadmin/podman-inside-kubernetes)****

:::

In the current Kubernetes example, I still need `priviledged: true` is set in the YAML file, but don’t worry, you’re still safe, just don’t remove `runAsUser: 1000` setting.

:::info
👉 Wanna learn more why? Read [here](https://kubernetes.io/docs/tasks/configure-pod-container/security-context/).

:::

## Examples

[Server - With Docker Compose](https://www.notion.so/Server-With-Docker-Compose-2bba921180bb4f93a81d384f2d4f18a6?pvs=21) 

[Server - With Kubernetes](https://www.notion.so/Server-With-Kubernetes-fccf6dec5cf141a9ab81edb1c4e33c2f?pvs=21) 

## Wanna help?

If you have any experience of running `rootless` Podman on the Kubernetes without `priviledged` mode, and you want to give me a hand, PRs are truly welcome!