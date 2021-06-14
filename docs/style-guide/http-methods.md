# HTTP methods

Describe resource functionality with HTTP methods
All resources have a set of methods that can be operated against them to work with the data being exposed by the API.

REStful APIs comprise majorly of HTTP methods which have well-defined and unique actions against any resource.

Here’s a list of commonly used HTTP methods that define the CRUD operations for any resource or collection in a  RESTful API.

| Method | Description |
| ------ | :----------:|
| GET    | Used to retrieve a representation of a resource |
| POST   | Used to create new resources and sub-resources  |
| PUT    | Used to update existing resources               |
| PATCH  | Used to update existing resources               |
| DELETE | Used to delete existing resources               |

**Differences between PUT and PATCH** \
A `PUT` request will replace the entire content of the resource at the location while a `PATCH` request, on the other hand, is used to make changes to a part of the resource at a location.