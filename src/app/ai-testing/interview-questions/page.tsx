export default function Page() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Interview Questions</h1>

      <p className="mb-4">
        Common interview questions and answers for AI testing roles, covering technical knowledge, practical experience, and industry trends.
      </p>

      <div className="bg-blue-100 dark:bg-blue-900 border-l-4 border-blue-500 p-4 mb-4">
        <p className="font-semibold text-gray-700 dark:text-gray-300">🟦 Info:</p>
        <p>AI testing interviews focus on understanding AI concepts, practical implementation, and the balance between AI and human testing approaches.</p>
      </div>

      <h2 className="text-2xl font-semibold mb-4">Common Interview Questions</h2>

      <div className="space-y-6">
        <div className="border border-gray-300 dark:border-gray-600 rounded-lg p-4">
          <h3 className="font-semibold mb-2">Q: What is AI testing and how does it differ from traditional testing?</h3>
          <p className="text-gray-700 dark:text-gray-300">A: AI testing uses artificial intelligence to enhance or automate testing processes. Unlike traditional testing which relies on predefined scripts and human analysis, AI testing can learn from data, adapt to changes, and identify patterns that humans might miss.</p>
        </div>

        <div className="border border-gray-300 dark:border-gray-600 rounded-lg p-4">
          <h3 className="font-semibold mb-2">Q: What are the main challenges in AI testing?</h3>
          <p className="text-gray-700 dark:text-gray-300">A: Key challenges include the black box nature of AI models, data quality and bias issues, lack of explainability, integration with existing workflows, and the need for specialized skills. Additionally, AI testing requires understanding both testing principles and machine learning concepts.</p>
        </div>

        <div className="border border-gray-300 dark:border-gray-600 rounded-lg p-4">
          <h3 className="font-semibold mb-2">Q: How do you approach testing a machine learning model?</h3>
          <p className="text-gray-700 dark:text-gray-300">A: I focus on data validation, model validation, performance testing, bias and fairness assessment, robustness testing, and monitoring in production. This includes checking training data quality, cross-validation, accuracy metrics, adversarial testing, and setting up monitoring for model drift.</p>
        </div>

        <div className="border border-gray-300 dark:border-gray-600 rounded-lg p-4">
          <h3 className="font-semibold mb-2">Q: What tools do you use for AI testing?</h3>
          <p className="text-gray-700 dark:text-gray-300">A: I use specialized AI testing tools like Adversarial Robustness Toolbox (ART), AI Fairness 360, and general testing frameworks adapted for AI like TensorFlow Model Analysis. For automation, I work with tools like Testim, Mabl, and Applitools that incorporate AI capabilities.</p>
        </div>

        <div className="border border-gray-300 dark:border-gray-600 rounded-lg p-4">
          <h3 className="font-semibold mb-2">Q: How do you ensure AI models don't have bias?</h3>
          <p className="text-gray-700 dark:text-gray-300">A: I conduct bias audits using fairness metrics, analyze training data for representation issues, test with diverse datasets, implement bias detection algorithms, and establish monitoring for biased outcomes in production. Regular audits and diverse team perspectives are also crucial.</p>
        </div>

        <div className="border border-gray-300 dark:border-gray-600 rounded-lg p-4">
          <h3 className="font-semibold mb-2">Q: What is model drift and how do you test for it?</h3>
          <p className="text-gray-700 dark:text-gray-300">A: Model drift occurs when the model's performance degrades due to changes in input data distribution or relationships. I test for it by monitoring prediction accuracy over time, comparing new data distributions to training data, and setting up automated alerts for performance degradation.</p>
        </div>

        <div className="border border-gray-300 dark:border-gray-600 rounded-lg p-4">
          <h3 className="font-semibold mb-2">Q: How do you balance AI testing with traditional testing methods?</h3>
          <p className="text-gray-700 dark:text-gray-300">A: I use AI for repetitive tasks, pattern recognition, and large-scale testing while relying on human expertise for creative testing, business logic validation, and subjective quality aspects. The best approach combines both: AI handles the "what" and humans provide the "why".</p>
        </div>

        <div className="border border-gray-300 dark:border-gray-600 rounded-lg p-4">
          <h3 className="font-semibold mb-2">Q: What are the ethical considerations in AI testing?</h3>
          <p className="text-gray-700 dark:text-gray-300">A: Ethical considerations include ensuring fairness and avoiding bias, protecting user privacy, maintaining transparency in AI decision-making, considering societal impacts, and ensuring AI systems align with human values. Testers must also consider the potential for AI to be used maliciously.</p>
        </div>

        <div className="border border-gray-300 dark:border-gray-600 rounded-lg p-4">
          <h3 className="font-semibold mb-2">Q: How do you measure the success of AI testing implementation?</h3>
          <p className="text-gray-700 dark:text-gray-300">A: Success metrics include defect detection rates, time to identify issues, test coverage improvements, reduction in manual testing effort, accuracy of AI-generated test cases, and overall impact on release quality and speed.</p>
        </div>

        <div className="border border-gray-300 dark:border-gray-600 rounded-lg p-4">
          <h3 className="font-semibold mb-2">Q: What is your experience with prompt engineering for testing?</h3>
          <p className="text-gray-700 dark:text-gray-300">A: I use prompt engineering to get better results from AI tools when generating test cases, analyzing bugs, or creating automation scripts. This involves being specific about requirements, providing context, defining output formats, and iterating on prompts to improve results.</p>
        </div>
      </div>

      <div className="bg-green-100 border-l-4 border-green-500 p-4 mt-6">
        <p className="font-semibold text-gray-700 dark:text-gray-300">🟩 Example:</p>
        <p>When asked about AI testing experience, mention specific tools used, challenges overcome, and measurable improvements achieved in testing efficiency or quality.</p>
      </div>

      <div className="bg-purple-100 border-l-4 border-purple-500 p-4 mt-4">
        <p className="font-semibold text-gray-700 dark:text-gray-300">🟪 Key Tip:</p>
        <p>Prepare examples of how you've successfully implemented AI testing tools and be ready to discuss both benefits and limitations from real experience.</p>
      </div>
    </div>
  )
}
