---
sidebar_position: 11
---

# Roadmap

At this stage, **Diginext** is at version `3.x.x` which I believe it’s quite stable, the next minor releases will be mostly bug fixes and small features.

### Update (April 20, 2023)

**Version `3.x.x`** has been released!

## VERSION 2.x.x (Done)

### Server

- [x]  Authentication
    - [x]  Google sign-in
    - [x]  JWT
    - [x]  Setup new workspace
    - [x]  Workspace API access token
    - [x]  Show access token when login with CLI
    - [x]  Logout
    - [x]  RBAC
- [x]  Dashboard
- [x]  Deployments
    - [x]  Build
        - [x]  Start
        - [x]  Stop
    - [x]  Deploy
        - [x]  From source code repo
        - [x]  From a build
        - [x]  Print deploy error/crash
        - [x]  Preview prerelease
        - [x]  Roll out production release
    - [x]  Projects & apps
        - [x]  Manage Projects
        - [x]  Manage Apps
        - [x]  Manage deploy environments
        - [x]  Manage environment variables
    - [x]  Releases
    - [x]  Builds
        - [x]  Build Logs
        - [x]  Build Real-time Logs
    - [x]  Take down
- [x]  Frameworks
    - [x]  CRUD
    - [x]  Seed first framework data when start a new server
- [x]  Git Providers
    - [x]  Bitbucket
    - [x]  Github
- [x]  Infrastructure
    - [x]  Cloud Providers
        - [x]  Google Cloud
        - [x]  Digital Ocean
        - [x]  Custom (bare-metal K8S)
        - [x]  Seed first data
    - [x]  Clusters
        - [x]  Google Cloud Kubernetes Cluster
        - [x]  Digital Ocean Kubernetes Cluster
        - [x]  Bare-metal Kubernetes Cluster (Custom Cluster)
        - [x]  Check NGINX & cert-manager installation
        - [x]  Restrict info to member
    - [x]  Container Registry
        - [x]  Google Container Registry
        - [x]  DigitalOcean Registry
        - [x]  Docker Registry
        - [x]  Restrict info to member
- [x]  Workspace
    - [x]  Users
        - [x]  Invite members
    - [x]  Roles & permisions
    - [x]  Settings
        - [x]  Restrict API_TOKEN info to member
        - [x]  API access token
        - [x]  Private/public workspace
- [x]  Open API (Swagger)

### CLI

- [x]  Project & app
    - [x]  `dx dotenv dowload`
    - [x]  `dx dotenv upload`
- [x]  Cluster helper command
    - [x]  Connect
- [x]  Container registry helper command
    - [x]  Connect
    - [x]  Create imagePullSecret
- [x]  Git command enhancement
    - [x]  Github
    - [x]  Bitbucket
- [x]  kubectl command enhancement
    - [x]  Set env variables
    - [x]  Set image to deployment

## VERSION 3.x.x (In progress)

### Server

**Refactor**

- [x]  Switch from `TypeORM` to `Mongoose` due to the lack of **MongoDB** support.
- [x]  Deploy:
    - [x]  Make `dx deploy` alias of `dx up`
    - [x]  Change build number to `version + incremental integer` (instead of datetime as current)
    - [x]  Not all projects have `package.json`
- [ ]  Security
    - [ ]  Scan & improve security of Diginext
    - [ ]  Consider integrate:
        - [ ]  https://socket.dev/
        - [ ]  https://www.sonarsource.com/
        - [ ]  [Docker Scout](https://docs.docker.com/scout/)
        - [ ]  ChatGPT Code Review
- [ ]  Add unit tests & integration tests
    - [x]  Server: Auth
    - [x]  Server: Container Registry
    - [x]  Server: Cluster
    - [x]  Server: Git Provider
    - [ ]  Server: Monitoring K8S
    - [ ]  Server: Deploy Environment
    - [ ]  Server: Database & Backups
    - [x]  CLI: auth
    - [x]  CLI: new
    - [x]  CLI: up
    - [x]  CLI: connect

**New features**

- [ ]  General
    - [ ]  OAuth refresh token
    - [x]  Email & password sign-in
    - [x]  Password sign-in
    - [ ]  User profile
    - [ ]  Service Account authentication
    - [ ]  `Deploy to Diginext` button *(in progress)*
    - [ ]  Search `CMD + K`
- [ ]  Dashboard with summary charts & statistics
    - [x]  General
        - [x]  Total projects
        - [x]  Total apps
        - [x]  Total deploy environments
        - [x]  Total clusters
        - [x]  Total container registries
        - [x]  Total frameworks
        - [x]  Total users
    - [ ]  Clusters *(in progress)*
        - [ ]  Namespaces
        - [ ]  Services
        - [ ]  Ingresses
        - [ ]  Deployments
        - [ ]  Pods
        - [ ]  Secrets
        - [ ]  ConfigMap
        - [ ]  Persistent Volumes
- [x]  Build list page
- [ ]  Projects & apps
    - [x]  Healthz
    - [x]  View application’s logs
    - [x]  Create app page *(done, testing)*
    - [x]  Import git repo → create app → deploy *(done, testing)*
    - [x]  View & edit app’s information (name, git,…)
    - [x]  Archive/unarchive apps *(done, testing)*
    - [ ]  Deployment YAML
        - [x]  View
        - [ ]  Modify
- [ ]  Deployment
    - [x]  Deploy page *(done, testing)*
    - [ ]  Release notes (collect from commit messages? Changelog?)
    - [ ]  Deploy → re-run *(done, testing)*
    - [ ]  Build → re-run *(done, testing)*
    - [x]  Manage app’s domains
    - [x]  Manage app’s scale replicas
    - [x]  Manage resource quotas of deploy environment
    - [ ]  Add/remove persistent volumes
    - [x]  Heath check
    - [x]  Monitor app’s logs
    - [x]  Deployment screenshots *(done, testing)*
    - [ ]  Duplicate project/app/environment
    - [x]  Change cluster *(done, testing)*
    - [x]  Change registry *(done, testing)*
    - [x]  Take down deploy environment *(done, testing)*
    - [x]  Sleep deploy environment *(done, testing)*
    - [x]  Awake deploy environment *(done, testing)*
    - [x]  Set rpm limit to ingress of dev environment (done, testing)
- [ ]  Environment Variables
    - [ ]  Secrets handling
    - [ ]  Workspace level
    - [ ]  Team level
    - [ ]  User level
    - [ ]  Project level
    - [ ]  App level
    - [x]  Deploy env level
- [ ]  Frameworks
    - [ ]  Count: usage, users,…
    - [ ]  Community frameworks
        - [ ]  Browsing
        - [ ]  Voting
        - [ ]  Comments
        - [ ]  Submission
- [ ]  Infrastructure
    - [ ]  Healthz
    - [ ]  Add more cloud providers supported:
        - [ ]  AWS
        - [ ]  Azure
    - [ ]  Git providers:
        - [ ]  Support Gitlab
        - [ ]  Integrate Webhooks API (for auto deploy on git “push” event)
    - [ ]  Container Registry
        - [ ]  Diginext Container Registry
        - [ ]  Github Container Registry
        - [ ]  Migrate GCR to Google Artifact Registry (GAR)
    - [ ]  Clusters
        - [ ]  AWS Elastic Kubernetes Service (EKS)
        - [ ]  Azure Kubernetes Service (AKS)
        - [ ]  Migrate added cluster’s deployments to projects & apps
        - [ ]  Cluster apps (install with **`helm`** or **`kubectl`**)
            - [ ]  CRUD
        - [ ]  Cluster App Marketplace: a collection of workloads that can be installed to your clusters on the flight (for example, databases, ingress, API gateways, log collectors,…)
            - [ ]  Collections (Diginext Site CRUD API)
    - [ ]  Cron Job
        - [ ]  CRUD cronjob *(in progress)*
        - [ ]  Select API in `swagger.json`
    - [ ]  Monitoring *(in progress)*
        - [ ]  Cluster statistics
        - [x]  Nodes
        - [ ]  Node pools
        - [ ]  Namespaces
            - [x]  List
            - [x]  All resources
            - [ ]  View YAML
            - [ ]  Edit YAML
            - [x]  Delete
        - [ ]  Ingresses
            - [x]  List
            - [ ]  Associated apps
            - [ ]  View YAML
            - [ ]  Edit YAML
            - [x]  Delete
        - [ ]  Services
            - [x]  List
            - [ ]  Associated apps
            - [ ]  View YAML
            - [ ]  Edit YAML
            - [x]  Delete
        - [ ]  StatefulSet
            - [ ]  List
            - [ ]  View YAML
            - [ ]  Edit YAML
            - [ ]  Delete
        - [ ]  Deployments
            - [x]  List
            - [ ]  Associated apps
            - [ ]  View YAML
            - [ ]  Edit YAML
            - [x]  Delete
            - [ ]  Restart
            - [ ]  Scale
            - [ ]  Auto-scale
        - [ ]  Pods
            - [x]  List
            - [ ]  Associated apps
            - [ ]  View YAML
            - [ ]  Edit YAML
            - [x]  Delete
        - [ ]  ConfigMaps
            - [ ]  List
            - [ ]  View YAML
            - [ ]  Edit YAML
            - [ ]  Delete
        - [ ]  Secrets
            - [ ]  List
            - [ ]  View YAML
            - [ ]  Edit YAML
            - [ ]  Delete
        - [ ]  Persistent Volumes
            - [ ]  List
            - [ ]  View YAML
            - [ ]  Edit YAML
            - [ ]  Delete
        - [ ]  Cert-Manager CRDs (ClusterIssuer, Issuer, Cert, Order, Challenge)
            - [ ]  List
            - [ ]  View YAML
            - [ ]  Edit YAML
            - [ ]  Delete
        - [ ]  Implement resource quotas analysis & recommendations (ref: https://github.com/robusta-dev/krr)
        - [ ]  Interactive container shell
    - [ ]  Databases *(in progress)*
        - [x]  CRUD & support these databases:
            - [x]  MongoDB
            - [x]  MySQL (MariaDB)
            - [x]  PostgreSQL
        - [x]  Healthz
        - [x]  Backups
        - [ ]  Auto backup *(done, testing)*
            - [ ]  Backup retention (7 days?)
        - [ ]  Restore from backups *(in progress)*
    - [ ]  Tracking & measure scripts
        - [ ]  Google Analytics / Google Tag Manager
        - [ ]  Meta Pixels
    - [ ]  Cloud Storages
        - [ ]  Google Cloud Storage
        - [ ]  DigitalOcean Space
        - [ ]  AWS S3
        - [ ]  Cloudinary
- [ ]  Workspace
    - [ ]  Activities
    - [ ]  Roles
        - [ ]  Create custom role
        - [ ]  Guest
            - [ ]  Access specific resources
    - [ ]  Teams
    - [ ]  Team's roles
        - [ ]  Override user’s roles (or invert?)
    - [ ]  Service Account
    - [ ]  Advanced roles & permissions
        - [ ]  Route specific
        - [ ]  Mask/invisible data
        - [ ]  Transfer admin
- [ ]  Notifications
    - [ ]  Badge icon
        - [ ]  Count
        - [ ]  Read
    - [ ]  Core
        - [ ]  System notifications
        - [x]  Email notifications
        - [ ]  Web push notifications
    - [x]  Webhook Events:
        - [x]  Build status: started, stopped, failed, suceed
        - [x]  Deploy status: success, failed

### CLI

**Refactor**

- [x]  Remove `dx.json` → use server app config (query by git url)

**New features**

- [ ]  Project & app
    - [ ]  `dx code`: pull an app git repo to local for development
    - [ ]  `dx fork`: create new app from a git repo URL 
    (seems similar with `dx init`?)
    - [ ]  `dx up --repo=...` deploy from a git repo
    - [ ]  Generate `Dockerfile` by ChatGPT API
- [x]  Migrate the Git provider (bitbucket to github)
    - [x]  `dx transfer` or `dx tf`
- [ ]  Deployment
    - [ ]  Deploy app to Cloud Compute instance with Docker Compose
    - [ ]  Support persistent volume
- [ ]  Git command enhancement
    - [ ]  Gitlab support
    - [x]  Migrate git provider of an app from one to another (eg. Bitbucket → Github) → `dx transfer` (alias `dx tf`
- [ ]  Health check commands
- [ ]  Cronjob helper commands
- [ ]  Cloud database helper commands
- [ ]  Cloud storage helper commands
- [ ]  Cloud compute helper commands
- [ ]  Tracking & measure helper commands
- [ ]  kubectl command enhancement
    
    `dx kb` → cluster → namespace → resource → action → key=value
    
    `dx kb set --cluster=abc -n=xyz --resource=ing --key=port --val=3000`
    
    -c, --cluster
    
    -n, --namespace
    
    -r, --resource
    
    - [ ]  Create: `create`
    - [ ]  Get: `get`
    - [ ]  Patch (update): `set`
    - [ ]  Delete: `del` (`rm`)
    - [ ]  Port forward: `forward`
- [ ]  Integrate with CI/CD platforms
    - [ ]  Github Actions
    - [ ]  Bitbucket Pipelines
    - [ ]  Circle CI
    - [ ]  Argo CD

# Next major versions

I have planned to add many more features to Diginext. The following is my schedule for the next major versions:

*(Nothing will be guaranteed, some will be re-scheduled, some will be added, even some will be removed, depends on how important it is to the community, I will be updating this page regularly, so please check back later if there are any features that concern you)*

If you want to help out or propose new features, check [Contributing](https://www.notion.so/Contributing-6affbb9a0e154c0c97b5e01bf076583e?pvs=21) 

## VERSION 4.x.x (Draft)

### Server

- [ ]  Apps & deployments
    - [ ]  Auto-pilot
    - [ ]  Cost analysis
- [ ]  Continuous Integration (CI)
    - [ ]  Pipeline automation workflow
    - [ ]  UI test
    - [ ]  Load test / stress test
    - [ ]  Security scan
    - [ ]  Git hooks
- [ ]  3rd party integration
    - [ ]  Plugins
    - [ ]  Google Drive
    - [ ]  Slack
    - [ ]  Discord
- [ ]  Manage domain providers
    - [ ]  Godaddy
- [ ]  Manage Email Sending Services
    - [ ]  SendGrid
    - [ ]  MailGun
- [ ]  Manage Cloud Compute
    - [ ]  Accessibility
    - [ ]  Install default packages
- [ ]  Manage Cloud Storage
    - [ ]  AWS
    - [ ]  Azure
- [ ]  Deploy
    - [ ]  To Cloud Compute with Docker Compose
- [ ]  Cluster
    - [ ]  Backup & restore
    - [ ]  Change node pool / specs
    - [ ]  Auto scale / auto pilot
- [ ]  Manage databases
    - [ ]  Analysis
    - [ ]  Query tool
    - [ ]  Migrations
        - [ ]  copy collection / table
        - [ ]  copy document / item

### CLI

- [ ]  Auto-pilot commands
- [ ]  Cloud resource monitoring commands
- [ ]  CI helper commands
- [ ]  Domain helper commands
- [ ]  Email helper commands

## From the author

Again, currently this is a one-man project. Although I have spent a lot of my free time developing it, with the large scope of work you can see above, the progress of releasing new versions has been slowing down…

> *I also want to spend more time with my wife & daughters, otherwise I would be kicked out of home, lol…*
> 

Therefore, I am looking for more contributors. If you think you can help out, please send me a direct message. I will explain everything in detail, so you can get started right away.