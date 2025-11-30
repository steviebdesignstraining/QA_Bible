export default function Page() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Self-healing Locators</h1>

      <p className="mb-4">
        Self-healing locators automatically update element selectors when web applications change, reducing test maintenance overhead.
      </p>

      <div className="bg-blue-100 dark:bg-blue-900 border-l-4 border-blue-500 p-4 mb-4">
        <p className="font-semibold text-gray-700 dark:text-gray-300">🟦 Info:</p>
        <p>Traditional automation fails when CSS selectors change. Self-healing locators use AI to find elements through multiple identification methods.</p>
      </div>

      <h2 className="text-2xl font-semibold mb-4">How Self-Healing Works</h2>
      <ul className="list-disc list-inside mb-4">
        <li><strong>Multiple Identifiers:</strong> Stores ID, class, text, position, and relationships</li>
        <li><strong>Fallback Strategy:</strong> Tries alternative locators when primary fails</li>
        <li><strong>Learning:</strong> Improves identification based on successful finds</li>
        <li><strong>Context Awareness:</strong> Considers element relationships and page structure</li>
      </ul>

      <div className="bg-green-100 dark:bg-green-900 border-l-4 border-green-500 p-4 mb-4">
        <p className="font-semibold text-gray-700 dark:text-gray-300">🟩 Example:</p>
        <p>Button with ID "login-btn" changes to "signin-btn". Self-healing locator tries: ID, then class, then text "Login", then position.</p>
      </div>

      <h2 className="text-2xl font-semibold mb-4">Tools with Self-Healing</h2>
      <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded mb-4">
        <code>{`• Testim (Advanced self-healing)
• Mabl (ML-powered locator healing)
• TestCraft (AI locator management)
• Perfecto (Smart element detection)
• LambdaTest (AI-powered locators)`}</code>
      </pre>

      <h2 className="text-2xl font-semibold mb-4">Benefits</h2>
      <ul className="list-disc list-inside mb-4">
        <li>90% reduction in locator maintenance</li>
        <li>Tests run reliably despite UI changes</li>
        <li>Faster test creation and updates</li>
        <li>Less time spent debugging locator issues</li>
      </ul>

      <div className="bg-purple-100 dark:bg-purple-900 border-l-4 border-purple-500 p-4 mb-4">
        <p className="font-semibold text-gray-700 dark:text-gray-300">🟪 Key Tip:</p>
        <p>Self-healing works best with stable application architecture. Radical UI overhauls may still require manual updates.</p>
      </div>
    </div>
  )
}
