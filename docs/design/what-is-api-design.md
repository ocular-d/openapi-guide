---
title: What is API design
description: Learn what design means, when applied to APIs
sidebarDepth: 2
meta:
  - name: "og:description"
    content: Learn what design means, when applied to APIs
  - name: keywords
    content: design style guide what is api features UX documentation
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
---

<Header/>

---

Designing something involves adopting processes and practices that put users at the center.
As such, designing APIs means considering that they're used by humans.

Even if there is not a single approach to design APIs “the right way",
your design will influences how well developers and systems can consume the API and even how they use it.

Let's look at the features of a well-designed API:

<!-- markdownlint-disable -->
<!--alex disable easy-->

- It focuses on its users
- It meets initial expectations and continues to behave consistently and predictably
- It's easy to work with. This means that its resources and operations are relatable and can be memorized
- It's hard to misuse. This means that implementing and integrating with an API with good design will be a straightforward process, and writing incorrect code will be a less likely outcome. It has informative feedback, and doesn’t enforce strict guidelines on the API’s end consumer
- It's complete and concise. A complete API will make it possible for developers
to create full-fledged applications that use the data you expose.
Completeness is a goal, not a starting point.
However, it should be a milestone that is considered from the beginning and that every API contributor strives towards

## Features of a pragmatic RESTful API

<!-- markdownlint-enable -->

[Source](https://www.vinaysahni.com/best-practices-for-a-pragmatic-restful-api "Best Practices for Designing a Pragmatic RESTful API by Vinay Sahni")

Many of the API design opinions found on the web are academic discussions revolving around subjective interpretations of fuzzy standards as opposed to what makes sense in the real world.

- It should use web standards where they make sense
- It should be friendly to the developer and be explorable via a browser address bar
- It should be understandable, intuitive and consistent to make adoption not only easy but pleasant
- It should provide enough flexibility to power majority of the Enchant UI
- It should be efficient, while maintaining balance with the other requirements
- An API is a developer's UI - like any UI, it's important to ensure the user's experience is thought out

<!--alex enable easy-->

## Public vs Internal vs System

- A good public and internal API focuses on: Functionality, usability and creating a nice user experience
- A good system API focuses on: Functionality and usability

<!-- markdownlint-disable -->

<RRead>

- [Microsoft](https://docs.microsoft.com/en-us/azure/architecture/best-practices/api-design)
- [Vinay Sahni](https://www.vinaysahni.com/)
- [Red Hat](https://www.redhat.com/en/topics/api/what-is-api-design)
- [REST API Design - Resource Modeling](https://www.thoughtworks.com/insights/blog/rest-api-design-resource-modeling)
- [Richardson Maturity Model](https://martinfowler.com/articles/richardsonMaturityModel.html)

</RRead>

<!-- markdownlint-enable -->