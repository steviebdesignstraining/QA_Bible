export default function Page() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">When to Automate</h1>

      <p className="mb-4">
        Not all tests should be automated. Strategic decisions about what to automate maximize ROI and minimize maintenance costs. Focus on tests that provide the most value.
      </p>

      <div className="bg-blue-100 dark:bg-blue-900 border-l-4 border-blue-500 p-4 mb-4">
        <p className="font-semibold text-gray-900 dark:text-gray-100">🟦 Info:</p>
        <p className="text-gray-700 dark:text-gray-300">Automation decisions should balance business value, technical feasibility, and long-term maintenance costs.</p>
      </div>

      <h2 className="text-2xl font-semibold mb-4">Good Candidates for Automation</h2>

      <h3 className="text-xl font-semibold mb-2">Regression Tests</h3>
      <p className="mb-4">
        Tests that verify existing functionality still works after changes. These run frequently and catch unintended side effects.
      </p>

      <div className="bg-green-100 dark:bg-green-900 border-l-4 border-green-500 p-4 mb-4">
        <p className="font-semibold text-gray-900 dark:text-gray-100">🟩 Example:</p>
        <p className="text-gray-700 dark:text-gray-300">Login functionality that must work after every code change. Automate this to run with every deployment.</p>
      </div>

      <h3 className="text-xl font-semibold mb-2">Smoke/Sanity Tests</h3>
      <p className="mb-4">
        Basic functionality tests that ensure the application starts and core features work. Quick to run and provide fast feedback.
      </p>

      <h3 className="text-xl font-semibold mb-2">Data-Driven Tests</h3>
      <p className="mb-4">
        Tests that need to run with multiple data sets. Automation handles data variations efficiently.
      </p>

      <h3 className="text-xl font-semibold mb-2">Performance Tests</h3>
      <p className="mb-4">
        Load, stress, and performance tests that require precise timing and measurement. Tools provide better accuracy than manual testing.
      </p>

      <h3 className="text-xl font-semibold mb-2">API Tests</h3>
      <p className="mb-4">
        Backend service tests that don't require UI interaction. Faster and more reliable than UI tests.
      </p>

      <h3 className="text-xl font-semibold mb-2">Cross-Browser Tests</h3>
      <p className="mb-4">
        Tests that need to run across multiple browsers and devices. Automation handles the complexity and repetition.
      </p>

      <div className="bg-yellow-100 dark:bg-yellow-900 border-l-4 border-yellow-500 p-4 mb-4">
        <p className="font-semibold text-gray-900 dark:text-gray-100">🟧 Warning:</p>
        <p className="text-gray-700 dark:text-gray-300">Don't automate tests that change frequently or have unclear requirements. Focus on stable, well-defined functionality.</p>
      </div>

      <h2 className="text-2xl font-semibold mb-4">Poor Candidates for Automation</h2>

      <h3 className="text-xl font-semibold mb-2">Exploratory Tests</h3>
      <p className="mb-4">
        Tests that require human judgment, creativity, and learning about the application. These are better left to manual testing.
      </p>

      <h3 className="text-xl font-semibold mb-2">One-Time Tests</h3>
      <p className="mb-4">
        Tests that will only run once or very infrequently. The automation effort outweighs the benefit.
      </p>

      <h3 className="text-xl font-semibold mb-2">UI Tests with Frequent Changes</h3>
      <p className="mb-4">
        Tests for UI elements that change often. High maintenance costs make these uneconomical to automate.
      </p>

      <h3 className="text-xl font-semibold mb-2">Tests Requiring Human Senses</h3>
      <p className="mb-4">
        Tests involving visual design, usability, or subjective judgment. Automation can't evaluate aesthetics or user experience.
      </p>

      <h2 className="text-2xl font-semibold mb-4">Decision Framework</h2>
      <pre className="bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 p-4 rounded mb-4">
        <code>{`Should I Automate?

1. Business Value
   • How critical is this functionality?
   • How often does it break?
   • What are the consequences of failure?

2. Technical Feasibility
   • Is the UI stable?
   • Are there reliable selectors?
   • Can we automate the workflow?

3. Cost-Benefit Analysis
   • Manual execution time
   • Frequency of execution
   • Expected maintenance effort

4. ROI Calculation
   • Time saved per execution
   • Number of executions
   • Development and maintenance costs`}</code>
      </pre>

      <h2 className="text-2xl font-semibold mb-4">ROI Considerations</h2>
      <ul className="list-disc list-inside mb-4">
        <li><strong>Execution Frequency:</strong> Tests that run daily provide better ROI than monthly tests</li>
        <li><strong>Stability:</strong> Stable features require less maintenance than volatile ones</li>
        <li><strong>Complexity:</strong> Simple tests are cheaper to automate than complex workflows</li>
        <li><strong>Team Skills:</strong> Consider available automation expertise</li>
        <li><strong>Timeline:</strong> Factor in development time for automation</li>
      </ul>

      <div className="bg-purple-100 dark:bg-purple-900 border-l-4 border-purple-500 p-4 mb-4">
        <p className="font-semibold text-gray-900 dark:text-gray-100">🟪 Key Tip:</p>
        <p className="text-gray-700 dark:text-gray-300">Start with high-value, low-complexity tests. Build confidence and skills before tackling complex automation.</p>
      </div>

      <h2 className="text-2xl font-semibold mb-4">Automation Readiness Checklist</h2>
      <ul className="list-disc list-inside mb-4">
        <li>✅ Clear, stable requirements</li>
        <li>✅ Predictable test data available</li>
        <li>✅ Reliable element locators</li>
        <li>✅ Minimal UI changes expected</li>
        <li>✅ Test will run multiple times</li>
        <li>✅ Team has automation skills</li>
        <li>✅ Framework and tools selected</li>
        <li>✅ Maintenance plan in place</li>
      </ul>

      <h2 className="text-2xl font-semibold mb-4">Phased Automation Approach</h2>
      <ol className="list-decimal list-inside mb-4">
        <li><strong>Phase 1:</strong> Automate critical regression tests</li>
        <li><strong>Phase 2:</strong> Add smoke and sanity tests</li>
        <li><strong>Phase 3:</strong> Include data-driven and API tests</li>
        <li><strong>Phase 4:</strong> Add complex UI and integration tests</li>
        <li><strong>Phase 5:</strong> Continuous improvement and optimization</li>
      </ol>

      <h2 className="text-2xl font-semibold mb-4">Measuring Automation Success</h2>
      <ul className="list-disc list-inside mb-4">
        <li>Test execution time reduction</li>
        <li>Defect detection rate</li>
        <li>Time to feedback improvement</li>
        <li>Maintenance effort vs. benefits</li>
        <li>Team productivity metrics</li>
        <li>Overall product quality</li>
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
