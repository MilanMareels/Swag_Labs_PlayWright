import { expect } from "@playwright/test";
import { LoginPage } from "../pages/loginPage";

export class LoginPageValidator {
  readonly loginPage: LoginPage;

  constructor(loginPage: LoginPage) {
    this.loginPage = loginPage;
  }

  async checkSuccessfulLogin(): Promise<void> {
    await expect(this.loginPage.page).toHaveURL(/.*inventory.html/);
  }

  async checkErrorMessageAfterBadLogin(): Promise<void> {
    await expect(this.loginPage.errorMessage).toBeVisible();
  }
}
