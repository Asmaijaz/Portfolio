import { Page, Locator, test } from "@playwright/test";
import { SignupLocators } from "../../locators/signupPage.locators";
import { URLS } from "../../utils/constants";
import { waitForRecaptcha } from "../../utils/helpers";

export class SignupPage {
  readonly page: Page;
  readonly firstNameInput: Locator;
  readonly lastNameInput: Locator;
  readonly emailInput: Locator;
  readonly passwordInput: Locator;
  readonly confirmPasswordInput: Locator;
  readonly submitButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.firstNameInput = page.getByRole("textbox", {
      name: SignupLocators.firstName.name,
    });
    this.lastNameInput = page.getByRole("textbox", {
      name: SignupLocators.lastName.name,
    });
    this.emailInput = page.getByRole("textbox", {
      name: SignupLocators.email.name
    });
    this.passwordInput = page.getByRole("textbox", {
      name: "Password",
      exact: true });
    this.confirmPasswordInput = page.locator(SignupLocators.confirmPassword);
    this.submitButton = page.locator(SignupLocators.signupBtn);
  }

  async open() {
    await this.page.goto(URLS.SIGNUP);
    await this.firstNameInput.waitFor({ state: "visible" });
    
  }

  async enterFirstName(firstName: string) {
    await this.firstNameInput.fill(firstName);
  }

  async enterLastName(lastName: string) {
    await this.lastNameInput.fill(lastName);
  }

  async enterEmail(email: string) {
    await this.emailInput.fill(email);
  }

  async enterPassword(password: string) {
    await this.passwordInput.fill(password);
  }

  async enterConfirmPassword(password: string) {
    await this.confirmPasswordInput.fill(password);
  }

  async clickSignup() {
    await this.submitButton.click();
  }

  async signup(
    firstName: string,
    lastName: string,
    email: string,
    password: string,
  ) {
    await test.step("Fill signup form and submit", async () => {
      await this.enterFirstName(firstName);
      await this.enterLastName(lastName);
      await this.enterEmail(email);
      await this.enterPassword(password);
      await this.enterConfirmPassword(password);
      await waitForRecaptcha(this.page);
      await this.clickSignup();
    });
  }
}
