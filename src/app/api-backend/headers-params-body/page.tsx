export default function Page() {
  return (
    <div className="max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Headers, Parameters & Request Body</h1>

      <p className="mb-6">
        HTTP requests and responses contain headers, URL parameters, and request/response bodies that carry essential information for API communication.
      </p>

      <div className="bg-blue-100 dark:bg-blue-900 border-l-4 border-blue-500 p-4 mb-6">
        <p className="font-semibold text-gray-900 dark:text-gray-100">🟦 Info:</p>
        <p className="text-gray-700 dark:text-gray-300">Headers provide metadata about the request/response, parameters pass data in URLs, and bodies contain the main payload data.</p>
      </div>

      <h2 className="text-2xl font-semibold mb-4">HTTP Headers</h2>

      <div className="grid md:grid-cols-2 gap-6 mb-6">
        <div className="border border-gray-300 dark:border-gray-600 rounded-lg p-4">
          <h3 className="text-lg font-semibold mb-3 text-blue-600 dark:text-blue-400">Request Headers</h3>
          <ul className="list-disc list-inside space-y-2">
            <li><strong>Content-Type:</strong> Format of request body</li>
            <li><strong>Authorization:</strong> Authentication credentials</li>
            <li><strong>User-Agent:</strong> Client application info</li>
            <li><strong>Accept:</strong> Acceptable response formats</li>
            <li><strong>Accept-Language:</strong> Preferred language</li>
            <li><strong>Cache-Control:</strong> Caching directives</li>
          </ul>
        </div>

        <div className="border border-gray-300 dark:border-gray-600 rounded-lg p-4">
          <h3 className="text-lg font-semibold mb-3 text-green-600 dark:text-green-400">Response Headers</h3>
          <ul className="list-disc list-inside space-y-2">
            <li><strong>Content-Type:</strong> Format of response body</li>
            <li><strong>Content-Length:</strong> Size of response body</li>
            <li><strong>Cache-Control:</strong> Caching instructions</li>
            <li><strong>ETag:</strong> Resource version identifier</li>
            <li><strong>Location:</strong> Redirect URL</li>
            <li><strong>Set-Cookie:</strong> Cookie data</li>
          </ul>
        </div>
      </div>

      <h2 className="text-2xl font-semibold mb-4">Common Content-Type Headers</h2>

      <div className="grid md:grid-cols-3 gap-4 mb-6">
        <div className="text-center p-4 border rounded-lg">
          <h3 className="font-semibold mb-2">application/json</h3>
          <p className="text-sm">JSON data format</p>
          <p className="text-xs mt-1 font-mono">Most common for APIs</p>
        </div>
        <div className="text-center p-4 border rounded-lg">
          <h3 className="font-semibold mb-2">application/xml</h3>
          <p className="text-sm">XML data format</p>
          <p className="text-xs mt-1 font-mono">Legacy systems</p>
        </div>
        <div className="text-center p-4 border rounded-lg">
          <h3 className="font-semibold mb-2">text/plain</h3>
          <p className="text-sm">Plain text</p>
          <p className="text-xs mt-1 font-mono">Simple responses</p>
        </div>
        <div className="text-center p-4 border rounded-lg">
          <h3 className="font-semibold mb-2">multipart/form-data</h3>
          <p className="text-sm">File uploads</p>
          <p className="text-xs mt-1 font-mono">Form submissions</p>
        </div>
        <div className="text-center p-4 border rounded-lg">
          <h3 className="font-semibold mb-2">application/x-www-form-urlencoded</h3>
          <p className="text-sm">Form encoded data</p>
          <p className="text-xs mt-1 font-mono">HTML forms</p>
        </div>
        <div className="text-center p-4 border rounded-lg">
          <h3 className="font-semibold mb-2">application/octet-stream</h3>
          <p className="text-sm">Binary data</p>
          <p className="text-xs mt-1 font-mono">File downloads</p>
        </div>
      </div>

      <div className="bg-green-100 dark:bg-green-900 border-l-4 border-green-500 p-4 mb-6">
        <p className="font-semibold text-gray-900 dark:text-gray-100">🟩 Example:</p>
        <p className="text-gray-700 dark:text-gray-300">A login API request includes <code>Content-Type: application/json</code> header and a JSON body with username and password.</p>
      </div>

      <h2 className="text-2xl font-semibold mb-4">URL Parameters</h2>

      <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded mb-6">
        <h3 className="font-semibold mb-3">Parameter Types:</h3>

        <div className="space-y-4">
          <div className="border-l-4 border-blue-500 pl-4">
            <h4 className="font-semibold mb-2">Query Parameters</h4>
            <p className="mb-2">Added to URL after ? for filtering, sorting, pagination</p>
            <code className="block bg-gray-200 dark:bg-gray-700 p-2 rounded text-sm">
              GET /api/users?page=1&limit=10&sort=name&status=active
            </code>
          </div>

          <div className="border-l-4 border-green-500 pl-4">
            <h4 className="font-semibold mb-2">Path Parameters</h4>
            <p className="mb-2">Part of the URL path, identify specific resources</p>
            <code className="block bg-gray-200 dark:bg-gray-700 p-2 rounded text-sm">
              GET /api/users/123/posts/456
            </code>
          </div>

          <div className="border-l-4 border-purple-500 pl-4">
            <h4 className="font-semibold mb-2">Matrix Parameters</h4>
            <p className="mb-2">Semicolon-separated parameters in path segments</p>
            <code className="block bg-gray-200 dark:bg-gray-700 p-2 rounded text-sm">
              GET /api/users;status=active/123;expand=posts
            </code>
          </div>
        </div>
      </div>

      <h2 className="text-2xl font-semibold mb-4">Request Body Formats</h2>

      <div className="space-y-6 mb-6">
        <div className="border border-gray-300 dark:border-gray-600 rounded-lg p-6">
          <h3 className="text-xl font-semibold mb-3 text-blue-600 dark:text-blue-400">JSON Request Body</h3>
          <p className="mb-3">Most common format for REST APIs</p>
          <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded">
            <pre className="text-sm">
              <code>{`POST /api/users
Content-Type: application/json

{
  "name": "John Doe",
  "email": "john@example.com",
  "role": "user",
  "preferences": {
    "theme": "dark",
    "notifications": true
  },
  "tags": ["developer", "qa"]
}`}</code>
            </pre>
          </div>
        </div>

        <div className="border border-gray-300 dark:border-gray-600 rounded-lg p-6">
          <h3 className="text-xl font-semibold mb-3 text-green-600 dark:text-green-400">Form Data Request Body</h3>
          <p className="mb-3">Used for HTML forms and file uploads</p>
          <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded">
            <pre className="text-sm">
              <code>{`POST /api/upload
Content-Type: multipart/form-data; boundary=----WebKitFormBoundary

------WebKitFormBoundary
Content-Disposition: form-data; name="file"; filename="document.pdf"
Content-Type: application/pdf

[Binary file data]

------WebKitFormBoundary
Content-Disposition: form-data; name="description"

User manual for the new feature

------WebKitFormBoundary--`}</code>
            </pre>
          </div>
        </div>

        <div className="border border-gray-300 dark:border-gray-600 rounded-lg p-6">
          <h3 className="text-xl font-semibold mb-3 text-orange-600 dark:text-orange-400">URL-Encoded Request Body</h3>
          <p className="mb-3">Simple key-value pairs</p>
          <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded">
            <pre className="text-sm">
              <code>{`POST /api/login
Content-Type: application/x-www-form-urlencoded

username=john.doe&password=mypassword&remember=true`}</code>
            </pre>
          </div>
        </div>
      </div>

      <h2 className="text-2xl font-semibold mb-4">Authentication Headers</h2>

      <div className="grid md:grid-cols-2 gap-6 mb-6">
        <div className="border border-gray-300 dark:border-gray-600 rounded-lg p-4">
          <h3 className="text-lg font-semibold mb-3">Bearer Token</h3>
          <div className="bg-gray-100 dark:bg-gray-800 p-3 rounded mb-2">
            <code className="text-sm">Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...</code>
          </div>
          <p className="text-sm">Most common for JWT and OAuth tokens</p>
        </div>

        <div className="border border-gray-300 dark:border-gray-600 rounded-lg p-4">
          <h3 className="text-lg font-semibold mb-3">Basic Authentication</h3>
          <div className="bg-gray-100 dark:bg-gray-800 p-3 rounded mb-2">
            <code className="text-sm">Authorization: Basic dXNlcjpwYXNzd29yZA==</code>
          </div>
          <p className="text-sm">Base64 encoded username:password</p>
        </div>

        <div className="border border-gray-300 dark:border-gray-600 rounded-lg p-4">
          <h3 className="text-lg font-semibold mb-3">API Key</h3>
          <div className="bg-gray-100 dark:bg-gray-800 p-3 rounded mb-2">
            <code className="text-sm">X-API-Key: abc123def456</code>
          </div>
          <p className="text-sm">Simple API key authentication</p>
        </div>

        <div className="border border-gray-300 dark:border-gray-600 rounded-lg p-4">
          <h3 className="text-lg font-semibold mb-3">Digest Authentication</h3>
          <div className="bg-gray-100 dark:bg-gray-800 p-3 rounded mb-2">
            <code className="text-sm">Authorization: Digest username="user", realm="api", ...</code>
          </div>
          <p className="text-sm">More secure than Basic auth</p>
        </div>
      </div>

      <h2 className="text-2xl font-semibold mb-4">Header Testing Checklist</h2>

      <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded mb-6">
        <h3 className="font-semibold mb-3">Request Headers:</h3>
        <ul className="list-disc list-inside mb-4">
          <li>✅ Content-Type matches request body format</li>
          <li>✅ Authorization header present when required</li>
          <li>✅ Accept header specifies correct response format</li>
          <li>✅ User-Agent identifies client properly</li>
          <li>✅ Custom headers are correctly formatted</li>
          <li>✅ Header values are properly encoded</li>
        </ul>

        <h3 className="font-semibold mb-3">Response Headers:</h3>
        <ul className="list-disc list-inside">
          <li>✅ Content-Type matches response body format</li>
          <li>✅ Content-Length is accurate</li>
          <li>✅ Cache-Control headers are appropriate</li>
          <li>✅ CORS headers allow proper cross-origin access</li>
          <li>✅ Security headers are present (CSP, HSTS, etc.)</li>
          <li>✅ Set-Cookie headers are secure</li>
        </ul>
      </div>

      <h2 className="text-2xl font-semibold mb-4">Parameter Testing</h2>

      <div className="grid md:grid-cols-2 gap-6 mb-6">
        <div>
          <h3 className="text-lg font-semibold mb-3">Query Parameters</h3>
          <ul className="list-disc list-inside">
            <li>Test with valid values</li>
            <li>Test with invalid values</li>
            <li>Test parameter combinations</li>
            <li>Test URL encoding</li>
            <li>Test parameter limits</li>
            <li>Test optional vs required parameters</li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-3">Path Parameters</h3>
          <ul className="list-disc list-inside">
            <li>Test with valid resource IDs</li>
            <li>Test with non-existent IDs</li>
            <li>Test with malformed IDs</li>
            <li>Test with special characters</li>
            <li>Test nested resource paths</li>
            <li>Test parameter constraints</li>
          </ul>
        </div>
      </div>

      <h2 className="text-2xl font-semibold mb-4">Request Body Validation</h2>

      <div className="bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg p-6 mb-6">
        <div className="grid md:grid-cols-3 gap-4">
          <div className="text-center">
            <h4 className="font-semibold mb-2">Required Fields</h4>
            <ul className="list-disc list-inside text-sm">
              <li>Missing required fields</li>
              <li>Null vs empty values</li>
              <li>Field type validation</li>
            </ul>
          </div>

          <div className="text-center">
            <h4 className="font-semibold mb-2">Data Types</h4>
            <ul className="list-disc list-inside text-sm">
              <li>String vs number</li>
              <li>Boolean values</li>
              <li>Date formats</li>
              <li>Array validation</li>
            </ul>
          </div>

          <div className="text-center">
            <h4 className="font-semibold mb-2">Constraints</h4>
            <ul className="list-disc list-inside text-sm">
              <li>Minimum/maximum lengths</li>
              <li>Pattern validation</li>
              <li>Range validation</li>
              <li>Enum values</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-yellow-100 dark:bg-yellow-900 border-l-4 border-yellow-500 p-4 mb-6">
        <p className="font-semibold text-gray-900 dark:text-gray-100">🟧 Warning:</p>
        <p className="text-gray-700 dark:text-gray-300">Always validate and sanitize all input data from headers, parameters, and request bodies to prevent security vulnerabilities like injection attacks.</p>
      </div>

      <div className="bg-purple-100 dark:bg-purple-900 border-l-4 border-purple-500 p-4 mb-6">
        <p className="font-semibold text-gray-900 dark:text-gray-100">🟪 Key Tip:</p>
        <p className="text-gray-700 dark:text-gray-300">Use tools like Postman or curl to inspect and test headers, parameters, and request bodies. Always document the expected format and validation rules for your API.</p>
      </div>

      <h2 className="text-2xl font-semibold mb-4">Common Testing Scenarios</h2>

      <div className="space-y-4">
        <div className="border-l-4 border-red-500 pl-4">
          <h3 className="font-semibold mb-2">Security Testing</h3>
          <ul className="list-disc list-inside">
            <li>Test for header injection attacks</li>
            <li>Verify HTTPS-only header transmission</li>
            <li>Check for sensitive data in headers</li>
            <li>Validate CORS configuration</li>
            <li>Test rate limiting headers</li>
          </ul>
        </div>

        <div className="border-l-4 border-blue-500 pl-4">
          <h3 className="font-semibold mb-2">Performance Testing</h3>
          <ul className="list-disc list-inside">
            <li>Measure header processing time</li>
            <li>Test large header values</li>
            <li>Verify compression headers</li>
            <li>Check caching header effectiveness</li>
            <li>Test header size limits</li>
          </ul>
        </div>

        <div className="border-l-4 border-green-500 pl-4">
          <h3 className="font-semibold mb-2">Compatibility Testing</h3>
          <ul className="list-disc list-inside">
            <li>Test across different clients</li>
            <li>Verify header case sensitivity</li>
            <li>Check header ordering</li>
            <li>Test multiple header values</li>
            <li>Validate custom header support</li>
          </ul>
        </div>
      </div>
    </div>
  )
}
