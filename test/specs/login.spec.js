// test/pageobjects/login.page.js

class LoginPage {
    // 🔸 This is username input box
    get inputUsername() {
        return $('#user-name');
    }

    // 🔸 This is password input box
    get inputPassword() {
        return $('#password');
    }

    // 🔸 This is login button
    get btnLogin() {
        return $('#login-button');
    }

    // 🔸 This is error message (shown if login fails)
    get errorMessage() {
        return $('h3[data-test="error"]');
    }

    // 🔸 Open the login page
    async open() {
        await browser.url('https://www.saucedemo.com/');
    }

    // 🔸 Perform login
    async login(username, password) {
        await this.inputUsername.setValue(username);
        await this.inputPassword.setValue(password);
        await this.btnLogin.click();
    }
}

// 🔸 Export this class as a ready object
module.exports = new LoginPage();
