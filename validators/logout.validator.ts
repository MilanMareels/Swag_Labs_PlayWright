import { expect } from "@playwright/test";
import { LogoutPage } from "../pages/logoutPage";

export class LogoutValidator {
  readonly logoutPage: LogoutPage;

  constructor(logoutPage: LogoutPage) {
    this.logoutPage = logoutPage;
  }

  async checkSuccessfulLogtout(): Promise<void> {
    await expect(this.logoutPage.logInForm).toBeVisible();
  }
}
