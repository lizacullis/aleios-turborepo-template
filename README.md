# Aleios Stress Testing

This is an official aleios Turborepo template! It has all the cool features turborepo as to offer, but also has all our favorite tools and plugins we know and love!

# Using this template

## What can you delete to use this template with little clutter?

If you want to use this template, you can safely delete the following files/folders which were used for example purposes.

- The `apps/` folder
  - This is used to demonstrate where you should build the bulk of your application.
- The `packages/example-package` folder
  - This is an example package to demonstrate how to set up tests etc.

## Repo Overview

### What has been set up

- [TypeScript](https://www.typescriptlang.org/) for static type checking
  - A [typescript-config](./packages/typescript-config/) package has been created.
  - This is one place where all general typescript config can be configured, and then imported into other packages
  - Have a look at the [example-package](./packages/example-package/) for how this is done.
- [ESLint](https://eslint.org/) for code linting
  - A [eslint-config](./packages/eslint-config/) package has been created.
  - This is one place where all general eslint config can be configured, and then imported into other packages
  - Have a look at the [example-package](./packages/example-package/) for how this is done.
- [Prettier](https://prettier.io) for code formatting
- [Husky](https://typicode.github.io/husky/) for our git hooks:
  - Pre-commit: will lint your code
  - commit-msg: will fix up your commit messages
- [Github Workflows](./.github) to integrate with Github's pipelines.

## Features

### Github workflows

We have added 3 base github workflows.

1. On PR:
   - Lint the project
   - Run unit tests
   - Deploy a version of your stack based on the PR number.
2. PR Closed:
   - This workflow will teardown the stack that was created when the PR was opened.
3. Push Main:
   - Lint the project
   - Run unit tests
   - Deploy to staging
   - Run integration tests

---

### Commit Hooks

We have implemented two Husky commit hooks.

1. Commit Message Hook:
   - This will check that your commit message adheres to the standard.
     - It will make sure that prefixes are used, have a look [here](./.commitlintrc) for the config.
2. Pre-Commit Hook:
   - This will run a lint-fix on all the files that have been changed. This is to ensure that our code formatting is consistent.
