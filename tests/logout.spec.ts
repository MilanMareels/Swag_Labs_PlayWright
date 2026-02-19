import { LoginPageActions } from "../actions/loginPage.actions";
import { LogoutPageActions } from "../actions/logout.actions";
import { test } from "../fixtures/page.fixtures";
import { LogoutValidator } from "../validators/logout.validator";

const STANDARD_USER = "standard_user";
const VALID_PASSWORD = "secret_sauce";

test.describe("Logout Page", () => {
  let loginPageActions: LoginPageActions;
  let logoutPageActions: LogoutPageActions;
  let logoutPageValidator: LogoutValidator;

  test.beforeEach(async ({ logoutPage, loginPage }) => {
    loginPageActions = new LoginPageActions(loginPage);
    logoutPageActions = new LogoutPageActions(logoutPage);
    logoutPageValidator = new LogoutValidator(logoutPage);

    await loginPageActions.goToLoginPage();
    await loginPageActions.login(STANDARD_USER, VALID_PASSWORD);
  });

  test("Must successfully logout and get redirected to login page", async () => {
    await logoutPageActions.logout();

    await logoutPageValidator.checkSuccessfulLogtout();
  });
});
