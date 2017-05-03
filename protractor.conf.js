var HtmlReporter = require('protractor-html-screenshot-reporter');

var today = new Date(),
    timeStamp = today.getMonth() + 1 + '-' + today.getDate() + '-' + today.getFullYear() + ' [' + today.getHours() + '.' + today.getMinutes() + ']';

var reporter = new HtmlReporter({
    baseDirectory: './e2e-tests/results/' + timeStamp, // a location to store screen shots.
    docTitle: 'Test-report',
    docName: 'Test-report.html',
    takeScreenShotsOnlyForFailedSpecs: true
});

exports.config = {
    // setting timeouts
     getPageTimeout: 20,
     allScriptsTimeout: 20,
     framework: 'jasmine',
     
    /**
     Capabilities to be passed to the webdriver instance.
     you can specify more browsers for parallel test execution
     */
    multiCapabilities: [
        //{'browserName': 'firefox'} ,
        { 'browserName': 'chrome'}
    ],

    suites: {
        mainpage : './tests/mainpage_spec.js'
    },

    // Options to be passed to Jasmine-node.
    jasmineNodeOpts: {
        showColors: true, // Use colors in the command line report.
        // defaultTimeoutInterval: 30000,
        isVerbose: true,
        includeStackTrace: true
    },

    onPrepare: function() {
        jasmine.getEnv().addReporter(reporter);
    }
};