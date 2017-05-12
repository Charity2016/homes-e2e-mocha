/*
* Test for test lead
*/

//"use strict";
//All Files 7-11
var webdriver = require('selenium-webdriver'),
  By = webdriver.By,
  until = webdriver.until,
  browser = new webdriver.Builder()
    .usingServer('http://localhost:8000/wd/hub')
    .withCapabilities({'browserName':'chrome'})
    .build();


browser.get('http://www.homes.com/for-sale/winchester-va/');
browser.findElement(By.className('property-price-display')).click();

// Fill in name
browser.wait(until.elementLocated(By.xpath('//*[@id="main"]/article/div[2]/div[1]/div[2]/div/div[1]/form/div[1]/label[1]/div/input')), 10000);
browser.findElement(By.xpath('//*[@id="main"]/article/div[2]/div[1]/div[2]/div/div[1]/form/div[1]/label[1]/div/input')).sendKeys('Loopbacktest Char');
browser.sleep(10000);

browser.wait(until.elementLocated(By.xpath('//*[@id="main"]/article/div[2]/div[1]/div[2]/div/div[1]/form/div[1]/label[2]/div/input')), 10000);
browser.findElement(By.xpath('//*[@id="main"]/article/div[2]/div[1]/div[2]/div/div[1]/form/div[1]/label[2]/div/input')).sendKeys('charhere@automate.com');
browser.sleep(10000);

browser.wait(until.elementLocated(By.xpath('//*[@id="main"]/article/div[2]/div[1]/div[2]/div/div[1]/form/div[1]/label[3]/div/input')), 10000);
browser.findElement(By.xpath('//*[@id="main"]/article/div[2]/div[1]/div[2]/div/div[1]/form/div[1]/label[3]/div/input')).sendKeys('5546667890');
browser.sleep(10000);






// browser.findElement(webdriver.By.className('lead-form--submit'));
