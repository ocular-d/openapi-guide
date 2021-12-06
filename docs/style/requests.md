## Keep requests small

The more requests, the bigger the load.
Therefore, try to avoid "chatty" web APIs that expose a large number of small resources.
An API like that may require a client application to send multiple requests to find all of the data that it requires.

Instead, you might want to denormalize the data and combine related information into bigger resources
that can be retrieved with a single request.

However, you need to balance this approach against the overhead of fetching data that the client doesn't need.
Retrieving large objects can increase the latency of a request and incur additional bandwidth costs.

[Source](https://docs.microsoft.com/en-us/azure/architecture/best-practices/api-design)
