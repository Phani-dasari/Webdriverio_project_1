describe('Facebook Login Page Test', () => {
    it('should open Facebook and try to login', async () => {
        await browser.url('https://www.facebook.com/');

        // Accept cookies if popup appears
        const acceptCookies = await $('button[data-cookiebanner="accept_button"]');
        if (await acceptCookies.isDisplayed()) {
            await acceptCookies.click();
        }

        // Enter email
        const emailInput = await $('#email');
        await emailInput.setValue('testuser@example.com');

        // Enter password
        const passwordInput = await $('#pass');
        await passwordInput.setValue('TestPassword123');

        // Click login button
        const loginButton = await $('button[name="login"]');
        await loginButton.click();

        // Wait for some time to see result
        await browser.pause(5000);

        //
