module.exports=[93695,(a,b,c)=>{b.exports=a.x("next/dist/shared/lib/no-fallback-error.external.js",()=>require("next/dist/shared/lib/no-fallback-error.external.js"))},17745,a=>{a.n(a.i(59250))},23303,a=>{a.n(a.i(88148))},44896,a=>{a.n(a.i(74740))},46174,a=>{a.n(a.i(83216))},78190,a=>{a.n(a.i(17921))},7599,a=>{"use strict";var b=a.i(64868);function c(){return(0,b.jsxs)("div",{className:"max-w-4xl mx-auto",children:[(0,b.jsx)("h1",{className:"text-3xl font-bold mb-6",children:"Test Data Management"}),(0,b.jsx)("p",{className:"mb-4",children:"Test data management involves creating, maintaining, and organizing data used in automated tests. Proper data management ensures tests are reliable, maintainable, and produce consistent results."}),(0,b.jsxs)("div",{className:"bg-blue-100 dark:bg-blue-900 border-l-4 border-blue-500 p-4 mb-4",children:[(0,b.jsx)("p",{className:"font-semibold text-gray-900 dark:text-gray-100",children:"🟦 Info:"}),(0,b.jsx)("p",{className:"text-gray-700 dark:text-gray-300",children:"Good test data management separates data from code, enables data-driven testing, and ensures test reliability."})]}),(0,b.jsx)("h2",{className:"text-2xl font-semibold mb-4",children:"Test Data Types"}),(0,b.jsx)("h3",{className:"text-xl font-semibold mb-2",children:"Static Test Data"}),(0,b.jsx)("p",{className:"mb-4",children:"Fixed data that doesn't change between test runs. Used for consistent baseline testing."}),(0,b.jsxs)("div",{className:"bg-green-100 dark:bg-green-900 border-l-4 border-green-500 p-4 mb-4",children:[(0,b.jsx)("p",{className:"font-semibold text-gray-900 dark:text-gray-100",children:"🟩 Example:"}),(0,b.jsx)("p",{className:"text-gray-700 dark:text-gray-300",children:"User roles, product categories, or configuration settings that remain constant."})]}),(0,b.jsx)("h3",{className:"text-xl font-semibold mb-2",children:"Dynamic Test Data"}),(0,b.jsx)("p",{className:"mb-4",children:"Data generated or modified during test execution. Ensures test isolation and prevents conflicts."}),(0,b.jsx)("h3",{className:"text-xl font-semibold mb-2",children:"Parameterized Test Data"}),(0,b.jsx)("p",{className:"mb-4",children:"Data passed as parameters to test methods. Enables data-driven testing with multiple scenarios."}),(0,b.jsx)("h2",{className:"text-2xl font-semibold mb-4",children:"Data Management Strategies"}),(0,b.jsx)("h3",{className:"text-xl font-semibold mb-2",children:"1. External Files"}),(0,b.jsx)("pre",{className:"bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 p-4 rounded mb-4",children:(0,b.jsx)("code",{children:`// JSON test data
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
testuser2,password456,user`})}),(0,b.jsx)("h3",{className:"text-xl font-semibold mb-2",children:"2. Database Management"}),(0,b.jsx)("pre",{className:"bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 p-4 rounded mb-4",children:(0,b.jsx)("code",{children:`// Database setup and teardown
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
}`})}),(0,b.jsx)("h3",{className:"text-xl font-semibold mb-2",children:"3. API-Generated Data"}),(0,b.jsx)("pre",{className:"bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 p-4 rounded mb-4",children:(0,b.jsx)("code",{children:`// Generate test data via API
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
await loginPage.login(testUser.email, 'password');`})}),(0,b.jsx)("h3",{className:"text-xl font-semibold mb-2",children:"4. Data Factories"}),(0,b.jsx)("pre",{className:"bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 p-4 rounded mb-4",children:(0,b.jsx)("code",{children:`// Factory pattern for test data
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
const regularUser = UserFactory.createUser({ active: false });`})}),(0,b.jsxs)("div",{className:"bg-yellow-100 dark:bg-yellow-900 border-l-4 border-yellow-500 p-4 mb-4",children:[(0,b.jsx)("p",{className:"font-semibold text-gray-900 dark:text-gray-100",children:"🟧 Warning:"}),(0,b.jsx)("p",{className:"text-gray-700 dark:text-gray-300",children:"Never use production data for testing. Always create separate test data to avoid privacy issues and data corruption."})]}),(0,b.jsx)("h2",{className:"text-2xl font-semibold mb-4",children:"Data-Driven Testing"}),(0,b.jsx)("pre",{className:"bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 p-4 rounded mb-4",children:(0,b.jsx)("code",{children:`// Jest data-driven test
describe('Login Tests', () => {
  test.each([
    ['valid@email.com', 'password123', 'should login successfully'],
    ['invalid@email.com', 'wrongpass', 'should show error'],
    ['', 'password123', 'should require email']
  ])('Login with %s, %s - %s', async (email, password, expected) => {
    await loginPage.login(email, password);
    // Assert based on expected result
  });
});`})}),(0,b.jsx)("h2",{className:"text-2xl font-semibold mb-4",children:"Test Data Lifecycle"}),(0,b.jsxs)("ol",{className:"list-decimal list-inside mb-4",children:[(0,b.jsxs)("li",{children:[(0,b.jsx)("strong",{children:"Planning:"})," Identify data requirements for each test"]}),(0,b.jsxs)("li",{children:[(0,b.jsx)("strong",{children:"Creation:"})," Generate or prepare test data"]}),(0,b.jsxs)("li",{children:[(0,b.jsx)("strong",{children:"Setup:"})," Load data before test execution"]}),(0,b.jsxs)("li",{children:[(0,b.jsx)("strong",{children:"Execution:"})," Use data during test runs"]}),(0,b.jsxs)("li",{children:[(0,b.jsx)("strong",{children:"Verification:"})," Validate data state after tests"]}),(0,b.jsxs)("li",{children:[(0,b.jsx)("strong",{children:"Cleanup:"})," Remove or reset test data"]}),(0,b.jsxs)("li",{children:[(0,b.jsx)("strong",{children:"Maintenance:"})," Update data as application changes"]})]}),(0,b.jsx)("h2",{className:"text-2xl font-semibold mb-4",children:"Data Privacy and Security"}),(0,b.jsxs)("ul",{className:"list-disc list-inside mb-4",children:[(0,b.jsx)("li",{children:"Use anonymized or synthetic data"}),(0,b.jsx)("li",{children:"Never expose sensitive information in logs"}),(0,b.jsx)("li",{children:"Implement data masking for PII"}),(0,b.jsx)("li",{children:"Follow GDPR and data protection regulations"}),(0,b.jsx)("li",{children:"Use separate test environments"}),(0,b.jsx)("li",{children:"Regularly audit test data usage"})]}),(0,b.jsx)("h2",{className:"text-2xl font-semibold mb-4",children:"Data Generation Tools"}),(0,b.jsx)("pre",{className:"bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 p-4 rounded mb-4",children:(0,b.jsx)("code",{children:`// Faker.js examples
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
}`})}),(0,b.jsx)("h2",{className:"text-2xl font-semibold mb-4",children:"Data Validation Strategies"}),(0,b.jsxs)("ul",{className:"list-disc list-inside mb-4",children:[(0,b.jsx)("li",{children:"Schema validation for API responses"}),(0,b.jsx)("li",{children:"Database state verification"}),(0,b.jsx)("li",{children:"UI element data validation"}),(0,b.jsx)("li",{children:"Cross-system data consistency checks"}),(0,b.jsx)("li",{children:"Data integrity constraints"}),(0,b.jsx)("li",{children:"Business rule validation"})]}),(0,b.jsxs)("div",{className:"bg-purple-100 dark:bg-purple-900 border-l-4 border-purple-500 p-4 mb-4",children:[(0,b.jsx)("p",{className:"font-semibold text-gray-900 dark:text-gray-100",children:"🟪 Key Tip:"}),(0,b.jsx)("p",{className:"text-gray-700 dark:text-gray-300",children:"Implement data cleanup in test teardown methods to ensure tests are independent and environments remain clean."})]}),(0,b.jsx)("h2",{className:"text-2xl font-semibold mb-4",children:"Common Data Management Patterns"}),(0,b.jsx)("h3",{className:"text-xl font-semibold mb-2",children:"Test Data Builder Pattern"}),(0,b.jsx)("pre",{className:"bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 p-4 rounded mb-4",children:(0,b.jsx)("code",{children:`class UserBuilder {
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
  .build();`})}),(0,b.jsx)("h3",{className:"text-xl font-semibold mb-2",children:"Data Pools and Sharing"}),(0,b.jsx)("pre",{className:"bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 p-4 rounded mb-4",children:(0,b.jsx)("code",{children:`// Shared data pool
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
}`})}),(0,b.jsx)("h2",{className:"text-2xl font-semibold mb-4",children:"Performance Considerations"}),(0,b.jsxs)("ul",{className:"list-disc list-inside mb-4",children:[(0,b.jsx)("li",{children:"Use in-memory data for fast tests"}),(0,b.jsx)("li",{children:"Implement data caching where appropriate"}),(0,b.jsx)("li",{children:"Avoid database calls in unit tests"}),(0,b.jsx)("li",{children:"Use fixtures for complex data setups"}),(0,b.jsx)("li",{children:"Parallel test data isolation"}),(0,b.jsx)("li",{children:"Data generation optimization"})]}),(0,b.jsx)("h2",{className:"text-2xl font-semibold mb-4",children:"Resources"}),(0,b.jsxs)("ul",{className:"list-disc list-inside mb-4",children:[(0,b.jsx)("li",{children:(0,b.jsx)("a",{href:"https://fakerjs.dev",className:"text-blue-600 hover:underline",children:"Faker.js Documentation"})}),(0,b.jsx)("li",{children:(0,b.jsx)("a",{href:"https://testautomationpatterns.com",className:"text-blue-600 hover:underline",children:"Test Data Management Patterns"})}),(0,b.jsx)("li",{children:(0,b.jsx)("a",{href:"https://www.lambdatest.com",className:"text-blue-600 hover:underline",children:"LambdaTest Data Management"})})]})]})}a.s(["default",()=>c])}];

//# sourceMappingURL=%5Broot-of-the-server%5D__2d68618c._.js.map