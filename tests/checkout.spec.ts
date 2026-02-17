import { test } from "../fixtures/page.fixtures";
import { LoginPageActions } from "../actions/loginPage.actions";
import { HomePageActions } from "../actions/homePage.actions";
import { CheckoutPageActions } from "../actions/checkoutPage.actions";
import { CheckoutPageValidator } from "../validators/checkoutPage.validator";
import { CartPageActions } from "../actions/cartPage.actions";

test.describe("Checkout Pagina - Alle Paden", () => {
  let checkoutPageActions: CheckoutPageActions;
  let checkoutPageValidator: CheckoutPageValidator;

  test.beforeEach(async ({ loginPage, homePage, cartPage, checkoutPage }) => {
    const loginPageActions = new LoginPageActions(loginPage);
    const homePageActions = new HomePageActions(homePage);
    const cartPageActions = new CartPageActions(cartPage);

    checkoutPageActions = new CheckoutPageActions(checkoutPage);
    checkoutPageValidator = new CheckoutPageValidator(checkoutPage);

    await loginPageActions.goToLoginPage();
    await loginPageActions.login("standard_user", "secret_sauce");
    await homePageActions.addBackpackToCart();
    await homePageActions.goToCart();
    await cartPageActions.proceedToCheckout();
  });

  test("HAPPY PATH: Succesvol afrekenen", async () => {
    await checkoutPageActions.fillCustomerInformation("Test", "Automator", "1234");
    await checkoutPageActions.finishOrder();
    await checkoutPageValidator.checkOrderCompletedSuccessfully();
  });

  test("UNHAPPY PATH: Foutmelding bij missende voornaam", async () => {
    await checkoutPageActions.fillCustomerInformation("", "Automator", "1234");
    await checkoutPageValidator.checkErrorMessage("Error: First Name is required");
  });

  test("UNHAPPY PATH: Foutmelding bij missende achternaam", async () => {
    await checkoutPageActions.fillCustomerInformation("Test", "", "1234");
    await checkoutPageValidator.checkErrorMessage("Error: Last Name is required");
  });

  test("UNHAPPY PATH: Foutmelding bij missende postcode", async () => {
    await checkoutPageActions.fillCustomerInformation("Test", "Automator", "");
    await checkoutPageValidator.checkErrorMessage("Error: Postal Code is required");
  });
});
