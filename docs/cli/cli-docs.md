---
sidebar_position: 2
---

# CLI Documentation

## `server`

Sub-commands:

- `up`
- `down`

## `login`

Usage: `dx login <your-workspace-url>`

## `logout`

Usage: `dx logout`

## `new`

Start new application from a starter framework.

Usage: `dx new`

## `init`

Initialize app at a current working directory.

Usage: `dx init`

## `git`

Sub-commands:

- `login` - login to your git provider
    
    Usage:
    
    - `dx git login` - Login to the git provider of current working directory, if there is no git providers detected, Github will be selected as default.
    - `dx git login --github` - Authenticate `dx` CLI with Github
    - `dx git login --bitbucket` - Authenticate `dx` CLI with Bitbucket
- `logout` - logout from all git providers
- `pr` - create new pull request, alias `pullrequest`
    
    Usage: 
    
    - `dx git pr` - create a pull request to `main` branch
    - `dx git pr <destination-branch>` - create a pull request from current branch to destination branch
    - `dx git pr <from-branch> <to-branch>` - create a pull request from a branch to another

## `domain`

Sub-commands: 

- 

## `registry`

Sub-commands:

- 

## `cluster`

Sub-commands:

- 

## `db`

Sub-commands:

- 

## `kb`

Sub-commands:

- 

## `build`

Build and push current working app to the container registry from your computer.

## `run`

Build and deploy current working app to deploy environment from your computer.

## `deploy`

Request the Diginext Server to build and deploy current working app to deploy environment.

## `rollout`

Roll out a release to production environment.

## `down`

Take down an application from its deploy environment.

## `dotenv`

Sub-commands:

- 

## `free`

Free up your build server by cleaning up build cache and redundant container images.

## `update`

Update the `dx` CLI to latest version.

## `version`

Print the current version of Diginext

## `help`