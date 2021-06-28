# Security
## Access Control
Not every user has a right to every web service.
This is vital, as you don't want administrative web services to be misused.
The API key SHOULD be sent along as a cookie, body parameter, or HTTP message header to ensure that privileged collections or actions are properly protected from unauthorized use.

Every API **MUST BE** authenticated before it can be used.

:::warning Rule of thumb
This applies to all API(s).

In general, you want to control the access of/to all API(s), public, internal and system ones.

There may situations for internal and/or system API(s) where you have different requirements. (Needs to be decided on the API in question).
:::

## Masking HTTP Headers

Server versioning information or any other sensitive information from the HTTP headers **SHOULD BE** removed/masked according to industry best practices.
This prevents any form of targeted attacks since the vulnerabilities are mostly specific to the vendors.

:::warning Info
All HTTP headers should be always HTTPS!
:::

## Escape Content

Remove any "executable" code that would cause the browser to do something you don’t want it to. Typically, this means removing // `&lt;![CDATA[` tags and HTML attributes that cause JavaScript to be evaluated. If you use standard data formats like JSON, you can use standard libraries which have been thoroughly checked by many professionals. However, DO NOT TRY TO DO THIS YOURSELF. Use a known library or the auto-escaping features of your favorite template library. This needs to be done in the browser and on your server if you allow users to submit data that is saved into a database.

## Enable CORS for all APIs

When your API's resources receive requests from a domain other than the API's domain, you MUST enable cross-origin resource sharing (CORS) for selected methods on the resource. When you enable CORS, your API responds to the OPTIONS preflight request with at least the following headers:

- Access-Control-Allow-Methods
- Access-Control-Allow-Headers
- Access-Control-Allow-Origin

## Protect against Cross-Site Request Forgery

For resources exposed by RESTful web services, it's important to make sure any PUT, POST, and DELETE request is protected from Cross Site Request Forgery. For example, you can follow a token-based authentication approach.

CSRF (Cross-Site Request Forgery) is easily achieved even using random tokens if any Cross-Site Scripting (XSS) exists within your application, so PLEASE MAKE SURE you understand how to prevent XSS.