export default function Page() {
  return (
    <div className="max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Rate Limiting Tests</h1>

      <p className="mb-6">
        Rate limiting controls the number of requests a client can make to an API within a time period. Testing rate limits ensures fair usage, prevents abuse, and validates system resilience under load.
      </p>

      <div className="bg-blue-100 dark:bg-blue-900 border-l-4 border-blue-500 p-4 mb-6">
        <p className="font-semibold text-gray-900 dark:text-gray-100">🟦 Info:</p>
        <p className="text-gray-700 dark:text-gray-300">Rate limiting protects APIs from abuse, ensures fair resource allocation, and helps maintain system performance and availability.</p>
      </div>

      <h2 className="text-2xl font-semibold mb-4">Rate Limiting Concepts</h2>

      <div className="grid md:grid-cols-2 gap-6 mb-6">
        <div className="border border-gray-300 dark:border-gray-600 rounded-lg p-4">
          <h3 className="text-lg font-semibold mb-3 text-green-600 dark:text-green-400">Common Algorithms</h3>
          <ul className="list-disc list-inside space-y-1">
            <li><strong>Fixed Window:</strong> Requests per time window</li>
            <li><strong>Sliding Window:</strong> Rolling time periods</li>
            <li><strong>Token Bucket:</strong> Tokens added over time</li>
            <li><strong>Leaky Bucket:</strong> Requests processed at fixed rate</li>
          </ul>
        </div>

        <div className="border border-gray-300 dark:border-gray-600 rounded-lg p-4">
          <h3 className="text-lg font-semibold mb-3 text-blue-600 dark:text-blue-400">Implementation Levels</h3>
          <ul className="list-disc list-inside space-y-1">
            <li><strong>IP-based:</strong> Per IP address</li>
            <li><strong>User-based:</strong> Per authenticated user</li>
            <li><strong>API Key-based:</strong> Per API key</li>
            <li><strong>Endpoint-based:</strong> Per specific endpoint</li>
          </ul>
        </div>
      </div>

      <h2 className="text-2xl font-semibold mb-4">Rate Limit Headers</h2>

      <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded mb-6">
        <h3 className="font-semibold mb-4">Standard Response Headers:</h3>

        <div className="space-y-4">
          <div className="border-l-4 border-green-500 pl-4">
            <h4 className="font-semibold mb-2">X-RateLimit-Limit</h4>
            <p className="mb-2">Maximum requests allowed in current window</p>
            <code className="block bg-white dark:bg-gray-700 p-2 rounded text-sm">X-RateLimit-Limit: 100</code>
          </div>

          <div className="border-l-4 border-blue-500 pl-4">
            <h4 className="font-semibold mb-2">X-RateLimit-Remaining</h4>
            <p className="mb-2">Number of requests remaining in current window</p>
            <code className="block bg-white dark:bg-gray-700 p-2 rounded text-sm">X-RateLimit-Remaining: 95</code>
          </div>

          <div className="border-l-4 border-orange-500 pl-4">
            <h4 className="font-semibold mb-2">X-RateLimit-Reset</h4>
            <p className="mb-2">Time when the rate limit resets (Unix timestamp)</p>
            <code className="block bg-white dark:bg-gray-700 p-2 rounded text-sm">X-RateLimit-Reset: 1640995200</code>
          </div>

          <div className="border-l-4 border-red-500 pl-4">
            <h4 className="font-semibold mb-2">Retry-After</h4>
            <p className="mb-2">Seconds to wait before retrying (when rate limited)</p>
            <code className="block bg-white dark:bg-gray-700 p-2 rounded text-sm">Retry-After: 60</code>
          </div>
        </div>
      </div>

      <div className="bg-green-100 dark:bg-green-900 border-l-4 border-green-500 p-4 mb-6">
        <p className="font-semibold text-gray-900 dark:text-gray-100">🟩 Example:</p>
        <p className="text-gray-700 dark:text-gray-300">A rate-limited API returns 429 Too Many Requests with headers showing 0 remaining requests and a reset time of 60 seconds.</p>
      </div>

      <h2 className="text-2xl font-semibold mb-4">Testing Rate Limits</h2>

      <div className="space-y-6 mb-6">
        <div className="border border-gray-300 dark:border-gray-600 rounded-lg p-4">
          <h3 className="text-lg font-semibold mb-3">Basic Rate Limit Testing</h3>
          <div className="space-y-3">
            <div>
              <h4 className="font-semibold mb-1">1. Identify Rate Limits</h4>
              <p className="text-sm">Check API documentation or make test requests to understand limits</p>
            </div>
            <div>
              <h4 className="font-semibold mb-1">2. Test Normal Usage</h4>
              <p className="text-sm">Send requests within allowed limits to verify normal operation</p>
            </div>
            <div>
              <h4 className="font-semibold mb-1">3. Test Boundary Conditions</h4>
              <p className="text-sm">Send exactly the limit number of requests to test edge cases</p>
            </div>
            <div>
              <h4 className="font-semibold mb-1">4. Test Rate Limit Exceedance</h4>
              <p className="text-sm">Send requests beyond the limit to verify blocking behavior</p>
            </div>
          </div>
        </div>

        <div className="border border-gray-300 dark:border-gray-600 rounded-lg p-4">
          <h3 className="text-lg font-semibold mb-3">Advanced Testing Scenarios</h3>
          <ul className="list-disc list-inside space-y-1">
            <li>Test different user types (authenticated vs anonymous)</li>
            <li>Test different endpoints with varying limits</li>
            <li>Test rate limit reset behavior</li>
            <li>Test concurrent requests from multiple clients</li>
            <li>Test rate limiting across distributed systems</li>
          </ul>
        </div>
      </div>

      <h2 className="text-2xl font-semibold mb-4">Rate Limit Response Codes</h2>

      <div className="grid md:grid-cols-2 gap-6 mb-6">
        <div className="border border-red-300 dark:border-red-600 rounded-lg p-4">
          <h3 className="text-lg font-semibold mb-3 text-red-600 dark:text-red-400">429 Too Many Requests</h3>
          <p className="mb-3">Client has sent too many requests in a given time period</p>
          <div className="bg-gray-100 dark:bg-gray-800 p-3 rounded">
            <strong>Response Body:</strong>
            <pre className="text-sm mt-2">
              <code>{`{
  "error": "rate_limit_exceeded",
  "message": "Too many requests",
  "retry_after": 60
}`}</code>
            </pre>
          </div>
        </div>

        <div className="border border-orange-300 dark:border-orange-600 rounded-lg p-4">
          <h3 className="text-lg font-semibold mb-3 text-orange-600 dark:text-orange-400">503 Service Unavailable</h3>
          <p className="mb-3">Server is temporarily unable to handle the request due to overload</p>
          <div className="bg-gray-100 dark:bg-gray-800 p-3 rounded">
            <strong>Response Body:</strong>
            <pre className="text-sm mt-2">
              <code>{`{
  "error": "service_unavailable",
  "message": "Service temporarily unavailable",
  "retry_after": 300
}`}</code>
            </pre>
          </div>
        </div>
      </div>

      <h2 className="text-2xl font-semibold mb-4">Rate Limit Testing Tools</h2>

      <div className="grid md:grid-cols-3 gap-4 mb-6">
        <div className="text-center p-4 border rounded-lg">
          <h3 className="font-semibold mb-2">Apache JMeter</h3>
          <p className="text-sm">Load testing with rate limiting</p>
        </div>
        <div className="text-center p-4 border rounded-lg">
          <h3 className="font-semibold mb-2">k6</h3>
          <p className="text-sm">Modern load testing tool</p>
        </div>
        <div className="text-center p-4 border rounded-lg">
          <h3 className="font-semibold mb-2">Postman Runner</h3>
          <p className="text-sm">Collection-based rate testing</p>
        </div>
        <div className="text-center p-4 border rounded-lg">
          <h3 className="font-semibold mb-2"> Artillery</h3>
          <p className="text-sm">Cloud-based load testing</p>
        </div>
        <div className="text-center p-4 border rounded-lg">
          <h3 className="font-semibold mb-2">Locust</h3>
          <p className="text-sm">Python-based load testing</p>
        </div>
        <div className="text-center p-4 border rounded-lg">
          <h3 className="font-semibold mb-2">Custom Scripts</h3>
          <p className="text-sm">Bash/Python rate limit testers</p>
        </div>
      </div>

      <h2 className="text-2xl font-semibold mb-4">Rate Limit Bypass Testing</h2>

      <div className="bg-red-100 dark:bg-red-900 border-l-4 border-red-500 p-4 mb-6">
        <p className="font-semibold text-gray-900 dark:text-gray-100">🟥 Security Testing:</p>
        <p className="text-gray-700 dark:text-gray-300">Test for potential bypass methods to ensure rate limiting is properly implemented.</p>
      </div>

      <div className="grid md:grid-cols-2 gap-6 mb-6">
        <div>
          <h3 className="text-lg font-semibold mb-3">IP-based Rate Limiting</h3>
          <ul className="list-disc list-inside">
            <li>Test with different IP addresses</li>
            <li>Test with VPN/proxy rotation</li>
            <li>Test with load balancers</li>
            <li>Test IPv4 vs IPv6</li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-3">Authentication-based Limits</h3>
          <ul className="list-disc list-inside">
            <li>Test with different user accounts</li>
            <li>Test token rotation</li>
            <li>Test session management</li>
            <li>Test API key limits</li>
          </ul>
        </div>
      </div>

      <h2 className="text-2xl font-semibold mb-4">Rate Limit Recovery Testing</h2>

      <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded mb-6">
        <h3 className="font-semibold mb-4">Testing Rate Limit Reset:</h3>

        <div className="space-y-4">
          <div className="border-l-4 border-blue-500 pl-4">
            <h4 className="font-semibold mb-2">Time-based Reset</h4>
            <ul className="list-disc list-inside text-sm">
              <li>Wait for reset time specified in headers</li>
              <li>Verify requests work after reset</li>
              <li>Test reset timing accuracy</li>
              <li>Test reset across time zones</li>
            </ul>
          </div>

          <div className="border-l-4 border-green-500 pl-4">
            <h4 className="font-semibold mb-2">Request-based Reset</h4>
            <ul className="list-disc list-inside text-sm">
              <li>Test sliding window behavior</li>
              <li>Verify gradual request allowance</li>
              <li>Test burst vs sustained traffic</li>
              <li>Check reset after successful requests</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-yellow-100 dark:bg-yellow-900 border-l-4 border-yellow-500 p-4 mb-6">
        <p className="font-semibold text-gray-900 dark:text-gray-100">🟧 Warning:</p>
        <p className="text-gray-700 dark:text-gray-300">Rate limit testing can impact production systems. Always test in staging environments first and coordinate with system administrators.</p>
      </div>

      <div className="bg-purple-100 dark:bg-purple-900 border-l-4 border-purple-500 p-4 mb-6">
        <p className="font-semibold text-gray-900 dark:text-gray-100">🟪 Key Tip:</p>
        <p className="text-gray-700 dark:text-gray-300">Implement comprehensive rate limit testing to ensure your API can handle various traffic patterns while protecting against abuse and maintaining service quality.</p>
      </div>

      <h2 className="text-2xl font-semibold mb-4">Rate Limiting Best Practices</h2>

      <div className="grid md:grid-cols-2 gap-6 mb-6">
        <div>
          <h3 className="text-lg font-semibold mb-3">Implementation</h3>
          <ul className="list-disc list-inside">
            <li>Use appropriate algorithms for your use case</li>
            <li>Implement clear rate limit headers</li>
            <li>Provide meaningful error messages</li>
            <li>Consider different limits for different endpoints</li>
            <li>Monitor rate limit effectiveness</li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-3">Client Handling</h3>
          <ul className="list-disc list-inside">
            <li>Implement exponential backoff</li>
            <li>Respect Retry-After headers</li>
            <li>Monitor rate limit headers</li>
            <li>Implement request queuing</li>
            <li>Handle rate limit errors gracefully</li>
          </ul>
        </div>
      </div>

      <h2 className="text-2xl font-semibold mb-4">Rate Limiting Testing Checklist</h2>

      <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded">
        <h3 className="font-semibold mb-3">Functional Testing:</h3>
        <ul className="list-disc list-inside mb-4">
          <li>✅ Verify rate limits are enforced</li>
          <li>✅ Test different rate limit algorithms</li>
          <li>✅ Validate rate limit headers</li>
          <li>✅ Test rate limit reset behavior</li>
          <li>✅ Check error response format</li>
        </ul>

        <h3 className="font-semibold mb-3">Security Testing:</h3>
        <ul className="list-disc list-inside mb-4">
          <li>✅ Test for rate limit bypass methods</li>
          <li>✅ Verify IP-based limiting</li>
          <li>✅ Test user-based rate limits</li>
          <li>✅ Check distributed rate limiting</li>
          <li>✅ Validate authentication integration</li>
        </ul>

        <h3 className="font-semibold mb-3">Performance Testing:</h3>
        <ul className="list-disc list-inside">
          <li>✅ Test rate limiting under load</li>
          <li>✅ Measure rate limit processing overhead</li>
          <li>✅ Test concurrent request handling</li>
          <li>✅ Verify rate limit recovery</li>
          <li>✅ Monitor system resource usage</li>
        </ul>
      </div>
    </div>
  )
}
