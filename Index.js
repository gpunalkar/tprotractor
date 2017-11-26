"use strict";
/* import {
	element
} from "protractor"; */

// To support JavaScript project this need to define  

// Log module called simple-node-logger

jasmine.DEFAULT_TIMEOUT_INTERVAL= 99999999;
var log = require("./log");

// page driven logic for start page
var startPage = require("./start");
browser.ignoreSynchronization = true;

describe("Starting Personal ServiceNow Developer", function () {

	it("Redirecting to ServiceNow Developer Site", function () {
		browser.get("https://developer.servicenow.com/app.do");
		browser.sleep(10000);
		log.info("Redirected to Serviceow Developer Site: ", new Date().toJSON());
	});

	it("Logging to Service Now Developer Site", function () {
		//var ele = element(by.id("dp-hdr-login-link"));
		var ele = element(by.xpath("//*[@id='dp-hdr-login-link']"));
		browser.f
		ele.click();
		log.info("Logged to Service Now Developer Site: ", new Date().toJSON());
	});

	it("Logging to ServiceNow Developer Enviornment", function () {
		browser.sleep(12000);
		element(by.id("username")).sendKeys("ganesh.punalkar@gmail.com");
		element(by.id("password")).sendKeys("G@ne2019");
		element(by.id("submitButton")).click();
		//browser.waitForAngular();
		log.info("Waiting for on Servicenow Developer Instance", new Date().toJSON());
	});

	it("Manage Instance", function () {
		browser.sleep(12000);
		var ele = element(by.id('dp-hdr-br-manage-link'));
		ele.click();
		browser.sleep(12000);
		var ele2 = element(by.id('dp-hdr-br-link-instance'));
		ele2.click();
		//browser.waitForAngular();
		browser.debugger();
		log.info("Manageed ServiceNow Developer Intance: ", new Date().toJSON());
	});

	it("Wakeup Instance", function () {
		browser.sleep(12000);
		var ele = element(by.id('instanceWakeUpBtn'));
		ele.click();
		//browser.waitForAngular();
		//browser.debugger();
		log.info("Wakeup ServiceNow Developer Intance: ", new Date().toJSON());
	});


	it("Click Link", function () {
		browser.sleep(12000);
		var ele = element(by.partialLinkText('https://dev46440.service-now.com/'));
		ele.click();
		//browser.waitForAngular();
		
		log.info("Redirect ServiceNow Developer Intance: ", new Date().toJSON());
	});

	it("Change Tab", function () {
		browser.sleep(18000);
		browser.getAllWindowHandles().then(function (arr) {
			browser.switchTo().window(arr[0]);
			console.log("I am in new window" + window(arr[0]))
		});
	});

	it("Logging to ServiceNow Developer Instance: ", function () {
		browser.sleep(30000);
		
		function windowCount (count) {
		    return function () {
		        return browser.getAllWindowHandles().then(function (handles) {
		        	
		        	console.log(handles.length)
		            return handles.length === count;
		            
		            
		        });
		    };
		}; 
		//browser.getAllWindowHandles().then(function (arr) {
			//browser.switchTo().window(arr[1]).then(function () 
					//{
				
				//console.log("inside servinoce instanace new window");
				//browser.sleep(12000);
				element(by.id("user_name")).sendKeys("admin");
				element(by.xpath("//*[@id='user_password']")).sendKeys("G@ne2019");
				element(by.id("sysverb_login")).click();
				log.info("Loging to ServiceNow Developer Instance: ", new Date().toJSON());
			});
		});
	//});

	it("Final Wait", function () {
		browser.sleep(300000);
	});
//});