export default function Page() {
  return (
    <div className="max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">API Automation Frameworks</h1>

      <p className="mb-6">
        API automation frameworks provide structured approaches to testing REST APIs programmatically. They enable continuous integration, regression testing, and scalable API validation across different environments and teams.
      </p>

      <div className="bg-blue-100 dark:bg-blue-900 border-l-4 border-blue-500 p-4 mb-6">
        <p className="font-semibold text-gray-900 dark:text-gray-100">🟦 Info:</p>
        <p className="text-gray-700 dark:text-gray-300">API automation frameworks combine testing libraries, assertion engines, reporting tools, and CI/CD integration to create robust, maintainable API test suites that can run automatically and provide detailed feedback.</p>
      </div>

      <h2 className="text-2xl font-semibold mb-4">Popular API Testing Frameworks</h2>

      <div className="space-y-6 mb-6">
        <div className="border border-blue-300 dark:border-blue-600 rounded-lg p-6 bg-blue-50 dark:bg-blue-900/20">
          <div className="flex items-center mb-4">
            <h3 className="text-2xl font-bold text-blue-700 dark:text-blue-400 mr-4">REST Assured</h3>
            <span className="bg-blue-200 dark:bg-blue-800 px-3 py-1 rounded-full text-sm font-mono">Java</span>
          </div>
          <p className="mb-3"><strong>Description:</strong> Java DSL for testing REST APIs with fluent syntax</p>
          <div className="bg-white dark:bg-gray-700 p-3 rounded mb-3">
            <pre className="text-sm">
              <code>{`given()
    .header("Authorization", "Bearer " + token)
    .when()
    .get("/api/users")
    .then()
    .statusCode(200)
    .body("size()", greaterThan(0));`}</code>
            </pre>
          </div>
          <div className="text-sm">
            <strong>Features:</strong> JSON/XML validation, authentication, custom matchers
          </div>
        </div>

        <div className="border border-green-300 dark:border-green-600 rounded-lg p-6 bg-green-50 dark:bg-green-900/20">
          <div className="flex items-center mb-4">
            <h3 className="text-2xl font-bold text-green-700 dark:text-green-400 mr-4">Supertest</h3>
            <span className="bg-green-200 dark:bg-green-800 px-3 py-1 rounded-full text-sm font-mono">Node.js</span>
          </div>
          <p className="mb-3"><strong>Description:</strong> HTTP endpoint testing library for Express.js applications</p>
          <div className="bg-white dark:bg-gray-700 p-3 rounded mb-3">
            <pre className="text-sm">
              <code>{`const request = require('supertest');
const app = require('../app');

describe('GET /api/users', () => {
  it('should return users', async () => {
    const res = await request(app)
      .get('/api/users')
      .expect(200)
      .expect('Content-Type', /json/);
  });
});`}</code>
            </pre>
          </div>
          <div className="text-sm">
            <strong>Features:</strong> Integration with test runners, pipeline support, cookie handling
          </div>
        </div>

        <div className="border border-purple-300 dark:border-purple-600 rounded-lg p-6 bg-purple-50 dark:bg-purple-900/20">
          <div className="flex items-center mb-4">
            <h3 className="text-2xl font-bold text-purple-700 dark:text-purple-400 mr-4">Requests + Pytest</h3>
            <span className="bg-purple-200 dark:bg-purple-800 px-3 py-1 rounded-full text-sm font-mono">Python</span>
          </div>
          <p className="mb-3"><strong>Description:</strong> Python HTTP library combined with pytest testing framework</p>
          <div className="bg-white dark:bg-gray-700 p-3 rounded mb-3">
            <pre className="text-sm">
              <code>{`import requests
import pytest

def test_get_users():
    response = requests.get('http://api.example.com/users')
    assert response.status_code == 200
    assert len(response.json()) > 0

    for user in response.json():
        assert 'id' in user
        assert 'name' in user`}</code>
            </pre>
          </div>
          <div className="text-sm">
            <strong>Features:</strong> Simple syntax, extensive libraries, data-driven testing
          </div>
        </div>

        <div className="border border-orange-300 dark:border-orange-600 rounded-lg p-6 bg-orange-50 dark:bg-orange-900/20">
          <div className="flex items-center mb-4">
            <h3 className="text-2xl font-bold text-orange-700 dark:text-orange-400 mr-4">Karate</h3>
            <span className="bg-orange-200 dark:bg-orange-800 px-3 py-1 rounded-full text-sm font-mono">Java</span>
          </div>
          <p className="mb-3"><strong>Description:</strong> API testing framework with BDD-style syntax</p>
          <div className="bg-white dark:bg-gray-700 p-3 rounded mb-3">
            <pre className="text-sm">
              <code>{`Feature: User API

  Scenario: Get all users
    Given url 'http://api.example.com'
    When method GET
    Then status 200
    And match response == '#array'
    And match response[*].id == '#number'`}</code>
            </pre>
          </div>
          <div className="text-sm">
            <strong>Features:</strong> BDD syntax, built-in assertions, data-driven testing, mocks
          </div>
        </div>

        <div className="border border-red-300 dark:border-red-600 rounded-lg p-6 bg-red-50 dark:bg-red-900/20">
          <div className="flex items-center mb-4">
            <h3 className="text-2xl font-bold text-red-700 dark:text-red-400 mr-4">Jest + Postman</h3>
            <span className="bg-red-200 dark:bg-red-800 px-3 py-1 rounded-full text-sm font-mono">Node.js</span>
          </div>
          <p className="mb-3"><strong>Description:</strong> Combines Jest testing framework with Postman collections for powerful API automation</p>

          <h4 className="font-semibold mb-2">Installation:</h4>
          <div className="bg-gray-100 dark:bg-gray-800 p-2 rounded mb-3">
            <code className="text-sm">npm install --save-dev jest-postman newman</code>
          </div>

          <h4 className="font-semibold mb-2">Basic Usage:</h4>
          <div className="bg-white dark:bg-gray-700 p-3 rounded mb-3">
            <pre className="text-sm">
              <code>{`const { runCollection } = require('jest-postman');

describe('User API Tests', () => {
  it('should run user collection', async () => {
    const result = await runCollection('./collections/UserAPI.postman_collection.json', {
      environment: './environments/Dev.postman_environment.json'
    });

    expect(result.summary.run.failures).toHaveLength(0);
    expect(result.summary.run.executions[0].response.responseTime).toBeLessThan(1000);
  });
});`}</code>
            </pre>
          </div>

          <h4 className="font-semibold mb-2">Advanced Configuration:</h4>
          <div className="bg-white dark:bg-gray-700 p-3 rounded mb-3">
            <pre className="text-sm">
              <code>{`const options = {
  environment: './environments/Staging.postman_environment.json',
  globals: './globals.postman_globals.json',
  reporters: ['cli', 'json', 'html'],
  timeout: 30000,
  delayRequest: 1000,
  ignoreRedirects: false,
  insecure: false,
  bail: true
};

const result = await runCollection('./UserAPI.postman_collection.json', options);`}</code>
            </pre>
          </div>

          <h4 className="font-semibold mb-2">Custom Assertions:</h4>
          <div className="bg-white dark:bg-gray-700 p-3 rounded mb-3">
            <pre className="text-sm">
              <code>{`it('should validate user data structure', async () => {
  const result = await runCollection('./UserAPI.postman_collection.json');

  // Check response times
  result.summary.run.executions.forEach(execution => {
    expect(execution.response.responseTime).toBeLessThan(2000);
  });

  // Validate response schemas
  expect(result.summary.run.executions[0].response.json()).toHaveProperty('id');
  expect(result.summary.run.executions[0].response.json()).toHaveProperty('name');
});`}</code>
            </pre>
          </div>

          <h4 className="font-semibold mb-2">CI/CD Integration:</h4>
          <div className="bg-gray-100 dark:bg-gray-800 p-3 rounded mb-3">
            <pre className="text-sm">
              <code>{`# .github/workflows/api-tests.yml
name: API Tests
on: [push, pull_request]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
    - uses: actions/checkout@v3
    - uses: actions/setup-node@v3
      with:
        node-version: '18'
    - run: npm ci
    - run: npm test -- --coverage
    - uses: codecov/codecov-action@v3`}</code>
            </pre>
          </div>

          <div className="text-sm">
            <strong>Features:</strong> Postman collection execution, Jest integration, custom reporters, environment support, parallel execution, detailed reporting
          </div>
        </div>
      </div>

      <div className="bg-green-100 dark:bg-green-900 border-l-4 border-green-500 p-4 mb-6">
        <p className="font-semibold text-gray-900 dark:text-gray-100">🟩 Example:</p>
        <p className="text-gray-700 dark:text-gray-300">Using REST Assured, you can create a complete test suite that validates user CRUD operations, authentication flows, and data integrity across all API endpoints.</p>
      </div>

      <h2 className="text-2xl font-semibold mb-4">Framework Architecture</h2>

      <div className="grid md:grid-cols-2 gap-6 mb-6">
        <div>
          <h3 className="text-lg font-semibold mb-3">Core Components</h3>
          <ul className="list-disc list-inside">
            <li><strong>HTTP Client:</strong> Handles requests/responses</li>
            <li><strong>Assertion Library:</strong> Validates responses</li>
            <li><strong>Test Runner:</strong> Executes test suites</li>
            <li><strong>Reporting:</strong> Generates test reports</li>
            <li><strong>Configuration:</strong> Environment settings</li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-3">Supporting Tools</h3>
          <ul className="list-disc list-inside">
            <li><strong>Mock Servers:</strong> Simulate API responses</li>
            <li><strong>Data Generators:</strong> Create test data</li>
            <li><strong>CI/CD Integration:</strong> Automated execution</li>
            <li><strong>Monitoring:</strong> Performance tracking</li>
            <li><strong>Version Control:</strong> Test suite management</li>
          </ul>
        </div>
      </div>

      <h2 className="text-2xl font-semibold mb-4">Building an API Test Framework</h2>

      <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded mb-6">
        <h3 className="font-semibold mb-4">Framework Structure:</h3>

        <div className="space-y-4">
          <div className="border-l-4 border-blue-500 pl-4">
            <h4 className="font-semibold mb-2">Base Classes</h4>
            <div className="bg-white dark:bg-gray-700 p-3 rounded text-sm">
              <code>ApiTestBase.java</code> - Common setup, authentication, utilities
            </div>
          </div>

          <div className="border-l-4 border-green-500 pl-4">
            <h4 className="font-semibold mb-2">Page Objects / Service Classes</h4>
            <div className="bg-white dark:bg-gray-700 p-3 rounded text-sm">
              <code>UserService.java</code> - User API methods and validations
            </div>
          </div>

          <div className="border-l-4 border-purple-500 pl-4">
            <h4 className="font-semibold mb-2">Test Classes</h4>
            <div className="bg-white dark:bg-gray-700 p-3 rounded text-sm">
              <code>UserApiTests.java</code> - Test methods for user endpoints
            </div>
          </div>

          <div className="border-l-4 border-orange-500 pl-4">
            <h4 className="font-semibold mb-2">Configuration</h4>
            <div className="bg-white dark:bg-gray-700 p-3 rounded text-sm">
              <code>config.properties</code> - Environment URLs, credentials, timeouts
            </div>
          </div>
        </div>
      </div>

      <h2 className="text-2xl font-semibold mb-4">Data-Driven Testing</h2>

      <div className="space-y-4 mb-6">
        <div className="border border-gray-300 dark:border-gray-600 rounded-lg p-4">
          <h3 className="text-lg font-semibold mb-3">Test Data Sources</h3>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="text-center p-3 bg-blue-100 dark:bg-blue-900 rounded">
              <h4 className="font-semibold mb-1">JSON Files</h4>
              <p className="text-sm">Structured test data</p>
            </div>
            <div className="text-center p-3 bg-green-100 dark:bg-green-900 rounded">
              <h4 className="font-semibold mb-1">CSV Files</h4>
              <p className="text-sm">Tabular test data</p>
            </div>
            <div className="text-center p-3 bg-purple-100 dark:bg-purple-900 rounded">
              <h4 className="font-semibold mb-1">Databases</h4>
              <p className="text-sm">Dynamic test data</p>
            </div>
          </div>
        </div>

        <div className="border border-gray-300 dark:border-gray-600 rounded-lg p-4">
          <h3 className="text-lg font-semibold mb-3">Parameterized Tests</h3>
          <div className="bg-gray-100 dark:bg-gray-800 p-3 rounded">
            <pre className="text-sm">
              <code>{`@ParameterizedTest
@CsvSource({
  "admin, password123, 200",
  "user, pass456, 200",
  "invalid, wrong, 401"
})
void testLogin(String username, String password, int expectedStatus) {
    // Test implementation
}`}</code>
            </pre>
          </div>
        </div>
      </div>

      <h2 className="text-2xl font-semibold mb-4">CI/CD Integration</h2>

      <div className="grid md:grid-cols-2 gap-6 mb-6">
        <div>
          <h3 className="text-lg font-semibold mb-3">GitHub Actions Example</h3>
          <div className="bg-gray-100 dark:bg-gray-800 p-3 rounded text-sm">
            <pre>
              <code>{`name: API Tests
on: [push, pull_request]
jobs:
  test:
    runs-on: ubuntu-latest
    steps:
    - uses: actions/checkout@v3
    - uses: actions/setup-java@v3
    - run: mvn test`}</code>
            </pre>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-3">GitHub Actions Pipeline</h3>
          <div className="bg-gray-100 dark:bg-gray-800 p-3 rounded text-sm">
            <pre>
              <code>{`name: API Tests
on: [push, pull_request]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
    - uses: actions/checkout@v4
    - uses: actions/setup-node@v4
      with:
        node-version: '20'
    - run: npm ci
    - run: npm run test:api
    - uses: dorny/test-reporter@v1
      if: success() || failure()
      with:
        name: API Tests
        path: 'test-results/*.xml'
        reporter: java-junit`}</code>
            </pre>
          </div>
        </div>
      </div>

      <h2 className="text-2xl font-semibold mb-4">Reporting & Monitoring</h2>

      <div className="space-y-4 mb-6">
        <div className="border border-gray-300 dark:border-gray-600 rounded-lg p-4">
          <h3 className="text-lg font-semibold mb-3">Test Reports</h3>
          <ul className="list-disc list-inside">
            <li><strong>Allure Reports:</strong> Detailed test execution reports</li>
            <li><strong>JUnit/TestNG XML:</strong> CI/CD integration reports</li>
            <li><strong>Extent Reports:</strong> HTML test execution dashboards</li>
            <li><strong>Custom Dashboards:</strong> Business-specific metrics</li>
          </ul>
        </div>

        <div className="border border-gray-300 dark:border-gray-600 rounded-lg p-4">
          <h3 className="text-lg font-semibold mb-3">Monitoring Integration</h3>
          <ul className="list-disc list-inside">
            <li><strong>Test Metrics:</strong> Pass/fail rates, execution times</li>
            <li><strong>API Health Checks:</strong> Endpoint availability monitoring</li>
            <li><strong>Performance Tracking:</strong> Response time trends</li>
            <li><strong>Alert Integration:</strong> Failure notifications</li>
          </ul>
        </div>
      </div>

      <h2 className="text-2xl font-semibold mb-4">Framework Best Practices</h2>

      <div className="grid md:grid-cols-2 gap-6 mb-6">
        <div>
          <h3 className="text-lg font-semibold mb-3">Code Organization</h3>
          <ul className="list-disc list-inside">
            <li>Use Page Object Model for APIs</li>
            <li>Separate test data from test logic</li>
            <li>Implement proper error handling</li>
            <li>Use meaningful test method names</li>
            <li>Follow consistent naming conventions</li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-3">Maintainability</h3>
          <ul className="list-disc list-inside">
            <li>Keep tests independent and isolated</li>
            <li>Use configuration files for environments</li>
            <li>Implement proper cleanup in teardown</li>
            <li>Document test cases and APIs</li>
            <li>Regular framework updates</li>
          </ul>
        </div>
      </div>

      <div className="bg-yellow-100 dark:bg-yellow-900 border-l-4 border-yellow-500 p-4 mb-6">
        <p className="font-semibold text-gray-900 dark:text-gray-100">🟧 Warning:</p>
        <p className="text-gray-700 dark:text-gray-300">API automation frameworks require careful maintenance. Changes to API contracts can break tests, so implement robust change detection and version management strategies.</p>
      </div>

      <div className="bg-purple-100 dark:bg-purple-900 border-l-4 border-purple-500 p-4 mb-6">
        <p className="font-semibold text-gray-900 dark:text-gray-100">🟪 Key Tip:</p>
        <p className="text-gray-700 dark:text-gray-300">Choose an API automation framework that matches your team's technology stack and expertise. Invest time in creating reusable components and utilities to maximize test coverage and maintainability.</p>
      </div>

      <h2 className="text-2xl font-semibold mb-4">API Automation Framework Checklist</h2>

      <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded">
        <h3 className="font-semibold mb-3">Framework Setup:</h3>
        <ul className="list-disc list-inside mb-4">
          <li>✅ Appropriate framework for technology stack</li>
          <li>✅ Proper project structure and organization</li>
          <li>✅ Configuration management for environments</li>
          <li>✅ Test data management strategy</li>
          <li>✅ CI/CD pipeline integration</li>
        </ul>

        <h3 className="font-semibold mb-3">Test Implementation:</h3>
        <ul className="list-disc list-inside mb-4">
          <li>✅ Comprehensive API endpoint coverage</li>
          <li>✅ Proper authentication and authorization testing</li>
          <li>✅ Data validation and business logic testing</li>
          <li>✅ Error handling and edge case testing</li>
          <li>✅ Performance and load testing capabilities</li>
        </ul>

        <h3 className="font-semibold mb-3">Quality Assurance:</h3>
        <ul className="list-disc list-inside">
          <li>✅ Automated test execution and reporting</li>
          <li>✅ Test result analysis and debugging</li>
          <li>✅ Framework maintenance and updates</li>
          <li>✅ Documentation and knowledge sharing</li>
          <li>✅ Continuous improvement processes</li>
        </ul>
      </div>
    </div>
  )
}
