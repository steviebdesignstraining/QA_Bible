module.exports=[93695,(a,b,c)=>{b.exports=a.x("next/dist/shared/lib/no-fallback-error.external.js",()=>require("next/dist/shared/lib/no-fallback-error.external.js"))},17745,a=>{a.n(a.i(59250))},23303,a=>{a.n(a.i(88148))},44896,a=>{a.n(a.i(74740))},46174,a=>{a.n(a.i(83216))},78190,a=>{a.n(a.i(17921))},63942,a=>{"use strict";var b=a.i(64868);function c(){return(0,b.jsxs)("div",{className:"max-w-6xl mx-auto",children:[(0,b.jsx)("h1",{className:"text-3xl font-bold mb-6",children:"Appium"}),(0,b.jsx)("p",{className:"mb-6",children:"Appium is an open-source test automation framework for mobile applications. It supports native, hybrid, and mobile web apps on iOS and Android platforms."}),(0,b.jsxs)("div",{className:"bg-blue-100 dark:bg-blue-900 border-l-4 border-blue-500 p-4 mb-6",children:[(0,b.jsx)("p",{className:"font-semibold text-gray-900 dark:text-gray-100",children:"🟦 Info:"}),(0,b.jsx)("p",{className:"text-gray-700 dark:text-gray-300",children:"Appium uses the WebDriver protocol and supports multiple programming languages. It works with real devices and emulators/simulators."})]}),(0,b.jsx)("h2",{className:"text-2xl font-semibold mb-4",children:"Setup"}),(0,b.jsx)("div",{className:"bg-gray-100 dark:bg-gray-800 p-4 rounded mb-6",children:(0,b.jsx)("pre",{className:"text-sm",children:(0,b.jsx)("code",{children:`# Install Appium
npm install -g appium
npm install -g appium-doctor

# Install drivers
appium driver install xcuitest    # iOS
appium driver install uiautomator2 # Android

# Start Appium server
appium --address 127.0.0.1 --port 4723`})})}),(0,b.jsx)("h2",{className:"text-2xl font-semibold mb-4",children:"Capabilities Configuration"}),(0,b.jsx)("div",{className:"bg-gray-100 dark:bg-gray-800 p-4 rounded mb-6",children:(0,b.jsx)("pre",{className:"text-sm",children:(0,b.jsx)("code",{children:`// Android capabilities
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
}`})})}),(0,b.jsx)("h2",{className:"text-2xl font-semibold mb-4",children:"Basic Test Example"}),(0,b.jsx)("div",{className:"bg-white dark:bg-gray-700 p-4 rounded mb-6",children:(0,b.jsx)("pre",{className:"text-sm",children:(0,b.jsx)("code",{children:`const { remote } = require('webdriverio')

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
})`})})}),(0,b.jsx)("h2",{className:"text-2xl font-semibold mb-4",children:"Element Location Strategies"}),(0,b.jsxs)("div",{className:"grid md:grid-cols-2 gap-6 mb-6",children:[(0,b.jsxs)("div",{children:[(0,b.jsx)("h3",{className:"text-lg font-semibold mb-3",children:"Android (UiAutomator2)"}),(0,b.jsxs)("ul",{className:"list-disc list-inside",children:[(0,b.jsxs)("li",{children:[(0,b.jsx)("strong",{children:"ID:"})," resource-id attribute"]}),(0,b.jsxs)("li",{children:[(0,b.jsx)("strong",{children:"XPath:"})," XML path expressions"]}),(0,b.jsxs)("li",{children:[(0,b.jsx)("strong",{children:"Class:"})," Android class names"]}),(0,b.jsxs)("li",{children:[(0,b.jsx)("strong",{children:"Accessibility ID:"})," content-desc"]}),(0,b.jsxs)("li",{children:[(0,b.jsx)("strong",{children:"UI Automator:"})," Advanced selectors"]})]})]}),(0,b.jsxs)("div",{children:[(0,b.jsx)("h3",{className:"text-lg font-semibold mb-3",children:"iOS (XCUITest)"}),(0,b.jsxs)("ul",{className:"list-disc list-inside",children:[(0,b.jsxs)("li",{children:[(0,b.jsx)("strong",{children:"ID:"})," accessibility identifier"]}),(0,b.jsxs)("li",{children:[(0,b.jsx)("strong",{children:"XPath:"})," XML path expressions"]}),(0,b.jsxs)("li",{children:[(0,b.jsx)("strong",{children:"Class:"})," iOS class names"]}),(0,b.jsxs)("li",{children:[(0,b.jsx)("strong",{children:"Name:"})," accessibility label"]}),(0,b.jsxs)("li",{children:[(0,b.jsx)("strong",{children:"Predicate:"})," NSPredicate queries"]})]})]})]}),(0,b.jsx)("h2",{className:"text-2xl font-semibold mb-4",children:"Page Object Model"}),(0,b.jsx)("div",{className:"bg-white dark:bg-gray-700 p-4 rounded mb-6",children:(0,b.jsx)("pre",{className:"text-sm",children:(0,b.jsx)("code",{children:`// pageobjects/LoginPage.js
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

export default LoginPage`})})}),(0,b.jsx)("h2",{className:"text-2xl font-semibold mb-4",children:"Gestures & Interactions"}),(0,b.jsx)("div",{className:"bg-white dark:bg-gray-700 p-4 rounded mb-6",children:(0,b.jsx)("pre",{className:"text-sm",children:(0,b.jsx)("code",{children:`describe('Mobile Gestures', () => {
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
})`})})}),(0,b.jsx)("h2",{className:"text-2xl font-semibold mb-4",children:"Device-Specific Testing"}),(0,b.jsxs)("div",{className:"grid md:grid-cols-2 gap-6 mb-6",children:[(0,b.jsxs)("div",{children:[(0,b.jsx)("h3",{className:"text-lg font-semibold mb-3",children:"Android Testing"}),(0,b.jsxs)("ul",{className:"list-disc list-inside",children:[(0,b.jsx)("li",{children:"Test on multiple Android versions"}),(0,b.jsx)("li",{children:"Handle permissions dialogs"}),(0,b.jsx)("li",{children:"Test app backgrounding"}),(0,b.jsx)("li",{children:"Verify notifications"}),(0,b.jsx)("li",{children:"Test device rotation"})]})]}),(0,b.jsxs)("div",{children:[(0,b.jsx)("h3",{className:"text-lg font-semibold mb-3",children:"iOS Testing"}),(0,b.jsxs)("ul",{className:"list-disc list-inside",children:[(0,b.jsx)("li",{children:"Test on different iOS versions"}),(0,b.jsx)("li",{children:"Handle iOS permissions"}),(0,b.jsx)("li",{children:"Test app switching"}),(0,b.jsx)("li",{children:"Verify push notifications"}),(0,b.jsx)("li",{children:"Test Face ID/Touch ID"})]})]})]}),(0,b.jsx)("h2",{className:"text-2xl font-semibold mb-4",children:"Appium with WebdriverIO"}),(0,b.jsx)("div",{className:"bg-white dark:bg-gray-700 p-4 rounded mb-6",children:(0,b.jsx)("pre",{className:"text-sm",children:(0,b.jsx)("code",{children:`// wdio.conf.js
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
})`})})}),(0,b.jsxs)("div",{className:"bg-green-100 dark:bg-green-900 border-l-4 border-green-500 p-4 mb-6",children:[(0,b.jsx)("p",{className:"font-semibold text-gray-900 dark:text-gray-100",children:"🟩 Example:"}),(0,b.jsx)("p",{className:"text-gray-700 dark:text-gray-300",children:"Appium enables testing the same app on both iOS and Android with a single test script, making cross-platform mobile testing efficient."})]}),(0,b.jsx)("h2",{className:"text-2xl font-semibold mb-4",children:"Real Device Testing"}),(0,b.jsx)("div",{className:"bg-gray-100 dark:bg-gray-800 p-4 rounded mb-6",children:(0,b.jsx)("pre",{className:"text-sm",children:(0,b.jsx)("code",{children:`# Android real device
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
}`})})}),(0,b.jsx)("h2",{className:"text-2xl font-semibold mb-4",children:"CI/CD Integration"}),(0,b.jsx)("div",{className:"bg-gray-100 dark:bg-gray-800 p-4 rounded mb-6",children:(0,b.jsx)("pre",{className:"text-sm",children:(0,b.jsx)("code",{children:`# .github/workflows/mobile-tests.yml
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
    - run: npm run test:ios`})})}),(0,b.jsxs)("div",{className:"bg-yellow-100 dark:bg-yellow-900 border-l-4 border-yellow-500 p-4 mb-6",children:[(0,b.jsx)("p",{className:"font-semibold text-gray-900 dark:text-gray-100",children:"🟧 Warning:"}),(0,b.jsx)("p",{className:"text-gray-700 dark:text-gray-300",children:"Mobile testing requires device management and can be slow. Start with emulators/simulators for faster feedback, then test on real devices."})]}),(0,b.jsxs)("div",{className:"bg-purple-100 dark:bg-purple-900 border-l-4 border-purple-500 p-4 mb-6",children:[(0,b.jsx)("p",{className:"font-semibold text-gray-900 dark:text-gray-100",children:"🟪 Key Tip:"}),(0,b.jsx)("p",{className:"text-gray-700 dark:text-gray-300",children:"Use accessibility IDs for element location. They are more stable than XPath and work across both platforms."})]}),(0,b.jsx)("h2",{className:"text-2xl font-semibold mb-4",children:"Common Interview Questions"}),(0,b.jsxs)("ul",{className:"list-disc list-inside mb-6",children:[(0,b.jsx)("li",{children:"How does Appium work?"}),(0,b.jsx)("li",{children:"What are the differences between UiAutomator2 and XCUITest?"}),(0,b.jsx)("li",{children:"How to handle app permissions in tests?"}),(0,b.jsx)("li",{children:"What are Appium capabilities?"}),(0,b.jsx)("li",{children:"How to test on real devices vs emulators?"})]}),(0,b.jsx)("h2",{className:"text-2xl font-semibold mb-4",children:"Appium Best Practices"}),(0,b.jsxs)("div",{className:"grid md:grid-cols-2 gap-6",children:[(0,b.jsxs)("div",{children:[(0,b.jsx)("h3",{className:"text-lg font-semibold mb-3",children:"Test Setup"}),(0,b.jsxs)("ul",{className:"list-disc list-inside",children:[(0,b.jsx)("li",{children:"Use Page Object Model"}),(0,b.jsx)("li",{children:"Implement proper waits"}),(0,b.jsx)("li",{children:"Handle app state properly"}),(0,b.jsx)("li",{children:"Use descriptive element locators"}),(0,b.jsx)("li",{children:"Test on multiple device sizes"})]})]}),(0,b.jsxs)("div",{children:[(0,b.jsx)("h3",{className:"text-lg font-semibold mb-3",children:"Device Management"}),(0,b.jsxs)("ul",{className:"list-disc list-inside",children:[(0,b.jsx)("li",{children:"Reset app state between tests"}),(0,b.jsx)("li",{children:"Handle device orientation"}),(0,b.jsx)("li",{children:"Test network conditions"}),(0,b.jsx)("li",{children:"Monitor device resources"}),(0,b.jsx)("li",{children:"Use cloud device farms for scale"})]})]})]})]})}a.s(["default",()=>c])}];

//# sourceMappingURL=%5Broot-of-the-server%5D__91ee97af._.js.map