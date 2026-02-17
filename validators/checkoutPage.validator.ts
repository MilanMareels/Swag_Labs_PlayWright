import { expect } from "@playwright/test";
import { CheckoutPage } from "../pages/checkoutPage";

export class CheckoutPageValidator {
  readonly checkoutPage: CheckoutPage;

  constructor(checkoutPage: CheckoutPage) {
    this.checkoutPage = checkoutPage;
  }

  async checkOrderCompletedSuccessfully(): Promise<void> {
    await expect(this.checkoutPage.completeHeader).toHaveText("Thank you for your order!");
  }

  async checkErrorMessage(expectedMessage: string): Promise<void> {
    await expect(this.checkoutPage.errorMessage).toBeVisible();
    await expect(this.checkoutPage.errorMessage).toHaveText(expectedMessage);
  }
}
