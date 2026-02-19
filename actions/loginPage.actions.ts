import { LoginPage } from "../pages/loginPage";

export class LoginPageActions {
  readonly loginPage: LoginPage;

  constructor(loginPage: LoginPage) {
    this.loginPage = loginPage;
  }

  async goToLoginPage() {
    await this.loginPage.page.goto("https://www.saucedemo.com/");
  }

  async login(username: string, password: string) {
    await this.loginPage.userNameInput.fill(username);
    await this.loginPage.passwordInput.fill(password);

    await this.clickLoginButton();
  }

  async clickLoginButton(): Promise<void> {
    await this.loginPage.loginButton.click();
  }
}
