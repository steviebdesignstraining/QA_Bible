export default function Page() {
  return (
    <div className="max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Maestro</h1>

      <p className="mb-6">
        Maestro is a mobile UI testing framework that uses simple YAML flows to describe user interactions. It provides fast, reliable testing for mobile applications without requiring complex setup.
      </p>

      <div className="bg-blue-100 dark:bg-blue-900 border-l-4 border-blue-500 p-4 mb-6">
        <p className="font-semibold text-gray-900 dark:text-gray-100">🟦 Info:</p>
        <p className="text-gray-700 dark:text-gray-300">Maestro focuses on high-level user flows rather than individual element interactions, making it ideal for smoke tests, regression testing, and critical user journey validation.</p>
      </div>

      <h2 className="text-2xl font-semibold mb-4">Setup</h2>
      <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded mb-6">
        <pre className="text-sm">
          <code>{`# Install Maestro CLI
curl -Ls "https://get.maestro.mobile.dev" | bash

# Verify installation
maestro --version

# For iOS testing (on macOS)
# Ensure Xcode and iOS Simulator are installed

# For Android testing
# Ensure Android SDK and emulator are available`}</code>
        </pre>
      </div>

      <h2 className="text-2xl font-semibold mb-4">Basic Flow Example</h2>
      <div className="bg-white dark:bg-gray-700 p-4 rounded mb-6">
        <pre className="text-sm">
          <code>{`appId: com.example.app
---
- launchApp
- tapOn: "Login"
- inputText: "user@example.com"
- tapOn: "Password"
- inputText: "password123"
- tapOn: "Sign In"
- assertVisible: "Welcome back!"
- tapOn: "Profile"
- assertVisible: "John Doe"`}</code>
        </pre>
      </div>

      <h2 className="text-2xl font-semibold mb-4">Flow Structure</h2>

      <div className="grid md:grid-cols-2 gap-6 mb-6">
        <div>
          <h3 className="text-lg font-semibold mb-3">Basic Commands</h3>
          <ul className="list-disc list-inside">
            <li><strong>launchApp:</strong> Start the application</li>
            <li><strong>tapOn:</strong> Touch an element</li>
            <li><strong>inputText:</strong> Enter text input</li>
            <li><strong>assertVisible:</strong> Verify element visibility</li>
            <li><strong>scroll:</strong> Scroll in a direction</li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-3">Advanced Commands</h3>
          <ul className="list-disc list-inside">
            <li><strong>swipe:</strong> Swipe gesture</li>
            <li><strong>waitForAnimationToEnd:</strong> Wait for animations</li>
            <li><strong>takeScreenshot:</strong> Capture screen</li>
            <li><strong>runFlow:</strong> Execute another flow</li>
            <li><strong>repeat:</strong> Loop actions</li>
          </ul>
        </div>
      </div>

      <h2 className="text-2xl font-semibold mb-4">Element Selection</h2>
      <div className="bg-white dark:bg-gray-700 p-4 rounded mb-6">
        <pre className="text-sm">
          <code>{`# By text content
- tapOn: "Login Button"
- tapOn: "Submit"

# By accessibility ID
- tapOn:
    id: "login-button"
- tapOn:
    id: "submit-btn"

# By partial text
- tapOn:
    text: "Login"
    index: 0  # If multiple matches

# By traits (iOS)
- tapOn:
    traits: ["button"]
    text: "Continue"

# By bounds (coordinates)
- tapOn:
    point: "50%,50%"  # Center of screen

# Complex selectors
- tapOn:
    below: "Username"
    text: "Password"`}</code>
        </pre>
      </div>

      <h2 className="text-2xl font-semibold mb-4">Data-Driven Testing</h2>
      <div className="bg-white dark:bg-gray-700 p-4 rounded mb-6">
        <pre className="text-sm">
          <code>{`# Using environment variables
- inputText: ${USERNAME}
- inputText: ${PASSWORD}

# Flow with parameters
# login.yaml
appId: com.example.app
env:
  USERNAME: user@example.com
  PASSWORD: password123
---
- launchApp
- tapOn: "Login"
- inputText: ${USERNAME}
- tapOn: "Password"
- inputText: ${PASSWORD}
- tapOn: "Sign In"

# Run with custom env
maestro test login.yaml --env USERNAME=admin@example.com`}</code>
        </pre>
      </div>

      <h2 className="text-2xl font-semibold mb-4">Conditional Logic</h2>
      <div className="bg-white dark:bg-gray-700 p-4 rounded mb-6">
        <pre className="text-sm">
          <code>{`# Conditional execution
- runFlow:
    when:
      visible: "Premium Feature"
    file: premium-flow.yaml

# Platform-specific logic
- runFlow:
    when:
      platform: iOS
    file: ios-specific.yaml

- runFlow:
    when:
      platform: Android
    file: android-specific.yaml

# Element-based conditions
- tapOn: "Settings"
- runFlow:
    when:
      visible: "Dark Mode"
    commands:
      - tapOn: "Dark Mode"
      - assertVisible: "Dark theme applied"`}</code>
        </pre>
      </div>

      <h2 className="text-2xl font-semibold mb-4">Repeating Actions</h2>
      <div className="bg-white dark:bg-gray-700 p-4 rounded mb-6">
        <pre className="text-sm">
          <code>{`# Simple repetition
- repeat:
    times: 3
    commands:
      - tapOn: "Add Item"
      - assertVisible: "Item added"

# Conditional repetition
- repeat:
    while:
      visible: "Load More"
    commands:
      - scroll
      - tapOn: "Load More"

# Data-driven repetition
- repeat:
    items:
      - "John Doe"
      - "Jane Smith"
      - "Bob Johnson"
    commands:
      - tapOn: "Add Contact"
      - inputText: ${item}
      - tapOn: "Save"`}</code>
        </pre>
      </div>

      <div className="bg-green-100 dark:bg-green-900 border-l-4 border-green-500 p-4 mb-6">
        <p className="font-semibold text-gray-900 dark:text-gray-100">🟩 Example:</p>
        <p className="text-gray-700 dark:text-gray-300">Maestro excels at testing critical user journeys like login, checkout, and navigation flows. Its YAML-based syntax makes tests readable and maintainable for the entire team.</p>
      </div>

      <h2 className="text-2xl font-semibold mb-4">Running Tests</h2>
      <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded mb-6">
        <pre className="text-sm">
          <code>{`# Run single flow
maestro test login.yaml

# Run all flows in directory
maestro test flows/

# Run on specific device
maestro test login.yaml --device "iPhone 13"

# Run with custom environment
maestro test login.yaml --env USERNAME=test@example.com

# Generate test report
maestro test flows/ --format junit --output results.xml

# Record interactions
maestro record login.yaml

# Interactive mode
maestro studio`}</code>
        </pre>
      </div>

      <h2 className="text-2xl font-semibold mb-4">CI/CD Integration</h2>
      <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded mb-6">
        <pre className="text-sm">
          <code>{`# .github/workflows/maestro-tests.yml
name: Maestro Mobile Tests
on: [push, pull_request]

jobs:
  ios-test:
    runs-on: macos-latest
    steps:
    - uses: actions/checkout@v4
    - uses: actions/setup-node@v4
      with:
        node-version: '18'
    - run: npm ci
    - run: npx maestro download-samples
    - run: xcrun simctl boot "iPhone 14"
    - run: maestro test flows/ --format junit
    - uses: dorny/test-reporter@v1
      if: success() || failure()
      with:
        name: iOS Tests
        path: '*.xml'
        reporter: java-junit

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
    - run: |
        # Start Android emulator
        echo "y" | $ANDROID_HOME/tools/bin/sdkmanager --install 'system-images;android-30;google_apis;x86'
        echo "no" | $ANDROID_HOME/tools/bin/avdmanager create avd -n test -k 'system-images;android-30;google_apis;x86'
        $ANDROID_HOME/emulator/emulator -avd test -no-audio -no-window &
        timeout 300 bash -c 'until adb shell getprop sys.boot_completed; do sleep 5; done'
    - run: maestro test flows/ --format junit`}</code>
        </pre>
      </div>

      <div className="bg-yellow-100 dark:bg-yellow-900 border-l-4 border-yellow-500 p-4 mb-6">
        <p className="font-semibold text-gray-900 dark:text-gray-100">🟧 Warning:</p>
        <p className="text-gray-700 dark:text-gray-300">Maestro relies on UI element accessibility. Ensure your app has proper accessibility labels and IDs for reliable test execution.</p>
      </div>

      <div className="bg-purple-100 dark:bg-purple-900 border-l-4 border-purple-500 p-4 mb-6">
        <p className="font-semibold text-gray-900 dark:text-gray-100">🟪 Key Tip:</p>
        <p className="text-gray-700 dark:text-gray-300">Start with simple flows and gradually add complexity. Use Maestro Studio to record interactions and understand element selectors.</p>
      </div>

      <h2 className="text-2xl font-semibold mb-4">Common Interview Questions</h2>
      <ul className="list-disc list-inside mb-6">
        <li>How does Maestro differ from Appium?</li>
        <li>What are the advantages of YAML-based testing?</li>
        <li>How do you handle dynamic content in Maestro?</li>
        <li>What are Maestro flows and when to use them?</li>
        <li>How do you organize test suites in Maestro?</li>
      </ul>

      <h2 className="text-2xl font-semibold mb-4">Maestro Best Practices</h2>

      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <h3 className="text-lg font-semibold mb-3">Flow Design</h3>
          <ul className="list-disc list-inside">
            <li>Keep flows focused on single user journeys</li>
            <li>Use descriptive element selectors</li>
            <li>Implement proper waiting strategies</li>
            <li>Organize flows in logical directories</li>
            <li>Use environment variables for test data</li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-3">Maintenance</h3>
          <ul className="list-disc list-inside">
            <li>Regularly update element selectors</li>
            <li>Test flows after UI changes</li>
            <li>Use version control for flows</li>
            <li>Document complex flows</li>
            <li>Implement CI/CD for automated testing</li>
          </ul>
        </div>
      </div>
    </div>
  )
}
