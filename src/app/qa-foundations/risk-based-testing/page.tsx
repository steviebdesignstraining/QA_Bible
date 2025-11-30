export default function Page() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Risk-Based Testing</h1>

      <p className="mb-4">
        Risk-based testing prioritizes testing efforts based on the likelihood and impact of potential failures. It focuses testing resources where they matter most.
      </p>

      <div className="bg-blue-100 dark:bg-blue-900 border-l-4 border-blue-500 p-4 mb-4">
        <p className="font-semibold text-gray-900 dark:text-gray-100">🟦 Info:</p>
        <p className="text-gray-700 dark:text-gray-300">Risk-based testing ensures that critical functionality receives the most thorough testing, optimizing resource allocation.</p>
      </div>

      <h2 className="text-2xl font-semibold mb-4">What is Risk in Testing?</h2>
      <p className="mb-4">
        Risk is the potential for negative consequences. In testing, risk combines the probability of a defect with the impact of that defect on users or business.
      </p>

      <h2 className="text-2xl font-semibold mb-4">Risk Assessment Formula</h2>
      <pre className="bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 p-4 rounded mb-4 text-center">
        <code>{`Risk Level = Probability × Impact

Where:
Probability = Likelihood of defect occurring
Impact = Severity of consequences if defect occurs`}</code>
      </pre>

      <div className="bg-green-100 dark:bg-green-900 border-l-4 border-green-500 p-4 mb-4">
        <p className="font-semibold text-gray-900 dark:text-gray-100">🟩 Example:</p>
        <p className="text-gray-700 dark:text-gray-300">Payment processing has high risk: High probability of bugs + Critical impact on business = Priority testing focus.</p>
      </div>

      <h2 className="text-2xl font-semibold mb-4">Steps in Risk-Based Testing</h2>
      <ol className="list-decimal list-inside mb-4">
        <li>Identify potential risks</li>
        <li>Assess probability and impact</li>
        <li>Prioritize risks by level</li>
        <li>Design tests for high-risk areas</li>
        <li>Execute tests in priority order</li>
        <li>Monitor and update risk assessments</li>
      </ol>

      <h2 className="text-2xl font-semibold mb-4">Risk Identification Techniques</h2>
      <ul className="list-disc list-inside mb-4">
        <li>Requirements analysis</li>
        <li>Historical defect data</li>
        <li>Expert judgment</li>
        <li>Brainstorming sessions</li>
        <li>Checklist-based assessment</li>
        <li>SWOT analysis</li>
      </ul>

      <h2 className="text-2xl font-semibold mb-4">Risk Categories</h2>
      <pre className="bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 p-4 rounded mb-4">
        <code>{`Business Risks:
• Financial loss
• Reputation damage
• Legal compliance
• Customer dissatisfaction

Technical Risks:
• System crashes
• Data corruption
• Security vulnerabilities
• Performance issues
• Integration failures

Operational Risks:
• Downtime
• Data loss
• User experience issues
• Scalability problems`}</code>
      </pre>

      <div className="bg-yellow-100 dark:bg-yellow-900 border-l-4 border-yellow-500 p-4 mb-4">
        <p className="font-semibold text-gray-900 dark:text-gray-100">🟧 Warning:</p>
        <p className="text-gray-700 dark:text-gray-300">Don't ignore low-risk areas completely. Some testing coverage is still needed for comprehensive quality assurance.</p>
      </div>

      <h2 className="text-2xl font-semibold mb-4">Risk Mitigation Strategies</h2>
      <ul className="list-disc list-inside mb-4">
        <li>Additional test coverage for high-risk areas</li>
        <li>Early testing of critical features</li>
        <li>Pair testing with developers</li>
        <li>Code reviews and static analysis</li>
        <li>Prototyping high-risk components</li>
        <li>Failover and backup testing</li>
      </ul>

      <h2 className="text-2xl font-semibold mb-4">Risk Matrix Example</h2>
      <pre className="bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 p-4 rounded mb-4">
        <code>{`Impact →     Low        Medium     High
Probability ↓
High          Medium     High       Critical
Medium        Low        Medium     High
Low           Very Low   Low        Medium`}</code>
      </pre>

      <div className="bg-purple-100 dark:bg-purple-900 border-l-4 border-purple-500 p-4 mb-4">
        <p className="font-semibold text-gray-900 dark:text-gray-100">🟪 Key Tip:</p>
        <p className="text-gray-700 dark:text-gray-300">Regularly update your risk assessments as the project evolves and new information becomes available.</p>
      </div>

      <h2 className="text-2xl font-semibold mb-4">Benefits of Risk-Based Testing</h2>
      <ul className="list-disc list-inside mb-4">
        <li>Optimized resource allocation</li>
        <li>Focus on critical functionality</li>
        <li>Early detection of major issues</li>
        <li>Better ROI on testing efforts</li>
        <li>Improved stakeholder confidence</li>
        <li>Reduced time-to-market for critical features</li>
      </ul>

      <h2 className="text-2xl font-semibold mb-4">Tools for Risk Assessment</h2>
      <ul className="list-disc list-inside mb-4">
        <li>Risk assessment matrices</li>
        <li>Failure Mode and Effects Analysis (FMEA)</li>
        <li>Risk priority numbers</li>
        <li>Monte Carlo simulation</li>
        <li>Expert judgment tools</li>
        <li>Historical data analysis</li>
      </ul>

      <h2 className="text-2xl font-semibold mb-4">Common Pitfalls</h2>
      <ul className="list-disc list-inside mb-4">
        <li>Over-reliance on subjective judgment</li>
        <li>Ignoring low-probability high-impact risks</li>
        <li>Not updating risk assessments</li>
        <li>Politics influencing risk prioritization</li>
        <li>Lack of stakeholder involvement</li>
      </ul>

      <h2 className="text-2xl font-semibold mb-4">Resources</h2>
      <ul className="list-disc list-inside mb-4">
        <li><a href="https://www.ministryofthetesting.com" className="text-blue-600 hover:underline">Ministry of Testing</a></li>
        <li><a href="https://www.lambdatest.com" className="text-blue-600 hover:underline">LambdaTest</a></li>
        <li>ISTQB Risk-Based Testing guidelines</li>
        <li>IEEE Standard for Risk Management</li>
      </ul>
    </div>
  )
}
