import { test } from "../fixtures/page.fixtures";
import { LoginPageActions } from "../actions/loginPage.actions";
import { LoginPageValidator } from "../validators/loginPage.validator";

const STANDARD_USER = "standard_user";
const VALID_PASSWORD = "secret_sauce";

const INVALID_USER = "Test_123";
const INVALID_PASSWORD = "Test_123";

test.describe("Login Page Functionaliteit", () => {
  let loginPageActions: LoginPageActions;
  let loginPageValidator: LoginPageValidator;

  test.beforeEach(async ({ loginPage }) => {
    loginPageActions = new LoginPageActions(loginPage);
    loginPageValidator = new LoginPageValidator(loginPage);

    await loginPageActions.goToLoginPage();
  });

  test("Must successfully login with valid standard user credentials and navigate to the inventory page", async () => {
    await loginPageActions.login(STANDARD_USER, VALID_PASSWORD);

    await loginPageValidator.checkSuccessfulLogin();
  });

  test("Must show error message when login with invalid password credentials", async () => {
    await loginPageActions.login(STANDARD_USER, INVALID_PASSWORD);

    await loginPageValidator.checkErrorMessageAfterBadLogin();
  });

  test("Must show error message when login with invalid username credentials", async () => {
    await loginPageActions.login(INVALID_USER, VALID_PASSWORD);

    await loginPageValidator.checkErrorMessageAfterBadLogin();
  });
});
