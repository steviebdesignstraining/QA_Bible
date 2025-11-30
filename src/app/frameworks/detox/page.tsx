export default function Page() {
  return (
    <div className="max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Detox</h1>

      <p className="mb-6">
        Detox is an end-to-end testing framework for React Native applications. It provides gray-box testing with synchronization to ensure tests run reliably.
      </p>

      <div className="bg-blue-100 dark:bg-blue-900 border-l-4 border-blue-500 p-4 mb-6">
        <p className="font-semibold text-gray-900 dark:text-gray-100">🟦 Info:</p>
        <p className="text-gray-700 dark:text-gray-300">Detox runs tests directly on the device/emulator, providing accurate testing that matches real user interactions with proper synchronization.</p>
      </div>

      <h2 className="text-2xl font-semibold mb-4">Setup</h2>
      <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded mb-6">
        <pre className="text-sm">
          <code>{`npm install -g detox-cli
npm install detox --save-dev

# Initialize Detox in project
detox init -r jest

# Build the app
detox build --configuration ios.sim.debug
detox build --configuration android.emu.debug`}</code>
        </pre>
      </div>

      <h2 className="text-2xl font-semibold mb-4">Configuration</h2>
      <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded mb-6">
        <pre className="text-sm">
          <code>{`// .detoxrc.js
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
}`}</code>
        </pre>
      </div>

      <h2 className="text-2xl font-semibold mb-4">Basic Test Example</h2>
      <div className="bg-white dark:bg-gray-700 p-4 rounded mb-6">
        <pre className="text-sm">
          <code>{`describe('Login Flow', () => {
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
})`}</code>
        </pre>
      </div>

      <h2 className="text-2xl font-semibold mb-4">Matchers & Actions</h2>

      <div className="grid md:grid-cols-2 gap-6 mb-6">
        <div>
          <h3 className="text-lg font-semibold mb-3">Element Matchers</h3>
          <ul className="list-disc list-inside">
            <li><strong>by.id():</strong> Test ID attribute</li>
            <li><strong>by.text():</strong> Exact text match</li>
            <li><strong>by.label():</strong> Accessibility label</li>
            <li><strong>by.type():</strong> Component type</li>
            <li><strong>by.traits():</strong> iOS accessibility traits</li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-3">Actions</h3>
          <ul className="list-disc list-inside">
            <li><strong>tap():</strong> Touch/click element</li>
            <li><strong>typeText():</strong> Enter text</li>
            <li><strong>clearText():</strong> Clear input field</li>
            <li><strong>scroll():</strong> Scroll in direction</li>
            <li><strong>swipe():</strong> Swipe gesture</li>
          </ul>
        </div>
      </div>

      <h2 className="text-2xl font-semibold mb-4">Advanced Interactions</h2>
      <div className="bg-white dark:bg-gray-700 p-4 rounded mb-6">
        <pre className="text-sm">
          <code>{`describe('Advanced Interactions', () => {
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
})`}</code>
        </pre>
      </div>

      <h2 className="text-2xl font-semibold mb-4">Synchronization & Waits</h2>
      <div className="bg-white dark:bg-gray-700 p-4 rounded mb-6">
        <pre className="text-sm">
          <code>{`describe('Synchronization', () => {
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
})`}</code>
        </pre>
      </div>

      <h2 className="text-2xl font-semibold mb-4">Cross-Platform Testing</h2>
      <div className="bg-white dark:bg-gray-700 p-4 rounded mb-6">
        <pre className="text-sm">
          <code>{`// Shared test logic
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
})`}</code>
        </pre>
      </div>

      <div className="bg-green-100 dark:bg-green-900 border-l-4 border-green-500 p-4 mb-6">
        <p className="font-semibold text-gray-900 dark:text-gray-100">🟩 Example:</p>
        <p className="text-gray-700 dark:text-gray-300">Detox ensures tests run in sync with the React Native app, eliminating race conditions and providing reliable end-to-end testing for mobile apps.</p>
      </div>

      <h2 className="text-2xl font-semibold mb-4">Custom Matchers</h2>
      <div className="bg-white dark:bg-gray-700 p-4 rounded mb-6">
        <pre className="text-sm">
          <code>{`// e2e/utils/customMatchers.js
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
expect(element(by.id('counter'))).toHaveTextContent('42')`}</code>
        </pre>
      </div>

      <h2 className="text-2xl font-semibold mb-4">CI/CD Integration</h2>
      <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded mb-6">
        <pre className="text-sm">
          <code>{`# .github/workflows/detox-tests.yml
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
    - run: detox test --configuration android.emu.release --cleanup`}</code>
        </pre>
      </div>

      <div className="bg-yellow-100 dark:bg-yellow-900 border-l-4 border-yellow-500 p-4 mb-6">
        <p className="font-semibold text-gray-900 dark:text-gray-100">🟧 Warning:</p>
        <p className="text-gray-700 dark:text-gray-300">Detox requires building the app for testing, which can be time-consuming. Use incremental testing and focus on critical user journeys.</p>
      </div>

      <div className="bg-purple-100 dark:bg-purple-900 border-l-4 border-purple-500 p-4 mb-6">
        <p className="font-semibold text-gray-900 dark:text-gray-100">🟪 Key Tip:</p>
        <p className="text-gray-700 dark:text-gray-300">Use testIDs for element selection. Detox automatically waits for elements, making tests more reliable than manual timing approaches.</p>
      </div>

      <h2 className="text-2xl font-semibold mb-4">Common Interview Questions</h2>
      <ul className="list-disc list-inside mb-6">
        <li>How does Detox differ from Appium?</li>
        <li>What is gray-box testing in Detox?</li>
        <li>How does Detox handle synchronization?</li>
        <li>What are Detox matchers?</li>
        <li>How to test React Native apps with Detox?</li>
      </ul>

      <h2 className="text-2xl font-semibold mb-4">Detox Best Practices</h2>

      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <h3 className="text-lg font-semibold mb-3">Test Design</h3>
          <ul className="list-disc list-inside">
            <li>Use descriptive test names</li>
            <li>Test complete user journeys</li>
            <li>Avoid flaky selectors</li>
            <li>Implement proper setup/teardown</li>
            <li>Use Page Object Model</li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-3">Performance</h3>
          <ul className="list-disc list-inside">
            <li>Run tests in parallel when possible</li>
            <li>Use appropriate timeouts</li>
            <li>Clean up test data</li>
            <li>Monitor test execution time</li>
            <li>Focus on critical paths</li>
          </ul>
        </div>
      </div>
    </div>
  )
}
