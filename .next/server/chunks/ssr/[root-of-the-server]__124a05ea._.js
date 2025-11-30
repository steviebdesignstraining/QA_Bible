module.exports=[93695,(a,b,c)=>{b.exports=a.x("next/dist/shared/lib/no-fallback-error.external.js",()=>require("next/dist/shared/lib/no-fallback-error.external.js"))},17745,a=>{a.n(a.i(59250))},23303,a=>{a.n(a.i(88148))},44896,a=>{a.n(a.i(74740))},46174,a=>{a.n(a.i(83216))},78190,a=>{a.n(a.i(17921))},50349,a=>{"use strict";var b=a.i(64868);function c(){return(0,b.jsxs)("div",{className:"max-w-6xl mx-auto",children:[(0,b.jsx)("h1",{className:"text-3xl font-bold mb-6",children:"Detox"}),(0,b.jsx)("p",{className:"mb-6",children:"Detox is an end-to-end testing framework for React Native applications. It provides gray-box testing with synchronization to ensure tests run reliably."}),(0,b.jsxs)("div",{className:"bg-blue-100 dark:bg-blue-900 border-l-4 border-blue-500 p-4 mb-6",children:[(0,b.jsx)("p",{className:"font-semibold text-gray-900 dark:text-gray-100",children:"🟦 Info:"}),(0,b.jsx)("p",{className:"text-gray-700 dark:text-gray-300",children:"Detox runs tests directly on the device/emulator, providing accurate testing that matches real user interactions with proper synchronization."})]}),(0,b.jsx)("h2",{className:"text-2xl font-semibold mb-4",children:"Setup"}),(0,b.jsx)("div",{className:"bg-gray-100 dark:bg-gray-800 p-4 rounded mb-6",children:(0,b.jsx)("pre",{className:"text-sm",children:(0,b.jsx)("code",{children:`npm install -g detox-cli
npm install detox --save-dev

# Initialize Detox in project
detox init -r jest

# Build the app
detox build --configuration ios.sim.debug
detox build --configuration android.emu.debug`})})}),(0,b.jsx)("h2",{className:"text-2xl font-semibold mb-4",children:"Configuration"}),(0,b.jsx)("div",{className:"bg-gray-100 dark:bg-gray-800 p-4 rounded mb-6",children:(0,b.jsx)("pre",{className:"text-sm",children:(0,b.jsx)("code",{children:`// .detoxrc.js
module.exports = {
  testRunner: 'jest',
  runnerConfig: 'e2e/config.json',
  configurations: {
    'ios.sim.debug': {
      binaryPath: 'ios/build/Build/Products/Debug-iphonesimulator/ReactNativeDetox.app',
      build: 'xcodebuild -workspace ios/ReactNativeDetox.xcworkspace -scheme ReactNativeDetox -configuration Debug -sdk iphonesimulator -derivedDataPath ios/build',
      type: 'ios.simulator',
      device: {
        type: 'iPhone 13'
      }
    },
    'android.emu.debug': {
      binaryPath: 'android/app/build/outputs/apk/debug/app-debug.apk',
      build: 'cd android && ./gradlew assembleDebug assembleAndroidTest -DtestBuildType=debug',
      type: 'android.emulator',
      device: {
        avdName: 'Pixel_3a_API_30'
      }
    }
  }
}`})})}),(0,b.jsx)("h2",{className:"text-2xl font-semibold mb-4",children:"Basic Test Example"}),(0,b.jsx)("div",{className:"bg-white dark:bg-gray-700 p-4 rounded mb-6",children:(0,b.jsx)("pre",{className:"text-sm",children:(0,b.jsx)("code",{children:`describe('Login Flow', () => {
  beforeEach(async () => {
    await device.reloadReactNative()
  })

  it('should login with valid credentials', async () => {
    await element(by.id('email-input')).typeText('user@example.com')
    await element(by.id('password-input')).typeText('password123')
    await element(by.id('login-button')).tap()

    await expect(element(by.id('dashboard'))).toBeVisible()
    await expect(element(by.text('Welcome back!'))).toBeVisible()
  })

  it('should show error for invalid credentials', async () => {
    await element(by.id('email-input')).typeText('invalid@email.com')
    await element(by.id('password-input')).typeText('wrongpassword')
    await element(by.id('login-button')).tap()

    await expect(element(by.text('Invalid credentials'))).toBeVisible()
  })
})`})})}),(0,b.jsx)("h2",{className:"text-2xl font-semibold mb-4",children:"Matchers & Actions"}),(0,b.jsxs)("div",{className:"grid md:grid-cols-2 gap-6 mb-6",children:[(0,b.jsxs)("div",{children:[(0,b.jsx)("h3",{className:"text-lg font-semibold mb-3",children:"Element Matchers"}),(0,b.jsxs)("ul",{className:"list-disc list-inside",children:[(0,b.jsxs)("li",{children:[(0,b.jsx)("strong",{children:"by.id():"})," Test ID attribute"]}),(0,b.jsxs)("li",{children:[(0,b.jsx)("strong",{children:"by.text():"})," Exact text match"]}),(0,b.jsxs)("li",{children:[(0,b.jsx)("strong",{children:"by.label():"})," Accessibility label"]}),(0,b.jsxs)("li",{children:[(0,b.jsx)("strong",{children:"by.type():"})," Component type"]}),(0,b.jsxs)("li",{children:[(0,b.jsx)("strong",{children:"by.traits():"})," iOS accessibility traits"]})]})]}),(0,b.jsxs)("div",{children:[(0,b.jsx)("h3",{className:"text-lg font-semibold mb-3",children:"Actions"}),(0,b.jsxs)("ul",{className:"list-disc list-inside",children:[(0,b.jsxs)("li",{children:[(0,b.jsx)("strong",{children:"tap():"})," Touch/click element"]}),(0,b.jsxs)("li",{children:[(0,b.jsx)("strong",{children:"typeText():"})," Enter text"]}),(0,b.jsxs)("li",{children:[(0,b.jsx)("strong",{children:"clearText():"})," Clear input field"]}),(0,b.jsxs)("li",{children:[(0,b.jsx)("strong",{children:"scroll():"})," Scroll in direction"]}),(0,b.jsxs)("li",{children:[(0,b.jsx)("strong",{children:"swipe():"})," Swipe gesture"]})]})]})]}),(0,b.jsx)("h2",{className:"text-2xl font-semibold mb-4",children:"Advanced Interactions"}),(0,b.jsx)("div",{className:"bg-white dark:bg-gray-700 p-4 rounded mb-6",children:(0,b.jsx)("pre",{className:"text-sm",children:(0,b.jsx)("code",{children:`describe('Advanced Interactions', () => {
  it('should handle scroll and swipe', async () => {
    // Scroll to element
    await element(by.id('target-element')).scroll(100, 'down')

    // Swipe on element
    await element(by.id('swipeable-list')).swipe('left')

    // Long press
    await element(by.id('long-press-item')).longPress()

    // Multi-tap
    await element(by.id('multi-tap-area')).multiTap(2)
  })

  it('should handle device features', async () => {
    // Shake device
    await device.shake()

    // Set device orientation
    await device.setOrientation('landscape')

    // Take screenshot
    await device.takeScreenshot('test-screenshot')

    // Get device dimensions
    const dimensions = await device.getDimensions()
    console.log('Device dimensions:', dimensions)
  })
})`})})}),(0,b.jsx)("h2",{className:"text-2xl font-semibold mb-4",children:"Synchronization & Waits"}),(0,b.jsx)("div",{className:"bg-white dark:bg-gray-700 p-4 rounded mb-6",children:(0,b.jsx)("pre",{className:"text-sm",children:(0,b.jsx)("code",{children:`describe('Synchronization', () => {
  it('should wait for elements', async () => {
    // Detox automatically waits for elements
    await element(by.id('loading-spinner')).toBeNotVisible()

    // Manual waits if needed
    await waitFor(element(by.id('data-loaded')))
      .toBeVisible()
      .withTimeout(5000)

    // Wait for specific condition
    await waitFor(element(by.id('counter')))
      .toHaveText('10')
      .withTimeout(10000)
  })

  it('should handle async operations', async () => {
    // Start async operation
    await element(by.id('start-process')).tap()

    // Wait for completion indicator
    await waitFor(element(by.id('process-complete')))
      .toBeVisible()
      .withTimeout(30000)

    // Verify results
    await expect(element(by.id('result-count'))).toHaveText('5')
  })
})`})})}),(0,b.jsx)("h2",{className:"text-2xl font-semibold mb-4",children:"Cross-Platform Testing"}),(0,b.jsx)("div",{className:"bg-white dark:bg-gray-700 p-4 rounded mb-6",children:(0,b.jsx)("pre",{className:"text-sm",children:(0,b.jsx)("code",{children:`// Shared test logic
const loginTest = async () => {
  await element(by.id('email-input')).typeText('user@example.com')
  await element(by.id('password-input')).typeText('password123')
  await element(by.id('login-button')).tap()
  await expect(element(by.id('dashboard'))).toBeVisible()
}

describe('Cross-Platform Login', () => {
  it('should login on iOS', async () => {
    // iOS-specific setup if needed
    await device.selectApp('ios')
    await loginTest()
  })

  it('should login on Android', async () => {
    // Android-specific setup if needed
    await device.selectApp('android')
    await loginTest()
  })
})

// Platform-specific tests
const { Platform } = require('react-native')

describe('Platform Specific', () => {
  it('should handle platform differences', async () => {
    if (Platform.OS === 'ios') {
      // iOS specific logic
      await element(by.traits(['button'])).tap()
    } else {
      // Android specific logic
      await element(by.type('android.widget.Button')).tap()
    }
  })
})`})})}),(0,b.jsxs)("div",{className:"bg-green-100 dark:bg-green-900 border-l-4 border-green-500 p-4 mb-6",children:[(0,b.jsx)("p",{className:"font-semibold text-gray-900 dark:text-gray-100",children:"🟩 Example:"}),(0,b.jsx)("p",{className:"text-gray-700 dark:text-gray-300",children:"Detox ensures tests run in sync with the React Native app, eliminating race conditions and providing reliable end-to-end testing for mobile apps."})]}),(0,b.jsx)("h2",{className:"text-2xl font-semibold mb-4",children:"Custom Matchers"}),(0,b.jsx)("div",{className:"bg-white dark:bg-gray-700 p-4 rounded mb-6",children:(0,b.jsx)("pre",{className:"text-sm",children:(0,b.jsx)("code",{children:`// e2e/utils/customMatchers.js
const customMatchers = {
  toBeVisibleWithin: (element) => ({
    compare: async (timeout = 5000) => {
      try {
        await waitFor(element)
          .toBeVisible()
          .withTimeout(timeout)
        return { pass: true }
      } catch (error) {
        return {
          pass: false,
          message: 'Element not visible within ' + timeout + 'ms'
        }
      }
    }
  }),

  toHaveTextContent: (element) => ({
    compare: async (expectedText) => {
      const actualText = await element.getText()
      return {
        pass: actualText === expectedText,
        message: 'Expected "' + expectedText + '", but got "' + actualText + '"'
      }
    }
  })
}

// Usage in tests
expect(element(by.id('welcome-message'))).toBeVisibleWithin(3000)
expect(element(by.id('counter'))).toHaveTextContent('42')`})})}),(0,b.jsx)("h2",{className:"text-2xl font-semibold mb-4",children:"CI/CD Integration"}),(0,b.jsx)("div",{className:"bg-gray-100 dark:bg-gray-800 p-4 rounded mb-6",children:(0,b.jsx)("pre",{className:"text-sm",children:(0,b.jsx)("code",{children:`# .github/workflows/detox-tests.yml
name: Detox Tests
on: [push, pull_request]

jobs:
  test-ios:
    runs-on: macos-latest
    steps:
    - uses: actions/checkout@v4
    - uses: actions/setup-node@v4
      with:
        node-version: '18'
    - name: Setup Xcode
      uses: maxim-lobanov/setup-xcode@v1
      with:
        xcode-version: '14.0'
    - run: npm ci
    - run: cd ios && pod install
    - run: detox build --configuration ios.sim.release
    - run: detox test --configuration ios.sim.release --cleanup

  test-android:
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
    - run: detox build --configuration android.emu.release
    - run: detox test --configuration android.emu.release --cleanup`})})}),(0,b.jsxs)("div",{className:"bg-yellow-100 dark:bg-yellow-900 border-l-4 border-yellow-500 p-4 mb-6",children:[(0,b.jsx)("p",{className:"font-semibold text-gray-900 dark:text-gray-100",children:"🟧 Warning:"}),(0,b.jsx)("p",{className:"text-gray-700 dark:text-gray-300",children:"Detox requires building the app for testing, which can be time-consuming. Use incremental testing and focus on critical user journeys."})]}),(0,b.jsxs)("div",{className:"bg-purple-100 dark:bg-purple-900 border-l-4 border-purple-500 p-4 mb-6",children:[(0,b.jsx)("p",{className:"font-semibold text-gray-900 dark:text-gray-100",children:"🟪 Key Tip:"}),(0,b.jsx)("p",{className:"text-gray-700 dark:text-gray-300",children:"Use testIDs for element selection. Detox automatically waits for elements, making tests more reliable than manual timing approaches."})]}),(0,b.jsx)("h2",{className:"text-2xl font-semibold mb-4",children:"Common Interview Questions"}),(0,b.jsxs)("ul",{className:"list-disc list-inside mb-6",children:[(0,b.jsx)("li",{children:"How does Detox differ from Appium?"}),(0,b.jsx)("li",{children:"What is gray-box testing in Detox?"}),(0,b.jsx)("li",{children:"How does Detox handle synchronization?"}),(0,b.jsx)("li",{children:"What are Detox matchers?"}),(0,b.jsx)("li",{children:"How to test React Native apps with Detox?"})]}),(0,b.jsx)("h2",{className:"text-2xl font-semibold mb-4",children:"Detox Best Practices"}),(0,b.jsxs)("div",{className:"grid md:grid-cols-2 gap-6",children:[(0,b.jsxs)("div",{children:[(0,b.jsx)("h3",{className:"text-lg font-semibold mb-3",children:"Test Design"}),(0,b.jsxs)("ul",{className:"list-disc list-inside",children:[(0,b.jsx)("li",{children:"Use descriptive test names"}),(0,b.jsx)("li",{children:"Test complete user journeys"}),(0,b.jsx)("li",{children:"Avoid flaky selectors"}),(0,b.jsx)("li",{children:"Implement proper setup/teardown"}),(0,b.jsx)("li",{children:"Use Page Object Model"})]})]}),(0,b.jsxs)("div",{children:[(0,b.jsx)("h3",{className:"text-lg font-semibold mb-3",children:"Performance"}),(0,b.jsxs)("ul",{className:"list-disc list-inside",children:[(0,b.jsx)("li",{children:"Run tests in parallel when possible"}),(0,b.jsx)("li",{children:"Use appropriate timeouts"}),(0,b.jsx)("li",{children:"Clean up test data"}),(0,b.jsx)("li",{children:"Monitor test execution time"}),(0,b.jsx)("li",{children:"Focus on critical paths"})]})]})]})]})}a.s(["default",()=>c])}];

//# sourceMappingURL=%5Broot-of-the-server%5D__124a05ea._.js.map