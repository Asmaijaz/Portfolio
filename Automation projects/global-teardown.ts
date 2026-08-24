import { chromium } from "@playwright/test";
import { UserCleanupService } from "./services/usersCleanupService";
import { normalizeUrl } from "./utils/helpers";
import { applyAuthorizationHeader } from "@/e2e/utils/fixtures";

async function globalTeardown() {
  console.log("\n========== GLOBAL TEARDOWN STARTED ==========\n");

  const browser = await chromium.launch({});

  const targetBaseUrl = normalizeUrl(
    process.env.FRONTEND_DOMAIN ??
      "https://sca-test.complyvigilance.com",
  );

  const context = await browser.newContext({
    baseURL: targetBaseUrl,
  });

  const page = await context.newPage();

  await applyAuthorizationHeader(page, targetBaseUrl);

  try {
    const cleanupService = new UserCleanupService(page);

    await cleanupService.deleteTemporaryUsers();

    console.log("\n========== CLEANUP COMPLETED ==========\n");
  } catch (error) {
    console.error("Cleanup Failed");
    console.error(error);
  } finally {
    await context.close();
    await browser.close();

    console.log("\n========== BROWSER CLOSED ==========\n");
  }
}

export default globalTeardown;