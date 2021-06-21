---
home: true
title: We love APIs
actionText: Get Started  →
actionLink: /about
xfeatures:
  - title: 🔍 Design
    link: https://editorial.ocular-d.tech/accessibility-terms.html
    details: Write in a way that puts people first.
  - title: 📖 Style
    link: https://editorial.ocular-d.tech/bias-free.html
    details: U
  - title: ✅ Documentation
    link: https://editorial.ocular-d.tech/examples-placeholders.html
    details: Best practices on how to provide examples and placeholder text so that users can relate to them.
footer: Made with ❤ by people
---

::: teaser
Moin
<img src="/code-snapshot.png"/>
:::

<div class="features">
  <div class="feature" v-for="feat in $page.frontmatter.xfeatures">
    <h2><a v-bind:href="feat.link">{{ feat.title }}</a></h2>
    <p>{{ feat.details }}</p>
  </div>
</div>

This guide is written for  RESTAPIs.

We aim for the highest quality possible! The API and docs (API reference and additionally documentation like getting started, tutorials, etc) should be as clear and stunning as possible.

The API is your contract!

## To do

- Add the new VP components!
- Check https://github.com/leftxs/restful-api-guidelines
