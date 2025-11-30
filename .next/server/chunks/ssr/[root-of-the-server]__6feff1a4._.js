module.exports=[93695,(a,b,c)=>{b.exports=a.x("next/dist/shared/lib/no-fallback-error.external.js",()=>require("next/dist/shared/lib/no-fallback-error.external.js"))},17745,a=>{a.n(a.i(59250))},23303,a=>{a.n(a.i(88148))},44896,a=>{a.n(a.i(74740))},46174,a=>{a.n(a.i(83216))},78190,a=>{a.n(a.i(17921))},31433,a=>{"use strict";var b=a.i(64868);function c(){return(0,b.jsxs)("div",{className:"max-w-4xl mx-auto",children:[(0,b.jsx)("h1",{className:"text-3xl font-bold mb-6",children:"Automation Framework Architecture"}),(0,b.jsx)("p",{className:"mb-4",children:"Framework architecture defines the overall structure and organization of your automation test suite. A well-designed architecture ensures scalability, maintainability, and reusability."}),(0,b.jsxs)("div",{className:"bg-blue-100 dark:bg-blue-900 border-l-4 border-blue-500 p-4 mb-4",children:[(0,b.jsx)("p",{className:"font-semibold text-gray-900 dark:text-gray-100",children:"🟦 Info:"}),(0,b.jsx)("p",{className:"text-gray-700 dark:text-gray-300",children:"Good architecture separates concerns, promotes reusability, and makes the framework easy to maintain and extend."})]}),(0,b.jsx)("h2",{className:"text-2xl font-semibold mb-4",children:"Common Framework Architectures"}),(0,b.jsx)("h3",{className:"text-xl font-semibold mb-2",children:"1. Linear Framework (Record & Playback)"}),(0,b.jsx)("p",{className:"mb-4",children:"Simple approach where tests are recorded and played back. Limited reusability and maintainability."}),(0,b.jsxs)("div",{className:"bg-green-100 dark:bg-green-900 border-l-4 border-green-500 p-4 mb-4",children:[(0,b.jsx)("p",{className:"font-semibold text-gray-900 dark:text-gray-100",children:"🟩 Example:"}),(0,b.jsx)("p",{className:"text-gray-700 dark:text-gray-300",children:"Basic Selenium IDE scripts. Good for quick demos but not scalable for large projects."})]}),(0,b.jsx)("h3",{className:"text-xl font-semibold mb-2",children:"2. Modular Framework"}),(0,b.jsx)("p",{className:"mb-4",children:"Breaks application into modules with separate test scripts for each. Improves reusability over linear approach."}),(0,b.jsx)("h3",{className:"text-xl font-semibold mb-2",children:"3. Data-Driven Framework"}),(0,b.jsx)("p",{className:"mb-4",children:"Separates test logic from test data. Same test can run with multiple data sets."}),(0,b.jsx)("h3",{className:"text-xl font-semibold mb-2",children:"4. Keyword-Driven Framework"}),(0,b.jsx)("p",{className:"mb-4",children:"Uses keywords to represent actions. Tests are written in natural language style."}),(0,b.jsx)("h3",{className:"text-xl font-semibold mb-2",children:"5. Hybrid Framework"}),(0,b.jsx)("p",{className:"mb-4",children:"Combines multiple approaches. Most common in enterprise environments."}),(0,b.jsx)("h2",{className:"text-2xl font-semibold mb-4",children:"Layered Architecture Pattern"}),(0,b.jsx)("pre",{className:"bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 p-4 rounded mb-4 text-center",children:(0,b.jsx)("code",{children:`     Test Scripts (Business Logic)
              ↓
    Page Objects / Components (UI Layer)
              ↓
   Utilities / Helpers (Common Functions)
              ↓
Drivers / Libraries (Core Framework)`})}),(0,b.jsx)("h2",{className:"text-2xl font-semibold mb-4",children:"Core Framework Components"}),(0,b.jsx)("h3",{className:"text-xl font-semibold mb-2",children:"1. Base Classes"}),(0,b.jsx)("pre",{className:"bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 p-4 rounded mb-4",children:(0,b.jsx)("code",{children:`// BaseTest.js
class BaseTest {
  constructor() {
    this.driver = new WebDriver();
    this.config = loadConfig();
  }

  async setup() {
    await this.driver.startSession();
    await this.driver.maximizeWindow();
  }

  async teardown() {
    await this.driver.quit();
  }

  async takeScreenshot(filename) {
    const screenshot = await this.driver.takeScreenshot();
    // Save screenshot logic
  }
}`})}),(0,b.jsx)("h3",{className:"text-xl font-semibold mb-2",children:"2. Configuration Management"}),(0,b.jsx)("pre",{className:"bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 p-4 rounded mb-4",children:(0,b.jsx)("code",{children:`// config.json
{
  "environments": {
    "dev": {
      "url": "https://dev.example.com",
      "timeout": 30000
    },
    "staging": {
      "url": "https://staging.example.com",
      "timeout": 45000
    }
  },
  "browsers": ["chrome", "firefox", "safari"],
  "parallel": {
    "enabled": true,
    "maxInstances": 4
  }
}`})}),(0,b.jsx)("h3",{className:"text-xl font-semibold mb-2",children:"3. Test Data Management"}),(0,b.jsx)("pre",{className:"bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 p-4 rounded mb-4",children:(0,b.jsx)("code",{children:`// TestDataManager.js
class TestDataManager {
  static getUserData(type) {
    const users = {
      valid: { email: 'user@example.com', password: 'password123' },
      invalid: { email: 'invalid@email.com', password: 'wrong' }
    };
    return users[type];
  }

  static generateRandomEmail() {
    return 'test' + Date.now() + '@example.com';
  }
}`})}),(0,b.jsx)("h3",{className:"text-xl font-semibold mb-2",children:"4. Reporting Framework"}),(0,b.jsx)("pre",{className:"bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 p-4 rounded mb-4",children:(0,b.jsx)("code",{children:`// ReportManager.js
class ReportManager {
  static logStep(step, status) {
    const timestamp = new Date().toISOString();
    console.log('[' + timestamp + '] ' + status + ': ' + step);
    // Write to report file
  }

  static attachScreenshot(filename) {
    // Attach screenshot to report
  }

  static generateReport(results) {
    // Generate HTML/PDF report
  }
}`})}),(0,b.jsxs)("div",{className:"bg-yellow-100 dark:bg-yellow-900 border-l-4 border-yellow-500 p-4 mb-4",children:[(0,b.jsx)("p",{className:"font-semibold text-gray-900 dark:text-gray-100",children:"🟧 Warning:"}),(0,b.jsx)("p",{className:"text-gray-700 dark:text-gray-300",children:"Don't over-engineer the framework. Start simple and add complexity only when needed."})]}),(0,b.jsx)("h2",{className:"text-2xl font-semibold mb-4",children:"Directory Structure"}),(0,b.jsx)("pre",{className:"bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 p-4 rounded mb-4",children:(0,b.jsx)("code",{children:`automation-framework/
├── src/
│   ├── main/
│   │   ├── java/ (or python/, js/)
│   │   │   ├── pages/          # Page Objects
│   │   │   ├── components/     # Reusable components
│   │   │   ├── utils/          # Helper utilities
│   │   │   └── config/         # Configuration files
│   └── test/
│       ├── java/ (or python/, js/)
│       │   ├── tests/          # Test classes
│       │   ├── data/           # Test data files
│       │   └── resources/      # Test resources
├── reports/                    # Test reports
├── screenshots/                # Failure screenshots
├── logs/                       # Execution logs
├── config/                     # Environment configs
└── scripts/                    # Build/run scripts`})}),(0,b.jsx)("h2",{className:"text-2xl font-semibold mb-4",children:"Framework Design Principles"}),(0,b.jsx)("h3",{className:"text-xl font-semibold mb-2",children:"SOLID Principles in Testing"}),(0,b.jsxs)("ul",{className:"list-disc list-inside mb-4",children:[(0,b.jsxs)("li",{children:[(0,b.jsx)("strong",{children:"Single Responsibility:"})," Each class has one purpose"]}),(0,b.jsxs)("li",{children:[(0,b.jsx)("strong",{children:"Open/Closed:"})," Extend without modifying existing code"]}),(0,b.jsxs)("li",{children:[(0,b.jsx)("strong",{children:"Liskov Substitution:"})," Subtypes are substitutable"]}),(0,b.jsxs)("li",{children:[(0,b.jsx)("strong",{children:"Interface Segregation:"})," Specific interfaces over general ones"]}),(0,b.jsxs)("li",{children:[(0,b.jsx)("strong",{children:"Dependency Inversion:"})," Depend on abstractions"]})]}),(0,b.jsx)("h3",{className:"text-xl font-semibold mb-2",children:"Design Patterns"}),(0,b.jsxs)("ul",{className:"list-disc list-inside mb-4",children:[(0,b.jsxs)("li",{children:[(0,b.jsx)("strong",{children:"Factory Pattern:"})," Create objects without specifying exact classes"]}),(0,b.jsxs)("li",{children:[(0,b.jsx)("strong",{children:"Singleton Pattern:"})," Single instance of configuration managers"]}),(0,b.jsxs)("li",{children:[(0,b.jsx)("strong",{children:"Strategy Pattern:"})," Different algorithms for different browsers"]}),(0,b.jsxs)("li",{children:[(0,b.jsx)("strong",{children:"Observer Pattern:"})," Event handling and reporting"]}),(0,b.jsxs)("li",{children:[(0,b.jsx)("strong",{children:"Decorator Pattern:"})," Adding behavior to page objects"]})]}),(0,b.jsx)("h2",{className:"text-2xl font-semibold mb-4",children:"Cross-Browser Testing Architecture"}),(0,b.jsx)("pre",{className:"bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 p-4 rounded mb-4",children:(0,b.jsx)("code",{children:`// BrowserFactory.js
class BrowserFactory {
  static createDriver(browserType) {
    switch(browserType) {
      case 'chrome':
        return new ChromeDriver();
      case 'firefox':
        return new FirefoxDriver();
      case 'safari':
        return new SafariDriver();
      default:
        throw new Error('Unsupported browser');
    }
  }
}

// Usage
const driver = BrowserFactory.createDriver(process.env.BROWSER || 'chrome');`})}),(0,b.jsx)("h2",{className:"text-2xl font-semibold mb-4",children:"Scalability Considerations"}),(0,b.jsxs)("ul",{className:"list-disc list-inside mb-4",children:[(0,b.jsx)("li",{children:"Parallel execution support"}),(0,b.jsx)("li",{children:"Cloud grid integration (Sauce Labs, BrowserStack)"}),(0,b.jsx)("li",{children:"Docker containerization"}),(0,b.jsx)("li",{children:"Distributed test execution"}),(0,b.jsx)("li",{children:"Dynamic test data generation"}),(0,b.jsx)("li",{children:"Plugin architecture for extensibility"})]}),(0,b.jsxs)("div",{className:"bg-purple-100 dark:bg-purple-900 border-l-4 border-purple-500 p-4 mb-4",children:[(0,b.jsx)("p",{className:"font-semibold text-gray-900 dark:text-gray-100",children:"🟪 Key Tip:"}),(0,b.jsx)("p",{className:"text-gray-700 dark:text-gray-300",children:"Document your framework architecture. Include README files, code comments, and architecture diagrams for new team members."})]}),(0,b.jsx)("h2",{className:"text-2xl font-semibold mb-4",children:"Framework Evolution"}),(0,b.jsxs)("ol",{className:"list-decimal list-inside mb-4",children:[(0,b.jsxs)("li",{children:[(0,b.jsx)("strong",{children:"Phase 1:"})," Basic scripts and utilities"]}),(0,b.jsxs)("li",{children:[(0,b.jsx)("strong",{children:"Phase 2:"})," Page objects and base classes"]}),(0,b.jsxs)("li",{children:[(0,b.jsx)("strong",{children:"Phase 3:"})," Configuration and reporting"]}),(0,b.jsxs)("li",{children:[(0,b.jsx)("strong",{children:"Phase 4:"})," CI/CD integration and parallel execution"]}),(0,b.jsxs)("li",{children:[(0,b.jsx)("strong",{children:"Phase 5:"})," Advanced features and optimization"]})]}),(0,b.jsx)("h2",{className:"text-2xl font-semibold mb-4",children:"Resources"}),(0,b.jsxs)("ul",{className:"list-disc list-inside mb-4",children:[(0,b.jsx)("li",{children:(0,b.jsx)("a",{href:"https://www.selenium.dev/documentation/test_practices/encouraged/",className:"text-blue-600 hover:underline",children:"Selenium Design Patterns"})}),(0,b.jsx)("li",{children:(0,b.jsx)("a",{href:"https://testautomationpatterns.com",className:"text-blue-600 hover:underline",children:"Test Automation Patterns"})}),(0,b.jsx)("li",{children:(0,b.jsx)("a",{href:"https://www.lambdatest.com",className:"text-blue-600 hover:underline",children:"LambdaTest Framework Guides"})})]})]})}a.s(["default",()=>c])}];

//# sourceMappingURL=%5Broot-of-the-server%5D__6feff1a4._.js.map