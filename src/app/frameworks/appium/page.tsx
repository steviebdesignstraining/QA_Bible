export default function Page() {
  return (
    <div className="max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Appium</h1>

      <p className="mb-6">
        Appium is an open-source test automation framework for mobile applications. It supports native, hybrid, and mobile web apps on iOS and Android platforms.
      </p>

      <div className="bg-blue-100 dark:bg-blue-900 border-l-4 border-blue-500 p-4 mb-6">
        <p className="font-semibold text-gray-900 dark:text-gray-100">🟦 Info:</p>
        <p className="text-gray-700 dark:text-gray-300">Appium uses the WebDriver protocol and supports multiple programming languages. It works with real devices and emulators/simulators.</p>
      </div>

      <h2 className="text-2xl font-semibold mb-4">Setup</h2>
      <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded mb-6">
        <pre className="text-sm">
          <code>{`# Install Appium
npm install -g appium
npm install -g appium-doctor

# Install drivers
appium driver install xcuitest    # iOS
appium driver install uiautomator2 # Android

# Start Appium server
appium --address 127.0.0.1 --port 4723`}</code>
        </pre>
      </div>

      <h2 className="text-2xl font-semibold mb-4">Capabilities Configuration</h2>
      <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded mb-6">
        <pre className="text-sm">
          <code>{`// Android capabilities
const androidCapabilities = {
  platformName: 'Android',
  platformVersion: '11.0',
  deviceName: 'emulator-5554',
  automationName: 'UiAutomator2',
  app: '/path/to/app.apk',
  appPackage: 'com.example.app',
  appActivity: 'com.example.app.MainActivity',
  noReset: false,
  fullReset: false
}

// iOS capabilities
const iosCapabilities = {
  platformName: 'iOS',
  platformVersion: '15.0',
  deviceName: 'iPhone 13',
  automationName: 'XCUITest',
  app: '/path/to/app.app',
  bundleId: 'com.example.app',
  noReset: false,
  fullReset: false
}`}</code>
        </pre>
      </div>

      <h2 className="text-2xl font-semibold mb-4">Basic Test Example</h2>
      <div className="bg-white dark:bg-gray-700 p-4 rounded mb-6">
        <pre className="text-sm">
          <code>{`const { remote } = require('webdriverio')

describe('Mobile App Tests', () => {
  let driver

  before(async () => {
    driver = await remote({
      hostname: '127.0.0.1',
      port: 4723,
      capabilities: {
        platformName: 'Android',
        platformVersion: '11.0',
        deviceName: 'emulator-5554',
        automationName: 'UiAutomator2',
        app: '/path/to/app.apk'
      }
    })
  })

  it('should login successfully', async () => {
    const emailField = await driver.$('//android.widget.EditText[@text="Email"]')
    const passwordField = await driver.$('//android.widget.EditText[@text="Password"]')
    const loginButton = await driver.$('//android.widget.Button[@text="Login"]')

    await emailField.setValue('user@example.com')
    await passwordField.setValue('password123')
    await loginButton.click()

    const dashboard = await driver.$('//android.widget.TextView[@text="Dashboard"]')
    await dashboard.waitForDisplayed({ timeout: 5000 })
  })

  after(async () => {
    await driver.deleteSession()
  })
})`}</code>
        </pre>
      </div>

      <h2 className="text-2xl font-semibold mb-4">Element Location Strategies</h2>

      <div className="grid md:grid-cols-2 gap-6 mb-6">
        <div>
          <h3 className="text-lg font-semibold mb-3">Android (UiAutomator2)</h3>
          <ul className="list-disc list-inside">
            <li><strong>ID:</strong> resource-id attribute</li>
            <li><strong>XPath:</strong> XML path expressions</li>
            <li><strong>Class:</strong> Android class names</li>
            <li><strong>Accessibility ID:</strong> content-desc</li>
            <li><strong>UI Automator:</strong> Advanced selectors</li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-3">iOS (XCUITest)</h3>
          <ul className="list-disc list-inside">
            <li><strong>ID:</strong> accessibility identifier</li>
            <li><strong>XPath:</strong> XML path expressions</li>
            <li><strong>Class:</strong> iOS class names</li>
            <li><strong>Name:</strong> accessibility label</li>
            <li><strong>Predicate:</strong> NSPredicate queries</li>
          </ul>
        </div>
      </div>

      <h2 className="text-2xl font-semibold mb-4">Page Object Model</h2>
      <div className="bg-white dark:bg-gray-700 p-4 rounded mb-6">
        <pre className="text-sm">
          <code>{`// pageobjects/LoginPage.js
class LoginPage {
  get emailField() {
    return driver.$('//android.widget.EditText[@text="Email"]')
  }

  get passwordField() {
    return driver.$('//android.widget.EditText[@text="Password"]')
  }

  get loginButton() {
    return driver.$('//android.widget.Button[@text="Login"]')
  }

  async login(email, password) {
    await this.emailField.setValue(email)
    await this.passwordField.setValue(password)
    await this.loginButton.click()
  }

  async isLoginSuccessful() {
    const dashboard = await driver.$('//android.widget.TextView[@text="Dashboard"]')
    return await dashboard.waitForDisplayed({ timeout: 5000 })
  }
}

export default LoginPage`}</code>
        </pre>
      </div>

      <h2 className="text-2xl font-semibold mb-4">Gestures & Interactions</h2>
      <div className="bg-white dark:bg-gray-700 p-4 rounded mb-6">
        <pre className="text-sm">
          <code>{`describe('Mobile Gestures', () => {
  it('should perform swipe gesture', async () => {
    // Swipe up
    await driver.touchAction([
      { action: 'press', x: 500, y: 1500 },
      { action: 'wait', ms: 1000 },
      { action: 'moveTo', x: 500, y: 500 },
      { action: 'release' }
    ])

    // Alternative using W3C actions
    await driver.performActions([{
      type: 'pointer',
      id: 'finger1',
      parameters: { pointerType: 'touch' },
      actions: [
        { type: 'pointerMove', duration: 0, x: 500, y: 1500 },
        { type: 'pointerDown', button: 0 },
        { type: 'pause', duration: 500 },
        { type: 'pointerMove', duration: 1000, x: 500, y: 500 },
        { type: 'pointerUp', button: 0 }
      ]
    }])
  })

  it('should handle long press', async () => {
    const element = await driver.$('#long-press-element')
    await driver.touchAction([
      { action: 'press', element: element },
      { action: 'wait', ms: 2000 },
      { action: 'release' }
    ])
  })
})`}</code>
        </pre>
      </div>

      <h2 className="text-2xl font-semibold mb-4">Device-Specific Testing</h2>

      <div className="grid md:grid-cols-2 gap-6 mb-6">
        <div>
          <h3 className="text-lg font-semibold mb-3">Android Testing</h3>
          <ul className="list-disc list-inside">
            <li>Test on multiple Android versions</li>
            <li>Handle permissions dialogs</li>
            <li>Test app backgrounding</li>
            <li>Verify notifications</li>
            <li>Test device rotation</li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-3">iOS Testing</h3>
          <ul className="list-disc list-inside">
            <li>Test on different iOS versions</li>
            <li>Handle iOS permissions</li>
            <li>Test app switching</li>
            <li>Verify push notifications</li>
            <li>Test Face ID/Touch ID</li>
          </ul>
        </div>
      </div>

      <h2 className="text-2xl font-semibold mb-4">Appium with WebdriverIO</h2>
      <div className="bg-white dark:bg-gray-700 p-4 rounded mb-6">
        <pre className="text-sm">
          <code>{`// wdio.conf.js
export const config = {
  services: ['appium'],
  appium: {
    command: 'appium',
    args: {
      address: '127.0.0.1',
      port: 4723
    }
  },
  capabilities: [{
    platformName: 'Android',
    platformVersion: '11.0',
    deviceName: 'emulator-5554',
    automationName: 'UiAutomator2',
    app: './apps/android.apk',
    appPackage: 'com.example.app',
    appActivity: 'com.example.app.MainActivity'
  }]
}

// Test file
describe('Mobile App', () => {
  it('should complete user registration', async () => {
    const registerButton = await $('#register-button')
    await registerButton.click()

    const nameField = await $('#name-field')
    const emailField = await $('#email-field')
    const submitButton = await $('#submit-button')

    await nameField.setValue('John Doe')
    await emailField.setValue('john@example.com')
    await submitButton.click()

    const successMessage = await $('.success-message')
    await expect(successMessage).toBeDisplayed()
  })
})`}</code>
        </pre>
      </div>

      <div className="bg-green-100 dark:bg-green-900 border-l-4 border-green-500 p-4 mb-6">
        <p className="font-semibold text-gray-900 dark:text-gray-100">🟩 Example:</p>
        <p className="text-gray-700 dark:text-gray-300">Appium enables testing the same app on both iOS and Android with a single test script, making cross-platform mobile testing efficient.</p>
      </div>

      <h2 className="text-2xl font-semibold mb-4">Real Device Testing</h2>
      <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded mb-6">
        <pre className="text-sm">
          <code>{`# Android real device
capabilities: {
  platformName: 'Android',
  platformVersion: '12.0',
  deviceName: 'Samsung Galaxy S21',
  udid: 'R58N123ABCD',  // Device UDID
  automationName: 'UiAutomator2',
  app: '/path/to/app.apk',
  noReset: false,
  newCommandTimeout: 300
}

# iOS real device
capabilities: {
  platformName: 'iOS',
  platformVersion: '15.0',
  deviceName: 'iPhone 13',
  udid: '00008030-00123456789ABCDEF',  // Device UDID
  automationName: 'XCUITest',
  app: '/path/to/app.ipa',
  xcodeOrgId: 'your-org-id',
  xcodeSigningId: 'iPhone Developer'
}`}</code>
        </pre>
      </div>

      <h2 className="text-2xl font-semibold mb-4">CI/CD Integration</h2>
      <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded mb-6">
        <pre className="text-sm">
          <code>{`# .github/workflows/mobile-tests.yml
name: Mobile Tests
on: [push, pull_request]

jobs:
  android-test:
    runs-on: ubuntu-latest
    steps:
    - uses: actions/checkout@v4
    - uses: actions/setup-node@v4
      with:
        node-version: '18'
    - uses: actions/setup-java@v4
      with:
        java-version: '11'
    - run: npm ci
    - run: npx appium driver install uiautomator2
    - run: |
        # Start emulator
        echo "y" | $ANDROID_HOME/tools/bin/sdkmanager --install 'system-images;android-29;google_apis;x86'
        echo "no" | $ANDROID_HOME/tools/bin/avdmanager create avd -n test -k 'system-images;android-29;google_apis;x86'
        $ANDROID_HOME/emulator/emulator -avd test -no-audio -no-window &
        # Wait for emulator
        timeout 300 bash -c 'until adb shell getprop sys.boot_completed; do sleep 5; done'
    - run: npm run test:android

  ios-test:
    runs-on: macos-latest
    steps:
    - uses: actions/checkout@v4
    - uses: actions/setup-node@v4
      with:
        node-version: '18'
    - run: npm ci
    - run: npx appium driver install xcuitest
    - run: npm run test:ios`}</code>
        </pre>
      </div>

      <div className="bg-yellow-100 dark:bg-yellow-900 border-l-4 border-yellow-500 p-4 mb-6">
        <p className="font-semibold text-gray-900 dark:text-gray-100">🟧 Warning:</p>
        <p className="text-gray-700 dark:text-gray-300">Mobile testing requires device management and can be slow. Start with emulators/simulators for faster feedback, then test on real devices.</p>
      </div>

      <div className="bg-purple-100 dark:bg-purple-900 border-l-4 border-purple-500 p-4 mb-6">
        <p className="font-semibold text-gray-900 dark:text-gray-100">🟪 Key Tip:</p>
        <p className="text-gray-700 dark:text-gray-300">Use accessibility IDs for element location. They are more stable than XPath and work across both platforms.</p>
      </div>

      <h2 className="text-2xl font-semibold mb-4">Common Interview Questions</h2>
      <ul className="list-disc list-inside mb-6">
        <li>How does Appium work?</li>
        <li>What are the differences between UiAutomator2 and XCUITest?</li>
        <li>How to handle app permissions in tests?</li>
        <li>What are Appium capabilities?</li>
        <li>How to test on real devices vs emulators?</li>
      </ul>

      <h2 className="text-2xl font-semibold mb-4">Appium Best Practices</h2>

      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <h3 className="text-lg font-semibold mb-3">Test Setup</h3>
          <ul className="list-disc list-inside">
            <li>Use Page Object Model</li>
            <li>Implement proper waits</li>
            <li>Handle app state properly</li>
            <li>Use descriptive element locators</li>
            <li>Test on multiple device sizes</li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-3">Device Management</h3>
          <ul className="list-disc list-inside">
            <li>Reset app state between tests</li>
            <li>Handle device orientation</li>
            <li>Test network conditions</li>
            <li>Monitor device resources</li>
            <li>Use cloud device farms for scale</li>
          </ul>
        </div>
      </div>
    </div>
  )
}
