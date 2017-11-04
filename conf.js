'usr strict';
exports.config = {

  directConnect : true,

  //seleniumAddress: 'http://192.168.2.6:4444/wd/hub',
  specs: ['first.js'], 
  
  jasmineNodeOpts: {
    defaultTimeoutInterval: 9000
  },
  
onPrepare: function() { 
    browser.ignoreSynchronization = true; 
  } 
};

