export default function Page() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">TDD & BDD</h1>

      <p className="mb-4">
        Test-Driven Development (TDD) and Behavior-Driven Development (BDD) are development approaches that emphasize writing tests before code. They improve code quality, design, and collaboration between developers and testers.
      </p>

      <div className="bg-blue-100 dark:bg-blue-900 border-l-4 border-blue-500 p-4 mb-4">
        <p className="font-semibold text-gray-900 dark:text-gray-100">🟦 Info:</p>
        <p className="text-gray-700 dark:text-gray-300">TDD and BDD shift testing left in the development process, catching issues early and improving overall software quality.</p>
      </div>

      <h2 className="text-2xl font-semibold mb-4">Test-Driven Development (TDD)</h2>

      <h3 className="text-xl font-semibold mb-2">What is TDD?</h3>
      <p className="mb-4">
        TDD is a development technique where you write a test before writing the code that makes the test pass. It follows a cycle of Red-Green-Refactor.
      </p>

      <div className="bg-green-100 dark:bg-green-900 border-l-4 border-green-500 p-4 mb-4">
        <p className="font-semibold text-gray-900 dark:text-gray-100">🟩 Example:</p>
        <p className="text-gray-700 dark:text-gray-300">You need to implement a calculator. First write a test for add(2, 3) = 5, then implement the add function.</p>
      </div>

      <h3 className="text-xl font-semibold mb-2">TDD Cycle: Red-Green-Refactor</h3>
      <pre className="bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 p-4 rounded mb-4 text-center">
        <code>{`🔴 RED: Write failing test
   ↓
🟢 GREEN: Write minimal code to pass
   ↓
🔵 REFACTOR: Improve code without breaking tests
   ↓
Repeat for next feature`}</code>
      </pre>

      <h3 className="text-xl font-semibold mb-2">TDD Benefits</h3>
      <ul className="list-disc list-inside mb-4">
        <li><strong>Better Design:</strong> Forces thinking about API and usage first</li>
        <li><strong>Regression Protection:</strong> Tests catch breaking changes</li>
        <li><strong>Documentation:</strong> Tests serve as living documentation</li>
        <li><strong>Confidence:</strong> Safe refactoring and continuous integration</li>
        <li><strong>Simpler Code:</strong> Only write code needed to pass tests</li>
      </ul>

      <h3 className="text-xl font-semibold mb-2">TDD Example</h3>
      <pre className="bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 p-4 rounded mb-4">
        <code>{`// Test first (RED)
describe('Calculator', () => {
  it('should add two numbers', () => {
    const calc = new Calculator();
    expect(calc.add(2, 3)).toBe(5);
  });
});

// Implementation (GREEN)
class Calculator {
  add(a, b) {
    return a + b;
  }
}

// Refactor (BLUE)
class Calculator {
  add(a, b) {
    // Could optimize later if needed
    return a + b;
  }
}`}</code>
      </pre>

      <h2 className="text-2xl font-semibold mb-4">Behavior-Driven Development (BDD)</h2>

      <h3 className="text-xl font-semibold mb-2">What is BDD?</h3>
      <p className="mb-4">
        BDD extends TDD by using natural language to describe behavior. It focuses on business value and collaboration between developers, testers, and business stakeholders.
      </p>

      <h3 className="text-xl font-semibold mb-2">BDD Keywords: Given-When-Then</h3>
      <pre className="bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 p-4 rounded mb-4">
        <code>{`Given: Initial context or state
When: Action or event occurs
Then: Expected outcome or result

Example:
Given the user is logged in
When they click "Add to Cart"
Then the item should be in their cart`}</code>
      </pre>

      <h3 className="text-xl font-semibold mb-2">BDD Tools</h3>
      <ul className="list-disc list-inside mb-4">
        <li><strong>Cucumber:</strong> Most popular BDD framework</li>
        <li><strong>SpecFlow:</strong> .NET BDD framework</li>
        <li><strong>JBehave:</strong> Java BDD framework</li>
        <li><strong>Behave:</strong> Python BDD framework</li>
        <li><strong>Jasmine/Gherkin:</strong> JavaScript BDD</li>
      </ul>

      <h3 className="text-xl font-semibold mb-2">BDD Example with Cucumber</h3>
      <pre className="bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 p-4 rounded mb-4">
        <code>{`// Feature file (Gherkin)
Feature: User Login
  Scenario: Successful login
    Given I am on the login page
    When I enter valid credentials
    And I click the login button
    Then I should be redirected to dashboard

// Step definitions
Given('I am on the login page', () => {
  // Navigate to login page
});

When('I enter valid credentials', () => {
  // Fill username and password
});

When('I click the login button', () => {
  // Click login button
});

Then('I should be redirected to dashboard', () => {
  // Verify dashboard URL
});`}</code>
      </pre>

      <div className="bg-yellow-100 dark:bg-yellow-900 border-l-4 border-yellow-500 p-4 mb-4">
        <p className="font-semibold text-gray-900 dark:text-gray-100">🟧 Warning:</p>
        <p className="text-gray-700 dark:text-gray-300">BDD scenarios should focus on business behavior, not technical implementation details.</p>
      </div>

      <h2 className="text-2xl font-semibold mb-4">TDD vs BDD Comparison</h2>

      <div className="overflow-x-auto mb-4">
        <table className="min-w-full bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600">
          <thead>
            <tr className="bg-gray-100 dark:bg-gray-700">
              <th className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-left">Aspect</th>
              <th className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-left">TDD</th>
              <th className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-left">BDD</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">Focus</td>
              <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">Developers</td>
              <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">Business & Team</td>
            </tr>
            <tr className="bg-gray-50 dark:bg-gray-800">
              <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">Language</td>
              <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">Code</td>
              <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">Natural Language</td>
            </tr>
            <tr>
              <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">Scope</td>
              <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">Unit Tests</td>
              <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">Acceptance Tests</td>
            </tr>
            <tr className="bg-gray-50 dark:bg-gray-800">
              <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">Tools</td>
              <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">JUnit, NUnit, Jest</td>
              <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">Cucumber, SpecFlow</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2 className="text-2xl font-semibold mb-4">ATDD (Acceptance Test-Driven Development)</h2>
      <p className="mb-4">
        ATDD combines TDD and BDD, focusing on acceptance criteria. Teams write acceptance tests before development begins.
      </p>

      <h3 className="text-xl font-semibold mb-2">ATDD Process</h3>
      <ol className="list-decimal list-inside mb-4">
        <li>Discuss and agree on acceptance criteria</li>
        <li>Write acceptance tests (BDD style)</li>
        <li>Develop features using TDD</li>
        <li>Verify acceptance tests pass</li>
        <li>Demo working software to stakeholders</li>
      </ol>

      <h2 className="text-2xl font-semibold mb-4">Common Challenges</h2>

      <h3 className="text-xl font-semibold mb-2">TDD Challenges</h3>
      <ul className="list-disc list-inside mb-4">
        <li>Learning curve for writing tests first</li>
        <li>Initial slow development pace</li>
        <li>Need for test-friendly code design</li>
        <li>Maintenance of large test suites</li>
        <li>Cultural resistance to change</li>
      </ul>

      <h3 className="text-xl font-semibold mb-2">BDD Challenges</h3>
      <ul className="list-disc list-inside mb-4">
        <li>Requires strong collaboration</li>
        <li>Business analysts need technical understanding</li>
        <li>Tool setup and maintenance</li>
        <li>Keeping scenarios up to date</li>
        <li>Balancing detail vs readability</li>
      </ul>

      <h2 className="text-2xl font-semibold mb-4">Best Practices</h2>

      <h3 className="text-xl font-semibold mb-2">TDD Best Practices</h3>
      <ul className="list-disc list-inside mb-4">
        <li>Write one test at a time</li>
        <li>Make tests fail before implementing</li>
        <li>Keep tests simple and focused</li>
        <li>Refactor regularly</li>
        <li>Use descriptive test names</li>
        <li>Run tests frequently</li>
      </ul>

      <h3 className="text-xl font-semibold mb-2">BDD Best Practices</h3>
      <ul className="list-disc list-inside mb-4">
        <li>Involve all stakeholders in scenario creation</li>
        <li>Use domain-specific language</li>
        <li>Keep scenarios concise</li>
        <li>Focus on business value</li>
        <li>Automate scenarios early</li>
        <li>Review and update regularly</li>
      </ul>

      <div className="bg-purple-100 dark:bg-purple-900 border-l-4 border-purple-500 p-4 mb-4">
        <p className="font-semibold text-gray-900 dark:text-gray-100">🟪 Key Tip:</p>
        <p className="text-gray-700 dark:text-gray-300">Start with simple examples and gradually adopt TDD/BDD practices. The key is consistent application, not perfection.</p>
      </div>

      <h2 className="text-2xl font-semibold mb-4">Measuring Success</h2>
      <ul className="list-disc list-inside mb-4">
        <li>Test coverage metrics</li>
        <li>Defect detection rate</li>
        <li>Time to market improvements</li>
        <li>Code quality metrics</li>
        <li>Team satisfaction and collaboration</li>
        <li>Regression prevention effectiveness</li>
      </ul>

      <h2 className="text-2xl font-semibold mb-4">Integration with QA</h2>
      <p className="mb-4">
        TDD and BDD complement traditional QA practices. QA engineers can:
      </p>
      <ul className="list-disc list-inside mb-4">
        <li>Review and contribute to test scenarios</li>
        <li>Help automate acceptance tests</li>
        <li>Provide testing expertise during development</li>
        <li>Ensure test coverage meets quality standards</li>
        <li>Participate in three amigos meetings</li>
      </ul>

      <h2 className="text-2xl font-semibold mb-4">Resources</h2>
      <ul className="list-disc list-inside mb-4">
        <li><a href="https://martinfowler.com/bliki/TestDrivenDevelopment.html" className="text-blue-600 hover:underline">Martin Fowler - TDD</a></li>
        <li><a href="https://cucumber.io/docs/bdd/" className="text-blue-600 hover:underline">Cucumber BDD Documentation</a></li>
        <li><a href="https://www.agilealliance.org/glossary/bdd/" className="text-blue-600 hover:underline">Agile Alliance - BDD</a></li>
        <li><a href="https://www.ministryofthetesting.com" className="text-blue-600 hover:underline">Ministry of Testing</a></li>
      </ul>
    </div>
  )
}