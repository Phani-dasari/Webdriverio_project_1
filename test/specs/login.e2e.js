describe('Bank Login Test', () => {
  it('should login to the bank account', async () => {
    // open bank login page
    await browser.url('https://demo.guru99.com/V4/index.php');

    // locate username field
    const userIdInput = await $('input[name="uid"]');

    // locate password field
    const passwordInput = await $('input[name="password"]');

    // locate login button
    const loginButton = await $('input[name="btnLogin"]');

    // wait for fields to be displayed
    await userIdInput.waitForDisplayed({ timeout: 5000 });

    // enter login credentials
    await userIdInput.setValue('mngr625501');     
    await passwordInput.setValue('YzudErE');   

    // click login
    await loginButton.click();

    // optional: wait for page load
    await browser.pause(3000);
  });
});
