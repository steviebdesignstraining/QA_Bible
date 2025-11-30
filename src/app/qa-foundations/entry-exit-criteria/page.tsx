export default function Page() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Entry and Exit Criteria</h1>

      <p className="mb-4">
        Entry and exit criteria define the conditions that must be met to start and complete testing phases. They ensure quality and prevent premature progression.
      </p>

      <div className="bg-blue-100 dark:bg-blue-900 border-l-4 border-blue-500 p-4 mb-4">
        <p className="font-semibold text-gray-900 dark:text-gray-100">🟦 Info:</p>
        <p className="text-gray-700 dark:text-gray-300">Entry criteria are prerequisites for starting a phase. Exit criteria confirm when a phase is complete.</p>
      </div>

      <h2 className="text-2xl font-semibold mb-4">What are Entry Criteria?</h2>
      <p className="mb-4">
        Entry criteria are the conditions that must be satisfied before a testing phase can begin. They ensure all prerequisites are in place.
      </p>

      <div className="bg-green-100 dark:bg-green-900 border-l-4 border-green-500 p-4 mb-4">
        <p className="font-semibold text-gray-900 dark:text-gray-100">🟩 Example:</p>
        <p className="text-gray-700 dark:text-gray-300">For system testing: Code must be complete, unit tested, integrated, and environment ready.</p>
      </div>

      <h2 className="text-2xl font-semibold mb-4">What are Exit Criteria?</h2>
      <p className="mb-4">
        Exit criteria define when a testing phase is considered complete. They specify the quality standards that must be met.
      </p>

      <h2 className="text-2xl font-semibold mb-4">Common Entry Criteria</h2>
      <ul className="list-disc list-inside mb-4">
        <li>Test plan approved and signed off</li>
        <li>Test environment set up and stable</li>
        <li>Test data prepared and available</li>
        <li>Previous phase deliverables completed</li>
        <li>Required tools and resources available</li>
        <li>Training completed for testers</li>
      </ul>

      <h2 className="text-2xl font-semibold mb-4">Common Exit Criteria</h2>
      <ul className="list-disc list-inside mb-4">
        <li>All planned test cases executed</li>
        <li>Defect density below acceptable threshold</li>
        <li>Critical and high-priority bugs resolved</li>
        <li>Test coverage goals achieved</li>
        <li>Test summary report completed</li>
        <li>Stakeholder sign-off obtained</li>
      </ul>

      <div className="bg-yellow-100 dark:bg-yellow-900 border-l-4 border-yellow-500 p-4 mb-4">
        <p className="font-semibold text-gray-900 dark:text-gray-100">🟧 Warning:</p>
        <p className="text-gray-700 dark:text-gray-300">Exit criteria should be measurable and objective, not subjective opinions.</p>
      </div>

      <h2 className="text-2xl font-semibold mb-4">Entry/Exit Criteria by Testing Phase</h2>

      <h3 className="text-xl font-semibold mb-2">Unit Testing</h3>
      <pre className="bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 p-4 rounded mb-4">
        <code>{`Entry Criteria:
• Code written and compiled
• Unit test cases designed
• Development environment ready

Exit Criteria:
• All unit tests pass
• Code coverage ≥ 80%
• No critical defects`}</code>
      </pre>

      <h3 className="text-xl font-semibold mb-2">Integration Testing</h3>
      <pre className="bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 p-4 rounded mb-4">
        <code>{`Entry Criteria:
• Unit testing completed
• Modules integrated
• Integration test environment ready

Exit Criteria:
• Interface defects resolved
• Data flow verified
• Integration test cases pass`}</code>
      </pre>

      <h3 className="text-xl font-semibold mb-2">System Testing</h3>
      <pre className="bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 p-4 rounded mb-4">
        <code>{`Entry Criteria:
• System build completed
• Integration testing passed
• System test environment ready

Exit Criteria:
• Functional requirements met
• Performance criteria achieved
• Critical defects fixed`}</code>
      </pre>

      <h3 className="text-xl font-semibold mb-2">User Acceptance Testing</h3>
      <pre className="bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 p-4 rounded mb-4">
        <code>{`Entry Criteria:
• System testing completed
• User documentation ready
• End users trained

Exit Criteria:
• Business requirements validated
• User sign-off obtained
• No show-stopper defects`}</code>
      </pre>

      <div className="bg-purple-100 dark:bg-purple-900 border-l-4 border-purple-500 p-4 mb-4">
        <p className="font-semibold text-gray-900 dark:text-gray-100">🟪 Key Tip:</p>
        <p className="text-gray-700 dark:text-gray-300">Define entry and exit criteria early in the project and get stakeholder agreement.</p>
      </div>

      <h2 className="text-2xl font-semibold mb-4">Benefits of Clear Criteria</h2>
      <ul className="list-disc list-inside mb-4">
        <li>Prevents premature phase transitions</li>
        <li>Ensures quality standards are met</li>
        <li>Provides clear expectations</li>
        <li>Reduces rework and delays</li>
        <li>Improves communication</li>
        <li>Enables better planning</li>
      </ul>

      <h2 className="text-2xl font-semibold mb-4">Measuring Exit Criteria</h2>
      <ul className="list-disc list-inside mb-4">
        <li>Test case execution percentage</li>
        <li>Defect density (bugs per KLOC)</li>
        <li>Test coverage metrics</li>
        <li>Defect leakage rate</li>
        <li>Mean time between failures</li>
        <li>Customer satisfaction scores</li>
      </ul>

      <h2 className="text-2xl font-semibold mb-4">Handling Failed Exit Criteria</h2>
      <ol className="list-decimal list-inside mb-4">
        <li>Assess the severity of failures</li>
        <li>Determine if criteria can be adjusted</li>
        <li>Plan additional testing or fixes</li>
        <li>Communicate delays to stakeholders</li>
        <li>Document lessons learned</li>
        <li>Update criteria for future projects</li>
      </ol>

      <h2 className="text-2xl font-semibold mb-4">Best Practices</h2>
      <ul className="list-disc list-inside mb-4">
        <li>Make criteria SMART (Specific, Measurable, Achievable, Relevant, Time-bound)</li>
        <li>Involve all stakeholders in defining criteria</li>
        <li>Review and update criteria regularly</li>
        <li>Document rationale for each criterion</li>
        <li>Use historical data to set realistic targets</li>
        <li>Balance quality with time-to-market</li>
      </ul>

      <h2 className="text-2xl font-semibold mb-4">Resources</h2>
      <ul className="list-disc list-inside mb-4">
        <li><a href="https://www.ministryofthetesting.com" className="text-blue-600 hover:underline">Ministry of Testing</a></li>
        <li><a href="https://www.lambdatest.com" className="text-blue-600 hover:underline">LambdaTest</a></li>
        <li>ISTQB Testing Standards</li>
        <li>IEEE Standard 829 for Test Documentation</li>
      </ul>
    </div>
  )
}
