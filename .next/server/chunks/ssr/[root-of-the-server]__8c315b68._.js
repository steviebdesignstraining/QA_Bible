module.exports=[93695,(a,b,c)=>{b.exports=a.x("next/dist/shared/lib/no-fallback-error.external.js",()=>require("next/dist/shared/lib/no-fallback-error.external.js"))},17745,a=>{a.n(a.i(59250))},23303,a=>{a.n(a.i(88148))},44896,a=>{a.n(a.i(74740))},46174,a=>{a.n(a.i(83216))},78190,a=>{a.n(a.i(17921))},60947,a=>{"use strict";var b=a.i(64868);function c(){return(0,b.jsxs)("div",{className:"max-w-6xl mx-auto",children:[(0,b.jsx)("h1",{className:"text-3xl font-bold mb-6",children:"API Automation"}),(0,b.jsx)("p",{className:"mb-6",children:"API automation involves programmatically testing REST APIs, GraphQL endpoints, and other web services. It focuses on validating data, responses, and business logic without UI dependencies."}),(0,b.jsxs)("div",{className:"bg-blue-100 dark:bg-blue-900 border-l-4 border-blue-500 p-4 mb-6",children:[(0,b.jsx)("p",{className:"font-semibold text-gray-900 dark:text-gray-100",children:"🟦 Info:"}),(0,b.jsx)("p",{className:"text-gray-700 dark:text-gray-300",children:"API automation enables fast, reliable testing of backend services, microservices, and integrations. It provides early feedback and supports continuous integration pipelines."})]}),(0,b.jsx)("h2",{className:"text-2xl font-semibold mb-4",children:"Popular API Testing Tools"}),(0,b.jsxs)("div",{className:"space-y-6 mb-6",children:[(0,b.jsxs)("div",{className:"border border-green-300 dark:border-green-600 rounded-lg p-6 bg-green-50 dark:bg-green-900/20",children:[(0,b.jsxs)("div",{className:"flex items-center mb-4",children:[(0,b.jsx)("h3",{className:"text-2xl font-bold text-green-700 dark:text-green-400 mr-4",children:"Postman + Newman"}),(0,b.jsx)("span",{className:"bg-green-200 dark:bg-green-800 px-3 py-1 rounded-full text-sm font-mono",children:"JavaScript"})]}),(0,b.jsxs)("p",{className:"mb-3",children:[(0,b.jsx)("strong",{children:"Description:"})," Visual API testing with collection runner for automation"]}),(0,b.jsx)("div",{className:"bg-white dark:bg-gray-700 p-3 rounded mb-3",children:(0,b.jsx)("pre",{className:"text-sm",children:(0,b.jsx)("code",{children:`// Newman command line
newman run collection.json \\
  --environment env.json \\
  --reporters cli,json \\
  --reporter-json-export results.json

// Programmatic usage
const newman = require('newman')

newman.run({
  collection: 'collection.json',
  environment: 'env.json',
  reporters: ['cli', 'json']
}, function (err, summary) {
  if (err) throw err
  console.log('Tests completed!')
})`})})}),(0,b.jsxs)("div",{className:"text-sm",children:[(0,b.jsx)("strong",{children:"Features:"})," Collection-based testing, environment management, data-driven tests, CI/CD integration"]})]}),(0,b.jsxs)("div",{className:"border border-blue-300 dark:border-blue-600 rounded-lg p-6 bg-blue-50 dark:bg-blue-900/20",children:[(0,b.jsxs)("div",{className:"flex items-center mb-4",children:[(0,b.jsx)("h3",{className:"text-2xl font-bold text-blue-700 dark:text-blue-400 mr-4",children:"REST Assured"}),(0,b.jsx)("span",{className:"bg-blue-200 dark:bg-blue-800 px-3 py-1 rounded-full text-sm font-mono",children:"Java"})]}),(0,b.jsxs)("p",{className:"mb-3",children:[(0,b.jsx)("strong",{children:"Description:"})," Java DSL for testing REST APIs with fluent syntax"]}),(0,b.jsx)("div",{className:"bg-white dark:bg-gray-700 p-3 rounded mb-3",children:(0,b.jsx)("pre",{className:"text-sm",children:(0,b.jsx)("code",{children:`given()
  .header("Authorization", "Bearer " + token)
  .contentType(ContentType.JSON)
  .body(userData)
.when()
  .post("/api/users")
.then()
  .statusCode(201)
  .body("id", notNullValue())
  .body("name", equalTo("John Doe"))`})})}),(0,b.jsxs)("div",{className:"text-sm",children:[(0,b.jsx)("strong",{children:"Features:"})," Fluent API, JSON/XML validation, authentication, custom matchers"]})]}),(0,b.jsxs)("div",{className:"border border-purple-300 dark:border-purple-600 rounded-lg p-6 bg-purple-50 dark:bg-purple-900/20",children:[(0,b.jsxs)("div",{className:"flex items-center mb-4",children:[(0,b.jsx)("h3",{className:"text-2xl font-bold text-purple-700 dark:text-purple-400 mr-4",children:"Supertest"}),(0,b.jsx)("span",{className:"bg-purple-200 dark:bg-purple-800 px-3 py-1 rounded-full text-sm font-mono",children:"Node.js"})]}),(0,b.jsxs)("p",{className:"mb-3",children:[(0,b.jsx)("strong",{children:"Description:"})," HTTP endpoint testing library for Express.js applications"]}),(0,b.jsx)("div",{className:"bg-white dark:bg-gray-700 p-3 rounded mb-3",children:(0,b.jsx)("pre",{className:"text-sm",children:(0,b.jsx)("code",{children:`const request = require('supertest')
const app = require('../app')

describe('GET /api/users', () => {
  it('should return users list', async () => {
    const response = await request(app)
      .get('/api/users')
      .expect(200)
      .expect('Content-Type', /json/)

    expect(response.body).toBeInstanceOf(Array)
    expect(response.body.length).toBeGreaterThan(0)
  })
})`})})}),(0,b.jsxs)("div",{className:"text-sm",children:[(0,b.jsx)("strong",{children:"Features:"})," Integration testing, cookie handling, session management, pipeline support"]})]}),(0,b.jsxs)("div",{className:"border border-orange-300 dark:border-orange-600 rounded-lg p-6 bg-orange-50 dark:bg-orange-900/20",children:[(0,b.jsxs)("div",{className:"flex items-center mb-4",children:[(0,b.jsx)("h3",{className:"text-2xl font-bold text-orange-700 dark:text-orange-400 mr-4",children:"Karate"}),(0,b.jsx)("span",{className:"bg-orange-200 dark:bg-orange-800 px-3 py-1 rounded-full text-sm font-mono",children:"Java"})]}),(0,b.jsxs)("p",{className:"mb-3",children:[(0,b.jsx)("strong",{children:"Description:"})," API testing framework with BDD-style syntax"]}),(0,b.jsx)("div",{className:"bg-white dark:bg-gray-700 p-3 rounded mb-3",children:(0,b.jsx)("pre",{className:"text-sm",children:(0,b.jsx)("code",{children:`Feature: User API

  Background:
    * url 'http://api.example.com'

  Scenario: Create and verify user
    Given request { name: 'John', email: 'john@test.com' }
    When method POST
    Then status 201
    And match response.id == '#number'
    And match response.name == 'John'`})})}),(0,b.jsxs)("div",{className:"text-sm",children:[(0,b.jsx)("strong",{children:"Features:"})," BDD syntax, built-in assertions, data-driven testing, mocks, performance testing"]})]}),(0,b.jsxs)("div",{className:"border border-red-300 dark:border-red-600 rounded-lg p-6 bg-red-50 dark:bg-red-900/20",children:[(0,b.jsxs)("div",{className:"flex items-center mb-4",children:[(0,b.jsx)("h3",{className:"text-2xl font-bold text-red-700 dark:text-red-400 mr-4",children:"Jest + Postman"}),(0,b.jsx)("span",{className:"bg-red-200 dark:bg-red-800 px-3 py-1 rounded-full text-sm font-mono",children:"Node.js"})]}),(0,b.jsxs)("p",{className:"mb-3",children:[(0,b.jsx)("strong",{children:"Description:"})," Combines Jest testing framework with Postman collections"]}),(0,b.jsx)("div",{className:"bg-white dark:bg-gray-700 p-3 rounded mb-3",children:(0,b.jsx)("pre",{className:"text-sm",children:(0,b.jsx)("code",{children:`const { runCollection } = require('jest-postman')

describe('API Tests', () => {
  it('should run user collection', async () => {
    const result = await runCollection('./UserAPI.postman_collection.json')
    expect(result.summary.run.failures).toHaveLength(0)
  })
})`})})}),(0,b.jsxs)("div",{className:"text-sm",children:[(0,b.jsx)("strong",{children:"Features:"})," Postman collection execution, Jest integration, custom reporters, environment support"]})]})]}),(0,b.jsxs)("div",{className:"bg-green-100 dark:bg-green-900 border-l-4 border-green-500 p-4 mb-6",children:[(0,b.jsx)("p",{className:"font-semibold text-gray-900 dark:text-gray-100",children:"🟩 Example:"}),(0,b.jsx)("p",{className:"text-gray-700 dark:text-gray-300",children:"API automation enables testing complete user workflows like registration, login, and data retrieval across multiple services, ensuring end-to-end functionality."})]}),(0,b.jsx)("h2",{className:"text-2xl font-semibold mb-4",children:"API Testing Strategy"}),(0,b.jsxs)("div",{className:"grid md:grid-cols-2 gap-6 mb-6",children:[(0,b.jsxs)("div",{children:[(0,b.jsx)("h3",{className:"text-lg font-semibold mb-3",children:"Testing Pyramid"}),(0,b.jsxs)("ul",{className:"list-disc list-inside",children:[(0,b.jsxs)("li",{children:[(0,b.jsx)("strong",{children:"Unit Tests:"})," Individual functions/methods"]}),(0,b.jsxs)("li",{children:[(0,b.jsx)("strong",{children:"Integration Tests:"})," Service interactions"]}),(0,b.jsxs)("li",{children:[(0,b.jsx)("strong",{children:"Contract Tests:"})," API specifications"]}),(0,b.jsxs)("li",{children:[(0,b.jsx)("strong",{children:"E2E API Tests:"})," Complete workflows"]})]})]}),(0,b.jsxs)("div",{children:[(0,b.jsx)("h3",{className:"text-lg font-semibold mb-3",children:"Test Types"}),(0,b.jsxs)("ul",{className:"list-disc list-inside",children:[(0,b.jsxs)("li",{children:[(0,b.jsx)("strong",{children:"Functional:"})," Business logic validation"]}),(0,b.jsxs)("li",{children:[(0,b.jsx)("strong",{children:"Performance:"})," Response times, load testing"]}),(0,b.jsxs)("li",{children:[(0,b.jsx)("strong",{children:"Security:"})," Authentication, authorization"]}),(0,b.jsxs)("li",{children:[(0,b.jsx)("strong",{children:"Contract:"})," API specification compliance"]})]})]})]}),(0,b.jsx)("h2",{className:"text-2xl font-semibold mb-4",children:"Authentication Testing"}),(0,b.jsx)("div",{className:"bg-white dark:bg-gray-700 p-4 rounded mb-6",children:(0,b.jsx)("pre",{className:"text-sm",children:(0,b.jsx)("code",{children:`// JWT Token Testing
describe('Authentication', () => {
  let authToken

  beforeAll(async () => {
    const response = await request(app)
      .post('/auth/login')
      .send({ email: 'user@test.com', password: 'password' })
    authToken = response.body.token
  })

  it('should access protected route with valid token', async () => {
    const response = await request(app)
      .get('/api/profile')
      .set('Authorization', 'Bearer ' + authToken)
      .expect(200)
  })

  it('should reject invalid token', async () => {
    const response = await request(app)
      .get('/api/profile')
      .set('Authorization', 'Bearer invalid-token')
      .expect(401)
  })
})

// API Key Testing
describe('API Key Auth', () => {
  it('should accept valid API key', async () => {
    const response = await request(app)
      .get('/api/data')
      .set('X-API-Key', process.env.VALID_API_KEY)
      .expect(200)
  })
})`})})}),(0,b.jsx)("h2",{className:"text-2xl font-semibold mb-4",children:"Data Validation"}),(0,b.jsx)("div",{className:"bg-white dark:bg-gray-700 p-4 rounded mb-6",children:(0,b.jsx)("pre",{className:"text-sm",children:(0,b.jsx)("code",{children:`// Schema Validation
const userSchema = {
  type: 'object',
  required: ['id', 'name', 'email'],
  properties: {
    id: { type: 'number' },
    name: { type: 'string', minLength: 1 },
    email: { type: 'string', format: 'email' }
  }
}

describe('User API Schema', () => {
  it('should return valid user object', async () => {
    const response = await request(app)
      .get('/api/users/1')
      .expect(200)

    const validation = validate(response.body, userSchema)
    expect(validation.valid).toBe(true)
  })
})

// Business Rule Validation
describe('Business Rules', () => {
  it('should enforce age restrictions', async () => {
    // Underage user
    const underageResponse = await request(app)
      .post('/api/users')
      .send({ name: 'Young User', age: 16 })
      .expect(400)

    expect(underageResponse.body.message).toContain('age requirement')
  })

  it('should validate email uniqueness', async () => {
    // First user
    await request(app)
      .post('/api/users')
      .send({ name: 'User 1', email: 'test@example.com' })
      .expect(201)

    // Duplicate email
    const duplicateResponse = await request(app)
      .post('/api/users')
      .send({ name: 'User 2', email: 'test@example.com' })
      .expect(409)

    expect(duplicateResponse.body.message).toContain('email exists')
  })
})`})})}),(0,b.jsx)("h2",{className:"text-2xl font-semibold mb-4",children:"Error Handling Testing"}),(0,b.jsx)("div",{className:"bg-white dark:bg-gray-700 p-4 rounded mb-6",children:(0,b.jsx)("pre",{className:"text-sm",children:(0,b.jsx)("code",{children:`describe('Error Scenarios', () => {
  it('should handle 404 for non-existent resource', async () => {
    const response = await request(app)
      .get('/api/users/99999')
      .expect(404)

    expect(response.body).toHaveProperty('error')
    expect(response.body.error).toBe('User not found')
  })

  it('should validate required fields', async () => {
    const response = await request(app)
      .post('/api/users')
      .send({}) // Empty body
      .expect(400)

    expect(response.body.errors).toContain('name is required')
    expect(response.body.errors).toContain('email is required')
  })

  it('should handle malformed JSON', async () => {
    const response = await request(app)
      .post('/api/users')
      .set('Content-Type', 'application/json')
      .send('{ invalid json }')
      .expect(400)

    expect(response.body.error).toBe('Invalid JSON')
  })

  it('should implement rate limiting', async () => {
    // Make multiple requests quickly
    const promises = Array(100).fill().map(() =>
      request(app).get('/api/data')
    )

    const responses = await Promise.all(promises)
    const rateLimitedResponses = responses.filter(r => r.status === 429)

    expect(rateLimitedResponses.length).toBeGreaterThan(0)
  })
})`})})}),(0,b.jsx)("h2",{className:"text-2xl font-semibold mb-4",children:"CI/CD Integration"}),(0,b.jsx)("div",{className:"bg-gray-100 dark:bg-gray-800 p-4 rounded mb-6",children:(0,b.jsx)("pre",{className:"text-sm",children:(0,b.jsx)("code",{children:`# .github/workflows/api-tests.yml
name: API Tests
on: [push, pull_request]

jobs:
  test:
    runs-on: ubuntu-latest
    services:
      postgres:
        image: postgres:13
        env:
          POSTGRES_PASSWORD: postgres
        options: >-
          --health-cmd pg_isready
          --health-interval 10s
          --health-timeout 5s
          --health-retries 5

    steps:
    - uses: actions/checkout@v4
    - uses: actions/setup-node@v4
      with:
        node-version: '18'
    - run: npm ci
    - run: npm run migrate:test  # Database setup
    - run: npm test -- --coverage
    - uses: codecov/codecov-action@v3
      with:
        file: ./coverage/lcov.info`})})}),(0,b.jsxs)("div",{className:"bg-yellow-100 dark:bg-yellow-900 border-l-4 border-yellow-500 p-4 mb-6",children:[(0,b.jsx)("p",{className:"font-semibold text-gray-900 dark:text-gray-100",children:"🟧 Warning:"}),(0,b.jsx)("p",{className:"text-gray-700 dark:text-gray-300",children:"API tests can be fragile when schemas change. Use contract testing and proper versioning to maintain test stability."})]}),(0,b.jsxs)("div",{className:"bg-purple-100 dark:bg-purple-900 border-l-4 border-purple-500 p-4 mb-6",children:[(0,b.jsx)("p",{className:"font-semibold text-gray-900 dark:text-gray-100",children:"🟪 Key Tip:"}),(0,b.jsx)("p",{className:"text-gray-700 dark:text-gray-300",children:"Start with happy path tests, then add negative scenarios, edge cases, and error conditions. Use realistic test data that matches production patterns."})]}),(0,b.jsx)("h2",{className:"text-2xl font-semibold mb-4",children:"API Automation Best Practices"}),(0,b.jsxs)("div",{className:"grid md:grid-cols-2 gap-6",children:[(0,b.jsxs)("div",{children:[(0,b.jsx)("h3",{className:"text-lg font-semibold mb-3",children:"Test Design"}),(0,b.jsxs)("ul",{className:"list-disc list-inside",children:[(0,b.jsx)("li",{children:"Use descriptive test names"}),(0,b.jsx)("li",{children:"Implement proper setup/teardown"}),(0,b.jsx)("li",{children:"Test one thing per test case"}),(0,b.jsx)("li",{children:"Use data-driven testing"}),(0,b.jsx)("li",{children:"Implement proper assertions"})]})]}),(0,b.jsxs)("div",{children:[(0,b.jsx)("h3",{className:"text-lg font-semibold mb-3",children:"Maintenance"}),(0,b.jsxs)("ul",{className:"list-disc list-inside",children:[(0,b.jsx)("li",{children:"Keep tests independent"}),(0,b.jsx)("li",{children:"Use environment-specific configs"}),(0,b.jsx)("li",{children:"Implement proper error handling"}),(0,b.jsx)("li",{children:"Document API contracts"}),(0,b.jsx)("li",{children:"Regular test suite updates"})]})]})]})]})}a.s(["default",()=>c])}];

//# sourceMappingURL=%5Broot-of-the-server%5D__8c315b68._.js.map