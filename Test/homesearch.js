//var assert = require('assert'),
test = require('selenium-webdriver/testing');

var webdriver = require('selenium-webdriver'),
By = webdriver.By,
until = webdriver.until,

browser = new webdriver.Builder()
.usingServer('http://localhost:8000/wd/hub')
.withCapabilities({'browserName':'chrome'})
.build();

describe('City Search', function()
{
   // waits 10 seconds after each command
   this.timeout(10000);

   test.it('should enter a city and state', function()
   {
      // the page being tested
      browser.get('http://www.homes.com/');

      var searchField = browser.findElement(webdriver.By.xpath('//*[@id="main"]/article/div[1]/section/form/div/div/div[2]/div/div/label/div/input'));
      searchField.sendKeys('Henrico, VA');
   }

   test.it('should click the search button', function()
   {
      // clicks search button
      var searchButton = browser.findElement(webdriver.By.xpath('//*[@id="main"]/article/div[1]/section/form/div/div/div[2]/div/div/label/div/input'));
      searchButton.submit();
   }

   test.it('should select a property', function()
   {

      browser.findElement(webdriver.By.xpath('//*[@id="listing0"]/div/div[1]/div[2]/div[3]/a/span/div/span')).click();
    }
      // clicks property
      //browser.findElement(webdriver.By.xpath('//*[@id="listing0"]/div/div[1]/div[2]/div[3]/a/span/div/span')).click();

      // clicks property
      //browser.findElement(webdriver.By.className('property-price-display')).click();



  /* test.it('should fill out lead form', function()
   {
      browser.get('http://www.homes.com/property/1710-forestway-drive-henrico-va-23238/id-336614936/');

      var fullName = element(by.model('leadFormCtrl.leadFormParams.name'));
      var email = element(by.model('leadFormCtrl.leadFormParams.email'));
      var phone = element(by.model('leadFormCtrl.leadFormParams.phone'));

      fullName.sendKeys('Automated Lead');
      email.sendKeys('automatedlead@test.com');
      phone.sendKeys('7571234567');

   });

   test.it('should submit lead form', function()
   {
      // submits lead form
      browser.findElement(by.className('lead-form--submit')).click();
   });
});
*/
