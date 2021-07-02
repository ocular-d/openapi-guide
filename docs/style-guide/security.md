# Security

## Access Control

It's safer to approach access control assuming that not every user has a right to every web service.
One of the benefits of such approach is that it prevents users from misusing administrative web services.
To ensure that privileged collections or actions are properly protected from unauthorized use,
the API key SHOULD be sent along as a cookie, body parameter, or HTTP message header.

Every API **must be** authenticated before it can be used.

Consider adding access control to all your APIs, regardless of whether they're public, internal, or system ones.
There may be situations where requirements for each one are different requirements.

## Mask HTTP Headers

Server versioning information or any other sensitive information
from the HTTP headers **SHOULD BE** removed or masked according to industry best practices.
This prevents any form of targeted attacks since the vulnerabilities are mostly specific to the vendors.

:::warning HTTP means HTTPs
Make sure that all your headers are always HTTPS!
:::

## Escape Content

Remove any executable code that may cause the browser to do something you don’t want it to.
Typically, this means removing // `&lt;![CDATA[` tags and HTML attributes that cause JavaScript to be evaluated.
If you use standard data formats like JSON, you can use standard libraries
which have been thoroughly checked by many professionals.
However, DO NOT TRY TO DO THIS YOURSELF.
Use a known library or the auto-escaping features of your favorite template library.
Do this both in the browser and on your server if you allow users to submit data that is saved into a database.

## Enable CORS for all APIs

When your API resources receive requests from a domain other than the API's domain,
you MUST enable Cross-Origin Resource Sharing (CORS) for selected methods on the resource.
When you enable CORS, your API responds to the OPTIONS preflight request with at least the following headers:

- Access-Control-Allow-Methods
- Access-Control-Allow-Headers
- Access-Control-Allow-Origin

## Protect against Cross-Site Request Forgery

For resources exposed by RESTful web services, it's important to make sure any PUT, POST, and DELETE request
is protected from Cross-Site Request Forgery (CSRF). For example, you can follow a token-based authentication approach.

CSRF is achieved even using random tokens if any Cross-Site Scripting (XSS) exists within your application.
Make sure you understand how to prevent XSS.