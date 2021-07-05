---
title: How-To tutorials
description: Learn why tutorials are a valuable resource and play a key role in how users experience your API
meta:
  - name: "og:description"
    content: Learn why tutorials are a valuable resource and play a key role in how users experience your API
  - name: keywords
    content: design API OAS OpenAPI documentation tutorials how-to
tags:
  - design
  - style
  - guide
  - API
  - OAS
  - openAPI
  - swagger
  - documentation
  - tutorials
  - how-to
---

<Header/>

---

Tutorials are similar to getting started guides, but with the goal of making it easy to perform a particular use case.
You can create a tutorial folder, and add more articles to it covering extra topics as questions come in.

For example, things like pagination are somewhat covered in API reference documentation.
Maybe a query string parameter exists like `?page=1` or `?cursor=s24dfkjfhkdf`, and whilst some developers might understand that, many won't.

A tutorial for how pagination works for your API is a great place
to explain why you chose your specific pagination approach of the many that exist,
and explain how your users should interact with it. For example, Slack and Stripe do a great job at that.

Other common tutorials are "Common Errors" which explain how your error objects work,
what [common status codes](../style-guide/status-codes.md) mean,
that you don't need to document `500`, `501`, `502` on every single operation,
and any other useful information that can help users troubleshoot their experience.
