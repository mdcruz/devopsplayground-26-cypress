[Home](/README.md) |
[Remote Machine](https://rdp.devopsplayground.com/#/) |
[Project Setup](project-setup.md) |
[Cypress Test Runner](cypress-test-runner.md) |
[Cypress Cheat Sheet](cheat-sheet.md) |
[Scenario 1](scenario1.md) |
[Scenario 2](scenario2.md) |
[Scenario 3](scenario3.md) |
[CLI commands](cli-commands.md) 

# Cypress CLI commands

For this playground, I will also demonstrate how to use some of the other useful Cypress CLI commands.

- To run tests headlessly, use `npx cypress run`. By default, this will log the results on your terminal.
- To use a different type of Chrome browser, use `npx cypress run --browser [browserName]` (e.g. `npx cypress run --browser canary` if Canary is installed)
- To run a single spec file, use `npx cypress run --spec [path to your spec file]` (e.g `npx cypress run --spec cypress/integration/image.gallery.spec.js`)
- To record test runs, use `npx cypress run --record` however Dashboard service needs to be set up (next meetup!)  