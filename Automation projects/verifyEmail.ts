import { Page, expect } from "@playwright/test";
import { MailinatorInboxPage } from "./mailinatorInbox";
import { VerifyEmailLocators } from "../../locators/verifyEmailPage.locators";
import { URLS } from "../../utils/constants";

export class VerifyEmailPage {
  fillnewPassword(newPassword: string) {
    throw new Error("Method not implemented.");
  }

  static verifyUsingInboxCode(inboxName: { inboxName: string; email: string }) {
    throw new Error("Method not implemented.");
  }

  constructor(private readonly page: Page) {}

  private get locators() {
    return VerifyEmailLocators(this.page);
  }

  async waitForPage(): Promise<void> {
    await this.page.goto(URLS.VERIFY_MFA);
    await this.locators.otpInput.waitFor({ state: "visible" });
  }

  async enterOtp(otpCode: string): Promise<void> {
    const input = this.locators.otpInput;
    await input.fill(otpCode);
    await expect(input).toHaveValue(otpCode);
  }

  async clickVerify(): Promise<void> {
    await this.locators.verifyBtn.click();
  }

  async verifyUsingInboxCode(inboxName: string): Promise<void> {
    console.log(`Verifying via public Mailinator UI for inbox: ${inboxName}`);

    const mailinatorTab: Page = await this.page.context().newPage();
    const mailinator = new MailinatorInboxPage(mailinatorTab);

    try {
      const otpCode = await mailinator.fetchOtp(inboxName);
      console.log(`[POM] Extracted 6-digit OTP code`);

      await this.enterOtp(otpCode);
    } finally {
      await mailinatorTab.close();
    }
  }

  async verifySuccess(): Promise<void> {
    await expect(this.page).toHaveURL(/\/auth\/login/, { timeout: 60000 });
  }
}
