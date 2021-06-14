# Naming

## To do

- Add examples of naming

Naming conventions
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


## General Naming Rules

- Use American English
- Don't use acronyms
Use `camelCase` unless stated otherwise

(Add here posting from Handyman, should be plural)

Every identifier MUST be in American English and written in lowercase. An identifier SHOULD NOT contain acronyms. CamelCase (camelCase) MUST be used to delimit combined words.

