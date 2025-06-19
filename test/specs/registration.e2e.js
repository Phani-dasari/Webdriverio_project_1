const path = require('path');

it('should upload a file during registration', async () => {
    await RegistrationPage.open();

    const testData = {
        firstName: 'Phani',
        lastName: 'Dasari',
        email: 'phani@example.com',
        mobile: '9876543210'
    };

    await RegistrationPage.fillForm(testData);

    const filePath = path.join(__dirname, '../resources/testfile.png');
    await RegistrationPage.uploadFile(filePath);

    await RegistrationPage.submitBtn.click();

    await expect(RegistrationPage.modalTitle).toBeDisplayed();
    const filePath = path.join(__dirname, '../resources/testfile.png');
await RegistrationPage.uploadFile(filePath);

// ⏸️ Pause for 1 minute (60000 ms)
await browser.pause(60000);

await RegistrationPage.submitBtn.click();

});
