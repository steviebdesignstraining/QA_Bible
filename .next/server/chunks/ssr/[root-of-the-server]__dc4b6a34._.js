module.exports=[93695,(a,b,c)=>{b.exports=a.x("next/dist/shared/lib/no-fallback-error.external.js",()=>require("next/dist/shared/lib/no-fallback-error.external.js"))},17745,a=>{a.n(a.i(59250))},23303,a=>{a.n(a.i(88148))},44896,a=>{a.n(a.i(74740))},46174,a=>{a.n(a.i(83216))},78190,a=>{a.n(a.i(17921))},9429,a=>{"use strict";var b=a.i(64868);function c(){return(0,b.jsxs)("div",{className:"max-w-4xl mx-auto",children:[(0,b.jsx)("h1",{className:"text-3xl font-bold mb-6",children:"Page Object Model (POM)"}),(0,b.jsx)("p",{className:"mb-4",children:"Page Object Model is a design pattern that creates an object repository for web elements. It separates test logic from page-specific code, making tests more maintainable and readable."}),(0,b.jsxs)("div",{className:"bg-blue-100 dark:bg-blue-900 border-l-4 border-blue-500 p-4 mb-4",children:[(0,b.jsx)("p",{className:"font-semibold text-gray-900 dark:text-gray-100",children:"🟦 Info:"}),(0,b.jsx)("p",{className:"text-gray-700 dark:text-gray-300",children:"POM encapsulates page elements and actions into reusable classes, reducing code duplication and improving maintainability."})]}),(0,b.jsx)("h2",{className:"text-2xl font-semibold mb-4",children:"Why Use Page Object Model?"}),(0,b.jsxs)("ul",{className:"list-disc list-inside mb-4",children:[(0,b.jsxs)("li",{children:[(0,b.jsx)("strong",{children:"Maintainability:"})," UI changes only require updates in one place"]}),(0,b.jsxs)("li",{children:[(0,b.jsx)("strong",{children:"Reusability:"})," Page methods can be used across multiple tests"]}),(0,b.jsxs)("li",{children:[(0,b.jsx)("strong",{children:"Readability:"})," Tests focus on business logic, not element finding"]}),(0,b.jsxs)("li",{children:[(0,b.jsx)("strong",{children:"Separation of Concerns:"})," Test logic separate from page implementation"]}),(0,b.jsxs)("li",{children:[(0,b.jsx)("strong",{children:"Reduced Duplication:"})," Common actions defined once"]})]}),(0,b.jsxs)("div",{className:"bg-green-100 dark:bg-green-900 border-l-4 border-green-500 p-4 mb-4",children:[(0,b.jsx)("p",{className:"font-semibold text-gray-900 dark:text-gray-100",children:"🟩 Example:"}),(0,b.jsx)("p",{className:"text-gray-700 dark:text-gray-300",children:"Instead of writing element selectors in every test, create a LoginPage class with login() method."})]}),(0,b.jsx)("h2",{className:"text-2xl font-semibold mb-4",children:"Basic Page Object Structure"}),(0,b.jsx)("pre",{className:"bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 p-4 rounded mb-4",children:(0,b.jsx)("code",{children:`// LoginPage.js
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

export default new LoginPage();`})}),(0,b.jsx)("h2",{className:"text-2xl font-semibold mb-4",children:"Using Page Objects in Tests"}),(0,b.jsx)("pre",{className:"bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 p-4 rounded mb-4",children:(0,b.jsx)("code",{children:`// Test using Page Object
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
});`})}),(0,b.jsxs)("div",{className:"bg-yellow-100 dark:bg-yellow-900 border-l-4 border-yellow-500 p-4 mb-4",children:[(0,b.jsx)("p",{className:"font-semibold text-gray-900 dark:text-gray-100",children:"🟧 Warning:"}),(0,b.jsx)("p",{className:"text-gray-700 dark:text-gray-300",children:"Don't make page objects too complex. Keep them focused on a single page or closely related functionality."})]}),(0,b.jsx)("h2",{className:"text-2xl font-semibold mb-4",children:"Page Object Best Practices"}),(0,b.jsx)("h3",{className:"text-xl font-semibold mb-2",children:"1. Single Responsibility"}),(0,b.jsx)("p",{className:"mb-4",children:"Each page object should represent one page or a logical group of related elements. Don't mix login and dashboard functionality."}),(0,b.jsx)("h3",{className:"text-xl font-semibold mb-2",children:"2. Method Naming"}),(0,b.jsx)("p",{className:"mb-4",children:"Use descriptive method names that explain the business action, not the technical implementation."}),(0,b.jsx)("pre",{className:"bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 p-4 rounded mb-4",children:(0,b.jsx)("code",{children:`// Good: Business-focused
await shoppingCart.addItem('iPhone 12');

// Bad: Technical-focused
await shoppingCart.clickAddToCartButton();`})}),(0,b.jsx)("h3",{className:"text-xl font-semibold mb-2",children:"3. Lazy Loading"}),(0,b.jsx)("p",{className:"mb-4",children:"Use getters for element locators to avoid initialization issues and improve performance."}),(0,b.jsx)("h3",{className:"text-xl font-semibold mb-2",children:"4. Page Factory Pattern"}),(0,b.jsx)("p",{className:"mb-4",children:"Initialize page objects when needed rather than at class level. This prevents stale element references."}),(0,b.jsx)("h2",{className:"text-2xl font-semibold mb-4",children:"Advanced Page Object Patterns"}),(0,b.jsx)("h3",{className:"text-xl font-semibold mb-2",children:"Base Page Class"}),(0,b.jsx)("pre",{className:"bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 p-4 rounded mb-4",children:(0,b.jsx)("code",{children:`// BasePage.js
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

export default BasePage;`})}),(0,b.jsx)("h3",{className:"text-xl font-semibold mb-2",children:"Inheritance"}),(0,b.jsx)("pre",{className:"bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 p-4 rounded mb-4",children:(0,b.jsx)("code",{children:`// ProductPage.js
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

export default ProductPage;`})}),(0,b.jsxs)("div",{className:"bg-purple-100 dark:bg-purple-900 border-l-4 border-purple-500 p-4 mb-4",children:[(0,b.jsx)("p",{className:"font-semibold text-gray-900 dark:text-gray-100",children:"🟪 Key Tip:"}),(0,b.jsx)("p",{className:"text-gray-700 dark:text-gray-300",children:"Start with simple page objects and refactor to inheritance patterns as your framework grows."})]}),(0,b.jsx)("h2",{className:"text-2xl font-semibold mb-4",children:"Common Mistakes to Avoid"}),(0,b.jsxs)("ul",{className:"list-disc list-inside mb-4",children:[(0,b.jsx)("li",{children:"Putting assertions in page objects (keep them in tests)"}),(0,b.jsx)("li",{children:"Making page objects too large or complex"}),(0,b.jsx)("li",{children:"Hardcoding test data in page objects"}),(0,b.jsx)("li",{children:"Not updating page objects when UI changes"}),(0,b.jsx)("li",{children:"Mixing different page functionalities"})]}),(0,b.jsx)("h2",{className:"text-2xl font-semibold mb-4",children:"Page Object Maintenance"}),(0,b.jsxs)("ul",{className:"list-disc list-inside mb-4",children:[(0,b.jsx)("li",{children:"Regularly review and refactor page objects"}),(0,b.jsx)("li",{children:"Update locators when UI changes"}),(0,b.jsx)("li",{children:"Add new methods as functionality grows"}),(0,b.jsx)("li",{children:"Document page object usage"}),(0,b.jsx)("li",{children:"Use version control for changes"})]}),(0,b.jsx)("h2",{className:"text-2xl font-semibold mb-4",children:"Testing Page Objects"}),(0,b.jsx)("p",{className:"mb-4",children:"Page objects themselves can be unit tested to ensure they work correctly before integration testing."}),(0,b.jsx)("pre",{className:"bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 p-4 rounded mb-4",children:(0,b.jsx)("code",{children:`// Unit test for Page Object
describe('LoginPage', () => {
  it('should have correct element selectors', () => {
    expect(LoginPage.usernameField.selector).toBe('#username');
    expect(LoginPage.passwordField.selector).toBe('#password');
  });
});`})}),(0,b.jsx)("h2",{className:"text-2xl font-semibold mb-4",children:"Resources"}),(0,b.jsxs)("ul",{className:"list-disc list-inside mb-4",children:[(0,b.jsx)("li",{children:(0,b.jsx)("a",{href:"https://www.selenium.dev/documentation/test_practices/encouraged/page_object_models/",className:"text-blue-600 hover:underline",children:"Selenium Page Object Model"})}),(0,b.jsx)("li",{children:(0,b.jsx)("a",{href:"https://martinfowler.com/bliki/PageObject.html",className:"text-blue-600 hover:underline",children:"Martin Fowler - Page Object"})}),(0,b.jsx)("li",{children:(0,b.jsx)("a",{href:"https://testautomationpatterns.com",className:"text-blue-600 hover:underline",children:"Test Automation Patterns"})})]})]})}a.s(["default",()=>c])}];

//# sourceMappingURL=%5Broot-of-the-server%5D__dc4b6a34._.js.map