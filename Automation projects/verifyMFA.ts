import { expect, Page } from "@playwright/test";

import { MfaVerificationPageLocators } from "../../locators/verifyMFAPage.locators";
import { generateOtp } from "../../utils/helpers";

export class MfaVerificationPage {
  static clickLogin() {
    throw new Error("Method not implemented.");
  }
  verificationCodeInput: any;
  static verificationCodeInput: any;
  static verify(secret: string) {
    throw new Error("Method not implemented.");
  }
  readonly locators: MfaVerificationPageLocators;

  constructor(private page: Page) {
    this.locators = new MfaVerificationPageLocators(page);
  }

  async waitForPage() {
    await expect(this.page).toHaveURL(/verify-mfa/);
  }

  async clickLogin() {
    await this.locators.loginButton.click();
    await this.page.waitForTimeout(20000);

    

    await Promise.all([
      this.page.waitForURL(/\/dashboard\/projects/, {
        timeout: 30000,
      }),
    ]);
    console.log("URL after login:", this.page.url());
  }

  async verify(secret: string) {
    await this.waitForPage();
    const otp = generateOtp(secret);
    // console.log("generated ot:",otp);
    await this.locators.otpTextbox.fill(otp);
  }
}
