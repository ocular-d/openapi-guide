---
title: Continuous Integration
description: Use CI/CD, such as GutHub Actions, to validate APIs with tools like Spectral
meta:
  - name: "og:description"
    content: Use CI/CD, such as GutHub Actions, to validate APIs with tools like Spectral
  - name: keywords
    content: Use CI/CD, such as GutHub Actions, to validate APIs with tools like Spectral
tags:
  - OpenAPI
  - OAS
  - design
  - style
  - guide
---

<Header/>

---

You can use CI/CD, such as GutHub Actions, to validate APIs with tools like Spectral.

## GitHub Action

[This action](https://github.com/stoplightio/spectral-action) uses [Spectral](https://github.com/stoplightio/spectral) from [Stoplight](https://stoplight.io/) to lint your OpenAPI documents, or any other JSON/YAML files.

## Configuration

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
