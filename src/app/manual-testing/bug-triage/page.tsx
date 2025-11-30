export default function Page() {
  return (
    <div className="max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Bug Triage</h1>

      <p className="mb-6">
        Bug triage is the process of evaluating, prioritizing, and assigning reported bugs. It ensures that the most critical issues are addressed first and resources are allocated efficiently.
      </p>

      <div className="bg-blue-100 dark:bg-blue-900 border-l-4 border-blue-500 p-4 mb-6">
        <p className="font-semibold text-gray-900 dark:text-gray-100">🟦 Info:</p>
        <p className="text-gray-700 dark:text-gray-300">Effective bug triage prevents important issues from being overlooked and ensures development teams focus on high-impact problems.</p>
      </div>

      <h2 className="text-2xl font-semibold mb-4">Bug Triage Process</h2>

      <div className="space-y-4 mb-6">
        <div className="border border-blue-300 dark:border-blue-600 rounded-lg p-4">
          <div className="flex items-center mb-2">
            <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-bold mr-3">1</span>
            <h3 className="text-lg font-semibold text-blue-700 dark:text-blue-400">Initial Review</h3>
          </div>
          <p className="text-gray-700 dark:text-gray-300 mb-2">Quick assessment of the bug report</p>
          <ul className="list-disc list-inside text-sm">
            <li>Check if bug is valid and reproducible</li>
            <li>Verify all required information is present</li>
            <li>Identify if it's a duplicate</li>
            <li>Determine initial severity</li>
          </ul>
        </div>

        <div className="border border-green-300 dark:border-green-600 rounded-lg p-4">
          <div className="flex items-center mb-2">
            <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-bold mr-3">2</span>
            <h3 className="text-lg font-semibold text-green-700 dark:text-green-400">Reproduction</h3>
          </div>
          <p className="text-gray-700 dark:text-gray-300 mb-2">Attempt to reproduce the issue</p>
          <ul className="list-disc list-inside text-sm">
            <li>Follow provided reproduction steps</li>
            <li>Test in different environments</li>
            <li>Try various data combinations</li>
            <li>Document successful reproduction</li>
          </ul>
        </div>

        <div className="border border-yellow-300 dark:border-yellow-600 rounded-lg p-4">
          <div className="flex items-center mb-2">
            <span className="bg-yellow-500 text-white px-3 py-1 rounded-full text-sm font-bold mr-3">3</span>
            <h3 className="text-lg font-semibold text-yellow-700 dark:text-yellow-400">Impact Assessment</h3>
          </div>
          <p className="text-gray-700 dark:text-gray-300 mb-2">Evaluate the bug's business and technical impact</p>
          <ul className="list-disc list-inside text-sm">
            <li>Assess user impact and frequency</li>
            <li>Determine affected user segments</li>
            <li>Evaluate business criticality</li>
            <li>Consider technical complexity</li>
          </ul>
        </div>

        <div className="border border-purple-300 dark:border-purple-600 rounded-lg p-4">
          <div className="flex items-center mb-2">
            <span className="bg-purple-500 text-white px-3 py-1 rounded-full text-sm font-bold mr-3">4</span>
            <h3 className="text-lg font-semibold text-purple-700 dark:text-purple-400">Prioritization</h3>
          </div>
          <p className="text-gray-700 dark:text-gray-300 mb-2">Assign priority based on impact and urgency</p>
          <ul className="list-disc list-inside text-sm">
            <li>Set severity and priority levels</li>
            <li>Consider business deadlines</li>
            <li>Balance with other priorities</li>
            <li>Document rationale</li>
          </ul>
        </div>

        <div className="border border-red-300 dark:border-red-600 rounded-lg p-4">
          <div className="flex items-center mb-2">
            <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold mr-3">5</span>
            <h3 className="text-lg font-semibold text-red-700 dark:text-red-400">Assignment</h3>
          </div>
          <p className="text-gray-700 dark:text-gray-300 mb-2">Assign to appropriate team member</p>
          <ul className="list-disc list-inside text-sm">
            <li>Match developer expertise</li>
            <li>Consider current workload</li>
            <li>Set realistic deadlines</li>
            <li>Communicate expectations</li>
          </ul>
        </div>
      </div>

      <h2 className="text-2xl font-semibold mb-4">Triage Decision Outcomes</h2>

      <div className="grid md:grid-cols-2 gap-6 mb-6">
        <div className="border border-green-300 dark:border-green-600 rounded-lg p-4">
          <h3 className="text-lg font-semibold mb-2 text-green-700 dark:text-green-400">Accept for Development</h3>
          <ul className="list-disc list-inside text-sm">
            <li>Valid, reproducible bug</li>
            <li>Clear impact on users</li>
            <li>Feasible to fix</li>
            <li>Assign to developer</li>
          </ul>
        </div>

        <div className="border border-orange-300 dark:border-orange-600 rounded-lg p-4">
          <h3 className="text-lg font-semibold mb-2 text-orange-700 dark:text-orange-400">Defer/Postpone</h3>
          <ul className="list-disc list-inside text-sm">
            <li>Low priority issue</li>
            <li>Scheduled for future release</li>
            <li>Requires major changes</li>
            <li>Business decision</li>
          </ul>
        </div>

        <div className="border border-red-300 dark:border-red-600 rounded-lg p-4">
          <h3 className="text-lg font-semibold mb-2 text-red-700 dark:text-red-400">Reject/Invalid</h3>
          <ul className="list-disc list-inside text-sm">
            <li>Not a real bug</li>
            <li>Cannot reproduce</li>
            <li>Insufficient information</li>
            <li>Duplicate report</li>
          </ul>
        </div>

        <div className="border border-blue-300 dark:border-blue-600 rounded-lg p-4">
          <h3 className="text-lg font-semibold mb-2 text-blue-700 dark:text-blue-400">Need More Info</h3>
          <ul className="list-disc list-inside text-sm">
            <li>Request additional details</li>
            <li>Ask for clarification</li>
            <li>Request specific data</li>
            <li>Put on hold temporarily</li>
          </ul>
        </div>
      </div>

      <h2 className="text-2xl font-semibold mb-4">Triage Meeting Structure</h2>

      <div className="bg-white dark:bg-gray-700 p-4 rounded mb-6">
        <h3 className="font-semibold mb-3">Daily Triage Meeting Agenda:</h3>
        <ol className="list-decimal list-inside space-y-2">
          <li><strong>Review New Bugs (10 minutes):</strong> Go through newly reported issues</li>
          <li><strong>Status Updates (10 minutes):</strong> Check progress on existing bugs</li>
          <li><strong>Priority Conflicts (5 minutes):</strong> Resolve any priority disputes</li>
          <li><strong>Blocker Discussion (5 minutes):</strong> Address critical issues</li>
          <li><strong>Action Items (5 minutes):</strong> Assign tasks and set deadlines</li>
        </ol>
      </div>

      <div className="bg-green-100 dark:bg-green-900 border-l-4 border-green-500 p-4 mb-6">
        <p className="font-semibold text-gray-900 dark:text-gray-100">🟩 Example:</p>
        <p className="text-gray-700 dark:text-gray-300">During triage, a login crash bug affecting all users gets high priority and immediate assignment, while a minor UI alignment issue gets deferred to the next sprint.</p>
      </div>

      <h2 className="text-2xl font-semibold mb-4">Triage Criteria Matrix</h2>

      <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded mb-6">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-gray-300 dark:border-gray-600">
              <th className="text-left p-2">Factor</th>
              <th className="text-left p-2">High Priority</th>
              <th className="text-left p-2">Medium Priority</th>
              <th className="text-left p-2">Low Priority</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-gray-200 dark:border-gray-700">
              <td className="p-2 font-semibold">User Impact</td>
              <td className="p-2">Affects all users</td>
              <td className="p-2">Affects some users</td>
              <td className="p-2">Affects few users</td>
            </tr>
            <tr className="border-b border-gray-200 dark:border-gray-700">
              <td className="p-2 font-semibold">Business Impact</td>
              <td className="p-2">Revenue loss</td>
              <td className="p-2">Feature delay</td>
              <td className="p-2">Minor inconvenience</td>
            </tr>
            <tr className="border-b border-gray-200 dark:border-gray-700">
              <td className="p-2 font-semibold">Frequency</td>
              <td className="p-2">Always occurs</td>
              <td className="p-2">Sometimes occurs</td>
              <td className="p-2">Rarely occurs</td>
            </tr>
            <tr>
              <td className="p-2 font-semibold">Workaround</td>
              <td className="p-2">No workaround</td>
              <td className="p-2">Complex workaround</td>
              <td className="p-2">Simple workaround</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2 className="text-2xl font-semibold mb-4">Roles in Bug Triage</h2>

      <div className="grid md:grid-cols-3 gap-6 mb-6">
        <div className="border border-blue-300 dark:border-blue-600 rounded-lg p-4">
          <h3 className="text-lg font-semibold mb-2 text-blue-700 dark:text-blue-400">Triage Lead</h3>
          <ul className="list-disc list-inside text-sm">
            <li>Facilitate triage meetings</li>
            <li>Make final decisions</li>
            <li>Ensure process consistency</li>
            <li>Track triage metrics</li>
          </ul>
        </div>

        <div className="border border-green-300 dark:border-green-600 rounded-lg p-4">
          <h3 className="text-lg font-semibold mb-2 text-green-700 dark:text-green-400">QA Team</h3>
          <ul className="list-disc list-inside text-sm">
            <li>Present bug details</li>
            <li>Provide reproduction steps</li>
            <li>Assess test coverage</li>
            <li>Verify fixes</li>
          </ul>
        </div>

        <div className="border border-purple-300 dark:border-purple-600 rounded-lg p-4">
          <h3 className="text-lg font-semibold mb-2 text-purple-700 dark:text-purple-400">Development Team</h3>
          <ul className="list-disc list-inside text-sm">
            <li>Assess technical feasibility</li>
            <li>Estimate fix effort</li>
            <li>Identify root causes</li>
            <li>Suggest workarounds</li>
          </ul>
        </div>
      </div>

      <h2 className="text-2xl font-semibold mb-4">Triage Best Practices</h2>

      <div className="grid md:grid-cols-2 gap-6 mb-6">
        <div>
          <h3 className="text-lg font-semibold mb-3">Process</h3>
          <ul className="list-disc list-inside">
            <li>Hold regular triage meetings</li>
            <li>Use consistent criteria</li>
            <li>Document decisions</li>
            <li>Communicate clearly</li>
            <li>Review and improve process</li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-3">Communication</h3>
          <ul className="list-disc list-inside">
            <li>Keep stakeholders informed</li>
            <li>Explain rationale for decisions</li>
            <li>Set realistic expectations</li>
            <li>Follow up on progress</li>
            <li>Celebrate successful resolutions</li>
          </ul>
        </div>
      </div>

      <h2 className="text-2xl font-semibold mb-4">Triage Metrics</h2>

      <div className="bg-white dark:bg-gray-700 p-4 rounded mb-6">
        <ul className="space-y-3">
          <li><strong>Time to Triage:</strong> Average time from bug report to triage decision</li>
          <li><strong>Bug Acceptance Rate:</strong> Percentage of bugs accepted for fixing</li>
          <li><strong>Priority Distribution:</strong> Breakdown of bugs by priority level</li>
          <li><strong>Triage Meeting Efficiency:</strong> Time spent vs bugs processed</li>
          <li><strong>Rejection Rate:</strong> Percentage of invalid/duplicate bugs</li>
        </ul>
      </div>

      <div className="bg-yellow-100 dark:bg-yellow-900 border-l-4 border-yellow-500 p-4 mb-6">
        <p className="font-semibold text-gray-900 dark:text-gray-100">🟧 Warning:</p>
        <p className="text-gray-700 dark:text-gray-300">Poor triage decisions can waste development time on low-impact issues while critical bugs remain unfixed. Always balance business needs with technical priorities.</p>
      </div>

      <div className="bg-purple-100 dark:bg-purple-900 border-l-4 border-purple-500 p-4 mb-6">
        <p className="font-semibold text-gray-900 dark:text-gray-100">🟪 Key Tip:</p>
        <p className="text-gray-700 dark:text-gray-300">Successful triage requires good judgment, clear communication, and consistent application of criteria. Involve all stakeholders to ensure buy-in and understanding.</p>
      </div>

      <h2 className="text-2xl font-semibold mb-4">Triage Checklist</h2>

      <div className="bg-white dark:bg-gray-700 p-4 rounded mb-6">
        <h3 className="font-semibold mb-3">Before Triage Meeting:</h3>
        <ul className="list-disc list-inside mb-4">
          <li>✅ Review all new bug reports</li>
          <li>✅ Gather necessary information</li>
          <li>✅ Prepare reproduction steps</li>
          <li>✅ Check for duplicates</li>
          <li>✅ Assess initial impact</li>
        </ul>

        <h3 className="font-semibold mb-3">During Triage:</h3>
        <ul className="list-disc list-inside">
          <li>✅ Present clear bug summaries</li>
          <li>✅ Discuss impact and priority</li>
          <li>✅ Make collaborative decisions</li>
          <li>✅ Assign appropriate owners</li>
          <li>✅ Document all decisions</li>
        </ul>
      </div>

      <h2 className="text-2xl font-semibold mb-4">Common Triage Challenges</h2>

      <div className="space-y-3 mb-6">
        <div className="border border-red-300 dark:border-red-600 rounded-lg p-3">
          <strong>Challenge:</strong> Too many low-priority bugs drowning out critical issues
          <br /><strong>Solution:</strong> Implement bug intake limits and focus on high-impact problems first
        </div>
        <div className="border border-orange-300 dark:border-orange-600 rounded-lg p-3">
          <strong>Challenge:</strong> Conflicting priorities between business and technical teams
          <br /><strong>Solution:</strong> Establish clear criteria and involve stakeholders in decision-making
        </div>
        <div className="border border-yellow-300 dark:border-yellow-600 rounded-lg p-3">
          <strong>Challenge:</strong> Insufficient information in bug reports
          <br /><strong>Solution:</strong> Create bug report templates and provide training
        </div>
      </div>

      <h2 className="text-2xl font-semibold mb-4">Common Interview Questions</h2>
      <ul className="list-disc list-inside mb-6">
        <li>What is bug triage and why is it important?</li>
        <li>How do you decide which bugs to fix first?</li>
        <li>What factors influence bug priority?</li>
        <li>How do you handle conflicting priorities?</li>
        <li>What metrics do you track for triage effectiveness?</li>
      </ul>
    </div>
  )
}
