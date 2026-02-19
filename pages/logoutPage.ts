import { Locator, Page } from "@playwright/test";

export class LogoutPage {
  readonly page: Page;
  readonly hamburgerMenu: Locator;
  readonly logoutButton: Locator;
  readonly logInForm: Locator;

  constructor(page: Page) {
    this.page = page;
    this.hamburgerMenu = page.locator("#react-burger-menu-btn");
    this.logoutButton = page.locator("#logout_sidebar_link");
    this.logInForm = page.locator('[data-test="login-container"]');
  }
}
