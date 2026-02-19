import { Page, Locator } from "@playwright/test";

export class HomePage {
  readonly page: Page;
  readonly products: Locator;
  readonly productItem: Locator;
  readonly hamburguerMenu: Locator;
  readonly card: Locator;
  readonly filter: Locator;
  readonly footer: Locator;

  readonly productNames: Locator;
  readonly productPrices: Locator;
  readonly productDescriptions: Locator;

  constructor(page: Page) {
    this.page = page;
    this.products = page.locator('[data-test="inventory-list"]');
    this.productItem = page.locator('[data-test="inventory-item"]');
    this.hamburguerMenu = page.locator("#react-burger-menu-btn");
    this.card = page.locator("#shopping_cart_container");
    this.filter = page.locator("[data-test='product-sort-container']");
    this.footer = page.locator("[data-test='footer']");

    this.productNames = page.locator('[data-test="inventory-item-name"]');
    this.productPrices = page.locator('[data-test="inventory-item-price"]');
    this.productDescriptions = page.locator('[data-test="inventory-item-desc"]');
  }
}
