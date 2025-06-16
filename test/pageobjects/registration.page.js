// test/pageobjects/registration.page.js

class RegistrationPage {
    // form fields
    get firstName() { return $('#firstName'); }
    get lastName() { return $('#lastName'); }
    get email() { return $('#userEmail'); }
    get genderMale() { return $('label[for="gender-radio-1"]'); }
    get mobileNumber() { return $('#userNumber'); }
    get submitBtn() { return $('#submit'); }

    // success modal
    get modalTitle() { return $('#example-modal-sizes-title-lg'); }

    async open() {
        await browser.url('https://demoqa.com/automation-practice-form');
    }

    async fillForm(data) {
        await this.firstName.setValue(data.firstName);
        await this.lastName.setValue(data.lastName);
        await this.email.setValue(data.email);
        await this.genderMale.click();
        await this.mobileNumber.setValue(data.mobile);
        await this.submitBtn.click();
    }
}

module.exports = new RegistrationPage();
