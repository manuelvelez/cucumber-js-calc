'use strict';

var expect = require('chai').expect;

module.exports = function() {
	this.World = require('../support/world.js').World;

this.Given(/^the calculator$/, function (next) {
	this.driver.findElement({ name: "clear" }).click();
  next();
});

this.When(/^I write a (.*)$/, function (number1, next) {
	this.driver.findElement({ name: 'Input' }).sendKeys(number1);
  next();
});

this.When(/^I click on a (.*)$/, function (operation, next) {
	this.driver.findElement({ name: operation }).click();
  next();
});

this.When(/^I Write a (.*)$/, function (number2, next) {
	this.driver.findElement({ name: 'Input' }).sendKeys(number2);
  next();
});

this.When(/^I click on equal button$/, function (next) {
	this.driver.findElement({ name: "DoIt" }).click();
  next();
});

this.Then(/^(.*) is shown in the screen$/, function (expectedResult, next) {
    	this.driver.findElement({ name: 'Input' }).getAttribute("value")
      		.then(function(operationResult) {
        		expect(operationResult).equal(expectedResult);
      });

  next();
});


};

