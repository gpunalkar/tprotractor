('use strict');
browser.ignoreSynchronization = true;

describe("Open Browser", function () {

    it("I wat to check text of login", function () {
        browser.get("https://developer.servicenow.com/app.do");
        browser.sleep(12000);
    });
    
    it("Resize Window", function () {
        browser.sleep(12000);
        browser.manage().window().setSize(300, 300);
    });

    it("Maximise Window", function () {
        browser.sleep(12000);
        browser.manage().window().maximize();
        
    });

    it("Wait", function () {
        browser.sleep(12000);
    });
});