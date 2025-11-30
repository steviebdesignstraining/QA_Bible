module.exports=[93695,(a,b,c)=>{b.exports=a.x("next/dist/shared/lib/no-fallback-error.external.js",()=>require("next/dist/shared/lib/no-fallback-error.external.js"))},17745,a=>{a.n(a.i(59250))},23303,a=>{a.n(a.i(88148))},44896,a=>{a.n(a.i(74740))},46174,a=>{a.n(a.i(83216))},78190,a=>{a.n(a.i(17921))},12690,a=>{"use strict";var b=a.i(64868);function c(){return(0,b.jsxs)("div",{className:"max-w-4xl mx-auto",children:[(0,b.jsx)("h1",{className:"text-3xl font-bold mb-6",children:"Assertions & Wait Strategies"}),(0,b.jsx)("p",{className:"mb-4",children:"Assertions verify that application behavior matches expectations. Wait strategies handle timing issues in dynamic web applications. Both are crucial for reliable test automation."}),(0,b.jsxs)("div",{className:"bg-blue-100 dark:bg-blue-900 border-l-4 border-blue-500 p-4 mb-4",children:[(0,b.jsx)("p",{className:"font-semibold text-gray-900 dark:text-gray-100",children:"🟦 Info:"}),(0,b.jsx)("p",{className:"text-gray-700 dark:text-gray-300",children:"Good assertions provide clear feedback when tests fail. Proper waits prevent flaky tests caused by timing issues."})]}),(0,b.jsx)("h2",{className:"text-2xl font-semibold mb-4",children:"What are Assertions?"}),(0,b.jsx)("p",{className:"mb-4",children:"Assertions are checks that verify the actual behavior of your application matches the expected behavior. They are the final step in determining test pass/fail status."}),(0,b.jsxs)("div",{className:"bg-green-100 dark:bg-green-900 border-l-4 border-green-500 p-4 mb-4",children:[(0,b.jsx)("p",{className:"font-semibold text-gray-900 dark:text-gray-100",children:"🟩 Example:"}),(0,b.jsx)("p",{className:"text-gray-700 dark:text-gray-300",children:"After clicking login, assert that the dashboard page loads and displays the user's name."})]}),(0,b.jsx)("h2",{className:"text-2xl font-semibold mb-4",children:"Types of Assertions"}),(0,b.jsx)("h3",{className:"text-xl font-semibold mb-2",children:"Hard Assertions"}),(0,b.jsx)("p",{className:"mb-4",children:"Stop test execution immediately when assertion fails. Used for critical checks."}),(0,b.jsx)("pre",{className:"bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 p-4 rounded mb-4",children:(0,b.jsx)("code",{children:`// Jest hard assertion
test('login works', () => {
  login('user@example.com', 'password');
  expect(page.url()).toBe('/dashboard'); // Stops here if fails
  expect(page.getByText('Welcome')).toBeVisible();
});`})}),(0,b.jsx)("h3",{className:"text-xl font-semibold mb-2",children:"Soft Assertions"}),(0,b.jsx)("p",{className:"mb-4",children:"Continue test execution even when assertion fails. Collect all failures before reporting."}),(0,b.jsx)("pre",{className:"bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 p-4 rounded mb-4",children:(0,b.jsx)("code",{children:`// TestNG soft assertions
SoftAssert softAssert = new SoftAssert();

softAssert.assertEquals(actualTitle, expectedTitle);
softAssert.assertTrue(element.isDisplayed());
softAssert.assertEquals(actualCount, expectedCount);

softAssert.assertAll(); // Reports all failures at once`})}),(0,b.jsx)("h2",{className:"text-2xl font-semibold mb-4",children:"Common Assertion Methods"}),(0,b.jsx)("h3",{className:"text-xl font-semibold mb-2",children:"Element Presence & Visibility"}),(0,b.jsx)("pre",{className:"bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 p-4 rounded mb-4",children:(0,b.jsx)("code",{children:`// Element exists
expect(page.locator('#username')).toBeVisible();

// Element is hidden
expect(page.locator('.error-message')).toBeHidden();

// Element contains text
expect(page.locator('.welcome')).toContainText('Welcome back');

// Element has specific attribute
expect(page.locator('input[type="email"]')).toHaveAttribute('required');`})}),(0,b.jsx)("h3",{className:"text-xl font-semibold mb-2",children:"Text & Content Assertions"}),(0,b.jsx)("pre",{className:"bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 p-4 rounded mb-4",children:(0,b.jsx)("code",{children:`// Exact text match
expect(page.locator('h1')).toHaveText('Dashboard');

// Partial text match
expect(page.locator('.message')).toContainText('success');

// Text matches regex
expect(page.locator('.email')).toMatch(/^[^@]+@[^@]+.[^@]+$/);

// Count elements
expect(page.locator('.product-item')).toHaveCount(5);`})}),(0,b.jsx)("h3",{className:"text-xl font-semibold mb-2",children:"URL & Navigation"}),(0,b.jsx)("pre",{className:"bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 p-4 rounded mb-4",children:(0,b.jsx)("code",{children:`// Current URL
expect(page.url()).toBe('https://example.com/dashboard');

// URL contains path
expect(page.url()).toContain('/dashboard');

// URL matches pattern
expect(page.url()).toMatch(//user/d+/);

// Page title
expect(page).toHaveTitle('User Dashboard');`})}),(0,b.jsxs)("div",{className:"bg-yellow-100 dark:bg-yellow-900 border-l-4 border-yellow-500 p-4 mb-4",children:[(0,b.jsx)("p",{className:"font-semibold text-gray-900 dark:text-gray-100",children:"🟧 Warning:"}),(0,b.jsx)("p",{className:"text-gray-700 dark:text-gray-300",children:"Avoid using Thread.sleep() or fixed delays. They make tests slow and unreliable. Use proper wait strategies instead."})]}),(0,b.jsx)("h2",{className:"text-2xl font-semibold mb-4",children:"Wait Strategies"}),(0,b.jsx)("h3",{className:"text-xl font-semibold mb-2",children:"Implicit Waits"}),(0,b.jsx)("p",{className:"mb-4",children:"Global timeout for element location. Set once and applies to all element searches."}),(0,b.jsx)("pre",{className:"bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 p-4 rounded mb-4",children:(0,b.jsx)("code",{children:`// Selenium implicit wait
driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);

// WebDriver implicit wait
await driver.manage().setTimeouts({ implicit: 10000 });`})}),(0,b.jsx)("h3",{className:"text-xl font-semibold mb-2",children:"Explicit Waits"}),(0,b.jsx)("p",{className:"mb-4",children:"Wait for specific conditions before proceeding. More reliable than implicit waits."}),(0,b.jsx)("pre",{className:"bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 p-4 rounded mb-4",children:(0,b.jsx)("code",{children:`// Selenium WebDriver explicit wait
WebDriverWait wait = new WebDriverWait(driver, 10);
WebElement element = wait.until(
    ExpectedConditions.elementToBeClickable(By.id("submit"))
);

// Playwright explicit wait
await page.waitForSelector('#submit', { state: 'visible' });
await page.locator('#submit').waitFor({ state: 'enabled' });`})}),(0,b.jsx)("h3",{className:"text-xl font-semibold mb-2",children:"Fluent Waits"}),(0,b.jsx)("p",{className:"mb-4",children:"Customizable wait with polling frequency and ignored exceptions."}),(0,b.jsx)("pre",{className:"bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 p-4 rounded mb-4",children:(0,b.jsx)("code",{children:`// Selenium fluent wait
Wait<WebDriver> fluentWait = new FluentWait<>(driver)
    .withTimeout(Duration.ofSeconds(30))
    .pollingEvery(Duration.ofSeconds(5))
    .ignoring(NoSuchElementException.class);

WebElement element = fluentWait.until(driver -> {
    return driver.findElement(By.id("dynamicElement"));
});`})}),(0,b.jsx)("h2",{className:"text-2xl font-semibold mb-4",children:"Common Wait Conditions"}),(0,b.jsx)("h3",{className:"text-xl font-semibold mb-2",children:"Element State"}),(0,b.jsx)("pre",{className:"bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 p-4 rounded mb-4",children:(0,b.jsx)("code",{children:`// Element is visible
await page.waitForSelector('.notification', { state: 'visible' });

// Element is hidden
await page.waitForSelector('.loading', { state: 'hidden' });

// Element is attached to DOM
await page.waitForSelector('#newElement', { state: 'attached' });

// Element is enabled
await page.locator('#submit').waitFor({ state: 'enabled' });`})}),(0,b.jsx)("h3",{className:"text-xl font-semibold mb-2",children:"Page Conditions"}),(0,b.jsx)("pre",{className:"bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 p-4 rounded mb-4",children:(0,b.jsx)("code",{children:`// Page load complete
await page.waitForLoadState('networkidle');

// URL change
await page.waitForURL('**/dashboard');

// Function condition
await page.waitForFunction(() => {
  return document.querySelector('.data-loaded') !== null;
});`})}),(0,b.jsx)("h2",{className:"text-2xl font-semibold mb-4",children:"Custom Wait Conditions"}),(0,b.jsx)("pre",{className:"bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 p-4 rounded mb-4",children:(0,b.jsx)("code",{children:`// Custom condition function
async function waitForDataLoad(page) {
  await page.waitForFunction(() => {
    const loading = document.querySelector('.loading-spinner');
    const data = document.querySelector('.data-table');
    return (!loading || loading.style.display === 'none') && data;
  }, { timeout: 10000 });
}

// Usage
await waitForDataLoad(page);

// API response wait
async function waitForAPIResponse(page, urlPattern) {
  const [response] = await Promise.all([
    page.waitForResponse(response =>
      response.url().includes(urlPattern) && response.status() === 200
    ),
    // Trigger the action that makes the API call
    page.click('#load-data')
  ]);
  return response;
}`})}),(0,b.jsxs)("div",{className:"bg-purple-100 dark:bg-purple-900 border-l-4 border-purple-500 p-4 mb-4",children:[(0,b.jsx)("p",{className:"font-semibold text-gray-900 dark:text-gray-100",children:"🟪 Key Tip:"}),(0,b.jsx)("p",{className:"text-gray-700 dark:text-gray-300",children:"Combine multiple wait conditions when needed. For example, wait for both element visibility and API response completion."})]}),(0,b.jsx)("h2",{className:"text-2xl font-semibold mb-4",children:"Best Practices"}),(0,b.jsx)("h3",{className:"text-xl font-semibold mb-2",children:"Assertion Best Practices"}),(0,b.jsxs)("ul",{className:"list-disc list-inside mb-4",children:[(0,b.jsx)("li",{children:"Use descriptive assertion messages"}),(0,b.jsx)("li",{children:"Assert one thing per assertion"}),(0,b.jsx)("li",{children:"Choose appropriate assertion types"}),(0,b.jsx)("li",{children:"Group related assertions logically"}),(0,b.jsx)("li",{children:"Handle expected failures gracefully"})]}),(0,b.jsx)("h3",{className:"text-xl font-semibold mb-2",children:"Wait Best Practices"}),(0,b.jsxs)("ul",{className:"list-disc list-inside mb-4",children:[(0,b.jsx)("li",{children:"Avoid fixed sleep delays"}),(0,b.jsx)("li",{children:"Use explicit waits over implicit"}),(0,b.jsx)("li",{children:"Set reasonable timeout values"}),(0,b.jsx)("li",{children:"Handle different wait scenarios"}),(0,b.jsx)("li",{children:"Monitor wait performance"})]}),(0,b.jsx)("h2",{className:"text-2xl font-semibold mb-4",children:"Common Issues & Solutions"}),(0,b.jsx)("h3",{className:"text-xl font-semibold mb-2",children:"Flaky Tests"}),(0,b.jsx)("pre",{className:"bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 p-4 rounded mb-4",children:(0,b.jsx)("code",{children:`// Problem: Race conditions
await page.click('#submit');
expect(page.locator('.success')).toBeVisible(); // May fail

// Solution: Wait for expected result
await page.click('#submit');
await page.waitForSelector('.success', { state: 'visible' });
expect(page.locator('.success')).toBeVisible();`})}),(0,b.jsx)("h3",{className:"text-xl font-semibold mb-2",children:"Timeout Issues"}),(0,b.jsx)("pre",{className:"bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 p-4 rounded mb-4",children:(0,b.jsx)("code",{children:`// Problem: Too short timeout
await page.waitForSelector('.slow-element', { timeout: 1000 });

// Solution: Appropriate timeout
await page.waitForSelector('.slow-element', {
  timeout: 10000,
  state: 'visible'
});`})}),(0,b.jsx)("h2",{className:"text-2xl font-semibold mb-4",children:"Resources"}),(0,b.jsxs)("ul",{className:"list-disc list-inside mb-4",children:[(0,b.jsx)("li",{children:(0,b.jsx)("a",{href:"https://playwright.dev/docs/test-assertions",className:"text-blue-600 hover:underline",children:"Playwright Assertions"})}),(0,b.jsx)("li",{children:(0,b.jsx)("a",{href:"https://www.selenium.dev/documentation/webdriver/waits/",className:"text-blue-600 hover:underline",children:"Selenium Waits"})}),(0,b.jsx)("li",{children:(0,b.jsx)("a",{href:"https://jestjs.io/docs/expect",className:"text-blue-600 hover:underline",children:"Jest Assertions"})}),(0,b.jsx)("li",{children:(0,b.jsx)("a",{href:"https://testing-library.com/docs/guide-disappearance/",className:"text-blue-600 hover:underline",children:"Testing Library Waits"})})]})]})}a.s(["default",()=>c])}];

//# sourceMappingURL=%5Broot-of-the-server%5D__dc13f712._.js.map