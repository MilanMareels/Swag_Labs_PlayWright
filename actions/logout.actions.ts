import { LogoutPage } from "../pages/logoutPage";

export class LogoutActions {
  readonly logoutPage: LogoutPage;

  constructor(logoutPage: LogoutPage) {
    this.logoutPage = logoutPage;
  }

  async logout() {
    await this.logoutPage.hamburgerMenu.click();
    await this.logoutPage.logoutButton.click();
  }
}
