export default function Page() {
  return (
    <div className="max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Postman Guide</h1>

      <p className="mb-6">
        Postman is the most popular API testing and development tool, providing a user-friendly interface for testing REST APIs, GraphQL, and more.
      </p>

      <div className="bg-blue-100 dark:bg-blue-900 border-l-4 border-blue-500 p-4 mb-6">
        <p className="font-semibold text-gray-900 dark:text-gray-100">🟦 Info:</p>
        <p className="text-gray-700 dark:text-gray-300">Postman allows you to create, test, and document APIs without writing code. It's essential for API testing, debugging, and collaboration.</p>
      </div>

      <h2 className="text-2xl font-semibold mb-4">Getting Started with Postman</h2>

      <div className="grid md:grid-cols-2 gap-6 mb-6">
        <div className="border border-gray-300 dark:border-gray-600 rounded-lg p-4">
          <h3 className="text-lg font-semibold mb-3 text-green-600 dark:text-green-400">Installation</h3>
          <ul className="list-disc list-inside space-y-1">
            <li>Download from postman.com</li>
            <li>Available for Windows, macOS, Linux</li>
            <li>Web version available</li>
            <li>Create free account for cloud sync</li>
          </ul>
        </div>

        <div className="border border-gray-300 dark:border-gray-600 rounded-lg p-4">
          <h3 className="text-lg font-semibold mb-3 text-blue-600 dark:text-blue-400">Interface Overview</h3>
          <ul className="list-disc list-inside space-y-1">
            <li>Sidebar: Collections and environments</li>
            <li>Main panel: Request builder</li>
            <li>Response panel: API responses</li>
            <li>Console: Debug information</li>
          </ul>
        </div>
      </div>

      <h2 className="text-2xl font-semibold mb-4">Creating Your First Request</h2>

      <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded mb-6">
        <div className="space-y-4">
          <div>
            <h3 className="font-semibold mb-2">Step 1: Create a New Request</h3>
            <ol className="list-decimal list-inside space-y-1">
              <li>Click the "+" tab or "New" button</li>
              <li>Select "HTTP Request"</li>
              <li>Choose HTTP method (GET, POST, etc.)</li>
              <li>Enter the API endpoint URL</li>
            </ol>
          </div>

          <div>
            <h3 className="font-semibold mb-2">Step 2: Configure Headers</h3>
            <ul className="list-disc list-inside space-y-1">
              <li>Go to "Headers" tab</li>
              <li>Add "Content-Type: application/json"</li>
              <li>Add authentication headers if needed</li>
              <li>Add custom headers as required</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-2">Step 3: Add Request Body (for POST/PUT)</h3>
            <ul className="list-disc list-inside space-y-1">
              <li>Select "Body" tab</li>
              <li>Choose "raw" and "JSON"</li>
              <li>Enter your JSON payload</li>
              <li>Use "form-data" for file uploads</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-2">Step 4: Send and View Response</h3>
            <ul className="list-disc list-inside space-y-1">
              <li>Click "Send" button</li>
              <li>View status code and response time</li>
              <li>Check response body and headers</li>
              <li>Use "Pretty" mode for JSON formatting</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-green-100 dark:bg-green-900 border-l-4 border-green-500 p-4 mb-6">
        <p className="font-semibold text-gray-900 dark:text-gray-100">🟩 Example:</p>
        <p className="text-gray-700 dark:text-gray-300">Create a GET request to <code>https://jsonplaceholder.typicode.com/users</code> to fetch user data and examine the JSON response structure.</p>
      </div>

      <h2 className="text-2xl font-semibold mb-4">Working with Collections</h2>

      <div className="grid md:grid-cols-2 gap-6 mb-6">
        <div>
          <h3 className="text-lg font-semibold mb-3">Creating Collections</h3>
          <ul className="list-disc list-inside space-y-1">
            <li>Click "Collections" tab</li>
            <li>Click "+" to create new collection</li>
            <li>Name your collection</li>
            <li>Add description and documentation</li>
            <li>Organize requests in folders</li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-3">Collection Benefits</h3>
          <ul className="list-disc list-inside space-y-1">
            <li>Group related API requests</li>
            <li>Share with team members</li>
            <li>Run automated tests</li>
            <li>Generate API documentation</li>
            <li>Version control integration</li>
          </ul>
        </div>
      </div>

      <h2 className="text-2xl font-semibold mb-4">Environment Variables</h2>

      <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded mb-6">
        <h3 className="font-semibold mb-3">Creating Environments:</h3>
        <ol className="list-decimal list-inside space-y-2 mb-4">
          <li>Click the gear icon (environments)</li>
          <li>Click "Add" to create new environment</li>
          <li>Name your environment (dev, staging, prod)</li>
          <li>Add variables with key-value pairs</li>
          <li>Select environment from dropdown</li>
        </ol>

        <h3 className="font-semibold mb-3">Using Variables in Requests:</h3>
        <div className="bg-white dark:bg-gray-700 p-3 rounded mb-3">
          <code className="text-sm">{"{{"}base_url{"}"}/api/users</code>
        </div>
        <p className="text-sm">Variables are enclosed in double curly braces</p>
      </div>

      <h2 className="text-2xl font-semibold mb-4">Writing Tests in Postman</h2>

      <div className="space-y-4 mb-6">
        <div className="border border-gray-300 dark:border-gray-600 rounded-lg p-4">
          <h3 className="text-lg font-semibold mb-3">Basic Test Structure</h3>
          <div className="bg-gray-100 dark:bg-gray-800 p-3 rounded">
            <pre className="text-sm">
              <code>{`pm.test("Status code is 200", function () {
    pm.response.to.have.status(200);
});

pm.test("Response time is less than 1000ms", function () {
    pm.expect(pm.response.responseTime).to.be.below(1000);
});

pm.test("Response has required fields", function () {
    var jsonData = pm.response.json();
    pm.expect(jsonData).to.have.property('id');
    pm.expect(jsonData).to.have.property('name');
});`}</code>
            </pre>
          </div>
        </div>

        <div className="border border-gray-300 dark:border-gray-600 rounded-lg p-4">
          <h3 className="text-lg font-semibold mb-3">Setting Environment Variables</h3>
          <div className="bg-gray-100 dark:bg-gray-800 p-3 rounded">
            <pre className="text-sm">
              <code>{`// Store response data for later use
var jsonData = pm.response.json();
pm.environment.set("user_id", jsonData.id);
pm.environment.set("auth_token", jsonData.token);

// Use in subsequent requests
pm.environment.get("user_id")`}</code>
            </pre>
          </div>
        </div>
      </div>

      <h2 className="text-2xl font-semibold mb-4">Advanced Features</h2>

      <div className="grid md:grid-cols-3 gap-4 mb-6">
        <div className="text-center p-4 border rounded-lg">
          <h3 className="font-semibold mb-2">Pre-request Scripts</h3>
          <p className="text-sm">Run JavaScript before sending requests</p>
        </div>
        <div className="text-center p-4 border rounded-lg">
          <h3 className="font-semibold mb-2">Test Scripts</h3>
          <p className="text-sm">Validate responses and set variables</p>
        </div>
        <div className="text-center p-4 border rounded-lg">
          <h3 className="font-semibold mb-2">Mock Servers</h3>
          <p className="text-sm">Create fake API responses</p>
        </div>
        <div className="text-center p-4 border rounded-lg">
          <h3 className="font-semibold mb-2">Monitors</h3>
          <p className="text-sm">Schedule automated API tests</p>
        </div>
        <div className="text-center p-4 border rounded-lg">
          <h3 className="font-semibold mb-2">Documentation</h3>
          <p className="text-sm">Auto-generate API docs</p>
        </div>
        <div className="text-center p-4 border rounded-lg">
          <h3 className="font-semibold mb-2">Newman</h3>
          <p className="text-sm">Command-line collection runner</p>
        </div>
      </div>

      <h2 className="text-2xl font-semibold mb-4">Postman Best Practices</h2>

      <div className="grid md:grid-cols-2 gap-6 mb-6">
        <div>
          <h3 className="text-lg font-semibold mb-3">Organization</h3>
          <ul className="list-disc list-inside">
            <li>Use descriptive names for requests</li>
            <li>Group related requests in collections</li>
            <li>Use folders for logical grouping</li>
            <li>Add descriptions to requests and collections</li>
            <li>Use consistent naming conventions</li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-3">Testing</h3>
          <ul className="list-disc list-inside">
            <li>Write comprehensive tests for each request</li>
            <li>Use environment variables for dynamic data</li>
            <li>Test both positive and negative scenarios</li>
            <li>Validate response schemas</li>
            <li>Check performance metrics</li>
          </ul>
        </div>
      </div>

      <h2 className="text-2xl font-semibold mb-4">Running Collections with Newman</h2>

      <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded mb-6">
        <h3 className="font-semibold mb-3">Installation:</h3>
        <pre className="text-sm mb-3">
          <code>npm install -g newman</code>
        </pre>

        <h3 className="font-semibold mb-3">Running a Collection:</h3>
        <pre className="text-sm mb-3">
          <code>{`newman run "My API Tests.postman_collection.json" \\
  --environment "Staging.postman_environment.json" \\
  --reporters cli,json \\
  --reporter-json-export results.json`}</code>
        </pre>

        <h3 className="font-semibold mb-3">CI/CD Integration:</h3>
        <pre className="text-sm">
          <code>{`# GitHub Actions example
- name: Run API Tests
  run: |
    newman run collection.json \\
      --environment staging.json \\
      --reporters cli,junit \\
      --reporter-junit-export results.xml`}</code>
        </pre>
      </div>

      <div className="bg-yellow-100 dark:bg-yellow-900 border-l-4 border-yellow-500 p-4 mb-6">
        <p className="font-semibold text-gray-900 dark:text-gray-100">🟧 Warning:</p>
        <p className="text-gray-700 dark:text-gray-300">Never include sensitive data like API keys or passwords in shared collections. Use environment variables and secure them properly.</p>
      </div>

      <div className="bg-purple-100 dark:bg-purple-900 border-l-4 border-purple-500 p-4 mb-6">
        <p className="font-semibold text-gray-900 dark:text-gray-100">🟪 Key Tip:</p>
        <p className="text-gray-700 dark:text-gray-300">Master Postman for efficient API testing. Combine it with Newman for CI/CD integration and comprehensive API validation workflows.</p>
      </div>

      <h2 className="text-2xl font-semibold mb-4">Postman Testing Checklist</h2>

      <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded">
        <h3 className="font-semibold mb-3">Request Configuration:</h3>
        <ul className="list-disc list-inside mb-4">
          <li>✅ Correct HTTP method selected</li>
          <li>✅ URL is properly formatted</li>
          <li>✅ Required headers are present</li>
          <li>✅ Request body matches Content-Type</li>
          <li>✅ Authentication is configured</li>
          <li>✅ Environment variables are used</li>
        </ul>

        <h3 className="font-semibold mb-3">Response Validation:</h3>
        <ul className="list-disc list-inside mb-4">
          <li>✅ Status code is as expected</li>
          <li>✅ Response time is acceptable</li>
          <li>✅ Response format matches Content-Type</li>
          <li>✅ Required fields are present</li>
          <li>✅ Data types are correct</li>
          <li>✅ Error messages are clear</li>
        </ul>

        <h3 className="font-semibold mb-3">Testing Best Practices:</h3>
        <ul className="list-disc list-inside">
          <li>✅ Tests are written for each request</li>
          <li>✅ Edge cases are covered</li>
          <li>✅ Collections are well organized</li>
          <li>✅ Documentation is up to date</li>
          <li>✅ CI/CD integration is configured</li>
        </ul>
      </div>
    </div>
  )
}
