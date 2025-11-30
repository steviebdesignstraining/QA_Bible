export default function Page() {
  return (
    <div className="max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Framework Specialisation Case Studies</h1>

      <p className="mb-6">
        Real-world examples of implementing and working with various testing frameworks, showcasing framework selection, implementation challenges, and optimization strategies.
      </p>

      <div className="space-y-8">
        {/* Case Study 1 */}
        <div className="border border-gray-300 dark:border-gray-600 rounded-lg p-6">
          <h2 className="text-2xl font-semibold mb-3 text-blue-600 dark:text-blue-400">Case Study 1: Kubrick Group Cypress Migration</h2>
          <div className="bg-blue-100 dark:bg-blue-900 border-l-4 border-blue-500 p-4 mb-4">
            <p className="font-semibold text-gray-900 dark:text-gray-100">🟦 Context:</p>
            <p className="text-gray-700 dark:text-gray-300">At Kubrick Group, I was responsible for automating test cases using Cypress with JavaScript. The team needed to create and maintain comprehensive test suites for their applications.</p>
          </div>

          <h3 className="text-xl font-semibold mb-2">Framework Implementation:</h3>
          <ul className="list-disc list-inside mb-4">
            <li>Created GIT branches and merged automation repos</li>
            <li>Set up CI pipelines in Azure DevOps</li>
            <li>Developed regression and smoke test suites</li>
            <li>Created test strategies and plans from scratch</li>
          </ul>

          <h3 className="text-xl font-semibold mb-2">Technical Implementation:</h3>
          <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded mb-4">
            <code>{`// Cypress test structure
describe('Kubrick Application Tests', () => {
  beforeEach(() => {
    cy.login(Cypress.env('username'), Cypress.env('password'));
  });

  it('should create new project', () => {
    cy.visit('/projects');
    cy.get('[data-cy="new-project-btn"]').click();
    cy.get('[data-cy="project-name"]').type('Test Project');
    cy.get('[data-cy="create-btn"]').click();
    cy.contains('Project created successfully').should('be.visible');
  });
});`}</code>
          </pre>

          <h3 className="text-xl font-semibold mb-2">CI/CD Integration:</h3>
          <ul className="list-disc list-inside mb-4">
            <li>Automated test execution on PR merges</li>
            <li>Scheduled weekly releases</li>
            <li>Test result reporting and analysis</li>
            <li>Release documentation and planning</li>
          </ul>

          <div className="bg-green-100 dark:bg-green-900 border-l-4 border-green-500 p-4 mb-4">
            <p className="font-semibold text-gray-900 dark:text-gray-100">🟩 Results:</p>
            <p className="text-gray-700 dark:text-gray-300">Established complete QA processes from scratch. Improved release quality and reduced manual testing time by 60%. Successful project planning and documentation workflows.</p>
          </div>

          <div className="bg-purple-100 dark:bg-purple-900 border-l-4 border-purple-500 p-4">
            <p className="font-semibold text-gray-900 dark:text-gray-100">🟪 Lessons Learned:</p>
            <p className="text-gray-700 dark:text-gray-300">Building QA processes from scratch requires careful planning and stakeholder alignment. Cypress provides excellent tools for modern web application testing.</p>
          </div>
        </div>

        {/* Case Study 2 */}
        <div className="border border-gray-300 dark:border-gray-600 rounded-lg p-6">
          <h2 className="text-2xl font-semibold mb-3 text-blue-600 dark:text-blue-400">Case Study 2: Curio TypeScript Framework Adoption</h2>
          <div className="bg-blue-100 dark:bg-blue-900 border-l-4 border-blue-500 p-4 mb-4">
            <p className="font-semibold text-gray-900 dark:text-gray-100">🟦 Context:</p>
            <p className="text-gray-700 dark:text-gray-300">At Curio, I led automation of QA processes using Cypress with TypeScript. The team needed to expand from smoke tests to comprehensive regression suites.</p>
          </div>

          <h3 className="text-xl font-semibold mb-2">TypeScript Integration:</h3>
          <ul className="list-disc list-inside mb-4">
            <li>Migrated from JavaScript to TypeScript</li>
            <li>Implemented Page Object Model with TypeScript</li>
            <li>Created reusable test utilities and helpers</li>
            <li>Enhanced type safety and maintainability</li>
          </ul>

          <h3 className="text-xl font-semibold mb-2">Advanced Cypress Features:</h3>
          <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded mb-4">
            <code>{`// TypeScript Page Object
export class CheckoutPage {
  private readonly cardNumberInput = '[data-cy="card-number"]';
  private readonly expiryInput = '[data-cy="expiry"]';
  private readonly cvcInput = '[data-cy="cvc"]';

  enterCardDetails(cardNumber: string, expiry: string, cvc: string): void {
    cy.get(this.cardNumberInput).type(cardNumber);
    cy.get(this.expiryInput).type(expiry);
    cy.get(this.cvcInput).type(cvc);
  }

  submitPayment(): void {
    cy.get('[data-cy="pay-button"]').click();
  }
}`}</code>
          </pre>

          <h3 className="text-xl font-semibold mb-2">Framework Expansion:</h3>
          <ul className="list-disc list-inside mb-4">
            <li>Added Cucumber for BDD testing</li>
            <li>Integrated with CRM tools (Instabug, Intercom)</li>
            <li>Implemented A/B testing validation</li>
            <li>Added performance monitoring with Firebase</li>
          </ul>

          <div className="bg-green-100 dark:bg-green-900 border-l-4 border-green-500 p-4 mb-4">
            <p className="font-semibold text-gray-900 dark:text-gray-100">🟩 Results:</p>
            <p className="text-gray-700 dark:text-gray-300">Expanded test coverage from 40% to 85%. Reduced bug escape rate by 70%. Improved team productivity through better tooling and processes.</p>
          </div>

          <div className="bg-purple-100 dark:bg-purple-900 border-l-4 border-purple-500 p-4">
            <p className="font-semibold text-gray-900 dark:text-gray-100">🟪 Lessons Learned:</p>
            <p className="text-gray-700 dark:text-gray-300">TypeScript significantly improves test maintainability and catches errors early. Framework evolution requires gradual adoption and team training.</p>
          </div>
        </div>

        {/* Case Study 3 */}
        <div className="border border-gray-300 dark:border-gray-600 rounded-lg p-6">
          <h2 className="text-2xl font-semibold mb-3 text-blue-600 dark:text-blue-400">Case Study 3: Elsewhen Playwright Transition</h2>
          <div className="bg-blue-100 dark:bg-blue-900 border-l-4 border-blue-500 p-4 mb-4">
            <p className="font-semibold text-gray-900 dark:text-gray-100">🟦 Context:</p>
            <p className="text-gray-700 dark:text-gray-300">At Elsewhen, I upskilled the team and introduced Playwright while phasing out Cypress. This involved evaluating both frameworks and implementing a smooth transition.</p>
          </div>

          <h3 className="text-xl font-semibold mb-2">Framework Evaluation:</h3>
          <ul className="list-disc list-inside mb-4">
            <li>Compared Cypress vs Playwright capabilities</li>
            <li>Assessed team skill requirements</li>
            <li>Evaluated CI/CD compatibility</li>
            <li>Planned migration strategy</li>
          </ul>

          <h3 className="text-xl font-semibold mb-2">Playwright Implementation:</h3>
          <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded mb-4">
            <code>{`// Playwright test with TypeScript
import { test, expect } from '@playwright/test';

test.describe('Authentication', () => {
  test('should login with OKTA', async ({ page }) => {
    // OKTA SSO integration
    await page.goto('/login');
    await page.fill('[data-test="username"]', process.env.USERNAME!);
    await page.fill('[data-test="password"]', process.env.PASSWORD!);
    await page.click('[data-test="login-btn"]');

    await expect(page.locator('[data-test="dashboard"]')).toBeVisible();
  });
});`}</code>
          </pre>

          <h3 className="text-xl font-semibold mb-2">Migration Strategy:</h3>
          <ul className="list-disc list-inside mb-4">
            <li>Parallel execution of both frameworks</li>
            <li>Gradual test migration</li>
            <li>Team training and documentation</li>
            <li>Performance and reliability validation</li>
          </ul>

          <div className="bg-green-100 dark:bg-green-900 border-l-4 border-green-500 p-4 mb-4">
            <p className="font-semibold text-gray-900 dark:text-gray-100">🟩 Results:</p>
            <p className="text-gray-700 dark:text-gray-300">Successful framework transition completed. Improved test execution speed by 40%. Enhanced cross-browser testing capabilities.</p>
          </div>

          <div className="bg-purple-100 dark:bg-purple-900 border-l-4 border-purple-500 p-4">
            <p className="font-semibold text-gray-900 dark:text-gray-100">🟪 Lessons Learned:</p>
            <p className="text-gray-700 dark:text-gray-300">Framework transitions require careful evaluation and planning. Playwright offers superior cross-browser support and modern testing capabilities.</p>
          </div>
        </div>

        {/* Case Study 4 */}
        <div className="border border-gray-300 dark:border-gray-600 rounded-lg p-6">
          <h2 className="text-2xl font-semibold mb-3 text-blue-600 dark:text-blue-400">Case Study 4: Stadion Maestro Mobile Automation</h2>
          <div className="bg-blue-100 dark:bg-blue-900 border-l-4 border-blue-500 p-4 mb-4">
            <p className="font-semibold text-gray-900 dark:text-gray-100">🟦 Context:</p>
            <p className="text-gray-700 dark:text-gray-300">At Stadion, I developed high-level automation test scripts using Maestro for mobile applications. The framework evaluation led to choosing Maestro for its YAML-based approach.</p>
          </div>

          <h3 className="text-xl font-semibold mb-2">Framework Selection:</h3>
          <ul className="list-disc list-inside mb-4">
            <li>Evaluated Maestro vs Appium vs Detox</li>
            <li>Chose Maestro for simplicity and maintainability</li>
            <li>Focused on high-level user journey testing</li>
            <li>Integrated with existing CI/CD pipeline</li>
          </ul>

          <h3 className="text-xl font-semibold mb-2">Maestro Test Flows:</h3>
          <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded mb-4">
            <code>{`# Maestro login flow
appId: com.stadion.app
---
- launchApp
- tapOn: "Get Started"
- inputText: "user@example.com"
- tapOn: "Continue"
- inputText: "password123"
- tapOn: "Sign In"
- assertVisible: "Welcome to Stadion"
---
- scroll
- tapOn: "Profile"
- assertVisible: "My Account"`}</code>
          </pre>

          <h3 className="text-xl font-semibold mb-2">Mobile Testing Strategy:</h3>
          <ul className="list-disc list-inside mb-4">
            <li>Focus on critical user journeys</li>
            <li>Cross-platform compatibility testing</li>
            <li>Performance validation on real devices</li>
            <li>Integration with GitHub Actions</li>
          </ul>

          <div className="bg-green-100 dark:bg-green-900 border-l-4 border-green-500 p-4 mb-4">
            <p className="font-semibold text-gray-900 dark:text-gray-100">🟩 Results:</p>
            <p className="text-gray-700 dark:text-gray-300">Mobile testing efficiency improved by 60%. Reduced regression testing time from days to hours. Enhanced release confidence with automated mobile validation.</p>
          </div>

          <div className="bg-purple-100 dark:bg-purple-900 border-l-4 border-purple-500 p-4">
            <p className="font-semibold text-gray-900 dark:text-gray-100">🟪 Lessons Learned:</p>
            <p className="text-gray-700 dark:text-gray-300">Maestro excels at high-level mobile testing scenarios. YAML-based flows are easier to maintain than traditional code-based mobile automation.</p>
          </div>
        </div>

        {/* Case Study 5 */}
        <div className="border border-gray-300 dark:border-gray-600 rounded-lg p-6">
          <h2 className="text-2xl font-semibold mb-3 text-blue-600 dark:text-blue-400">Case Study 5: Tempcover Detox React Native Testing</h2>
          <div className="bg-blue-100 dark:bg-blue-900 border-l-4 border-blue-500 p-4 mb-4">
            <p className="font-semibold text-gray-900 dark:text-gray-100">🟦 Context:</p>
            <p className="text-gray-700 dark:text-gray-300">At Tempcover, I implemented Detox for testing their React Native car insurance application. This involved end-to-end testing with Cucumber integration.</p>
          </div>

          <h3 className="text-xl font-semibold mb-2">React Native Testing Setup:</h3>
          <ul className="list-disc list-inside mb-4">
            <li>Configured Detox for React Native testing</li>
            <li>Integrated Cucumber for BDD scenarios</li>
            <li>Set up CI/CD pipeline for mobile tests</li>
            <li>Implemented parallel test execution</li>
          </ul>

          <h3 className="text-xl font-semibold mb-2">Detox Implementation:</h3>
          <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded mb-4">
            <code>{`// Detox test with Cucumber
import { device, expect, element, by } from 'detox';

Given('I am on the login screen', async () => {
  await device.launchApp();
  await expect(element(by.id('login-screen'))).toBeVisible();
});

When('I enter valid credentials', async () => {
  await element(by.id('email-input')).typeText('user@example.com');
  await element(by.id('password-input')).typeText('password123');
  await element(by.id('login-button')).tap();
});

Then('I should see the dashboard', async () => {
  await expect(element(by.id('dashboard'))).toBeVisible();
});`}</code>
          </pre>

          <h3 className="text-xl font-semibold mb-2">Insurance App Testing:</h3>
          <ul className="list-disc list-inside mb-4">
            <li>Quote calculation validation</li>
            <li>Policy purchase flow testing</li>
            <li>Document upload verification</li>
            <li>Payment integration testing</li>
          </ul>

          <div className="bg-green-100 dark:bg-green-900 border-l-4 border-green-500 p-4 mb-4">
            <p className="font-semibold text-gray-900 dark:text-gray-100">🟩 Results:</p>
            <p className="text-gray-700 dark:text-gray-300">Zero critical bugs in production release. Customer acquisition improved by 40%. Reliable quote and purchase experience established.</p>
          </div>

          <div className="bg-purple-100 dark:bg-purple-900 border-l-4 border-purple-500 p-4">
            <p className="font-semibold text-gray-900 dark:text-gray-100">🟪 Lessons Learned:</p>
            <p className="text-gray-700 dark:text-gray-300">Detox provides excellent React Native testing capabilities. Cucumber integration improves test readability and stakeholder communication.</p>
          </div>
        </div>
      </div>
    </div>
  )
}