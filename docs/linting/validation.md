# Validation

Validate your OAS file using [Spectral](https://github.com/stoplightio/spectral "Spectral website").

To install Spectral you will need [Node.js](https://nodejs.org/en/ "Node.js website") and a package manager ([npm](https://www.npmjs.com/ "npm website") or [Yarn](https://yarnpkg.com/ "Yarn website")).

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

- *`URL`* URL of an OpenAPI spec

If the file you want to lint is on your computer, you'll need to mount the directory where the file resides as a volume

```shell
docker run --rm -it -v $(pwd):/tmp stoplight/spectral lint "/tmp/file.yaml"
```

# Using Spectral

Once installed Spectral, you can validate an OAS file (in YAML or JSON format) according to a given set of rules.
Spectral has a predefined set of rules validating OpenAPI 3.x files.

Spectral comes with a CLI and can be run from your command line:

```shell
spectral lint <oas-file>
```

For more details about how to utilize Spectral CLI you can check the CLI built-in help:

```shell
spectral lint -h
```

or go to the official [Spectral documentation](https://stoplight.io/p/docs/gh/stoplightio/spectral/docs/guides/cli.md "Spectral website").

<RRead>

- [Spectral documentation](https://meta.stoplight.io/docs/spectral/README.md "Spectral docs")

</RRead>