export default function Page() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">AI Testing Fundamentals</h1>

      <p className="mb-4">
        AI testing validates artificial intelligence systems for accuracy, reliability, and ethical behavior.
      </p>

      <div className="bg-blue-100 dark:bg-blue-900 border-l-4 border-blue-500 p-4 mb-4">
        <p className="font-semibold text-blue-900 dark:text-blue-100">🟦 Info:</p>
        <p className="text-blue-800 dark:text-blue-200">AI testing differs from traditional testing because AI systems learn and adapt, making their behavior unpredictable.</p>
      </div>

      <h2 className="text-2xl font-semibold mb-4">What is AI Testing?</h2>
      <p className="mb-4">
        AI testing evaluates machine learning models, neural networks, and intelligent systems to ensure they:
      </p>
      <ul className="list-disc list-inside mb-4">
        <li>Produce accurate results</li>
        <li>Behave ethically and fairly</li>
        <li>Perform reliably under various conditions</li>
        <li>Handle edge cases appropriately</li>
        <li>Maintain security and privacy</li>
      </ul>

      <div className="bg-green-100 dark:bg-green-900 border-l-4 border-green-500 p-4 mb-4">
        <p className="font-semibold text-green-900 dark:text-green-100">🟩 Example:</p>
        <p className="text-green-800 dark:text-green-200">Testing a facial recognition system to ensure it works equally well for all ethnic groups and lighting conditions.</p>
      </div>

      <h2 className="text-2xl font-semibold mb-4">Why AI Testing Matters</h2>
      <ul className="list-disc list-inside mb-4">
        <li><strong>Safety:</strong> AI systems can cause harm if they fail</li>
        <li><strong>Ethics:</strong> Prevents biased or discriminatory outcomes</li>
        <li><strong>Reliability:</strong> Ensures consistent performance</li>
        <li><strong>Compliance:</strong> Meets legal and regulatory requirements</li>
        <li><strong>Trust:</strong> Builds user confidence in AI systems</li>
      </ul>

      <div className="bg-yellow-100 dark:bg-yellow-900 border-l-4 border-yellow-500 p-4 mb-4">
        <p className="font-semibold text-yellow-900 dark:text-yellow-100">🟧 Warning:</p>
        <p className="text-yellow-800 dark:text-yellow-200">AI systems can exhibit unexpected behavior due to their learning nature, making comprehensive testing crucial.</p>
      </div>

      <h2 className="text-2xl font-semibold mb-4">Key AI Testing Concepts</h2>

      <h3 className="text-xl font-semibold mb-2">Model Validation</h3>
      <p className="mb-4">
        Ensures AI models perform correctly on new, unseen data. Includes cross-validation and holdout testing.
      </p>

      <h3 className="text-xl font-semibold mb-2">Bias Testing</h3>
      <p className="mb-4">
        Identifies unfair or discriminatory patterns in AI decision-making across different demographic groups.
      </p>

      <h3 className="text-xl font-semibold mb-2">Robustness Testing</h3>
      <p className="mb-4">
        Evaluates AI performance under adversarial conditions and edge cases.
      </p>

      <h3 className="text-xl font-semibold mb-2">Explainability Testing</h3>
      <p className="mb-4">
        Verifies that AI decisions can be understood and explained to humans.
      </p>

      <div className="bg-purple-100 dark:bg-purple-900 border-l-4 border-purple-500 p-4 mb-4">
        <p className="font-semibold text-purple-900 dark:text-purple-100">🟪 Key Tip:</p>
        <p className="text-purple-800 dark:text-purple-200">AI testing requires domain expertise, statistical knowledge, and understanding of machine learning concepts.</p>
      </div>

      <h2 className="text-2xl font-semibold mb-4">AI Testing Challenges</h2>
      <ul className="list-disc list-inside mb-4">
        <li><strong>Black Box Nature:</strong> Difficult to understand internal decision-making</li>
        <li><strong>Data Dependency:</strong> Performance heavily relies on training data quality</li>
        <li><strong>Dynamic Behavior:</strong> AI systems change behavior over time</li>
        <li><strong>Scale:</strong> Testing at production scale is resource-intensive</li>
        <li><strong>Ethical Considerations:</strong> Balancing innovation with responsible AI use</li>
      </ul>

      <h2 className="text-2xl font-semibold mb-4">AI Testing Process</h2>
      <ol className="list-decimal list-inside mb-4">
        <li>Define success criteria and acceptance thresholds</li>
        <li>Prepare diverse and representative test datasets</li>
        <li>Execute functional and performance tests</li>
        <li>Conduct bias and fairness assessments</li>
        <li>Validate robustness and security</li>
        <li>Monitor performance in production</li>
        <li>Implement continuous testing and monitoring</li>
      </ol>

      <h2 className="text-2xl font-semibold mb-4">Types of AI Systems Tested</h2>
      <ul className="list-disc list-inside mb-4">
        <li><strong>Classification Models:</strong> Image recognition, spam detection</li>
        <li><strong>Regression Models:</strong> Price prediction, demand forecasting</li>
        <li><strong>Recommendation Systems:</strong> Product suggestions, content personalization</li>
        <li><strong>Natural Language Processing:</strong> Chatbots, text analysis</li>
        <li><strong>Computer Vision:</strong> Object detection, facial recognition</li>
        <li><strong>Reinforcement Learning:</strong> Game AI, robotic control</li>
      </ul>

      <h2 className="text-2xl font-semibold mb-4">AI Testing Tools</h2>
      <pre className="bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 p-4 rounded mb-4 overflow-x-auto">
        <code>{`Testing Frameworks:
• TensorFlow Model Analysis (TFMA)
• PyTorch Lightning
• MLflow Model Validation
• Great Expectations (data validation)
• DeepCheck (comprehensive ML testing)

Bias & Fairness:
• AI Fairness 360 (IBM)
• Fairlearn (Microsoft)
• Aequitas

Explainability:
• SHAP (SHapley Additive exPlanations)
• LIME (Local Interpretable Model-agnostic Explanations)
• Eli5`}</code>
      </pre>

      <h2 className="text-2xl font-semibold mb-4">AI Testing Best Practices</h2>
      <ul className="list-disc list-inside mb-4">
        <li>Start testing early in the AI development lifecycle</li>
        <li>Use diverse and representative datasets</li>
        <li>Implement continuous monitoring and retraining</li>
        <li>Document testing procedures and results</li>
        <li>Involve domain experts in testing design</li>
        <li>Consider ethical implications throughout testing</li>
        <li>Plan for model degradation and retraining</li>
      </ul>

      <h2 className="text-2xl font-semibold mb-4">AI Testing Workflow</h2>
      <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded">
        <code>{`1. Requirements Analysis
   ↓
2. Data Preparation & Validation
   ↓
3. Model Development
   ↓
4. Unit Testing (components)
   ↓
5. Integration Testing
   ↓
6. System Testing
   ↓
7. Performance Testing
   ↓
8. Security & Bias Testing
   ↓
9. User Acceptance Testing
   ↓
10. Production Monitoring`}</code>
      </pre>
    </div>
  )
}
