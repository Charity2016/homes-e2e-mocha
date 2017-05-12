describe('Homes.com home page', function()
{
   var search = element(by.model('searchQueryFieldCtrl.searchFormController.searchParams.search_query'));

   var fullName = element(by.model('leadFormCtrl.leadFormParams.name'));
   var email = element(by.model('leadFormCtrl.leadFormParams.email'));
   var phone = element(by.model('leadFormCtrl.leadFormParams.phone'));

   it('should navigate to the San Jose for sale page', function()
   {
      // the main page being tested
      browser.get('http://www.homes.com/for-sale/san-jose-ca/');

      // navigates to the for sale page
      //element(by.linkText('Homes For Sale')).click();
      //expect(browser.getCurrentUrl()).toBe('http://homes.com/for-sale/');
   });

   it('should enter and search by city', function()
   {
      // enters city into search field
      search.sendKeys('San Jose, CA');

      // clicks the search button
      //element(by.buttonText('Search')).click();
      //expect(browser.getCurrentUrl()).toBe('http://www.homes.com/for-sale/san-jose-ca/');
   });

   it('should select a property', function()
   {
      // clicks button to view property details
      element(by.className('property-price-display')).click();
      expect(browser.getCurrentUrl()).toBe('http://www.homes.com/property/853-cherry-creek-circle-san-jose-ca-95126/id-100012265076/');
   });

   it('should enter information and submit lead', function()
   {
      // enters info into lead form
      fullName.sendKeys('LoopBackTest Automate');
      email.sendKeys('automate@loopbacktest.com');
      phone.sendKeys('7571234567');

      // submits lead form
      element(by.className('lead-form--submit')).click();
   });

   it('should click the no thanks button', function()
   {
      // clicks the no thanks button
      element(by.buttonText('No Thanks')).click();
   });

   it('should close the confirmation window', function()
   {
      // closes confirmation window
      element(by.className('next-steps')).click();
   });



});
