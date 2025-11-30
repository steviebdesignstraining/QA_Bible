export default function Page() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Automation Framework Architecture</h1>

      <p className="mb-4">
        Framework architecture defines the overall structure and organization of your automation test suite. A well-designed architecture ensures scalability, maintainability, and reusability.
      </p>

      <div className="bg-blue-100 dark:bg-blue-900 border-l-4 border-blue-500 p-4 mb-4">
        <p className="font-semibold text-gray-900 dark:text-gray-100">🟦 Info:</p>
        <p className="text-gray-700 dark:text-gray-300">Good architecture separates concerns, promotes reusability, and makes the framework easy to maintain and extend.</p>
      </div>

      <h2 className="text-2xl font-semibold mb-4">Common Framework Architectures</h2>

      <h3 className="text-xl font-semibold mb-2">1. Linear Framework (Record & Playback)</h3>
      <p className="mb-4">
        Simple approach where tests are recorded and played back. Limited reusability and maintainability.
      </p>

      <div className="bg-green-100 dark:bg-green-900 border-l-4 border-green-500 p-4 mb-4">
        <p className="font-semibold text-gray-900 dark:text-gray-100">🟩 Example:</p>
        <p className="text-gray-700 dark:text-gray-300">Basic Selenium IDE scripts. Good for quick demos but not scalable for large projects.</p>
      </div>

      <h3 className="text-xl font-semibold mb-2">2. Modular Framework</h3>
      <p className="mb-4">
        Breaks application into modules with separate test scripts for each. Improves reusability over linear approach.
      </p>

      <h3 className="text-xl font-semibold mb-2">3. Data-Driven Framework</h3>
      <p className="mb-4">
        Separates test logic from test data. Same test can run with multiple data sets.
      </p>

      <h3 className="text-xl font-semibold mb-2">4. Keyword-Driven Framework</h3>
      <p className="mb-4">
        Uses keywords to represent actions. Tests are written in natural language style.
      </p>

      <h3 className="text-xl font-semibold mb-2">5. Hybrid Framework</h3>
      <p className="mb-4">
        Combines multiple approaches. Most common in enterprise environments.
      </p>

      <h2 className="text-2xl font-semibold mb-4">Layered Architecture Pattern</h2>
      <pre className="bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 p-4 rounded mb-4 text-center">
        <code>{`     Test Scripts (Business Logic)
              ↓
    Page Objects / Components (UI Layer)
              ↓
   Utilities / Helpers (Common Functions)
              ↓
Drivers / Libraries (Core Framework)`}</code>
      </pre>

      <h2 className="text-2xl font-semibold mb-4">Core Framework Components</h2>

      <h3 className="text-xl font-semibold mb-2">1. Base Classes</h3>
      <pre className="bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 p-4 rounded mb-4">
        <code>{`// BaseTest.js
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
}`}</code>
      </pre>

      <h3 className="text-xl font-semibold mb-2">2. Configuration Management</h3>
      <pre className="bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 p-4 rounded mb-4">
        <code>{`// config.json
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
}`}</code>
      </pre>

      <h3 className="text-xl font-semibold mb-2">3. Test Data Management</h3>
      <pre className="bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 p-4 rounded mb-4">
        <code>{`// TestDataManager.js
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
}`}</code>
      </pre>

      <h3 className="text-xl font-semibold mb-2">4. Reporting Framework</h3>
      <pre className="bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 p-4 rounded mb-4">
        <code>{`// ReportManager.js
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
}`}</code>
      </pre>

      <div className="bg-yellow-100 dark:bg-yellow-900 border-l-4 border-yellow-500 p-4 mb-4">
        <p className="font-semibold text-gray-900 dark:text-gray-100">🟧 Warning:</p>
        <p className="text-gray-700 dark:text-gray-300">Don't over-engineer the framework. Start simple and add complexity only when needed.</p>
      </div>

      <h2 className="text-2xl font-semibold mb-4">Directory Structure</h2>
      <pre className="bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 p-4 rounded mb-4">
        <code>{`automation-framework/
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
└── scripts/                    # Build/run scripts`}</code>
      </pre>

      <h2 className="text-2xl font-semibold mb-4">Framework Design Principles</h2>

      <h3 className="text-xl font-semibold mb-2">SOLID Principles in Testing</h3>
      <ul className="list-disc list-inside mb-4">
        <li><strong>Single Responsibility:</strong> Each class has one purpose</li>
        <li><strong>Open/Closed:</strong> Extend without modifying existing code</li>
        <li><strong>Liskov Substitution:</strong> Subtypes are substitutable</li>
        <li><strong>Interface Segregation:</strong> Specific interfaces over general ones</li>
        <li><strong>Dependency Inversion:</strong> Depend on abstractions</li>
      </ul>

      <h3 className="text-xl font-semibold mb-2">Design Patterns</h3>
      <ul className="list-disc list-inside mb-4">
        <li><strong>Factory Pattern:</strong> Create objects without specifying exact classes</li>
        <li><strong>Singleton Pattern:</strong> Single instance of configuration managers</li>
        <li><strong>Strategy Pattern:</strong> Different algorithms for different browsers</li>
        <li><strong>Observer Pattern:</strong> Event handling and reporting</li>
        <li><strong>Decorator Pattern:</strong> Adding behavior to page objects</li>
      </ul>

      <h2 className="text-2xl font-semibold mb-4">Cross-Browser Testing Architecture</h2>
      <pre className="bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 p-4 rounded mb-4">
        <code>{`// BrowserFactory.js
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
const driver = BrowserFactory.createDriver(process.env.BROWSER || 'chrome');`}</code>
      </pre>

      <h2 className="text-2xl font-semibold mb-4">Scalability Considerations</h2>
      <ul className="list-disc list-inside mb-4">
        <li>Parallel execution support</li>
        <li>Cloud grid integration (Sauce Labs, BrowserStack)</li>
        <li>Docker containerization</li>
        <li>Distributed test execution</li>
        <li>Dynamic test data generation</li>
        <li>Plugin architecture for extensibility</li>
      </ul>

      <div className="bg-purple-100 dark:bg-purple-900 border-l-4 border-purple-500 p-4 mb-4">
        <p className="font-semibold text-gray-900 dark:text-gray-100">🟪 Key Tip:</p>
        <p className="text-gray-700 dark:text-gray-300">Document your framework architecture. Include README files, code comments, and architecture diagrams for new team members.</p>
      </div>

      <h2 className="text-2xl font-semibold mb-4">Framework Evolution</h2>
      <ol className="list-decimal list-inside mb-4">
        <li><strong>Phase 1:</strong> Basic scripts and utilities</li>
        <li><strong>Phase 2:</strong> Page objects and base classes</li>
        <li><strong>Phase 3:</strong> Configuration and reporting</li>
        <li><strong>Phase 4:</strong> CI/CD integration and parallel execution</li>
        <li><strong>Phase 5:</strong> Advanced features and optimization</li>
      </ol>

      <h2 className="text-2xl font-semibold mb-4">Resources</h2>
      <ul className="list-disc list-inside mb-4">
        <li><a href="https://www.selenium.dev/documentation/test_practices/encouraged/" className="text-blue-600 hover:underline">Selenium Design Patterns</a></li>
        <li><a href="https://testautomationpatterns.com" className="text-blue-600 hover:underline">Test Automation Patterns</a></li>
        <li><a href="https://www.lambdatest.com" className="text-blue-600 hover:underline">LambdaTest Framework Guides</a></li>
      </ul>
    </div>
  )
}

