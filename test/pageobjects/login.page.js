const LoginPage = require('../../pageobjects/login.page');

describe('Snapchat Login Test', () => {
    it('should login with valid credentials', async () => {
        await LoginPage.open();
        await LoginPage.login('snapuser', 'password123');

        // Example validation (customize as needed)
        await expect(browser).toHaveUrlContaining('dashboard');
    });
});
