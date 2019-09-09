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

# Cypress Test Runner

Cypress Test Runner allows you to interactively see how your tests run on each action. It's composed of the following:

- Test status menu - see how many tests pass or failed and how long the tests run.
- URL preview - URL of your application
- Viewport sizing - The dimensions to which your application is tested against. Can be set with using `cy.viewport()` or specifying the default viewports on `cypress.json`
- Command log - each action that you performed as well as useful logs.
- App preview - Shows a preview of your application and how it behaves when being tested.

## Selector Playground

The selector playground is a feature provided by Cypress as part of the test runner. This helps you find the selector for the element that you wish to test. To use this feature, simply click on
![](/images/selector-playground.png) and hover on an element. Cypress will provide you with the selector to use.

![](/images/selector-playground-1.png)
![](/images/selector-playground-2.png)
