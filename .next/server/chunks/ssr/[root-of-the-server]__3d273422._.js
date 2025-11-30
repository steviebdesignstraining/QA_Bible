module.exports=[93695,(a,b,c)=>{b.exports=a.x("next/dist/shared/lib/no-fallback-error.external.js",()=>require("next/dist/shared/lib/no-fallback-error.external.js"))},17745,a=>{a.n(a.i(59250))},23303,a=>{a.n(a.i(88148))},44896,a=>{a.n(a.i(74740))},46174,a=>{a.n(a.i(83216))},78190,a=>{a.n(a.i(17921))},60850,a=>{"use strict";var b=a.i(64868);function c(){return(0,b.jsxs)("div",{className:"max-w-4xl mx-auto",children:[(0,b.jsx)("h1",{className:"text-3xl font-bold mb-6",children:"Playwright"}),(0,b.jsx)("p",{className:"mb-4",children:"Playwright is a cross-browser automation framework by Microsoft for end-to-end testing."}),(0,b.jsxs)("div",{className:"bg-blue-100 dark:bg-blue-900 border-l-4 border-blue-500 p-4 mb-4",children:[(0,b.jsx)("p",{className:"font-semibold text-gray-700 dark:text-gray-300",children:"🟦 Info:"}),(0,b.jsx)("p",{children:"Supports Chromium, Firefox, WebKit with one API."})]}),(0,b.jsx)("h2",{className:"text-2xl font-semibold mb-4",children:"Setup"}),(0,b.jsx)("pre",{className:"bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 p-4 rounded mb-4",children:(0,b.jsx)("code",{children:`npm install @playwright/test
npx playwright install`})}),(0,b.jsx)("h2",{className:"text-2xl font-semibold mb-4",children:"Folder Structure"}),(0,b.jsx)("pre",{className:"bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 p-4 rounded mb-4",children:(0,b.jsx)("code",{children:`tests/
  example.spec.ts
playwright.config.ts
package.json`})}),(0,b.jsx)("h2",{className:"text-2xl font-semibold mb-4",children:"Basic Commands"}),(0,b.jsxs)("ul",{className:"list-disc list-inside mb-4",children:[(0,b.jsx)("li",{children:"npx playwright test - Run tests"}),(0,b.jsx)("li",{children:"npx playwright show-report - View report"}),(0,b.jsx)("li",{children:"npx playwright codegen - Generate tests"})]}),(0,b.jsxs)("div",{className:"bg-green-100 dark:bg-green-900 border-l-4 border-green-500 p-4 mb-4",children:[(0,b.jsx)("p",{className:"font-semibold text-gray-700 dark:text-gray-300",children:"🟩 Example:"}),(0,b.jsx)("p",{children:"Simple test to check page title."})]}),(0,b.jsx)("h2",{className:"text-2xl font-semibold mb-4",children:"Code Example"}),(0,b.jsx)("pre",{className:"bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 p-4 rounded mb-4",children:(0,b.jsx)("code",{children:`import { test, expect } from '@playwright/test';

test('homepage has title', async ({ page }) => {
  await page.goto('https://example.com');
  await expect(page).toHaveTitle(/Example/);
});`})}),(0,b.jsx)("h2",{className:"text-2xl font-semibold mb-4",children:"Page Object Model"}),(0,b.jsx)("pre",{className:"bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 p-4 rounded mb-4",children:(0,b.jsx)("code",{children:`// LoginPage.ts
export class LoginPage {
  constructor(private page: Page) {}

  async login(username: string, password: string) {
    await this.page.fill('[data-test="username"]', username);
    await this.page.fill('[data-test="password"]', password);
    await this.page.click('[data-test="login"]');
  }
}`})}),(0,b.jsx)("h2",{className:"text-2xl font-semibold mb-4",children:"CI/CD with GitHub Actions"}),(0,b.jsx)("pre",{className:"bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 p-4 rounded mb-4",children:(0,b.jsx)("code",{children:`name: Playwright Tests
on: [push]
jobs:
  test:
    runs-on: ubuntu-latest
    steps:
    - uses: actions/checkout@v3
    - uses: actions/setup-node@v3
    - run: npm ci
    - run: npx playwright install
    - run: npx playwright test`})}),(0,b.jsxs)("div",{className:"bg-yellow-100 dark:bg-yellow-900 border-l-4 border-yellow-500 p-4 mb-4",children:[(0,b.jsx)("p",{className:"font-semibold text-gray-700 dark:text-gray-300",children:"🟧 Warning:"}),(0,b.jsx)("p",{children:"Use explicit waits to avoid flaky tests."})]}),(0,b.jsx)("h2",{className:"text-2xl font-semibold mb-4",children:"API Testing"}),(0,b.jsx)("pre",{className:"bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 p-4 rounded mb-4",children:(0,b.jsx)("code",{children:`test('API test', async ({ request }) => {
  const response = await request.get('/api/users');
  expect(response.ok()).toBeTruthy();
});`})}),(0,b.jsxs)("div",{className:"bg-purple-100 dark:bg-purple-900 border-l-4 border-purple-500 p-4 mb-4",children:[(0,b.jsx)("p",{className:"font-semibold text-gray-700 dark:text-gray-300",children:"🟪 Key Tip:"}),(0,b.jsx)("p",{children:"Use data-test attributes for reliable selectors."})]}),(0,b.jsx)("h2",{className:"text-2xl font-semibold mb-4",children:"Common Interview Questions"}),(0,b.jsxs)("ul",{className:"list-disc list-inside mb-4",children:[(0,b.jsx)("li",{children:"What is Playwright?"}),(0,b.jsx)("li",{children:"How does it differ from Selenium?"}),(0,b.jsx)("li",{children:"Explain auto-waiting"}),(0,b.jsx)("li",{children:"How to handle iframes?"})]})]})}a.s(["default",()=>c])}];

//# sourceMappingURL=%5Broot-of-the-server%5D__3d273422._.js.map