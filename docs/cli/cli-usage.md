---
sidebar_position: 1
---

# CLI Installation & Usage

## Installation

The package is available on [npm](https://www.npmjs.com/package/@topgroup/diginext).

Install the CLI using `npm`, `pnpm`, `yarn` or `bun`:

```bash
npm install -g @topgroup/diginext
# OR
# pnpm install -g @topgroup/diginext
# yarn add -g @topgroup/diginext
# bun add -g @topgroup/diginext
```

Once installed, you can verify the installation by running:

```bash
dx --version
# OR
# dx -v
```

## Usage

```yaml
dx [commands] [subcommands] [--options]
```

### Examples

- You can use `dx` to deploy your app to DXUP clusters:

```bash
# Login to DXUP
$ dx login

# Deploy your app
$ dx up
```

- Start a DXUP server on your local machine:

```bash
$ export MONGODB_CONNECTION_STRING=...
$ dx server up
```

- Login to your DXUP server:

```bash
$ dx login https://localhost:6969
# OR
$ dx login <workspace-dashboard-url>
```

---

## CLI Commands

- [CLI Commands & Subcommands](/docs/cli/cli-docs)

---

### Learn more

- [Create or initialize app](/docs/cli/cli-learn-create-app)

- [App’s configuration](/docs/cli/cli-learn-config-app)

- [Build & deploy apps](/docs/cli/cli-learn-build-deploy)

- [Take down apps](/docs/cli/cli-learn-take-down)

- [Kubectl enhancement](/docs/cli/cli-learn-kubectl-enhancement)

- [Container registry utilities](/docs/cli/cli-learn-registry-helper)

- [Git enhancement](/docs/cli/cli-learn-git-enhancement)
