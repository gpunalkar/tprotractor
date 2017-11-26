'use strict';

var loginPage = function () {

    this.userName = function () {
        retrun.browser.findElement(by.id('dp-hdr-login-link'));
    }

    this.password = function () {
    	
        retrun.browser.findElement(by.id(''));
    }

    this.setUserName = function () {
        this.userName().sendKeys(text)
    }
}

module.export = new loginPage;