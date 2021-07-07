---
title: Versioning and deprecation
description: Why governance is good for your organization and what to consider when creating your governance strategy
meta:
  - name: "og:description"
    content: Why governance is good for your organization and what to consider when creating your governance strategy
  - name: keywords
    content: design API OAS OpenAPI documentation governance versioning deprecation
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
  - versioning
  - deprecation
---

<Header/>

---

<!--vale disable -->
<!--alex disable -->

## Versioning

API specifications are always subjected to change. The addition of new enhancements and abandonment of older features is the norm of any product, and APIs are no different.  API versioning is the best way to keep track of these changes. Moreover, API versioning is also the basis for managing the lifecycle progression of APIs. It helps in managing the deprecating and retirement of APIs gracefully.

## Deprecation vs Sunsetting

Sunsetting and deprecation are often used almost interchangeably, and though they are very related, these two terms denote distinct aspects of the end-of-life planning phase.

### Deprecation

When an API is deprecated, this means an API is not usable in its current form for the purpose intended. This usually means that a new version has been created, or the underlying business supporting the API is no longer intending on supporting it. Any number of reasons can underly deprecation, but the fundamental nature of deprecation is that it represents a line in the sand – once something is deprecated, it should no longer be used.

That’s not to say that deprecation means the totality of the offering is gone in all cases, however. Certain functions of the API can be deprecated while allowing the rest of the API to keep working. This is the case with special features, versions of the API for specific implementations, and perhaps most often, with legacy supported APIs which have fallen outside of the support period.

Here is how the IETF defines The Deprecation HTTP Header:

“The HTTP Deprecation response header can be used to signal to consumers of a URI-identified resource that the use of the resource has been deprecated. Additionally, the deprecation link relation can be used to link to a resource that provides additional context for the deprecation, and possibly ways in which clients can find a replacement for the deprecated resource.”

Also Read: Best Practices for API Versioning

### Sunsetting

Sunsetting, on the other hand, is merely a period of time leading up to a deprecation. In many cases, sunsetting is treated as a deprecation date – while this may be appropriate in some cases (and is certainly an appropriate use when considering migratory efforts), it is more accurate to say that sunsetting is a period of limited support, while deprecation is the period in which support officially ends.

In some cases, a sunsetting plan can be set up months or even years in advance of the deprecation announcement, and in such long-term cases, these sunsetting plans are often updated the same way a long-term business plan would be. Another way to think of these terms is this – deprecation is the end point, sunsetting is the time period it takes to get there.

Here is how the IETF defines the Sunset HTTP Header Field:

“This specification defines the Sunset HTTP response header field, which indicates that a URI is likely to become unresponsive at a specified point in the future. It also defines a sunset link relation type that allows linking to resources providing information about an upcoming resource or service sunset.”

## Effective Sunsetting and Deprecation

The way this process is handled is vitally important for reasons that will soon be apparent – as such, adopting these general approaches will make the process easier, more impactful, and ultimately more effective.

### Long-term End-of-Life Planning

Much of this entire process can be managed much more effectively if a plan is set up far in advance of the actual drop date. With this in mind, a few key things should be laid out and considered as far in advance of deprecation as possible.

First and foremost, the question of “what does the operation status look like once the API deprecates” needs to be answered. Some APIs will serve the fact that they have been deprecated using a live service, but this can take resources, no matter how minor – a company entirely exiting a space, closing, merging with another group, etc. may opt to entirely drop the API and its related systems. Other APIs may choose to serve their deprecation status via the API itself while disabling the rest of its functionality. APIs that are deprecating specific functions may serve deprecation via those functions as a status code. How this information is served and in what format is an important consideration.

Second, API developers should consider how immediate this deprecation is expected to be. For short periods to deprecation, the sunset announcement should be done well ahead of any movement or change, as there’s not going to be a lot of time to adjust. Fort instance, if deprecation is occurring in a matter of days so that users can move to another service, give a sunset period of a few weeks to allow for the average user to migrate. For longer sunsetting periods, this is less important, as the API will visibly wind down over time, making movements or change serve as active notification of sorts.

Third, documentation should be made as evergreen as possible. Our API may be deprecated, but if we have any open source code, any forks at all, or anyone using local versions of our API, then we still want to have evergreen documentation. Some API providers choose to serve their deprecation status, not via an API, but instead through documentation – if this is a choice made, the notification should be abundantly clear throughout and should be consistently referenced.

## Informing Users of Sunsetting and Deprecation

How an API exposes its plans for sunsetting and deprecation is key to the success of this entire process. There are a few different approaches – they vary in a specific application, but largely speaking, they can be divided into technical solutions and non-technical solutions. Whichever method is chosen, it should be clear, consistent, and properly exposed.

Clarity is especially important at this point, especially when clarifying whether specific functions or entire APIs are being sunset. Simply saying “our image API is being sunset after this date” is not good enough – what does this mean for the rest of our API ecosystem, if there is one? Are we deprecating only the image portions of the API? Is the API itself only for images, or is this one of a collection of APIs? Sunsetting is all about communicating intent – therefore, communicate clearly.

Consistency is equally important. Sunset dates can (and do) change, but if there’s a discrepancy between your stated date and the actual date marking either the beginning or end of this process, especially if we are using both a technical and non-technical solution, this can cause issues. Synchronize all our dates and ensure that your communication around them are equally synchronized.

Finally, proper exposure and availability of the information at hand is important. What sort of user does the API attract? Highly technical APIs are more likely to properly express the sunsetting and deprecation using technical means as this is the chief entry point for everything related to it. More mass-use APIs (or APIs hidden behind gateways, applications, etc.) are more effective when exposing using non-technical solutions. Of course, this isn’t an either/or situation – developers should absolutely use both technical and non-technical solutions, but the priority and the source of truth should be based upon the use case of the API and its particular userbase.

## Communicating sunsetting

### Technical Communication

Technical communication is a great option, as there’s already ample support for this kind of resolution through HTTP header fields. HTTP offers both Deprecation and Sunset header fields. The great thing about using base header fields like this is that we can either expose them at the top level (that is, for the entire API), or on specific resources (which is useful when an API is deprecating a specific function or part of the API rather than the API as a whole).

The deprecation header field allows us to use a timestamp to state that the API has either been deprecated or will be in the future. In the deprecation header field, we can also use the link relation type to link to a specific deprecation policy, which helps for longevity and long-term understanding.

Such a use case would look like this:

Deprecation: Sat, 1 Aug 2020 23:59:59 GMT
Link: <>; rel=”deprecation”; type=”text/html”

With this, we’ve stated when the API will be deprecated and provided a link to the specific policy and/or reasoning behind the deprecation. Once we’ve set the deprecation field, we want to set a plan as to when the sunsetting is going to occur. Again, sunsetting can be seen as relatively similar to deprecation, and as one might expect, the technical solution is very similar.

In this case, we’re stating the period of time in which an API either stops responding altogether or enters a state of limited support (e.g., the API will only respond with error codes, responses designed for migration to an alternative, or simply the deprecation notification itself). Sunsetting is set pretty much the way we set deprecation, using the following type of field:

Sunset: Sat, 25 Jul 2020 23:59:59 GMT
Link: <>; rel=”deprecation”; type=”text/html”

In this example, we’ve set a sunset period of one week, which will allow consumers to discover the deprecation, use any migration endpoints created, and point any APIs to new APIs or endpoints to continue operation.

### Non-Technical Communication

Of course, the technical solution is not the only one an API should use – non-technical communication is just as important. Non-technical solutions can take a wide variety of forms, but whatever the official communication method is, be it blog, Twitter, GitHub, etc., it should express the deprecation plan and the sunset period clearly and consistently. One of the most common forms of this kind of communication is a deprecation blog post or news update, and many APIs include the deprecation status in their update log so that future users can track the date in relation to other movements in the codebase.

Once this is done, the process for sunsetting and what deprecation means for the API should be added to the documentation and pointed to as the key entry point wherever the API is discussed officially. Notes should be added throughout the documentation – simply adding a section and “calling it good” is not enough, as the plan must be amply discussed, noted throughout, and documented effectively.

Non-technical communication can often take a much lengthier form than the technical – technical communication is meant to inform and redirect, whereas non-technical is meant to educate, explain, and offer alternatives.

## Limited Support vs. Closure

One thing that should be made abundantly clear in our sunset plan is whether or not we are totally deprecating during this period, or entering limited support. These two things are very different, but they can both technically be considered a form of sunsetting.

When closing an API (in other words, wholly deprecating), the sunset period is the period of time where a resource stops responding altogether, though error codes might still be served in limited cases. When entering limited support, however, there may be a provision for elements like redirect URIs, migration endpoints, etc., and in some limited cases, the API might still respond, but in a more rate limited, special case fashion. The chosen type of support during sunsetting should be made abundantly clear in the documentation.

## Key Takeaways For Sunsetting APIs

Deprecation and sunsetting terms are some of the most important policies to communicate to developers. Your communication here will not only secure your current API, but if we’re migrating to something else, will likely ensure its success as well – users only trust providers who communicate. Effective, smart sunsetting and deprecation isn’t just good for our code, it’s good for our users, the API space, and the industry at large.

In summary, here are some best practices to consider that help prepare us for successful, easy API retirement:

Plan ahead: Decide how to communicate API sunsetting far in advance; before the API is published.

Standardize: For consistency, have a platform-wide standardized for sunsetting length.

Keep historical documentation: Keep all previous API documentation live, even if deprecated.

Use technical communication: Use Deprecation and Sunset HTTP header fields.

Communicate on social channels: Use non-technical communication as well, like Twitter, emails, forum notices, etc.

Be clear: Use clarity when communicating sunset time length.

<!--alex enable -->
<!--vale enable -->
