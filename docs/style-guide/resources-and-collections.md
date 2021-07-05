---
title: Resources, collections, URLs
description: Learn what resources and collections are, how to design them, and how they're different from each other
meta:
  - name: "og:description"
    content: Learn what resources and collections are, how to design them, and how they're different from each other
  - name: keywords
    content: resources collections URLs design API OAS OpenAPI documentation naming style guide
tags:
  - design
  - style
  - guide
  - API
  - OAS
  - openAPI
  - swagger
  - UX
  - documentation
  - naming
  - resources
  - collections
  - URLs
---

<Header/>

---

## Resources

A resource is an object that’s important enough to be referenced in itself.

A resource has data, relationships to other resources, and methods that operate against it to allow for accessing and manipulating the associated information.
A group of resources is called a collection.

## Collections

The contents of collections and resources depend on your organizational and consumer requirements.
If, for example, you believe the market will benefit from obtaining basic information about your product’s user base, then you could expose this as a collection or resource.

A Uniform Resource Locator (URL) identifies the online location of a resource.
This URL points to the location where your API’s resources exist.
The base URL is the consistent part of this location.

In the case of a photo sharing app, one could expose data about the users who use the app through collections and resources, accessed by the appropriate URL.

`/users`: a collection of users

`/users/username1`: a resource with information about a specific user

## URLs

The base URL should be neat, elegant, and clean so that developers using your product can effortless use them in their web applications.
A long and difficult-to-read base URL is not only bad to look at, but can also be prone to mistakes when trying to recode it.
Nouns should always be trusted.

Keeping these nouns self-explanatory helps developers understand the kind of resource described from the URL,
which can eventually enable them to become self-sufficient while working with your API.

Imagine a photo sharing app, say it has a public API with /users and /photos as collections.
Notice how they’re all plural nouns?

They’re also self-explanatory, and you can infer that /users and /photos gives information about the product’s registered user base, and shared photos respectively.

|Cool|Not so cool|
|-|-|
|`/products`|`/getAllProducts`|

## Plural naming

There’s no rule on keeping the resource nouns singular or plural, though it is advisable to keep collections plural.
Having the same plurality across all resources and collections respectively for consistency is good practice.
