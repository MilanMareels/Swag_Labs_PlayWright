import { HomePage } from "../pages/homePage";

export class HomePageActions {
  readonly homePage: HomePage;

  constructor(homePage: HomePage) {
    this.homePage = homePage;
  }

  async addBackpackToCart() {
    await this.homePage.addToCartBackpackButton.click();
  }

  async removeBackpackFromCart() {
    await this.homePage.removeBackpackButton.click();
  }

  async goToCart() {
    await this.homePage.cartIcon.click();
  }

  async sortProducts(optionValue: string) {
    await this.homePage.sortDropdown.selectOption(optionValue);
  }

  async logout() {
    await this.homePage.burgerMenuButton.click();
    await this.homePage.logoutLink.click();
  }
}
