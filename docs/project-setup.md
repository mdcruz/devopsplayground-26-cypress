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

# Cypress Project Setup

Once you are succesfully logged in to your instance, follow the steps below to setup Cypress.

1. On your desktop, click Visual Studio Code
2. Click on Open Folder

![](/images/vscode-open.png)

3. Navigate to this folder `C:\playground\devopsplayground-26-cypress` and click Select folder

![](/images/folder-navigation.png)

4. Once the project is loaded on Visual Studio, let's open up the terminal to run some commands.

![](/images/vscode-terminal.png)

5. To verify if Cypress has been installed correctly, on the terminal type in:

```
npx cypress verify
```

You should see a message that Cypress is verified and ready to use.

6. On the same terminal window, let's start up the sample application that we are testing today by typing in:

```
npm run start
```

Please note that by default, Internet Explorer will launch and you might see some popup errors getting displayed or see that the application is not rendering at all. As a workaround, please open `http://localhost:3000/` on Chrome browser instead.

![](/images/react-app.png)

7. To open Cypress, let's go back to Visual Studio Code and open up a new terminal.

![](/images/vscode-new-terminal.png)

On the new terminal, type in:

```
npx cypress open
```

You should then see the Cypress Test Runner up and running with 2 spec files.

![](/images/cypress-runner.png)

If you click one of the spec files, Cypress will display the tests available as well as the application under test.

![](/images/cypress-tests.png)
