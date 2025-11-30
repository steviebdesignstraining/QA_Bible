export default function Page() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Testing Types</h1>

      <p className="mb-4">
        Testing types categorize different approaches to software testing based on objectives, scope, and methodology.
      </p>

      <div className="bg-blue-100 dark:bg-blue-900 border-l-4 border-blue-500 p-4 mb-4">
        <p className="font-semibold text-gray-700 dark:text-gray-300">🟦 Info:</p>
        <p>Understanding testing types helps choose the right approach for different scenarios.</p>
      </div>

      <h2 className="text-2xl font-semibold mb-4">Functional Testing</h2>
      <ul className="list-disc list-inside mb-4">
        <li><strong>Unit Testing:</strong> Tests individual components or functions</li>
        <li><strong>Integration Testing:</strong> Tests interaction between components</li>
        <li><strong>System Testing:</strong> Tests complete system functionality</li>
        <li><strong>Acceptance Testing:</strong> Tests if system meets user requirements</li>
      </ul>

      <div className="bg-green-100 dark:bg-green-900 border-l-4 border-green-500 p-4 mb-4">
        <p className="font-semibold text-gray-700 dark:text-gray-300">🟩 Example:</p>
        <p>Unit testing verifies that a login function returns correct results for valid/invalid inputs.</p>
      </div>

      <h2 className="text-2xl font-semibold mb-4">Non-Functional Testing</h2>
      <ul className="list-disc list-inside mb-4">
        <li><strong>Performance Testing:</strong> Tests speed, responsiveness, stability</li>
        <li><strong>Load Testing:</strong> Tests behavior under expected load</li>
        <li><strong>Stress Testing:</strong> Tests behavior under extreme conditions</li>
        <li><strong>Security Testing:</strong> Tests vulnerability to attacks</li>
        <li><strong>Usability Testing:</strong> Tests ease of use</li>
        <li><strong>Compatibility Testing:</strong> Tests across different environments</li>
      </ul>

      <div className="bg-yellow-100 dark:bg-yellow-900 border-l-4 border-yellow-500 p-4 mb-4">
        <p className="font-semibold text-gray-700 dark:text-gray-300">🟧 Warning:</p>
        <p>Non-functional testing is often overlooked but critical for production readiness.</p>
      </div>

      <h2 className="text-2xl font-semibold mb-4">Other Testing Types</h2>
      <ul className="list-disc list-inside mb-4">
        <li><strong>Regression Testing:</strong> Ensures changes do not break existing functionality</li>
        <li><strong>Smoke Testing:</strong> Basic functionality test after build</li>
        <li><strong>Exploratory Testing:</strong> Unscripted testing based on experience</li>
        <li><strong>Ad-hoc Testing:</strong> Informal testing without documentation</li>
        <li><strong>White-box Testing:</strong> Tests internal code structure</li>
        <li><strong>Black-box Testing:</strong> Tests functionality without code knowledge</li>
        <li><strong>Grey-box Testing:</strong> Combination of white and black box</li>
      </ul>

      <div className="bg-purple-100 dark:bg-purple-900 border-l-4 border-purple-500 p-4 mb-4">
        <p className="font-semibold text-gray-700 dark:text-gray-300">🟪 Key Tip:</p>
        <p>Use a combination of testing types for comprehensive coverage.</p>
      </div>

      <h2 className="text-2xl font-semibold mb-4">Testing Pyramid</h2>
      <pre className="bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 p-4 rounded mb-4">
        <code>{`UI Tests (E2E) - Few, Slow
     ↓
API Tests - Medium, Faster
     ↓
Unit Tests - Many, Fastest`}</code>
      </pre>

      <h2 className="text-2xl font-semibold mb-4">When to Use Each Type</h2>
      <ul className="list-disc list-inside mb-4">
        <li>Unit testing: During development</li>
        <li>Integration testing: After component development</li>
        <li>System testing: Before release</li>
        <li>Acceptance testing: With stakeholders</li>
        <li>Performance testing: Throughout development</li>
      </ul>

      <h2 className="text-2xl font-semibold mb-4">Resources</h2>
      <ul className="list-disc list-inside mb-4">
        <li><a href="https://www.ministryofthetesting.com" className="text-blue-600 hover:underline">Ministry of Testing</a></li>
        <li><a href="https://www.lambdatest.com" className="text-blue-600 hover:underline">LambdaTest</a></li>
        <li>ISTQB Testing Types Classification</li>
      </ul>
    </div>
  )
}
