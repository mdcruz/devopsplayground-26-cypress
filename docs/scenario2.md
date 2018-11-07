[Home](/README.md) |
[Remote Machine](https://rdp.devopsplayground.com/#/) |
[Project Setup](project-setup.md) |
[Cypress Test Runner](cypress-test-runner.md) |
[Cypress Cheat Sheet](cheat-sheet.md) |
[Scenario 1](scenario1.md) |
[Scenario 2](scenario2.md) |
[Scenario 3](scenario3.md) |
[CLI commands](cli-commands.md) 

# Scenario 2
For our second scenario, let's test that when you click on the first image, it should display the correct caption. Using some of the commands on [Cheat sheet](cheat-sheet.md), our sample code should look like:

```
it('should click on the image gallery', () => {
    cy.get(':nth-child(2) > .tile-viewport > img')
      .click();

    cy.get('.footerCaption_2r5qf')
      .should('be.visible')
      .should('have.text', 'Dog in the Park - Marie Cruz');
  });
```  
 Notice that on this scenario, we are chaining two assertions.

 Go ahead and save your changes and go back to the Cypress test runner.

Cypress lets you see the state of your application after performing any actions. In our scenario, we can observe how our application behaves when the click action has been called.

 ![](/images/scenario-2-before.png)
 ![](/images/scenario-2-after.png)