export default function Page() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Playwright</h1>

      <p className="mb-4">
        Playwright is a cross-browser automation framework by Microsoft for end-to-end testing.
      </p>

      <div className="bg-blue-100 dark:bg-blue-900 border-l-4 border-blue-500 p-4 mb-4">
        <p className="font-semibold text-gray-700 dark:text-gray-300">🟦 Info:</p>
        <p>Supports Chromium, Firefox, WebKit with one API.</p>
      </div>

      <h2 className="text-2xl font-semibold mb-4">Setup</h2>
      <pre className="bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 p-4 rounded mb-4">
        <code>{`npm install @playwright/test
npx playwright install`}</code>
      </pre>

      <h2 className="text-2xl font-semibold mb-4">Folder Structure</h2>
      <pre className="bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 p-4 rounded mb-4">
        <code>{`tests/
  example.spec.ts
playwright.config.ts
package.json`}</code>
      </pre>

      <h2 className="text-2xl font-semibold mb-4">Basic Commands</h2>
      <ul className="list-disc list-inside mb-4">
        <li>npx playwright test - Run tests</li>
        <li>npx playwright show-report - View report</li>
        <li>npx playwright codegen - Generate tests</li>
      </ul>

      <div className="bg-green-100 dark:bg-green-900 border-l-4 border-green-500 p-4 mb-4">
        <p className="font-semibold text-gray-700 dark:text-gray-300">🟩 Example:</p>
        <p>Simple test to check page title.</p>
      </div>

      <h2 className="text-2xl font-semibold mb-4">Code Example</h2>
      <pre className="bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 p-4 rounded mb-4">
        <code>{`import { test, expect } from '@playwright/test';

test('homepage has title', async ({ page }) => {
  await page.goto('https://example.com');
  await expect(page).toHaveTitle(/Example/);
});`}</code>
      </pre>

      <h2 className="text-2xl font-semibold mb-4">Page Object Model</h2>
      <pre className="bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 p-4 rounded mb-4">
        <code>{`// LoginPage.ts
export class LoginPage {
  constructor(private page: Page) {}

  async login(username: string, password: string) {
    await this.page.fill('[data-test="username"]', username);
    await this.page.fill('[data-test="password"]', password);
    await this.page.click('[data-test="login"]');
  }
}`}</code>
      </pre>

      <h2 className="text-2xl font-semibold mb-4">CI/CD with GitHub Actions</h2>
      <pre className="bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 p-4 rounded mb-4">
        <code>{`name: Playwright Tests
on: [push]
jobs:
  test:
    runs-on: ubuntu-latest
    steps:
    - uses: actions/checkout@v3
    - uses: actions/setup-node@v3
    - run: npm ci
    - run: npx playwright install
    - run: npx playwright test`}</code>
      </pre>

      <div className="bg-yellow-100 dark:bg-yellow-900 border-l-4 border-yellow-500 p-4 mb-4">
        <p className="font-semibold text-gray-700 dark:text-gray-300">🟧 Warning:</p>
        <p>Use explicit waits to avoid flaky tests.</p>
      </div>

      <h2 className="text-2xl font-semibold mb-4">API Testing</h2>
      <pre className="bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 p-4 rounded mb-4">
        <code>{`test('API test', async ({ request }) => {
  const response = await request.get('/api/users');
  expect(response.ok()).toBeTruthy();
});`}</code>
      </pre>

      <div className="bg-purple-100 dark:bg-purple-900 border-l-4 border-purple-500 p-4 mb-4">
        <p className="font-semibold text-gray-700 dark:text-gray-300">🟪 Key Tip:</p>
        <p>Use data-test attributes for reliable selectors.</p>
      </div>

      <h2 className="text-2xl font-semibold mb-4">Common Interview Questions</h2>
      <ul className="list-disc list-inside mb-4">
        <li>What is Playwright?</li>
        <li>How does it differ from Selenium?</li>
        <li>Explain auto-waiting</li>
        <li>How to handle iframes?</li>
      </ul>
    </div>
  )
}
