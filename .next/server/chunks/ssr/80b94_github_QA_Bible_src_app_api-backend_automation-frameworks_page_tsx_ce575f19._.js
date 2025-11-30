module.exports=[67080,a=>{"use strict";var b=a.i(64868);function c(){return(0,b.jsxs)("div",{className:"max-w-6xl mx-auto",children:[(0,b.jsx)("h1",{className:"text-3xl font-bold mb-6",children:"API Automation Frameworks"}),(0,b.jsx)("p",{className:"mb-6",children:"API automation frameworks provide structured approaches to testing REST APIs programmatically. They enable continuous integration, regression testing, and scalable API validation across different environments and teams."}),(0,b.jsxs)("div",{className:"bg-blue-100 dark:bg-blue-900 border-l-4 border-blue-500 p-4 mb-6",children:[(0,b.jsx)("p",{className:"font-semibold text-gray-900 dark:text-gray-100",children:"🟦 Info:"}),(0,b.jsx)("p",{className:"text-gray-700 dark:text-gray-300",children:"API automation frameworks combine testing libraries, assertion engines, reporting tools, and CI/CD integration to create robust, maintainable API test suites that can run automatically and provide detailed feedback."})]}),(0,b.jsx)("h2",{className:"text-2xl font-semibold mb-4",children:"Popular API Testing Frameworks"}),(0,b.jsxs)("div",{className:"space-y-6 mb-6",children:[(0,b.jsxs)("div",{className:"border border-blue-300 dark:border-blue-600 rounded-lg p-6 bg-blue-50 dark:bg-blue-900/20",children:[(0,b.jsxs)("div",{className:"flex items-center mb-4",children:[(0,b.jsx)("h3",{className:"text-2xl font-bold text-blue-700 dark:text-blue-400 mr-4",children:"REST Assured"}),(0,b.jsx)("span",{className:"bg-blue-200 dark:bg-blue-800 px-3 py-1 rounded-full text-sm font-mono",children:"Java"})]}),(0,b.jsxs)("p",{className:"mb-3",children:[(0,b.jsx)("strong",{children:"Description:"})," Java DSL for testing REST APIs with fluent syntax"]}),(0,b.jsx)("div",{className:"bg-white dark:bg-gray-700 p-3 rounded mb-3",children:(0,b.jsx)("pre",{className:"text-sm",children:(0,b.jsx)("code",{children:`given()
    .header("Authorization", "Bearer " + token)
    .when()
    .get("/api/users")
    .then()
    .statusCode(200)
    .body("size()", greaterThan(0));`})})}),(0,b.jsxs)("div",{className:"text-sm",children:[(0,b.jsx)("strong",{children:"Features:"})," JSON/XML validation, authentication, custom matchers"]})]}),(0,b.jsxs)("div",{className:"border border-green-300 dark:border-green-600 rounded-lg p-6 bg-green-50 dark:bg-green-900/20",children:[(0,b.jsxs)("div",{className:"flex items-center mb-4",children:[(0,b.jsx)("h3",{className:"text-2xl font-bold text-green-700 dark:text-green-400 mr-4",children:"Supertest"}),(0,b.jsx)("span",{className:"bg-green-200 dark:bg-green-800 px-3 py-1 rounded-full text-sm font-mono",children:"Node.js"})]}),(0,b.jsxs)("p",{className:"mb-3",children:[(0,b.jsx)("strong",{children:"Description:"})," HTTP endpoint testing library for Express.js applications"]}),(0,b.jsx)("div",{className:"bg-white dark:bg-gray-700 p-3 rounded mb-3",children:(0,b.jsx)("pre",{className:"text-sm",children:(0,b.jsx)("code",{children:`const request = require('supertest');
const app = require('../app');

describe('GET /api/users', () => {
  it('should return users', async () => {
    const res = await request(app)
      .get('/api/users')
      .expect(200)
      .expect('Content-Type', /json/);
  });
});`})})}),(0,b.jsxs)("div",{className:"text-sm",children:[(0,b.jsx)("strong",{children:"Features:"})," Integration with test runners, pipeline support, cookie handling"]})]}),(0,b.jsxs)("div",{className:"border border-purple-300 dark:border-purple-600 rounded-lg p-6 bg-purple-50 dark:bg-purple-900/20",children:[(0,b.jsxs)("div",{className:"flex items-center mb-4",children:[(0,b.jsx)("h3",{className:"text-2xl font-bold text-purple-700 dark:text-purple-400 mr-4",children:"Requests + Pytest"}),(0,b.jsx)("span",{className:"bg-purple-200 dark:bg-purple-800 px-3 py-1 rounded-full text-sm font-mono",children:"Python"})]}),(0,b.jsxs)("p",{className:"mb-3",children:[(0,b.jsx)("strong",{children:"Description:"})," Python HTTP library combined with pytest testing framework"]}),(0,b.jsx)("div",{className:"bg-white dark:bg-gray-700 p-3 rounded mb-3",children:(0,b.jsx)("pre",{className:"text-sm",children:(0,b.jsx)("code",{children:`import requests
import pytest

def test_get_users():
    response = requests.get('http://api.example.com/users')
    assert response.status_code == 200
    assert len(response.json()) > 0

    for user in response.json():
        assert 'id' in user
        assert 'name' in user`})})}),(0,b.jsxs)("div",{className:"text-sm",children:[(0,b.jsx)("strong",{children:"Features:"})," Simple syntax, extensive libraries, data-driven testing"]})]}),(0,b.jsxs)("div",{className:"border border-orange-300 dark:border-orange-600 rounded-lg p-6 bg-orange-50 dark:bg-orange-900/20",children:[(0,b.jsxs)("div",{className:"flex items-center mb-4",children:[(0,b.jsx)("h3",{className:"text-2xl font-bold text-orange-700 dark:text-orange-400 mr-4",children:"Karate"}),(0,b.jsx)("span",{className:"bg-orange-200 dark:bg-orange-800 px-3 py-1 rounded-full text-sm font-mono",children:"Java"})]}),(0,b.jsxs)("p",{className:"mb-3",children:[(0,b.jsx)("strong",{children:"Description:"})," API testing framework with BDD-style syntax"]}),(0,b.jsx)("div",{className:"bg-white dark:bg-gray-700 p-3 rounded mb-3",children:(0,b.jsx)("pre",{className:"text-sm",children:(0,b.jsx)("code",{children:`Feature: User API

  Scenario: Get all users
    Given url 'http://api.example.com'
    When method GET
    Then status 200
    And match response == '#array'
    And match response[*].id == '#number'`})})}),(0,b.jsxs)("div",{className:"text-sm",children:[(0,b.jsx)("strong",{children:"Features:"})," BDD syntax, built-in assertions, data-driven testing, mocks"]})]}),(0,b.jsxs)("div",{className:"border border-red-300 dark:border-red-600 rounded-lg p-6 bg-red-50 dark:bg-red-900/20",children:[(0,b.jsxs)("div",{className:"flex items-center mb-4",children:[(0,b.jsx)("h3",{className:"text-2xl font-bold text-red-700 dark:text-red-400 mr-4",children:"Jest + Postman"}),(0,b.jsx)("span",{className:"bg-red-200 dark:bg-red-800 px-3 py-1 rounded-full text-sm font-mono",children:"Node.js"})]}),(0,b.jsxs)("p",{className:"mb-3",children:[(0,b.jsx)("strong",{children:"Description:"})," Combines Jest testing framework with Postman collections for powerful API automation"]}),(0,b.jsx)("h4",{className:"font-semibold mb-2",children:"Installation:"}),(0,b.jsx)("div",{className:"bg-gray-100 dark:bg-gray-800 p-2 rounded mb-3",children:(0,b.jsx)("code",{className:"text-sm",children:"npm install --save-dev jest-postman newman"})}),(0,b.jsx)("h4",{className:"font-semibold mb-2",children:"Basic Usage:"}),(0,b.jsx)("div",{className:"bg-white dark:bg-gray-700 p-3 rounded mb-3",children:(0,b.jsx)("pre",{className:"text-sm",children:(0,b.jsx)("code",{children:`const { runCollection } = require('jest-postman');

describe('User API Tests', () => {
  it('should run user collection', async () => {
    const result = await runCollection('./collections/UserAPI.postman_collection.json', {
      environment: './environments/Dev.postman_environment.json'
    });

    expect(result.summary.run.failures).toHaveLength(0);
    expect(result.summary.run.executions[0].response.responseTime).toBeLessThan(1000);
  });
});`})})}),(0,b.jsx)("h4",{className:"font-semibold mb-2",children:"Advanced Configuration:"}),(0,b.jsx)("div",{className:"bg-white dark:bg-gray-700 p-3 rounded mb-3",children:(0,b.jsx)("pre",{className:"text-sm",children:(0,b.jsx)("code",{children:`const options = {
  environment: './environments/Staging.postman_environment.json',
  globals: './globals.postman_globals.json',
  reporters: ['cli', 'json', 'html'],
  timeout: 30000,
  delayRequest: 1000,
  ignoreRedirects: false,
  insecure: false,
  bail: true
};

const result = await runCollection('./UserAPI.postman_collection.json', options);`})})}),(0,b.jsx)("h4",{className:"font-semibold mb-2",children:"Custom Assertions:"}),(0,b.jsx)("div",{className:"bg-white dark:bg-gray-700 p-3 rounded mb-3",children:(0,b.jsx)("pre",{className:"text-sm",children:(0,b.jsx)("code",{children:`it('should validate user data structure', async () => {
  const result = await runCollection('./UserAPI.postman_collection.json');

  // Check response times
  result.summary.run.executions.forEach(execution => {
    expect(execution.response.responseTime).toBeLessThan(2000);
  });

  // Validate response schemas
  expect(result.summary.run.executions[0].response.json()).toHaveProperty('id');
  expect(result.summary.run.executions[0].response.json()).toHaveProperty('name');
});`})})}),(0,b.jsx)("h4",{className:"font-semibold mb-2",children:"CI/CD Integration:"}),(0,b.jsx)("div",{className:"bg-gray-100 dark:bg-gray-800 p-3 rounded mb-3",children:(0,b.jsx)("pre",{className:"text-sm",children:(0,b.jsx)("code",{children:`# .github/workflows/api-tests.yml
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
    - uses: codecov/codecov-action@v3`})})}),(0,b.jsxs)("div",{className:"text-sm",children:[(0,b.jsx)("strong",{children:"Features:"})," Postman collection execution, Jest integration, custom reporters, environment support, parallel execution, detailed reporting"]})]})]}),(0,b.jsxs)("div",{className:"bg-green-100 dark:bg-green-900 border-l-4 border-green-500 p-4 mb-6",children:[(0,b.jsx)("p",{className:"font-semibold text-gray-900 dark:text-gray-100",children:"🟩 Example:"}),(0,b.jsx)("p",{className:"text-gray-700 dark:text-gray-300",children:"Using REST Assured, you can create a complete test suite that validates user CRUD operations, authentication flows, and data integrity across all API endpoints."})]}),(0,b.jsx)("h2",{className:"text-2xl font-semibold mb-4",children:"Framework Architecture"}),(0,b.jsxs)("div",{className:"grid md:grid-cols-2 gap-6 mb-6",children:[(0,b.jsxs)("div",{children:[(0,b.jsx)("h3",{className:"text-lg font-semibold mb-3",children:"Core Components"}),(0,b.jsxs)("ul",{className:"list-disc list-inside",children:[(0,b.jsxs)("li",{children:[(0,b.jsx)("strong",{children:"HTTP Client:"})," Handles requests/responses"]}),(0,b.jsxs)("li",{children:[(0,b.jsx)("strong",{children:"Assertion Library:"})," Validates responses"]}),(0,b.jsxs)("li",{children:[(0,b.jsx)("strong",{children:"Test Runner:"})," Executes test suites"]}),(0,b.jsxs)("li",{children:[(0,b.jsx)("strong",{children:"Reporting:"})," Generates test reports"]}),(0,b.jsxs)("li",{children:[(0,b.jsx)("strong",{children:"Configuration:"})," Environment settings"]})]})]}),(0,b.jsxs)("div",{children:[(0,b.jsx)("h3",{className:"text-lg font-semibold mb-3",children:"Supporting Tools"}),(0,b.jsxs)("ul",{className:"list-disc list-inside",children:[(0,b.jsxs)("li",{children:[(0,b.jsx)("strong",{children:"Mock Servers:"})," Simulate API responses"]}),(0,b.jsxs)("li",{children:[(0,b.jsx)("strong",{children:"Data Generators:"})," Create test data"]}),(0,b.jsxs)("li",{children:[(0,b.jsx)("strong",{children:"CI/CD Integration:"})," Automated execution"]}),(0,b.jsxs)("li",{children:[(0,b.jsx)("strong",{children:"Monitoring:"})," Performance tracking"]}),(0,b.jsxs)("li",{children:[(0,b.jsx)("strong",{children:"Version Control:"})," Test suite management"]})]})]})]}),(0,b.jsx)("h2",{className:"text-2xl font-semibold mb-4",children:"Building an API Test Framework"}),(0,b.jsxs)("div",{className:"bg-gray-100 dark:bg-gray-800 p-6 rounded mb-6",children:[(0,b.jsx)("h3",{className:"font-semibold mb-4",children:"Framework Structure:"}),(0,b.jsxs)("div",{className:"space-y-4",children:[(0,b.jsxs)("div",{className:"border-l-4 border-blue-500 pl-4",children:[(0,b.jsx)("h4",{className:"font-semibold mb-2",children:"Base Classes"}),(0,b.jsxs)("div",{className:"bg-white dark:bg-gray-700 p-3 rounded text-sm",children:[(0,b.jsx)("code",{children:"ApiTestBase.java"})," - Common setup, authentication, utilities"]})]}),(0,b.jsxs)("div",{className:"border-l-4 border-green-500 pl-4",children:[(0,b.jsx)("h4",{className:"font-semibold mb-2",children:"Page Objects / Service Classes"}),(0,b.jsxs)("div",{className:"bg-white dark:bg-gray-700 p-3 rounded text-sm",children:[(0,b.jsx)("code",{children:"UserService.java"})," - User API methods and validations"]})]}),(0,b.jsxs)("div",{className:"border-l-4 border-purple-500 pl-4",children:[(0,b.jsx)("h4",{className:"font-semibold mb-2",children:"Test Classes"}),(0,b.jsxs)("div",{className:"bg-white dark:bg-gray-700 p-3 rounded text-sm",children:[(0,b.jsx)("code",{children:"UserApiTests.java"})," - Test methods for user endpoints"]})]}),(0,b.jsxs)("div",{className:"border-l-4 border-orange-500 pl-4",children:[(0,b.jsx)("h4",{className:"font-semibold mb-2",children:"Configuration"}),(0,b.jsxs)("div",{className:"bg-white dark:bg-gray-700 p-3 rounded text-sm",children:[(0,b.jsx)("code",{children:"config.properties"})," - Environment URLs, credentials, timeouts"]})]})]})]}),(0,b.jsx)("h2",{className:"text-2xl font-semibold mb-4",children:"Data-Driven Testing"}),(0,b.jsxs)("div",{className:"space-y-4 mb-6",children:[(0,b.jsxs)("div",{className:"border border-gray-300 dark:border-gray-600 rounded-lg p-4",children:[(0,b.jsx)("h3",{className:"text-lg font-semibold mb-3",children:"Test Data Sources"}),(0,b.jsxs)("div",{className:"grid md:grid-cols-3 gap-4",children:[(0,b.jsxs)("div",{className:"text-center p-3 bg-blue-100 dark:bg-blue-900 rounded",children:[(0,b.jsx)("h4",{className:"font-semibold mb-1",children:"JSON Files"}),(0,b.jsx)("p",{className:"text-sm",children:"Structured test data"})]}),(0,b.jsxs)("div",{className:"text-center p-3 bg-green-100 dark:bg-green-900 rounded",children:[(0,b.jsx)("h4",{className:"font-semibold mb-1",children:"CSV Files"}),(0,b.jsx)("p",{className:"text-sm",children:"Tabular test data"})]}),(0,b.jsxs)("div",{className:"text-center p-3 bg-purple-100 dark:bg-purple-900 rounded",children:[(0,b.jsx)("h4",{className:"font-semibold mb-1",children:"Databases"}),(0,b.jsx)("p",{className:"text-sm",children:"Dynamic test data"})]})]})]}),(0,b.jsxs)("div",{className:"border border-gray-300 dark:border-gray-600 rounded-lg p-4",children:[(0,b.jsx)("h3",{className:"text-lg font-semibold mb-3",children:"Parameterized Tests"}),(0,b.jsx)("div",{className:"bg-gray-100 dark:bg-gray-800 p-3 rounded",children:(0,b.jsx)("pre",{className:"text-sm",children:(0,b.jsx)("code",{children:`@ParameterizedTest
@CsvSource({
  "admin, password123, 200",
  "user, pass456, 200",
  "invalid, wrong, 401"
})
void testLogin(String username, String password, int expectedStatus) {
    // Test implementation
}`})})})]})]}),(0,b.jsx)("h2",{className:"text-2xl font-semibold mb-4",children:"CI/CD Integration"}),(0,b.jsxs)("div",{className:"grid md:grid-cols-2 gap-6 mb-6",children:[(0,b.jsxs)("div",{children:[(0,b.jsx)("h3",{className:"text-lg font-semibold mb-3",children:"GitHub Actions Example"}),(0,b.jsx)("div",{className:"bg-gray-100 dark:bg-gray-800 p-3 rounded text-sm",children:(0,b.jsx)("pre",{children:(0,b.jsx)("code",{children:`name: API Tests
on: [push, pull_request]
jobs:
  test:
    runs-on: ubuntu-latest
    steps:
    - uses: actions/checkout@v3
    - uses: actions/setup-java@v3
    - run: mvn test`})})})]}),(0,b.jsxs)("div",{children:[(0,b.jsx)("h3",{className:"text-lg font-semibold mb-3",children:"GitHub Actions Pipeline"}),(0,b.jsx)("div",{className:"bg-gray-100 dark:bg-gray-800 p-3 rounded text-sm",children:(0,b.jsx)("pre",{children:(0,b.jsx)("code",{children:`name: API Tests
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
        reporter: java-junit`})})})]})]}),(0,b.jsx)("h2",{className:"text-2xl font-semibold mb-4",children:"Reporting & Monitoring"}),(0,b.jsxs)("div",{className:"space-y-4 mb-6",children:[(0,b.jsxs)("div",{className:"border border-gray-300 dark:border-gray-600 rounded-lg p-4",children:[(0,b.jsx)("h3",{className:"text-lg font-semibold mb-3",children:"Test Reports"}),(0,b.jsxs)("ul",{className:"list-disc list-inside",children:[(0,b.jsxs)("li",{children:[(0,b.jsx)("strong",{children:"Allure Reports:"})," Detailed test execution reports"]}),(0,b.jsxs)("li",{children:[(0,b.jsx)("strong",{children:"JUnit/TestNG XML:"})," CI/CD integration reports"]}),(0,b.jsxs)("li",{children:[(0,b.jsx)("strong",{children:"Extent Reports:"})," HTML test execution dashboards"]}),(0,b.jsxs)("li",{children:[(0,b.jsx)("strong",{children:"Custom Dashboards:"})," Business-specific metrics"]})]})]}),(0,b.jsxs)("div",{className:"border border-gray-300 dark:border-gray-600 rounded-lg p-4",children:[(0,b.jsx)("h3",{className:"text-lg font-semibold mb-3",children:"Monitoring Integration"}),(0,b.jsxs)("ul",{className:"list-disc list-inside",children:[(0,b.jsxs)("li",{children:[(0,b.jsx)("strong",{children:"Test Metrics:"})," Pass/fail rates, execution times"]}),(0,b.jsxs)("li",{children:[(0,b.jsx)("strong",{children:"API Health Checks:"})," Endpoint availability monitoring"]}),(0,b.jsxs)("li",{children:[(0,b.jsx)("strong",{children:"Performance Tracking:"})," Response time trends"]}),(0,b.jsxs)("li",{children:[(0,b.jsx)("strong",{children:"Alert Integration:"})," Failure notifications"]})]})]})]}),(0,b.jsx)("h2",{className:"text-2xl font-semibold mb-4",children:"Framework Best Practices"}),(0,b.jsxs)("div",{className:"grid md:grid-cols-2 gap-6 mb-6",children:[(0,b.jsxs)("div",{children:[(0,b.jsx)("h3",{className:"text-lg font-semibold mb-3",children:"Code Organization"}),(0,b.jsxs)("ul",{className:"list-disc list-inside",children:[(0,b.jsx)("li",{children:"Use Page Object Model for APIs"}),(0,b.jsx)("li",{children:"Separate test data from test logic"}),(0,b.jsx)("li",{children:"Implement proper error handling"}),(0,b.jsx)("li",{children:"Use meaningful test method names"}),(0,b.jsx)("li",{children:"Follow consistent naming conventions"})]})]}),(0,b.jsxs)("div",{children:[(0,b.jsx)("h3",{className:"text-lg font-semibold mb-3",children:"Maintainability"}),(0,b.jsxs)("ul",{className:"list-disc list-inside",children:[(0,b.jsx)("li",{children:"Keep tests independent and isolated"}),(0,b.jsx)("li",{children:"Use configuration files for environments"}),(0,b.jsx)("li",{children:"Implement proper cleanup in teardown"}),(0,b.jsx)("li",{children:"Document test cases and APIs"}),(0,b.jsx)("li",{children:"Regular framework updates"})]})]})]}),(0,b.jsxs)("div",{className:"bg-yellow-100 dark:bg-yellow-900 border-l-4 border-yellow-500 p-4 mb-6",children:[(0,b.jsx)("p",{className:"font-semibold text-gray-900 dark:text-gray-100",children:"🟧 Warning:"}),(0,b.jsx)("p",{className:"text-gray-700 dark:text-gray-300",children:"API automation frameworks require careful maintenance. Changes to API contracts can break tests, so implement robust change detection and version management strategies."})]}),(0,b.jsxs)("div",{className:"bg-purple-100 dark:bg-purple-900 border-l-4 border-purple-500 p-4 mb-6",children:[(0,b.jsx)("p",{className:"font-semibold text-gray-900 dark:text-gray-100",children:"🟪 Key Tip:"}),(0,b.jsx)("p",{className:"text-gray-700 dark:text-gray-300",children:"Choose an API automation framework that matches your team's technology stack and expertise. Invest time in creating reusable components and utilities to maximize test coverage and maintainability."})]}),(0,b.jsx)("h2",{className:"text-2xl font-semibold mb-4",children:"API Automation Framework Checklist"}),(0,b.jsxs)("div",{className:"bg-gray-100 dark:bg-gray-800 p-4 rounded",children:[(0,b.jsx)("h3",{className:"font-semibold mb-3",children:"Framework Setup:"}),(0,b.jsxs)("ul",{className:"list-disc list-inside mb-4",children:[(0,b.jsx)("li",{children:"✅ Appropriate framework for technology stack"}),(0,b.jsx)("li",{children:"✅ Proper project structure and organization"}),(0,b.jsx)("li",{children:"✅ Configuration management for environments"}),(0,b.jsx)("li",{children:"✅ Test data management strategy"}),(0,b.jsx)("li",{children:"✅ CI/CD pipeline integration"})]}),(0,b.jsx)("h3",{className:"font-semibold mb-3",children:"Test Implementation:"}),(0,b.jsxs)("ul",{className:"list-disc list-inside mb-4",children:[(0,b.jsx)("li",{children:"✅ Comprehensive API endpoint coverage"}),(0,b.jsx)("li",{children:"✅ Proper authentication and authorization testing"}),(0,b.jsx)("li",{children:"✅ Data validation and business logic testing"}),(0,b.jsx)("li",{children:"✅ Error handling and edge case testing"}),(0,b.jsx)("li",{children:"✅ Performance and load testing capabilities"})]}),(0,b.jsx)("h3",{className:"font-semibold mb-3",children:"Quality Assurance:"}),(0,b.jsxs)("ul",{className:"list-disc list-inside",children:[(0,b.jsx)("li",{children:"✅ Automated test execution and reporting"}),(0,b.jsx)("li",{children:"✅ Test result analysis and debugging"}),(0,b.jsx)("li",{children:"✅ Framework maintenance and updates"}),(0,b.jsx)("li",{children:"✅ Documentation and knowledge sharing"}),(0,b.jsx)("li",{children:"✅ Continuous improvement processes"})]})]})]})}a.s(["default",()=>c])}];

//# sourceMappingURL=80b94_github_QA_Bible_src_app_api-backend_automation-frameworks_page_tsx_ce575f19._.js.map