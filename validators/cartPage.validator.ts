import { expect } from "@playwright/test";
import { CartPage } from "../pages/cartPage";

export class CartPageValidator {
  readonly cartPage: CartPage;

  constructor(cartPage: CartPage) {
    this.cartPage = cartPage;
  }

  async checkItemIsVisible(itemName: string): Promise<void> {
    await expect(this.cartPage.inventoryItemName.filter({ hasText: itemName })).toBeVisible();
  }

  async checkCartIsEmpty(): Promise<void> {
    await expect(this.cartPage.inventoryItemName).toHaveCount(0);
  }
}
