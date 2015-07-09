'use strict';

var fs = require('fs');
var webdriver = require('selenium-webdriver');
var platform = process.env.PLATFORM || "CHROME";

var buildAndroidDriver = function() {
  return new webdriver.Builder().
    usingServer('http://localhost:4723/wd/hub').
    withCapabilities({
      platformName: 'Android',
      platformVersion: '4.4',
      deviceName: 'Android Emulator',
      browserName: 'Chrome'
    }).
    build();
};

var buildChromeDriver = function() {
  return new webdriver.Builder().
    withCapabilities(webdriver.Capabilities.chrome()).
    build();
};

var buildElectronDriver = function() {
console.log('http://localhost:'+process.env.npm_package_config_port);
console.log(process.env.npm_package_config_binary);
return new webdriver.Builder()
  .usingServer('http://localhost:'+process.env.npm_package_config_port)
  .withCapabilities({chromeOptions: {
    binary: process.env.npm_package_config_binary}})
  .forBrowser('electron').build();
};

switch(platform) {
  case 'ANDROID':
    var driver = buildAndroidDriver();
    break;
  default:
    var driver = buildElectronDriver();
}

var getDriver = function() {
  return driver;
};

var World = function World(callback) {

  var defaultTimeout = 20000;
  var screenshotPath = "screenshots";

  this.webdriver = webdriver;
  this.driver = driver;

  if(!fs.existsSync(screenshotPath)) {
    fs.mkdirSync(screenshotPath);
  }
  
  this.waitFor = function(cssLocator, timeout) {
    var waitTimeout = timeout || defaultTimeout;
    return driver.wait(function() {
      return driver.isElementPresent({ css: cssLocator });
    }, waitTimeout);
  };

  callback();
};

module.exports.World = World;
module.exports.getDriver = getDriver;
