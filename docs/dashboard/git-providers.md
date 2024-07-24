---
sidebar_position: 2
---

# Git Providers

For now, DXUP supports 2 git providers:

- Github
- Bitbucket

More will come in the [next major releases](https://www.notion.so/Roadmap-6a8266c2929c48ad8d4c11c954e9d852?pvs=21). 

:::info

👉 Wanne move fast? PRs are welcome.

:::

## Authenticate with your Git Providers

Assuming you are familiar with Git workflow and understand SSH keys, if not, [read here](https://docs.github.com/en/authentication/connecting-to-github-with-ssh/about-ssh). To pull and push to the Git repository, the keys on your machine have to match those in the Git provider's settings. The same applies to DXUP Server. In order to pull your git repositories for building container images, DXUP Server requires access to your repositories via SSH keys.

### 1. Using DXUP Server auto-generated public key

Access DXUP Dashboard and navigate to “Settings” tab, you will see a PUBLIC KEY, copy and add it to your git repository settings.

![Untitled](./img/Untitled.png)

That’s it, DXUP Server will now has permissions to pull your repositories for building apps.

### 2. Connect git providers with DXUP Server with access token

![Untitled](./img/Untitled.png)

DXUP only supports Github & Bitbucket integration at the moment, more to come in the future.

**With GITHUB:**

You will need a **Personal Access Token**, grab one by follow [this instruction](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens).

Navigate to **“Git Providers”** tab in your workspace dashboard and click on **“Connect”** button, select **“Github”**, finish that authentication steps and you are good to go:

![Untitled](./img/Untitled.png)

**With Bitbucket:**

You will need **App Password**, create one by follow [this instruction](https://support.atlassian.com/bitbucket-cloud/docs/app-passwords/).

Navigate to **“Git Providers”** tab in your workspace dashboard and click on **“Connect”** button, select **“Bitbucket”**, finish that authentication steps and you are good to go:

![Untitled](./img/Untitled.png)