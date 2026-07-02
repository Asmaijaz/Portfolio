from pages.login_page import LoginPage
from pages.dashboard_page import DashboardPage

def test_navigation(page):

    login = LoginPage(page)

    login.open()

    login.login("Admin", "admin123")

    print("\nCurrent URL:", page.url)

    print("Page Title:", page.title())

    page.screenshot(path="debug_login.png")

    assert "dashboard" in page.url.lower()