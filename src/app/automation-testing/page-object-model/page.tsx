export default function Page() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Page Object Model (POM)</h1>

      <p className="mb-4">
        Page Object Model is a design pattern that creates an object repository for web elements. It separates test logic from page-specific code, making tests more maintainable and readable.
      </p>

      <div className="bg-blue-100 dark:bg-blue-900 border-l-4 border-blue-500 p-4 mb-4">
        <p className="font-semibold text-gray-900 dark:text-gray-100">🟦 Info:</p>
        <p className="text-gray-700 dark:text-gray-300">POM encapsulates page elements and actions into reusable classes, reducing code duplication and improving maintainability.</p>
      </div>

      <h2 className="text-2xl font-semibold mb-4">Why Use Page Object Model?</h2>
      <ul className="list-disc list-inside mb-4">
        <li><strong>Maintainability:</strong> UI changes only require updates in one place</li>
        <li><strong>Reusability:</strong> Page methods can be used across multiple tests</li>
        <li><strong>Readability:</strong> Tests focus on business logic, not element finding</li>
        <li><strong>Separation of Concerns:</strong> Test logic separate from page implementation</li>
        <li><strong>Reduced Duplication:</strong> Common actions defined once</li>
      </ul>

      <div className="bg-green-100 dark:bg-green-900 border-l-4 border-green-500 p-4 mb-4">
        <p className="font-semibold text-gray-900 dark:text-gray-100">🟩 Example:</p>
        <p className="text-gray-700 dark:text-gray-300">Instead of writing element selectors in every test, create a LoginPage class with login() method.</p>
      </div>

      <h2 className="text-2xl font-semibold mb-4">Basic Page Object Structure</h2>
      <pre className="bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 p-4 rounded mb-4">
        <code>{`// LoginPage.js
class LoginPage {
  // Page elements
  get usernameField() { return $('#username'); }
  get passwordField() { return $('#password'); }
  get loginButton() { return $('#login-btn'); }
  get errorMessage() { return $('.error-message'); }

  // Page actions
  async open() {
    await browser.url('/login');
  }

  async login(username, password) {
    await this.usernameField.setValue(username);
    await this.passwordField.setValue(password);
    await this.loginButton.click();
  }

  async getErrorMessage() {
    return await this.errorMessage.getText();
  }
}

export default new LoginPage();`}</code>
      </pre>

      <h2 className="text-2xl font-semibold mb-4">Using Page Objects in Tests</h2>
      <pre className="bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 p-4 rounded mb-4">
        <code>{`// Test using Page Object
describe('Login Tests', () => {
  it('should login successfully', async () => {
    await LoginPage.open();
    await LoginPage.login('user@example.com', 'password');
    // Assert successful login
    expect(await browser.getUrl()).toContain('/dashboard');
  });

  it('should show error for invalid credentials', async () => {
    await LoginPage.open();
    await LoginPage.login('invalid@email.com', 'wrongpass');
    // Assert error message
    expect(await LoginPage.getErrorMessage()).toContain('Invalid credentials');
  });
});`}</code>
      </pre>

      <div className="bg-yellow-100 dark:bg-yellow-900 border-l-4 border-yellow-500 p-4 mb-4">
        <p className="font-semibold text-gray-900 dark:text-gray-100">🟧 Warning:</p>
        <p className="text-gray-700 dark:text-gray-300">Don't make page objects too complex. Keep them focused on a single page or closely related functionality.</p>
      </div>

      <h2 className="text-2xl font-semibold mb-4">Page Object Best Practices</h2>

      <h3 className="text-xl font-semibold mb-2">1. Single Responsibility</h3>
      <p className="mb-4">
        Each page object should represent one page or a logical group of related elements. Don't mix login and dashboard functionality.
      </p>

      <h3 className="text-xl font-semibold mb-2">2. Method Naming</h3>
      <p className="mb-4">
        Use descriptive method names that explain the business action, not the technical implementation.
      </p>

      <pre className="bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 p-4 rounded mb-4">
        <code>{`// Good: Business-focused
await shoppingCart.addItem('iPhone 12');

// Bad: Technical-focused
await shoppingCart.clickAddToCartButton();`}</code>
      </pre>

      <h3 className="text-xl font-semibold mb-2">3. Lazy Loading</h3>
      <p className="mb-4">
        Use getters for element locators to avoid initialization issues and improve performance.
      </p>

      <h3 className="text-xl font-semibold mb-2">4. Page Factory Pattern</h3>
      <p className="mb-4">
        Initialize page objects when needed rather than at class level. This prevents stale element references.
      </p>

      <h2 className="text-2xl font-semibold mb-4">Advanced Page Object Patterns</h2>

      <h3 className="text-xl font-semibold mb-2">Base Page Class</h3>
      <pre className="bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 p-4 rounded mb-4">
        <code>{`// BasePage.js
class BasePage {
  async waitForPageLoad() {
    await browser.waitUntil(async () => {
      const state = await browser.execute('return document.readyState');
      return state === 'complete';
    });
  }

  async getPageTitle() {
    return await browser.getTitle();
  }

  async scrollToElement(element) {
    await element.scrollIntoView();
  }
}

export default BasePage;`}</code>
      </pre>

      <h3 className="text-xl font-semibold mb-2">Inheritance</h3>
      <pre className="bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 p-4 rounded mb-4">
        <code>{`// ProductPage.js
import BasePage from './BasePage';

class ProductPage extends BasePage {
  get addToCartButton() { return $('#add-to-cart'); }
  get productPrice() { return $('.product-price'); }

  async addToCart() {
    await this.waitForPageLoad();
    await this.addToCartButton.click();
  }

  async getPrice() {
    return await this.productPrice.getText();
  }
}

export default ProductPage;`}</code>
      </pre>

      <div className="bg-purple-100 dark:bg-purple-900 border-l-4 border-purple-500 p-4 mb-4">
        <p className="font-semibold text-gray-900 dark:text-gray-100">🟪 Key Tip:</p>
        <p className="text-gray-700 dark:text-gray-300">Start with simple page objects and refactor to inheritance patterns as your framework grows.</p>
      </div>

      <h2 className="text-2xl font-semibold mb-4">Common Mistakes to Avoid</h2>
      <ul className="list-disc list-inside mb-4">
        <li>Putting assertions in page objects (keep them in tests)</li>
        <li>Making page objects too large or complex</li>
        <li>Hardcoding test data in page objects</li>
        <li>Not updating page objects when UI changes</li>
        <li>Mixing different page functionalities</li>
      </ul>

      <h2 className="text-2xl font-semibold mb-4">Page Object Maintenance</h2>
      <ul className="list-disc list-inside mb-4">
        <li>Regularly review and refactor page objects</li>
        <li>Update locators when UI changes</li>
        <li>Add new methods as functionality grows</li>
        <li>Document page object usage</li>
        <li>Use version control for changes</li>
      </ul>

      <h2 className="text-2xl font-semibold mb-4">Testing Page Objects</h2>
      <p className="mb-4">
        Page objects themselves can be unit tested to ensure they work correctly before integration testing.
      </p>

      <pre className="bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 p-4 rounded mb-4">
        <code>{`// Unit test for Page Object
describe('LoginPage', () => {
  it('should have correct element selectors', () => {
    expect(LoginPage.usernameField.selector).toBe('#username');
    expect(LoginPage.passwordField.selector).toBe('#password');
  });
});`}</code>
      </pre>

      <h2 className="text-2xl font-semibold mb-4">Resources</h2>
      <ul className="list-disc list-inside mb-4">
        <li><a href="https://www.selenium.dev/documentation/test_practices/encouraged/page_object_models/" className="text-blue-600 hover:underline">Selenium Page Object Model</a></li>
        <li><a href="https://martinfowler.com/bliki/PageObject.html" className="text-blue-600 hover:underline">Martin Fowler - Page Object</a></li>
        <li><a href="https://testautomationpatterns.com" className="text-blue-600 hover:underline">Test Automation Patterns</a></li>
      </ul>
    </div>
  )
}
