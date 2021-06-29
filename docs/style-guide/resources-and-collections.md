# Resources, collections, URLs

Resources are fundamental to the concept of REST. A resource is an object that’s important enough to be referenced in itself. A resource has data, relationships to other resources, and methods that operate against it to allow for accessing and manipulating the associated information. A group of resources is called a collection.

The contents of collections and resources depend on your organizational and consumer requirements. If, for example, you believe the market will benefit from obtaining basic information about your product’s user base, then you could expose this as a collection or resource. A Uniform Resource Locator (URL) identifies the online location of a resource. This URL points to the location where your API’s resources exist. The base URL is the consistent part of this location.

In the case of a photosharing app, one could expose data about the users who use the app through collections and resources, accessed by the appropriate URL.

`/users`: a collection of users

`/users/username1`: a resource with information about a specific user

## Plural naming [Coming soon...]