export default function Page() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Test Cases</h1>

      <p className="mb-4">
        Test cases are detailed steps to verify software functionality. They ensure features work as expected.
      </p>

      <div className="bg-blue-100 dark:bg-blue-900 border-l-4 border-blue-500 p-4 mb-4">
        <p className="font-semibold text-gray-700 dark:text-gray-300">🟦 Info:</p>
        <p className="text-gray-700 dark:text-gray-300">Test cases include preconditions, steps, expected results, and actual results.</p>
      </div>

      <h2 className="text-2xl font-semibold mb-4">Test Case Structure</h2>
      <ul className="list-disc list-inside mb-4">
        <li>Test Case ID</li>
        <li>Test Scenario</li>
        <li>Test Steps</li>
        <li>Expected Result</li>
        <li>Actual Result</li>
        <li>Pass/Fail Status</li>
      </ul>

      <div className="bg-green-100 dark:bg-green-900 border-l-4 border-green-500 p-4 mb-4">
        <p className="font-semibold text-gray-700 dark:text-gray-300">🟩 Example:</p>
        <p className="text-gray-700 dark:text-gray-300">Test Case: Login with valid credentials</p>
        <p className="text-gray-700 dark:text-gray-300">Steps: 1. Open login page 2. Enter username 3. Enter password 4. Click login</p>
        <p className="text-gray-700 dark:text-gray-300">Expected: User logged in successfully</p>
      </div>

      <h2 className="text-2xl font-semibold mb-4">Types of Test Cases</h2>
      <ul className="list-disc list-inside mb-4">
        <li>Positive test cases</li>
        <li>Negative test cases</li>
        <li>Edge case test cases</li>
        <li>Boundary test cases</li>
      </ul>

      <div className="bg-yellow-100 dark:bg-yellow-900 border-l-4 border-yellow-500 p-4 mb-4">
        <p className="font-semibold text-gray-700 dark:text-gray-300">🟧 Warning:</p>
        <p className="text-gray-700 dark:text-gray-300">Write clear, unambiguous test steps to avoid confusion.</p>
      </div>

      <h2 className="text-2xl font-semibold mb-4">Best Practices</h2>
      <ol className="list-decimal list-inside mb-4">
        <li>Use simple language</li>
        <li>Include screenshots</li>
        <li>Review with team</li>
        <li>Update after changes</li>
      </ol>

      <div className="bg-purple-100 dark:bg-purple-900 border-l-4 border-purple-500 p-4 mb-4">
        <p className="font-semibold text-gray-700 dark:text-gray-300">🟪 Key Tip:</p>
        <p className="text-gray-700 dark:text-gray-300">One test case should test one thing only.</p>
      </div>

      <h2 className="text-2xl font-semibold mb-4">Sample Test Case Template</h2>
      <pre className="bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 p-4 rounded mb-4">
        <code>{`Test Case ID: TC_001
Title: User Login
Description: Verify user can login with valid credentials
Preconditions: User account exists
Steps:
1. Navigate to login page
2. Enter valid email
3. Enter valid password
4. Click 'Login' button
Expected Result: User redirected to dashboard
Actual Result: [To be filled]
Status: [Pass/Fail]`}</code>
      </pre>

      <h2 className="text-2xl font-semibold mb-4">Test Case Flow</h2>
      <pre className="bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 p-4 rounded">
        <code>{`Start
  ↓
Execute Steps
  ↓
Compare Expected vs Actual
  ↓
Mark Pass or Fail
  ↓
Log Results`}</code>
      </pre>
    </div>
  )
}
