export default function Page() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Software Development Life Cycle (SDLC)</h1>

      <p className="mb-4">
        SDLC is a systematic process for planning, creating, testing, and deploying software. It ensures quality and efficiency in software development.
      </p>

      <div className="bg-blue-100 dark:bg-blue-900 border-l-4 border-blue-500 p-4 mb-4">
        <p className="font-semibold text-gray-700 dark:text-gray-300">🟦 Info:</p>
        <p>SDLC provides a framework for managing software projects from inception to delivery.</p>
      </div>

      <h2 className="text-2xl font-semibold mb-4">SDLC Phases</h2>
      <ol className="list-decimal list-inside mb-4">
        <li><strong>Planning:</strong> Define project scope, goals, and requirements</li>
        <li><strong>Analysis:</strong> Gather and analyze requirements</li>
        <li><strong>Design:</strong> Create system and software design</li>
        <li><strong>Implementation:</strong> Write and compile code</li>
        <li><strong>Testing:</strong> Verify and validate the software</li>
        <li><strong>Deployment:</strong> Release software to production</li>
        <li><strong>Maintenance:</strong> Provide ongoing support and updates</li>
      </ol>

      <div className="bg-green-100 dark:bg-green-900 border-l-4 border-green-500 p-4 mb-4">
        <p className="font-semibold text-gray-700 dark:text-gray-300">🟩 Example:</p>
        <p>In the planning phase, stakeholders define what the software should do and set timelines.</p>
      </div>

      <h2 className="text-2xl font-semibold mb-4">SDLC Models</h2>
      <ul className="list-disc list-inside mb-4">
        <li><strong>Waterfall:</strong> Linear, sequential approach</li>
        <li><strong>Agile:</strong> Iterative, flexible approach</li>
        <li><strong>Spiral:</strong> Risk-driven, iterative model</li>
        <li><strong>V-Model:</strong> Testing integrated with development</li>
        <li><strong>DevOps:</strong> Continuous integration and delivery</li>
      </ul>

      <div className="bg-yellow-100 dark:bg-yellow-900 border-l-4 border-yellow-500 p-4 mb-4">
        <p className="font-semibold text-gray-700 dark:text-gray-300">🟧 Warning:</p>
        <p>Choose the right SDLC model based on project size, complexity, and team structure.</p>
      </div>

      <h2 className="text-2xl font-semibold mb-4">QA Role in SDLC</h2>
      <p className="mb-4">
        QA is involved throughout the SDLC, not just at the end. Early involvement prevents defects and improves quality.
      </p>

      <ul className="list-disc list-inside mb-4">
        <li>Review requirements for testability</li>
        <li>Create test plans and strategies</li>
        <li>Design test cases during design phase</li>
        <li>Execute testing in implementation phase</li>
        <li>Provide feedback and reports</li>
      </ul>

      <div className="bg-purple-100 dark:bg-purple-900 border-l-4 border-purple-500 p-4 mb-4">
        <p className="font-semibold text-gray-700 dark:text-gray-300">🟪 Key Tip:</p>
        <p>Shift-left testing: Start testing early in the SDLC to catch issues sooner.</p>
      </div>

      <h2 className="text-2xl font-semibold mb-4">SDLC Standards</h2>
      <p className="mb-4">
        International standards like ISO/IEC 12207 provide guidelines for software life cycle processes.
      </p>

      <ul className="list-disc list-inside mb-4">
        <li>ISO/IEC 12207: Software life cycle processes</li>
        <li>IEEE 1074: Software life cycle processes</li>
        <li>CMMI: Capability Maturity Model Integration</li>
      </ul>

      <h2 className="text-2xl font-semibold mb-4">SDLC Diagram</h2>
      <div className="mb-4">
        <img
          src="/QA_Testing/1763369790338.jpeg"
          alt="SDLC Process Diagram"
          className="w-full max-w-2xl mx-auto rounded-lg shadow-lg"
        />
      </div>
      <pre className="bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 p-4 rounded mb-4">
        <code>{`Planning → Analysis → Design → Implementation → Testing → Deployment → Maintenance
    ↑                                                                       ↓
Requirements                                                    User Feedback`}</code>
      </pre>

      <h2 className="text-2xl font-semibold mb-4">Resources</h2>
      <ul className="list-disc list-inside mb-4">
        <li><a href="https://www.ministryofthetesting.com" className="text-blue-600 hover:underline">Ministry of Testing</a></li>
        <li><a href="https://www.lambdatest.com" className="text-blue-600 hover:underline">LambdaTest</a></li>
        <li>ISO/IEC Standards for SDLC processes</li>
      </ul>
    </div>
  )
}
