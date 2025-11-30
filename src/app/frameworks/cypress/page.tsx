export default function Page() {
  return (
    <div className="max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Cypress</h1>

      <p className="mb-6">
        Cypress is a modern JavaScript-based end-to-end testing framework designed for web applications. It runs directly in the browser for fast, reliable testing.
      </p>

      <div className="bg-blue-100 dark:bg-blue-900 border-l-4 border-blue-500 p-4 mb-6">
        <p className="font-semibold text-gray-900 dark:text-gray-100">🟦 Info:</p>
        <p className="text-gray-700 dark:text-gray-300">Cypress provides a complete testing experience with automatic waiting, real-time reloading, and powerful debugging tools built directly into the browser.</p>
      </div>

      <h2 className="text-2xl font-semibold mb-4">Setup</h2>
      <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded mb-6">
        <pre className="text-sm">
          <code>{`npm install cypress --save-dev
npx cypress open  # Opens Cypress Test Runner
npx cypress run   # Runs tests headlessly`}</code>
        </pre>
      </div>

      <h2 className="text-2xl font-semibold mb-4">Project Structure</h2>
      <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded mb-6">
        <pre className="text-sm">
          <code>{`cypress/
├── fixtures/          # Test data files
├── integration/       # Test files
├── plugins/          # Plugin configuration
├── support/          # Custom commands
└── videos/           # Test recordings
cypress.json          # Configuration
package.json`}</code>
        </pre>
      </div>

      <h2 className="text-2xl font-semibold mb-4">Basic Test Example</h2>
      <div className="bg-white dark:bg-gray-700 p-4 rounded mb-6">
        <pre className="text-sm">
          <code>{`describe('User Login', () => {
  it('should login successfully', () => {
    cy.visit('/login')
    cy.get('[data-cy="email"]').type('user@example.com')
    cy.get('[data-cy="password"]').type('password123')
    cy.get('[data-cy="login-button"]').click()
    cy.url().should('include', '/dashboard')
    cy.contains('Welcome').should('be.visible')
  })
})`}</code>
        </pre>
      </div>

      <h2 className="text-2xl font-semibold mb-4">Key Features</h2>

      <div className="grid md:grid-cols-2 gap-6 mb-6">
        <div>
          <h3 className="text-lg font-semibold mb-3">Automatic Waiting</h3>
          <p className="mb-3">Cypress automatically waits for commands and assertions</p>
          <div className="bg-green-100 dark:bg-green-900 p-3 rounded">
            <code className="text-sm">cy.get('.button').click() // Waits automatically</code>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-3">Time Travel Debugging</h3>
          <p className="mb-3">Step back through test execution in the browser</p>
          <div className="bg-blue-100 dark:bg-blue-900 p-3 rounded">
            <code className="text-sm">// Click through timeline to debug</code>
          </div>
        </div>
      </div>

      <h2 className="text-2xl font-semibold mb-4">Page Object Model</h2>
      <div className="bg-white dark:bg-gray-700 p-4 rounded mb-6">
        <pre className="text-sm">
          <code>{`// cypress/support/page-objects/LoginPage.js
class LoginPage {
  visit() {
    cy.visit('/login')
  }

  fillEmail(email) {
    cy.get('[data-cy="email"]').type(email)
  }

  fillPassword(password) {
    cy.get('[data-cy="password"]').type(password)
  }

  submit() {
    cy.get('[data-cy="login-button"]').click()
  }

  login(email, password) {
    this.fillEmail(email)
    this.fillPassword(password)
    this.submit()
  }
}

export default LoginPage`}</code>
        </pre>
      </div>

      <h2 className="text-2xl font-semibold mb-4">API Testing</h2>
      <div className="bg-white dark:bg-gray-700 p-4 rounded mb-6">
        <pre className="text-sm">
          <code>{`describe('API Tests', () => {
  it('should create user via API', () => {
    cy.request('POST', '/api/users', {
      name: 'John Doe',
      email: 'john@example.com'
    }).then((response) => {
      expect(response.status).to.eq(201)
      expect(response.body).to.have.property('id')
    })
  })

  it('should intercept API calls', () => {
    cy.intercept('GET', '/api/users', { fixture: 'users.json' }).as('getUsers')
    cy.visit('/users')
    cy.wait('@getUsers')
  })
})`}</code>
        </pre>
      </div>

      <h2 className="text-2xl font-semibold mb-4">Custom Commands</h2>
      <div className="bg-white dark:bg-gray-700 p-4 rounded mb-6">
        <pre className="text-sm">
          <code>{`// cypress/support/commands.js
Cypress.Commands.add('login', (email, password) => {
  cy.session([email, password], () => {
    cy.visit('/login')
    cy.get('[data-cy="email"]').type(email)
    cy.get('[data-cy="password"]').type(password)
    cy.get('[data-cy="login-button"]').click()
    cy.url().should('not.include', '/login')
  })
})

// Usage in tests
cy.login('user@example.com', 'password123')`}</code>
        </pre>
      </div>

      <h2 className="text-2xl font-semibold mb-4">Configuration</h2>
      <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded mb-6">
        <pre className="text-sm">
          <code>{`// cypress.config.js
export default defineConfig({
  e2e: {
    baseUrl: 'http://localhost:3000',
    viewportWidth: 1280,
    viewportHeight: 720,
    video: true,
    screenshotOnRunFailure: true,
    defaultCommandTimeout: 10000,
    requestTimeout: 10000,
    responseTimeout: 10000,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
})`}</code>
        </pre>
      </div>

      <div className="bg-green-100 dark:bg-green-900 border-l-4 border-green-500 p-4 mb-6">
        <p className="font-semibold text-gray-900 dark:text-gray-100">🟩 Example:</p>
        <p className="text-gray-700 dark:text-gray-300">Cypress excels at testing modern React/Vue/Angular applications with its fast execution, automatic waiting, and browser-native testing approach.</p>
      </div>

      <h2 className="text-2xl font-semibold mb-4">CI/CD Integration</h2>
      <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded mb-6">
        <pre className="text-sm">
          <code>{`# .github/workflows/cypress.yml
name: Cypress Tests
on: [push, pull_request]
jobs:
  cypress-run:
    runs-on: ubuntu-latest
    steps:
    - uses: actions/checkout@v4
    - uses: cypress-io/github-action@v6
      with:
        build: npm run build
        start: npm start
        wait-on: 'http://localhost:3000'`}</code>
        </pre>
      </div>

      <div className="bg-yellow-100 dark:bg-yellow-900 border-l-4 border-yellow-500 p-4 mb-6">
        <p className="font-semibold text-gray-900 dark:text-gray-100">🟧 Warning:</p>
        <p className="text-gray-700 dark:text-gray-300">Cypress only supports Chromium-based browsers. For cross-browser testing, combine with other tools or use Cypress Cloud.</p>
      </div>

      <div className="bg-purple-100 dark:bg-purple-900 border-l-4 border-purple-500 p-4 mb-6">
        <p className="font-semibold text-gray-900 dark:text-gray-100">🟪 Key Tip:</p>
        <p className="text-gray-700 dark:text-gray-300">Use data-cy attributes for reliable element selection. Cypress recommends this over CSS selectors or IDs that may change.</p>
      </div>

      <h2 className="text-2xl font-semibold mb-4">Common Interview Questions</h2>
      <ul className="list-disc list-inside mb-6">
        <li>What makes Cypress different from Selenium?</li>
        <li>How does Cypress handle asynchronous operations?</li>
        <li>Explain Cypress architecture</li>
        <li>How to handle file uploads in Cypress?</li>
        <li>What are Cypress custom commands?</li>
      </ul>

      <h2 className="text-2xl font-semibold mb-4">Cypress Best Practices</h2>

      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <h3 className="text-lg font-semibold mb-3">Test Organization</h3>
          <ul className="list-disc list-inside">
            <li>Use descriptive test names</li>
            <li>Group related tests in describe blocks</li>
            <li>Use beforeEach for setup</li>
            <li>Keep tests independent</li>
            <li>Use Page Object Model</li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-3">Selector Strategy</h3>
          <ul className="list-disc list-inside">
            <li>Prefer data-cy attributes</li>
            <li>Avoid CSS selectors that change</li>
            <li>Use cy.contains() for text</li>
            <li>Chain commands effectively</li>
            <li>Test element visibility</li>
          </ul>
        </div>
      </div>
    </div>
  )
}
