var Commons = function () {
	this.setAttribute = function(element, attName, attValue) {
        driver.executeScript("arguments[0].setAttribute(arguments[1], arguments[2]);",
            element, attName, attValue);
    }
};
module.exports = new Commons();