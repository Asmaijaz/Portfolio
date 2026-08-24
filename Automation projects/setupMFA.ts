import { expect, Page } from "@playwright/test";

import { MfaSetupPageLocators } from "../../locators/setupMFAPage.locators";
import { extractSecretFromQr, saveSecret } from "../../utils/helpers";

export class MfaSetupPage {
  readonly locators: MfaSetupPageLocators;

  constructor(private page: Page) {
    this.locators = new MfaSetupPageLocators(page);
  }

  async waitForPage() {
    await expect(this.page).toHaveURL(/setup|verify-mfa/);
    await expect(this.locators.scannedButton).toBeVisible();
  }

  async isDisplayed(): Promise<boolean> {
    try {
      await this.locators.scannedButton.waitFor({
        state: "visible",
        timeout: 3000,
      });
      return true;
    } catch {
      return false;
    }
  }

  async setupMfa(): Promise<string> {
    const secret = await extractSecretFromQr(this.locators.qrImage);
    saveSecret(secret);
    // console.log(secret);
    await this.locators.scannedButton.click();
    // const otp = generateOtp(secret);
    return secret;
  }
}
