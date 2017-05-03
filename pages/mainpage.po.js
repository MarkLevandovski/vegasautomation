var commons = require('../commons.js');
var MainPage = function () {
    var EC = protractor.ExpectedConditions;

    // page objects
    this.magnifierButton = element(by.css('.btn-search-magnifier'));
    this.searchBar = element(by.css('div.search__input-wrapper > input'));
    this.moreButton = element(by.css('.fa.fa-angle-down'));
    this.activeTile = element(by.css('.tiles-shift-group__item--right'));
    this.gameDetails = element(by.css('.tile-details'));
    this.playButton = element(by.css('.o-btn--big'));
    this.loginBox = element(by.cssContainingText('.modal-title', "Login"));

    this.getLoginBox = function () {
        return this.loginBox;
    };

    /**
     * function move mouse to given element
     * @param element - object to locate
     */
    this.hoverToElement = function(element) {
        browser.actions().mouseMove(element).perform();
    }

    /**
     Method to select magnifier and enter game title
     @param gameTitle - title of the game
     */
    this.searchGame = function (gameTitle) {
        browser.wait(EC.presenceOf(this.magnifierButton), 10000);
        expect(this.magnifierButton.isPresent()).toBeTruthy();

        this.magnifierButton.click();
        expect(this.searchBar.isPresent()).toBeTruthy();

        this.searchBar.sendKeys(gameTitle);
        browser.wait(EC.presenceOf(this.searchBar), 10000);
        expect(this.searchBar.getAttribute('value')).toEqual(gameTitle);

        this.gameTile = element(by.cssContainingText('.tile__title', gameTitle));
        browser.wait(EC.presenceOf(this.gameTile), 10000);
        expect(this.gameTile.isPresent()).toBeTruthy();

        this.hoverToElement(this.gameTile);
        browser.wait(EC.presenceOf(this.activeTile), 10000);
        expect(this.activeTile.isPresent()).toBeTruthy();

        browser.wait(EC.presenceOf(this.moreButton), 10000);
        expect(this.moreButton.isPresent()).toBeTruthy();

        this.moreButton.click();
        browser.wait(EC.presenceOf(this.gameDetails), 10000);
        expect(this.gameDetails.isPresent()).toBeTruthy();

        browser.wait(EC.presenceOf(this.playButton), 10000);
        expect(this.playButton.isPresent()).toBeTruthy();

        this.playButton.click();
        browser.wait(EC.presenceOf(this.loginBox), 10000);
    };
};
MainPage.prototype = commons;
module.exports = new MainPage();