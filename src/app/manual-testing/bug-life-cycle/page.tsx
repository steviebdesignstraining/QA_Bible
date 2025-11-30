export default function Page() {
  return (
    <div className="max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Bug Life Cycle</h1>

      <p className="mb-6">
        The bug life cycle (also called defect life cycle) describes the journey of a software defect from discovery to resolution. Understanding this process helps teams manage bugs effectively and maintain software quality.
      </p>

      <div className="bg-blue-100 dark:bg-blue-900 border-l-4 border-blue-500 p-4 mb-6">
        <p className="font-semibold text-gray-900 dark:text-gray-100">🟦 Info:</p>
        <p className="text-gray-700 dark:text-gray-300">A bug life cycle ensures systematic tracking, proper communication, and accountability throughout the defect resolution process.</p>
      </div>

      <h2 className="text-2xl font-semibold mb-4">Standard Bug Life Cycle States</h2>

      <div className="space-y-4 mb-6">
        <div className="border border-gray-300 dark:border-gray-600 rounded-lg p-4">
          <div className="flex items-center mb-2">
            <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold mr-3">1</span>
            <h3 className="text-lg font-semibold text-red-700 dark:text-red-400">New</h3>
          </div>
          <p className="text-gray-700 dark:text-gray-300">Bug is reported for the first time. It has not been reviewed or assigned yet.</p>
          <ul className="list-disc list-inside mt-2 text-sm">
            <li>QA finds the issue</li>
            <li>Developer reports bug</li>
            <li>Automated test fails</li>
            <li>User reports issue</li>
          </ul>
        </div>

        <div className="border border-yellow-300 dark:border-yellow-600 rounded-lg p-4">
          <div className="flex items-center mb-2">
            <span className="bg-yellow-500 text-white px-3 py-1 rounded-full text-sm font-bold mr-3">2</span>
            <h3 className="text-lg font-semibold text-yellow-700 dark:text-yellow-400">Open/Assigned</h3>
          </div>
          <p className="text-gray-700 dark:text-gray-300">Bug is acknowledged and assigned to a developer for investigation.</p>
          <ul className="list-disc list-inside mt-2 text-sm">
            <li>Lead reviews the bug</li>
            <li>Assigns to appropriate developer</li>
            <li>Sets priority and severity</li>
            <li>Updates status to Open</li>
          </ul>
        </div>

        <div className="border border-blue-300 dark:border-blue-600 rounded-lg p-4">
          <div className="flex items-center mb-2">
            <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-bold mr-3">3</span>
            <h3 className="text-lg font-semibold text-blue-700 dark:text-blue-400">In Progress/Fixed</h3>
          </div>
          <p className="text-gray-700 dark:text-gray-300">Developer is actively working on fixing the bug.</p>
          <ul className="list-disc list-inside mt-2 text-sm">
            <li>Developer investigates root cause</li>
            <li>Implements the fix</li>
            <li>Updates code and tests</li>
            <li>Changes status to Fixed</li>
          </ul>
        </div>

        <div className="border border-purple-300 dark:border-purple-600 rounded-lg p-4">
          <div className="flex items-center mb-2">
            <span className="bg-purple-500 text-white px-3 py-1 rounded-full text-sm font-bold mr-3">4</span>
            <h3 className="text-lg font-semibold text-purple-700 dark:text-purple-400">In Testing/Retest</h3>
          </div>
          <p className="text-gray-700 dark:text-gray-300">QA verifies the fix and tests the solution.</p>
          <ul className="list-disc list-inside mt-2 text-sm">
            <li>QA receives fixed code</li>
            <li>Tests the specific fix</li>
            <li>Runs regression tests</li>
            <li>Updates status based on results</li>
          </ul>
        </div>

        <div className="border border-green-300 dark:border-green-600 rounded-lg p-4">
          <div className="flex items-center mb-2">
            <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-bold mr-3">5</span>
            <h3 className="text-lg font-semibold text-green-700 dark:text-green-400">Verified/Closed</h3>
          </div>
          <p className="text-gray-700 dark:text-gray-300">Bug is successfully fixed and verified. Issue is resolved.</p>
          <ul className="list-disc list-inside mt-2 text-sm">
            <li>QA confirms fix works</li>
            <li>No regression issues found</li>
            <li>Status changed to Closed</li>
            <li>Bug report archived</li>
          </ul>
        </div>
      </div>

      <h2 className="text-2xl font-semibold mb-4">Alternative Bug States</h2>

      <div className="grid md:grid-cols-2 gap-6 mb-6">
        <div className="border border-orange-300 dark:border-orange-600 rounded-lg p-4">
          <h3 className="text-lg font-semibold mb-2 text-orange-700 dark:text-orange-400">Rejected/Invalid</h3>
          <p className="text-gray-700 dark:text-gray-300 mb-2">Bug is not valid or cannot be reproduced.</p>
          <ul className="list-disc list-inside text-sm">
            <li>Not a real bug (works as designed)</li>
            <li>Cannot reproduce the issue</li>
            <li>Insufficient information</li>
            <li>Duplicate of existing bug</li>
          </ul>
        </div>

        <div className="border border-gray-300 dark:border-gray-600 rounded-lg p-4">
          <h3 className="text-lg font-semibold mb-2 text-gray-700 dark:text-gray-400">Deferred/Postponed</h3>
          <p className="text-gray-700 dark:text-gray-300 mb-2">Bug fix is delayed for business reasons.</p>
          <ul className="list-disc list-inside text-sm">
            <li>Low priority issue</li>
            <li>Scheduled for future release</li>
            <li>Requires major architectural changes</li>
            <li>Business decision to postpone</li>
          </ul>
        </div>
      </div>

      <h2 className="text-2xl font-semibold mb-4">Bug Life Cycle Diagram</h2>
      <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded mb-6">
        <pre className="text-sm font-mono">
          <code>{`           ┌──────┐
           │ New  │
           └──────┘
              │
              ▼
           ┌──────┐
           │ Open │
           └──────┘
              │
              ▼
        ┌─────────────┐
        │ In Progress │
        └─────────────┘
              │
              ▼
        ┌─────────────┐
        │ In Testing  │
        └─────────────┘
              │
              ▼
           ┌──────┐
           │Closed│
           └──────┘

    Alternative Paths:
    New → Rejected
    Open → Deferred
    In Testing → Reopened`}</code>
        </pre>
      </div>

      <h2 className="text-2xl font-semibold mb-4">Bug Reopening Process</h2>
      <div className="bg-white dark:bg-gray-700 p-4 rounded mb-6">
        <p className="mb-3">Sometimes bugs reappear or the fix doesn't work properly:</p>
        <ol className="list-decimal list-inside space-y-2">
          <li><strong>Reopened:</strong> QA finds the bug still exists after supposed fix</li>
          <li><strong>Regression:</strong> Fix broke existing functionality</li>
          <li><strong>Incomplete Fix:</strong> Bug partially fixed, some scenarios still fail</li>
          <li><strong>Environment Issue:</strong> Bug appears in different environment</li>
        </ol>
      </div>

      <div className="bg-green-100 dark:bg-green-900 border-l-4 border-green-500 p-4 mb-6">
        <p className="font-semibold text-gray-900 dark:text-gray-100">🟩 Example:</p>
        <p className="text-gray-700 dark:text-gray-300">A login bug is reported (New) → Assigned to developer (Open) → Developer fixes code (Fixed) → QA tests and confirms fix (Closed). If QA finds the bug still exists, it gets Reopened and the cycle continues.</p>
      </div>

      <h2 className="text-2xl font-semibold mb-4">Roles and Responsibilities</h2>

      <div className="grid md:grid-cols-3 gap-6 mb-6">
        <div className="border border-blue-300 dark:border-blue-600 rounded-lg p-4">
          <h3 className="text-lg font-semibold mb-2 text-blue-700 dark:text-blue-400">QA Tester</h3>
          <ul className="list-disc list-inside text-sm">
            <li>Report bugs clearly</li>
            <li>Provide reproduction steps</li>
            <li>Verify fixes</li>
            <li>Update bug status</li>
          </ul>
        </div>

        <div className="border border-green-300 dark:border-green-600 rounded-lg p-4">
          <h3 className="text-lg font-semibold mb-2 text-green-700 dark:text-green-400">Developer</h3>
          <ul className="list-disc list-inside text-sm">
            <li>Investigate root cause</li>
            <li>Implement fixes</li>
            <li>Update code and tests</li>
            <li>Communicate with QA</li>
          </ul>
        </div>

        <div className="border border-purple-300 dark:border-purple-600 rounded-lg p-4">
          <h3 className="text-lg font-semibold mb-2 text-purple-700 dark:text-purple-400">Team Lead</h3>
          <ul className="list-disc list-inside text-sm">
            <li>Assign bugs appropriately</li>
            <li>Set priorities</li>
            <li>Resolve conflicts</li>
            <li>Track progress</li>
          </ul>
        </div>
      </div>

      <h2 className="text-2xl font-semibold mb-4">Bug Tracking Best Practices</h2>

      <div className="grid md:grid-cols-2 gap-6 mb-6">
        <div>
          <h3 className="text-lg font-semibold mb-3">Bug Reporting</h3>
          <ul className="list-disc list-inside">
            <li>Use clear, descriptive titles</li>
            <li>Include step-by-step reproduction</li>
            <li>Attach screenshots/logs</li>
            <li>Specify environment details</li>
            <li>Include expected vs actual behavior</li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-3">Status Management</h3>
          <ul className="list-disc list-inside">
            <li>Update status promptly</li>
            <li>Add comments for changes</li>
            <li>Notify relevant team members</li>
            <li>Escalate blocking issues</li>
            <li>Maintain accurate history</li>
          </ul>
        </div>
      </div>

      <h2 className="text-2xl font-semibold mb-4">Common Bug Life Cycle Metrics</h2>

      <div className="bg-white dark:bg-gray-700 p-4 rounded mb-6">
        <ul className="space-y-3">
          <li><strong>Bug Fix Time:</strong> Average time from Open to Closed</li>
          <li><strong>Bug Leakage:</strong> Bugs found in production vs testing</li>
          <li><strong>Bug Reopen Rate:</strong> Percentage of bugs that get reopened</li>
          <li><strong>Bug Age:</strong> Time bugs remain in different states</li>
          <li><strong>Bug Resolution Rate:</strong> Bugs closed per sprint/release</li>
        </ul>
      </div>

      <div className="bg-yellow-100 dark:bg-yellow-900 border-l-4 border-yellow-500 p-4 mb-6">
        <p className="font-semibold text-gray-900 dark:text-gray-100">🟧 Warning:</p>
        <p className="text-gray-700 dark:text-gray-300">Poor bug life cycle management leads to confusion, delayed fixes, and frustrated team members. Always keep bug reports up-to-date and communicate clearly.</p>
      </div>

      <div className="bg-purple-100 dark:bg-purple-900 border-l-4 border-purple-500 p-4 mb-6">
        <p className="font-semibold text-gray-900 dark:text-gray-100">🟪 Key Tip:</p>
        <p className="text-gray-700 dark:text-gray-300">The key to effective bug management is clear communication. Everyone involved should understand their responsibilities and update bug status promptly.</p>
      </div>

      <h2 className="text-2xl font-semibold mb-4">Bug Life Cycle in Different Methodologies</h2>

      <div className="grid md:grid-cols-2 gap-6 mb-6">
        <div className="border border-blue-300 dark:border-blue-600 rounded-lg p-4">
          <h3 className="text-lg font-semibold mb-2 text-blue-700 dark:text-blue-400">Agile/Scrum</h3>
          <ul className="list-disc list-inside text-sm">
            <li>Bugs tracked in sprint backlog</li>
            <li>Daily standup discussions</li>
            <li>Fixed within current sprint</li>
            <li>Retrospective analysis</li>
          </ul>
        </div>

        <div className="border border-green-300 dark:border-green-600 rounded-lg p-4">
          <h3 className="text-lg font-semibold mb-2 text-green-700 dark:text-green-400">Waterfall</h3>
          <ul className="list-disc list-inside text-sm">
            <li>Bugs tracked in defect register</li>
            <li>Fixed in maintenance phase</li>
            <li>Formal change control process</li>
            <li>Separate testing and development phases</li>
          </ul>
        </div>
      </div>

      <h2 className="text-2xl font-semibold mb-4">Common Interview Questions</h2>
      <ul className="list-disc list-inside mb-6">
        <li>What is the bug life cycle?</li>
        <li>Explain different bug states</li>
        <li>What happens when a bug is reopened?</li>
        <li>How do you handle rejected bugs?</li>
        <li>What metrics do you track for bug management?</li>
      </ul>

      <h2 className="text-2xl font-semibold mb-4">Bug Life Cycle Checklist</h2>

      <div className="bg-white dark:bg-gray-700 p-4 rounded">
        <h3 className="font-semibold mb-3">Before Reporting a Bug:</h3>
        <ul className="list-disc list-inside mb-4">
          <li>✅ Confirm it's actually a bug</li>
          <li>✅ Try to reproduce consistently</li>
          <li>✅ Check if it's already reported</li>
          <li>✅ Gather all necessary information</li>
          <li>✅ Use clear, descriptive language</li>
        </ul>

        <h3 className="font-semibold mb-3">During Bug Resolution:</h3>
        <ul className="list-disc list-inside">
          <li>✅ Update status regularly</li>
          <li>✅ Communicate with team members</li>
          <li>✅ Test fixes thoroughly</li>
          <li>✅ Document workarounds if needed</li>
          <li>✅ Close bugs properly when resolved</li>
        </ul>
      </div>
    </div>
  )
}
