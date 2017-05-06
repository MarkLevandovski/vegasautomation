Project structure:

root/ -> protractor.conf.js file with configuration of the test
pages/ -> Page Object classes
test/ -> test scenarios

How to run:
Pre-requisites:
Install:
- Node.js on you PC
- Protractor by command "npm install -g protractor"
- screenshot reporter by command "npm install protractor-html-screenshot-reporter"
- update webdriver by command "webdriver-manager update"

To run the test you need to start Selenium Server, use "webdriver-manager start" in command line.

Run test by command "protractor protractor.conf.js" executed in project root directory,
