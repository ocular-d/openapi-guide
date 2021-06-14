# About

API design is the collection of planning and architectural decisions you make when building an API.

There is not a single approach to design APIs “the right way.” 

Your API design influences how well developers and systems can consume it and even how they use it

Good API design meets initial expectations and continues to behave consistently and predictably

A good public and internal API focuses on: Functionality, usability and creating a nice user experience

A good system API focuses on: Functionality and usability

4. Dump the autoloader:
```bash
composer dump-autoload
```

## Setting things up
Let's start by creating the following `Role`s:

```php
$owner = Role::create([
    'name' => 'owner',
    'display_name' => 'Project Owner', // optional
    'description' => 'User is the owner of a given project', // optional
]);

$admin = Role::create([
    'name' => 'admin',
    'display_name' => 'User Administrator', // optional
    'description' => 'User is allowed to manage and edit other users', // optional
]);
```