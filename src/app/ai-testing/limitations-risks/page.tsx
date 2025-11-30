export default function Page() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Limitations + Risks</h1>

      <p className="mb-4">
        Understanding the limitations and risks of AI in testing is crucial for responsible implementation and realistic expectations.
      </p>

      <div className="bg-red-100 border-l-4 border-red-500 p-4 mb-4">
        <p className="font-semibold">🟥 Error:</p>
        <p>AI cannot replace human judgment, creativity, and understanding of business context in testing.</p>
      </div>

      <h2 className="text-2xl font-semibold mb-4">Technical Limitations</h2>
      <ul className="list-disc list-inside mb-4">
        <li><strong>Black Box Nature:</strong> AI decisions are often not explainable</li>
        <li><strong>Data Dependency:</strong> Performance relies on training data quality</li>
        <li><strong>Context Blindness:</strong> Misses business logic and user experience nuances</li>
        <li><strong>False Confidence:</strong> May appear reliable but fail in unexpected scenarios</li>
        <li><strong>Computational Cost:</strong> Resource-intensive training and inference</li>
      </ul>

      <h2 className="text-2xl font-semibold mb-4">Practical Risks</h2>
      <ul className="list-disc list-inside mb-4">
        <li><strong>Over-Reliance:</strong> Teams may neglect manual testing and exploratory approaches</li>
        <li><strong>Skill Degradation:</strong> Loss of manual testing expertise</li>
        <li><strong>Vendor Lock-in:</strong> Dependency on specific AI tools and platforms</li>
        <li><strong>Cost Uncertainty:</strong> Unpredictable pricing and scaling costs</li>
        <li><strong>Integration Challenges:</strong> Fitting AI into existing workflows</li>
      </ul>

      <div className="bg-yellow-100 dark:bg-yellow-900 border-l-4 border-yellow-500 p-4 mb-4">
        <p className="font-semibold text-gray-700 dark:text-gray-300">🟧 Warning:</p>
        <p>AI tools can mask underlying application issues by automatically working around problems instead of surfacing them.</p>
      </div>

      <h2 className="text-2xl font-semibold mb-4">Ethical Concerns</h2>
      <ul className="list-disc list-inside mb-4">
        <li><strong>Bias Amplification:</strong> AI may perpetuate or amplify existing biases</li>
        <li><strong>Privacy Risks:</strong> Training data may contain sensitive information</li>
        <li><strong>Transparency Issues:</strong> Lack of explainability in decision-making</li>
        <li><strong>Job Displacement:</strong> Potential reduction in manual testing roles</li>
        <li><strong>Accountability:</strong> Difficulty assigning responsibility for AI errors</li>
      </ul>

      <h2 className="text-2xl font-semibold mb-4">Current AI Testing Gaps</h2>
      <ul className="list-disc list-inside mb-4">
        <li>Cannot understand user intent or business requirements</li>
        <li>Limited ability to handle novel or unexpected scenarios</li>
        <li>Struggles with subjective quality aspects (usability, aesthetics)</li>
        <li>May miss context-dependent edge cases</li>
        <li>Cannot provide creative or lateral thinking approaches</li>
      </ul>

      <div className="bg-purple-100 dark:bg-purple-900 border-l-4 border-purple-500 p-4 mb-4">
        <p className="font-semibold text-gray-700 dark:text-gray-300">🟪 Key Tip:</p>
        <p>Use AI as a powerful assistant, not a replacement. Maintain human oversight and combine AI with traditional testing methods.</p>
      </div>

      <h2 className="text-2xl font-semibold mb-4">Risk Mitigation Strategies</h2>
      <ul className="list-disc list-inside mb-4">
        <li>Implement human-in-the-loop validation processes</li>
        <li>Maintain diverse testing approaches (manual + automated + AI)</li>
        <li>Regularly audit and validate AI tool performance</li>
        <li>Ensure AI outputs are reviewed by experienced testers</li>
        <li>Plan for AI tool failures and have backup processes</li>
        <li>Invest in team training to understand AI limitations</li>
      </ul>
    </div>
  )
}
