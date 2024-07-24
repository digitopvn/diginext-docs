---
sidebar_position: 4
---

# Quick start

In this article, I will walk you through the very first experience with `dx`, let's get started!

## Sign in to your workspace

To interact with your workspace’s resources, such as deploying apps to your infrastructure, you will need to connect your CLI with the server by this command:

```bash
dx login <build-server-url>

# example
dx login http://localhost:6969
```

This would open a new tab on your browser and request for authentication, just follow the login steps and get the access token string, switch back to the command line to paste it in.

<aside>
💡 **Private Workspace**

When you create your first workspace, there will be an option to turn on the **private workspace**, if you don’t turn it on, your workspace will be **public** and everyone can have access to it.

For the **private workspace**, only the invited members can interact with the workspace’s resources.

You can have multiple teams and roles within your workspaces, this would let you give limited access to your members to every cloud resources, play around with these settings on the admin dashboard.

</aside>

Now let's login to our **public** workspace:

```bash
dx login https://hobby.diginext.site
```

**Notes:** this workspace is only intended for a *"hello world"* experience. Do not use it as a production server, as I cannot offer any SLA (Service Level Agreement) regarding the usage of resources. (Well, I may have one in the future, who knows, if I receive enough donations)

<aside>
💡 Learn more about workspaces, teams & members here

</aside>

## Create your first application

Dx allow you to create new web application from the boilerplate (just like **create**-**react**-**app** or **create**-**t3**-**app**), I called these boilerplates “Frameworks”, you can manage these frameworks in your workspace dashboard.

### `new` command

```jsx
dx new
```

Then follow the form to create your app, it will help setting up some pre-configurations, and register the app with your DXUP server for deployment later on.

- **Project name**: enter your project name, for example “My First Project”
- **App name**: since a project can have multiple apps, such as “frontend”, “backend” or “api”, let take “frontend” for example.
- **Git provider**:
- **Framework**:

<aside>
💡 Learn more about **[Projects & apps](https://www.notion.so/Projects-Apps-3b558c33b03c4ec1993537493350b097?pvs=21)** here

</aside>

## Initialize your application

Sometime you just want to register your source code with the DXUP server to deploy it, instead of creating a new one. That’s when you need to use the `init` command:

```bash
cd /path/to/your/source
dx init
```

Like the `new` command, you need to answer a few questions to register your app.

## Deploying app

Deploying apps with dx is simple, unlike other CI/CD tools, deployment with dx will be triggered manually by the developer:

```bash
dx deploy
```

By default, it will deploy your app to the `development` environment.

:::info
👉 Learn more about app’s [deploy environment](/docs/deployment/deploy-environment) here.

:::

Since this is the first time you deploy this app, you will need to answer a few questions, such as: *which container registry provider to store your app image, which cluster you want your app to be deployed on, which port of this app is using,…*

Let’s select as following:

- Cluster:
- Use our generated domain: YES
- Container Registry: Docker Hub
- Port: 80

After that, you will see a link that leads you to the build status page, click on that link you will see the build in progress. Once the build finish, you will see a link to view your web app, it’s also a generated domain which you’ve saw recently in the command line.

It would be something similar to this: `https://hello-world-web-app-ayx1.dev.diginext.site`

## Preview & roll out

Alright, in the previous step, you already deployed your “Hello World” web app to a `development` environment successfully. 

When you deploy to `production` environment, the process is going to be slightly different. Check out the following diagram:

![*Basically this is what happens when you deploy your app to production environment*](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/2d38ac79-ef53-4005-a367-4dfa426da987/ProductionDeploymentFlow.png)

*Basically this is what happens when you deploy your app to production environment*

As you can see, when deploying to production environment, after finish building, your app will be deploy on production environment right away, **BUT** it will not be visible to everyone and only stay in the closest environment to production, named `prerelease`.

### Prerelease Environment

- **New** build
- **Same** Kubernetes cluster
- **Same** Kubernetes namespace
- **Same** environment variables (which might also mean they are using the same database)
- **Different** Kubernetes deployment
- **Different** access URL endpoint

So basically the `prerelease` environment is the same with `production` environment.

The purpose of this workflow is to make sure you have the full test on your `production` app, without any bugs, errors, typo issues,… then you can confidently roll it out to the public when ready.

Now let’s deploy our Hello World app to production:

```bash
dx deploy --prod
```

Just like deploying to development, answers the form for the first time deployment and check out the build progress page. Once everything is finish, you will see the prerelease link: `https://hello-world-web-app-ayx1.prerelease.diginext.site`

To roll out this prerelease app to production, there are 2 ways:

1. With CLI: 
    
    `dx rollout <release-id>`
    
    Of course in real life, you wouldn’t want everyone in your team to roll out apps to production. Then you can set the rights to do that base on the roles in the Admin Dashboard.
    
2. With Admin Dashboard:
    
    Access your Workspace Dashboard, in this example, it will be: `https://hobby.diginext.site`
    
    Find your **project & app**, click to expand the `PROD` environment, click on the `Roll out` button and *Voilà!* your app is successfully rolled out & visible to everyone. If you’re using our generated domain, your web app URL would be something similar to this:
    
    `https://hello-world-web-app-ayx1.prod.diginext.site`
    

:::info
👉 Learn how to use your own domain for production environment here.

:::

## Monitoring

The Workspace Dashboard is where you can manage all of your cloud resources, including:

- Projects & Apps
- Deploy environment
- App’s deployments
- Kubernetes clusters
- Kubernetes namespaces
- Container registries
- Databases
- Users
- Teams
- Roles
- …

I guess it’s very straightforward and familiar with you guys already, so just play around with this to manage & monitor your own workspace.

That’s it, easy peasy, right?