class LoginPage {
  get usernameInput() { return $('#username'); }
  get passwordInput() { return $('#password'); }
  get loginButton() { return $('#login-button'); }

  async login(username, password) {
    await this.usernameInput.setValue(username);
    await this.passwordInput.setValue(password);
    await this.loginButton.click();
  }

  open() {
    await browser.url('/login');
  }
}
module.exports = new LoginPage();

