var mainPage = require('../pages/mainpage.po.js');
var commons = require('../commons.js');

describe('Vegas test', function () {

    beforeAll(function () {
        browser.waitForAngularEnabled(false);
        browser.driver.manage().window().maximize();
        browser.get('https://vegas.williamhill.com/');
    });

    it("should search given game, " +
        "select More button and click play, " +
        "then verify that Login box is displayed", function () {

        mainPage.searchGame("Mayfair Roulette");
        expect(mainPage.getLoginBox().isPresent()).toBeTruthy();

    }, 60000);
});