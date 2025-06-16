// test/specs/registration.e2e.js

const RegistrationPage = require('../pageobjects/registration.page');

describe('Registration Form Test', () => {
    it('should register a new user successfully', async () => {
        await RegistrationPage.open();

        const testData = {
            firstName: 'Phani',
            lastName: 'Dasari',
            email: 'phani@example.com',
            mobile: '9876543210'
        };

        await RegistrationPage.fillForm(testData);

        // Assert modal success title
        await expect(RegistrationPage.modalTitle).toBeDisplayed();
        await expect(RegistrationPage.modalTitle).toHaveTextContaining('Thanks for submitting the form');
    });
});
