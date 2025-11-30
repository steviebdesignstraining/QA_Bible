export default function Page() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Principles of Automation</h1>

      <p className="mb-4">
        Test automation principles provide the foundation for building reliable, maintainable, and effective automated test suites. These principles guide decision-making throughout the automation lifecycle.
      </p>

      <div className="bg-blue-100 dark:bg-blue-900 border-l-4 border-blue-500 p-4 mb-4">
        <p className="font-semibold text-gray-900 dark:text-gray-100">🟦 Info:</p>
        <p className="text-gray-700 dark:text-gray-300">Following automation principles ensures your test suite remains valuable and cost-effective over time.</p>
      </div>

      <h2 className="text-2xl font-semibold mb-4">Core Principles</h2>

      <h3 className="text-xl font-semibold mb-2">1. Automate Tests, Not Testing</h3>
      <p className="mb-4">
        Focus on automating the execution of predefined test cases, not exploratory testing. Automation should follow a script, not create one.
      </p>

      <div className="bg-green-100 dark:bg-green-900 border-l-4 border-green-500 p-4 mb-4">
        <p className="font-semibold text-gray-900 dark:text-gray-100">🟩 Example:</p>
        <p className="text-gray-700 dark:text-gray-300">Automate a login test case that always follows the same steps, rather than trying to automate ad-hoc exploration.</p>
      </div>

      <h3 className="text-xl font-semibold mb-2">2. Design for Maintainability</h3>
      <p className="mb-4">
        Write automation code that is easy to understand, modify, and extend. Use clear naming, comments, and modular design.
      </p>

      <h3 className="text-xl font-semibold mb-2">3. Keep Tests Independent</h3>
      <p className="mb-4">
        Each test should run independently without depending on the results of other tests. This allows parallel execution and easier debugging.
      </p>

      <h3 className="text-xl font-semibold mb-2">4. Use Appropriate Assertions</h3>
      <p className="mb-4">
        Assertions should verify the right things at the right level. Use meaningful assertions that clearly indicate what went wrong.
      </p>

      <h3 className="text-xl font-semibold mb-2">5. Handle Test Data Properly</h3>
      <p className="mb-4">
        Separate test data from test logic. Use data-driven approaches and ensure test data is realistic and maintainable.
      </p>

      <div className="bg-yellow-100 dark:bg-yellow-900 border-l-4 border-yellow-500 p-4 mb-4">
        <p className="font-semibold text-gray-900 dark:text-gray-100">🟧 Warning:</p>
        <p className="text-gray-700 dark:text-gray-300">Avoid hardcoding test data in your automation scripts. Use external data sources or generation methods.</p>
      </div>

      <h3 className="text-xl font-semibold mb-2">6. Implement Proper Wait Strategies</h3>
      <p className="mb-4">
        Use intelligent waits instead of fixed sleep timers. Wait for elements to be ready rather than assuming timing.
      </p>

      <h3 className="text-xl font-semibold mb-2">7. Follow Page Object Model</h3>
      <p className="mb-4">
        Separate page-specific code from test logic. Create reusable page objects that encapsulate element interactions.
      </p>

      <h3 className="text-xl font-semibold mb-2">8. Choose Reliable Selectors</h3>
      <p className="mb-4">
        Use stable, unique locators that won't break with UI changes. Prefer IDs and data attributes over fragile XPath.
      </p>

      <h3 className="text-xl font-semibold mb-2">9. Implement Logging and Reporting</h3>
      <p className="mb-4">
        Include comprehensive logging and generate clear reports. This helps with debugging and stakeholder communication.
      </p>

      <h3 className="text-xl font-semibold mb-2">10. Plan for CI/CD Integration</h3>
      <p className="mb-4">
        Design tests to run in automated pipelines. Ensure they are fast, reliable, and provide quick feedback.
      </p>

      <div className="bg-purple-100 dark:bg-purple-900 border-l-4 border-purple-500 p-4 mb-4">
        <p className="font-semibold text-gray-900 dark:text-gray-100">🟪 Key Tip:</p>
        <p className="text-gray-700 dark:text-gray-300">Start with a solid framework foundation. Poor initial design leads to technical debt and maintenance nightmares.</p>
      </div>

      <h2 className="text-2xl font-semibold mb-4">Automation Pyramid</h2>
      <pre className="bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 p-4 rounded mb-4 text-center">
        <code>{`     E2E Tests (UI)
          (Slow, Few)
            ↙     ↘
    Integration Tests
     (Medium, Some)
            ↙
    Unit Tests
   (Fast, Many)`}</code>
      </pre>

      <h2 className="text-2xl font-semibold mb-4">Test Automation Life Cycle</h2>
      <ol className="list-decimal list-inside mb-4">
        <li>Identify what to automate</li>
        <li>Choose appropriate tools</li>
        <li>Design framework architecture</li>
        <li>Develop automated tests</li>
        <li>Execute and maintain</li>
        <li>Analyze results and improve</li>
      </ol>

      <h2 className="text-2xl font-semibold mb-4">Common Pitfalls to Avoid</h2>
      <ul className="list-disc list-inside mb-4">
        <li>Automating everything without analysis</li>
        <li>Ignoring maintenance costs</li>
        <li>Using brittle locators</li>
        <li>Not handling asynchronous operations</li>
        <li>Creating tightly coupled tests</li>
        <li>Skipping error handling</li>
      </ul>

      <h2 className="text-2xl font-semibold mb-4">Success Metrics</h2>
      <ul className="list-disc list-inside mb-4">
        <li>Test execution time</li>
        <li>Flakiness rate (tests that fail randomly)</li>
        <li>Maintenance effort</li>
        <li>Defect detection rate</li>
        <li>ROI (Return on Investment)</li>
        <li>Team confidence in releases</li>
      </ul>

      <h2 className="text-2xl font-semibold mb-4">Best Practices</h2>
      <ul className="list-disc list-inside mb-4">
        <li>Start small and scale gradually</li>
        <li>Invest in framework design upfront</li>
        <li>Use version control for test code</li>
        <li>Implement continuous integration</li>
        <li>Regularly review and refactor tests</li>
        <li>Train team members on automation</li>
      </ul>

      <h2 className="text-2xl font-semibold mb-4">Resources</h2>
      <ul className="list-disc list-inside mb-4">
        <li><a href="https://www.ministryofthetesting.com" className="text-blue-600 hover:underline">Ministry of Testing</a></li>
        <li><a href="https://testautomationpatterns.com" className="text-blue-600 hover:underline">Test Automation Patterns</a></li>
        <li><a href="https://www.lambdatest.com" className="text-blue-600 hover:underline">LambdaTest</a></li>
      </ul>
    </div>
  )
}
