export default function Page() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Assertions & Wait Strategies</h1>

      <p className="mb-4">
        Assertions verify that application behavior matches expectations. Wait strategies handle timing issues in dynamic web applications. Both are crucial for reliable test automation.
      </p>

      <div className="bg-blue-100 dark:bg-blue-900 border-l-4 border-blue-500 p-4 mb-4">
        <p className="font-semibold text-gray-900 dark:text-gray-100">🟦 Info:</p>
        <p className="text-gray-700 dark:text-gray-300">Good assertions provide clear feedback when tests fail. Proper waits prevent flaky tests caused by timing issues.</p>
      </div>

      <h2 className="text-2xl font-semibold mb-4">What are Assertions?</h2>
      <p className="mb-4">
        Assertions are checks that verify the actual behavior of your application matches the expected behavior. They are the final step in determining test pass/fail status.
      </p>

      <div className="bg-green-100 dark:bg-green-900 border-l-4 border-green-500 p-4 mb-4">
        <p className="font-semibold text-gray-900 dark:text-gray-100">🟩 Example:</p>
        <p className="text-gray-700 dark:text-gray-300">After clicking login, assert that the dashboard page loads and displays the user's name.</p>
      </div>

      <h2 className="text-2xl font-semibold mb-4">Types of Assertions</h2>

      <h3 className="text-xl font-semibold mb-2">Hard Assertions</h3>
      <p className="mb-4">
        Stop test execution immediately when assertion fails. Used for critical checks.
      </p>

      <pre className="bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 p-4 rounded mb-4">
        <code>{`// Jest hard assertion
test('login works', () => {
  login('user@example.com', 'password');
  expect(page.url()).toBe('/dashboard'); // Stops here if fails
  expect(page.getByText('Welcome')).toBeVisible();
});`}</code>
      </pre>

      <h3 className="text-xl font-semibold mb-2">Soft Assertions</h3>
      <p className="mb-4">
        Continue test execution even when assertion fails. Collect all failures before reporting.
      </p>

      <pre className="bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 p-4 rounded mb-4">
        <code>{`// TestNG soft assertions
SoftAssert softAssert = new SoftAssert();

softAssert.assertEquals(actualTitle, expectedTitle);
softAssert.assertTrue(element.isDisplayed());
softAssert.assertEquals(actualCount, expectedCount);

softAssert.assertAll(); // Reports all failures at once`}</code>
      </pre>

      <h2 className="text-2xl font-semibold mb-4">Common Assertion Methods</h2>

      <h3 className="text-xl font-semibold mb-2">Element Presence & Visibility</h3>
      <pre className="bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 p-4 rounded mb-4">
        <code>{`// Element exists
expect(page.locator('#username')).toBeVisible();

// Element is hidden
expect(page.locator('.error-message')).toBeHidden();

// Element contains text
expect(page.locator('.welcome')).toContainText('Welcome back');

// Element has specific attribute
expect(page.locator('input[type="email"]')).toHaveAttribute('required');`}</code>
      </pre>

      <h3 className="text-xl font-semibold mb-2">Text & Content Assertions</h3>
      <pre className="bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 p-4 rounded mb-4">
        <code>{`// Exact text match
expect(page.locator('h1')).toHaveText('Dashboard');

// Partial text match
expect(page.locator('.message')).toContainText('success');

// Text matches regex
expect(page.locator('.email')).toMatch(/^[^@]+@[^@]+\.[^@]+$/);

// Count elements
expect(page.locator('.product-item')).toHaveCount(5);`}</code>
      </pre>

      <h3 className="text-xl font-semibold mb-2">URL & Navigation</h3>
      <pre className="bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 p-4 rounded mb-4">
        <code>{`// Current URL
expect(page.url()).toBe('https://example.com/dashboard');

// URL contains path
expect(page.url()).toContain('/dashboard');

// URL matches pattern
expect(page.url()).toMatch(/\/user\/\d+/);

// Page title
expect(page).toHaveTitle('User Dashboard');`}</code>
      </pre>

      <div className="bg-yellow-100 dark:bg-yellow-900 border-l-4 border-yellow-500 p-4 mb-4">
        <p className="font-semibold text-gray-900 dark:text-gray-100">🟧 Warning:</p>
        <p className="text-gray-700 dark:text-gray-300">Avoid using Thread.sleep() or fixed delays. They make tests slow and unreliable. Use proper wait strategies instead.</p>
      </div>

      <h2 className="text-2xl font-semibold mb-4">Wait Strategies</h2>

      <h3 className="text-xl font-semibold mb-2">Implicit Waits</h3>
      <p className="mb-4">
        Global timeout for element location. Set once and applies to all element searches.
      </p>

      <pre className="bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 p-4 rounded mb-4">
        <code>{`// Selenium implicit wait
driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);

// WebDriver implicit wait
await driver.manage().setTimeouts({ implicit: 10000 });`}</code>
      </pre>

      <h3 className="text-xl font-semibold mb-2">Explicit Waits</h3>
      <p className="mb-4">
        Wait for specific conditions before proceeding. More reliable than implicit waits.
      </p>

      <pre className="bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 p-4 rounded mb-4">
        <code>{`// Selenium WebDriver explicit wait
WebDriverWait wait = new WebDriverWait(driver, 10);
WebElement element = wait.until(
    ExpectedConditions.elementToBeClickable(By.id("submit"))
);

// Playwright explicit wait
await page.waitForSelector('#submit', { state: 'visible' });
await page.locator('#submit').waitFor({ state: 'enabled' });`}</code>
      </pre>

      <h3 className="text-xl font-semibold mb-2">Fluent Waits</h3>
      <p className="mb-4">
        Customizable wait with polling frequency and ignored exceptions.
      </p>

      <pre className="bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 p-4 rounded mb-4">
        <code>{`// Selenium fluent wait
Wait<WebDriver> fluentWait = new FluentWait<>(driver)
    .withTimeout(Duration.ofSeconds(30))
    .pollingEvery(Duration.ofSeconds(5))
    .ignoring(NoSuchElementException.class);

WebElement element = fluentWait.until(driver -> {
    return driver.findElement(By.id("dynamicElement"));
});`}</code>
      </pre>

      <h2 className="text-2xl font-semibold mb-4">Common Wait Conditions</h2>

      <h3 className="text-xl font-semibold mb-2">Element State</h3>
      <pre className="bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 p-4 rounded mb-4">
        <code>{`// Element is visible
await page.waitForSelector('.notification', { state: 'visible' });

// Element is hidden
await page.waitForSelector('.loading', { state: 'hidden' });

// Element is attached to DOM
await page.waitForSelector('#newElement', { state: 'attached' });

// Element is enabled
await page.locator('#submit').waitFor({ state: 'enabled' });`}</code>
      </pre>

      <h3 className="text-xl font-semibold mb-2">Page Conditions</h3>
      <pre className="bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 p-4 rounded mb-4">
        <code>{`// Page load complete
await page.waitForLoadState('networkidle');

// URL change
await page.waitForURL('**/dashboard');

// Function condition
await page.waitForFunction(() => {
  return document.querySelector('.data-loaded') !== null;
});`}</code>
      </pre>

      <h2 className="text-2xl font-semibold mb-4">Custom Wait Conditions</h2>
      <pre className="bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 p-4 rounded mb-4">
        <code>{`// Custom condition function
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
}`}</code>
      </pre>

      <div className="bg-purple-100 dark:bg-purple-900 border-l-4 border-purple-500 p-4 mb-4">
        <p className="font-semibold text-gray-900 dark:text-gray-100">🟪 Key Tip:</p>
        <p className="text-gray-700 dark:text-gray-300">Combine multiple wait conditions when needed. For example, wait for both element visibility and API response completion.</p>
      </div>

      <h2 className="text-2xl font-semibold mb-4">Best Practices</h2>

      <h3 className="text-xl font-semibold mb-2">Assertion Best Practices</h3>
      <ul className="list-disc list-inside mb-4">
        <li>Use descriptive assertion messages</li>
        <li>Assert one thing per assertion</li>
        <li>Choose appropriate assertion types</li>
        <li>Group related assertions logically</li>
        <li>Handle expected failures gracefully</li>
      </ul>

      <h3 className="text-xl font-semibold mb-2">Wait Best Practices</h3>
      <ul className="list-disc list-inside mb-4">
        <li>Avoid fixed sleep delays</li>
        <li>Use explicit waits over implicit</li>
        <li>Set reasonable timeout values</li>
        <li>Handle different wait scenarios</li>
        <li>Monitor wait performance</li>
      </ul>

      <h2 className="text-2xl font-semibold mb-4">Common Issues & Solutions</h2>

      <h3 className="text-xl font-semibold mb-2">Flaky Tests</h3>
      <pre className="bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 p-4 rounded mb-4">
        <code>{`// Problem: Race conditions
await page.click('#submit');
expect(page.locator('.success')).toBeVisible(); // May fail

// Solution: Wait for expected result
await page.click('#submit');
await page.waitForSelector('.success', { state: 'visible' });
expect(page.locator('.success')).toBeVisible();`}</code>
      </pre>

      <h3 className="text-xl font-semibold mb-2">Timeout Issues</h3>
      <pre className="bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 p-4 rounded mb-4">
        <code>{`// Problem: Too short timeout
await page.waitForSelector('.slow-element', { timeout: 1000 });

// Solution: Appropriate timeout
await page.waitForSelector('.slow-element', {
  timeout: 10000,
  state: 'visible'
});`}</code>
      </pre>

      <h2 className="text-2xl font-semibold mb-4">Resources</h2>
      <ul className="list-disc list-inside mb-4">
        <li><a href="https://playwright.dev/docs/test-assertions" className="text-blue-600 hover:underline">Playwright Assertions</a></li>
        <li><a href="https://www.selenium.dev/documentation/webdriver/waits/" className="text-blue-600 hover:underline">Selenium Waits</a></li>
        <li><a href="https://jestjs.io/docs/expect" className="text-blue-600 hover:underline">Jest Assertions</a></li>
        <li><a href="https://testing-library.com/docs/guide-disappearance/" className="text-blue-600 hover:underline">Testing Library Waits</a></li>
      </ul>
    </div>
  )
}
