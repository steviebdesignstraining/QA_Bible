export default function Page() {
  return (
    <div className="max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Mindmaps in Manual Testing</h1>

      <p className="mb-6">
        Mindmaps are powerful visual tools that help QA professionals organize, understand, and communicate complex testing concepts. They provide a structured way to brainstorm, plan test strategies, and ensure comprehensive test coverage.
      </p>

      <div className="bg-blue-100 dark:bg-blue-900 border-l-4 border-blue-500 p-4 mb-6">
        <p className="font-semibold text-gray-900 dark:text-gray-100">🟦 Info:</p>
        <p className="text-gray-700 dark:text-gray-300">Mindmaps use a radial structure with a central idea and branches representing related concepts. In testing, they help visualize test scenarios, identify coverage gaps, and create systematic testing approaches.</p>
      </div>

      <h2 className="text-2xl font-semibold mb-4">What is a Mindmap?</h2>
      <p className="mb-4">
        A mindmap is a diagram used to visually organize information, often created around a single concept drawn as an image in the center to which associated representations of ideas such as images, words and parts of words are added. Major ideas are connected directly to the central concept, and other ideas branch out from those.
      </p>

      <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded mb-6">
        <h3 className="font-semibold mb-3">Basic Mindmap Structure:</h3>
        <pre className="text-sm font-mono">
          <code>{`                    Central Idea
                           │
            ┌──────────────┼──────────────┐
            │                             │
      Main Branch 1                  Main Branch 2
            │                             │
    ┌───────┼───────┐             ┌───────┼───────┐
    │       │       │             │       │       │
Sub-branch Sub-branch Sub-branch Sub-branch Sub-branch Sub-branch`}</code>
        </pre>
      </div>

      <h2 className="text-2xl font-semibold mb-4">Mindmaps in Testing</h2>

      <div className="grid md:grid-cols-2 gap-6 mb-6">
        <div className="border border-blue-300 dark:border-blue-600 rounded-lg p-4">
          <h3 className="text-lg font-semibold mb-2 text-blue-700 dark:text-blue-400">Test Planning</h3>
          <ul className="list-disc list-inside text-sm">
            <li>Identify test objectives and scope</li>
            <li>Break down features into testable components</li>
            <li>Define test scenarios and conditions</li>
            <li>Assign priorities and resources</li>
          </ul>
        </div>

        <div className="border border-green-300 dark:border-green-600 rounded-lg p-4">
          <h3 className="text-lg font-semibold mb-2 text-green-700 dark:text-green-400">Test Case Design</h3>
          <ul className="list-disc list-inside text-sm">
            <li>Organize test cases by functionality</li>
            <li>Identify positive and negative scenarios</li>
            <li>Map test cases to requirements</li>
            <li>Ensure comprehensive coverage</li>
          </ul>
        </div>
      </div>

      <h2 className="text-2xl font-semibold mb-4">Creating Effective Mindmaps</h2>

      <div className="space-y-4 mb-6">
        <div className="border border-purple-300 dark:border-purple-600 rounded-lg p-4">
          <div className="flex items-center mb-2">
            <span className="bg-purple-500 text-white px-3 py-1 rounded-full text-sm font-bold mr-3">1</span>
            <h3 className="text-lg font-semibold text-purple-700 dark:text-purple-400">Start with a Central Idea</h3>
          </div>
          <p className="text-sm">Place the main testing concept or feature in the center. This could be {`"`}Login Functionality{`"`}, {`"`}E-commerce Checkout{`"`}, or {`"`}User Registration{`"`}.</p>
        </div>

        <div className="border border-blue-300 dark:border-blue-600 rounded-lg p-4">
          <div className="flex items-center mb-2">
            <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-bold mr-3">2</span>
            <h3 className="text-lg font-semibold text-blue-700 dark:text-blue-400">Add Main Branches</h3>
          </div>
          <p className="text-sm">Create primary branches for major testing categories: Functional, UI, Performance, Security, etc.</p>
        </div>

        <div className="border border-green-300 dark:border-green-600 rounded-lg p-4">
          <div className="flex items-center mb-2">
            <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-bold mr-3">3</span>
            <h3 className="text-lg font-semibold text-green-700 dark:text-green-400">Branch Out Sub-topics</h3>
          </div>
          <p className="text-sm">From each main branch, add sub-branches for specific test scenarios, edge cases, and validation points.</p>
        </div>

        <div className="border border-orange-300 dark:border-orange-600 rounded-lg p-4">
          <div className="flex items-center mb-2">
            <span className="bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-bold mr-3">4</span>
            <h3 className="text-lg font-semibold text-orange-700 dark:text-orange-400">Add Details and Keywords</h3>
          </div>
          <p className="text-sm">Include specific test data, expected results, and keywords that trigger ideas for additional test cases.</p>
        </div>
      </div>

      <h2 className="text-2xl font-semibold mb-4">Example: Login Functionality Mindmap</h2>

      <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded mb-6">
        <h3 className="font-semibold mb-3">Login Testing Mindmap:</h3>
        <pre className="text-sm font-mono">
          <code>{`                    Login Functionality
                           │
            ┌──────────────┼──────────────┐
            │                             │
      Valid Credentials              Invalid Credentials
            │                             │
    ┌───────┼───────┐             ┌───────┼───────┐
    │       │       │             │       │       │
Success  Remember Me   Wrong Password  Wrong Username
    │       │       │             │       │       │
Redirect  Checkbox   Error Message   Error Message
 to Home   Works     Displayed       Displayed`}</code>
        </pre>
      </div>

      <h2 className="text-2xl font-semibold mb-4">Benefits of Using Mindmaps</h2>

      <div className="grid md:grid-cols-2 gap-6 mb-6">
        <div>
          <h3 className="text-lg font-semibold mb-3">For Testers</h3>
          <ul className="list-disc list-inside">
            <li>Visual organization of complex ideas</li>
            <li>Improved memory retention</li>
            <li>Creative brainstorming tool</li>
            <li>Quick identification of gaps</li>
            <li>Better test coverage planning</li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-3">For Teams</h3>
          <ul className="list-disc list-inside">
            <li>Clear communication of test strategies</li>
            <li>Collaborative test planning</li>
            <li>Knowledge sharing and documentation</li>
            <li>Consistent testing approaches</li>
            <li>Easier onboarding of new team members</li>
          </ul>
        </div>
      </div>

      <h2 className="text-2xl font-semibold mb-4">Tools for Creating Mindmaps</h2>

      <div className="grid md:grid-cols-3 gap-4 mb-6">
        <div className="border border-gray-300 dark:border-gray-600 rounded-lg p-4">
          <h3 className="font-semibold mb-2">Free Tools</h3>
          <ul className="list-disc list-inside text-sm">
            <li>MindMeister (limited free)</li>
            <li>FreeMind</li>
            <li>XMind (free version)</li>
            <li>Draw.io (diagrams)</li>
          </ul>
        </div>

        <div className="border border-gray-300 dark:border-gray-600 rounded-lg p-4">
          <h3 className="font-semibold mb-2">Paid Tools</h3>
          <ul className="list-disc list-inside text-sm">
            <li>MindMeister Pro</li>
            <li>iMindMap</li>
            <li>MindManager</li>
            <li>Lucidchart</li>
          </ul>
        </div>

        <div className="border border-gray-300 dark:border-gray-600 rounded-lg p-4">
          <h3 className="font-semibold mb-2">Manual Methods</h3>
          <ul className="list-disc list-inside text-sm">
            <li>Paper and pen</li>
            <li>Whiteboard</li>
            <li>PowerPoint</li>
            <li>Google Drawings</li>
          </ul>
        </div>
      </div>

      <h2 className="text-2xl font-semibold mb-4">Best Practices</h2>

      <div className="bg-green-100 dark:bg-green-900 border-l-4 border-green-500 p-4 mb-6">
        <p className="font-semibold text-gray-900 dark:text-gray-100">🟩 Tips for Effective Mindmaps:</p>
        <ul className="list-disc list-inside text-gray-700 dark:text-gray-300">
          <li>Use colors to categorize different types of information</li>
          <li>Keep branches to 5-7 sub-branches maximum</li>
          <li>Use keywords and short phrases instead of long sentences</li>
          <li>Include images and icons to enhance visual appeal</li>
          <li>Review and update mindmaps as requirements change</li>
          <li>Share mindmaps with stakeholders for feedback</li>
        </ul>
      </div>

      <h2 className="text-2xl font-semibold mb-4">Common Use Cases</h2>

      <div className="space-y-4">
        <div className="border border-blue-300 dark:border-blue-600 rounded-lg p-4">
          <h3 className="font-semibold mb-2">Feature Testing</h3>
          <p className="text-sm">Map out all aspects of a new feature, including user flows, edge cases, and integration points.</p>
        </div>

        <div className="border border-green-300 dark:border-green-600 rounded-lg p-4">
          <h3 className="font-semibold mb-2">Regression Testing</h3>
          <p className="text-sm">Organize impacted areas and create systematic regression test suites.</p>
        </div>

        <div className="border border-purple-300 dark:border-purple-600 rounded-lg p-4">
          <h3 className="font-semibold mb-2">Exploratory Testing</h3>
          <p className="text-sm">Brainstorm test charters and areas of interest for structured exploration.</p>
        </div>

        <div className="border border-orange-300 dark:border-orange-600 rounded-lg p-4">
          <h3 className="font-semibold mb-2">Bug Investigation</h3>
          <p className="text-sm">Map out bug reproduction steps, root cause analysis, and impact assessment.</p>
        </div>
      </div>
    </div>
  )
}
