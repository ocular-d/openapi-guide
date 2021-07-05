---
title: Continuous Integration
description: Use CI/CD tools, such as GitHub Actions, to validate your APIs
meta:
  - name: "og:description"
    content: Use CI/CD tools, such as GitHub Actions, to validate your APIs
  - name: keywords
    content: design API OAS OpenAPI documentation style guide tools spectral github actions rulesets CI CD continuous integration
tags:
  - design
  - style
  - guide
  - API
  - OAS
  - openAPI
  - swagger
  - documentation
  - linting
  - CI
  - CD
  - continuous
  - integration
  - tools
  - spectral
  - github
  - actions
---

<Header/>

---

You can use CI/CD tools, such as GutHub Actions, to validate APIs with tools like Spectral.

[This action](https://github.com/stoplightio/spectral-action) uses [Spectral](https://github.com/stoplightio/spectral) from [Stoplight](https://stoplight.io/) to lint your OpenAPI documents, or any other JSON/YAML files.

### Configuration

By default, Spectral Action will follow the [Spectral Rulesets](https://meta.stoplight.io/docs/spectral/docs/getting-started/3-rulesets.md).
You can override default rulesets with your custom ruleset
by placing a file ending in `.spectral.yml` in the root of your repository and adding it to the config file.

### Usage

See [action.yml](https://github.com/stoplightio/spectral-action/blob/master/action.yml)

```yaml
name: Run Spectral on Pull Requests

on:
  - pull_request

jobs:
  build:
    name: Run Spectral
    runs-on: ubuntu-latest
    steps:
      # Check out the repository
      - uses: actions/checkout@v2

      # Run Spectral
      - uses: stoplightio/spectral-action@v0.7.3
        with:
          file_glob: 'doc/api/*.yaml'
          spectral_ruleset: 'doc/api/custom-ruleset.spectral.yaml'
```

- **file_glob:** Pattern describing the set of files to lint. Defaults to `*.oas.{json,yml,yaml}`. (_Note:_ Pattern syntax is documented in the [fast-glob](https://www.npmjs.com/package/fast-glob) package documentation)
- **spectral_ruleset:** Optional custom ruleset to load in Spectral. The file must end in `.spectral.yml`. When not defined, the default Spectral ruleset will be loaded.

<RRead>

- [Spectral Action](https://github.com/stoplightio/spectral-action)
- [Spectral](https://github.com/stoplightio/spectral)

</RRead>
