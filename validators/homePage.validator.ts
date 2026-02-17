import { expect } from "@playwright/test";
import { HomePage } from "../pages/homePage";

export class HomePageValidator {
  readonly homePage: HomePage;

  constructor(homePage: HomePage) {
    this.homePage = homePage;
  }

  async checkCartBadgeCount(expectedCount: string): Promise<void> {
    await expect(this.homePage.cartBadge).toHaveText(expectedCount);
  }
}
