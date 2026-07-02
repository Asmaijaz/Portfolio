from pages.login_page import LoginPage


def test_forgot_password(page):

    login = LoginPage(page)

    login.open()

    login.click_forgot_password()

    assert "requestPasswordResetCode" in page.url