# Project Au Lait LP

This repository contains resources to build landing page of Project Au Lait.

## For Developers

The following are guidelines for developers implementing LP.

### Required Software

The following software is required to implement LP.

- Git
- Node.js
- pnpm
- VSCode

### Set Up Development Environment

To set up the LP development environment, run the following command.

```sh
git clone https://github.com/project-au-lait/project-au-lait.github.io.git
cd project-au-lait.github.io

pnpm install

code .
```

### Development Environment Usage

Start the development server and build the LP materials using the following commands.

```sh
# start development server to preview LP
pnpm dev

# build LP static resources to docs directory
pnpm build
```

The above command can also be run from a VSCode task.
