('use strict');
browser.ignoreSynchronization = true;

describe("Set Dimension of Browaser", function () {

    it("Set Dimension of brower", function () {
        browser.get("https://developer.servicenow.com/app.do#!/home");
        browser.getTitle().then(function (value) {
            if (value == "ServiceNow Developers") {
                console.log("Test case passed");
            } else {
                console.log("Failed");
                console.log("Failed" + "   " + value);
            }
        }, function (reason) {

        }, function (value) {
           
        });
    });

    
    it("Wait", function () {
        browser.sleep(12000);
    });
});