module.exports=[93695,(a,b,c)=>{b.exports=a.x("next/dist/shared/lib/no-fallback-error.external.js",()=>require("next/dist/shared/lib/no-fallback-error.external.js"))},17745,a=>{a.n(a.i(59250))},23303,a=>{a.n(a.i(88148))},44896,a=>{a.n(a.i(74740))},46174,a=>{a.n(a.i(83216))},78190,a=>{a.n(a.i(17921))},58281,a=>{"use strict";var b=a.i(64868);function c(){return(0,b.jsxs)("div",{className:"max-w-6xl mx-auto",children:[(0,b.jsx)("h1",{className:"text-3xl font-bold mb-6",children:"Selenium"}),(0,b.jsx)("p",{className:"mb-6",children:"Selenium is a popular open-source automation testing framework for web applications. It supports multiple programming languages and browsers, making it a versatile choice for web automation."}),(0,b.jsxs)("div",{className:"bg-blue-100 dark:bg-blue-900 border-l-4 border-blue-500 p-4 mb-6",children:[(0,b.jsx)("p",{className:"font-semibold text-gray-900 dark:text-gray-100",children:"🟦 Info:"}),(0,b.jsx)("p",{className:"text-gray-700 dark:text-gray-300",children:"Selenium WebDriver provides a programming interface to create and execute test scripts that interact with web browsers, simulating real user actions."})]}),(0,b.jsx)("h2",{className:"text-2xl font-semibold mb-4",children:"Setup"}),(0,b.jsx)("div",{className:"bg-gray-100 dark:bg-gray-800 p-4 rounded mb-6",children:(0,b.jsx)("pre",{className:"text-sm",children:(0,b.jsx)("code",{children:`# Python with pytest
pip install selenium pytest

# Java with Maven
<dependency>
  <groupId>org.seleniumhq.selenium</groupId>
  <artifactId>selenium-java</artifactId>
  <version>4.15.0</version>
</dependency>

# Download browser drivers
# ChromeDriver, GeckoDriver, etc.`})})}),(0,b.jsx)("h2",{className:"text-2xl font-semibold mb-4",children:"Basic Test Example (Python)"}),(0,b.jsx)("div",{className:"bg-white dark:bg-gray-700 p-4 rounded mb-6",children:(0,b.jsx)("pre",{className:"text-sm",children:(0,b.jsx)("code",{children:`import pytest
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC

class TestLogin:
    def setup_method(self):
        self.driver = webdriver.Chrome()
        self.driver.implicitly_wait(10)

    def teardown_method(self):
        self.driver.quit()

    def test_valid_login(self):
        self.driver.get("https://example.com/login")

        email_field = self.driver.find_element(By.ID, "email")
        password_field = self.driver.find_element(By.ID, "password")
        login_button = self.driver.find_element(By.ID, "login-button")

        email_field.send_keys("user@example.com")
        password_field.send_keys("password123")
        login_button.click()

        # Wait for dashboard to load
        WebDriverWait(self.driver, 10).until(
            EC.presence_of_element_located((By.ID, "dashboard"))
        )

        assert "Dashboard" in self.driver.page_source`})})}),(0,b.jsx)("h2",{className:"text-2xl font-semibold mb-4",children:"Element Location Strategies"}),(0,b.jsxs)("div",{className:"grid md:grid-cols-2 gap-6 mb-6",children:[(0,b.jsxs)("div",{children:[(0,b.jsx)("h3",{className:"text-lg font-semibold mb-3",children:"Common Locators"}),(0,b.jsxs)("ul",{className:"list-disc list-inside",children:[(0,b.jsxs)("li",{children:[(0,b.jsx)("strong",{children:"ID:"}),' find_element(By.ID, "element-id")']}),(0,b.jsxs)("li",{children:[(0,b.jsx)("strong",{children:"Name:"}),' find_element(By.NAME, "element-name")']}),(0,b.jsxs)("li",{children:[(0,b.jsx)("strong",{children:"Class:"}),' find_element(By.CLASS_NAME, "class-name")']}),(0,b.jsxs)("li",{children:[(0,b.jsx)("strong",{children:"Tag:"}),' find_element(By.TAG_NAME, "div")']}),(0,b.jsxs)("li",{children:[(0,b.jsx)("strong",{children:"Link Text:"}),' find_element(By.LINK_TEXT, "Click here")']})]})]}),(0,b.jsxs)("div",{children:[(0,b.jsx)("h3",{className:"text-lg font-semibold mb-3",children:"Advanced Locators"}),(0,b.jsxs)("ul",{className:"list-disc list-inside",children:[(0,b.jsxs)("li",{children:[(0,b.jsx)("strong",{children:"CSS Selector:"}),' find_element(By.CSS_SELECTOR, ".class #id")']}),(0,b.jsxs)("li",{children:[(0,b.jsx)("strong",{children:"XPath:"})," find_element(By.XPATH, \"//div[@id='element']\")"]}),(0,b.jsxs)("li",{children:[(0,b.jsx)("strong",{children:"Partial Link:"}),' find_element(By.PARTIAL_LINK_TEXT, "Click")']})]})]})]}),(0,b.jsx)("h2",{className:"text-2xl font-semibold mb-4",children:"Page Object Model"}),(0,b.jsx)("div",{className:"bg-white dark:bg-gray-700 p-4 rounded mb-6",children:(0,b.jsx)("pre",{className:"text-sm",children:(0,b.jsx)("code",{children:`# pages/login_page.py
from selenium.webdriver.common.by import By

class LoginPage:
    def __init__(self, driver):
        self.driver = driver
        self.email_field = (By.ID, "email")
        self.password_field = (By.ID, "password")
        self.login_button = (By.ID, "login-button")
        self.error_message = (By.CLASS_NAME, "error-message")

    def enter_email(self, email):
        self.driver.find_element(*self.email_field).send_keys(email)

    def enter_password(self, password):
        self.driver.find_element(*self.password_field).send_keys(password)

    def click_login(self):
        self.driver.find_element(*self.login_button).click()

    def get_error_message(self):
        return self.driver.find_element(*self.error_message).text

    def login(self, email, password):
        self.enter_email(email)
        self.enter_password(password)
        self.click_login()

# test_login.py
def test_valid_login(driver):
    login_page = LoginPage(driver)
    login_page.login("user@example.com", "password123")

    # Assert successful login
    assert "Dashboard" in driver.page_source`})})}),(0,b.jsx)("h2",{className:"text-2xl font-semibold mb-4",children:"Wait Strategies"}),(0,b.jsx)("div",{className:"bg-white dark:bg-gray-700 p-4 rounded mb-6",children:(0,b.jsx)("pre",{className:"text-sm",children:(0,b.jsx)("code",{children:`from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC

# Implicit Wait (set once for entire session)
driver.implicitly_wait(10)  # seconds

# Explicit Wait (for specific conditions)
def test_explicit_wait(driver):
    driver.get("https://example.com")

    # Wait for element to be clickable
    button = WebDriverWait(driver, 10).until(
        EC.element_to_be_clickable((By.ID, "submit-button"))
    )
    button.click()

    # Wait for text to appear
    WebDriverWait(driver, 10).until(
        EC.text_to_be_present_in_element((By.ID, "message"), "Success")
    )

    # Wait for element to disappear
    WebDriverWait(driver, 10).until(
        EC.invisibility_of_element_located((By.ID, "loading-spinner"))
    )

# Fluent Wait (custom polling interval)
wait = WebDriverWait(driver, 10, poll_frequency=1, ignored_exceptions=[Exception])
element = wait.until(EC.presence_of_element_located((By.ID, "dynamic-element")))`})})}),(0,b.jsx)("h2",{className:"text-2xl font-semibold mb-4",children:"Handling Dynamic Elements"}),(0,b.jsx)("div",{className:"bg-white dark:bg-gray-700 p-4 rounded mb-6",children:(0,b.jsx)("pre",{className:"text-sm",children:(0,b.jsx)("code",{children:`def test_dynamic_elements(driver):
    # Handle dropdowns
    from selenium.webdriver.support.ui import Select

    dropdown = Select(driver.find_element(By.ID, "country-select"))
    dropdown.select_by_visible_text("United States")
    dropdown.select_by_value("us")
    dropdown.select_by_index(5)

    # Handle alerts
    alert = driver.switch_to.alert
    alert_text = alert.text
    alert.accept()  # or alert.dismiss()

    # Handle multiple windows
    main_window = driver.current_window_handle
    driver.find_element(By.ID, "new-window-link").click()

    for handle in driver.window_handles:
        if handle != main_window:
            driver.switch_to.window(handle)
            break

    # Switch back
    driver.switch_to.window(main_window)

    # Handle iframes
    driver.switch_to.frame("iframe-name")
    # Work with iframe content
    driver.switch_to.default_content()  # Switch back`})})}),(0,b.jsxs)("div",{className:"bg-green-100 dark:bg-green-900 border-l-4 border-green-500 p-4 mb-6",children:[(0,b.jsx)("p",{className:"font-semibold text-gray-900 dark:text-gray-100",children:"🟩 Example:"}),(0,b.jsx)("p",{className:"text-gray-700 dark:text-gray-300",children:"Selenium Grid allows running tests in parallel across multiple machines and browsers, enabling scalable cross-browser testing for large applications."})]}),(0,b.jsx)("h2",{className:"text-2xl font-semibold mb-4",children:"Selenium Grid"}),(0,b.jsx)("div",{className:"bg-gray-100 dark:bg-gray-800 p-4 rounded mb-6",children:(0,b.jsx)("pre",{className:"text-sm",children:(0,b.jsx)("code",{children:`# Start Hub
java -jar selenium-server-standalone.jar -role hub

# Start Node (on different machine)
java -jar selenium-server-standalone.jar -role node \\
  -hub http://hub-ip:4444/grid/register \\
  -browser browserName=chrome,maxInstances=5

# Python test with Grid
from selenium import webdriver

options = webdriver.ChromeOptions()
driver = webdriver.Remote(
    command_executor='http://hub-ip:4444/wd/hub',
    options=options
)

# Test runs on Grid node
driver.get("https://example.com")
# ... test code ...`})})}),(0,b.jsx)("h2",{className:"text-2xl font-semibold mb-4",children:"CI/CD Integration"}),(0,b.jsx)("div",{className:"bg-gray-100 dark:bg-gray-800 p-4 rounded mb-6",children:(0,b.jsx)("pre",{className:"text-sm",children:(0,b.jsx)("code",{children:`# .github/workflows/selenium-tests.yml
name: Selenium Tests
on: [push, pull_request]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
    - uses: actions/checkout@v4
    - uses: actions/setup-python@v4
      with:
        python-version: '3.9'
    - run: pip install -r requirements.txt
    - run: wget -O /tmp/chromedriver.zip \\
        https://chromedriver.storage.googleapis.com/114.0.5735.90/chromedriver_linux64.zip
    - run: unzip /tmp/chromedriver.zip -d /usr/local/bin/
    - run: pytest tests/ --headless --browser chrome
    - uses: actions/upload-artifact@v4
      if: failure()
      with:
        name: screenshots
        path: screenshots/`})})}),(0,b.jsxs)("div",{className:"bg-yellow-100 dark:bg-yellow-900 border-l-4 border-yellow-500 p-4 mb-6",children:[(0,b.jsx)("p",{className:"font-semibold text-gray-900 dark:text-gray-100",children:"🟧 Warning:"}),(0,b.jsx)("p",{className:"text-gray-700 dark:text-gray-300",children:"Selenium tests can be flaky due to timing issues and browser differences. Use explicit waits and avoid Thread.sleep() for better reliability."})]}),(0,b.jsxs)("div",{className:"bg-purple-100 dark:bg-purple-900 border-l-4 border-purple-500 p-4 mb-6",children:[(0,b.jsx)("p",{className:"font-semibold text-gray-900 dark:text-gray-100",children:"🟪 Key Tip:"}),(0,b.jsx)("p",{className:"text-gray-700 dark:text-gray-300",children:"Use CSS selectors over XPath when possible, as they are faster and more readable. Prefer ID and name attributes for element location."})]}),(0,b.jsx)("h2",{className:"text-2xl font-semibold mb-4",children:"Common Interview Questions"}),(0,b.jsxs)("ul",{className:"list-disc list-inside mb-6",children:[(0,b.jsx)("li",{children:"What are the different Selenium components?"}),(0,b.jsx)("li",{children:"How do you handle dynamic elements in Selenium?"}),(0,b.jsx)("li",{children:"Explain the difference between implicit and explicit waits"}),(0,b.jsx)("li",{children:"How do you handle frames and windows in Selenium?"}),(0,b.jsx)("li",{children:"What is Selenium Grid and when would you use it?"})]}),(0,b.jsx)("h2",{className:"text-2xl font-semibold mb-4",children:"Selenium Best Practices"}),(0,b.jsxs)("div",{className:"grid md:grid-cols-2 gap-6",children:[(0,b.jsxs)("div",{children:[(0,b.jsx)("h3",{className:"text-lg font-semibold mb-3",children:"Test Design"}),(0,b.jsxs)("ul",{className:"list-disc list-inside",children:[(0,b.jsx)("li",{children:"Use Page Object Model"}),(0,b.jsx)("li",{children:"Implement proper waits"}),(0,b.jsx)("li",{children:"Avoid hard-coded sleeps"}),(0,b.jsx)("li",{children:"Use data-driven testing"}),(0,b.jsx)("li",{children:"Implement proper cleanup"})]})]}),(0,b.jsxs)("div",{children:[(0,b.jsx)("h3",{className:"text-lg font-semibold mb-3",children:"Maintenance"}),(0,b.jsxs)("ul",{className:"list-disc list-inside",children:[(0,b.jsx)("li",{children:"Keep locators stable"}),(0,b.jsx)("li",{children:"Use relative XPath sparingly"}),(0,b.jsx)("li",{children:"Handle test data properly"}),(0,b.jsx)("li",{children:"Implement logging and reporting"}),(0,b.jsx)("li",{children:"Regular driver updates"})]})]})]})]})}a.s(["default",()=>c])}];

//# sourceMappingURL=%5Broot-of-the-server%5D__ab70e555._.js.map