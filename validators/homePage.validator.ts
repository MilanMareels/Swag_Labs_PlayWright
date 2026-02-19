import { expect } from "@playwright/test";
import { HomePage } from "../pages/homePage";

export class HomePageValidator {
  readonly homePage: HomePage;

  constructor(homePage: HomePage) {
    this.homePage = homePage;
  }

  async checkProducts(): Promise<void> {
    await expect(this.homePage.products).toBeVisible();
  }

  async checkHamburguerMenu(): Promise<void> {
    await expect(this.homePage.hamburguerMenu).toBeVisible();
  }

  async checkCard(): Promise<void> {
    await expect(this.homePage.card).toBeVisible();
  }

  async checkFilter(): Promise<void> {
    await expect(this.homePage.filter).toBeVisible();
  }

  async checkFooter(): Promise<void> {
    await expect(this.homePage.footer).toBeVisible();
  }

  async checkTotalProductsCount(): Promise<void> {
    await expect(this.homePage.productItem).toHaveCount(6);
  }

  async checkAllProductElementsAreVisible(): Promise<void> {
    const count = await this.homePage.productItem.count();
    for (let i = 0; i < count; i++) {
      await expect(this.homePage.productNames.nth(i)).toBeVisible();
      await expect(this.homePage.productDescriptions.nth(i)).toBeVisible();
      await expect(this.homePage.productPrices.nth(i)).toBeVisible();
    }
  }
}
