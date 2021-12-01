---
title: Descriptions
id: descriptions
sidebar_label: Descriptions
description: Learn what descriptions are, how to design them, and why they're important for your users
---

Learn what descriptions are, how to design them, and why they're important for your users

---

Descriptions are among the pieces of an API that are most consumed by humans
and they can be added to almost every element of an API.
As such, they need to be user-friendly and add value, because users will use them to understand your API.

In most cases, for example, the description of the Data API method shouldn't say "Content API."
While your naming should be informative, most readers are reading your descriptions because they want more information than the names themselves provide.

Here's a few best practices you can follow to create awesome API descriptions.
You can use it as a checklist.

- Add descriptions to all server, endpoints, endpoint parameters and responses,to all elements that support such field according to the [specification](https://swagger.io/specification/) that is relevant to you
- Make sure each description is brief but complete and can be understood by users who don't have additional information about the API.
- Don’t repeat the name of the method in description, if you talk about GET, don’t say Get all users (example)
- Don’t auto-generate descriptions and summaries, make sure that the content has value for the user.
- Take you time to explain human understandable what the action is for!
Wording should be as clear and self-explaining as possible
- You can use Markdown to enhance descriptions

If you're not sure what else to say in a description, try answering all of the following questions that are relevant:

- What is it?
- What does it do if it succeeds? What does it do if it fails? What can cause it to fail, and how?
- Is it idempotent?
- What are the units? (Examples: meters, degrees, pixels.)
- What range of values does it accept? Is the range inclusive or exclusive?
- What are the side effects?
- How do you use it?
- What are common errors that may break it?
- Is it always present? (For example: "Container for voting information. Present only when voting information is recorded.")
- Does it have a default setting?

In synthesis, a good description focuses on the what, the how, and the why.
