export default function Page() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Software Testing Life Cycle (STLC)</h1>

      <p className="mb-4">
        STLC is a systematic approach to testing software. It defines phases of testing within the SDLC.
      </p>

      <div className="bg-blue-100 dark:bg-blue-900 border-l-4 border-blue-500 p-4 mb-4">
        <p className="font-semibold text-gray-700 dark:text-gray-300">🟦 Info:</p>
        <p>STLC ensures testing is thorough and follows a structured process.</p>
      </div>

      <h2 className="text-2xl font-semibold mb-4">STLC Phases</h2>
      <ol className="list-decimal list-inside mb-4">
        <li><strong>Requirements Analysis:</strong> Understand and analyze requirements</li>
        <li><strong>Test Planning:</strong> Create test strategy and plan</li>
        <li><strong>Test Case Development:</strong> Design and write test cases</li>
        <li><strong>Test Environment Setup:</strong> Prepare testing environment</li>
        <li><strong>Test Execution:</strong> Run tests and log results</li>
        <li><strong>Test Closure:</strong> Evaluate cycle and document lessons</li>
      </ol>

      <div className="bg-green-100 dark:bg-green-900 border-l-4 border-green-500 p-4 mb-4">
        <p className="font-semibold text-gray-700 dark:text-gray-300">🟩 Example:</p>
        <p>In test execution, QA engineers run test cases and report any defects found.</p>
      </div>

      <h2 className="text-2xl font-semibold mb-4">Entry and Exit Criteria</h2>
      <p className="mb-4">
        Each phase has specific entry and exit criteria to ensure quality.
      </p>

      <ul className="list-disc list-inside mb-4">
        <li><strong>Entry Criteria:</strong> Conditions that must be met before starting a phase</li>
        <li><strong>Exit Criteria:</strong> Conditions that must be met to complete a phase</li>
      </ul>

      <div className="bg-yellow-100 dark:bg-yellow-900 border-l-4 border-yellow-500 p-4 mb-4">
        <p className="font-semibold text-gray-700 dark:text-gray-300">🟧 Warning:</p>
        <p>Do not proceed to next phase if exit criteria are not met.</p>
      </div>

      <h2 className="text-2xl font-semibold mb-4">Testing Types in STLC</h2>
      <ul className="list-disc list-inside mb-4">
        <li>Unit Testing</li>
        <li>Integration Testing</li>
        <li>System Testing</li>
        <li>Acceptance Testing</li>
        <li>Regression Testing</li>
        <li>Performance Testing</li>
      </ul>

      <div className="bg-purple-100 dark:bg-purple-900 border-l-4 border-purple-500 p-4 mb-4">
        <p className="font-semibold text-gray-700 dark:text-gray-300">🟪 Key Tip:</p>
        <p>Review and update test cases after each cycle for continuous improvement.</p>
      </div>

      <h2 className="text-2xl font-semibold mb-4">STLC vs SDLC</h2>
      <p className="mb-4">
        STLC is focused on testing activities within the broader SDLC framework.
      </p>

      <ul className="list-disc list-inside mb-4">
        <li>SDLC covers entire software development</li>
        <li>STLC covers testing-specific activities</li>
        <li>STLC phases align with SDLC phases</li>
      </ul>

      <h2 className="text-2xl font-semibold mb-4">STLC Diagram</h2>
      <div className="mb-4">
        <img
          src="/QA_Testing/1763369790338.jpeg"
          alt="STLC Process Diagram"
          className="w-full max-w-2xl mx-auto rounded-lg shadow-lg"
        />
      </div>
      <pre className="bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 p-4 rounded mb-4">
        <code>{`Requirements → Test Planning → Test Design → Environment Setup → Execution → Closure
Analysis         Strategy         Cases           Setup              Results   Activities`}</code>
      </pre>

      <h2 className="text-2xl font-semibold mb-4">Resources</h2>
      <ul className="list-disc list-inside mb-4">
        <li><a href="https://www.ministryofthetesting.com" className="text-blue-600 hover:underline">Ministry of Testing</a></li>
        <li><a href="https://www.lambdatest.com" className="text-blue-600 hover:underline">LambdaTest</a></li>
        <li>IEEE 829 Standard for Software Test Documentation</li>
      </ul>
    </div>
  )
}
