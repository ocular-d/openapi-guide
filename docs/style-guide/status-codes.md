---
title: HTTP status codes
description: To prevent confusion for API users, handle errors gracefully and return standard HTTP response codes
meta:
  - name: "og:description"
    content: To prevent confusion for API users, handle errors gracefully and return standard HTTP response codes
  - name: keywords
    content: To prevent confusion for API users, handle errors gracefully and return standard HTTP response codes
tags:
  - OpenAPI
  - OAS
  - summaries
  - style
  - guide
---

<Header/>

---
# HTTP status codes

Giving relevant feedback to users on the status of each operation
can mark the difference between a good and a bad API experience.

<!-- vale off -->

Doing so gives both consumers and maintainers of the API enough information to understand what's going on.
Also, assume that your API will make errors, or that users will when using it.
Underestimating the fact that errors will occur and not preparing your API to handle them properly and give relevant feedback
will leave users with no way to understand what's going on, creating friction.

## Success codes

Also successful operations require status codes.
A successful operation on a resource must return a [200-type](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/200) response.

<!-- markdownlint-disable -->

## Common error HTTP codes

Common HTTP error status codes include:

| Status | Description |
| ------ | ----------|
| 303    | [See other](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/303)|
| 400    | [Bad Request](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/400) – This means that client-side input fails validation |
| 401    | [Unauthorized](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/401) – The user isn't authorized to access a resource. It usually returns when the user isn’t authenticated |
| 403   | [Forbidden](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/403) – The user is authenticated, but it’s not allowed to access a resource |
| 404  | [Not Found](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/404) – A resource is not found |
| 412 | [Precondition Failed](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/412) - Access to the target resource has been denied. <br><br> This happens with conditional requests on methods other than `GET` or `HEAD` when the condition defined by the `If-Unmodified-Since` or `If-None-Match` headers is not fulfilled.<br><br>In that case, the request, usually an upload or a modification of a resource, cannot be made and this error response is sent back |
| 429 | [Too many requests](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/429) - The user has sent too many requests in a given amount of time ("rate limiting")
| 500 | [Internal server error](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/500) – Generic server error. It probably shouldn’t be thrown explicitly |
| 502 | [Bad Gateway](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/502) – Invalid response from an upstream server |
| 503 | [Service Unavailable](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/503) – Something unexpected happened on server side. For example, it can be a server overload or that some parts of the system failed |

<!-- vale on -->

<RRead>

- [How to Think About HTTP Status Codes](https://www.mnot.net/blog/2017/05/11/status_codes "How to Think About HTTP Status Codes")

</RRead>

<!-- markdownlint-enable -->
