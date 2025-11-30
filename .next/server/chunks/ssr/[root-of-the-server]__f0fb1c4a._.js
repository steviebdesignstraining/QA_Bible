module.exports=[93695,(a,b,c)=>{b.exports=a.x("next/dist/shared/lib/no-fallback-error.external.js",()=>require("next/dist/shared/lib/no-fallback-error.external.js"))},17745,a=>{a.n(a.i(59250))},23303,a=>{a.n(a.i(88148))},44896,a=>{a.n(a.i(74740))},46174,a=>{a.n(a.i(83216))},78190,a=>{a.n(a.i(17921))},47932,a=>{"use strict";var b=a.i(64868);function c(){return(0,b.jsxs)("div",{className:"max-w-6xl mx-auto",children:[(0,b.jsx)("h1",{className:"text-3xl font-bold mb-6",children:"Maestro"}),(0,b.jsx)("p",{className:"mb-6",children:"Maestro is a mobile UI testing framework that uses simple YAML flows to describe user interactions. It provides fast, reliable testing for mobile applications without requiring complex setup."}),(0,b.jsxs)("div",{className:"bg-blue-100 dark:bg-blue-900 border-l-4 border-blue-500 p-4 mb-6",children:[(0,b.jsx)("p",{className:"font-semibold text-gray-900 dark:text-gray-100",children:"🟦 Info:"}),(0,b.jsx)("p",{className:"text-gray-700 dark:text-gray-300",children:"Maestro focuses on high-level user flows rather than individual element interactions, making it ideal for smoke tests, regression testing, and critical user journey validation."})]}),(0,b.jsx)("h2",{className:"text-2xl font-semibold mb-4",children:"Setup"}),(0,b.jsx)("div",{className:"bg-gray-100 dark:bg-gray-800 p-4 rounded mb-6",children:(0,b.jsx)("pre",{className:"text-sm",children:(0,b.jsx)("code",{children:`# Install Maestro CLI
curl -Ls "https://get.maestro.mobile.dev" | bash

# Verify installation
maestro --version

# For iOS testing (on macOS)
# Ensure Xcode and iOS Simulator are installed

# For Android testing
# Ensure Android SDK and emulator are available`})})}),(0,b.jsx)("h2",{className:"text-2xl font-semibold mb-4",children:"Basic Flow Example"}),(0,b.jsx)("div",{className:"bg-white dark:bg-gray-700 p-4 rounded mb-6",children:(0,b.jsx)("pre",{className:"text-sm",children:(0,b.jsx)("code",{children:`appId: com.example.app
---
- launchApp
- tapOn: "Login"
- inputText: "user@example.com"
- tapOn: "Password"
- inputText: "password123"
- tapOn: "Sign In"
- assertVisible: "Welcome back!"
- tapOn: "Profile"
- assertVisible: "John Doe"`})})}),(0,b.jsx)("h2",{className:"text-2xl font-semibold mb-4",children:"Flow Structure"}),(0,b.jsxs)("div",{className:"grid md:grid-cols-2 gap-6 mb-6",children:[(0,b.jsxs)("div",{children:[(0,b.jsx)("h3",{className:"text-lg font-semibold mb-3",children:"Basic Commands"}),(0,b.jsxs)("ul",{className:"list-disc list-inside",children:[(0,b.jsxs)("li",{children:[(0,b.jsx)("strong",{children:"launchApp:"})," Start the application"]}),(0,b.jsxs)("li",{children:[(0,b.jsx)("strong",{children:"tapOn:"})," Touch an element"]}),(0,b.jsxs)("li",{children:[(0,b.jsx)("strong",{children:"inputText:"})," Enter text input"]}),(0,b.jsxs)("li",{children:[(0,b.jsx)("strong",{children:"assertVisible:"})," Verify element visibility"]}),(0,b.jsxs)("li",{children:[(0,b.jsx)("strong",{children:"scroll:"})," Scroll in a direction"]})]})]}),(0,b.jsxs)("div",{children:[(0,b.jsx)("h3",{className:"text-lg font-semibold mb-3",children:"Advanced Commands"}),(0,b.jsxs)("ul",{className:"list-disc list-inside",children:[(0,b.jsxs)("li",{children:[(0,b.jsx)("strong",{children:"swipe:"})," Swipe gesture"]}),(0,b.jsxs)("li",{children:[(0,b.jsx)("strong",{children:"waitForAnimationToEnd:"})," Wait for animations"]}),(0,b.jsxs)("li",{children:[(0,b.jsx)("strong",{children:"takeScreenshot:"})," Capture screen"]}),(0,b.jsxs)("li",{children:[(0,b.jsx)("strong",{children:"runFlow:"})," Execute another flow"]}),(0,b.jsxs)("li",{children:[(0,b.jsx)("strong",{children:"repeat:"})," Loop actions"]})]})]})]}),(0,b.jsx)("h2",{className:"text-2xl font-semibold mb-4",children:"Element Selection"}),(0,b.jsx)("div",{className:"bg-white dark:bg-gray-700 p-4 rounded mb-6",children:(0,b.jsx)("pre",{className:"text-sm",children:(0,b.jsx)("code",{children:`# By text content
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
    text: "Password"`})})}),(0,b.jsx)("h2",{className:"text-2xl font-semibold mb-4",children:"Data-Driven Testing"}),(0,b.jsx)("div",{className:"bg-white dark:bg-gray-700 p-4 rounded mb-6",children:(0,b.jsx)("pre",{className:"text-sm",children:(0,b.jsx)("code",{children:`# Using environment variables
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
maestro test login.yaml --env USERNAME=admin@example.com`})})}),(0,b.jsx)("h2",{className:"text-2xl font-semibold mb-4",children:"Conditional Logic"}),(0,b.jsx)("div",{className:"bg-white dark:bg-gray-700 p-4 rounded mb-6",children:(0,b.jsx)("pre",{className:"text-sm",children:(0,b.jsx)("code",{children:`# Conditional execution
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
      - assertVisible: "Dark theme applied"`})})}),(0,b.jsx)("h2",{className:"text-2xl font-semibold mb-4",children:"Repeating Actions"}),(0,b.jsx)("div",{className:"bg-white dark:bg-gray-700 p-4 rounded mb-6",children:(0,b.jsx)("pre",{className:"text-sm",children:(0,b.jsx)("code",{children:`# Simple repetition
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
      - tapOn: "Save"`})})}),(0,b.jsxs)("div",{className:"bg-green-100 dark:bg-green-900 border-l-4 border-green-500 p-4 mb-6",children:[(0,b.jsx)("p",{className:"font-semibold text-gray-900 dark:text-gray-100",children:"🟩 Example:"}),(0,b.jsx)("p",{className:"text-gray-700 dark:text-gray-300",children:"Maestro excels at testing critical user journeys like login, checkout, and navigation flows. Its YAML-based syntax makes tests readable and maintainable for the entire team."})]}),(0,b.jsx)("h2",{className:"text-2xl font-semibold mb-4",children:"Running Tests"}),(0,b.jsx)("div",{className:"bg-gray-100 dark:bg-gray-800 p-4 rounded mb-6",children:(0,b.jsx)("pre",{className:"text-sm",children:(0,b.jsx)("code",{children:`# Run single flow
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
maestro studio`})})}),(0,b.jsx)("h2",{className:"text-2xl font-semibold mb-4",children:"CI/CD Integration"}),(0,b.jsx)("div",{className:"bg-gray-100 dark:bg-gray-800 p-4 rounded mb-6",children:(0,b.jsx)("pre",{className:"text-sm",children:(0,b.jsx)("code",{children:`# .github/workflows/maestro-tests.yml
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
    - run: maestro test flows/ --format junit`})})}),(0,b.jsxs)("div",{className:"bg-yellow-100 dark:bg-yellow-900 border-l-4 border-yellow-500 p-4 mb-6",children:[(0,b.jsx)("p",{className:"font-semibold text-gray-900 dark:text-gray-100",children:"🟧 Warning:"}),(0,b.jsx)("p",{className:"text-gray-700 dark:text-gray-300",children:"Maestro relies on UI element accessibility. Ensure your app has proper accessibility labels and IDs for reliable test execution."})]}),(0,b.jsxs)("div",{className:"bg-purple-100 dark:bg-purple-900 border-l-4 border-purple-500 p-4 mb-6",children:[(0,b.jsx)("p",{className:"font-semibold text-gray-900 dark:text-gray-100",children:"🟪 Key Tip:"}),(0,b.jsx)("p",{className:"text-gray-700 dark:text-gray-300",children:"Start with simple flows and gradually add complexity. Use Maestro Studio to record interactions and understand element selectors."})]}),(0,b.jsx)("h2",{className:"text-2xl font-semibold mb-4",children:"Common Interview Questions"}),(0,b.jsxs)("ul",{className:"list-disc list-inside mb-6",children:[(0,b.jsx)("li",{children:"How does Maestro differ from Appium?"}),(0,b.jsx)("li",{children:"What are the advantages of YAML-based testing?"}),(0,b.jsx)("li",{children:"How do you handle dynamic content in Maestro?"}),(0,b.jsx)("li",{children:"What are Maestro flows and when to use them?"}),(0,b.jsx)("li",{children:"How do you organize test suites in Maestro?"})]}),(0,b.jsx)("h2",{className:"text-2xl font-semibold mb-4",children:"Maestro Best Practices"}),(0,b.jsxs)("div",{className:"grid md:grid-cols-2 gap-6",children:[(0,b.jsxs)("div",{children:[(0,b.jsx)("h3",{className:"text-lg font-semibold mb-3",children:"Flow Design"}),(0,b.jsxs)("ul",{className:"list-disc list-inside",children:[(0,b.jsx)("li",{children:"Keep flows focused on single user journeys"}),(0,b.jsx)("li",{children:"Use descriptive element selectors"}),(0,b.jsx)("li",{children:"Implement proper waiting strategies"}),(0,b.jsx)("li",{children:"Organize flows in logical directories"}),(0,b.jsx)("li",{children:"Use environment variables for test data"})]})]}),(0,b.jsxs)("div",{children:[(0,b.jsx)("h3",{className:"text-lg font-semibold mb-3",children:"Maintenance"}),(0,b.jsxs)("ul",{className:"list-disc list-inside",children:[(0,b.jsx)("li",{children:"Regularly update element selectors"}),(0,b.jsx)("li",{children:"Test flows after UI changes"}),(0,b.jsx)("li",{children:"Use version control for flows"}),(0,b.jsx)("li",{children:"Document complex flows"}),(0,b.jsx)("li",{children:"Implement CI/CD for automated testing"})]})]})]})]})}a.s(["default",()=>c])}];

//# sourceMappingURL=%5Broot-of-the-server%5D__f0fb1c4a._.js.map