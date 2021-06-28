# Naming

A collection of best practices to follow in regards to naming your API items.

## Consistent naming

Adopt a consistent naming convention in URIs.

- Use plural nouns for URIs that reference collections
- Organize URIs for collections and items into a hierarchy.
For example, `/customers` is the path to the customers collection and `/customers/5` is the path to the customer with ID 5.
This approach helps to keep the web API intuitive.
Also, many web API frameworks can route requests based on parameterized URI paths, so you could define a route for the path `/customers/{id}`.

## Consider relationships between resources

Consider the relationships between different types of resources and how you might expose these associations.
For example, the `/customers/5/orders` might represent all of the orders for customer 5.
You could also go in the other direction,
and represent the association from an order back to a customer with a URI such as `/orders/99/customer`.
However, extending this model too far can become cumbersome to implement.
A better solution is to provide navigable links to associated resources in the body of the HTTP response message.
This mechanism is described in more detail in the section Use [HATEOAS](https://docs.microsoft.com/en-us/azure/architecture/best-practices/api-design#use-hateoas-to-enable-navigation-to-related-resources) to enable navigation to related resources.

In more complex systems, it can be tempting to provide URIs that enable a client to navigate through several levels of relationships, such as `/customers/1/orders/99/products`.
However, this level of complexity can be difficult to maintain and is inflexible if the relationships between resources change in the future.
Instead, try to keep URIs relatively simple.
Once an application has a reference to a resource, it should be possible to use this reference to find items related to that resource.
The preceding query can be replaced with the URI `/customers/1/orders` to find all the orders for customer 1,
and then `/orders/99/products` to find the products in this order.

::: warning Tip
Avoid requiring resource URIs more complex than collection/item/collection.
:::

## Keep requests small

The more requests, the bigger the load.
Therefore, try to avoid "chatty" web APIs that expose a large number of small resources.
An API like that may require a client application to send multiple requests to find all of the data that it requires.
Instead, you might want to denormalize the data and combine related information into bigger resources
that can be retrieved with a single request.
However, you need to balance this approach against the overhead of fetching data that the client doesn't need.
Retrieving large objects can increase the latency of a request and incur additional bandwidth costs.

(Source: https://docs.microsoft.com/en-us/azure/architecture/best-practices/api-design)

## Naming examples [Coming soon]

Coming soon...

## Naming conventions

To provide consistent developer experience across many APIs and over a long period of time, all names used by an API should be:

- "Simple"
- Intuitive
- Consistent

This includes names of interfaces, resources, collections, methods, and messages.

Since many developers are not native English speakers, one goal of these naming conventions is to ensure that the majority of developers can easily understand an API.
It does this by encouraging the use of a simple, consistent, and small vocabulary when naming methods and resources.

Commonly accepted short forms or abbreviations of long words may be used for brevity.
For example, API is preferred over Application Programming Interface.

Use intuitive, familiar terminology where possible.
For example, when describing removing (and destroying) a resource, delete is preferred over erase.

Use the same name or term for the same concept, including for concepts shared across APIs.

Avoid name overloading. Use different names for different concepts.

Carefully consider use of names that may conflict with keywords in common programming languages. Such names may be used but will likely trigger additional scrutiny during API review. Use them judiciously and sparingly.

## General naming rules

- Use American English
- Don't use acronyms
Use `camelCase` unless stated otherwise

(Add here posting from Handyman, should be plural)

Every identifier MUST be in American English and written in lowercase. An identifier SHOULD NOT contain acronyms. CamelCase (camelCase) MUST be used to delimit combined words.

## Vocabulary

Prioritize simple words. This help creates a standard and improves SEO and search.
By using well-know words it is more effortless for users to understand the API.

When using simple words isn't possible, use web and industry standards where they make sense.
For example use well-known terminology from Schema.org combined with common terms from the relevant industry you're in.

## Message names

Message names should be short and concise. Avoid unnecessary or redundant words. Adjectives can often be omitted if there is no corresponding message without the adjective. For example, the Shared in SharedProxySettings is unnecessary if there are no unshared proxy settings.

Message names should not include prepositions (e.g. "With", "For"). Generally, message names with prepositions are better represented with optional fields on the message

### Sources

- [IANA Link Relation Values](https://www.iana.org/assignments/link-relations/link-relations.xhtml)
- [Schema.org](http://schema.org/) ​, Activity Stream
- [Micofromats, Dublin Core](https://dublincore.org/)
- Industry Vocabularies
- Internal Vocabularies

