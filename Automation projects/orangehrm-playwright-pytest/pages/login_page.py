
BASE_URL = "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
from playwright.sync_api import expect

from locators.login_locators import LoginLocators


class LoginPage:

    def __init__(self, page):
        self.page = page

    def open(self):
        self.page.goto(BASE_URL)

    def login(self, username, password):

        self.page.locator(LoginLocators.USERNAME).fill(username)

        self.page.locator(LoginLocators.PASSWORD).fill(password)

        self.page.locator(LoginLocators.LOGIN_BUTTON).click()

        self.page.wait_for_load_state("networkidle")

    def verify_login_successful(self):

        expect(self.page).to_have_url(
            "https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index"
        )

    def verify_login_failed(self):

        return self.page.locator(LoginLocators.ERROR_MESSAGE)

    def click_forgot_password(self):

        self.page.locator(
            LoginLocators.FORGOT_PASSWORD
        ).click()