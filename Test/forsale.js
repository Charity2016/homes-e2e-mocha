/*
* Test for test lead
*/

//All Files 7-11
//Use wait when clicking something that will then go to another page
var webdriver = require('selenium-webdriver'),
test = require('selenium-webdriver/testing'),

  By = webdriver.By,
  until = webdriver.until,
  browser = new webdriver.Builder()
    .usingServer('http://localhost:8000/wd/hub')
    .withCapabilities({'browserName':'chrome'})
    .build();

describe('search for a location', function()
  {

this.timeout(10000);
test.it('Click on property listing', function()
  {
  browser.get('http://www.homes.com/for-sale/henrico-va/');

var property = browser.wait(until.elementLocated(By.xpath('//*[@id="main"]/section/div[2]/div[1]/div[1]/div/ul/li[1]')),10000);
property.click();
});

test.it('Enter info into lead form and submit', function()
  {

var fullName = browser.findElement(By.name('name')).sendKeys('Loopbacktest Charbear');

var email = browser.findElement(By.name('email')).sendKeys('charbear@automateeadtest.com');

var phone = browser.findElement(By.name('phone')).sendKeys('5390339001');
});

test.it('Submit lead form', function()
  {

var submitlead = browser.findElement(By.xpath('//*[@id="main"]/article/div[2]/div[1]/div[2]/div/div/form/div[5]')).click();

});
test.it('Close Mortgage lead form', function()
  {

var closeMorgLeadForm = browser.wait(until.elementLocated(By.className('ngdialog-close')), 10000);
      closeMorgLeadForm.click();
});

test.it('Click on save property listing', function()
  {


var waitonprop = browser.wait(until.elementLocated(By.className('watch-price ng-scope ng-binding')),10000);
waitonprop.click();
});


test.it('create an account information', function()
{

  var fullName = browser.findElement(By.xpath('//*[@id="ngdialog3"]/div[2]/div[1]/div/div/div[2]/div[3]/label[1]/div/input'));
  fullName.sendKeys('Charbear Testing');

  var email = browser.findElement(By.xpath('//*[@id="ngdialog3"]/div[2]/div[1]/div/div/div[2]/div[3]/label[2]/div/input'));
  email.sendKeys('charbear2@automate.com');

  var password = browser.findElement(By.xpath('//*[@id="ngdialog3"]/div[2]/div[1]/div/div/div[2]/div[3]/label[3]/div/input')); password.sendKeys('Testing123');

  var confirmpassword = browser.findElement(By.name('confirm'));
  confirmpassword.sendKeys('Testing123');
});

test.it('click the vertran checkbox',function()

{
  var checkbox = browser.findElement(By.className('veteran'));
  checkbox.click()

  });

test.it('Click create an account', function()
{
  var button = browser.findElement(By.xpath('//*[@id="ngdialog3"]/div[2]/div[1]/div/div/div[2]/div[4]/button'));
  button.click()
});

test.it('Close the dialogue box after creating an account', function()
{
  var closebox = browser.findElement(By.className('ngdialog-close'));
  closebox.click()
});

});

//browser.findElement(By.xpath('//*[@id="ngdialog1"]/div[2]/div[4]')).click();

// Fill in name
//browser.wait(until.elementLocated(By.xpath('//*[@id="main"]/article/div[2]/div[1]/div[2]/div/div[1]/form/div[1]/label[1]/div/input')), 10000);
//browser.findElement(By.xpath('//*[@id="main"]/article/div[2]/div[1]/div[2]/div/div[1]/form/div[1]/label[1]/div/input')).sendKeys('Loopbacktest Char');
//browser.sleep(10000);


//browser.wait(until.elementLocated(By.xpath('//*[@id="main"]/article/div[2]/div[1]/div[2]/div/div[1]/form/div[1]/label[2]/div/input')), 10000);
//browser.findElement(By.xpath('//*[@id="main"]/article/div[2]/div[1]/div[2]/div/div[1]/form/div[1]/label[2]/div/input')).sendKeys('charhere@automate.com');
//browser.sleep(10000);

//browser.wait(until.elementLocated(By.xpath('//*[@id="main"]/article/div[2]/div[1]/div[2]/div/div[1]/form/div[1]/label[3]/div/input')), 10000);
//browser.findElement(By.xpath('//*[@id="main"]/article/div[2]/div[1]/div[2]/div/div[1]/form/div[1]/label[3]/div/input')).sendKeys('5546667890');
//browser.sleep(10000);



//browser.findElement(webdriver.By.xpath('//*[@id="main"]/article/div[2]/div[1]/div[2]/div/div[1]/form/div[4]/button')
//browser.findElement(By.xpath('//*[@id="main"]/article/div[2]/div[1]/div[2]/div/div[1]/form/div[4]/button')).click();
