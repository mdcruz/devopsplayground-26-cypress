[Home](/README.md) |
[Remote Machine](https://rdp.devopsplayground.com/#/) |
[Project Setup](project-setup.md) |
[Cypress Test Runner](cypress-test-runner.md) |
[Cypress Cheat Sheet](cheat-sheet.md) |
[Scenario 1](scenario1.md) |
[Scenario 2](scenario2.md) |
[Scenario 3](scenario3.md) |
[CLI commands](cli-commands.md) 

# Scenario 3
For our last scenario, we'll be testing an external application (Squarespace) and verify if their login functionality is behaving as expected. For this scenario, we will also make use of custom Cypress commands. 

A custom Cypress command is a method that you write which you can use specifically on your application. For example, we can create our custom command for the 'login' action.

To do this, navigate to this file `cypress/support/commands.js`.

Replace the content of this file with the below example code:

```
Cypress.Commands.add('login', (email, password) => { 
  cy.get('.username')
    .type(email);
    
  cy.get('.password')
    .type(password);

  cy.get('[data-test=login-button]')
    .click();
});
```

As you can see, the only thing that we have done differently is we made use of `Cypress.Commands.add()`. The content of this method is similar to what we have done on the first and second scenario with the addition of using the `.type()` command. To make this test more re-usable, we can pass in parameters (email and password) so we can call this command multiple times with different login details.

Go back to `cypress/integration/squarespace.login.spec.js` and type in the below sample code:

```
cy.login('test', 'testpasssword');
cy.get('[data-test=sentinel-password-error]')
  .should('be.visible');
```

We can now call our custom command called 'login' and pass in our test parameters (test as email and testpassword as our password).