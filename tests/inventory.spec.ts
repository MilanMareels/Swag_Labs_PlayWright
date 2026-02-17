import { test } from "../fixtures/page.fixtures";
import { LoginPageActions } from "../actions/loginPage.actions";
import { HomePageActions } from "../actions/homePage.actions";
import { HomePageValidator } from "../validators/homePage.validator";
import { LoginPageValidator } from "../validators/loginPage.validator";

test.describe("Inventory Pagina Functionaliteit", () => {
  let loginPageActions: LoginPageActions;
  let homePageActions: HomePageActions;
  let homePageValidator: HomePageValidator;

  test.beforeEach(async ({ loginPage, homePage }) => {
    loginPageActions = new LoginPageActions(loginPage);
    homePageActions = new HomePageActions(homePage);
    homePageValidator = new HomePageValidator(homePage);

    await loginPageActions.goToLoginPage();
    await loginPageActions.login("standard_user", "secret_sauce");
  });

  test("Must add and remove a product directly from the inventory page", async () => {
    await homePageActions.addBackpackToCart();
    await homePageValidator.checkCartBadgeCount("1");

    await homePageActions.removeBackpackFromCart();
    await test.expect(homePageValidator.homePage.cartBadge).toBeHidden();
  });

  test("Must be able to sort products from High to Low price", async () => {
    //await homePageActions.sortProducts("hilo");
  });

  test("Must successfully logout via the burger menu", async ({ loginPage }) => {
    await homePageActions.logout();
    const loginValidator = new LoginPageValidator(loginPage);
    await test.expect(loginPage.loginButton).toBeVisible();
  });
});
