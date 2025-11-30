export default function Page() {
  return (
    <div className="max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Test Scenarios</h1>

      <p className="mb-6">
        Test scenarios describe high-level user journeys and business processes that need to be validated. They provide context for test cases and ensure comprehensive coverage of application functionality.
      </p>

      <div className="bg-blue-100 dark:bg-blue-900 border-l-4 border-blue-500 p-4 mb-6">
        <p className="font-semibold text-gray-900 dark:text-gray-100">🟦 Info:</p>
        <p className="text-gray-700 dark:text-gray-300">Test scenarios are derived from requirements, user stories, and use cases. They represent real-world user interactions and business workflows.</p>
      </div>

      <h2 className="text-2xl font-semibold mb-4">What is a Test Scenario?</h2>
      <p className="mb-4">
        A test scenario is a description of a specific functionality or feature that needs to be tested. It outlines the steps a user would take to accomplish a task, along with the expected outcomes.
      </p>

      <div className="bg-green-100 dark:bg-green-900 border-l-4 border-green-500 p-4 mb-6">
        <p className="font-semibold text-gray-900 dark:text-gray-100">🟩 Example:</p>
        <p className="text-gray-700 dark:text-gray-300">Test Scenario: "User successfully logs into the application using valid credentials"</p>
        <p className="text-gray-700 dark:text-gray-300">This scenario covers the login functionality and can be broken down into multiple test cases.</p>
      </div>

      <h2 className="text-2xl font-semibold mb-4">Test Scenario vs Test Case</h2>

      <div className="grid md:grid-cols-2 gap-6 mb-6">
        <div className="border border-blue-300 dark:border-blue-600 rounded-lg p-4">
          <h3 className="text-lg font-semibold mb-3 text-blue-700 dark:text-blue-400">Test Scenario</h3>
          <ul className="list-disc list-inside">
            <li>High-level description</li>
            <li>What to test</li>
            <li>Business requirement</li>
            <li>One per functionality</li>
            <li>Written in simple English</li>
          </ul>
        </div>

        <div className="border border-green-300 dark:border-green-600 rounded-lg p-4">
          <h3 className="text-lg font-semibold mb-3 text-green-700 dark:text-green-400">Test Case</h3>
          <ul className="list-disc list-inside">
            <li>Detailed steps</li>
            <li>How to test</li>
            <li>Specific input/output</li>
            <li>Multiple per scenario</li>
            <li>Technical details</li>
          </ul>
        </div>
      </div>

      <h2 className="text-2xl font-semibold mb-4">Types of Test Scenarios</h2>

      <div className="space-y-4 mb-6">
        <div className="border border-purple-300 dark:border-purple-600 rounded-lg p-4">
          <h3 className="text-lg font-semibold mb-2 text-purple-700 dark:text-purple-400">Positive Test Scenarios</h3>
          <p className="mb-2">Test expected user behavior and valid inputs</p>
          <ul className="list-disc list-inside text-sm">
            <li>User logs in with correct username and password</li>
            <li>Customer places an order with valid payment details</li>
            <li>Admin creates a new user account successfully</li>
          </ul>
        </div>

        <div className="border border-red-300 dark:border-red-600 rounded-lg p-4">
          <h3 className="text-lg font-semibold mb-2 text-red-700 dark:text-red-400">Negative Test Scenarios</h3>
          <p className="mb-2">Test error conditions and invalid inputs</p>
          <ul className="list-disc list-inside text-sm">
            <li>User attempts login with incorrect password</li>
            <li>Customer tries to checkout with expired credit card</li>
            <li>System handles network connectivity loss</li>
          </ul>
        </div>

        <div className="border border-orange-300 dark:border-orange-600 rounded-lg p-4">
          <h3 className="text-lg font-semibold mb-2 text-orange-700 dark:text-orange-400">Edge Case Scenarios</h3>
          <p className="mb-2">Test boundary conditions and unusual situations</p>
          <ul className="list-disc list-inside text-sm">
            <li>User uploads maximum allowed file size</li>
            <li>System processes exactly 100 concurrent users</li>
            <li>Database handles special characters in input fields</li>
          </ul>
        </div>
      </div>

      <h2 className="text-2xl font-semibold mb-4">Writing Effective Test Scenarios</h2>

      <div className="grid md:grid-cols-2 gap-6 mb-6">
        <div>
          <h3 className="text-lg font-semibold mb-3">Do's</h3>
          <ul className="list-disc list-inside">
            <li>Use clear, simple language</li>
            <li>Focus on one functionality</li>
            <li>Include expected results</li>
            <li>Make them reusable</li>
            <li>Review with stakeholders</li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-3">Don'ts</h3>
          <ul className="list-disc list-inside">
            <li>Use technical jargon</li>
            <li>Include implementation details</li>
            <li>Write vague descriptions</li>
            <li>Mix multiple functionalities</li>
            <li>Skip expected outcomes</li>
          </ul>
        </div>
      </div>

      <h2 className="text-2xl font-semibold mb-4">Test Scenario Template</h2>
      <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded mb-6">
        <pre className="text-sm">
          <code>{`Test Scenario ID: TS_001
Title: User Registration and Login
Description: Verify that a new user can successfully register and login
Preconditions:
- Application is accessible
- Registration feature is enabled
- Valid email service is configured

Test Steps:
1. Navigate to registration page
2. Enter valid user details (name, email, password)
3. Submit registration form
4. Verify account creation confirmation
5. Navigate to login page
6. Enter registered email and password
7. Submit login form

Expected Results:
- Registration successful message displayed
- Account created in system
- Login successful
- User redirected to dashboard
- User session established

Post-conditions:
- User logged in to application
- User data stored in database
- Welcome email sent (if applicable)`}</code>
        </pre>
      </div>

      <h2 className="text-2xl font-semibold mb-4">E-commerce Test Scenarios</h2>

      <div className="space-y-3 mb-6">
        <div className="bg-white dark:bg-gray-700 p-3 rounded">
          <strong>TS_001:</strong> Customer browses products and adds items to cart
        </div>
        <div className="bg-white dark:bg-gray-700 p-3 rounded">
          <strong>TS_002:</strong> Customer completes checkout with credit card payment
        </div>
        <div className="bg-white dark:bg-gray-700 p-3 rounded">
          <strong>TS_003:</strong> Customer applies discount code during checkout
        </div>
        <div className="bg-white dark:bg-gray-700 p-3 rounded">
          <strong>TS_004:</strong> Customer returns to abandoned cart after login
        </div>
        <div className="bg-white dark:bg-gray-700 p-3 rounded">
          <strong>TS_005:</strong> System handles out-of-stock items during checkout
        </div>
      </div>

      <h2 className="text-2xl font-semibold mb-4">Banking Application Scenarios</h2>

      <div className="space-y-3 mb-6">
        <div className="bg-white dark:bg-gray-700 p-3 rounded">
          <strong>TS_101:</strong> User transfers money between own accounts
        </div>
        <div className="bg-white dark:bg-gray-700 p-3 rounded">
          <strong>TS_102:</strong> User pays bills using online banking
        </div>
        <div className="bg-white dark:bg-gray-700 p-3 rounded">
          <strong>TS_103:</strong> System blocks transaction exceeding daily limit
        </div>
        <div className="bg-white dark:bg-gray-700 p-3 rounded">
          <strong>TS_104:</strong> User views account statement and downloads PDF
        </div>
        <div className="bg-white dark:bg-gray-700 p-3 rounded">
          <strong>TS_105:</strong> Multi-factor authentication for high-value transfers
        </div>
      </div>

      <h2 className="text-2xl font-semibold mb-4">Deriving Test Scenarios from Requirements</h2>

      <div className="bg-white dark:bg-gray-700 p-4 rounded mb-6">
        <h3 className="font-semibold mb-3">Requirement Example:</h3>
        <p className="mb-3 italic">"Users should be able to reset their password using their registered email address."</p>

        <h3 className="font-semibold mb-3">Derived Test Scenarios:</h3>
        <ul className="list-disc list-inside">
          <li>TS_201: User requests password reset with valid email</li>
          <li>TS_202: User receives password reset email and clicks link</li>
          <li>TS_203: User sets new password successfully</li>
          <li>TS_204: System rejects invalid reset link</li>
          <li>TS_205: Reset link expires after specified time</li>
          <li>TS_206: User cannot use old password after reset</li>
        </ul>
      </div>

      <div className="bg-yellow-100 dark:bg-yellow-900 border-l-4 border-yellow-500 p-4 mb-6">
        <p className="font-semibold text-gray-900 dark:text-gray-100">🟧 Warning:</p>
        <p className="text-gray-700 dark:text-gray-300">Test scenarios should be independent of implementation details. Focus on what the system should do, not how it does it.</p>
      </div>

      <div className="bg-purple-100 dark:bg-purple-900 border-l-4 border-purple-500 p-4 mb-6">
        <p className="font-semibold text-gray-900 dark:text-gray-100">🟪 Key Tip:</p>
        <p className="text-gray-700 dark:text-gray-300">Write test scenarios from the user's perspective. Use business language that stakeholders can understand and validate.</p>
      </div>

      <h2 className="text-2xl font-semibold mb-4">Test Scenario Flow Diagram</h2>
      <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded mb-6">
        <pre className="text-sm">
          <code>{`Requirements Document
         ↓
   Identify User Stories
         ↓
Extract Business Processes
         ↓
  Write Test Scenarios
         ↓
   Create Test Cases
         ↓
Execute and Validate Tests`}</code>
        </pre>
      </div>

      <h2 className="text-2xl font-semibold mb-4">Common Interview Questions</h2>
      <ul className="list-disc list-inside mb-6">
        <li>What is the difference between test scenario and test case?</li>
        <li>How do you identify test scenarios from requirements?</li>
        <li>What makes a good test scenario?</li>
        <li>How many test cases should come from one scenario?</li>
        <li>How do you prioritize test scenarios?</li>
      </ul>

      <h2 className="text-2xl font-semibold mb-4">Best Practices</h2>

      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <h3 className="text-lg font-semibold mb-3">Planning</h3>
          <ul className="list-disc list-inside">
            <li>Review requirements thoroughly</li>
            <li>Involve business analysts</li>
            <li>Use consistent naming conventions</li>
            <li>Keep scenarios focused</li>
            <li>Document assumptions</li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-3">Execution</h3>
          <ul className="list-disc list-inside">
            <li>Trace scenarios to requirements</li>
            <li>Update when requirements change</li>
            <li>Reuse across test cycles</li>
            <li>Include in test summary reports</li>
            <li>Validate with stakeholders</li>
          </ul>
        </div>
      </div>
    </div>
  )
}
