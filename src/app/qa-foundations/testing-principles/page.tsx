export default function Page() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Testing Principles</h1>

      <p className="mb-4">
        Testing principles guide effective software testing. They are fundamental concepts that apply to all testing activities.
      </p>

      <div className="bg-blue-100 dark:bg-blue-900 border-l-4 border-blue-500 p-4 mb-4">
        <p className="font-semibold text-gray-700 dark:text-gray-300">🟦 Info:</p>
        <p>These principles are based on ISTQB standards and industry best practices.</p>
      </div>

      <h2 className="text-2xl font-semibold mb-4">The 7 Testing Principles</h2>
      <ol className="list-decimal list-inside mb-4">
        <li><strong>Testing shows presence of defects:</strong> Testing can show defects exist, but cannot prove they do not.</li>
        <li><strong>Exhaustive testing is impossible:</strong> Cannot test everything, so prioritize based on risk.</li>
        <li><strong>Early testing:</strong> Start testing as early as possible in the SDLC.</li>
        <li><strong>Defect clustering:</strong> Most defects are found in a few modules (Pareto principle).</li>
        <li><strong>Pesticide paradox:</strong> Same tests become less effective, vary testing approaches.</li>
        <li><strong>Testing is context dependent:</strong> Testing varies by project context and objectives.</li>
        <li><strong>Absence of errors fallacy:</strong> Finding no defects does not mean software is usable.</li>
      </ol>

      <div className="bg-green-100 dark:bg-green-900 border-l-4 border-green-500 p-4 mb-4">
        <p className="font-semibold text-gray-700 dark:text-gray-300">🟩 Example:</p>
        <p>Principle 2: You cannot test all combinations of inputs, so focus on high-risk areas.</p>
      </div>

      <h2 className="text-2xl font-semibold mb-4">Applying the Principles</h2>
      <ul className="list-disc list-inside mb-4">
        <li>Use risk-based testing to prioritize</li>
        <li>Combine different testing techniques</li>
        <li>Start testing in requirements phase</li>
        <li>Review and update test cases regularly</li>
        <li>Consider user perspective, not just functionality</li>
      </ul>

      <div className="bg-yellow-100 dark:bg-yellow-900 border-l-4 border-yellow-500 p-4 mb-4">
        <p className="font-semibold text-gray-700 dark:text-gray-300">🟧 Warning:</p>
        <p>Do not assume no bugs found means the software is perfect.</p>
      </div>

      <h2 className="text-2xl font-semibold mb-4">Risk-Based Testing</h2>
      <p className="mb-4">
        Based on principle 2, focus testing on high-risk areas.
      </p>

      <ul className="list-disc list-inside mb-4">
        <li>Identify potential risks</li>
        <li>Assess likelihood and impact</li>
        <li>Prioritize testing efforts</li>
        <li>Focus on critical functionality</li>
      </ul>

      <div className="bg-purple-100 dark:bg-purple-900 border-l-4 border-purple-500 p-4 mb-4">
        <p className="font-semibold text-gray-700 dark:text-gray-300">🟪 Key Tip:</p>
        <p>Use the pesticide paradox to rotate testing methods and find more defects.</p>
      </div>

      <h2 className="text-2xl font-semibold mb-4">Principles in Practice</h2>
      <pre className="bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 p-4 rounded mb-4">
        <code>{`Risk Assessment Matrix:
High Risk   → Thorough testing
Medium Risk → Standard testing
Low Risk    → Minimal testing`}</code>
      </pre>

      <h2 className="text-2xl font-semibold mb-4">Resources</h2>
      <ul className="list-disc list-inside mb-4">
        <li><a href="https://www.ministryofthetesting.com" className="text-blue-600 hover:underline">Ministry of Testing</a></li>
        <li><a href="https://www.lambdatest.com" className="text-blue-600 hover:underline">LambdaTest</a></li>
        <li>ISTQB Foundation Level Syllabus</li>
      </ul>
    </div>
  )
}
