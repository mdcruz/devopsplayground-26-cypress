[Home](/README.md) |
[Remote Machine](https://rdp.devopsplayground.com/#/) |
[Project Setup](project-setup.md) |
[Cypress Test Runner](cypress-test-runner.md) |
[Cypress Cheat Sheet](cheat-sheet.md) |
[Scenario 1](scenario1.md) |
[Scenario 2](scenario2.md) |
[Scenario 3](scenario3.md) |
[CLI commands](cli-commands.md) 

# Scenario 1
For our first test scenario, let's validate that the header is displaying correctly. Going back to Visual Studio code, click on `cypress/integration/image.gallery.spec.js`

![](/images/scenario-1.png)

Let's switch back to the Cypress test runner. By using the [selector playground](cypress-test-runner.md#selector-playground) feature, hover on the title and it should give you `#title` as its selector. 

For the icons list selector, let's use `.icons ul li`. 

Using some of the commands on [Cheat sheet](cheat-sheet.md), our sample code should look like:

```
it('should display the title correctly', () => {
  cy.get('#title').should('have.text', ' Marie Cruz ');
  cy.get('.icons ul li').should('have.length', 3);
});
```

Note that when you try to save your changes, you will see an error saying that you have insufficient permissions. 

![](/images/save-error.png)

Click `Retry as Admin...` and then click `Yes` when prompted.

![](/images/authenticate.png)

When you save your changes, go back to the Cypress test runner and watch how the test is updated automatically. 

![](/images/scenario-1-runner.png)