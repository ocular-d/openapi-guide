Why API design reviews?

API design reviews offer an organisation a chance to:

Share knowledge of upcoming APIs

Incorporate design feedback before coding begins

Become an advocate for the many developers that will use your API once it is released

Offer a more consistent developer experience through consistently-designed APIs

Catch missing or incorrect assumptions before code changes become more expensive or time is limited

Start with the documentation

API design reviews are not code reviews. As mentioned above, reviewers are acting as an advocate for the developers that will consume your API. Therefore, you need to start with documentation.

“Documentation is the third user interface for APIs, and the most important.”  [Keith Casey]

When is a how-to or tutorial needed?

What are the rules for having specific documentation

Focus on the ‘why’ of the API

APIs exist for a variety of reasons, including: data access, customer automation, system-to-system integration, marketplace creation, and workforce automation. An API’s introduction should be clear about the following:

What does the API do? What capabilities does it offer?

What kind of authorization is required to use the API?

Are there related APIs that are often used in conjunction with this API?

Great introductory documentation assumes that the reader has no idea about any of your internal systems or implementation choices.
They want to get something done, and they want to find out if your API will help them achieve their goals.

Expand understanding with examples

Examples of API usage are often the most important, yet missing, element of an API’s documentation.
These examples do not need to be in a specific programming language (although that helps when trying to offer an API to a broad audience).
HTTP request/response examples, perhaps complemented with Postman collections, will go a long way.

The format of these examples may vary.
You may want to offer a Readme-style approach to the examples, showing progressively more complex scenarios as a starting point for starting to use an API.
They may be complete tutorials that walk the developer through the process. Or, they could  be examples offered in the introductory or operation-level documentation.

Check for consistency

One of the common challenges for many mid-to-large size organizations is API design consistency.
It is effortless to spot APIs that were independently designed by teams without any cross-org consistency applied.
Commonly, this is associated with organizations that lack a design review process. Even with a review process in place, inconsistencies may creep in from time-to-time.

Give it a try using a mocking tool

While reviewing documentation and design style is important, nothing provides a better developer perspective of your API design than interacting with it.

Mocking tools are a great way to fill the gap and catch bad design decisions, or missing endpoints, sooner rather than later in the delivery process.

These tools will often accept a definition in OpenAPI or Blueprint format to produce a mock version of your API design. Most will even store submitted data to mimic the typical CRUD pattern using an in-memory database.

This will allow the producing team and reviews to try out the API to try and solve a use case. While the mock API won’t be fully-formed, it will provide a basic understanding of how the API will be used once completed.

Below is a (non-exhaustive) list of mocking tools that you may wish to explore:

MockBin

PostBin

httpbin

Postman

Prism

Verify the contract has been met

As the API design transitions into implementation, differences between what was documented and how the API was implemented may arise.

You may wish to verify that the API does what it promises in the documentation.

Tools such as Dredd are useful for comparing the actual API implementation to the initial design captured in OpenAPI or Blueprint.
While not specifically part of a formal API review, it may be an additional checkpoint prior to release, or conducted as part of a secondary review later in the delivery process.

Design review

Read also

Microservice Gateway and access patterns

How to manage third-party APIs

The challenges of multi-cloud API management

API design guidance: enums

12 tips for managing an API programme
