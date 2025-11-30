export default function Page() {
  return (
    <div className="max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">WebdriverIO</h1>

      <p className="mb-6">
        WebdriverIO is a next-generation browser and mobile automation test framework for Node.js. It provides a custom test runner, assertion library, and reporter system.
      </p>

      <div className="bg-blue-100 dark:bg-blue-900 border-l-4 border-blue-500 p-4 mb-6">
        <p className="font-semibold text-gray-900 dark:text-gray-100">🟦 Info:</p>
        <p className="text-gray-700 dark:text-gray-300">WebdriverIO combines the best of Selenium with modern JavaScript testing practices, offering a complete testing ecosystem with plugins, services, and integrations.</p>
      </div>

      <h2 className="text-2xl font-semibold mb-4">Setup</h2>
      <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded mb-6">
        <pre className="text-sm">
          <code>{`npm install @wdio/cli
npx wdio config          # Interactive setup
npx wdio run wdio.conf.js # Run tests`}</code>
        </pre>
      </div>

      <h2 className="text-2xl font-semibold mb-4">Configuration</h2>
      <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded mb-6">
        <pre className="text-sm">
          <code>{`// wdio.conf.js
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
}`}</code>
        </pre>
      </div>

      <h2 className="text-2xl font-semibold mb-4">Basic Test Example</h2>
      <div className="bg-white dark:bg-gray-700 p-4 rounded mb-6">
        <pre className="text-sm">
          <code>{`describe('Login Page', () => {
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
})`}</code>
        </pre>
      </div>

      <h2 className="text-2xl font-semibold mb-4">Page Object Model</h2>
      <div className="bg-white dark:bg-gray-700 p-4 rounded mb-6">
        <pre className="text-sm">
          <code>{`// test/pageobjects/login.page.js
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

export default new LoginPage()`}</code>
        </pre>
      </div>

      <h2 className="text-2xl font-semibold mb-4">Appium Integration</h2>
      <div className="bg-white dark:bg-gray-700 p-4 rounded mb-6">
        <pre className="text-sm">
          <code>{`// wdio.conf.js for mobile testing
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
})`}</code>
        </pre>
      </div>

      <h2 className="text-2xl font-semibold mb-4">Custom Commands</h2>
      <div className="bg-white dark:bg-gray-700 p-4 rounded mb-6">
        <pre className="text-sm">
          <code>{`// wdio.conf.js
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
await browser.login('user@example.com', 'password123')`}</code>
        </pre>
      </div>

      <h2 className="text-2xl font-semibold mb-4">API Testing</h2>
      <div className="bg-white dark:bg-gray-700 p-4 rounded mb-6">
        <pre className="text-sm">
          <code>{`describe('API Tests', () => {
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
})`}</code>
        </pre>
      </div>

      <h2 className="text-2xl font-semibold mb-4">Services & Plugins</h2>

      <div className="grid md:grid-cols-2 gap-6 mb-6">
        <div>
          <h3 className="text-lg font-semibold mb-3">Built-in Services</h3>
          <ul className="list-disc list-inside">
            <li><strong>selenium-standalone:</strong> Local Selenium server</li>
            <li><strong>chromedriver:</strong> Chrome driver management</li>
            <li><strong>appium:</strong> Mobile testing service</li>
            <li><strong>sauce:</strong> Sauce Labs integration</li>
            <li><strong>browserstack:</strong> BrowserStack integration</li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-3">Popular Plugins</h3>
          <ul className="list-disc list-inside">
            <li><strong>wdio-cucumber-framework:</strong> BDD testing</li>
            <li><strong>wdio-allure-reporter:</strong> Test reporting</li>
            <li><strong>wdio-image-comparison-service:</strong> Visual testing</li>
            <li><strong>wdio-performance-service:</strong> Performance metrics</li>
            <li><strong>wdio-json-reporter:</strong> JSON test results</li>
          </ul>
        </div>
      </div>

      <div className="bg-green-100 dark:bg-green-900 border-l-4 border-green-500 p-4 mb-6">
        <p className="font-semibold text-gray-900 dark:text-gray-100">🟩 Example:</p>
        <p className="text-gray-700 dark:text-gray-300">WebdriverIO is ideal for teams needing both web and mobile testing capabilities, with extensive plugin ecosystem and strong TypeScript support.</p>
      </div>

      <h2 className="text-2xl font-semibold mb-4">TypeScript Support</h2>
      <div className="bg-white dark:bg-gray-700 p-4 rounded mb-6">
        <pre className="text-sm">
          <code>{`// test/specs/login.spec.ts
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
})`}</code>
        </pre>
      </div>

      <h2 className="text-2xl font-semibold mb-4">CI/CD Integration</h2>
      <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded mb-6">
        <pre className="text-sm">
          <code>{`# .github/workflows/webdriverio.yml
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
        path: ./errorShots/`}</code>
        </pre>
      </div>

      <div className="bg-yellow-100 dark:bg-yellow-900 border-l-4 border-yellow-500 p-4 mb-6">
        <p className="font-semibold text-gray-900 dark:text-gray-100">🟧 Warning:</p>
        <p className="text-gray-700 dark:text-gray-300">WebdriverIO requires more setup than Cypress. Ensure proper driver management and consider using services for easier maintenance.</p>
      </div>

      <div className="bg-purple-100 dark:bg-purple-900 border-l-4 border-purple-500 p-4 mb-6">
        <p className="font-semibold text-gray-900 dark:text-gray-100">🟪 Key Tip:</p>
        <p className="text-gray-700 dark:text-gray-300">Leverage WebdriverIO's extensive plugin ecosystem. Services like chromedriver and appium make setup much easier.</p>
      </div>

      <h2 className="text-2xl font-semibold mb-4">Common Interview Questions</h2>
      <ul className="list-disc list-inside mb-6">
        <li>How does WebdriverIO differ from Selenium WebDriver?</li>
        <li>Explain WebdriverIO services and plugins</li>
        <li>How to set up mobile testing with Appium?</li>
        <li>What are WebdriverIO hooks?</li>
        <li>How to handle waits in WebdriverIO?</li>
      </ul>

      <h2 className="text-2xl font-semibold mb-4">WebdriverIO Best Practices</h2>

      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <h3 className="text-lg font-semibold mb-3">Test Structure</h3>
          <ul className="list-disc list-inside">
            <li>Use Page Object Model</li>
            <li>Implement proper waits</li>
            <li>Use descriptive selectors</li>
            <li>Organize tests by feature</li>
            <li>Implement proper cleanup</li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-3">Configuration</h3>
          <ul className="list-disc list-inside">
            <li>Use environment-specific configs</li>
            <li>Configure appropriate timeouts</li>
            <li>Set up proper reporters</li>
            <li>Use services for driver management</li>
            <li>Implement retry mechanisms</li>
          </ul>
        </div>
      </div>
    </div>
  )
}
