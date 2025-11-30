export default function Page() {
  return (
    <div className="max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">API Collections & Environments</h1>

      <p className="mb-6">
        API collections organize related requests, while environments manage different configurations for testing across multiple environments like development, staging, and production.
      </p>

      <div className="bg-blue-100 dark:bg-blue-900 border-l-4 border-blue-500 p-4 mb-6">
        <p className="font-semibold text-gray-900 dark:text-gray-100">🟦 Info:</p>
        <p className="text-gray-700 dark:text-gray-300">Collections group API requests logically, while environments store variables for different deployment stages, enabling consistent testing across environments.</p>
      </div>

      <h2 className="text-2xl font-semibold mb-4">Creating API Collections</h2>

      <div className="grid md:grid-cols-2 gap-6 mb-6">
        <div className="border border-gray-300 dark:border-gray-600 rounded-lg p-4">
          <h3 className="text-lg font-semibold mb-3 text-green-600 dark:text-green-400">Collection Structure</h3>
          <ul className="list-disc list-inside space-y-1">
            <li>Descriptive name</li>
            <li>Clear description</li>
            <li>Version information</li>
            <li>Authorization settings</li>
            <li>Pre-request scripts</li>
            <li>Tests and variables</li>
          </ul>
        </div>

        <div className="border border-gray-300 dark:border-gray-600 rounded-lg p-4">
          <h3 className="text-lg font-semibold mb-3 text-blue-600 dark:text-blue-400">Organization Tips</h3>
          <ul className="list-disc list-inside space-y-1">
            <li>Group by feature/module</li>
            <li>Use consistent naming</li>
            <li>Add request descriptions</li>
            <li>Include example responses</li>
            <li>Document dependencies</li>
          </ul>
        </div>
      </div>

      <h2 className="text-2xl font-semibold mb-4">Environment Management</h2>

      <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded mb-6">
        <h3 className="font-semibold mb-4">Environment Types:</h3>

        <div className="grid md:grid-cols-3 gap-4 mb-4">
          <div className="bg-green-200 dark:bg-green-800 p-4 rounded">
            <h4 className="font-semibold mb-2 text-green-800 dark:text-green-200">Development</h4>
            <ul className="text-sm space-y-1">
              <li>Local development</li>
              <li>Debugging enabled</li>
              <li>Test data</li>
              <li>Latest features</li>
            </ul>
          </div>

          <div className="bg-yellow-200 dark:bg-yellow-800 p-4 rounded">
            <h4 className="font-semibold mb-2 text-yellow-800 dark:text-yellow-200">Staging</h4>
            <ul className="text-sm space-y-1">
              <li>Pre-production</li>
              <li>Production-like data</li>
              <li>Integration testing</li>
              <li>Performance validation</li>
            </ul>
          </div>

          <div className="bg-red-200 dark:bg-red-800 p-4 rounded">
            <h4 className="font-semibold mb-2 text-red-800 dark:text-red-200">Production</h4>
            <ul className="text-sm space-y-1">
              <li>Live system</li>
              <li>Real user data</li>
              <li>Monitoring active</li>
              <li>High security</li>
            </ul>
          </div>
        </div>
      </div>

      <h2 className="text-2xl font-semibold mb-4">Environment Variables</h2>

      <div className="space-y-4 mb-6">
        <div className="border border-gray-300 dark:border-gray-600 rounded-lg p-4">
          <h3 className="text-lg font-semibold mb-3">Variable Types</h3>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <h4 className="font-semibold mb-2">Environment Variables</h4>
              <ul className="list-disc list-inside text-sm">
                <li>Base URLs</li>
                <li>API keys</li>
                <li>Authentication tokens</li>
                <li>Database connections</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Collection Variables</h4>
              <ul className="list-disc list-inside text-sm">
                <li>Common headers</li>
                <li>Default parameters</li>
                <li>Reusable data</li>
                <li>Test configurations</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="border border-gray-300 dark:border-gray-600 rounded-lg p-4">
          <h3 className="text-lg font-semibold mb-3">Variable Usage in Requests</h3>
          <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded">
            <h4 className="font-semibold mb-2">URL with Variables:</h4>
            <code className="text-sm block mb-3">{"{"}base_url{"}"}/api/users/{"{"}user_id{"}"}/posts</code>

            <h4 className="font-semibold mb-2">Headers with Variables:</h4>
            <code className="text-sm block mb-3">Authorization: Bearer {"{"}auth_token{"}"}</code>

            <h4 className="font-semibold mb-2">Request Body:</h4>
            <code className="text-sm block">{`{
  "user_id": "{user_id}",
  "api_key": "{api_key}"
}`}</code>
          </div>
        </div>
      </div>

      <div className="bg-green-100 dark:bg-green-900 border-l-4 border-green-500 p-4 mb-6">
        <p className="font-semibold text-gray-900 dark:text-gray-100">🟩 Example:</p>
        <p className="text-gray-700 dark:text-gray-300">Create a "User Management" collection with environments for dev, staging, and prod. Use variables like {"{"}base_url{"}"} and {"{"}auth_token{"}"} to switch between environments seamlessly.</p>
      </div>

      <h2 className="text-2xl font-semibold mb-4">Collection Runner & Automation</h2>

      <div className="grid md:grid-cols-2 gap-6 mb-6">
        <div>
          <h3 className="text-lg font-semibold mb-3">Collection Runner Features</h3>
          <ul className="list-disc list-inside">
            <li>Run entire collections</li>
            <li>Execute in specific order</li>
            <li>Set delays between requests</li>
            <li>View detailed results</li>
            <li>Export test reports</li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-3">Automation Options</h3>
          <ul className="list-disc list-inside">
            <li>Newman CLI runner</li>
            <li>CI/CD integration</li>
            <li>Scheduled runs</li>
            <li>Monitoring dashboards</li>
            <li>Alert notifications</li>
          </ul>
        </div>
      </div>

      <h2 className="text-2xl font-semibold mb-4">Data-Driven Testing</h2>

      <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded mb-6">
        <h3 className="font-semibold mb-4">Using Data Files:</h3>

        <div className="space-y-4">
          <div className="border-l-4 border-blue-500 pl-4">
            <h4 className="font-semibold mb-2">CSV Data Files</h4>
            <div className="bg-white dark:bg-gray-700 p-3 rounded mb-2">
              <code className="text-sm">test_data.csv</code>
            </div>
            <pre className="text-sm bg-white dark:bg-gray-700 p-2 rounded">
              <code>name,email,password
John Doe,john@example.com,pass123
Jane Smith,jane@example.com,pass456</code>
            </pre>
          </div>

          <div className="border-l-4 border-green-500 pl-4">
            <h4 className="font-semibold mb-2">JSON Data Files</h4>
            <div className="bg-white dark:bg-gray-700 p-3 rounded mb-2">
              <code className="text-sm">test_scenarios.json</code>
            </div>
            <pre className="text-sm bg-white dark:bg-gray-700 p-2 rounded">
              <code>{`[
  {
    "scenario": "valid_login",
    "email": "user@example.com",
    "password": "correct_password",
    "expected_status": 200
  }
]`}</code>
            </pre>
          </div>
        </div>
      </div>

      <h2 className="text-2xl font-semibold mb-4">Version Control & Collaboration</h2>

      <div className="space-y-4 mb-6">
        <div className="border border-gray-300 dark:border-gray-600 rounded-lg p-4">
          <h3 className="text-lg font-semibold mb-3">Team Collaboration</h3>
          <ul className="list-disc list-inside">
            <li>Share collections with team</li>
            <li>Workspace management</li>
            <li>Role-based access</li>
            <li>Change history tracking</li>
            <li>Comment and review system</li>
          </ul>
        </div>

        <div className="border border-gray-300 dark:border-gray-600 rounded-lg p-4">
          <h3 className="text-lg font-semibold mb-3">Version Control Integration</h3>
          <ul className="list-disc list-inside">
            <li>Git repository sync</li>
            <li>Backup and restore</li>
            <li>Change tracking</li>
            <li>Branch management</li>
            <li>Merge conflict resolution</li>
          </ul>
        </div>
      </div>

      <h2 className="text-2xl font-semibold mb-4">Best Practices</h2>

      <div className="grid md:grid-cols-2 gap-6 mb-6">
        <div>
          <h3 className="text-lg font-semibold mb-3">Collection Organization</h3>
          <ul className="list-disc list-inside">
            <li>Use clear naming conventions</li>
            <li>Group related requests</li>
            <li>Add comprehensive documentation</li>
            <li>Include example responses</li>
            <li>Define request dependencies</li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-3">Environment Management</h3>
          <ul className="list-disc list-inside">
            <li>Separate sensitive data</li>
            <li>Use descriptive variable names</li>
            <li>Document variable purposes</li>
            <li>Version environment configurations</li>
            <li>Regular security audits</li>
          </ul>
        </div>
      </div>

      <div className="bg-yellow-100 dark:bg-yellow-900 border-l-4 border-yellow-500 p-4 mb-6">
        <p className="font-semibold text-gray-900 dark:text-gray-100">🟧 Warning:</p>
        <p className="text-gray-700 dark:text-gray-300">Never commit sensitive data like API keys or passwords to version control. Use environment variables and secure secret management for production credentials.</p>
      </div>

      <div className="bg-purple-100 dark:bg-purple-900 border-l-4 border-purple-500 p-4 mb-6">
        <p className="font-semibold text-gray-900 dark:text-gray-100">🟪 Key Tip:</p>
        <p className="text-gray-700 dark:text-gray-300">Create comprehensive collections that cover all API endpoints and maintain separate environments for each deployment stage to ensure consistent and reliable API testing.</p>
      </div>

      <h2 className="text-2xl font-semibold mb-4">Collections & Environments Checklist</h2>

      <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded">
        <h3 className="font-semibold mb-3">Collection Setup:</h3>
        <ul className="list-disc list-inside mb-4">
          <li>✅ Logical grouping of requests</li>
          <li>✅ Clear naming conventions</li>
          <li>✅ Comprehensive documentation</li>
          <li>✅ Pre-request and test scripts</li>
          <li>✅ Example request/response data</li>
        </ul>

        <h3 className="font-semibold mb-3">Environment Configuration:</h3>
        <ul className="list-disc list-inside mb-4">
          <li>✅ Separate environments for each stage</li>
          <li>✅ Secure variable management</li>
          <li>✅ Consistent variable naming</li>
          <li>✅ Environment-specific configurations</li>
          <li>✅ Regular environment updates</li>
        </ul>

        <h3 className="font-semibold mb-3">Testing & Automation:</h3>
        <ul className="list-disc list-inside">
          <li>✅ Automated test execution</li>
          <li>✅ CI/CD pipeline integration</li>
          <li>✅ Comprehensive test coverage</li>
          <li>✅ Performance monitoring</li>
          <li>✅ Regular maintenance and updates</li>
        </ul>
      </div>
    </div>
  )
}
