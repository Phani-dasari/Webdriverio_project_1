   const LoginPage = require('../pageobjects/login.page');
const InventoryPage = require('../pageobjects/inventory.page');  // ✅ import

describe('SauceDemo Login Tests', () => {

    it('should login with valid user', async () => {
        await LoginPage.open();
        await LoginPage.login('standard_user', 'secret_sauce');
        await expect(browser).toHaveUrlContaining('inventory.html');
    });

    it('should show error message for invalid login', async () => {
        await LoginPage.open();
        await LoginPage.login('wrong_user', 'wrong_pass');
        await expect(LoginPage.errorMessage).toBeDisplayed();
        await expect(LoginPage.errorMessage).toHaveTextContaining('Username and password do not match');
    });

    it('should show locked out message for locked_out_user', async () => {
        await LoginPage.open();
        await LoginPage.login('locked_out_user', 'secret_sauce');
        await expect(LoginPage.errorMessage).toBeDisplayed();
        await expect(LoginPage.errorMessage).toHaveTextContaining('locked out');
    });

    it('should logout successfully from inventory page', async () => {
        await LoginPage.open();
        await LoginPage.login('standard_user', 'secret_sauce');
        await expect(browser).toHaveUrlContaining('inventory.html');

        await InventoryPage.logout();
        await expect(browser).toHaveUrlContaining('saucedemo.com');
        await expect(LoginPage.inputUsername).toBeDisplayed();  // back to login page
    });

});
    it('should display all products after login', async () => {
        await LoginPage.open();
        await LoginPage.login('standard_user', 'secret_sauce');
        await expect(browser).toHaveUrlContaining('inventory.html');

        const products = await InventoryPage.allProducts;
        expect(products.length).toBe(6); // ✅ should be 6 products

        const names = await InventoryPage.getProductNames();
        console.log('Product Names:', names); // 🛍 optional log
        expect(names.length).toBeGreaterThan(0); // just in case
    });



