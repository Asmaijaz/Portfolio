from pages.login_page import LoginPage
from pages.dashboard_page import DashboardPage
from testdata.credentials import *

def test_valid_login(page):

    login = LoginPage(page)
    dashboard = DashboardPage(page)
    login.open()
    login.login(VALID_USERNAME,VALID_PASSWORD)
    login.verify_login_successful()
    dashboard.verify_dashboard_loaded()
    dashboard.logout()
   

def test_invalid_username(page):
    login = LoginPage(page)
    login.open()
    login.login(INVALID_USERNAME, VALID_PASSWORD)
    login.verify_login_failed()


def test_invalid_password(page):
    login = LoginPage(page)
    login.open()
    login.login(VALID_USERNAME, INVALID_PASSWORD)
    login.verify_login_failed()

def test_blank_password(page):
    login = LoginPage(page)
    login.open()
    login.login(VALID_USERNAME, "")
    login.verify_login_failed()
