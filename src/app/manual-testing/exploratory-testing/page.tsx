export default function Page() {
  return (
    <div className="max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Exploratory Testing</h1>

      <p className="mb-6">
        Exploratory testing is a hands-on approach to software testing that emphasizes learning, test design, and test execution at the same time. It relies on the tester's skill, creativity, and experience to discover issues.
      </p>

      <div className="bg-blue-100 dark:bg-blue-900 border-l-4 border-blue-500 p-4 mb-6">
        <p className="font-semibold text-gray-900 dark:text-gray-100">🟦 Info:</p>
        <p className="text-gray-700 dark:text-gray-300">Unlike scripted testing, exploratory testing is not based on predefined test cases. Instead, testers explore the application while simultaneously designing and executing tests based on their observations.</p>
      </div>

      <h2 className="text-2xl font-semibold mb-4">What is Exploratory Testing?</h2>
      <p className="mb-4">
        Exploratory testing combines test design and test execution in real-time. Testers use their domain knowledge, experience, and creativity to explore the software and identify potential issues.
      </p>

      <div className="bg-green-100 dark:bg-green-900 border-l-4 border-green-500 p-4 mb-6">
        <p className="font-semibold text-gray-900 dark:text-gray-100">🟩 Example:</p>
        <p className="text-gray-700 dark:text-gray-300">While testing an e-commerce site, you notice that the search functionality works well, but you decide to test what happens when you enter special characters, very long search terms, or SQL injection attempts - discovering issues that scripted tests might miss.</p>
      </div>

      <h2 className="text-2xl font-semibold mb-4">Exploratory vs Scripted Testing</h2>

      <div className="grid md:grid-cols-2 gap-6 mb-6">
        <div className="border border-blue-300 dark:border-blue-600 rounded-lg p-4">
          <h3 className="text-lg font-semibold mb-2 text-blue-700 dark:text-blue-400">Exploratory Testing</h3>
          <ul className="list-disc list-inside">
            <li>Simultaneous learning and testing</li>
            <li>Tester-driven test design</li>
            <li>Flexible and adaptive</li>
            <li>Creative and investigative</li>
            <li>Time-boxed sessions</li>
          </ul>
        </div>

        <div className="border border-green-300 dark:border-green-600 rounded-lg p-4">
          <h3 className="text-lg font-semibold mb-2 text-green-700 dark:text-green-400">Scripted Testing</h3>
          <ul className="list-disc list-inside">
            <li>Pre-planned test cases</li>
            <li>Step-by-step instructions</li>
            <li>Predictable and repeatable</li>
            <li>Comprehensive coverage</li>
            <li>Measurable progress</li>
          </ul>
        </div>
      </div>

      <h2 className="text-2xl font-semibold mb-4">When to Use Exploratory Testing</h2>

      <div className="space-y-3 mb-6">
        <div className="border border-purple-300 dark:border-purple-600 rounded-lg p-3">
          <strong>Early Development:</strong> When requirements are unclear or changing rapidly
        </div>
        <div className="border border-orange-300 dark:border-orange-600 rounded-lg p-3">
          <strong>New Features:</strong> Testing unfamiliar functionality or complex user interactions
        </div>
        <div className="border border-red-300 dark:border-red-600 rounded-lg p-3">
          <strong>Risk Areas:</strong> Critical business flows or areas with high failure risk
        </div>
        <div className="border border-blue-300 dark:border-blue-600 rounded-lg p-3">
          <strong>Regression Testing:</strong> Quick smoke testing after major changes
        </div>
        <div className="border border-green-300 dark:border-green-600 rounded-lg p-3">
          <strong>User Experience:</strong> Evaluating usability, accessibility, and real-world usage
        </div>
      </div>

      <h2 className="text-2xl font-semibold mb-4">Exploratory Testing Techniques</h2>

      <div className="space-y-6 mb-6">
        <div>
          <h3 className="text-lg font-semibold mb-3">Freestyle Exploratory Testing</h3>
          <p className="mb-2">Pure exploration without specific guidelines</p>
          <ul className="list-disc list-inside text-sm">
            <li>Free-form testing based on tester intuition</li>
            <li>Good for experienced testers</li>
            <li>Risks missing important areas</li>
            <li>Difficult to document and reproduce</li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-3">Scenario-Based Testing</h3>
          <p className="mb-2">Testing based on user scenarios and workflows</p>
          <ul className="list-disc list-inside text-sm">
            <li>Follows realistic user journeys</li>
            <li>Combines multiple features</li>
            <li>Reveals integration issues</li>
            <li>Easier to document</li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-3">Guided Exploratory Testing</h3>
          <p className="mb-2">Structured exploration with charters or guidelines</p>
          <ul className="list-disc list-inside text-sm">
            <li>Uses test charters for focus</li>
            <li>Balances freedom and structure</li>
            <li>Improves coverage and reporting</li>
            <li>Teaches systematic exploration</li>
          </ul>
        </div>
      </div>

      <h2 className="text-2xl font-semibold mb-4">Test Charters</h2>
      <p className="mb-4">
        Test charters provide focus and structure for exploratory testing sessions. They define the scope, objectives, and approach for a testing session.
      </p>

      <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded mb-6">
        <h3 className="font-semibold mb-3">Test Charter Template:</h3>
        <div className="bg-white dark:bg-gray-700 p-3 rounded text-sm">
          <strong>Area:</strong> User Registration Flow<br />
          <strong>Objective:</strong> Verify registration works across different devices and browsers<br />
          <strong>Approach:</strong> Test with various data combinations, check email verification, test social login integrations<br />
          <strong>Focus Areas:</strong> Data validation, error handling, cross-browser compatibility<br />
          <strong>Time:</strong> 45 minutes<br />
          <strong>Start Point:</strong> Registration page
        </div>
      </div>

      <h2 className="text-2xl font-semibold mb-4">Exploratory Testing Session Structure</h2>

      <div className="space-y-4 mb-6">
        <div className="border border-blue-300 dark:border-blue-600 rounded-lg p-4">
          <div className="flex items-center mb-2">
            <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-bold mr-3">1</span>
            <h3 className="text-lg font-semibold text-blue-700 dark:text-blue-400">Planning (10%)</h3>
          </div>
          <ul className="list-disc list-inside text-sm">
            <li>Define test charter or mission</li>
            <li>Set time box (usually 45-90 minutes)</li>
            <li>Prepare test data and environment</li>
            <li>Review requirements and risks</li>
          </ul>
        </div>

        <div className="border border-green-300 dark:border-green-600 rounded-lg p-4">
          <div className="flex items-center mb-2">
            <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-bold mr-3">2</span>
            <h3 className="text-lg font-semibold text-green-700 dark:text-green-400">Exploration (70%)</h3>
          </div>
          <ul className="list-disc list-inside text-sm">
            <li>Execute tests while learning</li>
            <li>Follow interesting paths</li>
            <li>Document observations and issues</li>
            <li>Adapt based on findings</li>
          </ul>
        </div>

        <div className="border border-purple-300 dark:border-purple-600 rounded-lg p-4">
          <div className="flex items-center mb-2">
            <span className="bg-purple-500 text-white px-3 py-1 rounded-full text-sm font-bold mr-3">3</span>
            <h3 className="text-lg font-semibold text-purple-700 dark:text-purple-400">Debriefing (20%)</h3>
          </div>
          <ul className="list-disc list-inside text-sm">
            <li>Review findings and issues</li>
            <li>Document test coverage</li>
            <li>Identify areas for further testing</li>
            <li>Report results and recommendations</li>
          </ul>
        </div>
      </div>

      <h2 className="text-2xl font-semibold mb-4">Exploratory Testing Heuristics</h2>

      <div className="grid md:grid-cols-2 gap-6 mb-6">
        <div>
          <h3 className="text-lg font-semibold mb-3">Data Testing</h3>
          <ul className="list-disc list-inside">
            <li>Empty/null values</li>
            <li>Very large/small values</li>
            <li>Special characters</li>
            <li>Boundary values</li>
            <li>Invalid formats</li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-3">State Testing</h3>
          <ul className="list-disc list-inside">
            <li>Application restart</li>
            <li>Network interruptions</li>
            <li>Device rotation</li>
            <li>Background/foreground</li>
            <li>Memory pressure</li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-3">User Behavior</h3>
          <ul className="list-disc list-inside">
            <li>Rapid clicking/tapping</li>
            <li>Unusual navigation paths</li>
            <li>Multiple tabs/windows</li>
            <li>Copy/paste operations</li>
            <li>Keyboard shortcuts</li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-3">Environment</h3>
          <ul className="list-disc list-inside">
            <li>Different browsers/devices</li>
            <li>Various screen sizes</li>
            <li>Slow network conditions</li>
            <li>Low memory/storage</li>
            <li>Different time zones</li>
          </ul>
        </div>
      </div>

      <h2 className="text-2xl font-semibold mb-4">Tools for Exploratory Testing</h2>

      <div className="space-y-4 mb-6">
        <div className="border border-blue-300 dark:border-blue-600 rounded-lg p-4">
          <h3 className="text-lg font-semibold mb-2 text-blue-700 dark:text-blue-400">Session-Based Test Management (SBTM)</h3>
          <p className="text-gray-700 dark:text-gray-300 mb-2">Structured approach to exploratory testing with time-boxed sessions</p>
          <ul className="list-disc list-inside text-sm">
            <li>Defined session charters</li>
            <li>Time-boxed testing periods</li>
            <li>Clear objectives and scope</li>
            <li>Measurable outcomes</li>
          </ul>
        </div>

        <div className="border border-green-300 dark:border-green-600 rounded-lg p-4">
          <h3 className="text-lg font-semibold mb-2 text-green-700 dark:text-green-400">Mind Mapping Tools</h3>
          <p className="text-gray-700 dark:text-gray-300 mb-2">Visual planning and documentation of exploratory testing</p>
          <ul className="list-disc list-inside text-sm">
            <li>XMind, MindMeister</li>
            <li>Visual test planning</li>
            <li>Real-time documentation</li>
            <li>Knowledge sharing</li>
          </ul>
        </div>

        <div className="border border-purple-300 dark:border-purple-600 rounded-lg p-4">
          <h3 className="text-lg font-semibold mb-2 text-purple-700 dark:text-purple-400">Screen Recording & Note-Taking</h3>
          <p className="text-gray-700 dark:text-gray-300 mb-2">Capture testing sessions for review and reporting</p>
          <ul className="list-disc list-inside text-sm">
            <li>Loom, OBS Studio</li>
            <li>Evernote, OneNote</li>
            <li>Bug tracking integration</li>
            <li>Evidence collection</li>
          </ul>
        </div>
      </div>

      <div className="bg-yellow-100 dark:bg-yellow-900 border-l-4 border-yellow-500 p-4 mb-6">
        <p className="font-semibold text-gray-900 dark:text-gray-100">🟧 Warning:</p>
        <p className="text-gray-700 dark:text-gray-300">Exploratory testing can be subjective and difficult to measure. Always combine it with scripted testing for comprehensive coverage and maintain good documentation for reproducibility.</p>
      </div>

      <h2 className="text-2xl font-semibold mb-4">Measuring Exploratory Testing</h2>

      <div className="bg-white dark:bg-gray-700 p-4 rounded mb-6">
        <h3 className="font-semibold mb-3">Key Metrics:</h3>
        <ul className="space-y-2">
          <li><strong>Session Duration:</strong> Time spent on each exploratory session</li>
          <li><strong>Bugs Found:</strong> Number and severity of issues discovered</li>
          <li><strong>Test Coverage:</strong> Areas explored and features tested</li>
          <li><strong>Charter Completion:</strong> How well session objectives were met</li>
          <li><strong>Learning Outcomes:</strong> New insights and knowledge gained</li>
        </ul>
      </div>

      <div className="bg-purple-100 dark:bg-purple-900 border-l-4 border-purple-500 p-4 mb-6">
        <p className="font-semibold text-gray-900 dark:text-gray-100">🟪 Key Tip:</p>
        <p className="text-gray-700 dark:text-gray-300">Exploratory testing is most effective when performed by experienced testers who understand both the technology and user behavior. Use it to complement, not replace, scripted testing.</p>
      </div>

      <h2 className="text-2xl font-semibold mb-4">Exploratory Testing in Agile</h2>

      <div className="grid md:grid-cols-2 gap-6 mb-6">
        <div className="border border-blue-300 dark:border-blue-600 rounded-lg p-4">
          <h3 className="text-lg font-semibold mb-2 text-blue-700 dark:text-blue-400">Sprint Planning</h3>
          <ul className="list-disc list-inside text-sm">
            <li>Identify risk areas</li>
            <li>Plan exploratory sessions</li>
            <li>Allocate time in sprint</li>
            <li>Define success criteria</li>
          </ul>
        </div>

        <div className="border border-green-300 dark:border-green-600 rounded-lg p-4">
          <h3 className="text-lg font-semibold mb-2 text-green-700 dark:text-green-400">Daily Activities</h3>
          <ul className="list-disc list-inside text-sm">
            <li>Quick exploratory checks</li>
            <li>Investigate daily builds</li>
            <li>Support development team</li>
            <li>Validate user stories</li>
          </ul>
        </div>

        <div className="border border-purple-300 dark:border-purple-600 rounded-lg p-4">
          <h3 className="text-lg font-semibold mb-2 text-purple-700 dark:text-purple-400">Sprint Review</h3>
          <ul className="list-disc list-inside text-sm">
            <li>Demonstrate exploratory findings</li>
            <li>Share testing insights</li>
            <li>Discuss usability issues</li>
            <li>Recommend improvements</li>
          </ul>
        </div>

        <div className="border border-orange-300 dark:border-orange-600 rounded-lg p-4">
          <h3 className="text-lg font-semibold mb-2 text-orange-700 dark:text-orange-400">Retrospectives</h3>
          <ul className="list-disc list-inside text-sm">
            <li>Review testing effectiveness</li>
            <li>Identify improvement areas</li>
            <li>Share successful techniques</li>
            <li>Plan next sprint testing</li>
          </ul>
        </div>
      </div>

      <h2 className="text-2xl font-semibold mb-4">Common Interview Questions</h2>
      <ul className="list-disc list-inside mb-6">
        <li>What is exploratory testing and how is it different from scripted testing?</li>
        <li>When would you choose exploratory testing over scripted testing?</li>
        <li>How do you structure an exploratory testing session?</li>
        <li>What are test charters and how do you use them?</li>
        <li>How do you measure the effectiveness of exploratory testing?</li>
      </ul>

      <h2 className="text-2xl font-semibold mb-4">Best Practices</h2>

      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <h3 className="text-lg font-semibold mb-3">Planning</h3>
          <ul className="list-disc list-inside">
            <li>Define clear objectives</li>
            <li>Use time-boxed sessions</li>
            <li>Prepare test data in advance</li>
            <li>Review requirements first</li>
            <li>Choose appropriate tools</li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-3">Execution</h3>
          <ul className="list-disc list-inside">
            <li>Document findings immediately</li>
            <li>Follow interesting leads</li>
            <li>Test from user perspective</li>
            <li>Use different devices/browsers</li>
            <li>Combine with other techniques</li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-3">Reporting</h3>
          <ul className="list-disc list-inside">
            <li>Record detailed bug reports</li>
            <li>Include screenshots/videos</li>
            <li>Document test coverage</li>
            <li>Share insights with team</li>
            <li>Recommend improvements</li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-3">Skills Development</h3>
          <ul className="list-disc list-inside">
            <li>Learn domain knowledge</li>
            <li>Study user behavior</li>
            <li>Practice different techniques</li>
            <li>Review past findings</li>
            <li>Share knowledge with peers</li>
          </ul>
        </div>
      </div>
    </div>
  )
}
