describe('Open Facebook login via Google Search', () => {
    it('should open browser and show Facebook login elements', async () => {
        // Step 1: Open Google
        await browser.url('https://www.google.com/');
        await browser.pause(2000);

        // Step 2: Search "Facebook login"
        const searchBox = await $('[name="q"]');
        await searchBox.setValue('Facebook login');
        await browser.keys('Enter');

        // Step 3: Click the Facebook login link
        await browser.pause(3000);
        const fbLink = await $('a[href*="facebook.com"]');
        await fbLink.click();

        // Step 4: Wait for Facebook login page
        await browser.pause(5000);
        const emailInput = await $('#email');
        const passwordInput = await $('#pass');
        const loginButton = await $('button[name="login"]');

        // Step 5: Check and print the elements
        if (await emailInput.isDisplayed()) {
            console.log('✅ Email input is visible');
        }
        if (await passwordInput.isDisplayed()) {
            console.log('✅ Password input is visible');
        }
        if (await loginButton.isDisplayed()) {
            console.log('✅ Login button is visible');
        }

        await browser.pause(3000); // Optional: Just to view the page
    });
});

