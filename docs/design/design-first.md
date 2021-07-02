# Why design-first

Design-first, also known as API-first, or contract-first, is a process where the API is designed before it's coded.
Doing so allows to apply some principles of design thinking to the API, such as:

- Users are the starting point - A pleasant user experience is the north star
- Design-driven development - Development efforts are driven by API designers,
- Parallel work - Stakeholders (API designers, API consumers, technical writers, QA) work in parallel and transparently

## Some design-first principles

As mentioned in the [Acknowledgments section](../acknowledgements.md "Acknowledgements), this guide is a collection
of ideas and best practices from world-class API providers.

The best way to understand the benefits of design-first APIs is
to read a few concepts and principles that such providers follow in their API design practice.

### Adidas

- Everyone MUST follow the API First principle.
- The API first principle is an extension of contract-first principle. Therefore, a development of an API MUST always start with API design without any upfront coding activities.
- API design (e.g., description, schema) is the master of truth, not the API implementation.
- API implementation MUST always be compliant to particular API design which represents the contract between API, and it's consumer.

### VMware

The basic idea is that you create an API contract before doing a full code implementation.
The human-readable API specification becomes the first deliverable, allowing fast feedback from various stakeholders.
These rapid iterations are a game changer, as changing the API specification takes minutes not hours or days
and all stakeholders have the same understanding and speak the same language.
Once the team determines that the API specification is “good enough”,
the skeleton of a full application can be generated. Many different programming languages are supported.

### Others

API First is the way to go, it makes things effortless, and it’s what OpenAPI was made for. When you start with an API spec, you can start building docs, tests and client/server code right away.<br>
**It’s more than a contract; it’s more than just docs; it’s an interface you’re building with words**.

<RRead>

- [API Design-First vs Code First](https://apisyouwonthate.com/blog/api-design-first-vs-code-first "API Design-First vs Code First")
- [API-First Approach for Building Products](https://swagger.io/resources/articles/adopting-an-api-first-approach/ "API-First Approach")
- [Understanding API-First Development](https://tanzu.vmware.com/developer/guides/microservices/api-first-development/)
- [Best Practices in API Design](https://swagger.io/resources/articles/best-practices-in-api-design/)
- [Principles of API First Design Thinking](https://hackernoon.com/principles-of-api-first-design-thinking-x71t35c5)
- [3 good reasons to do API Design Reviews](http://apihandyman.io/3-good-reasons-to-do-api-design-reviews/)

</RRead>
