
import { Page } from "@playwright/test";

import { DashboardPage } from "../pages/dashboard";
import { LoginPage } from "../pages/auth/login";
import { UsersPage } from "../pages/users";
import { MfaVerificationPage } from "../pages/auth/verifyMFA";
import { clearActiveUser, getActiveUser, getAdmin } from "../utils/helpers";

export class UserCleanupService {
  constructor(private readonly page: Page) {}

  async deleteTemporaryUsers() {
    
    const users = getActiveUser();
    if (!users) {
      return;
    }
    await this.loginAsAdmin();
    const dashboard = new DashboardPage(this.page);
    await dashboard.gotoUsers();
    const usersPage = new UsersPage(this.page);
    await usersPage.deleteUser(users.email);
    clearActiveUser();
    console.log("Cleanup finished.");
  }

  async loginAsAdmin() {
    const user = getAdmin();
    const loginPage = new LoginPage(this.page);
    const mfaVerificationPage = new MfaVerificationPage(this.page);
    await loginPage.open();
    console.log(await this.page.url());
    await loginPage.login(user.email, user.password);
    await mfaVerificationPage.verify(user.secret);
    await mfaVerificationPage.clickLogin();
    console.log("Admin login completed:", this.page.url());
  }
}
