from playwright.sync_api import expect
from locators.dashboard_locators import DashboardLocators

class DashboardPage:

    def __init__(self, page):
        self.page = page

    def verify_dashboard_loaded(self):
        expect( self.page.locator(DashboardLocators.DASHBOARD_HEADER )).to_be_visible()


    def logout(self):
        self.page.locator(DashboardLocators.PROFILE).click()
        self.page.locator(DashboardLocators.LOGOUT).click()

    def open_admin(self):
        self.page.locator(DashboardLocators.ADMIN).click()

    def open_pim(self):
        self.page.locator(DashboardLocators.PIM).click()

    def open_leave(self):
        self.page.locator(DashboardLocators.LEAVE).click()

    def open_time(self):
        self.page.locator(DashboardLocators.TIME).click()

    def open_my_info(self):
        self.page.locator(DashboardLocators.MY_INFO).click()