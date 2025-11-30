export default function Page() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Automation Testing Interview Q&A</h1>

      <p className="mb-4">
        Common automation testing interview questions and answers. Prepare for technical interviews with these comprehensive responses.
      </p>

      <div className="bg-blue-100 dark:bg-blue-900 border-l-4 border-blue-500 p-4 mb-4">
        <p className="font-semibold text-gray-900 dark:text-gray-100">🟦 Info:</p>
        <p className="text-gray-700 dark:text-gray-300">Focus on practical experience, problem-solving approaches, and real-world examples in your answers.</p>
      </div>

      <div className="space-y-6">
        <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-6">
          <h3 className="text-xl font-semibold mb-3">Q: What is test automation and why do we need it?</h3>
          <div className="bg-green-100 dark:bg-green-900 border-l-4 border-green-500 p-4">
            <p className="font-semibold text-gray-900 dark:text-gray-100">A:</p>
            <p className="text-gray-700 dark:text-gray-300">Test automation uses software tools to execute tests automatically, comparing actual results with expected results. We need it because:</p>
            <ul className="list-disc list-inside mt-2 text-gray-700 dark:text-gray-300">
              <li>Faster execution than manual testing</li>
              <li>Consistent and repeatable results</li>
              <li>Cost-effective for regression testing</li>
              <li>Enables continuous integration/delivery</li>
              <li>Frees testers for exploratory and creative work</li>
            </ul>
          </div>
        </div>

        <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-6">
          <h3 className="text-xl font-semibold mb-3">Q: What are the principles of test automation?</h3>
          <div className="bg-green-100 dark:bg-green-900 border-l-4 border-green-500 p-4">
            <p className="font-semibold text-gray-900 dark:text-gray-100">A:</p>
            <ul className="list-disc list-inside text-gray-700 dark:text-gray-300">
              <li><strong>Maintainability:</strong> Write clean, readable code</li>
              <li><strong>Reusability:</strong> Create reusable components and functions</li>
              <li><strong>Reliability:</strong> Handle dynamic elements and wait conditions</li>
              <li><strong>Independence:</strong> Tests should run independently</li>
              <li><strong>Scalability:</strong> Framework should grow with application</li>
              <li><strong>Reporting:</strong> Clear test execution reports</li>
            </ul>
          </div>
        </div>

        <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-6">
          <h3 className="text-xl font-semibold mb-3">Q: When should you NOT automate a test?</h3>
          <div className="bg-green-100 dark:bg-green-900 border-l-4 border-green-500 p-4">
            <p className="font-semibold text-gray-900 dark:text-gray-100">A:</p>
            <p className="text-gray-700 dark:text-gray-300">Avoid automating when:</p>
            <ul className="list-disc list-inside mt-2 text-gray-700 dark:text-gray-300">
              <li>Test will run only once or very infrequently</li>
              <li>UI is unstable and changes frequently</li>
              <li>Test requires human judgment or visual verification</li>
              <li>Automation cost exceeds manual testing cost</li>
              <li>Application has usability or UX requirements</li>
              <li>Team lacks automation skills</li>
            </ul>
          </div>
        </div>

        <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-6">
          <h3 className="text-xl font-semibold mb-3">Q: Explain the Page Object Model pattern.</h3>
          <div className="bg-green-100 dark:bg-green-900 border-l-4 border-green-500 p-4">
            <p className="font-semibold text-gray-900 dark:text-gray-100">A:</p>
            <p className="text-gray-700 dark:text-gray-300">Page Object Model (POM) is a design pattern that creates object repositories for web elements. Benefits include:</p>
            <ul className="list-disc list-inside mt-2 text-gray-700 dark:text-gray-300">
              <li>Separation of test logic from page-specific code</li>
              <li>Improved maintainability when UI changes</li>
              <li>Reusability across multiple test cases</li>
              <li>Better code organization and readability</li>
              <li>Easier to update element locators</li>
            </ul>
            <pre className="bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 p-4 rounded mt-4">
              <code>{`// Example POM class
class LoginPage {
  get usernameField() { return $('#username'); }
  get passwordField() { return $('#password'); }

  async login(username, password) {
    await this.usernameField.setValue(username);
    await this.passwordField.setValue(password);
    await this.loginButton.click();
  }
}`}</code>
            </pre>
          </div>
        </div>

        <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-6">
          <h3 className="text-xl font-semibold mb-3">Q: How do you handle dynamic elements in automation?</h3>
          <div className="bg-green-100 dark:bg-green-900 border-l-4 border-green-500 p-4">
            <p className="font-semibold text-gray-900 dark:text-gray-100">A:</p>
            <p className="text-gray-700 dark:text-gray-300">Handle dynamic elements by:</p>
            <ul className="list-disc list-inside mt-2 text-gray-700 dark:text-gray-300">
              <li>Using stable attributes like data-test-id or name</li>
              <li>XPath with contains() or starts-with() functions</li>
              <li>CSS selectors with partial attribute matching</li>
              <li>Waiting for elements to be present/stable</li>
              <li>Using relative locators (near, above, below)</li>
              <li>Implementing retry mechanisms</li>
            </ul>
          </div>
        </div>

        <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-6">
          <h3 className="text-xl font-semibold mb-3">Q: What are the different types of waits in automation?</h3>
          <div className="bg-green-100 dark:bg-green-900 border-l-4 border-green-500 p-4">
            <p className="font-semibold text-gray-900 dark:text-gray-100">A:</p>
            <ul className="list-disc list-inside text-gray-700 dark:text-gray-300">
              <li><strong>Implicit Wait:</strong> Global timeout for element location</li>
              <li><strong>Explicit Wait:</strong> Specific condition for particular element</li>
              <li><strong>Fluent Wait:</strong> Custom polling with frequency and timeout</li>
              <li><strong>Static Wait:</strong> Fixed delay (generally avoided)</li>
            </ul>
            <pre className="bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 p-4 rounded mt-4">
              <code>{`// Explicit wait example
await driver.wait(until.elementLocated(By.id('submit')), 10000);

// Fluent wait example
await driver.wait(
  new Condition('Element becomes clickable',
    async () => {
      const element = await driver.findElement(By.id('button'));
      return await element.isEnabled() ? element : null;
    }
  ), 10000, 'Button not clickable'
);`}</code>
            </pre>
          </div>
        </div>

        <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-6">
          <h3 className="text-xl font-semibold mb-3">Q: How do you handle test data in automation?</h3>
          <div className="bg-green-100 dark:bg-green-900 border-l-4 border-green-500 p-4">
            <p className="font-semibold text-gray-900 dark:text-gray-100">A:</p>
            <p className="text-gray-700 dark:text-gray-300">Test data management approaches:</p>
            <ul className="list-disc list-inside mt-2 text-gray-700 dark:text-gray-300">
              <li><strong>External Files:</strong> JSON, CSV, Excel files</li>
              <li><strong>Databases:</strong> Direct database queries</li>
              <li><strong>Data Generators:</strong> Faker libraries for random data</li>
              <li><strong>API Calls:</strong> Generate data through application APIs</li>
              <li><strong>Data Pools:</strong> Shared data repositories</li>
              <li><strong>Environment Variables:</strong> For sensitive configuration</li>
            </ul>
          </div>
        </div>

        <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-6">
          <h3 className="text-xl font-semibold mb-3">Q: What makes a good automation framework?</h3>
          <div className="bg-green-100 dark:bg-green-900 border-l-4 border-green-500 p-4">
            <p className="font-semibold text-gray-900 dark:text-gray-100">A:</p>
            <p className="text-gray-700 dark:text-gray-300">A good framework should have:</p>
            <ul className="list-disc list-inside mt-2 text-gray-700 dark:text-gray-300">
              <li>Clear structure and organization</li>
              <li>Reusable components and utilities</li>
              <li>Configuration management</li>
              <li>Comprehensive reporting</li>
              <li>Cross-browser support</li>
              <li>CI/CD integration capability</li>
              <li>Easy maintenance and updates</li>
              <li>Scalability for growing test suites</li>
            </ul>
          </div>
        </div>

        <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-6">
          <h3 className="text-xl font-semibold mb-3">Q: How do you reduce test flakiness?</h3>
          <div className="bg-green-100 dark:bg-green-900 border-l-4 border-green-500 p-4">
            <p className="font-semibold text-gray-900 dark:text-gray-100">A:</p>
            <p className="text-gray-700 dark:text-gray-300">Reduce flakiness by:</p>
            <ul className="list-disc list-inside mt-2 text-gray-700 dark:text-gray-300">
              <li>Using explicit waits instead of sleep</li>
              <li>Choosing stable element locators</li>
              <li>Ensuring test independence</li>
              <li>Handling asynchronous operations properly</li>
              <li>Running tests in isolated environments</li>
              <li>Implementing retry mechanisms for known issues</li>
              <li>Regular maintenance and cleanup</li>
            </ul>
          </div>
        </div>

        <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-6">
          <h3 className="text-xl font-semibold mb-3">Q: Explain your experience with CI/CD integration.</h3>
          <div className="bg-green-100 dark:bg-green-900 border-l-4 border-green-500 p-4">
            <p className="font-semibold text-gray-900 dark:text-gray-100">A:</p>
            <p className="text-gray-700 dark:text-gray-300">CI/CD integration involves:</p>
            <ul className="list-disc list-inside mt-2 text-gray-700 dark:text-gray-300">
              <li>Configuring automated test execution in pipelines</li>
              <li>Setting up parallel test execution</li>
              <li>Generating test reports and notifications</li>
              <li>Implementing quality gates</li>
              <li>Handling test environments and data</li>
              <li>Integrating with tools like Jenkins, GitLab CI, GitHub Actions</li>
            </ul>
            <pre className="bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 p-4 rounded mt-4">
              <code>{`# GitHub Actions example
name: Automated Tests
on: [push, pull_request]
jobs:
  test:
    runs-on: ubuntu-latest
    steps:
    - uses: actions/checkout@v3
    - run: npm install
    - run: npm run test:automation
    - uses: actions/upload-artifact@v3
      with:
        name: test-results
        path: test-results/`}</code>
            </pre>
          </div>
        </div>
      </div>

      <div className="bg-purple-100 dark:bg-purple-900 border-l-4 border-purple-500 p-4 mt-6">
        <p className="font-semibold text-gray-900 dark:text-gray-100">🟪 Key Tip:</p>
        <p className="text-gray-700 dark:text-gray-300">Practice explaining concepts with real examples from your experience. Interviewers value practical knowledge over theoretical answers.</p>
      </div>
    </div>
  )
}
