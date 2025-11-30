export default function Page() {
  return (
    <div className="max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Severity vs Priority</h1>

      <p className="mb-6">
        Severity and Priority are two important concepts in bug tracking that help teams decide which issues to fix first. While they are related, they serve different purposes in the defect management process.
      </p>

      <div className="bg-blue-100 dark:bg-blue-900 border-l-4 border-blue-500 p-4 mb-6">
        <p className="font-semibold text-gray-900 dark:text-gray-100">🟦 Info:</p>
        <p className="text-gray-700 dark:text-gray-300">Severity measures the technical impact of a bug, while Priority determines the business urgency of fixing it. Both are crucial for effective bug management.</p>
      </div>

      <h2 className="text-2xl font-semibold mb-4">Severity Definition</h2>
      <p className="mb-4">
        Severity describes how badly a bug affects the functionality of the software from a technical standpoint. It focuses on the impact on the system, not on business consequences.
      </p>

      <h2 className="text-2xl font-semibold mb-4">Severity Levels</h2>

      <div className="space-y-4 mb-6">
        <div className="border border-red-300 dark:border-red-600 rounded-lg p-4">
          <div className="flex items-center mb-2">
            <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold mr-3">Critical</span>
            <h3 className="text-lg font-semibold text-red-700 dark:text-red-400">Blocker/S1</h3>
          </div>
          <p className="text-gray-700 dark:text-gray-300 mb-2">System completely unusable or crashes</p>
          <ul className="list-disc list-inside text-sm">
            <li>Data corruption or loss</li>
            <li>Application won't start</li>
            <li>Critical security vulnerabilities</li>
            <li>Complete feature failure</li>
          </ul>
        </div>

        <div className="border border-orange-300 dark:border-orange-600 rounded-lg p-4">
          <div className="flex items-center mb-2">
            <span className="bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-bold mr-3">High</span>
            <h3 className="text-lg font-semibold text-orange-700 dark:text-orange-400">Major/S2</h3>
          </div>
          <p className="text-gray-700 dark:text-gray-300 mb-2">Major functionality severely impacted</p>
          <ul className="list-disc list-inside text-sm">
            <li>Core features not working</li>
            <li>Data not saving correctly</li>
            <li>Performance issues affecting usability</li>
            <li>Security issues with limited impact</li>
          </ul>
        </div>

        <div className="border border-yellow-300 dark:border-yellow-600 rounded-lg p-4">
          <div className="flex items-center mb-2">
            <span className="bg-yellow-500 text-white px-3 py-1 rounded-full text-sm font-bold mr-3">Medium</span>
            <h3 className="text-lg font-semibold text-yellow-700 dark:text-yellow-400">Minor/S3</h3>
          </div>
          <p className="text-gray-700 dark:text-gray-300 mb-2">Secondary features affected, workarounds available</p>
          <ul className="list-disc list-inside text-sm">
            <li>UI inconsistencies</li>
            <li>Minor calculation errors</li>
            <li>Performance degradation</li>
            <li>Edge case failures</li>
          </ul>
        </div>

        <div className="border border-green-300 dark:border-green-600 rounded-lg p-4">
          <div className="flex items-center mb-2">
            <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-bold mr-3">Low</span>
            <h3 className="text-lg font-semibold text-green-700 dark:text-green-400">Trivial/S4</h3>
          </div>
          <p className="text-gray-700 dark:text-gray-300 mb-2">Cosmetic issues, no functional impact</p>
          <ul className="list-disc list-inside text-sm">
            <li>Typos in text</li>
            <li>Minor styling issues</li>
            <li>Help text improvements</li>
            <li>Very edge case scenarios</li>
          </ul>
        </div>
      </div>

      <h2 className="text-2xl font-semibold mb-4">Priority Definition</h2>
      <p className="mb-4">
        Priority indicates the business importance and urgency of fixing a bug. It considers factors like customer impact, business value, and deadlines.
      </p>

      <h2 className="text-2xl font-semibold mb-4">Priority Levels</h2>

      <div className="space-y-4 mb-6">
        <div className="border border-red-300 dark:border-red-600 rounded-lg p-4">
          <div className="flex items-center mb-2">
            <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold mr-3">P1</span>
            <h3 className="text-lg font-semibold text-red-700 dark:text-red-400">Critical/Urgent</h3>
          </div>
          <p className="text-gray-700 dark:text-gray-300 mb-2">Must fix immediately, blocks releases</p>
          <ul className="list-disc list-inside text-sm">
            <li>Production system down</li>
            <li>Critical customer-facing issues</li>
            <li>Security breaches</li>
            <li>Legal compliance issues</li>
          </ul>
        </div>

        <div className="border border-orange-300 dark:border-orange-600 rounded-lg p-4">
          <div className="flex items-center mb-2">
            <span className="bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-bold mr-3">P2</span>
            <h3 className="text-lg font-semibold text-orange-700 dark:text-orange-400">High</h3>
          </div>
          <p className="text-gray-700 dark:text-gray-300 mb-2">Fix soon, affects important functionality</p>
          <ul className="list-disc list-inside text-sm">
            <li>Major feature broken</li>
            <li>High customer impact</li>
            <li>Revenue-affecting issues</li>
            <li>Important deadline approaching</li>
          </ul>
        </div>

        <div className="border border-yellow-300 dark:border-yellow-600 rounded-lg p-4">
          <div className="flex items-center mb-2">
            <span className="bg-yellow-500 text-white px-3 py-1 rounded-full text-sm font-bold mr-3">P3</span>
            <h3 className="text-lg font-semibold text-yellow-700 dark:text-yellow-400">Medium</h3>
          </div>
          <p className="text-gray-700 dark:text-gray-300 mb-2">Fix when possible, nice to have</p>
          <ul className="list-disc list-inside text-sm">
            <li>Minor annoyances</li>
            <li>Low customer impact</li>
            <li>Non-critical features</li>
            <li>Future release items</li>
          </ul>
        </div>

        <div className="border border-green-300 dark:border-green-600 rounded-lg p-4">
          <div className="flex items-center mb-2">
            <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-bold mr-3">P4</span>
            <h3 className="text-lg font-semibold text-green-700 dark:text-green-400">Low</h3>
          </div>
          <p className="text-gray-700 dark:text-gray-300 mb-2">Fix if time permits, lowest priority</p>
          <ul className="list-disc list-inside text-sm">
            <li>Cosmetic issues</li>
            <li>Very edge cases</li>
            <li>Future enhancement requests</li>
            <li>Documentation issues</li>
          </ul>
        </div>
      </div>

      <h2 className="text-2xl font-semibold mb-4">Severity vs Priority Matrix</h2>

      <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded mb-6">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-gray-300 dark:border-gray-600">
              <th className="text-left p-2">Severity →<br />Priority ↓</th>
              <th className="text-center p-2 bg-red-100 dark:bg-red-900">Critical (S1)</th>
              <th className="text-center p-2 bg-orange-100 dark:bg-orange-900">High (S2)</th>
              <th className="text-center p-2 bg-yellow-100 dark:bg-yellow-900">Medium (S3)</th>
              <th className="text-center p-2 bg-green-100 dark:bg-green-900">Low (S4)</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-gray-200 dark:border-gray-700">
              <td className="p-2 font-semibold bg-red-100 dark:bg-red-900">Critical (P1)</td>
              <td className="p-2 text-center">System crash affecting all users</td>
              <td className="p-2 text-center">Rare combination</td>
              <td className="p-2 text-center">Unlikely</td>
              <td className="p-2 text-center">Very unlikely</td>
            </tr>
            <tr className="border-b border-gray-200 dark:border-gray-700">
              <td className="p-2 font-semibold bg-orange-100 dark:bg-orange-900">High (P2)</td>
              <td className="p-2 text-center">Payment system failure</td>
              <td className="p-2 text-center">Login issues for some users</td>
              <td className="p-2 text-center">UI bugs in key flows</td>
              <td className="p-2 text-center">Unlikely</td>
            </tr>
            <tr className="border-b border-gray-200 dark:border-gray-700">
              <td className="p-2 font-semibold bg-yellow-100 dark:bg-yellow-900">Medium (P3)</td>
              <td className="p-2 text-center">Rare edge case crash</td>
              <td className="p-2 text-center">Performance issues</td>
              <td className="p-2 text-center">Minor calculation errors</td>
              <td className="p-2 text-center">UI inconsistencies</td>
            </tr>
            <tr>
              <td className="p-2 font-semibold bg-green-100 dark:bg-green-900">Low (P4)</td>
              <td className="p-2 text-center">Very unlikely</td>
              <td className="p-2 text-center">Rare scenarios</td>
              <td className="p-2 text-center">Cosmetic issues</td>
              <td className="p-2 text-center">Typos, minor styling</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="bg-green-100 dark:bg-green-900 border-l-4 border-green-500 p-4 mb-6">
        <p className="font-semibold text-gray-900 dark:text-gray-100">🟩 Example:</p>
        <p className="text-gray-700 dark:text-gray-300">A typo in an error message might have High Severity (S2) because it affects user experience, but Low Priority (P4) because it doesn't impact core functionality and can be fixed in any release.</p>
      </div>

      <h2 className="text-2xl font-semibold mb-4">Factors Affecting Priority</h2>

      <div className="grid md:grid-cols-2 gap-6 mb-6">
        <div>
          <h3 className="text-lg font-semibold mb-3">Business Factors</h3>
          <ul className="list-disc list-inside">
            <li>Customer impact and satisfaction</li>
            <li>Revenue and financial loss</li>
            <li>Brand reputation damage</li>
            <li>Competitive disadvantage</li>
            <li>Regulatory compliance</li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-3">Technical Factors</h3>
          <ul className="list-disc list-inside">
            <li>System stability and reliability</li>
            <li>Security implications</li>
            <li>Data integrity risks</li>
            <li>Development effort required</li>
            <li>Dependencies on other fixes</li>
          </ul>
        </div>
      </div>

      <h2 className="text-2xl font-semibold mb-4">Who Sets Severity vs Priority?</h2>

      <div className="grid md:grid-cols-2 gap-6 mb-6">
        <div className="border border-blue-300 dark:border-blue-600 rounded-lg p-4">
          <h3 className="text-lg font-semibold mb-2 text-blue-700 dark:text-blue-400">Severity (Technical)</h3>
          <ul className="list-disc list-inside text-sm">
            <li>Set by QA/Test Engineers</li>
            <li>Based on technical impact</li>
            <li>Objective assessment</li>
            <li>Usually doesn't change</li>
            <li>Focus on system behavior</li>
          </ul>
        </div>

        <div className="border border-green-300 dark:border-green-600 rounded-lg p-4">
          <h3 className="text-lg font-semibold mb-2 text-green-700 dark:text-green-400">Priority (Business)</h3>
          <ul className="list-disc list-inside text-sm">
            <li>Set by Product Managers</li>
            <li>Based on business impact</li>
            <li>Subjective assessment</li>
            <li>Can change over time</li>
            <li>Focus on business value</li>
          </ul>
        </div>
      </div>

      <h2 className="text-2xl font-semibold mb-4">Common Misconceptions</h2>

      <div className="space-y-3 mb-6">
        <div className="border border-red-300 dark:border-red-600 rounded-lg p-3">
          <strong>Myth:</strong> High severity bugs always have high priority
          <br /><strong>Reality:</strong> A critical security vulnerability in a rarely used feature might have lower priority than a minor UI bug affecting the main user flow
        </div>
        <div className="border border-orange-300 dark:border-orange-600 rounded-lg p-3">
          <strong>Myth:</strong> Priority is just another word for severity
          <br /><strong>Reality:</strong> They serve different purposes - severity is technical impact, priority is business urgency
        </div>
        <div className="border border-yellow-300 dark:border-yellow-600 rounded-lg p-3">
          <strong>Myth:</strong> Low severity bugs should never be fixed
          <br /><strong>Reality:</strong> Even low severity bugs can have high priority if they affect important customers or key business metrics
        </div>
      </div>

      <h2 className="text-2xl font-semibold mb-4">Setting Priority Guidelines</h2>

      <div className="bg-white dark:bg-gray-700 p-4 rounded mb-6">
        <h3 className="font-semibold mb-3">Priority Decision Framework:</h3>
        <ol className="list-decimal list-inside space-y-2">
          <li><strong>Assess User Impact:</strong> How many users are affected and how severely?</li>
          <li><strong>Evaluate Business Impact:</strong> Revenue loss, brand damage, compliance issues?</li>
          <li><strong>Consider Timeline:</strong> Release deadlines, customer commitments, SLAs?</li>
          <li><strong>Technical Dependencies:</strong> Does this block other work or create cascading issues?</li>
          <li><strong>Resource Availability:</strong> Do we have the skills and time to fix it?</li>
        </ol>
      </div>

      <div className="bg-yellow-100 dark:bg-yellow-900 border-l-4 border-yellow-500 p-4 mb-6">
        <p className="font-semibold text-gray-900 dark:text-gray-100">🟧 Warning:</p>
        <p className="text-gray-700 dark:text-gray-300">Setting the wrong priority can waste development time on unimportant issues while critical bugs remain unfixed. Always involve stakeholders in priority decisions.</p>
      </div>

      <div className="bg-purple-100 dark:bg-purple-900 border-l-4 border-purple-500 p-4 mb-6">
        <p className="font-semibold text-gray-900 dark:text-gray-100">🟪 Key Tip:</p>
        <p className="text-gray-700 dark:text-gray-300">Document the reasoning behind priority decisions. This helps with transparency, prevents disputes, and provides learning opportunities for future prioritization.</p>
      </div>

      <h2 className="text-2xl font-semibold mb-4">Priority vs Severity in Different Contexts</h2>

      <div className="grid md:grid-cols-2 gap-6 mb-6">
        <div className="border border-blue-300 dark:border-blue-600 rounded-lg p-4">
          <h3 className="text-lg font-semibold mb-2 text-blue-700 dark:text-blue-400">Startup Environment</h3>
          <ul className="list-disc list-inside text-sm">
            <li>User acquisition features: High priority</li>
            <li>Performance issues: High priority</li>
            <li>UI polish: Lower priority</li>
            <li>Technical debt: Often deferred</li>
          </ul>
        </div>

        <div className="border border-green-300 dark:border-green-600 rounded-lg p-4">
          <h3 className="text-lg font-semibold mb-2 text-green-700 dark:text-green-400">Enterprise Environment</h3>
          <ul className="list-disc list-inside text-sm">
            <li>Security issues: Always P1</li>
            <li>Compliance bugs: High priority</li>
            <li>Legacy system issues: Medium priority</li>
            <li>Process improvements: Lower priority</li>
          </ul>
        </div>
      </div>

      <h2 className="text-2xl font-semibold mb-4">Common Interview Questions</h2>
      <ul className="list-disc list-inside mb-6">
        <li>What is the difference between severity and priority?</li>
        <li>Give an example where severity is high but priority is low</li>
        <li>How do you determine bug priority?</li>
        <li>Who decides severity vs priority in your organization?</li>
        <li>How do you handle disagreements about bug priority?</li>
      </ul>

      <h2 className="text-2xl font-semibold mb-4">Best Practices</h2>

      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <h3 className="text-lg font-semibold mb-3">Setting Severity</h3>
          <ul className="list-disc list-inside">
            <li>Use objective criteria</li>
            <li>Focus on technical impact</li>
            <li>Consider system stability</li>
            <li>Evaluate data integrity</li>
            <li>Assess security implications</li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-3">Setting Priority</h3>
          <ul className="list-disc list-inside">
            <li>Involve business stakeholders</li>
            <li>Consider customer impact</li>
            <li>Evaluate business value</li>
            <li>Check release timelines</li>
            <li>Balance technical debt</li>
          </ul>
        </div>
      </div>
    </div>
  )
}
