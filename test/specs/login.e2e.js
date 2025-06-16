const LoginPage = require('../pageobjects/login.page');

describe('Login Test', () => {
    it('should login successfully', async () => {
        await browser.url('https://chrome.com/login');
        await LoginPage.login('Phani', '1234');
    });
});

