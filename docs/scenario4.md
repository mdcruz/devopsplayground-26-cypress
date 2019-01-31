[Home](/README.md) |
[Remote Machine](https://rdp.devopsplayground.com/#/) |
[Project Setup](project-setup.md) |
[Cypress Test Runner](cypress-test-runner.md) |
[Cypress Cheat Sheet](cheat-sheet.md) |
[Scenario 1](scenario1.md) |
[Scenario 2](scenario2.md) |
[Scenario 3](scenario3.md) |
[Scenario 4](scenario4.md) |
[CLI commands](cli-commands.md)

# Scenario 4

Let's now see how we can use Cypress to do an API testing. For this scenario, I have created a fake API using `json-server`. To start the fake API server, run the following command:

```
npm run json-server-static
```

Cypress has a built in method called `.request()` which makes an API request. By default, this corresponds to a Get request.

To create a simple Get request, simply do the following:

```
cy.request('http://localhost:3004/articles')
  .its('status')
  .should('equal', 200);
```

# Further Resource

https://github.com/cypress-io/cypress-example-api-testing
