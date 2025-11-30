export default function Page() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">AI-based Exploratory Testing</h1>

      <p className="mb-4">
        AI enhances exploratory testing by learning from human testers, identifying patterns, and suggesting new test scenarios that humans might miss.
      </p>

      <div className="bg-blue-100 dark:bg-blue-900 border-l-4 border-blue-500 p-4 mb-4">
        <p className="font-semibold text-blue-900 dark:text-blue-100">🟦 Info:</p>
        <p className="text-blue-800 dark:text-blue-200">AI observes exploratory testing sessions, learns successful strategies, and suggests new approaches to uncover hidden defects.</p>
      </div>

      <h2 className="text-2xl font-semibold mb-4">How AI Enhances Exploratory Testing</h2>
      <ul className="list-disc list-inside mb-4">
        <li><strong>Pattern Recognition:</strong> Identifies testing patterns that find more bugs</li>
        <li><strong>Test Idea Generation:</strong> Suggests new test scenarios based on application behavior</li>
        <li><strong>Risk Assessment:</strong> Highlights high-risk areas needing exploration</li>
        <li><strong>Session Recording:</strong> Captures and analyzes testing sessions for insights</li>
        <li><strong>Collaborative Learning:</strong> Improves suggestions based on team knowledge</li>
      </ul>

      <div className="bg-green-100 dark:bg-green-900 border-l-4 border-green-500 p-4 mb-4">
        <p className="font-semibold text-green-900 dark:text-green-100">🟩 Example:</p>
        <p className="text-green-800 dark:text-green-200">AI analyzes past exploratory sessions and suggests testing user registration with special characters after observing similar patterns caused validation bugs.</p>
      </div>

      <h2 className="text-2xl font-semibold mb-4">AI Exploratory Testing Tools</h2>
      <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded mb-4">
        <code>{`• Testim (AI-guided exploratory testing)
• mabl (ML-enhanced test creation)
• Applitools (AI-powered visual exploration)
• Sauce Labs (AI test recommendations)
• LambdaTest (Smart test suggestions)`}</code>
      </pre>

      <h2 className="text-2xl font-semibold mb-4">Benefits</h2>
      <ul className="list-disc list-inside mb-4">
        <li>Uncovers edge cases traditional testing misses</li>
        <li>Accelerates learning curve for new testers</li>
        <li>Provides data-driven test strategies</li>
        <li>Reduces redundant testing efforts</li>
        <li>Improves test coverage consistency</li>
      </ul>

      <div className="bg-purple-100 dark:bg-purple-900 border-l-4 border-purple-500 p-4 mb-4">
        <p className="font-semibold text-purple-900 dark:text-purple-100">🟪 Key Tip:</p>
        <p className="text-purple-800 dark:text-purple-200">Use AI suggestions as starting points, not replacements for human creativity and domain expertise.</p>
      </div>
    </div>
  )
}
