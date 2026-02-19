import { test } from "../fixtures/page.fixtures";
import { LoginPageActions } from "../actions/loginPage.actions";
import { HomePageActions } from "../actions/homePage.actions";
import { HomePageValidator } from "../validators/homePage.validator";

const STANDARD_USER = "standard_user";
const VALID_PASSWORD = "secret_sauce";

test.describe("Home Page", () => {
  let loginPageActions: LoginPageActions;
  let homePageActions: HomePageActions;
  let homePageValidator: HomePageValidator;

  test.beforeEach(async ({ loginPage, homePage }) => {
    loginPageActions = new LoginPageActions(loginPage);
    homePageActions = new HomePageActions(homePage);
    homePageValidator = new HomePageValidator(homePage);

    await loginPageActions.goToLoginPage();
    await loginPageActions.login(STANDARD_USER, VALID_PASSWORD);
  });

  test("Must successfully add a product to the cart and update the badge", async () => {
    await homePageActions.addBackpackToCart();

    await homePageValidator.checkCartBadgeCount("1");
  });
});
