export default function Page() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Test Data Management</h1>

      <p className="mb-4">
        Test data management involves creating, maintaining, and organizing data used in automated tests. Proper data management ensures tests are reliable, maintainable, and produce consistent results.
      </p>

      <div className="bg-blue-100 dark:bg-blue-900 border-l-4 border-blue-500 p-4 mb-4">
        <p className="font-semibold text-gray-900 dark:text-gray-100">🟦 Info:</p>
        <p className="text-gray-700 dark:text-gray-300">Good test data management separates data from code, enables data-driven testing, and ensures test reliability.</p>
      </div>

      <h2 className="text-2xl font-semibold mb-4">Test Data Types</h2>

      <h3 className="text-xl font-semibold mb-2">Static Test Data</h3>
      <p className="mb-4">
        Fixed data that doesn't change between test runs. Used for consistent baseline testing.
      </p>

      <div className="bg-green-100 dark:bg-green-900 border-l-4 border-green-500 p-4 mb-4">
        <p className="font-semibold text-gray-900 dark:text-gray-100">🟩 Example:</p>
        <p className="text-gray-700 dark:text-gray-300">User roles, product categories, or configuration settings that remain constant.</p>
      </div>

      <h3 className="text-xl font-semibold mb-2">Dynamic Test Data</h3>
      <p className="mb-4">
        Data generated or modified during test execution. Ensures test isolation and prevents conflicts.
      </p>

      <h3 className="text-xl font-semibold mb-2">Parameterized Test Data</h3>
      <p className="mb-4">
        Data passed as parameters to test methods. Enables data-driven testing with multiple scenarios.
      </p>

      <h2 className="text-2xl font-semibold mb-4">Data Management Strategies</h2>

      <h3 className="text-xl font-semibold mb-2">1. External Files</h3>
      <pre className="bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 p-4 rounded mb-4">
        <code>{`// JSON test data
{
  "users": [
    {
      "username": "testuser1",
      "password": "password123",
      "role": "admin"
    },
    {
      "username": "testuser2",
      "password": "password456",
      "role": "user"
    }
  ]
}

// CSV test data
username,password,role
testuser1,password123,admin
testuser2,password456,user`}</code>
      </pre>

      <h3 className="text-xl font-semibold mb-2">2. Database Management</h3>
      <pre className="bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 p-4 rounded mb-4">
        <code>{`// Database setup and teardown
class TestDataManager {
  static async setupTestData() {
    await db.connect();
    await db.insert('users', testUsers);
    await db.insert('products', testProducts);
  }

  static async cleanupTestData() {
    await db.delete('users', { test: true });
    await db.delete('products', { test: true });
  }
}`}</code>
      </pre>

      <h3 className="text-xl font-semibold mb-2">3. API-Generated Data</h3>
      <pre className="bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 p-4 rounded mb-4">
        <code>{`// Generate test data via API
async function createTestUser() {
  const response = await api.post('/users', {
    name: faker.name.fullName(),
    email: faker.internet.email(),
    role: 'test'
  });
  return response.data;
}

// Use in tests
const testUser = await createTestUser();
await loginPage.login(testUser.email, 'password');`}</code>
      </pre>

      <h3 className="text-xl font-semibold mb-2">4. Data Factories</h3>
      <pre className="bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 p-4 rounded mb-4">
        <code>{`// Factory pattern for test data
class UserFactory {
  static createUser(overrides = {}) {
    return {
      name: faker.name.fullName(),
      email: faker.internet.email(),
      role: 'user',
      active: true,
      ...overrides
    };
  }

  static createAdmin() {
    return this.createUser({ role: 'admin' });
  }
}

// Usage
const adminUser = UserFactory.createAdmin();
const regularUser = UserFactory.createUser({ active: false });`}</code>
      </pre>

      <div className="bg-yellow-100 dark:bg-yellow-900 border-l-4 border-yellow-500 p-4 mb-4">
        <p className="font-semibold text-gray-900 dark:text-gray-100">🟧 Warning:</p>
        <p className="text-gray-700 dark:text-gray-300">Never use production data for testing. Always create separate test data to avoid privacy issues and data corruption.</p>
      </div>

      <h2 className="text-2xl font-semibold mb-4">Data-Driven Testing</h2>
      <pre className="bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 p-4 rounded mb-4">
        <code>{`// Jest data-driven test
describe('Login Tests', () => {
  test.each([
    ['valid@email.com', 'password123', 'should login successfully'],
    ['invalid@email.com', 'wrongpass', 'should show error'],
    ['', 'password123', 'should require email']
  ])('Login with %s, %s - %s', async (email, password, expected) => {
    await loginPage.login(email, password);
    // Assert based on expected result
  });
});`}</code>
      </pre>

      <h2 className="text-2xl font-semibold mb-4">Test Data Lifecycle</h2>
      <ol className="list-decimal list-inside mb-4">
        <li><strong>Planning:</strong> Identify data requirements for each test</li>
        <li><strong>Creation:</strong> Generate or prepare test data</li>
        <li><strong>Setup:</strong> Load data before test execution</li>
        <li><strong>Execution:</strong> Use data during test runs</li>
        <li><strong>Verification:</strong> Validate data state after tests</li>
        <li><strong>Cleanup:</strong> Remove or reset test data</li>
        <li><strong>Maintenance:</strong> Update data as application changes</li>
      </ol>

      <h2 className="text-2xl font-semibold mb-4">Data Privacy and Security</h2>
      <ul className="list-disc list-inside mb-4">
        <li>Use anonymized or synthetic data</li>
        <li>Never expose sensitive information in logs</li>
        <li>Implement data masking for PII</li>
        <li>Follow GDPR and data protection regulations</li>
        <li>Use separate test environments</li>
        <li>Regularly audit test data usage</li>
      </ul>

      <h2 className="text-2xl font-semibold mb-4">Data Generation Tools</h2>
      <pre className="bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 p-4 rounded mb-4">
        <code>{`// Faker.js examples
const faker = require('faker');

const testUser = {
  name: faker.name.fullName(),
  email: faker.internet.email(),
  address: faker.address.streetAddress(),
  phone: faker.phone.phoneNumber(),
  company: faker.company.companyName()
};

// Custom data generators
function generateProduct(category) {
  return {
    name: faker.commerce.productName(),
    price: faker.commerce.price(),
    category: category,
    description: faker.commerce.productDescription()
  };
}`}</code>
      </pre>

      <h2 className="text-2xl font-semibold mb-4">Data Validation Strategies</h2>
      <ul className="list-disc list-inside mb-4">
        <li>Schema validation for API responses</li>
        <li>Database state verification</li>
        <li>UI element data validation</li>
        <li>Cross-system data consistency checks</li>
        <li>Data integrity constraints</li>
        <li>Business rule validation</li>
      </ul>

      <div className="bg-purple-100 dark:bg-purple-900 border-l-4 border-purple-500 p-4 mb-4">
        <p className="font-semibold text-gray-900 dark:text-gray-100">🟪 Key Tip:</p>
        <p className="text-gray-700 dark:text-gray-300">Implement data cleanup in test teardown methods to ensure tests are independent and environments remain clean.</p>
      </div>

      <h2 className="text-2xl font-semibold mb-4">Common Data Management Patterns</h2>

      <h3 className="text-xl font-semibold mb-2">Test Data Builder Pattern</h3>
      <pre className="bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 p-4 rounded mb-4">
        <code>{`class UserBuilder {
  constructor() {
    this.user = {
      name: 'Default User',
      email: 'default@example.com',
      active: true
    };
  }

  withName(name) {
    this.user.name = name;
    return this;
  }

  withEmail(email) {
    this.user.email = email;
    return this;
  }

  inactive() {
    this.user.active = false;
    return this;
  }

  build() {
    return { ...this.user };
  }
}

// Usage
const user = new UserBuilder()
  .withName('John Doe')
  .withEmail('john@example.com')
  .inactive()
  .build();`}</code>
      </pre>

      <h3 className="text-xl font-semibold mb-2">Data Pools and Sharing</h3>
      <pre className="bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 p-4 rounded mb-4">
        <code>{`// Shared data pool
class DataPool {
  static users = new Map();
  static products = new Map();

  static getUser(key) {
    if (!this.users.has(key)) {
      this.users.set(key, UserFactory.createUser());
    }
    return this.users.get(key);
  }

  static releaseUser(key) {
    this.users.delete(key);
  }
}`}</code>
      </pre>

      <h2 className="text-2xl font-semibold mb-4">Performance Considerations</h2>
      <ul className="list-disc list-inside mb-4">
        <li>Use in-memory data for fast tests</li>
        <li>Implement data caching where appropriate</li>
        <li>Avoid database calls in unit tests</li>
        <li>Use fixtures for complex data setups</li>
        <li>Parallel test data isolation</li>
        <li>Data generation optimization</li>
      </ul>

      <h2 className="text-2xl font-semibold mb-4">Resources</h2>
      <ul className="list-disc list-inside mb-4">
        <li><a href="https://fakerjs.dev" className="text-blue-600 hover:underline">Faker.js Documentation</a></li>
        <li><a href="https://testautomationpatterns.com" className="text-blue-600 hover:underline">Test Data Management Patterns</a></li>
        <li><a href="https://www.lambdatest.com" className="text-blue-600 hover:underline">LambdaTest Data Management</a></li>
      </ul>
    </div>
  )
}
