# Devops Playground #26: Hands on with Cypress 
![](images/cypress-io-logo.png)

# Introduction
On this meetup, we will walk you through what Cypress is and how it's different from existing test automation tools such as Selenium. We'll show you how to setup Cypress in your machines and write your first Cypress test.

Name: Marie Cruz

Role: QA and Continuous Delivery Consultant

Email: marie.cruz@ecs-digital.co.uk

LinkedIn: [Let's connect](https://www.linkedin.com/in/marie-desiree-cruz-95841242/)

# Agenda

- [Overview](#overview)
- [Requirements](#requirements)
- [Setup](#setup)
- [Cypress Setup](#cypress-project-setup)
- [Selector Playground](#selector-playground)
- [Writing Tests](#writing-tests)
  - [Cheat Sheet](#cheat-sheet)
  - [Scenario 1: Verify that title is displayed correctly](#scenario-1)
  - [Scenario 2: Verify that image gallery displays correctly](#scenario-2)
  - [Scenario 3: Verify that Squarespace login works correctly](#scenario-3)
- [Cypress CLI Commands](#cypress-cli-commands)
- [Further Reading](#further-reading)

## Overview

Cypress is a test automation tool created by Brian Mann to help developers write automation tests from a user’s perspective. Cypress is written purely in JavaScript and was created to address all the issues developers face when writing tests. Let's admit it, developers hate writing tests! From setting up the framework, debugging why the test is flaky, and dealing with the complexities of managing tests, it's no wonder why most developers prefer to put E2E tests on the side. 

![](images/cypress-test-runner.png)

## Requirements
- Node and NPM installed
- Code editor (e.g. VSCode)
- Chrome browser
- Basic Javascript knowledge

## Setup
The remote machine (connection details to be shared) will have all the programs you need to follow this session. For any technical assistance, please ask around for help.

## Cypress Project Setup
Once you are succesfully logged in to your instance, follow the steps below to setup Cypress.

1. On your desktop, click Visual Studio Code
2. Click on Open Folder

![](images/vscode-open.png)

3. Navigate to this folder `C:/Users/ecs_user/cypressProject/devopsplayground-26-cypress` and click Select folder

![](images/folder-navigation.png)

4. Once the project is loaded on Visual Studio, let's open up the terminal to run some commands.

![](images/vscode-terminal.png)

5. On the terminal, let's start up the sample application that we are testing today by typing in:
```
npm run start
```

Once the application is booted, it can be accessed by navigating to `http://localhost:3000/`

![](images/react-app.png)

6. To verify if Cypress has been installed correctly, let's go back to Visual Studio Code and open up a new terminal.

![](images/vscode-new-terminal.png)

On the new terminal, type in:

```
npx cypress verify
```

You should see a message that Cypress is verified and ready to use.

7. To open Cypress, type in the below command:
```
npx cypress open
```

You should then see the Cypress Test Runner up and running with 2 spec files.

![](images/cypress-runner.png)

If you click one of the spec files, Cypress will display the tests available as well as the application under test.

![](images/cypress-tests.png)

## Selector Playground
The selector playground is a feature provided by Cypress as part of the test runner. This helps you find the selector for the element that you wish to test. To use this feature, simply click on 
<img src="images/selector-playground.png" height="20" width="20" /> and hover on an element. Cypress will provide you with the selector to use.

![](images/selector-playground-1.png)
![](images/selector-playground-2.png)


## Writing Tests
Since this is a hands on session, I have included the Cypress commands that we will use with an explanation of what it do. Please refer to below table as much as you need.

### Cheat Sheet

| API Command      | Description              | Example |
| -------------    | ---------------------    | -----   |
| cy.visit(url)  | Visits a url. When you add the property `baseUrl` on `cypress.json`, Cypress will take this as your base url.   | cy.visit('http://localhost:3000') or cy.visit('/register.html')|
| cy.get(selector)  | Gets the DOM element by its selector. An A DOM element object represents an HTMl element like div, button, img  | cy.get('#username') or cy.get('.categories > ul > li') |
| .type('value to type') | Types value into a DOM element | cy.get('#username).type('user1') |
| .click() | Clicks on a DOM element | cy.get('.submitBtn').click() |
| .should(chainers) or .should(chainers, value) | Creates an assertion against an element | cy.get('.submitBtn').should('be.visible') or cy.get('.categories > ul > li).should('have.length', 3) |

For full description on how to use the Cypress API, refer to this [documentation](https://docs.cypress.io/api/api/table-of-contents.html)

1. Scenario: Verify that title is displayed correctly
2. Scenario: Verify that image gallery can be clicked successfully
3. Scenario: Verify that Squarespace login functionality throws an error if incorrect details are provided - we will use a custom Cypress command for this scenario.

### Scenario 1 example code
```
it('should display the title correctly', () => {
  cy.get('#title').should('have.text', ' Marie Cruz ');
  cy.get('.icons > ul > li').should('have.length', 3);
});
```

### Scenario 4 example code
```
Cypress.Commands.add("login", (email, password) => { ... })
```

## Cypress CLI commands
- To run tests headlessly, use `npx cypress run`. By default, this will log the results on your terminal.
- To use a different type of Chrome browser, use `npx cypress run --browser [browserName]` (e.g. `npx cypress run --browser canary` canary if Canary is installed)
- To run a single spec file, use `npx cypress run --spec [path to your spec file]` (e.g `npx cypress run --spec cypress/integration/image.gallery.spec.js`)
- To record test runs, use `npx cypress run --record` however Dashboard service needs to be set up (next meetup!)   

## Further Reading

- [Official Cypress Documentation](https://docs.cypress.io)
- [Introduction to Cypress by Brian Mann](https://www.youtube.com/watch?v=pJ349YntoIs)
- [Example Cypress framework](https://github.com/cypress-io/cypress-example-kitchensink)
- [Integrating Cypress with your CI Provider](https://docs.cypress.io/guides/guides/continuous-integration.html)
