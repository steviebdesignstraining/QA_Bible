export default function Page() {
  return (
    <div className="max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Manual Testing Scenario Case Studies</h1>

      <p className="mb-6">
        Real-world examples of manual testing scenarios across different industries and applications. Each case study demonstrates practical testing approaches and lessons learned.
      </p>

      <div className="space-y-8">
        {/* Case Study 1 */}
        <div className="border border-gray-300 dark:border-gray-600 rounded-lg p-6">
          <h2 className="text-2xl font-semibold mb-3 text-blue-600 dark:text-blue-400">Case Study 1: TikTok Mobile App Testing</h2>
          <div className="bg-blue-100 dark:bg-blue-900 border-l-4 border-blue-500 p-4 mb-4">
            <p className="font-semibold text-gray-900 dark:text-gray-100">🟦 Context:</p>
            <p className="text-gray-700 dark:text-gray-300">As a Manual Mobile Tester at TikTok, I was responsible for testing both iOS and Android versions of the app. The focus was on exploratory testing based on acceptance criteria to ensure quality across platforms.</p>
          </div>

          <h3 className="text-xl font-semibold mb-2">Testing Approach:</h3>
          <ul className="list-disc list-inside mb-4">
            <li>Exploratory testing based on acceptance criteria</li>
            <li>Functional and behavioral regression/smoke testing</li>
            <li>Cross-platform testing on iOS and Android devices</li>
            <li>Testing video upload, playback, and social features</li>
          </ul>

          <h3 className="text-xl font-semibold mb-2">Key Findings:</h3>
          <ul className="list-disc list-inside mb-4">
            <li>Video compression issues affecting quality on slower networks</li>
            <li>Push notification inconsistencies between platforms</li>
            <li>Memory leaks during long video recording sessions</li>
            <li>Accessibility issues with screen reader compatibility</li>
          </ul>

          <div className="bg-green-100 dark:bg-green-900 border-l-4 border-green-500 p-4 mb-4">
            <p className="font-semibold text-gray-900 dark:text-gray-100">🟩 Results:</p>
            <p className="text-gray-700 dark:text-gray-300">Identified 15 critical bugs before release, including a memory leak that could crash the app. App stability improved significantly, contributing to TikTok's platform reliability.</p>
          </div>

          <div className="bg-purple-100 dark:bg-purple-900 border-l-4 border-purple-500 p-4">
            <p className="font-semibold text-gray-900 dark:text-gray-100">🟪 Lessons Learned:</p>
            <p className="text-gray-700 dark:text-gray-300">Mobile testing requires deep understanding of platform-specific behaviors. Exploratory testing is essential for discovering edge cases that scripted testing might miss.</p>
          </div>
        </div>

        {/* Case Study 2 */}
        <div className="border border-gray-300 dark:border-gray-600 rounded-lg p-6">
          <h2 className="text-2xl font-semibold mb-3 text-blue-600 dark:text-blue-400">Case Study 2: Tempcover Car Insurance App</h2>
          <div className="bg-blue-100 dark:bg-blue-900 border-l-4 border-blue-500 p-4 mb-4">
            <p className="font-semibold text-gray-900 dark:text-gray-100">🟦 Context:</p>
            <p className="text-gray-700 dark:text-gray-300">At Tempcover, I was responsible for permanent automation/manual testing of their new car insurance mobile app using Detox and Cucumber. The app needed comprehensive testing across iOS and Android platforms.</p>
          </div>

          <h3 className="text-xl font-semibold mb-2">Testing Approach:</h3>
          <ul className="list-disc list-inside mb-4">
            <li>Manual testing of insurance quote calculations</li>
            <li>Policy purchase flow validation</li>
            <li>Document upload and verification testing</li>
            <li>Cross-platform compatibility testing</li>
          </ul>

          <h3 className="text-xl font-semibold mb-2">Key Findings:</h3>
          <ul className="list-disc list-inside mb-4">
            <li>Premium calculation errors in edge cases</li>
            <li>Document upload failures on slower networks</li>
            <li>Inconsistent UI behavior between platforms</li>
            <li>Payment processing integration issues</li>
          </ul>

          <div className="bg-green-100 dark:bg-green-900 border-l-4 border-green-500 p-4 mb-4">
            <p className="font-semibold text-gray-900 dark:text-gray-100">🟩 Results:</p>
            <p className="text-gray-700 dark:text-gray-300">App launch was successful with zero critical production bugs. Customer acquisition improved by 40% due to reliable quote and purchase experience.</p>
          </div>

          <div className="bg-purple-100 dark:bg-purple-900 border-l-4 border-purple-500 p-4">
            <p className="font-semibold text-gray-900 dark:text-gray-100">🟪 Lessons Learned:</p>
            <p className="text-gray-700 dark:text-gray-300">Insurance applications require meticulous attention to calculation accuracy. Manual testing of complex business logic is crucial for financial applications.</p>
          </div>
        </div>

        {/* Case Study 3 */}
        <div className="border border-gray-300 dark:border-gray-600 rounded-lg p-6">
          <h2 className="text-2xl font-semibold mb-3 text-blue-600 dark:text-blue-400">Case Study 3: Banking Mobile App</h2>
          <div className="bg-blue-100 dark:bg-blue-900 border-l-4 border-blue-500 p-4 mb-4">
            <p className="font-semibold text-gray-900 dark:text-gray-100">🟦 Context:</p>
            <p className="text-gray-700 dark:text-gray-300">A bank's mobile app had frequent crashes during peak usage times. The QA team investigated performance and stability issues under load.</p>
          </div>

          <h3 className="text-xl font-semibold mb-2">Testing Approach:</h3>
          <ul className="list-disc list-inside mb-4">
            <li>Load testing with multiple concurrent users</li>
            <li>Memory leak analysis</li>
            <li>Network connectivity testing</li>
            <li>Device compatibility across iOS/Android versions</li>
          </ul>

          <h3 className="text-xl font-semibold mb-2">Key Findings:</h3>
          <ul className="list-disc list-inside mb-4">
            <li>Memory leaks during long sessions</li>
            <li>Poor performance on older devices</li>
            <li>Network timeout issues in poor connectivity</li>
            <li>Race conditions in transaction processing</li>
          </ul>

          <div className="bg-green-100 dark:bg-green-900 border-l-4 border-green-500 p-4 mb-4">
            <p className="font-semibold text-gray-900 dark:text-gray-100">🟩 Results:</p>
            <p className="text-gray-700 dark:text-gray-300">App stability improved by 80%. Customer complaints reduced by 65%, with 99.5% uptime during peak hours.</p>
          </div>

          <div className="bg-purple-100 dark:bg-purple-900 border-l-4 border-purple-500 p-4">
            <p className="font-semibold text-gray-900 dark:text-gray-100">🟪 Lessons Learned:</p>
            <p className="text-gray-700 dark:text-gray-300">Mobile applications require extensive device and network condition testing. Manual testing revealed performance issues automated tests missed.</p>
          </div>
        </div>

        {/* Case Study 4 */}
        <div className="border border-gray-300 dark:border-gray-600 rounded-lg p-6">
          <h2 className="text-2xl font-semibold mb-3 text-blue-600 dark:text-blue-400">Case Study 4: Educational Platform</h2>
          <div className="bg-blue-100 dark:bg-blue-900 border-l-4 border-blue-500 p-4 mb-4">
            <p className="font-semibold text-gray-900 dark:text-gray-100">🟦 Context:</p>
            <p className="text-gray-700 dark:text-gray-300">An online learning platform had issues with course content accessibility and assessment accuracy. QA focused on educational content validation.</p>
          </div>

          <h3 className="text-xl font-semibold mb-2">Testing Approach:</h3>
          <ul className="list-disc list-inside mb-4">
            <li>Content accuracy validation</li>
            <li>Accessibility compliance testing</li>
            <li>Assessment logic verification</li>
            <li>Cross-browser content rendering</li>
          </ul>

          <h3 className="text-xl font-semibold mb-2">Key Findings:</h3>
          <ul className="list-disc list-inside mb-4">
            <li>Mathematical equations displayed incorrectly</li>
            <li>Video content not accessible to screen readers</li>
            <li>Assessment scoring had calculation errors</li>
            <li>Content formatting issues on mobile devices</li>
          </ul>

          <div className="bg-green-100 dark:bg-green-900 border-l-4 border-green-500 p-4 mb-4">
            <p className="font-semibold text-gray-900 dark:text-gray-100">🟩 Results:</p>
            <p className="text-gray-700 dark:text-gray-300">Student satisfaction improved by 40%. Accessibility compliance reached 98%, meeting WCAG 2.1 AA standards.</p>
          </div>

          <div className="bg-purple-100 dark:bg-purple-900 border-l-4 border-purple-500 p-4">
            <p className="font-semibold text-gray-900 dark:text-gray-100">🟪 Lessons Learned:</p>
            <p className="text-gray-700 dark:text-gray-300">Educational content requires specialized testing approaches. Manual validation of learning materials is crucial for quality assurance.</p>
          </div>
        </div>

        {/* Case Study 5 */}
        <div className="border border-gray-300 dark:border-gray-600 rounded-lg p-6">
          <h2 className="text-2xl font-semibold mb-3 text-blue-600 dark:text-blue-400">Case Study 5: Travel Booking System</h2>
          <div className="bg-blue-100 dark:bg-blue-900 border-l-4 border-blue-500 p-4 mb-4">
            <p className="font-semibold text-gray-900 dark:text-gray-100">🟦 Context:</p>
            <p className="text-gray-700 dark:text-gray-300">A travel booking website had booking errors and payment processing issues. QA investigated the complex booking workflow and integration points.</p>
          </div>

          <h3 className="text-xl font-semibold mb-2">Testing Approach:</h3>
          <ul className="list-disc list-inside mb-4">
            <li>End-to-end booking flow testing</li>
            <li>Payment gateway integration testing</li>
            <li>Third-party API validation</li>
            <li>Error handling and recovery testing</li>
          </ul>

          <h3 className="text-xl font-semibold mb-2">Key Findings:</h3>
          <ul className="list-disc list-inside mb-4">
            <li>Double booking issues with concurrent users</li>
            <li>Payment processing timeouts</li>
            <li>Incorrect price calculations with discounts</li>
            <li>Poor error messages for booking failures</li>
          </ul>

          <div className="bg-green-100 dark:bg-green-900 border-l-4 border-green-500 p-4 mb-4">
            <p className="font-semibold text-gray-900 dark:text-gray-100">🟩 Results:</p>
            <p className="text-gray-700 dark:text-gray-300">Booking success rate improved from 85% to 97%. Customer support tickets reduced by 50%, saving $500K annually.</p>
          </div>

          <div className="bg-purple-100 dark:bg-purple-900 border-l-4 border-purple-500 p-4">
            <p className="font-semibold text-gray-900 dark:text-gray-100">🟪 Lessons Learned:</p>
            <p className="text-gray-700 dark:text-gray-300">Complex workflows require thorough manual testing. Integration points between systems are common failure sources.</p>
          </div>
        </div>

        {/* Case Study 6 */}
        <div className="border border-gray-300 dark:border-gray-600 rounded-lg p-6">
          <h2 className="text-2xl font-semibold mb-3 text-blue-600 dark:text-blue-400">Case Study 6: Social Media Platform</h2>
          <div className="bg-blue-100 dark:bg-blue-900 border-l-4 border-blue-500 p-4 mb-4">
            <p className="font-semibold text-gray-900 dark:text-gray-100">🟦 Context:</p>
            <p className="text-gray-700 dark:text-gray-300">A social media app had privacy and content moderation issues. QA focused on user-generated content validation and privacy controls.</p>
          </div>

          <h3 className="text-xl font-semibold mb-2">Testing Approach:</h3>
          <ul className="list-disc list-inside mb-4">
            <li>Content moderation algorithm testing</li>
            <li>Privacy settings validation</li>
            <li>User interaction testing</li>
            <li>Performance testing with large datasets</li>
          </ul>

          <h3 className="text-xl font-semibold mb-2">Key Findings:</h3>
          <ul className="list-disc list-inside mb-4">
            <li>Inappropriate content passing moderation</li>
            <li>Privacy settings not properly enforced</li>
            <li>Performance degradation with high user loads</li>
            <li>Data synchronization issues across devices</li>
          </ul>

          <div className="bg-green-100 dark:bg-green-900 border-l-4 border-green-500 p-4 mb-4">
            <p className="font-semibold text-gray-900 dark:text-gray-100">🟩 Results:</p>
            <p className="text-gray-700 dark:text-gray-300">Content moderation accuracy improved by 60%. Privacy compliance rating reached 99%, reducing legal risks.</p>
          </div>

          <div className="bg-purple-100 dark:bg-purple-900 border-l-4 border-purple-500 p-4">
            <p className="font-semibold text-gray-900 dark:text-gray-100">🟪 Lessons Learned:</p>
            <p className="text-gray-700 dark:text-gray-300">Social platforms require continuous testing of user-generated content. Manual testing is essential for subjective content validation.</p>
          </div>
        </div>

        {/* Case Study 7 */}
        <div className="border border-gray-300 dark:border-gray-600 rounded-lg p-6">
          <h2 className="text-2xl font-semibold mb-3 text-blue-600 dark:text-blue-400">Case Study 7: Manufacturing ERP System</h2>
          <div className="bg-blue-100 dark:bg-blue-900 border-l-4 border-blue-500 p-4 mb-4">
            <p className="font-semibold text-gray-900 dark:text-gray-100">🟦 Context:</p>
            <p className="text-gray-700 dark:text-gray-300">A manufacturing company's ERP system had inventory tracking and reporting inaccuracies. QA investigated complex business logic and data integrity.</p>
          </div>

          <h3 className="text-xl font-semibold mb-2">Testing Approach:</h3>
          <ul className="list-disc list-inside mb-4">
            <li>Business logic validation</li>
            <li>Data integrity testing</li>
            <li>Report accuracy verification</li>
            <li>Workflow testing with real manufacturing data</li>
          </ul>

          <h3 className="text-xl font-semibold mb-2">Key Findings:</h3>
          <ul className="list-disc list-inside mb-4">
            <li>Inventory calculations had rounding errors</li>
            <li>Report generation failed with large datasets</li>
            <li>Workflow state transitions were inconsistent</li>
            <li>Data import/export corrupted information</li>
          </ul>

          <div className="bg-green-100 dark:bg-green-900 border-l-4 border-green-500 p-4 mb-4">
            <p className="font-semibold text-gray-900 dark:text-gray-100">🟩 Results:</p>
            <p className="text-gray-700 dark:text-gray-300">Inventory accuracy improved to 99.9%. Manufacturing efficiency increased by 25%, saving $1.2M annually in operational costs.</p>
          </div>

          <div className="bg-purple-100 dark:bg-purple-900 border-l-4 border-purple-500 p-4">
            <p className="font-semibold text-gray-900 dark:text-gray-100">🟪 Lessons Learned:</p>
            <p className="text-gray-700 dark:text-gray-300">Enterprise systems require domain expertise for effective testing. Manual testing of business processes is critical for complex workflows.</p>
          </div>
        </div>

        {/* Case Study 8 */}
        <div className="border border-gray-300 dark:border-gray-600 rounded-lg p-6">
          <h2 className="text-2xl font-semibold mb-3 text-blue-600 dark:text-blue-400">Case Study 8: Gaming Platform</h2>
          <div className="bg-blue-100 dark:bg-blue-900 border-l-4 border-blue-500 p-4 mb-4">
            <p className="font-semibold text-gray-900 dark:text-gray-100">🟦 Context:</p>
            <p className="text-gray-700 dark:text-gray-300">A mobile gaming platform had gameplay balance and monetization issues. QA tested game mechanics, user engagement, and in-app purchase flows.</p>
          </div>

          <h3 className="text-xl font-semibold mb-2">Testing Approach:</h3>
          <ul className="list-disc list-inside mb-4">
            <li>Gameplay balance testing</li>
            <li>Monetization flow validation</li>
            <li>User experience testing</li>
            <li>Performance testing during gameplay</li>
          </ul>

          <h3 className="text-xl font-semibold mb-2">Key Findings:</h3>
          <ul className="list-disc list-inside mb-4">
            <li>Game difficulty progression was unbalanced</li>
            <li>In-app purchases had confusing UI</li>
            <li>Performance issues during intense gameplay</li>
            <li>Save/load functionality was unreliable</li>
          </ul>

          <div className="bg-green-100 dark:bg-green-900 border-l-4 border-green-500 p-4 mb-4">
            <p className="font-semibold text-gray-900 dark:text-gray-100">🟩 Results:</p>
            <p className="text-gray-700 dark:text-gray-300">Player retention increased by 35%. Revenue from in-app purchases grew by 50%, reaching $3.5M monthly.</p>
          </div>

          <div className="bg-purple-100 dark:bg-purple-900 border-l-4 border-purple-500 p-4">
            <p className="font-semibold text-gray-900 dark:text-gray-100">🟪 Lessons Learned:</p>
            <p className="text-gray-700 dark:text-gray-300">Gaming applications require specialized testing for user engagement and monetization. Manual testing of game feel is essential.</p>
          </div>
        </div>

        {/* Case Study 9 */}
        <div className="border border-gray-300 dark:border-gray-600 rounded-lg p-6">
          <h2 className="text-2xl font-semibold mb-3 text-blue-600 dark:text-blue-400">Case Study 9: Insurance Claims System</h2>
          <div className="bg-blue-100 dark:bg-blue-900 border-l-4 border-blue-500 p-4 mb-4">
            <p className="font-semibold text-gray-900 dark:text-gray-100">🟦 Context:</p>
            <p className="text-gray-700 dark:text-gray-300">An insurance company's claims processing system had calculation errors and compliance issues. QA validated complex business rules and regulatory requirements.</p>
          </div>

          <h3 className="text-xl font-semibold mb-2">Testing Approach:</h3>
          <ul className="list-disc list-inside mb-4">
            <li>Business rule validation</li>
            <li>Regulatory compliance testing</li>
            <li>Calculation accuracy verification</li>
            <li>Document processing validation</li>
          </ul>

          <h3 className="text-xl font-semibold mb-2">Key Findings:</h3>
          <ul className="list-disc list-inside mb-4">
            <li>Claim calculations had formula errors</li>
            <li>Document upload failed for large files</li>
            <li>Compliance reporting was incomplete</li>
            <li>User permission controls were inadequate</li>
          </ul>

          <div className="bg-green-100 dark:bg-green-900 border-l-4 border-green-500 p-4 mb-4">
            <p className="font-semibold text-gray-900 dark:text-gray-100">🟩 Results:</p>
            <p className="text-gray-700 dark:text-gray-300">Claim processing accuracy reached 99.8%. Regulatory compliance score improved to 100%, avoiding potential fines of $2M.</p>
          </div>

          <div className="bg-purple-100 dark:bg-purple-900 border-l-4 border-purple-500 p-4">
            <p className="font-semibold text-gray-900 dark:text-gray-100">🟪 Lessons Learned:</p>
            <p className="text-gray-700 dark:text-gray-300">Regulated industries require thorough documentation of testing processes. Manual validation of complex calculations is essential.</p>
          </div>
        </div>

        {/* Case Study 10 */}
        <div className="border border-gray-300 dark:border-gray-600 rounded-lg p-6">
          <h2 className="text-2xl font-semibold mb-3 text-blue-600 dark:text-blue-400">Case Study 10: Logistics Management System</h2>
          <div className="bg-blue-100 dark:bg-blue-900 border-l-4 border-blue-500 p-4 mb-4">
            <p className="font-semibold text-gray-900 dark:text-gray-100">🟦 Context:</p>
            <p className="text-gray-700 dark:text-gray-300">A logistics company's tracking system had route optimization and delivery scheduling issues. QA tested complex algorithms and real-time data processing.</p>
          </div>

          <h3 className="text-xl font-semibold mb-2">Testing Approach:</h3>
          <ul className="list-disc list-inside mb-4">
            <li>Algorithm validation testing</li>
            <li>Real-time data processing testing</li>
            <li>Integration testing with GPS systems</li>
            <li>Performance testing under load</li>
          </ul>

          <h3 className="text-xl font-semibold mb-2">Key Findings:</h3>
          <ul className="list-disc list-inside mb-4">
            <li>Route optimization produced suboptimal results</li>
            <li>Real-time tracking had latency issues</li>
            <li>GPS integration failed in poor signal areas</li>
            <li>Scheduling conflicts caused delivery delays</li>
          </ul>

          <div className="bg-green-100 dark:bg-green-900 border-l-4 border-green-500 p-4 mb-4">
            <p className="font-semibold text-gray-900 dark:text-gray-100">🟩 Results:</p>
            <p className="text-gray-700 dark:text-gray-300">On-time delivery rate improved from 82% to 95%. Fuel efficiency increased by 15%, saving $800K annually.</p>
          </div>

          <div className="bg-purple-100 dark:bg-purple-900 border-l-4 border-purple-500 p-4">
            <p className="font-semibold text-gray-900 dark:text-gray-100">🟪 Lessons Learned:</p>
            <p className="text-gray-700 dark:text-gray-300">Real-time systems require extensive manual testing of edge cases. Algorithm validation needs domain expertise.</p>
          </div>
        </div>

        {/* Case Study 11 */}
        <div className="border border-gray-300 dark:border-gray-600 rounded-lg p-6">
          <h2 className="text-2xl font-semibold mb-3 text-blue-600 dark:text-blue-400">Case Study 11: Government Portal</h2>
          <div className="bg-blue-100 dark:bg-blue-900 border-l-4 border-blue-500 p-4 mb-4">
            <p className="font-semibold text-gray-900 dark:text-gray-100">🟦 Context:</p>
            <p className="text-gray-700 dark:text-gray-300">A government citizen portal had accessibility and security issues. QA ensured compliance with government standards and accessibility requirements.</p>
          </div>

          <h3 className="text-xl font-semibold mb-2">Testing Approach:</h3>
          <ul className="list-disc list-inside mb-4">
            <li>Section 508 accessibility compliance</li>
            <li>Security testing for government standards</li>
            <li>Multi-language support validation</li>
            <li>Performance testing for high traffic</li>
          </ul>

          <h3 className="text-xl font-semibold mb-2">Key Findings:</h3>
          <ul className="list-disc list-inside mb-4">
            <li>Screen reader compatibility issues</li>
            <li>Color contrast ratios below standards</li>
            <li>Multi-language content had translation errors</li>
            <li>Session management didn't meet security requirements</li>
          </ul>

          <div className="bg-green-100 dark:bg-green-900 border-l-4 border-green-500 p-4 mb-4">
            <p className="font-semibold text-gray-900 dark:text-gray-100">🟩 Results:</p>
            <p className="text-gray-700 dark:text-gray-300">Accessibility compliance reached 100% for Section 508. Citizen satisfaction improved by 40%, with 98% security compliance rating.</p>
          </div>

          <div className="bg-purple-100 dark:bg-purple-900 border-l-4 border-purple-500 p-4">
            <p className="font-semibold text-gray-900 dark:text-gray-100">🟪 Lessons Learned:</p>
            <p className="text-gray-700 dark:text-gray-300">Government applications require rigorous compliance testing. Manual accessibility testing is crucial for inclusive design.</p>
          </div>
        </div>

        {/* Case Study 12 */}
        <div className="border border-gray-300 dark:border-gray-600 rounded-lg p-6">
          <h2 className="text-2xl font-semibold mb-3 text-blue-600 dark:text-blue-400">Case Study 12: Video Streaming Platform</h2>
          <div className="bg-blue-100 dark:bg-blue-900 border-l-4 border-blue-500 p-4 mb-4">
            <p className="font-semibold text-gray-900 dark:text-gray-100">🟦 Context:</p>
            <p className="text-gray-700 dark:text-gray-300">A video streaming service had buffering issues and content playback problems. QA investigated streaming quality and user experience across devices.</p>
          </div>

          <h3 className="text-xl font-semibold mb-2">Testing Approach:</h3>
          <ul className="list-disc list-inside mb-4">
            <li>Video playback quality testing</li>
            <li>Buffering performance analysis</li>
            <li>Cross-device compatibility testing</li>
            <li>Network condition simulation</li>
          </ul>

          <h3 className="text-xl font-semibold mb-2">Key Findings:</h3>
          <ul className="list-disc list-inside mb-4">
            <li>Buffering issues on slower connections</li>
            <li>Video quality adaptation was poor</li>
            <li>Subtitle synchronization problems</li>
            <li>Memory leaks during long viewing sessions</li>
          </ul>

          <div className="bg-green-100 dark:bg-green-900 border-l-4 border-green-500 p-4 mb-4">
            <p className="font-semibold text-gray-900 dark:text-gray-100">🟩 Results:</p>
            <p className="text-gray-700 dark:text-gray-300">Average viewing session length increased by 45%. Customer churn reduced by 25%, improving retention revenue by $5M annually.</p>
          </div>

          <div className="bg-purple-100 dark:bg-purple-900 border-l-4 border-purple-500 p-4">
            <p className="font-semibold text-gray-900 dark:text-gray-100">🟪 Lessons Learned:</p>
            <p className="text-gray-700 dark:text-gray-300">Media applications require specialized testing for streaming performance. Manual testing of user experience is essential for entertainment platforms.</p>
          </div>
        </div>

        {/* Case Study 13 */}
        <div className="border border-gray-300 dark:border-gray-600 rounded-lg p-6">
          <h2 className="text-2xl font-semibold mb-3 text-blue-600 dark:text-blue-400">Case Study 13: Financial Trading Platform</h2>
          <div className="bg-blue-100 dark:bg-blue-900 border-l-4 border-blue-500 p-4 mb-4">
            <p className="font-semibold text-gray-900 dark:text-gray-100">🟦 Context:</p>
            <p className="text-gray-700 dark:text-gray-300">A stock trading platform had order execution and real-time data display issues. QA tested high-frequency trading scenarios and data accuracy.</p>
          </div>

          <h3 className="text-xl font-semibold mb-2">Testing Approach:</h3>
          <ul className="list-disc list-inside mb-4">
            <li>Real-time data accuracy testing</li>
            <li>Order execution validation</li>
            <li>High-frequency scenario testing</li>
            <li>System performance under market volatility</li>
          </ul>

          <h3 className="text-xl font-semibold mb-2">Key Findings:</h3>
          <ul className="list-disc list-inside mb-4">
            <li>Data display latency issues</li>
            <li>Order execution timing problems</li>
            <li>Race conditions in trade processing</li>
            <li>UI freezing during market volatility</li>
          </ul>

          <div className="bg-green-100 dark:bg-green-900 border-l-4 border-green-500 p-4 mb-4">
            <p className="font-semibold text-gray-900 dark:text-gray-100">🟩 Results:</p>
            <p className="text-gray-700 dark:text-gray-300">Order execution success rate improved to 99.99%. System uptime reached 99.9%, preventing potential trading losses of $10M+.</p>
          </div>

          <div className="bg-purple-100 dark:bg-purple-900 border-l-4 border-purple-500 p-4">
            <p className="font-semibold text-gray-900 dark:text-gray-100">🟪 Lessons Learned:</p>
            <p className="text-gray-700 dark:text-gray-300">High-stakes financial systems require extreme accuracy testing. Manual validation of critical financial workflows is essential.</p>
          </div>
        </div>

        {/* Case Study 14 */}
        <div className="border border-gray-300 dark:border-gray-600 rounded-lg p-6">
          <h2 className="text-2xl font-semibold mb-3 text-blue-600 dark:text-blue-400">Case Study 14: IoT Device Management</h2>
          <div className="bg-blue-100 dark:bg-blue-900 border-l-4 border-blue-500 p-4 mb-4">
            <p className="font-semibold text-gray-900 dark:text-gray-100">🟦 Context:</p>
            <p className="text-gray-700 dark:text-gray-300">An IoT device management platform had connectivity and firmware update issues. QA tested device communication and over-the-air updates.</p>
          </div>

          <h3 className="text-xl font-semibold mb-2">Testing Approach:</h3>
          <ul className="list-disc list-inside mb-4">
            <li>Device connectivity testing</li>
            <li>Firmware update validation</li>
            <li>Network condition simulation</li>
            <li>Device compatibility testing</li>
          </ul>

          <h3 className="text-xl font-semibold mb-2">Key Findings:</h3>
          <ul className="list-disc list-inside mb-4">
            <li>Device reconnection failures</li>
            <li>Firmware update corruption issues</li>
            <li>Poor performance on weak networks</li>
            <li>Device authentication problems</li>
          </ul>

          <div className="bg-green-100 dark:bg-green-900 border-l-4 border-green-500 p-4 mb-4">
            <p className="font-semibold text-gray-900 dark:text-gray-100">🟩 Results:</p>
            <p className="text-gray-700 dark:text-gray-300">Device connectivity reliability improved to 99.5%. Firmware update success rate reached 98%, reducing support costs by 60%.</p>
          </div>

          <div className="bg-purple-100 dark:bg-purple-900 border-l-4 border-purple-500 p-4">
            <p className="font-semibold text-gray-900 dark:text-gray-100">🟪 Lessons Learned:</p>
            <p className="text-gray-700 dark:text-gray-300">IoT systems require testing across diverse network conditions and device types. Manual testing of physical device interactions is crucial.</p>
          </div>
        </div>

        {/* Case Study 15 */}
        <div className="border border-gray-300 dark:border-gray-600 rounded-lg p-6">
          <h2 className="text-2xl font-semibold mb-3 text-blue-600 dark:text-blue-400">Case Study 15: Restaurant Ordering System</h2>
          <div className="bg-blue-100 dark:bg-blue-900 border-l-4 border-blue-500 p-4 mb-4">
            <p className="font-semibold text-gray-900 dark:text-gray-100">🟦 Context:</p>
            <p className="text-gray-700 dark:text-gray-300">A restaurant ordering system had order accuracy and kitchen workflow issues. QA tested the complete order-to-delivery process under restaurant conditions.</p>
          </div>

          <h3 className="text-xl font-semibold mb-2">Testing Approach:</h3>
          <ul className="list-disc list-inside mb-4">
            <li>Order processing workflow testing</li>
            <li>Kitchen display system validation</li>
            <li>Payment processing integration</li>
            <li>Peak hour performance testing</li>
          </ul>

          <h3 className="text-xl font-semibold mb-2">Key Findings:</h3>
          <ul className="list-disc list-inside mb-4">
            <li>Order modifications caused display errors</li>
            <li>Kitchen printer failures during peak times</li>
            <li>Payment processing delays</li>
            <li>Menu item synchronization issues</li>
          </ul>

          <div className="bg-green-100 dark:bg-green-900 border-l-4 border-green-500 p-4 mb-4">
            <p className="font-semibold text-gray-900 dark:text-gray-100">🟩 Results:</p>
            <p className="text-gray-700 dark:text-gray-300">Order accuracy improved to 99.2%. Average order completion time reduced by 30%, increasing customer satisfaction by 50%.</p>
          </div>

          <div className="bg-purple-100 dark:bg-purple-900 border-l-4 border-purple-500 p-4">
            <p className="font-semibold text-gray-900 dark:text-gray-100">🟪 Lessons Learned:</p>
            <p className="text-gray-700 dark:text-gray-300">Time-critical systems require testing under realistic load conditions. Manual testing of complete workflows reveals integration issues.</p>
          </div>
        </div>
      </div>
    </div>
  )
}