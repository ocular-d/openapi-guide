---
id: quickstart
title: Quickstart
sidebar_label: Quickstart
sidebar_position: 2
description: OpenAPI Guide - Quickstart
---

OpenAPI guide in 5 minutes.

----

## Naming Conventions

Adopt a consistent naming convention in URIs.

- Use plural nouns for URIs that reference collections

```yaml
paths:
  /todos:
    get:
      summary: List Todos
```

## Endpoints

Nest the remaining endpoint info under the method.
The info must contain:

- Description
- Summary
- Tags
- operationId

```yaml
paths:
  /todos:
    get:
      summary: List Todos
      tags:
        - Info
      operationId: get-todos
      description: |-
        Returns a list of todos
```

### Description

```yaml {4-5}
paths:
  /todos:
    get:
      description: |-
        Returns a list of todos
```

Longer-form description of what the endpoints allow.
Good examples of what useful descriptions include:

✅ Give a human-friendly and understandable explanation

✅ Make it meaningful: focus on user benefits, not system implementation

✅ Why to use this endpoint or parameter

✅ Why would you prefer this over another (use cases)

✅ Any technical implementation details to keep in mind when using it?

:::info
Use Markdown to enhance the description
:::

Check the [detailed documentation about descriptions](../style/descriptions) for more info.

### Summary

```yaml {2}
get:
  summary: List Todos
```

Short title that is displayed in the nav bar of the documentation.

✅ Max 3 words

❌ Don’t repeat the verb of the HTTP method, make it meaningful. For example *Get* → *List*

### Tags

Assign a `tag` to each endpoint.

```yaml {5-6}
paths:
  /todos:
    get:
      summary: List Todos
      tags:
        - Info
      operationId: get-todos
```

Specify `description` and `externalDocs` at the root level.

```yaml
tags:
  - name: Info
    description: "A short and useful description"
    externalDocs: https://HERE-A-URL
```

### Operation ID

```yaml {7}
paths:
  /todos:
    get:
      summary: List Todos
      tags:
        - Info
      operationId: get-todos
      description: |-
        Returns a list of todos
```

✅ Must be unique

`operationId` is a unique string used to identify an operation.

## Error Handling

## Authentication and Authorization

## Versioning
