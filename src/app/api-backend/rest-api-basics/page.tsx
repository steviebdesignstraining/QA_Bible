export default function Page() {
  return (
    <div className="max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">REST API Basics</h1>

      <p className="mb-6">
        REST (Representational State Transfer) APIs are the foundation of modern web services. They provide a standardized way for applications to communicate over HTTP.
      </p>

      <div className="bg-blue-100 dark:bg-blue-900 border-l-4 border-blue-500 p-4 mb-6">
        <p className="font-semibold text-gray-900 dark:text-gray-100">🟦 Info:</p>
        <p className="text-gray-700 dark:text-gray-300">REST APIs use HTTP methods to perform operations on resources, identified by URLs. They are stateless, cacheable, and follow uniform interface principles.</p>
      </div>

      <h2 className="text-2xl font-semibold mb-4">What is REST?</h2>

      <div className="grid md:grid-cols-2 gap-6 mb-6">
        <div className="border border-gray-300 dark:border-gray-600 rounded-lg p-4">
          <h3 className="text-lg font-semibold mb-3 text-green-600 dark:text-green-400">REST Principles</h3>
          <ul className="list-disc list-inside space-y-2">
            <li><strong>Stateless:</strong> Each request is independent</li>
            <li><strong>Client-Server:</strong> Clear separation of concerns</li>
            <li><strong>Cacheable:</strong> Responses can be cached</li>
            <li><strong>Uniform Interface:</strong> Consistent resource access</li>
            <li><strong>Layered System:</strong> Architecture layers are hidden</li>
          </ul>
        </div>

        <div className="border border-gray-300 dark:border-gray-600 rounded-lg p-4">
          <h3 className="text-lg font-semibold mb-3 text-blue-600 dark:text-blue-400">REST vs SOAP</h3>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span className="font-medium">REST:</span>
              <span>Lighter, flexible, uses HTTP</span>
            </div>
            <div className="flex justify-between">
              <span className="font-medium">SOAP:</span>
              <span>Heavy, structured, uses XML</span>
            </div>
            <div className="flex justify-between">
              <span className="font-medium">REST:</span>
              <span>JSON/XML responses</span>
            </div>
            <div className="flex justify-between">
              <span className="font-medium">SOAP:</span>
              <span>Strict XML envelopes</span>
            </div>
          </div>
        </div>
      </div>

      <h2 className="text-2xl font-semibold mb-4">Resources and URIs</h2>

      <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded mb-6">
        <h3 className="font-semibold mb-3">URI Structure Examples:</h3>
        <div className="space-y-2 font-mono text-sm">
          <div><code>https://api.example.com/users</code> - Collection of users</div>
          <div><code>https://api.example.com/users/123</code> - Specific user</div>
          <div><code>https://api.example.com/users/123/posts</code> - User's posts</div>
          <div><code>https://api.example.com/users?status=active</code> - Filtered users</div>
        </div>
      </div>

      <div className="bg-green-100 dark:bg-green-900 border-l-4 border-green-500 p-4 mb-6">
        <p className="font-semibold text-gray-900 dark:text-gray-100">🟩 Example:</p>
        <p className="text-gray-700 dark:text-gray-300">A blog API might have resources like <code>/posts</code> for articles, <code>/users</code> for authors, and <code>/comments</code> for user feedback.</p>
      </div>

      <h2 className="text-2xl font-semibold mb-4">HTTP Methods in REST</h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <div className="border border-green-300 dark:border-green-600 rounded-lg p-4 bg-green-50 dark:bg-green-900/20">
          <h3 className="text-lg font-semibold mb-2 text-green-700 dark:text-green-400">GET</h3>
          <p className="text-sm">Retrieve resource data</p>
          <p className="text-xs mt-1 font-mono">Safe, Idempotent</p>
        </div>

        <div className="border border-blue-300 dark:border-blue-600 rounded-lg p-4 bg-blue-50 dark:bg-blue-900/20">
          <h3 className="text-lg font-semibold mb-2 text-blue-700 dark:text-blue-400">POST</h3>
          <p className="text-sm">Create new resource</p>
          <p className="text-xs mt-1 font-mono">Not Idempotent</p>
        </div>

        <div className="border border-yellow-300 dark:border-yellow-600 rounded-lg p-4 bg-yellow-50 dark:bg-yellow-900/20">
          <h3 className="text-lg font-semibold mb-2 text-yellow-700 dark:text-yellow-400">PUT</h3>
          <p className="text-sm">Update entire resource</p>
          <p className="text-xs mt-1 font-mono">Idempotent</p>
        </div>

        <div className="border border-orange-300 dark:border-orange-600 rounded-lg p-4 bg-orange-50 dark:bg-orange-900/20">
          <h3 className="text-lg font-semibold mb-2 text-orange-700 dark:text-orange-400">PATCH</h3>
          <p className="text-sm">Partial resource update</p>
          <p className="text-xs mt-1 font-mono">Not Idempotent</p>
        </div>

        <div className="border border-red-300 dark:border-red-600 rounded-lg p-4 bg-red-50 dark:bg-red-900/20">
          <h3 className="text-lg font-semibold mb-2 text-red-700 dark:text-red-400">DELETE</h3>
          <p className="text-sm">Remove resource</p>
          <p className="text-xs mt-1 font-mono">Idempotent</p>
        </div>

        <div className="border border-purple-300 dark:border-purple-600 rounded-lg p-4 bg-purple-50 dark:bg-purple-900/20">
          <h3 className="text-lg font-semibold mb-2 text-purple-700 dark:text-purple-400">HEAD</h3>
          <p className="text-sm">Get headers only</p>
          <p className="text-xs mt-1 font-mono">Safe, Idempotent</p>
        </div>

        <div className="border border-indigo-300 dark:border-indigo-600 rounded-lg p-4 bg-indigo-50 dark:bg-indigo-900/20">
          <h3 className="text-lg font-semibold mb-2 text-indigo-700 dark:text-indigo-400">OPTIONS</h3>
          <p className="text-sm">Describe capabilities</p>
          <p className="text-xs mt-1 font-mono">Safe, Idempotent</p>
        </div>
      </div>

      <h2 className="text-2xl font-semibold mb-4">API Request Structure</h2>

      <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded mb-6">
        <h3 className="font-semibold mb-3">Complete HTTP Request:</h3>
        <pre className="text-sm overflow-x-auto">
          <code>{`POST /api/users HTTP/1.1
Host: api.example.com
Content-Type: application/json
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
User-Agent: MyApp/1.0

{
  "name": "John Doe",
  "email": "john@example.com",
  "role": "user"
}`}</code>
        </pre>
      </div>

      <h2 className="text-2xl font-semibold mb-4">API Response Structure</h2>

      <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded mb-6">
        <h3 className="font-semibold mb-3">Typical JSON Response:</h3>
        <pre className="text-sm overflow-x-auto">
          <code>{`HTTP/1.1 201 Created
Content-Type: application/json
Location: /api/users/123
X-Rate-Limit-Remaining: 99

{
  "id": 123,
  "name": "John Doe",
  "email": "john@example.com",
  "role": "user",
  "created_at": "2024-01-15T10:30:00Z",
  "links": {
    "self": "/api/users/123",
    "posts": "/api/users/123/posts"
  }
}`}</code>
        </pre>
      </div>

      <h2 className="text-2xl font-semibold mb-4">Content Types</h2>

      <div className="grid md:grid-cols-3 gap-4 mb-6">
        <div className="text-center p-4 border rounded-lg">
          <h3 className="font-semibold mb-2">application/json</h3>
          <p className="text-sm">Most common for APIs</p>
        </div>
        <div className="text-center p-4 border rounded-lg">
          <h3 className="font-semibold mb-2">application/xml</h3>
          <p className="text-sm">Legacy systems</p>
        </div>
        <div className="text-center p-4 border rounded-lg">
          <h3 className="font-semibold mb-2">text/plain</h3>
          <p className="text-sm">Simple text responses</p>
        </div>
        <div className="text-center p-4 border rounded-lg">
          <h3 className="font-semibold mb-2">multipart/form-data</h3>
          <p className="text-sm">File uploads</p>
        </div>
        <div className="text-center p-4 border rounded-lg">
          <h3 className="font-semibold mb-2">application/x-www-form-urlencoded</h3>
          <p className="text-sm">Form submissions</p>
        </div>
      </div>

      <div className="bg-yellow-100 dark:bg-yellow-900 border-l-4 border-yellow-500 p-4 mb-6">
        <p className="font-semibold text-gray-900 dark:text-gray-100">🟧 Warning:</p>
        <p className="text-gray-700 dark:text-gray-300">REST APIs should be versioned (e.g., /api/v1/users) to maintain backward compatibility when making changes.</p>
      </div>

      <div className="bg-purple-100 dark:bg-purple-900 border-l-4 border-purple-500 p-4 mb-6">
        <p className="font-semibold text-gray-900 dark:text-gray-100">🟪 Key Tip:</p>
        <p className="text-gray-700 dark:text-gray-300">Use consistent naming conventions (snake_case or camelCase), provide clear error messages, and document your API thoroughly.</p>
      </div>

      <h2 className="text-2xl font-semibold mb-4">REST API Design Best Practices</h2>

      <div className="grid md:grid-cols-2 gap-6 mb-6">
        <div>
          <h3 className="text-lg font-semibold mb-3">Resource Naming</h3>
          <ul className="list-disc list-inside">
            <li>Use nouns, not verbs</li>
            <li>Use plural nouns for collections</li>
            <li>Use lowercase with hyphens</li>
            <li>Be consistent across endpoints</li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-3">Response Design</h3>
          <ul className="list-disc list-inside">
            <li>Include resource IDs</li>
            <li>Provide HATEOAS links</li>
            <li>Use consistent status codes</li>
            <li>Include timestamps</li>
          </ul>
        </div>
      </div>

      <h2 className="text-2xl font-semibold mb-4">API Testing Checklist</h2>

      <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded">
        <h3 className="font-semibold mb-3">Basic Validation:</h3>
        <ul className="list-disc list-inside mb-4">
          <li>✅ Correct HTTP status codes returned</li>
          <li>✅ Proper Content-Type headers</li>
          <li>✅ Valid JSON/XML response structure</li>
          <li>✅ Required fields present in responses</li>
          <li>✅ Error messages are clear and helpful</li>
        </ul>

        <h3 className="font-semibold mb-3">Functional Testing:</h3>
        <ul className="list-disc list-inside">
          <li>✅ CRUD operations work correctly</li>
          <li>✅ Authentication and authorization</li>
          <li>✅ Input validation and sanitization</li>
          <li>✅ Business logic implementation</li>
          <li>✅ Edge cases and error conditions</li>
        </ul>
      </div>
    </div>
  )
}
