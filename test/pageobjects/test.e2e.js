describe('WebdriverIO Practice Test', () => {
    it('should open WebdriverIO homepage and check the title', async () => {
        // Open WebdriverIO website
        await browser.url('https://webdriver.io');

        // Get the title of the page
        const title = await browser.getTitle();

        // Print the title in terminal
        console.log('Page title:', title);

        // Assertion to verify title is correct
        expect(title).toContain('WebdriverIO');
        await browser.url(5000);
    });
});
