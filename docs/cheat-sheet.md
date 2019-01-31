[Home](/README.md) |
[Remote Machine](https://rdp.devopsplayground.com/#/) |
[Project Setup](project-setup.md) |
[Cypress Test Runner](cypress-test-runner.md) |
[Cypress Cheat Sheet](cheat-sheet.md) |
[Scenario 1](scenario1.md) |
[Scenario 2](scenario2.md) |
[Scenario 3](scenario3.md) |
[CLI commands](cli-commands.md)

# Writing Tests

Since this is a hands on session, I have included the Cypress commands that we will use with an explanation of what it do. Please refer to the below table as much as you need.

## Cheat Sheet

| API Command                                   | Description                                                                                                    | Example                                                                                              |
| --------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| cy.visit(url)                                 | Visits a url. When you add the property `baseUrl` on `cypress.json`, Cypress will take this as your base url.  | cy.visit('http://localhost:3000') or cy.visit('/register.html')                                      |
| cy.get(selector)                              | Gets the DOM element by its selector. An A DOM element object represents an HTMl element like div, button, img | cy.get('#username') or cy.get('.categories > ul > li')                                               |
| .type('value to type')                        | Types value into a DOM element                                                                                 | cy.get('#username).type('user1')                                                                     |
| .click()                                      | Clicks on a DOM element                                                                                        | cy.get('.submitBtn').click()                                                                         |
| .should(chainers) or .should(chainers, value) | Creates an assertion against an element                                                                        | cy.get('.submitBtn').should('be.visible') or cy.get('.categories > ul > li).should('have.length', 3) |
| .request()                                    | Makes a REST API call. Get request is the default                                                              | cy.request('/employees')                                                                             |

For full description on how to use the Cypress API, refer to this [documentation](https://docs.cypress.io/api/api/table-of-contents.html)
