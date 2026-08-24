import { Page, FrameLocator } from "@playwright/test";

export class MailinatorInboxPage {
  private readonly baseUrl = "https://www.mailinator.com";
  private readonly defaultSenderAddress = "no-reply@verificationemail.com";
  private readonly messageFrameSelector =
    '#html_msg_body, #msg_body, iframe[name="html_msg_body"]';

  constructor(private readonly page: Page) {}

  private inboxUrl(inboxName: string): string {
    return `${this.baseUrl}/v4/public/inboxes.jsp?to=${inboxName}`;
  }

  async openInbox(inboxName: string): Promise<void> {
    console.log(`[Mailinator UI] Opening public inbox: ${inboxName}`);
    await this.page.goto(this.inboxUrl(inboxName), {
      waitUntil: "domcontentloaded",
    });
    await this.dismissConsentIfPresent();
  }

  /** Mailinator cookie/consent banner that blocks clicks. */
  private async dismissConsentIfPresent(): Promise<void> {
    const consentButton = this.page.getByRole("button", {
      name: /accept|agree|consent/i,
    });
    const isVisible = await consentButton
      .isVisible({ timeout: 3000 })
      .catch(() => false);
    if (isVisible) {
      await consentButton.click();
    }
  }

  private async waitForLatestEmailAndOpen(
    senderAddress: string,
    timeoutMs: number,
  ): Promise<void> {
    const pollIntervalMs = 3000;
    const deadline = Date.now() + timeoutMs;
    let attempt = 0;

    const messageCell = this.page.getByRole("cell", { name: senderAddress });

    while (Date.now() < deadline) {
      attempt++;
      const appeared = await messageCell
        .first()
        .waitFor({ state: "visible", timeout: pollIntervalMs })
        .then(() => true)
        .catch(() => false);

      console.log(
        `[Mailinator UI] Poll attempt ${attempt}: message from "${senderAddress}" visible = ${appeared}`,
      );

      if (appeared) {
        await messageCell.first().click();
        return;
      }

      // Dismiss any consent banner that might pop up mid-poll, without navigating.
      await this.dismissConsentIfPresent();
    }

    throw new Error(
      `[Mailinator UI] No email from '${senderAddress}' arrived within ${timeoutMs}ms.`,
    );
  }

  async fetchOtp(
    inboxName: string,
    senderAddress: string = this.defaultSenderAddress,
    timeoutMs = 60000,
  ): Promise<string> {
    await this.openInbox(inboxName);
    await this.waitForLatestEmailAndOpen(senderAddress, timeoutMs);

    const frame = this.messageFrame();
    const body = frame.locator("body");
    await body.waitFor({ state: "visible", timeout: 15000 });

    const emailText = await body.innerText();
    const match = emailText.match(/\b\d{6}\b/);

    if (!match) {
      throw new Error(
        `[Mailinator UI] Email opened but no 6-digit OTP pattern found. Body was:\n${emailText}`,
      );
    }
    return match[0];
  }

  private messageFrame(): FrameLocator {
    return this.page.frameLocator(this.messageFrameSelector);
  }

  async close(): Promise<void> {}
}
