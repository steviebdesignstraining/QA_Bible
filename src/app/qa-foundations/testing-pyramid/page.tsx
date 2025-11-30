export default function Page() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Testing Pyramid</h1>

      <p className="mb-4">
        The testing pyramid is a concept that illustrates the ideal distribution of different types of automated tests.
      </p>

      <div className="bg-blue-100 dark:bg-blue-900 border-l-4 border-blue-500 p-4 mb-4">
        <p className="font-semibold text-gray-700 dark:text-gray-300">🟦 Info:</p>
        <p>The pyramid shows that most tests should be at the unit level, with fewer at higher levels.</p>
      </div>

      <h2 className="text-2xl font-semibold mb-4">Pyramid Structure</h2>
      <div className="mb-4">
        <img
          src="/QA_Testing/1763366436765.jpeg"
          alt="Testing Pyramid Diagram"
          className="w-full max-w-md mx-auto rounded-lg shadow-lg"
        />
      </div>
      <pre className="bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 p-4 rounded mb-4 text-center">
        <code>{`     UI/E2E Tests
          (Slow, Few)
            ↙     ↘
    Integration Tests
     (Medium, Some)
            ↙
    Unit Tests
   (Fast, Many)`}</code>
      </pre>

      <h2 className="text-2xl font-semibold mb-4">Levels Explained</h2>
      <ul className="list-disc list-inside mb-4">
        <li><strong>Unit Tests (Base):</strong> Test individual functions/methods</li>
        <li><strong>Integration Tests (Middle):</strong> Test component interactions</li>
        <li><strong>UI/E2E Tests (Top):</strong> Test complete user workflows</li>
      </ul>

      <div className="bg-green-100 dark:bg-green-900 border-l-4 border-green-500 p-4 mb-4">
        <p className="font-semibold text-gray-700 dark:text-gray-300">🟩 Example:</p>
        <p>For a login feature: Unit test validates password hashing, integration test checks database connection, E2E test verifies complete login flow.</p>
      </div>

      <h2 className="text-2xl font-semibold mb-4">Benefits</h2>
      <ul className="list-disc list-inside mb-4">
        <li>Fast feedback from unit tests</li>
        <li>Cost-effective maintenance</li>
        <li>Reliable CI/CD pipelines</li>
        <li>Quick identification of issues</li>
      </ul>

      <div className="bg-yellow-100 dark:bg-yellow-900 border-l-4 border-yellow-500 p-4 mb-4">
        <p className="font-semibold text-gray-700 dark:text-gray-300">🟧 Warning:</p>
        <p>Avoid the "ice cream cone" anti-pattern where most tests are at the UI level.</p>
      </div>

      <h2 className="text-2xl font-semibold mb-4">Test Distribution Guidelines</h2>
      <ul className="list-disc list-inside mb-4">
        <li>70% Unit Tests</li>
        <li>20% Integration Tests</li>
        <li>10% UI/E2E Tests</li>
      </ul>

      <div className="bg-purple-100 dark:bg-purple-900 border-l-4 border-purple-500 p-4 mb-4">
        <p className="font-semibold text-gray-700 dark:text-gray-300">🟪 Key Tip:</p>
        <p>Focus on testing business logic at lower levels, user experience at higher levels.</p>
      </div>

      <h2 className="text-2xl font-semibold mb-4">Implementation Strategy</h2>
      <ol className="list-decimal list-inside mb-4">
        <li>Start with unit tests for all functions</li>
        <li>Add integration tests for critical paths</li>
        <li>Use E2E tests sparingly for key user journeys</li>
        <li>Automate everything possible</li>
      </ol>

      <h2 className="text-2xl font-semibold mb-4">Common Mistakes</h2>
      <ul className="list-disc list-inside mb-4">
        <li>Too many slow E2E tests</li>
        <li>Testing implementation details</li>
        <li>Skipping unit tests</li>
        <li>Not maintaining test balance</li>
      </ul>

      <h2 className="text-2xl font-semibold mb-4">Resources</h2>
      <ul className="list-disc list-inside mb-4">
        <li><a href="https://martinfowler.com/bliki/TestPyramid.html" className="text-blue-600 hover:underline">Martin Fowler - Test Pyramid</a></li>
        <li><a href="https://www.ministryofthetesting.com" className="text-blue-600 hover:underline">Ministry of Testing</a></li>
        <li><a href="https://www.lambdatest.com" className="text-blue-600 hover:underline">LambdaTest</a></li>
      </ul>
    </div>
  )
}
