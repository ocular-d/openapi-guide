# Rulesets

Rulesets are collections of rules written in JSON or YAML, which can be used to power powerful linting of other JSON or YAML files.

See the [Spectral documentation](https://meta.stoplight.io/docs/spectral/docs/getting-started/3-rulesets.md) for more info.

Adjust links below to be real links
Link to rules on GitHub

## Adidas

- All JSON fields MUST follow `camelCase`
- Field names MUST be ASCII alphanumeric characters or `_` or `$`
- Collection/array fields MUST have names in plural
- All requests go through `https` protocol
- Every API operation MUST have at least one `2xx` response
- `GET` request MUST NOT accept a `body` parameter
- All success responses MUST be of media type `application/hal+json`
- All error responses MUST be of media type `application/problem+json`
- Every request SHOULD support `application/json` media type
- `application/hal+json` follows [HAL](https://supermodel.io/adidas/api/HAL) `JSON-Schema`
- `application/problem+json` messages MUST include `title` and `detail` fields
- `application/problem+json` messages SHOULD include `type` field
- Date and time MUST follow [ISO 8601](https://www.iso.org/iso-8601-date-and-time-format.html) standard
- Language codes MUST follow [ISO 639](https://www.iso.org/iso-639-language-codes.html) standard
- Country codes MUST follow [ISO 3166 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) standard
- Currency codes MUST follow [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) standard
- `202` response code is used after creating an asynchronous process request
- A successful and finished async API request returns `303` response code and sends the target resource location in the `Link` header
- `URI` template ([RFC 6570](https://tools.ietf.org/html/rfc6570)) cannot contain a `-` character
- `HTTP` headers MUST use `Hyphenated-Pascal-Case` notation
- `HTTP` headers SHOULD NOT include [`X-` headers](2). All non-standard headers are named without the `X-` prefix.

## DigitalOcean

- Response MUST include `ratelimit-x headers`
- Object properties MUST include examples
- Parameters MUST include examples
- Headers MUST include examples
- Endpoint MUST be a `$ref`
- Path MUST include the version
- Endpoint MUST a `$ref` to a file in resources/
- Responses SHOULD contain common response - 401 (unauthorized)
- Responses SHOULD contain common response - 429 (too many requests)
- Responses SHOULD contain common response - 500 (server error)
- `operationIds` MUST be snake cased (e.g. `snake_case`)
- `operationIds` MUST follow naming conventions for method
- Schema key MUST be snake cased (e.g. `snake_case`)
- Parameter key MUST be snake cased (e.g. `snake_case`)
- Example key MUST be snake cased (e.g. `snake_case`)
- Response key MUST be snake cased (e.g. `snake_case`)

<RRead>

- [Rulesets](https://meta.stoplight.io/docs/spectral/docs/getting-started/3-rulesets.md "About rulesets")
- [Custom Rulesets](https://meta.stoplight.io/docs/spectral/docs/guides/4-custom-rulesets.md "Custom rulesets")

</RRead>