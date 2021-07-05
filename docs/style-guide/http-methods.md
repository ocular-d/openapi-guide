---
title: HTTP methods
description: List of commonly-used HTTP methods
meta:
  - name: "og:description"
    content: List of commonly used HTTP methods
  - name: keywords
    content: design API OAS OpenAPI documentation style guide methods http https
tags:
  - design
  - style
  - guide
  - API
  - OAS
  - openAPI
  - swagger
  - documentation
  - http
  - methods
  - https
---

<Header/>

---

All resources have a set of methods that they support and that allow to manage the data they expose.
Each method allows for a unique type of action on the data.

Especially REStful APIs consist of HTTP methods which have well-defined and unique actions
that allow CRUD operations against resources.

Here’s a list of commonly used HTTP methods
that define the CRUD operations for any resource or collection in a RESTful API.

| Method | Description |
| ------ | ---------- |
| GET    | Retrieve a representation of a resource                            |
| POST   | Create new resources and sub-resources                             |
| PUT    | Update existing resources by overwriting their entire content      |
| PATCH  | Update existing resources by only modifying a part of the resource |
| DELETE | Used to delete existing resources                                  |

:::tip Difference between PUT and PATCH
It's important to understand the nuances between these two methods, as they have different consequences on a resource's content.

- A `PUT` request will replace the entire content of the resource at the location
- A `PATCH` request, on the other hand, is used to make changes to a part of the resource at a location
:::
