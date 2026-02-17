import { Page, Locator } from "@playwright/test";

export class CartPage {
  readonly page: Page;
  readonly checkoutButton: Locator;
  readonly continueShoppingButton: Locator;
  readonly inventoryItemName: Locator;
  readonly removeButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.checkoutButton = page.locator('[data-test="checkout"]');
    this.continueShoppingButton = page.locator('[data-test="continue-shopping"]');
    this.inventoryItemName = page.locator(".inventory_item_name");
    this.removeButton = page.locator('button[data-test^="remove-"]');
  }
}
