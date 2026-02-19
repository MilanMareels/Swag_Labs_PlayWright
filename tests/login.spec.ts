import { test } from "../fixtures/page.fixtures";
import { LoginPageActions } from "../actions/loginPage.actions";
import { LoginPageValidator } from "../validators/loginPage.validator";

const STANDARD_USER = "standard_user";
const LOCKED_OUT_USER = "locked_out_user";
const PROBLEM_USER = "problem_user";
const PERFORMANCE_GLITCH_USER = "performance_glitch_user";
const ERROR_USER = "error_user";
const VISUAL_USER = "visual_user";

const VALID_PASSWORD = "secret_sauce";

const INVALID_USER = "Test_123";
const INVALID_PASSWORD = "Test_123";

test.describe("Login Page", () => {
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

  test("Must unsuccessfully login with valid locked out user credentials and navigate to the inventory page", async () => {
    await loginPageActions.login(LOCKED_OUT_USER, VALID_PASSWORD);

    await loginPageValidator.checkErrorMessageAfterBadLogin("Epic sadface: Sorry, this user has been locked out.");
  });

  test("Must successfully login with valid problem user credentials and navigate to the inventory page", async () => {
    await loginPageActions.login(PROBLEM_USER, VALID_PASSWORD);

    await loginPageValidator.checkSuccessfulLogin();
  });

  test("Must successfully login with valid performance glitch user credentials and navigate to the inventory page", async () => {
    await loginPageActions.login(PERFORMANCE_GLITCH_USER, VALID_PASSWORD);

    await loginPageValidator.checkSuccessfulLogin();
  });

  test("Must successfully login with valid error user credentials and navigate to the inventory page", async () => {
    await loginPageActions.login(ERROR_USER, VALID_PASSWORD);

    await loginPageValidator.checkSuccessfulLogin();
  });

  test("Must successfully login with valid visual user credentials and navigate to the inventory page", async () => {
    await loginPageActions.login(VISUAL_USER, VALID_PASSWORD);

    await loginPageValidator.checkSuccessfulLogin();
  });

  test("Must show error message when login with invalid password credentials", async () => {
    await loginPageActions.login(STANDARD_USER, INVALID_PASSWORD);

    await loginPageValidator.checkErrorMessageAfterBadLogin("Epic sadface: Username and password do not match any user in this service");
  });

  test("Must show error message when login with invalid username credentials", async () => {
    await loginPageActions.login(INVALID_USER, VALID_PASSWORD);

    await loginPageValidator.checkErrorMessageAfterBadLogin("Epic sadface: Username and password do not match any user in this service");
  });

  test("Must show error message when login with no credentials", async () => {
    await loginPageActions.clickLoginButton();

    await loginPageValidator.checkErrorMessageAfterBadLogin("Epic sadface: Username is required");
  });

  test("Must unsuccessfully login with valid standard user when username credentials are uppercase and navigate to the inventory page", async () => {
    await loginPageActions.login(STANDARD_USER.toUpperCase(), VALID_PASSWORD);

    await loginPageValidator.checkErrorMessageAfterBadLogin("Epic sadface: Username and password do not match any user in this service");
  });

  test("Must unsuccessfully login with valid standard user when password credentials are uppercase and navigate to the inventory page", async () => {
    await loginPageActions.login(STANDARD_USER, VALID_PASSWORD.toUpperCase());

    await loginPageValidator.checkErrorMessageAfterBadLogin("Epic sadface: Username and password do not match any user in this service");
  });

  test("Must unsuccessfully login with valid standard user when both credentials are uppercase and navigate to the inventory page", async () => {
    await loginPageActions.login(STANDARD_USER.toUpperCase(), VALID_PASSWORD.toUpperCase());

    await loginPageValidator.checkErrorMessageAfterBadLogin("Epic sadface: Username and password do not match any user in this service");
  });
});
