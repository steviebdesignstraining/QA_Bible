export default function Page() {
  return (
    <div className="max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Manual Testing Interview Q&A</h1>

      <p className="mb-6">
        Prepare for your manual testing interviews with comprehensive questions and detailed answers covering fundamental concepts, testing techniques, methodologies, and real-world scenarios.
      </p>

      <div className="bg-blue-100 dark:bg-blue-900 border-l-4 border-blue-500 p-4 mb-6">
        <p className="font-semibold text-gray-900 dark:text-gray-100">🟦 Info:</p>
        <p className="text-gray-700 dark:text-gray-300">This guide covers essential manual testing interview questions categorized by difficulty level and topic area. Use these to assess your knowledge and prepare thoughtful responses.</p>
      </div>

      <h2 className="text-2xl font-semibold mb-4">Basic Concepts</h2>

      <div className="space-y-6 mb-8">
        <div className="border border-gray-300 dark:border-gray-600 rounded-lg p-4">
          <h3 className="font-semibold text-lg mb-2">Q: What is manual testing?</h3>
          <p className="text-gray-700 dark:text-gray-300"><strong>A:</strong> Manual testing is the process of testing software applications manually without using any automated tools. Testers execute test cases, compare actual results with expected results, and report bugs. It involves human observation, exploration, and validation of software functionality, usability, and performance.</p>
        </div>

        <div className="border border-gray-300 dark:border-gray-600 rounded-lg p-4">
          <h3 className="font-semibold text-lg mb-2">Q: What are the advantages of manual testing?</h3>
          <p className="text-gray-700 dark:text-gray-300"><strong>A:</strong> Manual testing offers several advantages: it allows for exploratory testing and human intuition, is cost-effective for small projects, provides immediate feedback, is flexible for changing requirements, and can catch usability issues that automated tests might miss. It also helps understand user perspectives and real-world scenarios.</p>
        </div>

        <div className="border border-gray-300 dark:border-gray-600 rounded-lg p-4">
          <h3 className="font-semibold text-lg mb-2">Q: What are the disadvantages of manual testing?</h3>
          <p className="text-gray-700 dark:text-gray-300"><strong>A:</strong> Manual testing can be time-consuming, prone to human error, difficult to repeat consistently, not suitable for large-scale regression testing, and expensive for long-term maintenance. It also cannot handle performance testing under heavy loads and may miss subtle bugs that occur under specific conditions.</p>
        </div>

        <div className="border border-gray-300 dark:border-gray-600 rounded-lg p-4">
          <h3 className="font-semibold text-lg mb-2">Q: When should you choose manual testing over automation?</h3>
          <p className="text-gray-700 dark:text-gray-300"><strong>A:</strong> Choose manual testing for: ad-hoc or exploratory testing, usability testing, initial testing of new features, small projects with short timelines, applications with frequently changing UI, and when you need human judgment for complex scenarios. Manual testing is also preferable when automation infrastructure is not available or cost-effective.</p>
        </div>
      </div>

      <h2 className="text-2xl font-semibold mb-4">Testing Types & Levels</h2>

      <div className="space-y-6 mb-8">
        <div className="border border-gray-300 dark:border-gray-600 rounded-lg p-4">
          <h3 className="font-semibold text-lg mb-2">Q: Explain the different levels of testing.</h3>
          <p className="text-gray-700 dark:text-gray-300"><strong>A:</strong> Testing levels include:</p>
          <ul className="list-disc list-inside mt-2 text-gray-700 dark:text-gray-300">
            <li><strong>Unit Testing:</strong> Tests individual components or functions</li>
            <li><strong>Integration Testing:</strong> Tests interaction between integrated units</li>
            <li><strong>System Testing:</strong> Tests the entire system as a whole</li>
            <li><strong>Acceptance Testing:</strong> Tests from end-user perspective (Alpha/Beta/UAT)</li>
          </ul>
        </div>

        <div className="border border-gray-300 dark:border-gray-600 rounded-lg p-4">
          <h3 className="font-semibold text-lg mb-2">Q: What is the difference between functional and non-functional testing?</h3>
          <p className="text-gray-700 dark:text-gray-300"><strong>A:</strong> Functional testing verifies that the software works as specified, focusing on features and functionality. Non-functional testing evaluates how the system performs, including performance, security, usability, compatibility, and reliability. Functional testing answers {`"`}what the system does{`"`}, while non-functional testing answers {`"`}how well it does it{`"`}.</p>
        </div>

        <div className="border border-gray-300 dark:border-gray-600 rounded-lg p-4">
          <h3 className="font-semibold text-lg mb-2">Q: Explain smoke testing vs sanity testing.</h3>
          <p className="text-gray-700 dark:text-gray-300"><strong>A:</strong> Smoke testing is a preliminary test to check if the build is stable enough for further testing. It verifies basic functionality and rejects obviously broken builds. Sanity testing is a narrow regression test to verify specific functionality after bug fixes. Smoke testing is broader and done on new builds, while sanity testing is focused and done on existing stable builds.</p>
        </div>
      </div>

      <h2 className="text-2xl font-semibold mb-4">Bug Tracking & Reporting</h2>

      <div className="space-y-6 mb-8">
        <div className="border border-gray-300 dark:border-gray-600 rounded-lg p-4">
          <h3 className="font-semibold text-lg mb-2">Q: What information should be included in a good bug report?</h3>
          <p className="text-gray-700 dark:text-gray-300"><strong>A:</strong> A good bug report should include:</p>
          <ul className="list-disc list-inside mt-2 text-gray-700 dark:text-gray-300">
            <li>Title/Summary (clear and concise)</li>
            <li>Steps to reproduce</li>
            <li>Expected vs actual results</li>
            <li>Environment details (OS, browser, device)</li>
            <li>Severity and priority</li>
            <li>Screenshots or videos</li>
            <li>Test data used</li>
            <li>Frequency of occurrence</li>
          </ul>
        </div>

        <div className="border border-gray-300 dark:border-gray-600 rounded-lg p-4">
          <h3 className="font-semibold text-lg mb-2">Q: Explain severity vs priority with examples.</h3>
          <p className="text-gray-700 dark:text-gray-300"><strong>A:</strong> Severity indicates the impact of the bug on the system, while priority indicates how quickly it should be fixed. For example:</p>
          <ul className="list-disc list-inside mt-2 text-gray-700 dark:text-gray-300">
            <li><strong>High Severity, High Priority:</strong> Application crashes on login (critical functionality broken)</li>
            <li><strong>High Severity, Low Priority:</strong> Minor spelling error on an internal admin page</li>
            <li><strong>Low Severity, High Priority:</strong> Company logo displays incorrectly on homepage</li>
          </ul>
        </div>

        <div className="border border-gray-300 dark:border-gray-600 rounded-lg p-4">
          <h3 className="font-semibold text-lg mb-2">Q: How do you handle a bug that developers say is not reproducible?</h3>
          <p className="text-gray-700 dark:text-gray-300"><strong>A:</strong> When a bug is not reproducible:</p>
          <ul className="list-disc list-inside mt-2 text-gray-700 dark:text-gray-300">
            <li>Double-check your reproduction steps</li>
            <li>Provide more detailed environment information</li>
            <li>Try reproducing on different environments</li>
            <li>Include screenshots, videos, or logs</li>
            <li>Check if it's intermittent or timing-related</li>
            <li>Work with developers to understand the issue better</li>
            <li>Consider if it might be a configuration or data issue</li>
          </ul>
        </div>
      </div>

      <h2 className="text-2xl font-semibold mb-4">Test Case Design</h2>

      <div className="space-y-6 mb-8">
        <div className="border border-gray-300 dark:border-gray-600 rounded-lg p-4">
          <h3 className="font-semibold text-lg mb-2">Q: What are the components of a good test case?</h3>
          <p className="text-gray-700 dark:text-gray-300"><strong>A:</strong> A good test case includes:</p>
          <ul className="list-disc list-inside mt-2 text-gray-700 dark:text-gray-300">
            <li>Test Case ID and Title</li>
            <li>Objective/Purpose</li>
            <li>Preconditions</li>
            <li>Test Steps (clear and detailed)</li>
            <li>Expected Results</li>
            <li>Actual Results field</li>
            <li>Pass/Fail criteria</li>
            <li>Priority and Severity</li>
          </ul>
        </div>

        <div className="border border-gray-300 dark:border-gray-600 rounded-lg p-4">
          <h3 className="font-semibold text-lg mb-2">Q: Explain equivalence partitioning with an example.</h3>
          <p className="text-gray-700 dark:text-gray-300"><strong>A:</strong> Equivalence partitioning divides input data into valid and invalid partitions. For a login form accepting ages 18-65:</p>
          <ul className="list-disc list-inside mt-2 text-gray-700 dark:text-gray-300">
            <li><strong>Valid Partition:</strong> Ages 18-65 (test with 25)</li>
            <li><strong>Invalid Partition:</strong> Ages {`<`} 18 (test with 15)</li>
            <li><strong>Invalid Partition:</strong> Ages {`>`} 65 (test with 70)</li>
            <li><strong>Invalid Partition:</strong> Non-numeric input (test with {`"`}abc{`"`})</li>
          </ul>
          <p className="mt-2 text-gray-700 dark:text-gray-300">This approach ensures you test representative values from each class rather than every possible input.</p>
        </div>

        <div className="border border-gray-300 dark:border-gray-600 rounded-lg p-4">
          <h3 className="font-semibold text-lg mb-2">Q: What is boundary value analysis?</h3>
          <p className="text-gray-700 dark:text-gray-300"><strong>A:</strong> Boundary value analysis focuses on testing the boundaries between equivalence partitions. For the age field example (18-65), you would test:</p>
          <ul className="list-disc list-inside mt-2 text-gray-700 dark:text-gray-300">
            <li>17 (just below minimum), 18 (minimum), 19 (just above minimum)</li>
            <li>64 (just below maximum), 65 (maximum), 66 (just above maximum)</li>
          </ul>
          <p className="mt-2 text-gray-700 dark:text-gray-300">This catches off-by-one errors and boundary condition bugs that equivalence partitioning might miss.</p>
        </div>
      </div>

      <h2 className="text-2xl font-semibold mb-4">Exploratory Testing</h2>

      <div className="space-y-6 mb-8">
        <div className="border border-gray-300 dark:border-gray-600 rounded-lg p-4">
          <h3 className="font-semibold text-lg mb-2">Q: What is exploratory testing?</h3>
          <p className="text-gray-700 dark:text-gray-300"><strong>A:</strong> Exploratory testing is a simultaneous learning, test design, and test execution approach. Testers explore the application without predefined test cases, using their experience, creativity, and domain knowledge to discover bugs. It involves learning about the software while designing and executing tests in real-time.</p>
        </div>

        <div className="border border-gray-300 dark:border-gray-600 rounded-lg p-4">
          <h3 className="font-semibold text-lg mb-2">Q: How do you perform exploratory testing effectively?</h3>
          <p className="text-gray-700 dark:text-gray-300"><strong>A:</strong> Effective exploratory testing involves:</p>
          <ul className="list-disc list-inside mt-2 text-gray-700 dark:text-gray-300">
            <li>Define a test charter (mission, scope, approach)</li>
            <li>Use session-based test management</li>
            <li>Document findings in real-time</li>
            <li>Apply heuristics and mnemonics (like SFDPO - Structure, Function, Data, Platform, Operations)</li>
            <li>Use mindmaps to organize exploration</li>
            <li>Combine with experienced testers</li>
            <li>Review and debrief findings</li>
          </ul>
        </div>

        <div className="border border-gray-300 dark:border-gray-600 rounded-lg p-4">
          <h3 className="font-semibold text-lg mb-2">Q: What is the difference between scripted and exploratory testing?</h3>
          <p className="text-gray-700 dark:text-gray-300"><strong>A:</strong> Scripted testing follows predefined test cases with specific steps and expected results. Exploratory testing is unscripted, relying on tester experience and creativity. Scripted testing ensures consistency and complete coverage, while exploratory testing finds unexpected bugs and usability issues. Both approaches complement each other in a comprehensive testing strategy.</p>
        </div>
      </div>

      <h2 className="text-2xl font-semibold mb-4">Usability & Accessibility</h2>

      <div className="space-y-6 mb-8">
        <div className="border border-gray-300 dark:border-gray-600 rounded-lg p-4">
          <h3 className="font-semibold text-lg mb-2">Q: What is usability testing?</h3>
          <p className="text-gray-700 dark:text-gray-300"><strong>A:</strong> Usability testing evaluates how easily users can accomplish tasks with the software. It focuses on user experience, intuitiveness, and efficiency. Testers observe real users performing tasks and identify pain points, confusing elements, and areas for improvement. Key aspects include learnability, efficiency, memorability, errors, and satisfaction.</p>
        </div>

        <div className="border border-gray-300 dark:border-gray-600 rounded-lg p-4">
          <h3 className="font-semibold text-lg mb-2">Q: How do you conduct usability testing?</h3>
          <p className="text-gray-700 dark:text-gray-300"><strong>A:</strong> Usability testing involves:</p>
          <ul className="list-disc list-inside mt-2 text-gray-700 dark:text-gray-300">
            <li>Define target user personas and scenarios</li>
            <li>Recruit representative users</li>
            <li>Create realistic tasks for users to perform</li>
            <li>Observe users without interfering</li>
            <li>Record sessions and take notes</li>
            <li>Analyze findings and provide recommendations</li>
            <li>Use metrics like task completion rate, time, and error rate</li>
          </ul>
        </div>

        <div className="border border-gray-300 dark:border-gray-600 rounded-lg p-4">
          <h3 className="font-semibold text-lg mb-2">Q: What is accessibility testing?</h3>
          <p className="text-gray-700 dark:text-gray-300"><strong>A:</strong> Accessibility testing ensures software is usable by people with disabilities. It covers visual, motor, auditory, and cognitive impairments. Key areas include keyboard navigation, screen reader compatibility, color contrast, alt text for images, and compliance with standards like WCAG (Web Content Accessibility Guidelines). Testing involves assistive technologies and manual verification of accessibility features.</p>
        </div>
      </div>

      <h2 className="text-2xl font-semibold mb-4">Testing Process & Best Practices</h2>

      <div className="space-y-6 mb-8">
        <div className="border border-gray-300 dark:border-gray-600 rounded-lg p-4">
          <h3 className="font-semibold text-lg mb-2">Q: Describe your testing process for a new feature.</h3>
          <p className="text-gray-700 dark:text-gray-300"><strong>A:</strong> My testing process includes:</p>
          <ul className="list-disc list-inside mt-2 text-gray-700 dark:text-gray-300">
            <li>Review requirements and create test scenarios</li>
            <li>Design test cases using appropriate techniques</li>
            <li>Set up test environment and data</li>
            <li>Execute functional tests</li>
            <li>Perform exploratory testing</li>
            <li>Test edge cases and error conditions</li>
            <li>Verify integration with existing features</li>
            <li>Document and report bugs</li>
            <li>Retest fixes and perform regression testing</li>
          </ul>
        </div>

        <div className="border border-gray-300 dark:border-gray-600 rounded-lg p-4">
          <h3 className="font-semibold text-lg mb-2">Q: How do you ensure test coverage?</h3>
          <p className="text-gray-700 dark:text-gray-300"><strong>A:</strong> Ensuring test coverage involves:</p>
          <ul className="list-disc list-inside mt-2 text-gray-700 dark:text-gray-300">
            <li>Mapping requirements to test cases</li>
            <li>Using coverage matrices</li>
            <li>Applying multiple test design techniques</li>
            <li>Reviewing code and functionality</li>
            <li>Considering positive, negative, and edge cases</li>
            <li>Regular coverage analysis and gap identification</li>
            <li>Combining scripted and exploratory testing</li>
          </ul>
        </div>

        <div className="border border-gray-300 dark:border-gray-600 rounded-lg p-4">
          <h3 className="font-semibold text-lg mb-2">Q: How do you handle changing requirements during testing?</h3>
          <p className="text-gray-700 dark:text-gray-300"><strong>A:</strong> When requirements change:</p>
          <ul className="list-disc list-inside mt-2 text-gray-700 dark:text-gray-300">
            <li>Assess impact on existing test cases</li>
            <li>Update affected test cases and scenarios</li>
            <li>Communicate changes to the team</li>
            <li>Reprioritize testing efforts</li>
            <li>Focus on high-risk areas first</li>
            <li>Maintain traceability between requirements and tests</li>
            <li>Document change rationale and testing approach</li>
          </ul>
        </div>
      </div>

      <div className="bg-green-100 dark:bg-green-900 border-l-4 border-green-500 p-4 mb-6">
        <p className="font-semibold text-gray-900 dark:text-gray-100">🟩 Interview Tips:</p>
        <ul className="list-disc list-inside text-gray-700 dark:text-gray-300">
          <li>Use the STAR method (Situation, Task, Action, Result) for behavioral questions</li>
          <li>Provide specific examples from your experience</li>
          <li>Show enthusiasm for testing and continuous learning</li>
          <li>Demonstrate problem-solving and analytical thinking</li>
          <li>Ask thoughtful questions about their testing process and challenges</li>
          <li>Be honest about your experience level and willingness to learn</li>
        </ul>
      </div>
    </div>
  )
}
