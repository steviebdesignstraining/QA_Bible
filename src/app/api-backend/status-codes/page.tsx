export default function Page() {
  return (
    <div className="max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">HTTP Status Codes</h1>

      <p className="mb-6">
        HTTP status codes are three-digit numbers returned by servers to indicate the result of a client's request. They provide essential information about request success, failures, and required actions.
      </p>

      <div className="bg-blue-100 dark:bg-blue-900 border-l-4 border-blue-500 p-4 mb-6">
        <p className="font-semibold text-gray-900 dark:text-gray-100">🟦 Info:</p>
        <p className="text-gray-700 dark:text-gray-300">Status codes are grouped by their first digit: 1xx (informational), 2xx (successful), 3xx (redirection), 4xx (client errors), 5xx (server errors).</p>
      </div>

      <h2 className="text-2xl font-semibold mb-4">Status Code Categories</h2>

      <div className="grid md:grid-cols-5 gap-4 mb-6">
        <div className="text-center p-4 border-2 border-blue-300 dark:border-blue-600 rounded-lg bg-blue-50 dark:bg-blue-900/20">
          <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">1xx</div>
          <h3 className="font-semibold mb-1">Informational</h3>
          <p className="text-sm">Request received, continuing process</p>
        </div>

        <div className="text-center p-4 border-2 border-green-300 dark:border-green-600 rounded-lg bg-green-50 dark:bg-green-900/20">
          <div className="text-3xl font-bold text-green-600 dark:text-green-400 mb-2">2xx</div>
          <h3 className="font-semibold mb-1">Successful</h3>
          <p className="text-sm">Request successfully received, understood, and accepted</p>
        </div>

        <div className="text-center p-4 border-2 border-yellow-300 dark:border-yellow-600 rounded-lg bg-yellow-50 dark:bg-yellow-900/20">
          <div className="text-3xl font-bold text-yellow-600 dark:text-yellow-400 mb-2">3xx</div>
          <h3 className="font-semibold mb-1">Redirection</h3>
          <p className="text-sm">Further action needed to complete the request</p>
        </div>

        <div className="text-center p-4 border-2 border-orange-300 dark:border-orange-600 rounded-lg bg-orange-50 dark:bg-orange-900/20">
          <div className="text-3xl font-bold text-orange-600 dark:text-orange-400 mb-2">4xx</div>
          <h3 className="font-semibold mb-1">Client Error</h3>
          <p className="text-sm">Request contains bad syntax or cannot be fulfilled</p>
        </div>

        <div className="text-center p-4 border-2 border-red-300 dark:border-red-600 rounded-lg bg-red-50 dark:bg-red-900/20">
          <div className="text-3xl font-bold text-red-600 dark:text-red-400 mb-2">5xx</div>
          <h3 className="font-semibold mb-1">Server Error</h3>
          <p className="text-sm">Server failed to fulfill a valid request</p>
        </div>
      </div>

      <h2 className="text-2xl font-semibold mb-4">Common Status Codes</h2>

      <div className="space-y-4 mb-6">
        <div className="border border-green-300 dark:border-green-600 rounded-lg p-6 bg-green-50 dark:bg-green-900/20">
          <div className="flex items-center mb-4">
            <h3 className="text-2xl font-bold text-green-700 dark:text-green-400 mr-4">200 OK</h3>
            <span className="bg-green-200 dark:bg-green-800 px-3 py-1 rounded-full text-sm font-mono">Success</span>
          </div>
          <p className="mb-3">Standard response for successful HTTP requests.</p>
          <div className="bg-gray-100 dark:bg-gray-800 p-3 rounded">
            <strong>Common Uses:</strong> GET requests, successful POST/PUT/PATCH operations
          </div>
        </div>

        <div className="border border-blue-300 dark:border-blue-600 rounded-lg p-6 bg-blue-50 dark:bg-blue-900/20">
          <div className="flex items-center mb-4">
            <h3 className="text-2xl font-bold text-blue-700 dark:text-blue-400 mr-4">201 Created</h3>
            <span className="bg-blue-200 dark:bg-blue-800 px-3 py-1 rounded-full text-sm font-mono">Success</span>
          </div>
          <p className="mb-3">Request has been fulfilled and a new resource has been created.</p>
          <div className="bg-gray-100 dark:bg-gray-800 p-3 rounded">
            <strong>Common Uses:</strong> POST requests that create new resources
          </div>
        </div>

        <div className="border border-yellow-300 dark:border-yellow-600 rounded-lg p-6 bg-yellow-50 dark:bg-yellow-900/20">
          <div className="flex items-center mb-4">
            <h3 className="text-2xl font-bold text-yellow-700 dark:text-yellow-400 mr-4">301 Moved Permanently</h3>
            <span className="bg-yellow-200 dark:bg-yellow-800 px-3 py-1 rounded-full text-sm font-mono">Redirection</span>
          </div>
          <p className="mb-3">Resource has been permanently moved to a new URL.</p>
          <div className="bg-gray-100 dark:bg-gray-800 p-3 rounded">
            <strong>Location Header:</strong> Contains the new URL
          </div>
        </div>

        <div className="border border-orange-300 dark:border-orange-600 rounded-lg p-6 bg-orange-50 dark:bg-orange-900/20">
          <div className="flex items-center mb-4">
            <h3 className="text-2xl font-bold text-orange-700 dark:text-orange-400 mr-4">400 Bad Request</h3>
            <span className="bg-orange-200 dark:bg-orange-800 px-3 py-1 rounded-full text-sm font-mono">Client Error</span>
          </div>
          <p className="mb-3">Server cannot process the request due to malformed syntax.</p>
          <div className="bg-gray-100 dark:bg-gray-800 p-3 rounded">
            <strong>Common Causes:</strong> Invalid JSON, missing required fields, wrong data types
          </div>
        </div>

        <div className="border border-red-300 dark:border-red-600 rounded-lg p-6 bg-red-50 dark:bg-red-900/20">
          <div className="flex items-center mb-4">
            <h3 className="text-2xl font-bold text-red-700 dark:text-red-400 mr-4">401 Unauthorized</h3>
            <span className="bg-red-200 dark:bg-red-800 px-3 py-1 rounded-full text-sm font-mono">Client Error</span>
          </div>
          <p className="mb-3">Authentication is required and has failed or not been provided.</p>
          <div className="bg-gray-100 dark:bg-gray-800 p-3 rounded">
            <strong>WWW-Authenticate Header:</strong> Specifies authentication method
          </div>
        </div>

        <div className="border border-red-300 dark:border-red-600 rounded-lg p-6 bg-red-50 dark:bg-red-900/20">
          <div className="flex items-center mb-4">
            <h3 className="text-2xl font-bold text-red-700 dark:text-red-400 mr-4">403 Forbidden</h3>
            <span className="bg-red-200 dark:bg-red-800 px-3 py-1 rounded-full text-sm font-mono">Client Error</span>
          </div>
          <p className="mb-3">Server understood the request but refuses to authorize it.</p>
          <div className="bg-gray-100 dark:bg-gray-800 p-3 rounded">
            <strong>Common Causes:</strong> Insufficient permissions, IP restrictions, account suspended
          </div>
        </div>

        <div className="border border-red-300 dark:border-red-600 rounded-lg p-6 bg-red-50 dark:bg-red-900/20">
          <div className="flex items-center mb-4">
            <h3 className="text-2xl font-bold text-red-700 dark:text-red-400 mr-4">404 Not Found</h3>
            <span className="bg-red-200 dark:bg-red-800 px-3 py-1 rounded-full text-sm font-mono">Client Error</span>
          </div>
          <p className="mb-3">Server cannot find the requested resource.</p>
          <div className="bg-gray-100 dark:bg-gray-800 p-3 rounded">
            <strong>Common Causes:</strong> Wrong URL, deleted resource, moved endpoint
          </div>
        </div>

        <div className="border border-red-300 dark:border-red-600 rounded-lg p-6 bg-red-50 dark:bg-red-900/20">
          <div className="flex items-center mb-4">
            <h3 className="text-2xl font-bold text-red-700 dark:text-red-400 mr-4">500 Internal Server Error</h3>
            <span className="bg-red-200 dark:bg-red-800 px-3 py-1 rounded-full text-sm font-mono">Server Error</span>
          </div>
          <p className="mb-3">Server encountered an unexpected condition that prevented it from fulfilling the request.</p>
          <div className="bg-gray-100 dark:bg-gray-800 p-3 rounded">
            <strong>Common Causes:</strong> Code bugs, database errors, server configuration issues
          </div>
        </div>
      </div>

      <h2 className="text-2xl font-semibold mb-4">Status Code Testing Checklist</h2>

      <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded mb-6">
        <h3 className="font-semibold mb-3">Happy Path Testing:</h3>
        <ul className="list-disc list-inside mb-4">
          <li>✅ GET /users returns 200 OK</li>
          <li>✅ POST /users with valid data returns 201 Created</li>
          <li>✅ PUT /users/123 with valid data returns 200 OK</li>
          <li>✅ DELETE /users/123 returns 204 No Content</li>
        </ul>

        <h3 className="font-semibold mb-3">Error Condition Testing:</h3>
        <ul className="list-disc list-inside mb-4">
          <li>✅ GET /nonexistent returns 404 Not Found</li>
          <li>✅ POST /users with invalid data returns 400 Bad Request</li>
          <li>✅ GET /protected without auth returns 401 Unauthorized</li>
          <li>✅ GET /admin without permissions returns 403 Forbidden</li>
          <li>✅ POST /read-only-resource returns 405 Method Not Allowed</li>
        </ul>

        <h3 className="font-semibold mb-3">Edge Case Testing:</h3>
        <ul className="list-disc list-inside">
          <li>✅ Very large request payload returns appropriate status</li>
          <li>✅ Rate limited requests return 429 Too Many Requests</li>
          <li>✅ Server overload returns 503 Service Unavailable</li>
          <li>✅ Database connection issues return 500 Internal Server Error</li>
        </ul>
      </div>

      <div className="bg-green-100 dark:bg-green-900 border-l-4 border-green-500 p-4 mb-6">
        <p className="font-semibold text-gray-900 dark:text-gray-100">🟩 Example:</p>
        <p className="text-gray-700 dark:text-gray-300">When testing a user registration API, verify that POST /api/users returns 201 Created for valid data, 400 Bad Request for missing fields, and 409 Conflict for duplicate emails.</p>
      </div>

      <h2 className="text-2xl font-semibold mb-4">Status Code Reference Table</h2>

      <div className="overflow-x-auto mb-6">
        <table className="w-full border-collapse border border-gray-300 dark:border-gray-600">
          <thead>
            <tr className="bg-gray-100 dark:bg-gray-800">
              <th className="border border-gray-300 dark:border-gray-600 p-2">Code</th>
              <th className="border border-gray-300 dark:border-gray-600 p-2">Name</th>
              <th className="border border-gray-300 dark:border-gray-600 p-2">Description</th>
              <th className="border border-gray-300 dark:border-gray-600 p-2">Test Focus</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-gray-300 dark:border-gray-600 p-2 font-mono">200</td>
              <td className="border border-gray-300 dark:border-gray-600 p-2">OK</td>
              <td className="border border-gray-300 dark:border-gray-600 p-2">Request successful</td>
              <td className="border border-gray-300 dark:border-gray-600 p-2">Response content validation</td>
            </tr>
            <tr className="bg-gray-50 dark:bg-gray-900">
              <td className="border border-gray-300 dark:border-gray-600 p-2 font-mono">201</td>
              <td className="border border-gray-300 dark:border-gray-600 p-2">Created</td>
              <td className="border border-gray-300 dark:border-gray-600 p-2">Resource created</td>
              <td className="border border-gray-300 dark:border-gray-600 p-2">Location header, resource data</td>
            </tr>
            <tr>
              <td className="border border-gray-300 dark:border-gray-600 p-2 font-mono">204</td>
              <td className="border border-gray-300 dark:border-gray-600 p-2">No Content</td>
              <td className="border border-gray-300 dark:border-gray-600 p-2">Success, no response body</td>
              <td className="border border-gray-300 dark:border-gray-600 p-2">Empty response validation</td>
            </tr>
            <tr className="bg-gray-50 dark:bg-gray-900">
              <td className="border border-gray-300 dark:border-gray-600 p-2 font-mono">301</td>
              <td className="border border-gray-300 dark:border-gray-600 p-2">Moved Permanently</td>
              <td className="border border-gray-300 dark:border-gray-600 p-2">Resource moved permanently</td>
              <td className="border border-gray-300 dark:border-gray-600 p-2">Location header, redirect handling</td>
            </tr>
            <tr>
              <td className="border border-gray-300 dark:border-gray-600 p-2 font-mono">400</td>
              <td className="border border-gray-300 dark:border-gray-600 p-2">Bad Request</td>
              <td className="border border-gray-300 dark:border-gray-600 p-2">Malformed request</td>
              <td className="border border-gray-300 dark:border-gray-600 p-2">Error message clarity</td>
            </tr>
            <tr className="bg-gray-50 dark:bg-gray-900">
              <td className="border border-gray-300 dark:border-gray-600 p-2 font-mono">401</td>
              <td className="border border-gray-300 dark:border-gray-600 p-2">Unauthorized</td>
              <td className="border border-gray-300 dark:border-gray-600 p-2">Authentication required</td>
              <td className="border border-gray-300 dark:border-gray-600 p-2">Auth challenge headers</td>
            </tr>
            <tr>
              <td className="border border-gray-300 dark:border-gray-600 p-2 font-mono">403</td>
              <td className="border border-gray-300 dark:border-gray-600 p-2">Forbidden</td>
              <td className="border border-gray-300 dark:border-gray-600 p-2">Access denied</td>
              <td className="border border-gray-300 dark:border-gray-600 p-2">Permission validation</td>
            </tr>
            <tr className="bg-gray-50 dark:bg-gray-900">
              <td className="border border-gray-300 dark:border-gray-600 p-2 font-mono">404</td>
              <td className="border border-gray-300 dark:border-gray-600 p-2">Not Found</td>
              <td className="border border-gray-300 dark:border-gray-600 p-2">Resource not found</td>
              <td className="border border-gray-300 dark:border-gray-600 p-2">URL validation</td>
            </tr>
            <tr>
              <td className="border border-gray-300 dark:border-gray-600 p-2 font-mono">429</td>
              <td className="border border-gray-300 dark:border-gray-600 p-2">Too Many Requests</td>
              <td className="border border-gray-300 dark:border-gray-600 p-2">Rate limit exceeded</td>
              <td className="border border-gray-300 dark:border-gray-600 p-2">Rate limiting behavior</td>
            </tr>
            <tr className="bg-gray-50 dark:bg-gray-900">
              <td className="border border-gray-300 dark:border-gray-600 p-2 font-mono">500</td>
              <td className="border border-gray-300 dark:border-gray-600 p-2">Internal Server Error</td>
              <td className="border border-gray-300 dark:border-gray-600 p-2">Server error</td>
              <td className="border border-gray-300 dark:border-gray-600 p-2">Error handling, logging</td>
            </tr>
            <tr>
              <td className="border border-gray-300 dark:border-gray-600 p-2 font-mono">502</td>
              <td className="border border-gray-300 dark:border-gray-600 p-2">Bad Gateway</td>
              <td className="border border-gray-300 dark:border-gray-600 p-2">Invalid response from upstream</td>
              <td className="border border-gray-300 dark:border-gray-600 p-2">Proxy/load balancer issues</td>
            </tr>
            <tr className="bg-gray-50 dark:bg-gray-900">
              <td className="border border-gray-300 dark:border-gray-600 p-2 font-mono">503</td>
              <td className="border border-gray-300 dark:border-gray-600 p-2">Service Unavailable</td>
              <td className="border border-gray-300 dark:border-gray-600 p-2">Server temporarily unavailable</td>
              <td className="border border-gray-300 dark:border-gray-600 p-2">Maintenance mode, overload</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="bg-yellow-100 dark:bg-yellow-900 border-l-4 border-yellow-500 p-4 mb-6">
        <p className="font-semibold text-gray-900 dark:text-gray-100">🟧 Warning:</p>
        <p className="text-gray-700 dark:text-gray-300">Different frameworks and servers may return different status codes for similar situations. Always check your API documentation for specific status code meanings.</p>
      </div>

      <div className="bg-purple-100 dark:bg-purple-900 border-l-4 border-purple-500 p-4 mb-6">
        <p className="font-semibold text-gray-900 dark:text-gray-100">🟪 Key Tip:</p>
        <p className="text-gray-700 dark:text-gray-300">Status codes are crucial for API testing. Always verify that your API returns appropriate status codes and that your client applications handle all possible status codes correctly.</p>
      </div>

      <h2 className="text-2xl font-semibold mb-4">Status Code Testing Best Practices</h2>

      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <h3 className="text-lg font-semibold mb-3">Test Automation</h3>
          <ul className="list-disc list-inside">
            <li>Assert expected status codes in tests</li>
            <li>Test error scenarios systematically</li>
            <li>Verify status codes match API documentation</li>
            <li>Check status codes for different user roles</li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-3">Manual Testing</h3>
          <ul className="list-disc list-inside">
            <li>Use browser dev tools to inspect responses</li>
            <li>Test with different authentication states</li>
            <li>Verify error messages are user-friendly</li>
            <li>Check status codes in API documentation tools</li>
          </ul>
        </div>
      </div>
    </div>
  )
}
