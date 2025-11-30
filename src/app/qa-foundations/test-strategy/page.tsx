export default function Page() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Test Strategy</h1>

      <p className="mb-4">
        A test strategy is a comprehensive plan that outlines how testing will be conducted throughout the software development lifecycle. It defines the approach, scope, and resources for testing activities.
      </p>

      <div className="bg-blue-100 dark:bg-blue-900 border-l-4 border-blue-500 p-4 mb-4">
        <p className="font-semibold text-gray-900 dark:text-gray-100">🟦 Info:</p>
        <p className="text-gray-700 dark:text-gray-300">Test strategy provides the roadmap for all testing activities, ensuring systematic and efficient quality assurance.</p>
      </div>

      <h2 className="text-2xl font-semibold mb-4">Key Components of Test Strategy</h2>
      <ul className="list-disc list-inside mb-4">
        <li>Testing objectives and scope</li>
        <li>Testing approach and methodology</li>
        <li>Test environment requirements</li>
        <li>Roles and responsibilities</li>
        <li>Testing tools and technologies</li>
        <li>Risk assessment and mitigation</li>
        <li>Entry and exit criteria</li>
        <li>Test deliverables and milestones</li>
      </ul>

      <div className="bg-green-100 dark:bg-green-900 border-l-4 border-green-500 p-4 mb-4">
        <p className="font-semibold text-gray-900 dark:text-gray-100">🟩 Example:</p>
        <p className="text-gray-700 dark:text-gray-300">For an e-commerce application: Focus on payment processing, user authentication, and checkout flows with 80% automation coverage.</p>
      </div>

      <h2 className="text-2xl font-semibold mb-4">Types of Test Strategies</h2>

      <h3 className="text-xl font-semibold mb-2">Analytical Strategy</h3>
      <p className="mb-4">Based on formal analysis of requirements and design. Uses techniques like equivalence partitioning and boundary value analysis.</p>

      <h3 className="text-xl font-semibold mb-2">Model-Based Strategy</h3>
      <p className="mb-4">Uses formal models of the system to derive test cases. Effective for complex systems with clear specifications.</p>

      <h3 className="text-xl font-semibold mb-2">Methodical Strategy</h3>
      <p className="mb-4">Follows predefined testing methods and standards. Good for regulated industries requiring compliance.</p>

      <h3 className="text-xl font-semibold mb-2">Process-Oriented Strategy</h3>
      <p className="mb-4">Focuses on testing processes and maturity. Uses standards like TMMi or TPI Next.</p>

      <h3 className="text-xl font-semibold mb-2">Dynamic Strategy</h3>
      <p className="mb-4">Adapts based on project feedback and changing requirements. Suitable for agile environments.</p>

      <h3 className="text-xl font-semibold mb-2">Consultative Strategy</h3>
      <p className="mb-4">Relies on expert judgment and stakeholder consultation. Useful when requirements are unclear.</p>

      <h3 className="text-xl font-semibold mb-2">Regression-Averse Strategy</h3>
      <p className="mb-4">Prioritizes regression testing to prevent functionality loss. Critical for legacy systems.</p>

      <div className="bg-yellow-100 dark:bg-yellow-900 border-l-4 border-yellow-500 p-4 mb-4">
        <p className="font-semibold text-gray-900 dark:text-gray-100">🟧 Warning:</p>
        <p className="text-gray-700 dark:text-gray-300">Choose a strategy that matches your project's size, complexity, and organizational maturity.</p>
      </div>

      <h2 className="text-2xl font-semibold mb-4">Test Strategy Template</h2>
      <pre className="bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 p-4 rounded mb-4">
        <code>{`1. Introduction
   • Purpose and scope
   • Assumptions and constraints
   • References

2. Test Approach
   • Testing methodology
   • Test levels and types
   • Automation strategy

3. Test Environment
   • Hardware/software requirements
   • Test data management
   • Environment setup procedures

4. Roles and Responsibilities
   • Test team structure
   • Reporting hierarchy
   • Stakeholder responsibilities

5. Test Schedule and Milestones
   • Key dates and deliverables
   • Dependencies and constraints
   • Risk mitigation plans

6. Test Deliverables
   • Test plans and cases
   • Test execution reports
   • Defect reports and metrics`}</code>
      </pre>

      <h2 className="text-2xl font-semibold mb-4">Automation Strategy Considerations</h2>
      <ul className="list-disc list-inside mb-4">
        <li>Which tests to automate (regression, smoke, data-driven)</li>
        <li>Automation framework selection</li>
        <li>Tool evaluation criteria</li>
        <li>ROI calculation and maintenance costs</li>
        <li>Skills required and training needs</li>
        <li>Integration with CI/CD pipelines</li>
      </ul>

      <div className="bg-purple-100 dark:bg-purple-900 border-l-4 border-purple-500 p-4 mb-4">
        <p className="font-semibold text-gray-900 dark:text-gray-100">🟪 Key Tip:</p>
        <p className="text-gray-700 dark:text-gray-300">Review and update your test strategy regularly to adapt to changing project needs and lessons learned.</p>
      </div>

      <h2 className="text-2xl font-semibold mb-4">Risk-Based Test Strategy</h2>
      <p className="mb-4">
        Prioritize testing based on risk assessment, focusing efforts on high-impact, high-probability failure areas.
      </p>

      <pre className="bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 p-4 rounded mb-4">
        <code>{`Risk Assessment Matrix:
High Risk    → Thorough testing, multiple techniques
Medium Risk  → Standard testing coverage
Low Risk     → Minimal testing, sampling approach`}</code>
      </pre>

      <h2 className="text-2xl font-semibold mb-4">Measuring Strategy Effectiveness</h2>
      <ul className="list-disc list-inside mb-4">
        <li>Defect detection rate</li>
        <li>Test coverage achieved</li>
        <li>Time to market impact</li>
        <li>Cost of quality metrics</li>
        <li>Customer satisfaction scores</li>
        <li>Team productivity measures</li>
      </ul>

      <h2 className="text-2xl font-semibold mb-4">Common Challenges</h2>
      <ul className="list-disc list-inside mb-4">
        <li>Keeping strategy aligned with project changes</li>
        <li>Balancing thoroughness with time constraints</li>
        <li>Resource availability and skill gaps</li>
        <li>Tool and technology limitations</li>
        <li>Stakeholder communication and buy-in</li>
        <li>Measuring and demonstrating value</li>
      </ul>

      <h2 className="text-2xl font-semibold mb-4">Best Practices</h2>
      <ol className="list-decimal list-inside mb-4">
        <li>Align strategy with business objectives</li>
        <li>Involve stakeholders in strategy development</li>
        <li>Use data-driven decision making</li>
        <li>Plan for scalability and maintenance</li>
        <li>Document assumptions and constraints</li>
        <li>Establish clear success criteria</li>
        <li>Regular review and adaptation</li>
      </ol>

      <h2 className="text-2xl font-semibold mb-4">Resources</h2>
      <ul className="list-disc list-inside mb-4">
        <li><a href="https://www.ministryofthetesting.com" className="text-blue-600 hover:underline">Ministry of Testing</a></li>
        <li><a href="https://www.lambdatest.com" className="text-blue-600 hover:underline">LambdaTest</a></li>
        <li>ISTQB Test Management guidelines</li>
        <li>IEEE Standard 829 for Test Documentation</li>
        <li>TMMi (Test Maturity Model Integration)</li>
      </ul>
    </div>
  )
}
