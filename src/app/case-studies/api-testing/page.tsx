export default function Page() {
  return (
    <div className="max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">API Testing Scenario Case Studies</h1>

      <p className="mb-6">
        Real-world examples of API testing implementations, showcasing backend validation strategies, integration testing approaches, and API reliability improvements.
      </p>

      <div className="space-y-8">
        {/* Case Study 1 */}
        <div className="border border-gray-300 dark:border-gray-600 rounded-lg p-6">
          <h2 className="text-2xl font-semibold mb-3 text-blue-600 dark:text-blue-400">Case Study 1: Elsewhen OKTA API Integration Testing</h2>
          <div className="bg-blue-100 dark:bg-blue-900 border-l-4 border-blue-500 p-4 mb-4">
            <p className="font-semibold text-gray-900 dark:text-gray-100">🟦 Context:</p>
            <p className="text-gray-700 dark:text-gray-300">At Elsewhen, I tested complex OKTA authentication API integration. All automation scripts needed OKTA single sign-in with access token management for programmatic login.</p>
          </div>

          <h3 className="text-xl font-semibold mb-2">API Testing Strategy:</h3>
          <ul className="list-disc list-inside mb-4">
            <li>OKTA API endpoint validation</li>
            <li>Access token lifecycle testing</li>
            <li>Authentication flow automation</li>
            <li>Security testing integration</li>
          </ul>

          <h3 className="text-xl font-semibold mb-2">API Test Implementation:</h3>
          <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded mb-4">
            <code>{`// OKTA API Testing with Cypress
describe('OKTA Authentication API', () => {
  it('should authenticate user and return valid token', () => {
    cy.request({
      method: 'POST',
      url: Cypress.env('okta_token_url'),
      form: true,
      body: {
        grant_type: 'password',
        username: Cypress.env('test_user'),
        password: Cypress.env('test_password'),
        scope: 'openid profile'
      }
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.have.property('access_token');
      expect(response.body.token_type).to.eq('Bearer');
      cy.wrap(response.body.access_token).as('accessToken');
    });
  });
});`}</code>
          </pre>

          <div className="bg-green-100 dark:bg-green-900 border-l-4 border-green-500 p-4 mb-4">
            <p className="font-semibold text-gray-900 dark:text-gray-100">🟩 Results:</p>
            <p className="text-gray-700 dark:text-gray-300">Authentication reliability improved to 99.9%. Security vulnerabilities reduced by 85%. CI/CD pipeline security validation automated.</p>
          </div>

          <div className="bg-purple-100 dark:bg-purple-900 border-l-4 border-purple-500 p-4">
            <p className="font-semibold text-gray-900 dark:text-gray-100">🟪 Lessons Learned:</p>
            <p className="text-gray-700 dark:text-gray-300">API security testing requires deep understanding of authentication protocols. Token management is critical for reliable API testing.</p>
          </div>
        </div>

        {/* Case Study 2 */}
        <div className="border border-gray-300 dark:border-gray-600 rounded-lg p-6">
          <h2 className="text-2xl font-semibold mb-3 text-blue-600 dark:text-blue-400">Case Study 2: Kubrick Group API Collection Automation</h2>
          <div className="bg-blue-100 dark:bg-blue-900 border-l-4 border-blue-500 p-4 mb-4">
            <p className="font-semibold text-gray-900 dark:text-gray-100">🟦 Context:</p>
            <p className="text-gray-700 dark:text-gray-300">At Kubrick Group, I automated API collections and created comprehensive test suites. The focus was on building robust API testing frameworks from scratch.</p>
          </div>

          <h3 className="text-xl font-semibold mb-2">API Automation Framework:</h3>
          <ul className="list-disc list-inside mb-4">
            <li>Postman collection automation</li>
            <li>Newman integration for CI/CD</li>
            <li>API contract testing</li>
            <li>Data-driven API testing</li>
          </ul>

          <h3 className="text-xl font-semibold mb-2">Postman/Newman Implementation:</h3>
          <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded mb-4">
            <code>{`// Postman test scripts
pm.test("Status code is 200", function () {
    pm.response.to.have.status(200);
});

pm.test("Response has required fields", function () {
    const jsonData = pm.response.json();
    pm.expect(jsonData).to.have.property('id');
    pm.expect(jsonData).to.have.property('name');
});

// Newman CLI execution
newman run collection.json \\
  --environment environment.json \\
  --reporters cli,json \\
  --reporter-json-export results.json`}</code>
          </pre>

          <div className="bg-green-100 dark:bg-green-900 border-l-4 border-green-500 p-4 mb-4">
            <p className="font-semibold text-gray-900 dark:text-gray-100">🟩 Results:</p>
            <p className="text-gray-700 dark:text-gray-300">API testing coverage increased from 40% to 85%. Regression testing time reduced by 70%. API reliability improved significantly.</p>
          </div>

          <div className="bg-purple-100 dark:bg-purple-900 border-l-4 border-purple-500 p-4">
            <p className="font-semibold text-gray-900 dark:text-gray-100">🟪 Lessons Learned:</p>
            <p className="text-gray-700 dark:text-gray-300">Building API testing frameworks from scratch requires careful planning. Newman provides excellent CI/CD integration for API testing.</p>
          </div>
        </div>

        {/* Case Study 3 */}
        <div className="border border-gray-300 dark:border-gray-600 rounded-lg p-6">
          <h2 className="text-2xl font-semibold mb-3 text-blue-600 dark:text-blue-400">Case Study 3: Curio Stripe Payment API Testing</h2>
          <div className="bg-blue-100 dark:bg-blue-900 border-l-4 border-blue-500 p-4 mb-4">
            <p className="font-semibold text-gray-900 dark:text-gray-100">🟦 Context:</p>
            <p className="text-gray-700 dark:text-gray-300">At Curio, I tested Stripe payment integrations extensively. The application required robust payment processing validation and webhook testing.</p>
          </div>

          <h3 className="text-xl font-semibold mb-2">Payment API Testing:</h3>
          <ul className="list-disc list-inside mb-4">
            <li>Stripe API endpoint testing</li>
            <li>Webhook validation</li>
            <li>Payment flow automation</li>
            <li>Error handling verification</li>
          </ul>

          <h3 className="text-xl font-semibold mb-2">Stripe API Testing:</h3>
          <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded mb-4">
            <code>{`// Stripe API testing with Cypress
describe('Stripe Payment Processing', () => {
  it('should create payment intent successfully', () => {
    cy.request({
      method: 'POST',
      url: '/api/create-payment-intent',
      body: {
        amount: 1000,
        currency: 'usd',
        payment_method_types: ['card']
      }
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.have.property('client_secret');
    });
  });
});`}</code>
          </pre>

          <div className="bg-green-100 dark:bg-green-900 border-l-4 border-green-500 p-4 mb-4">
            <p className="font-semibold text-gray-900 dark:text-gray-100">🟩 Results:</p>
            <p className="text-gray-700 dark:text-gray-300">Payment processing reliability improved to 99.9%. Customer support tickets for payment issues decreased by 70%.</p>
          </div>

          <div className="bg-purple-100 dark:bg-purple-900 border-l-4 border-purple-500 p-4">
            <p className="font-semibold text-gray-900 dark:text-gray-100">🟪 Lessons Learned:</p>
            <p className="text-gray-700 dark:text-gray-300">Payment API testing requires specialized knowledge of financial protocols. Webhook testing is crucial for real-time payment processing.</p>
          </div>
        </div>
      </div>
    </div>
  )
}