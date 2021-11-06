---
id: style-summaries
title: Summaries
sidebar_label: Summaries
sidebar_position: 2
description: Learn what summaries are, how to design them, and why they're important for your user.
---

Learn what summaries are, how to design them, and why they're important for your user.

---

Summaries are also an important part of the API documentation because they are displayed in key parts of the navigation.
Users often use them to understand whether an endpoint or item is relevant to them,
their goal is to hint at what the item is enabling users to do.

Follow these tips for summaries:

- Add summaries to endpoints
- Don’t repeat the name of the method in summary, if you talk about GET, don’t say Get all users (example)
- Wording should be as clear and self-explaining as possible
- Shorter is better

```yaml {3} title="Summary example"
/users
  get:
    summary: Retrieve list of all user
```
