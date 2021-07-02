---
title: Validate your API with Spectral
description: Validating APIs with Spectral
meta:
  - name: "og:description"
    content: OpenAPI design and style guide introduction
  - name: keywords
    content: OpenAPI design and style guide introduction
tags:
  - OpenAPI
  - OAS
  - design
  - style
  - guide
---

<Header/>

---

[Spectral](https://github.com/stoplightio/spectral "Spectral website") is an open source JSON and YAML linter developed by Stoplight,
which makes it great to validate your API documentation.

Spectral is available through common package managers and as a Docker image.

## Requirements

To install spectral, you will need:

- [Node.js](https://nodejs.org/en/ "Node.js website")
- a package manager like [npm](https://www.npmjs.com/ "npm website") or [Yarn](https://yarnpkg.com/ "Yarn website").

## Install Spectral

:::: tabs type:card
::: tab npm

```shell
npm install -g @stoplight/spectral
```

:::

::: tab Yarn

```shell
yarn global add @stoplight/spectral
```

:::
::::

## Docker

Spectral is also available as a [Docker](https://www.docker.com/ "Docker website") image.

```shell
docker run --rm -it stoplight/spectral lint URL
```

- *`URL`* URL of your OpenAPI spec

If the file you want to lint is on your computer,
mount the directory where the file resides as a volume and point the URL variable to it.

```shell
docker run --rm -it -v $(pwd):/tmp stoplight/spectral lint "/tmp/file.yaml"
```

## Using Spectral

After installing Spectral, you can validate an OAS file (in YAML or JSON format) according to a given set of rules.

Spectral has a predefined set of rules validating OpenAPI 3.x files.
It also comes with a CLI and can be run from your command line:

```shell
spectral lint <oas-file>
```

For more details about how to use Spectral CLI you can check the CLI built-in help
or go to the official [Spectral documentation](https://stoplight.io/p/docs/gh/stoplightio/spectral/docs/guides/cli.md "Spectral website"):

```shell
spectral lint -h
```

<RRead>

- [Spectral documentation](https://meta.stoplight.io/docs/spectral/README.md "Spectral docs")

</RRead>
