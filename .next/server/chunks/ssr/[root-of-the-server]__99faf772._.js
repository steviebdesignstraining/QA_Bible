module.exports=[93695,(a,b,c)=>{b.exports=a.x("next/dist/shared/lib/no-fallback-error.external.js",()=>require("next/dist/shared/lib/no-fallback-error.external.js"))},17745,a=>{a.n(a.i(59250))},23303,a=>{a.n(a.i(88148))},44896,a=>{a.n(a.i(74740))},46174,a=>{a.n(a.i(83216))},78190,a=>{a.n(a.i(17921))},59476,a=>{"use strict";var b=a.i(64868);function c(){return(0,b.jsxs)("div",{className:"max-w-6xl mx-auto",children:[(0,b.jsx)("h1",{className:"text-3xl font-bold mb-6",children:"WebdriverIO"}),(0,b.jsx)("p",{className:"mb-6",children:"WebdriverIO is a next-generation browser and mobile automation test framework for Node.js. It provides a custom test runner, assertion library, and reporter system."}),(0,b.jsxs)("div",{className:"bg-blue-100 dark:bg-blue-900 border-l-4 border-blue-500 p-4 mb-6",children:[(0,b.jsx)("p",{className:"font-semibold text-gray-900 dark:text-gray-100",children:"🟦 Info:"}),(0,b.jsx)("p",{className:"text-gray-700 dark:text-gray-300",children:"WebdriverIO combines the best of Selenium with modern JavaScript testing practices, offering a complete testing ecosystem with plugins, services, and integrations."})]}),(0,b.jsx)("h2",{className:"text-2xl font-semibold mb-4",children:"Setup"}),(0,b.jsx)("div",{className:"bg-gray-100 dark:bg-gray-800 p-4 rounded mb-6",children:(0,b.jsx)("pre",{className:"text-sm",children:(0,b.jsx)("code",{children:`npm install @wdio/cli
npx wdio config          # Interactive setup
npx wdio run wdio.conf.js # Run tests`})})}),(0,b.jsx)("h2",{className:"text-2xl font-semibold mb-4",children:"Configuration"}),(0,b.jsx)("div",{className:"bg-gray-100 dark:bg-gray-800 p-4 rounded mb-6",children:(0,b.jsx)("pre",{className:"text-sm",children:(0,b.jsx)("code",{children:`// wdio.conf.js
export const config = {
  specs: ['./test/specs/**/*.js'],
  exclude: [],
  maxInstances: 10,
  capabilities: [{
    browserName: 'chrome',
    'goog:chromeOptions': {
      args: ['--headless']
    }
  }],
  logLevel: 'info',
  bail: 0,
  baseUrl: 'http://localhost:3000',
  waitforTimeout: 10000,
  connectionRetryTimeout: 120000,
  connectionRetryCount: 3,
  services: ['chromedriver'],
  framework: 'mocha',
  reporters: ['spec'],
  mochaOpts: {
    ui: 'bdd',
    timeout: 60000
  }
}`})})}),(0,b.jsx)("h2",{className:"text-2xl font-semibold mb-4",children:"Basic Test Example"}),(0,b.jsx)("div",{className:"bg-white dark:bg-gray-700 p-4 rounded mb-6",children:(0,b.jsx)("pre",{className:"text-sm",children:(0,b.jsx)("code",{children:`describe('Login Page', () => {
  it('should login with valid credentials', async () => {
    await browser.url('/login')

    const emailInput = await $('#email')
    const passwordInput = await $('#password')
    const loginButton = await $('#login-button')

    await emailInput.setValue('user@example.com')
    await passwordInput.setValue('password123')
    await loginButton.click()

    await expect(browser).toHaveUrlContaining('/dashboard')
    const welcomeMessage = await $('.welcome-message')
    await expect(welcomeMessage).toBeDisplayed()
  })
})`})})}),(0,b.jsx)("h2",{className:"text-2xl font-semibold mb-4",children:"Page Object Model"}),(0,b.jsx)("div",{className:"bg-white dark:bg-gray-700 p-4 rounded mb-6",children:(0,b.jsx)("pre",{className:"text-sm",children:(0,b.jsx)("code",{children:`// test/pageobjects/login.page.js
class LoginPage {
  get emailInput() { return $('#email') }
  get passwordInput() { return $('#password') }
  get loginButton() { return $('#login-button') }
  get errorMessage() { return $('.error-message') }

  async open() {
    await browser.url('/login')
  }

  async login(email, password) {
    await this.emailInput.setValue(email)
    await this.passwordInput.setValue(password)
    await this.loginButton.click()
  }

  async getErrorMessage() {
    return await this.errorMessage.getText()
  }
}

export default new LoginPage()`})})}),(0,b.jsx)("h2",{className:"text-2xl font-semibold mb-4",children:"Appium Integration"}),(0,b.jsx)("div",{className:"bg-white dark:bg-gray-700 p-4 rounded mb-6",children:(0,b.jsx)("pre",{className:"text-sm",children:(0,b.jsx)("code",{children:`// wdio.conf.js for mobile testing
export const config = {
  capabilities: [{
    platformName: 'iOS',
    platformVersion: '15.0',
    deviceName: 'iPhone 13',
    automationName: 'XCUITest',
    app: '/path/to/app.ipa'
  }],
  services: ['appium'],
  appium: {
    command: 'appium',
    logPath: './logs/'
  }
}

// Mobile test
describe('Mobile App', () => {
  it('should tap login button', async () => {
    const loginButton = await $('~login-button')
    await loginButton.click()

    const emailField = await $('~email-field')
    await emailField.setValue('user@example.com')
  })
})`})})}),(0,b.jsx)("h2",{className:"text-2xl font-semibold mb-4",children:"Custom Commands"}),(0,b.jsx)("div",{className:"bg-white dark:bg-gray-700 p-4 rounded mb-6",children:(0,b.jsx)("pre",{className:"text-sm",children:(0,b.jsx)("code",{children:`// wdio.conf.js
export const config = {
  before: function() {
    browser.addCommand('login', async function(email, password) {
      const emailInput = await $('#email')
      const passwordInput = await $('#password')
      const loginButton = await $('#login-button')

      await emailInput.setValue(email)
      await passwordInput.setValue(password)
      await loginButton.click()

      await browser.waitUntil(
        async () => (await browser.getUrl()).includes('/dashboard'),
        { timeout: 5000 }
      )
    })
  }
}

// Usage in tests
await browser.login('user@example.com', 'password123')`})})}),(0,b.jsx)("h2",{className:"text-2xl font-semibold mb-4",children:"API Testing"}),(0,b.jsx)("div",{className:"bg-white dark:bg-gray-700 p-4 rounded mb-6",children:(0,b.jsx)("pre",{className:"text-sm",children:(0,b.jsx)("code",{children:`describe('API Tests', () => {
  it('should create user via API', async () => {
    const response = await browser.executeAsync((done) => {
      fetch('/api/users', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: 'John Doe',
          email: 'john@example.com'
        })
      })
      .then(res => res.json())
      .then(data => done(data))
    })

    expect(response).toHaveProperty('id')
    expect(response.name).toBe('John Doe')
  })
})`})})}),(0,b.jsx)("h2",{className:"text-2xl font-semibold mb-4",children:"Services & Plugins"}),(0,b.jsxs)("div",{className:"grid md:grid-cols-2 gap-6 mb-6",children:[(0,b.jsxs)("div",{children:[(0,b.jsx)("h3",{className:"text-lg font-semibold mb-3",children:"Built-in Services"}),(0,b.jsxs)("ul",{className:"list-disc list-inside",children:[(0,b.jsxs)("li",{children:[(0,b.jsx)("strong",{children:"selenium-standalone:"})," Local Selenium server"]}),(0,b.jsxs)("li",{children:[(0,b.jsx)("strong",{children:"chromedriver:"})," Chrome driver management"]}),(0,b.jsxs)("li",{children:[(0,b.jsx)("strong",{children:"appium:"})," Mobile testing service"]}),(0,b.jsxs)("li",{children:[(0,b.jsx)("strong",{children:"sauce:"})," Sauce Labs integration"]}),(0,b.jsxs)("li",{children:[(0,b.jsx)("strong",{children:"browserstack:"})," BrowserStack integration"]})]})]}),(0,b.jsxs)("div",{children:[(0,b.jsx)("h3",{className:"text-lg font-semibold mb-3",children:"Popular Plugins"}),(0,b.jsxs)("ul",{className:"list-disc list-inside",children:[(0,b.jsxs)("li",{children:[(0,b.jsx)("strong",{children:"wdio-cucumber-framework:"})," BDD testing"]}),(0,b.jsxs)("li",{children:[(0,b.jsx)("strong",{children:"wdio-allure-reporter:"})," Test reporting"]}),(0,b.jsxs)("li",{children:[(0,b.jsx)("strong",{children:"wdio-image-comparison-service:"})," Visual testing"]}),(0,b.jsxs)("li",{children:[(0,b.jsx)("strong",{children:"wdio-performance-service:"})," Performance metrics"]}),(0,b.jsxs)("li",{children:[(0,b.jsx)("strong",{children:"wdio-json-reporter:"})," JSON test results"]})]})]})]}),(0,b.jsxs)("div",{className:"bg-green-100 dark:bg-green-900 border-l-4 border-green-500 p-4 mb-6",children:[(0,b.jsx)("p",{className:"font-semibold text-gray-900 dark:text-gray-100",children:"🟩 Example:"}),(0,b.jsx)("p",{className:"text-gray-700 dark:text-gray-300",children:"WebdriverIO is ideal for teams needing both web and mobile testing capabilities, with extensive plugin ecosystem and strong TypeScript support."})]}),(0,b.jsx)("h2",{className:"text-2xl font-semibold mb-4",children:"TypeScript Support"}),(0,b.jsx)("div",{className:"bg-white dark:bg-gray-700 p-4 rounded mb-6",children:(0,b.jsx)("pre",{className:"text-sm",children:(0,b.jsx)("code",{children:`// test/specs/login.spec.ts
import { expect } from '@wdio/globals'

describe('Login functionality', () => {
  it('should login successfully', async () => {
    await browser.url('/login')

    const emailInput: WebdriverIO.Element = await $('#email')
    const passwordInput: WebdriverIO.Element = await $('#password')

    await emailInput.setValue('user@example.com')
    await passwordInput.setValue('password123')

    const loginButton = await $('#login-button')
    await loginButton.click()

    await expect(browser).toHaveUrlContaining('/dashboard')
  })
})`})})}),(0,b.jsx)("h2",{className:"text-2xl font-semibold mb-4",children:"CI/CD Integration"}),(0,b.jsx)("div",{className:"bg-gray-100 dark:bg-gray-800 p-4 rounded mb-6",children:(0,b.jsx)("pre",{className:"text-sm",children:(0,b.jsx)("code",{children:`# .github/workflows/webdriverio.yml
name: WebdriverIO Tests
on: [push, pull_request]
jobs:
  test:
    runs-on: ubuntu-latest
    steps:
    - uses: actions/checkout@v4
    - uses: actions/setup-node@v4
      with:
        node-version: '18'
    - run: npm ci
    - run: npx wdio run wdio.conf.js
    - uses: actions/upload-artifact@v4
      if: failure()
      with:
        name: screenshots
        path: ./errorShots/`})})}),(0,b.jsxs)("div",{className:"bg-yellow-100 dark:bg-yellow-900 border-l-4 border-yellow-500 p-4 mb-6",children:[(0,b.jsx)("p",{className:"font-semibold text-gray-900 dark:text-gray-100",children:"🟧 Warning:"}),(0,b.jsx)("p",{className:"text-gray-700 dark:text-gray-300",children:"WebdriverIO requires more setup than Cypress. Ensure proper driver management and consider using services for easier maintenance."})]}),(0,b.jsxs)("div",{className:"bg-purple-100 dark:bg-purple-900 border-l-4 border-purple-500 p-4 mb-6",children:[(0,b.jsx)("p",{className:"font-semibold text-gray-900 dark:text-gray-100",children:"🟪 Key Tip:"}),(0,b.jsx)("p",{className:"text-gray-700 dark:text-gray-300",children:"Leverage WebdriverIO's extensive plugin ecosystem. Services like chromedriver and appium make setup much easier."})]}),(0,b.jsx)("h2",{className:"text-2xl font-semibold mb-4",children:"Common Interview Questions"}),(0,b.jsxs)("ul",{className:"list-disc list-inside mb-6",children:[(0,b.jsx)("li",{children:"How does WebdriverIO differ from Selenium WebDriver?"}),(0,b.jsx)("li",{children:"Explain WebdriverIO services and plugins"}),(0,b.jsx)("li",{children:"How to set up mobile testing with Appium?"}),(0,b.jsx)("li",{children:"What are WebdriverIO hooks?"}),(0,b.jsx)("li",{children:"How to handle waits in WebdriverIO?"})]}),(0,b.jsx)("h2",{className:"text-2xl font-semibold mb-4",children:"WebdriverIO Best Practices"}),(0,b.jsxs)("div",{className:"grid md:grid-cols-2 gap-6",children:[(0,b.jsxs)("div",{children:[(0,b.jsx)("h3",{className:"text-lg font-semibold mb-3",children:"Test Structure"}),(0,b.jsxs)("ul",{className:"list-disc list-inside",children:[(0,b.jsx)("li",{children:"Use Page Object Model"}),(0,b.jsx)("li",{children:"Implement proper waits"}),(0,b.jsx)("li",{children:"Use descriptive selectors"}),(0,b.jsx)("li",{children:"Organize tests by feature"}),(0,b.jsx)("li",{children:"Implement proper cleanup"})]})]}),(0,b.jsxs)("div",{children:[(0,b.jsx)("h3",{className:"text-lg font-semibold mb-3",children:"Configuration"}),(0,b.jsxs)("ul",{className:"list-disc list-inside",children:[(0,b.jsx)("li",{children:"Use environment-specific configs"}),(0,b.jsx)("li",{children:"Configure appropriate timeouts"}),(0,b.jsx)("li",{children:"Set up proper reporters"}),(0,b.jsx)("li",{children:"Use services for driver management"}),(0,b.jsx)("li",{children:"Implement retry mechanisms"})]})]})]})]})}a.s(["default",()=>c])}];

//# sourceMappingURL=%5Broot-of-the-server%5D__99faf772._.js.map