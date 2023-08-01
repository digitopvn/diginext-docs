---
sidebar_position: 5
---

# Pull Requests

## Your First Pull Request

Working on your first Pull Request? You can learn how from this free video series:

[How to Contribute to an Open Source Project on GitHub](https://egghead.io/courses/how-to-contribute-to-an-open-source-project-on-github)

To help you get your feet wet and get you familiar with our contribution process, we have a list of [good first issues](https://github.com/digitopvn/diginext/issues?q=is%3Aissue+is%3Aopen+label%3A%22good+first+issue%22) that contain bugs or small features that have a relatively limited scope. This is a great place to get started.

If you decide to fix an issue, please be sure to check the comment thread in case somebody is already working on a fix. If nobody is working on it at the moment, please leave a comment stating that you intend to work on it so other people don't accidentally duplicate your effort.

If somebody claims an issue but doesn't follow up for more than two weeks, it's fine to take over it but you should still leave a comment.

## Sending a Pull Request

The core team is monitoring for pull requests. We will review your pull request and either merge it, request changes to it, or close it with an explanation.

**Before submitting a pull request**, please make sure the following is done:

1. Fork the repository and create your branch from the [correct branch](notion://www.notion.so/Contributing-6affbb9a0e154c0c97b5e01bf076583e#branch-organization).
2. Run `npm install` in the repository root.
    
    > For Windows 10 development environment, if you run into error gyp err! find vs msvs_version not set from command line or npm config, please install the latest Python v3 and Desktop development with C++ through Visual Studio Installer before running npm install
    > 
3. If you've fixed a bug or added code that should be tested, add tests!
4. Ensure the test suite passes (npm run test). Tip: `npm test -- --watch TestName` is helpful in development.
5. Run `npm test -- -u` to update the [jest snapshots](http://facebook.github.io/jest/docs/en/snapshot-testing.html#snapshot-testing-with-jest) and commit these changes as well (if there are any updates).
6. Ensure the UI change passes `npm run test-image`，Run `npm run test-image -- -u` to update UI snapshots and commit these changes as well (if there are any updates), **UI test base on [Docker](https://docs.docker.com/get-docker/), need download the corresponding installation according to the platform**
7. Make sure your code lints (npm run lint). Tip: Lint runs automatically when you `git commit` (Use [Git Hooks](https://git-scm.com/book/en/v2/Customizing-Git-Git-Hooks)).

### Sending a Pull Request to **Diginext Workspace Dashboard**:

The source code of Workspace Dashboard is located at [this repo](https://github.com/digitopvn/diginext-admin).

- **If it's a bugfix pull request**, after it's merged, the core team will release a patch release for that as soon as possible, then you only need to reinstall Diginext (DX) or (update the new build if you are using Docker/Kubernetes) get the latest patch release.
- **If it's a feature pull request**, after it's merged, the core team will release a minor release, then you need raise another pull request to [Diginext](https://github.com/digitopvn/diginext/) to update dependencies, document and TypeScript interfaces (if needed).

### Sending a Pull Request to **Diginext Documentation**:

The source code of Diginext Documentation is located at [this repo](https://github.com/digitopvn/diginext-docs).

