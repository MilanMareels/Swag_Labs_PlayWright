import { test } from "../fixtures/page.fixtures";
import { LoginPageActions } from "../actions/loginPage.actions";
import { HomePageValidator } from "../validators/homePage.validator";

const STANDARD_USER = "standard_user";
const VALID_PASSWORD = "secret_sauce";

test.describe("Home Page - Layout & Products Content", () => {
  let loginPageActions: LoginPageActions;
  let homePageValidator: HomePageValidator;

  test.beforeEach(async ({ loginPage, homePage }) => {
    loginPageActions = new LoginPageActions(loginPage);
    homePageValidator = new HomePageValidator(homePage);

    await loginPageActions.goToLoginPage();
    await loginPageActions.login(STANDARD_USER, VALID_PASSWORD);
  });

  test("Must successfully see the hamburger menu", async () => {
    await homePageValidator.checkHamburguerMenu();
  });

  test("Must successfully see the shopping cart", async () => {
    await homePageValidator.checkCard();
  });

  test("Must successfully see the sorting filter", async () => {
    await homePageValidator.checkFilter();
  });

  test("Must successfully see the footer", async () => {
    await homePageValidator.checkFooter();
  });

  test("Must successfully load the inventory container", async () => {
    await homePageValidator.checkProducts();
  });

  test("Must load exactly 6 products on the page", async () => {
    await homePageValidator.checkTotalProductsCount();
  });

  test("Must successfully display title, description and price for every product in the list", async () => {
    await homePageValidator.checkAllProductElementsAreVisible();
  });
});
