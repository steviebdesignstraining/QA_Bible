export default function Page() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Shift-Left and Shift-Right Testing</h1>

      <p className="mb-4">
        Shift-left and shift-right are testing strategies that move quality activities earlier and later in the software lifecycle.
      </p>

      <div className="bg-blue-100 dark:bg-blue-900 border-l-4 border-blue-500 p-4 mb-4">
        <p className="font-semibold text-gray-900 dark:text-gray-100">🟦 Info:</p>
        <p className="text-gray-700 dark:text-gray-300">Shift-left moves testing earlier. Shift-right extends testing into production and monitoring.</p>
      </div>

      <h2 className="text-2xl font-semibold mb-4">What is Shift-Left Testing?</h2>
      <p className="mb-4">
        Shift-left testing involves moving testing activities as early as possible in the development process. Instead of testing only at the end, testing begins during requirements and design phases.
      </p>

      <div className="bg-green-100 dark:bg-green-900 border-l-4 border-green-500 p-4 mb-4">
        <p className="font-semibold text-gray-900 dark:text-gray-100">🟩 Example:</p>
        <p className="text-gray-700 dark:text-gray-300">Reviewing requirements documents for testability before coding begins, rather than waiting until development is complete.</p>
      </div>

      <h2 className="text-2xl font-semibold mb-4">Shift-Left Benefits</h2>
      <ul className="list-disc list-inside mb-4">
        <li>Faster feedback on quality issues</li>
        <li>Reduced cost of fixing defects</li>
        <li>Improved collaboration between teams</li>
        <li>Better understanding of requirements</li>
        <li>Earlier detection of design flaws</li>
      </ul>

      <h2 className="text-2xl font-semibold mb-4">Shift-Left Activities</h2>
      <ul className="list-disc list-inside mb-4">
        <li>Requirements review and validation</li>
        <li>Test-driven development (TDD)</li>
        <li>Behavior-driven development (BDD)</li>
        <li>Static code analysis</li>
        <li>Unit testing during development</li>
        <li>Continuous integration testing</li>
      </ul>

      <div className="bg-yellow-100 dark:bg-yellow-900 border-l-4 border-yellow-500 p-4 mb-4">
        <p className="font-semibold text-gray-900 dark:text-gray-100">🟧 Warning:</p>
        <p className="text-gray-700 dark:text-gray-300">Shift-left doesn't mean eliminating later testing phases, but complementing them with early quality checks.</p>
      </div>

      <h2 className="text-2xl font-semibold mb-4">What is Shift-Right Testing?</h2>
      <p className="mb-4">
        Shift-right testing extends quality assurance into production and post-deployment phases. It focuses on monitoring, observability, and continuous improvement after release.
      </p>

      <h2 className="text-2xl font-semibold mb-4">Shift-Right Activities</h2>
      <ul className="list-disc list-inside mb-4">
        <li>Production monitoring and alerting</li>
        <li>A/B testing and feature flags</li>
        <li>Real user monitoring (RUM)</li>
        <li>Chaos engineering and resilience testing</li>
        <li>Continuous feedback collection</li>
        <li>Performance monitoring in production</li>
      </ul>

      <div className="bg-purple-100 dark:bg-purple-900 border-l-4 border-purple-500 p-4 mb-4">
        <p className="font-semibold text-gray-900 dark:text-gray-100">🟪 Key Tip:</p>
        <p className="text-gray-700 dark:text-gray-300">Combine shift-left and shift-right for comprehensive quality coverage throughout the entire software lifecycle.</p>
      </div>

      <h2 className="text-2xl font-semibold mb-4">Implementation Strategy</h2>
      <ol className="list-decimal list-inside mb-4">
        <li>Start with shift-left: Add testing to requirements and design phases</li>
        <li>Implement automated testing pipelines</li>
        <li>Add monitoring and observability to production</li>
        <li>Establish feedback loops from production back to development</li>
        <li>Continuously improve based on production insights</li>
      </ol>

      <h2 className="text-2xl font-semibold mb-4">Tools and Technologies</h2>
      <pre className="bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 p-4 rounded mb-4">
        <code>{`Shift-Left Tools:
• JUnit/TestNG (unit testing)
• Cucumber/SpecFlow (BDD)
• SonarQube (static analysis)
• Jenkins/GitLab CI (automation)

Shift-Right Tools:
• New Relic/DataDog (monitoring)
• Sentry (error tracking)
• LaunchDarkly (feature flags)
• Gremlin (chaos engineering)`}</code>
      </pre>

      <h2 className="text-2xl font-semibold mb-4">Measuring Success</h2>
      <ul className="list-disc list-inside mb-4">
        <li>Reduced time-to-market</li>
        <li>Lower defect escape rates</li>
        <li>Improved mean time to resolution (MTTR)</li>
        <li>Higher customer satisfaction</li>
        <li>Better team collaboration metrics</li>
      </ul>

      <h2 className="text-2xl font-semibold mb-4">Common Challenges</h2>
      <ul className="list-disc list-inside mb-4">
        <li>Cultural resistance to change</li>
        <li>Skill gaps in testing tools</li>
        <li>Integration with existing processes</li>
        <li>Balancing speed and quality</li>
        <li>Resource allocation for monitoring</li>
      </ul>

      <h2 className="text-2xl font-semibold mb-4">Resources</h2>
      <ul className="list-disc list-inside mb-4">
        <li><a href="https://www.ministryofthetesting.com" className="text-blue-600 hover:underline">Ministry of Testing</a></li>
        <li><a href="https://www.lambdatest.com" className="text-blue-600 hover:underline">LambdaTest</a></li>
        <li>ISTQB Shift-Left Testing guidelines</li>
      </ul>
    </div>
  )
}
