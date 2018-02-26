/*
*/


var webdriver = require('selenium-webdriver');
var browser = new webdriver.Builder()
.usingServer('http://localhost:8000/wd/hub')
.withCapabilities({'browserName':'Firefox'})
.build();

//Search for a home in Norfolk VA
browser.get('http://www.homes.com/for-sale/norfolk-va/');

//Ener San Jose, CA
var element = browser.findElement(webdriver.By.name('search_query'));
element.sendKeys('San Jose, CA');

element.submit();

var element = browser.findElement(webdriver.By.className('priceDisplayCtrl.displayClass')).click();

function logTitle()
{
    browser.getTitle().then(function(title)
    {
        console.log('The title is: ' + title);
    });
}
