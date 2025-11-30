export default function Page() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">What is QA?</h1>

      <p className="mb-4">
        QA stands for Quality Assurance. It is the process of ensuring that products meet quality standards.
      </p>

      <div className="bg-blue-100 dark:bg-blue-900 border-l-4 border-blue-500 p-4 mb-4">
        <p className="font-semibold text-gray-700 dark:text-gray-300">🟦 Info:</p>
        <p className="text-gray-700 dark:text-gray-300">QA prevents defects before they reach customers.</p>
      </div>

      <h2 className="text-2xl font-semibold mb-4">Key Responsibilities</h2>
      <ul className="list-disc list-inside mb-4">
        <li>Define quality standards</li>
        <li>Create test plans</li>
        <li>Execute testing</li>
        <li>Report bugs</li>
        <li>Improve processes</li>
      </ul>

      <div className="bg-green-100 dark:bg-green-900 border-l-4 border-green-500 p-4 mb-4">
        <p className="font-semibold text-gray-700 dark:text-gray-300">🟩 Example:</p>
        <p className="text-gray-700 dark:text-gray-300">A QA engineer tests a login feature to ensure it works correctly.</p>
      </div>

      <h2 className="text-2xl font-semibold mb-4">Why QA Matters</h2>
      <p className="mb-4">
        Good QA saves time and money. It catches issues early in development.
      </p>

      <div className="bg-yellow-100 dark:bg-yellow-900 border-l-4 border-yellow-500 p-4 mb-4">
        <p className="font-semibold text-gray-700 dark:text-gray-300">🟧 Warning:</p>
        <p className="text-gray-700 dark:text-gray-300">Poor QA leads to customer complaints and lost trust.</p>
      </div>

      <h2 className="text-2xl font-semibold mb-4">QA Process</h2>
      <ol className="list-decimal list-inside mb-4">
        <li>Plan testing</li>
        <li>Design test cases</li>
        <li>Execute tests</li>
        <li>Log defects</li>
        <li>Retest fixes</li>
      </ol>

      <div className="bg-purple-100 dark:bg-purple-900 border-l-4 border-purple-500 p-4 mb-4">
        <p className="font-semibold text-gray-700 dark:text-gray-300">🟪 Key Tip:</p>
        <p className="text-gray-700 dark:text-gray-300">Start QA early in the project lifecycle.</p>
      </div>

      <h2 className="text-2xl font-semibold mb-4">Code Example</h2>
      <pre className="bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 p-4 rounded mb-4">
        <code>{`// Simple test example
function testLogin() {
  // Test valid login
  const result = login('user@example.com', 'password');
  assert(result.success === true);
}`}</code>
      </pre>

      <h2 className="text-2xl font-semibold mb-4">QA Diagram</h2>
      <pre className="bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 p-4 rounded">
        <code>{`Requirements
     ↓
   Design
     ↓
 Development
     ↓
   Testing
     ↓
  Release`}</code>
      </pre>
    </div>
  )
}
