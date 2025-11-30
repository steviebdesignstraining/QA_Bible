module.exports=[93695,(a,b,c)=>{b.exports=a.x("next/dist/shared/lib/no-fallback-error.external.js",()=>require("next/dist/shared/lib/no-fallback-error.external.js"))},17745,a=>{a.n(a.i(59250))},23303,a=>{a.n(a.i(88148))},44896,a=>{a.n(a.i(74740))},46174,a=>{a.n(a.i(83216))},78190,a=>{a.n(a.i(17921))},22848,a=>{"use strict";var b=a.i(64868);function c(){return(0,b.jsxs)("div",{className:"max-w-4xl mx-auto",children:[(0,b.jsx)("h1",{className:"text-3xl font-bold mb-6",children:"Selector Strategy"}),(0,b.jsx)("p",{className:"mb-4",children:"Selector strategy involves choosing reliable element locators for test automation. Good selectors are stable, unique, and maintainable, reducing test flakiness and maintenance effort."}),(0,b.jsxs)("div",{className:"bg-blue-100 dark:bg-blue-900 border-l-4 border-blue-500 p-4 mb-4",children:[(0,b.jsx)("p",{className:"font-semibold text-gray-900 dark:text-gray-100",children:"🟦 Info:"}),(0,b.jsx)("p",{className:"text-gray-700 dark:text-gray-300",children:"The best selectors are unique, stable, and readable. They should work across different environments and UI changes."})]}),(0,b.jsx)("h2",{className:"text-2xl font-semibold mb-4",children:"Selector Hierarchy (Best to Worst)"}),(0,b.jsx)("pre",{className:"bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 p-4 rounded mb-4 text-center",children:(0,b.jsx)("code",{children:`1. ID (Best - Most Stable)
   ↓
2. Name Attribute
   ↓
3. Data Attributes (data-test, data-cy)
   ↓
4. CSS Class (Unique combinations)
   ↓
5. Link Text / Partial Link Text
   ↓
6. Tag Name + Attributes
   ↓
7. XPath (Last Resort - Brittle)`})}),(0,b.jsxs)("div",{className:"bg-green-100 dark:bg-green-900 border-l-4 border-green-500 p-4 mb-4",children:[(0,b.jsx)("p",{className:"font-semibold text-gray-900 dark:text-gray-100",children:"🟩 Example:"}),(0,b.jsx)("p",{className:"text-gray-700 dark:text-gray-300",children:'Use data-testid="submit-button" instead of XPath like //div[2]/button[1] which breaks with any UI change.'})]}),(0,b.jsx)("h2",{className:"text-2xl font-semibold mb-4",children:"Best Practices for Selectors"}),(0,b.jsx)("h3",{className:"text-xl font-semibold mb-2",children:"1. Use Data Attributes"}),(0,b.jsx)("pre",{className:"bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 p-4 rounded mb-4",children:(0,b.jsx)("code",{children:`// HTML with test attributes
<button data-testid="login-submit" type="submit">
  Sign In
</button>

// Selector usage
await page.click('[data-testid="login-submit"]');

// Multiple data attributes
<input data-test="username" data-automation="user-input" />

// CSS selector
[data-test="username"]`})}),(0,b.jsx)("h3",{className:"text-xl font-semibold mb-2",children:"2. Leverage IDs When Available"}),(0,b.jsx)("pre",{className:"bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 p-4 rounded mb-4",children:(0,b.jsx)("code",{children:`// Unique ID (preferred)
await page.fill('#username', 'test@example.com');

// Multiple elements with same ID (avoid)
await page.fill('#username >> nth=0', 'test@example.com'); // First one
await page.fill('#username >> nth=1', 'test@example.com'); // Second one`})}),(0,b.jsx)("h3",{className:"text-xl font-semibold mb-2",children:"3. Combine Multiple Attributes"}),(0,b.jsx)("pre",{className:"bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 p-4 rounded mb-4",children:(0,b.jsx)("code",{children:`// More specific selectors
await page.click('button[type="submit"][data-action="login"]');

// CSS class combinations
await page.click('.btn.btn-primary.login-submit');

// Role-based selection
await page.click('button[role="button"][aria-label="Submit"]');`})}),(0,b.jsxs)("div",{className:"bg-yellow-100 dark:bg-yellow-900 border-l-4 border-yellow-500 p-4 mb-4",children:[(0,b.jsx)("p",{className:"font-semibold text-gray-900 dark:text-gray-100",children:"🟧 Warning:"}),(0,b.jsx)("p",{className:"text-gray-700 dark:text-gray-300",children:"Avoid using auto-generated IDs or classes that change with each build. They create brittle tests that break frequently."})]}),(0,b.jsx)("h2",{className:"text-2xl font-semibold mb-4",children:"Common Selector Patterns"}),(0,b.jsx)("h3",{className:"text-xl font-semibold mb-2",children:"Text-Based Selectors"}),(0,b.jsx)("pre",{className:"bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 p-4 rounded mb-4",children:(0,b.jsx)("code",{children:`// Exact text match
await page.click('text="Sign In"');

// Partial text match
await page.click('text=/Welcome.*/');

// Case insensitive
await page.click('text=/sign in/i');`})}),(0,b.jsx)("h3",{className:"text-xl font-semibold mb-2",children:"CSS Selectors"}),(0,b.jsx)("pre",{className:"bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 p-4 rounded mb-4",children:(0,b.jsx)("code",{children:`// Attribute selectors
input[type="email"]
button[class*="primary"]
div[id^="user-"]

// Combinators
form.login input[name="username"]
.nav > .menu-item.active
.card .title + .description

// Pseudo-classes
button:not([disabled])
input:required
li:nth-child(2)`})}),(0,b.jsx)("h3",{className:"text-xl font-semibold mb-2",children:"XPath Selectors (Use Sparingly)"}),(0,b.jsx)("pre",{className:"bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 p-4 rounded mb-4",children:(0,b.jsx)("code",{children:`// Absolute path (brittle)
//html/body/div[1]/div[2]/button

// Relative path (better)
//button[contains(@class, 'submit')]

// With predicates
//input[@type='email' and @required]

// Following siblings
//label[text()='Username']/following-sibling::input`})}),(0,b.jsx)("h2",{className:"text-2xl font-semibold mb-4",children:"Advanced Selector Techniques"}),(0,b.jsx)("h3",{className:"text-xl font-semibold mb-2",children:"Playwright Locators"}),(0,b.jsx)("pre",{className:"bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 p-4 rounded mb-4",children:(0,b.jsx)("code",{children:`// Chaining locators
await page.locator('article').locator('button').click();

// Filtering
await page.locator('button').filter({ hasText: 'Submit' }).click();

// Relative positioning
await page.locator('text="Username"').locator('xpath=following-sibling::input').fill('user');

// Get by role
await page.getByRole('button', { name: 'Sign in' }).click();

// Get by label
await page.getByLabel('Email address').fill('test@example.com');`})}),(0,b.jsx)("h3",{className:"text-xl font-semibold mb-2",children:"Selenium WebDriver"}),(0,b.jsx)("pre",{className:"bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 p-4 rounded mb-4",children:(0,b.jsx)("code",{children:`// By strategies
By.id("username")
By.name("email")
By.className("btn-primary")
By.cssSelector("[data-test='submit']")
By.xpath("//button[@type='submit']")
By.linkText("Forgot Password")
By.partialLinkText("Forgot")

// Fluent API
driver.findElement(By.cssSelector("input[name='username']"))
      .sendKeys("test@example.com");`})}),(0,b.jsx)("h2",{className:"text-2xl font-semibold mb-4",children:"Selector Maintenance Strategy"}),(0,b.jsx)("h3",{className:"text-xl font-semibold mb-2",children:"1. Page Object Updates"}),(0,b.jsx)("pre",{className:"bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 p-4 rounded mb-4",children:(0,b.jsx)("code",{children:`// Centralized selector management
class LoginPage {
  // Update selectors in one place
  get usernameField() {
    return '[data-testid="username-input"]';
  }

  get passwordField() {
    return '[data-testid="password-input"]';
  }

  get submitButton() {
    return '[data-testid="login-submit"]';
  }
}`})}),(0,b.jsx)("h3",{className:"text-xl font-semibold mb-2",children:"2. Selector Validation"}),(0,b.jsx)("pre",{className:"bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 p-4 rounded mb-4",children:(0,b.jsx)("code",{children:`// Validate selectors exist
async function validateSelectors(page) {
  const selectors = [
    '[data-testid="username"]',
    '[data-testid="password"]',
    '[data-testid="submit"]'
  ];

  for (const selector of selectors) {
    const element = await page.locator(selector);
    if (await element.count() === 0) {
      throw new Error('Selector not found: ' + selector);
    }
  }
}`})}),(0,b.jsxs)("div",{className:"bg-purple-100 dark:bg-purple-900 border-l-4 border-purple-500 p-4 mb-4",children:[(0,b.jsx)("p",{className:"font-semibold text-gray-900 dark:text-gray-100",children:"🟪 Key Tip:"}),(0,b.jsx)("p",{className:"text-gray-700 dark:text-gray-300",children:"Work with developers to add data-testid attributes during development. This creates a test-friendly application from the start."})]}),(0,b.jsx)("h2",{className:"text-2xl font-semibold mb-4",children:"Handling Dynamic Elements"}),(0,b.jsx)("h3",{className:"text-xl font-semibold mb-2",children:"Generated IDs"}),(0,b.jsx)("p",{className:"mb-4",children:'Avoid using auto-generated IDs like "btn-12345" as they change with each page load. Instead, use stable data attributes or partial ID matching.'}),(0,b.jsx)("h3",{className:"text-xl font-semibold mb-2",children:"Dynamic Classes"}),(0,b.jsx)("p",{className:"mb-4",children:'Classes like "menu-item active random-123" can change. Use stable selectors like data-menu-item="home" or partial class matching with [class*="menu-item"].'}),(0,b.jsx)("h2",{className:"text-2xl font-semibold mb-4",children:"Cross-Browser Considerations"}),(0,b.jsxs)("ul",{className:"list-disc list-inside mb-4",children:[(0,b.jsx)("li",{children:"Not all CSS selectors work in all browsers"}),(0,b.jsx)("li",{children:"XPath support varies between browsers"}),(0,b.jsx)("li",{children:"Some attributes may not be available in certain contexts"}),(0,b.jsx)("li",{children:"Test selectors across target browsers"}),(0,b.jsx)("li",{children:"Use browser-specific fallbacks when necessary"})]}),(0,b.jsx)("h2",{className:"text-2xl font-semibold mb-4",children:"Performance Optimization"}),(0,b.jsxs)("ul",{className:"list-disc list-inside mb-4",children:[(0,b.jsx)("li",{children:"Use IDs when possible (fastest)"}),(0,b.jsx)("li",{children:"Avoid complex XPath expressions"}),(0,b.jsx)("li",{children:"Prefer CSS selectors over XPath"}),(0,b.jsx)("li",{children:"Cache frequently used elements"}),(0,b.jsx)("li",{children:"Use specific selectors to reduce search scope"})]}),(0,b.jsx)("h2",{className:"text-2xl font-semibold mb-4",children:"Common Mistakes"}),(0,b.jsxs)("ul",{className:"list-disc list-inside mb-4",children:[(0,b.jsx)("li",{children:"Using brittle XPath expressions"}),(0,b.jsx)("li",{children:"Relying on auto-generated attributes"}),(0,b.jsx)("li",{children:"Not testing selectors across environments"}),(0,b.jsx)("li",{children:"Hardcoding element positions"}),(0,b.jsx)("li",{children:"Ignoring accessibility attributes"})]}),(0,b.jsx)("h2",{className:"text-2xl font-semibold mb-4",children:"Resources"}),(0,b.jsxs)("ul",{className:"list-disc list-inside mb-4",children:[(0,b.jsx)("li",{children:(0,b.jsx)("a",{href:"https://playwright.dev/docs/locators",className:"text-blue-600 hover:underline",children:"Playwright Locators"})}),(0,b.jsx)("li",{children:(0,b.jsx)("a",{href:"https://www.selenium.dev/documentation/webdriver/elements/locators/",className:"text-blue-600 hover:underline",children:"Selenium Locators"})}),(0,b.jsx)("li",{children:(0,b.jsx)("a",{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Selectors",className:"text-blue-600 hover:underline",children:"CSS Selectors Reference"})}),(0,b.jsx)("li",{children:(0,b.jsx)("a",{href:"https://www.w3.org/TR/xpath-31/",className:"text-blue-600 hover:underline",children:"XPath Specification"})})]})]})}a.s(["default",()=>c])}];

//# sourceMappingURL=%5Broot-of-the-server%5D__ef8a5a2a._.js.map