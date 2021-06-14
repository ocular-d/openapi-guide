# Descriptions

Add descriptions to all server, endpoints, endpoint parameters and responses

*Don’t auto-generate descriptions and summaries, make sure that the content has value for the user.*
*Take you time to explain human understandable what the action is for!*

- Wording should be as clear and self-explaining as possible
- Shorter is better

Checklist for all descriptions
Make sure each description is brief but complete and can be understood by users who don't have additional information about the API.

In most cases, there's more to say than just restating the obvious; for example, the description of the Data API method shouldn't just say "Content API." — while your naming should be informative, most readers are reading your descriptions because they want more information than the names themselves provide.

If you're not sure what else to say in a description, try answering all of the following questions that are relevant:

What is it?

What does it do if it succeeds? What does it do if it fails? What can cause it to fail, and how?

Is it idempotent?

What are the units? (Examples: meters, degrees, pixels.)

What range of values does it accept? Is the range inclusive or exclusive?

What are the side effects?

How do you use it?

What are common errors that may break it?

Is it always present? (For example: "Container for voting information. Present only when voting information is recorded.")

Does it have a default setting?

Example of an API description