describe('Forgot Password Functionality', () => {
  it('should send reset link to valid email', async () => {
    await browser.url('https://example.com/login');

    const forgotLink = await $('#forgotPasswordLink');
    await forgotLink.click();

    const emailInput = await $('#resetEmail');
    const sendButton = await $('#sendResetButton');

    await emailInput.setValue('phani@example.com');
    await sendButton.click();

    const successMsg = await $('#successMessage');
    await expect(successMsg).toBeDisplayed();
    await expect(successMsg).toHaveTextContaining('Password reset link sent');
  });
});

