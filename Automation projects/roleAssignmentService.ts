import { Page } from "@playwright/test";
import { UsersPage } from "../pages/users";
import { UserCleanupService  } from "./usersCleanupService"
import { getActiveUser, GlobalRole } from "../utils/helpers";
import { DashboardPage } from "../pages/dashboard";

export class RoleAssignmentService {
constructor(private readonly page: Page) {} 
    
  async assignGlobalRole(email: string,
    role: GlobalRole) {
    const usersPage = new UsersPage(this.page);
    await usersPage.assignGlobalRole(role);    
  }
    

  async assignRoleToActiveUser(
    email: string,
    role: GlobalRole
  ): Promise<void> {
    const activeUser = getActiveUser();
     const adminlogin = new UserCleanupService(this.page);
    await adminlogin.loginAsAdmin();
    const usersPage = new UsersPage(this.page);
    await usersPage.open();
    await usersPage.searchUser(email);
    await usersPage.openUser(email);
    await this.page.getByRole("button", {name: "User Settings",}).click();
    await this.page.getByRole("menuitem", {name: "Manage Roles",}).click();
    
  }
}