# HTTP status codes

Handle errors gracefully and return standard error codes
To eliminate confusion for API users when an error occurs, we should handle errors gracefully and return HTTP response codes that indicate what kind of error occurred.

This gives maintainers of the API enough information to understand the problem that’s occurred. We don’t want errors to bring down our system, so we can leave them unhandled, which means that the API consumer has to handle them.

## Return succeed codes

A successful method used against your resource should return a [200-type](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/200) response

## Common error HTTP status codes include:

| Status | Description |
| ------ | ----------|
| 400    | [Bad Request](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/400) – This means that client-side input fails validation |
| 401    | [Unauthorized](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/401) – This means the user isn't authorized to access a resource. It usually returns when the user isn’t authenticated |
| 403   | [Forbidden](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/403) – This means the user is authenticated, but it’s not allowed to access a resource |
| 404  | [Not Found](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/404) – This indicates that a resource is not found |
| 412 | [Precondition Failed](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/412) client error response code indicates that access to the target resource has been denied. <br><br> This happens with conditional requests on methods other than `GET` or `HEAD` when the condition defined by the `If-Unmodified-Since` or `If-None-Match` headers is not fulfilled.<br><br>In that case, the request, usually an upload or a modification of a resource, cannot be made and this error response is sent back |
| 500 | [Internal server error](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/500) – This is a generic server error. It probably shouldn’t be thrown explicitly |
| 502 | [Bad Gateway](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/502) – This indicates an invalid response from an upstream server |
| 503 | [Service Unavailable](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/503) – This indicates that something unexpected happened on server side (It can be anything like server overload, some parts of the system failed, etc.) |

<RRead>

- [How to Think About HTTP Status Codes](https://www.mnot.net/blog/2017/05/11/status_codes "How to Think About HTTP Status Codes")

</RRead>