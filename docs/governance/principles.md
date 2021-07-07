---
title: Principles
description: Why governance is good for your organization and what to consider when creating your governance strategy
sidebarDepth: 0
meta:
  - name: "og:description"
    content: Why governance is good for your organization and what to consider when creating your governance strategy
  - name: keywords
    content: design API OAS OpenAPI documentation governance strategy
tags:
  - design
  - style
  - guide
  - API
  - OAS
  - openAPI
  - swagger
  - documentation
  - governance
  - strategy
---

<Header/>

---

## Why we need API Governance

API design governance can be a win-win for both designers and end users.
From a designer’s perspective, good governance helps teams to:

- **Reduce errors** by assuring that the common guidelines are understood by and accessible to everyone.
- **Standardize data dictionaries and versioning** so teams aren’t reinventing the wheel with each new or updated API.
- **Standardize endpoint and parameter naming** which helps create an organization-wide ecosystem
that makes it easier to integrate new APIs into larger, more complex flows.
- **Improve continuously and globally** by making best practices accessible throughout the organization,
reducing discrepancies among teams and streamlining the review and validation process.

From a user perspective, maintaining consistency among use,
models or endpoint and parameter naming makes your APIs easier to understand,
especially when you’re dealing with a highly complex internal backend and logic.
Once a user has integrated one of your APIs, it becomes easy to understand and integrate others.

## Have one set of enterprise-wide API governance rules

- How you want to apply said generic standards (e.g. the OpenAPI Spec) in your enterprise in your code
- Important metadata fields which should always be documented
e.g. owner, lifecycle state, the capability the API supports, taxonomy
- The API security protocols which are applicable to each type of API
- Access control rules for who can do what with your APIs

We also want all our governance rules for different architectural styles of service (e.g REST. GraphQL) in one place.
If they are all centrally located and maintained, everyone using them in your organization has one source of truth.

## Apply governance at all stages of the API lifecycle

API governance has traditionally had the tendency to cause roadblocks in development
 – when things have been overlooked early on but become a bigger issue later in the process.

If we can ensure your API governance rules are applied at all stages of the lifecycle –
i.e. throughout Plan, Design, Build, and Run – we’re going to prevent these roadblocks and help speed up development,
while ensuring the outputs are all properly standardized.

## Bake-in your API governance rules

Having to rely on our developers to manually apply your API governance rules, standards, security policies etc.
in their code is no fun for anyone, and not feasible when we’re developing APIs at scale.

We may also have different levels of governance to be applied
e.g. the OpenAPI violations levels of “must” vs “should” vs “may”,
and rules around which levels need to be met before an API can transition to a certain state (e.g. UAT → PROD).
That’s near-impossible to enforce if API governance is a manual process!

Therefore, API governance rules need to be baked-in, automatically applied and validated against,
with a simple way to rectify violations, without having to spend time digging in the code.

By doing this, we’re minimizing human error, speeding up development time,
and ensuring that all our APIs are standardized and reusable.

## Ensure your API governance rules are met before an API can be deployed

Deploying un-governed APIs, or APIs with governance violations, even into a sandbox environment,
is detrimental for large enterprises; costing time and money.

We want your enterprise’s API governance rules, as well as generic architectural type standards (e.g. OpenAPI Spec),
to be validated against and any violations resolved while you’re still in design-time.

An example of this would be ensuring that all the “MUST” OpenAPI violations are addressed
before an API can be transitioned from UAT to Production environments.