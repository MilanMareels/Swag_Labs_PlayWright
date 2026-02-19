import { test as base } from "@playwright/test";
import { HomePage } from "../pages/homePage";
import { LoginPage } from "../pages/loginPage";
import { LogoutPage } from "../pages/logoutPage";

type PageFixtures = {
  homePage: HomePage;
  loginPage: LoginPage;
  logoutPage: LogoutPage;
};

export const test = base.extend<PageFixtures>({
  homePage: async ({ page }, use) => {
    await use(new HomePage(page));
  },
  loginPage: async ({ page }, use) => {
    await use(new LoginPage(page));
  },
  logoutPage: async ({ page }, use) => {
    await use(new LogoutPage(page));
  },
});
