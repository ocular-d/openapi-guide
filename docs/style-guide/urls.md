# Nouns describe URLs better

The base URL should be neat, elegant, and simple so that developers using your product can easily use them in their web applications. A long and difficult-to-read base URL is not just bad to look at, but can also be prone to mistakes when trying to recode it. Nouns should always be trusted.

There’s no rule on keeping the resource nouns singular or plural, though it is advisable to keep collections plural. Having the same plurality across all resources and collections respectively for consistency is good practice.

Keeping these nouns self-explanatory helps developers understand the kind of resource described from the URL, which can eventually enable them to become self-sufficient while working with your API.

Coming back to the photosharing app, say it has a public API with /users and  /photos as collections. Notice how they’re all plural nouns?

They’re also self-explanatory, and we can infer that /users and /photos gives information about the product’s registered user base, and shared photos respectively.

Good  

`/products`

Not cool  

`/getAllProducts`

Add component box with link reminder about plural