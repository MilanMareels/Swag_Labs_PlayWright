import { test } from "../fixtures/page.fixtures";
import { LoginPageActions } from "../actions/loginPage.actions";
import { HomePageActions } from "../actions/homePage.actions";
import { CartPageActions } from "../actions/cartPage.actions";
import { CartPageValidator } from "../validators/cartPage.validator";

test.describe("Winkelwagen Pagina", () => {
  let loginPageActions: LoginPageActions;
  let homePageActions: HomePageActions;
  let cartPageActions: CartPageActions;
  let cartPageValidator: CartPageValidator;

  test.beforeEach(async ({ loginPage, homePage, cartPage }) => {
    loginPageActions = new LoginPageActions(loginPage);
    homePageActions = new HomePageActions(homePage);
    cartPageActions = new CartPageActions(cartPage);
    cartPageValidator = new CartPageValidator(cartPage);

    await loginPageActions.goToLoginPage();
    await loginPageActions.login("standard_user", "secret_sauce");
  });

  test("Must display the correct item in the cart and allow removal", async () => {
    await homePageActions.addBackpackToCart();
    await homePageActions.goToCart();

    await cartPageValidator.checkItemIsVisible("Sauce Labs Backpack");

    await cartPageActions.removeFirstItem();
    await cartPageValidator.checkCartIsEmpty();
  });
});
