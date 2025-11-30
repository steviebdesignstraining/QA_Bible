export default function Page() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Prompt Engineering</h1>

      <p className="mb-4">
        Prompt engineering is the art and science of crafting effective inputs to get the best possible outputs from AI models, particularly important for testing and quality assurance tasks.
      </p>

      <div className="bg-blue-100 dark:bg-blue-900 border-l-4 border-blue-500 p-4 mb-4">
        <p className="font-semibold text-gray-700 dark:text-gray-300">🟦 Info:</p>
        <p>The quality of AI outputs depends heavily on how you phrase your questions and instructions. Good prompts can make AI a powerful testing assistant.</p>
      </div>

      <h2 className="text-2xl font-semibold mb-4">Why Prompt Engineering Matters in Testing</h2>
      <ul className="list-disc list-inside mb-4">
        <li><strong>Test Case Generation:</strong> Creating comprehensive test scenarios</li>
        <li><strong>Bug Analysis:</strong> Understanding complex error patterns</li>
        <li><strong>Code Review:</strong> Identifying potential issues in code</li>
        <li><strong>Documentation:</strong> Generating clear testing documentation</li>
        <li><strong>Root Cause Analysis:</strong> Investigating system failures</li>
        <li><strong>Automation Scripts:</strong> Writing effective test automation code</li>
      </ul>

      <div className="bg-green-100 dark:bg-green-900 border-l-4 border-green-500 p-4 mb-4">
        <p className="font-semibold text-green-900 dark:text-green-100">🟩 Example:</p>
        <p className="text-green-800 dark:text-green-200">Instead of "Find bugs in this code," use "Analyze this login function for security vulnerabilities, edge cases, and potential race conditions. Provide specific test cases for each issue found."</p>
      </div>

      <h2 className="text-2xl font-semibold mb-4">Core Principles of Effective Prompts</h2>

      <h3 className="text-xl font-semibold mb-2">Be Specific and Clear</h3>
      <p className="mb-4">
        Clearly define what you want, including context, constraints, and expected output format.
      </p>

      <h3 className="text-xl font-semibold mb-2">Provide Context</h3>
      <p className="mb-4">
        Include relevant background information, system details, and business requirements.
      </p>

      <h3 className="text-xl font-semibold mb-2">Define Output Format</h3>
      <p className="mb-4">
        Specify how you want the response structured (bullet points, tables, code examples).
      </p>

      <h3 className="text-xl font-semibold mb-2">Use Examples</h3>
      <p className="mb-4">
        Show examples of what you want, especially for complex or specialized tasks.
      </p>

      <div className="bg-yellow-100 dark:bg-yellow-900 border-l-4 border-yellow-500 p-4 mb-4">
        <p className="font-semibold text-yellow-900 dark:text-yellow-100">🟧 Warning:</p>
        <p className="text-yellow-800 dark:text-yellow-200">Vague prompts lead to vague responses. AI models can't read your mind - be explicit about your requirements.</p>
      </div>

      <h2 className="text-2xl font-semibold mb-4">Prompt Engineering Techniques</h2>

      <h3 className="text-xl font-semibold mb-2">Role Definition</h3>
      <p className="mb-4">
        Assign the AI a specific role to get more focused and expert-level responses.
      </p>
      <pre className="bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 p-4 rounded mb-4 overflow-x-auto">
        <code>{`"You are a senior QA engineer with 10 years of experience in web application testing. Analyze this user registration flow and identify potential security vulnerabilities and usability issues."`}</code>
      </pre>

      <h3 className="text-xl font-semibold mb-2">Step-by-Step Instructions</h3>
      <p className="mb-4">
        Break down complex tasks into clear, sequential steps.
      </p>
      <pre className="bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 p-4 rounded mb-4 overflow-x-auto">
        <code>{`"Perform the following analysis on this API endpoint:
1. Review the request/response structure
2. Identify potential security issues
3. Suggest comprehensive test cases
4. Provide sample test scripts"`}</code>
      </pre>

      <h3 className="text-xl font-semibold mb-2">Context Provision</h3>
      <p className="mb-4">
        Include all relevant information the AI needs to understand the problem.
      </p>
      <pre className="bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 p-4 rounded mb-4 overflow-x-auto">
        <code>{`"Given that this is a healthcare application handling sensitive patient data and must comply with HIPAA regulations, analyze this authentication system for potential security vulnerabilities."`}</code>
      </pre>

      <div className="bg-purple-100 dark:bg-purple-900 border-l-4 border-purple-500 p-4 mb-4">
        <p className="font-semibold text-purple-900 dark:text-purple-100">🟪 Key Tip:</p>
        <p className="text-purple-800 dark:text-purple-200">Iterate on your prompts. If the first response isn't what you need, refine your prompt based on what worked or didn't work.</p>
      </div>

      <h2 className="text-2xl font-semibold mb-4">Testing-Specific Prompt Patterns</h2>

      <h3 className="text-xl font-semibold mb-2">Test Case Generation</h3>
      <pre className="bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 p-4 rounded mb-4 overflow-x-auto">
        <code>{`"Generate comprehensive test cases for a user login feature. Include:
- Positive test cases (valid credentials)
- Negative test cases (invalid inputs)
- Edge cases (special characters, long inputs)
- Security test cases (SQL injection, XSS)
- Performance test cases (concurrent users)

Format each test case as: ID, Title, Preconditions, Steps, Expected Result"`}</code>
      </pre>

      <h3 className="text-xl font-semibold mb-2">Bug Analysis</h3>
      <pre className="bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 p-4 rounded mb-4 overflow-x-auto">
        <code>{`"Analyze this error log and stack trace. As an experienced debugger:
1. Identify the root cause
2. Explain what the error means
3. Suggest how to reproduce it
4. Provide potential fixes
5. Recommend preventive measures"`}</code>
      </pre>

      <h3 className="text-xl font-semibold mb-2">Code Review</h3>
      <pre className="bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 p-4 rounded mb-4 overflow-x-auto">
        <code>{`"Review this code for quality and potential issues. Focus on:
- Security vulnerabilities
- Performance bottlenecks
- Code maintainability
- Testability
- Best practices compliance

Provide specific recommendations with code examples."`}</code>
      </pre>

      <h2 className="text-2xl font-semibold mb-4">Common Prompt Engineering Mistakes</h2>
      <ul className="list-disc list-inside mb-4">
        <li><strong>Too Vague:</strong> "Test this" instead of specific requirements</li>
        <li><strong>Missing Context:</strong> Not providing system or business context</li>
        <li><strong>No Output Format:</strong> Not specifying how you want results structured</li>
        <li><strong>Overloading:</strong> Asking too many things in one prompt</li>
        <li><strong>Assuming Knowledge:</strong> Not explaining domain-specific terms</li>
        <li><strong>No Examples:</strong> Not showing what good output looks like</li>
      </ul>

      <h2 className="text-2xl font-semibold mb-4">Advanced Prompt Techniques</h2>

      <h3 className="text-xl font-semibold mb-2">Chain of Thought</h3>
      <p className="mb-4">
        Ask the AI to show its reasoning process for more accurate and explainable results.
      </p>

      <h3 className="text-xl font-semibold mb-2">Few-Shot Learning</h3>
      <p className="mb-4">
        Provide examples of good outputs to guide the AI's response pattern.
      </p>

      <h3 className="text-xl font-semibold mb-2">Iterative Refinement</h3>
      <p className="mb-4">
        Use follow-up prompts to improve or expand on initial responses.
      </p>

      <h3 className="text-xl font-semibold mb-2">Constraint Specification</h3>
      <p className="mb-4">
        Clearly define boundaries and limitations for the AI's response.
      </p>

      <h2 className="text-2xl font-semibold mb-4">Prompt Engineering Tools</h2>
      <pre className="bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 p-4 rounded mb-4 overflow-x-auto">
        <code>{`• ChatGPT (Advanced prompting capabilities)
• Claude (Excellent for structured outputs)
• GitHub Copilot (Code-specific prompts)
• PromptPerfect (Prompt optimization)
• SmythOS (Prompt management)
• PromptLayer (Prompt tracking and versioning)`}</code>
      </pre>

      <h2 className="text-2xl font-semibold mb-4">Measuring Prompt Effectiveness</h2>
      <ul className="list-disc list-inside mb-4">
        <li><strong>Accuracy:</strong> Does the output meet your requirements?</li>
        <li><strong>Completeness:</strong> Does it cover all aspects of the task?</li>
        <li><strong>Actionability:</strong> Can you directly use the output?</li>
        <li><strong>Consistency:</strong> Do similar prompts produce consistent results?</li>
        <li><strong>Efficiency:</strong> How much refinement is needed?</li>
      </ul>

      <h2 className="text-2xl font-semibold mb-4">Building a Prompt Library</h2>
      <ul className="list-disc list-inside mb-4">
        <li>Create templates for common testing tasks</li>
        <li>Document what works and what doesn't</li>
        <li>Share effective prompts with your team</li>
        <li>Regularly update prompts based on new learnings</li>
        <li>Categorize prompts by testing type and complexity</li>
      </ul>

      <h2 className="text-2xl font-semibold mb-4">Ethical Considerations</h2>
      <ul className="list-disc list-inside mb-4">
        <li>Be transparent about AI-generated content</li>
        <li>Validate AI suggestions with human expertise</li>
        <li>Consider privacy implications of shared data</li>
        <li>Avoid over-reliance on AI for critical decisions</li>
        <li>Ensure AI outputs align with organizational standards</li>
      </ul>

      <h2 className="text-2xl font-semibold mb-4">Future of Prompt Engineering</h2>
      <ul className="list-disc list-inside mb-4">
        <li><strong>Visual Prompting:</strong> Using images and diagrams as input</li>
        <li><strong>Multi-Modal Prompts:</strong> Combining text, code, and visuals</li>
        <li><strong>Conversational AI:</strong> More natural, back-and-forth interactions</li>
        <li><strong>Domain-Specific Models:</strong> Specialized AI for testing tasks</li>
        <li><strong>Automated Prompt Generation:</strong> AI that writes better prompts</li>
      </ul>

      <h2 className="text-2xl font-semibold mb-4">Getting Started Guide</h2>
      <pre className="bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 p-4 rounded overflow-x-auto">
        <code>{`1. Start Simple
   • Begin with basic prompts
   • Focus on one task at a time
   • Learn from each interaction

2. Study Examples
   • Analyze effective prompts
   • Understand what makes them work
   • Adapt patterns to your needs

3. Experiment and Iterate
   • Try different approaches
   • Track what works best
   • Refine based on results

4. Build Templates
   • Create reusable prompt templates
   • Customize for different scenarios
   • Share with your team

5. Stay Updated
   • Follow AI developments
   • Learn new prompting techniques
   • Adapt to model improvements`}</code>
      </pre>
    </div>
  )
}



