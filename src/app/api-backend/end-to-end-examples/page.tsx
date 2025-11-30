export default function Page() {
  return (
    <div className="max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">End-to-End API Examples</h1>

      <p className="mb-6">
        End-to-end API testing validates complete user workflows and business processes through API calls. These tests ensure that all system components work together correctly.
      </p>

      <div className="bg-blue-100 dark:bg-blue-900 border-l-4 border-blue-500 p-4 mb-6">
        <p className="font-semibold text-gray-900 dark:text-gray-100">🟦 Info:</p>
        <p className="text-gray-700 dark:text-gray-300">E2E API testing simulates real user journeys by chaining multiple API calls together, validating data flow and business logic across the entire system.</p>
      </div>

      <h2 className="text-2xl font-semibold mb-4">User Registration & Login Flow</h2>

      <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded mb-6">
        <h3 className="font-semibold mb-4">Complete User Journey Test:</h3>

        <div className="space-y-4">
          <div className="border-l-4 border-green-500 pl-4">
            <h4 className="font-semibold mb-2">1. User Registration</h4>
            <div className="bg-white dark:bg-gray-700 p-3 rounded mb-2">
              <code className="text-sm">POST /api/auth/register</code>
            </div>
            <p className="text-sm mb-2">Expected: 201 Created, user account created</p>
            <div className="bg-gray-200 dark:bg-gray-600 p-2 rounded text-sm">
              <code>{`{
  "email": "john.doe@example.com",
  "password": "SecurePass123!",
  "firstName": "John",
  "lastName": "Doe"
}`}</code>
            </div>
          </div>

          <div className="border-l-4 border-blue-500 pl-4">
            <h4 className="font-semibold mb-2">2. Email Verification</h4>
            <div className="bg-white dark:bg-gray-700 p-3 rounded mb-2">
              <code className="text-sm">POST /api/auth/verify-email</code>
            </div>
            <p className="text-sm mb-2">Expected: 200 OK, email verified</p>
            <div className="bg-gray-200 dark:bg-gray-600 p-2 rounded text-sm">
              <code>{`{
  "token": "verification_token_from_email"
}`}</code>
            </div>
          </div>

          <div className="border-l-4 border-purple-500 pl-4">
            <h4 className="font-semibold mb-2">3. User Login</h4>
            <div className="bg-white dark:bg-gray-700 p-3 rounded mb-2">
              <code className="text-sm">POST /api/auth/login</code>
            </div>
            <p className="text-sm mb-2">Expected: 200 OK, JWT token returned</p>
            <div className="bg-gray-200 dark:bg-gray-600 p-2 rounded text-sm">
              <code>{`{
  "email": "john.doe@example.com",
  "password": "SecurePass123!"
}`}</code>
            </div>
          </div>

          <div className="border-l-4 border-orange-500 pl-4">
            <h4 className="font-semibold mb-2">4. Access Protected Resource</h4>
            <div className="bg-white dark:bg-gray-700 p-3 rounded mb-2">
              <code className="text-sm">GET /api/user/profile</code>
            </div>
            <p className="text-sm mb-2">Expected: 200 OK, user profile data</p>
            <div className="bg-gray-200 dark:bg-gray-600 p-2 rounded text-sm">
              <code>Authorization: Bearer jwt_token_here</code>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-green-100 dark:bg-green-900 border-l-4 border-green-500 p-4 mb-6">
        <p className="font-semibold text-gray-900 dark:text-gray-100">🟩 Example:</p>
        <p className="text-gray-700 dark:text-gray-300">This complete flow tests user onboarding, ensuring registration, verification, authentication, and authorization all work together seamlessly.</p>
      </div>

      <h2 className="text-2xl font-semibold mb-4">E-commerce Order Flow</h2>

      <div className="grid md:grid-cols-2 gap-6 mb-6">
        <div className="border border-gray-300 dark:border-gray-600 rounded-lg p-4">
          <h3 className="text-lg font-semibold mb-3">Order Creation Process</h3>
          <ol className="list-decimal list-inside space-y-2 text-sm">
            <li>Authenticate user</li>
            <li>Get product catalog</li>
            <li>Add items to cart</li>
            <li>Calculate totals</li>
            <li>Apply discounts</li>
            <li>Process payment</li>
            <li>Create order</li>
            <li>Send confirmation</li>
          </ol>
        </div>

        <div className="border border-gray-300 dark:border-gray-600 rounded-lg p-4">
          <h3 className="text-lg font-semibold mb-3">API Sequence</h3>
          <div className="space-y-2 text-sm font-mono">
            <div>POST /api/auth/login</div>
            <div>GET /api/products</div>
            <div>POST /api/cart</div>
            <div>GET /api/cart/totals</div>
            <div>POST /api/orders</div>
            <div>GET /api/orders/{'{'}id{'}'}</div>
          </div>
        </div>
      </div>

      <h2 className="text-2xl font-semibold mb-4">Data Synchronization Flow</h2>

      <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded mb-6">
        <h3 className="font-semibold mb-4">Mobile App Sync Scenario:</h3>

        <div className="grid md:grid-cols-3 gap-4 mb-4">
          <div className="text-center p-3 bg-blue-200 dark:bg-blue-800 rounded">
            <h4 className="font-semibold mb-2">Check Last Sync</h4>
            <code className="text-xs">GET /api/sync/status</code>
          </div>
          <div className="text-center p-3 bg-green-200 dark:bg-green-800 rounded">
            <h4 className="font-semibold mb-2">Download Changes</h4>
            <code className="text-xs">GET /api/sync/changes</code>
          </div>
          <div className="text-center p-3 bg-purple-200 dark:bg-purple-800 rounded">
            <h4 className="font-semibold mb-2">Upload Local Changes</h4>
            <code className="text-xs">POST /api/sync/upload</code>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-700 p-4 rounded">
          <h4 className="font-semibold mb-2">Conflict Resolution:</h4>
          <ul className="list-disc list-inside text-sm">
            <li>Server wins: Overwrite local data</li>
            <li>Client wins: Keep local changes</li>
            <li>Manual merge: Present conflicts to user</li>
            <li>Timestamp-based: Latest change wins</li>
          </ul>
        </div>
      </div>

      <h2 className="text-2xl font-semibold mb-4">Multi-Service Integration</h2>

      <div className="space-y-4 mb-6">
        <div className="border border-gray-300 dark:border-gray-600 rounded-lg p-4">
          <h3 className="text-lg font-semibold mb-3">Payment Processing Flow</h3>
          <div className="grid md:grid-cols-4 gap-2 mb-3">
            <div className="text-center p-2 bg-gray-200 dark:bg-gray-700 rounded text-sm">
              Order Service
            </div>
            <div className="text-center p-2 bg-gray-200 dark:bg-gray-700 rounded text-sm">
              Payment Gateway
            </div>
            <div className="text-center p-2 bg-gray-200 dark:bg-gray-700 rounded text-sm">
              Inventory Service
            </div>
            <div className="text-center p-2 bg-gray-200 dark:bg-gray-700 rounded text-sm">
              Notification Service
            </div>
          </div>
          <p className="text-sm">Test that all services communicate correctly and handle failures gracefully</p>
        </div>

        <div className="border border-gray-300 dark:border-gray-600 rounded-lg p-4">
          <h3 className="text-lg font-semibold mb-3">Error Scenarios</h3>
          <ul className="list-disc list-inside text-sm">
            <li>Payment service timeout</li>
            <li>Inventory service unavailable</li>
            <li>Notification service failure</li>
            <li>Partial transaction rollback</li>
          </ul>
        </div>
      </div>

      <h2 className="text-2xl font-semibold mb-4">API Testing Best Practices</h2>

      <div className="grid md:grid-cols-2 gap-6 mb-6">
        <div>
          <h3 className="text-lg font-semibold mb-3">Test Data Management</h3>
          <ul className="list-disc list-inside">
            <li>Use test-specific data</li>
            <li>Clean up after tests</li>
            <li>Isolate test environments</li>
            <li>Generate dynamic test data</li>
            <li>Handle dependencies properly</li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-3">Assertion Strategies</h3>
          <ul className="list-disc list-inside">
            <li>Verify response structure</li>
            <li>Check business logic</li>
            <li>Validate data relationships</li>
            <li>Test error conditions</li>
            <li>Measure performance</li>
          </ul>
        </div>
      </div>

      <div className="bg-yellow-100 dark:bg-yellow-900 border-l-4 border-yellow-500 p-4 mb-6">
        <p className="font-semibold text-gray-900 dark:text-gray-100">🟧 Warning:</p>
        <p className="text-gray-700 dark:text-gray-300">E2E API tests can be slow and brittle. Focus on critical business flows and maintain test data carefully to avoid false failures.</p>
      </div>

      <div className="bg-purple-100 dark:bg-purple-900 border-l-4 border-purple-500 p-4 mb-6">
        <p className="font-semibold text-gray-900 dark:text-gray-100">🟪 Key Tip:</p>
        <p className="text-gray-700 dark:text-gray-300">Design E2E tests to mirror actual user journeys. Use realistic data and test both happy paths and failure scenarios to ensure robust API integrations.</p>
      </div>

      <h2 className="text-2xl font-semibold mb-4">E2E Testing Checklist</h2>

      <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded">
        <h3 className="font-semibold mb-3">Workflow Validation:</h3>
        <ul className="list-disc list-inside mb-4">
          <li>✅ Complete user journey execution</li>
          <li>✅ Data consistency across steps</li>
          <li>✅ Proper error handling</li>
          <li>✅ State management between calls</li>
          <li>✅ Authentication flow integrity</li>
        </ul>

        <h3 className="font-semibold mb-3">Integration Testing:</h3>
        <ul className="list-disc list-inside mb-4">
          <li>✅ Service-to-service communication</li>
          <li>✅ External API integrations</li>
          <li>✅ Database consistency</li>
          <li>✅ Message queue processing</li>
          <li>✅ Cache invalidation</li>
        </ul>

        <h3 className="font-semibold mb-3">Performance & Reliability:</h3>
        <ul className="list-disc list-inside">
          <li>✅ Response time validation</li>
          <li>✅ Memory leak detection</li>
          <li>✅ Race condition handling</li>
          <li>✅ Load distribution</li>
          <li>✅ Failure recovery</li>
        </ul>
      </div>
    </div>
  )
}
