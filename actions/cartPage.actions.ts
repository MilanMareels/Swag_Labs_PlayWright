import { CartPage } from "../pages/cartPage";

export class CartPageActions {
  readonly cartPage: CartPage;

  constructor(cartPage: CartPage) {
    this.cartPage = cartPage;
  }

  async proceedToCheckout() {
    await this.cartPage.checkoutButton.click();
  }

  async continueShopping() {
    await this.cartPage.continueShoppingButton.click();
  }

  async removeFirstItem() {
    await this.cartPage.removeButton.first().click();
  }
}
