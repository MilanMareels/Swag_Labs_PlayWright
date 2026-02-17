import { CheckoutPage } from "../pages/checkoutPage";

export class CheckoutPageActions {
  readonly checkoutPage: CheckoutPage;

  constructor(checkoutPage: CheckoutPage) {
    this.checkoutPage = checkoutPage;
  }

  async startCheckout() {
    await this.checkoutPage.checkoutButton.click();
  }

  async fillCustomerInformation(firstName: string, lastName: string, postalCode: string) {
    await this.checkoutPage.firstNameInput.fill(firstName);
    await this.checkoutPage.lastNameInput.fill(lastName);
    await this.checkoutPage.postalCodeInput.fill(postalCode);
    await this.checkoutPage.continueButton.click();
  }

  async finishOrder() {
    await this.checkoutPage.finishButton.click();
  }
}
