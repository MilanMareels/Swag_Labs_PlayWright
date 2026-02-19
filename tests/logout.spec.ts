import { LoginPageActions } from "../actions/loginPage.actions";
import { test } from "../fixtures/page.fixtures";
import { LogoutActions } from "../actions/logout.actions";
import { LogoutValidator } from "../validators/logout.validator";

const STANDARD_USER = "standard_user";
const VALID_PASSWORD = "secret_sauce";

test.describe("Logout Page", () => {
  let loginPageActions: LoginPageActions;
  let logoutPageActions: LogoutActions;
  let logoutPageValidator: LogoutValidator;

  test.beforeEach(async ({ logoutPage, loginPage }) => {
    loginPageActions = new LoginPageActions(loginPage);
    logoutPageActions = new LogoutActions(logoutPage);
    logoutPageValidator = new LogoutValidator(logoutPage);

    await loginPageActions.login(STANDARD_USER, VALID_PASSWORD);
  });

  test("Must successfully logout and get redirected to login page", async () => {
    await logoutPageActions.logout();

    await logoutPageValidator.checkSuccessfulLogtout();
  });
});
