'use strict';

// protractor can be work on javascript site need to set the following  setting
browser.ignoreSynchronization = true;

// to get the url use browser get method
browser.get('https://developer.servicenow.com');

/* describe("I want to test service now page", function () {

    it("I want to check the text", function () {

        // use the element to get element by id
        var ele = element(by.id("dp-hdr-login-link"));

        // 
        ele.getText().then(function (value) {
            console.log(value);
        }, function (reason) {
            console.log(reason);
        }, function (value) {
            console.log(value);
        });
    });
}); */

describe("Login Page", function () {
    it("Log in user & password", function () {
        browser.sleep(12000);
        var ele = element(by.id("dp-hdr-login-link"));
        ele.click();
        element(by.id("username")).sendKeys("ganesh.punalkar@gmail.com");
        element(by.id("password")).sendKeys("G@ne2019");
        element(by.id("submitButton")).click();
    });
});

describe("Login Page", function () {
    browser.sleep(12000);
    console.log("I am  end");
});