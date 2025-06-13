// If folder is called PageObjects
const loginPage = require('../../pageobjects/login.page');

describe('SauceDemo Login', () => {
    it('should login using error_user and secret_sauce', async () => {
        await loginPage.open();
        await loginPage.login('error_user', 'secret_sauce');
        await browser.pause(6000); // Wait for 5 seconds
    });
});
