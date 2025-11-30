module.exports=[93695,(a,b,c)=>{b.exports=a.x("next/dist/shared/lib/no-fallback-error.external.js",()=>require("next/dist/shared/lib/no-fallback-error.external.js"))},17745,a=>{a.n(a.i(59250))},23303,a=>{a.n(a.i(88148))},44896,a=>{a.n(a.i(74740))},46174,a=>{a.n(a.i(83216))},78190,a=>{a.n(a.i(17921))},55416,a=>{"use strict";var b=a.i(64868);function c(){return(0,b.jsxs)("div",{className:"max-w-6xl mx-auto",children:[(0,b.jsx)("h1",{className:"text-3xl font-bold mb-6",children:"Cypress"}),(0,b.jsx)("p",{className:"mb-6",children:"Cypress is a modern JavaScript-based end-to-end testing framework designed for web applications. It runs directly in the browser for fast, reliable testing."}),(0,b.jsxs)("div",{className:"bg-blue-100 dark:bg-blue-900 border-l-4 border-blue-500 p-4 mb-6",children:[(0,b.jsx)("p",{className:"font-semibold text-gray-900 dark:text-gray-100",children:"🟦 Info:"}),(0,b.jsx)("p",{className:"text-gray-700 dark:text-gray-300",children:"Cypress provides a complete testing experience with automatic waiting, real-time reloading, and powerful debugging tools built directly into the browser."})]}),(0,b.jsx)("h2",{className:"text-2xl font-semibold mb-4",children:"Setup"}),(0,b.jsx)("div",{className:"bg-gray-100 dark:bg-gray-800 p-4 rounded mb-6",children:(0,b.jsx)("pre",{className:"text-sm",children:(0,b.jsx)("code",{children:`npm install cypress --save-dev
npx cypress open  # Opens Cypress Test Runner
npx cypress run   # Runs tests headlessly`})})}),(0,b.jsx)("h2",{className:"text-2xl font-semibold mb-4",children:"Project Structure"}),(0,b.jsx)("div",{className:"bg-gray-100 dark:bg-gray-800 p-4 rounded mb-6",children:(0,b.jsx)("pre",{className:"text-sm",children:(0,b.jsx)("code",{children:`cypress/
├── fixtures/          # Test data files
├── integration/       # Test files
├── plugins/          # Plugin configuration
├── support/          # Custom commands
└── videos/           # Test recordings
cypress.json          # Configuration
package.json`})})}),(0,b.jsx)("h2",{className:"text-2xl font-semibold mb-4",children:"Basic Test Example"}),(0,b.jsx)("div",{className:"bg-white dark:bg-gray-700 p-4 rounded mb-6",children:(0,b.jsx)("pre",{className:"text-sm",children:(0,b.jsx)("code",{children:`describe('User Login', () => {
  it('should login successfully', () => {
    cy.visit('/login')
    cy.get('[data-cy="email"]').type('user@example.com')
    cy.get('[data-cy="password"]').type('password123')
    cy.get('[data-cy="login-button"]').click()
    cy.url().should('include', '/dashboard')
    cy.contains('Welcome').should('be.visible')
  })
})`})})}),(0,b.jsx)("h2",{className:"text-2xl font-semibold mb-4",children:"Key Features"}),(0,b.jsxs)("div",{className:"grid md:grid-cols-2 gap-6 mb-6",children:[(0,b.jsxs)("div",{children:[(0,b.jsx)("h3",{className:"text-lg font-semibold mb-3",children:"Automatic Waiting"}),(0,b.jsx)("p",{className:"mb-3",children:"Cypress automatically waits for commands and assertions"}),(0,b.jsx)("div",{className:"bg-green-100 dark:bg-green-900 p-3 rounded",children:(0,b.jsx)("code",{className:"text-sm",children:"cy.get('.button').click() // Waits automatically"})})]}),(0,b.jsxs)("div",{children:[(0,b.jsx)("h3",{className:"text-lg font-semibold mb-3",children:"Time Travel Debugging"}),(0,b.jsx)("p",{className:"mb-3",children:"Step back through test execution in the browser"}),(0,b.jsx)("div",{className:"bg-blue-100 dark:bg-blue-900 p-3 rounded",children:(0,b.jsx)("code",{className:"text-sm",children:"// Click through timeline to debug"})})]})]}),(0,b.jsx)("h2",{className:"text-2xl font-semibold mb-4",children:"Page Object Model"}),(0,b.jsx)("div",{className:"bg-white dark:bg-gray-700 p-4 rounded mb-6",children:(0,b.jsx)("pre",{className:"text-sm",children:(0,b.jsx)("code",{children:`// cypress/support/page-objects/LoginPage.js
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

export default LoginPage`})})}),(0,b.jsx)("h2",{className:"text-2xl font-semibold mb-4",children:"API Testing"}),(0,b.jsx)("div",{className:"bg-white dark:bg-gray-700 p-4 rounded mb-6",children:(0,b.jsx)("pre",{className:"text-sm",children:(0,b.jsx)("code",{children:`describe('API Tests', () => {
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
})`})})}),(0,b.jsx)("h2",{className:"text-2xl font-semibold mb-4",children:"Custom Commands"}),(0,b.jsx)("div",{className:"bg-white dark:bg-gray-700 p-4 rounded mb-6",children:(0,b.jsx)("pre",{className:"text-sm",children:(0,b.jsx)("code",{children:`// cypress/support/commands.js
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
cy.login('user@example.com', 'password123')`})})}),(0,b.jsx)("h2",{className:"text-2xl font-semibold mb-4",children:"Configuration"}),(0,b.jsx)("div",{className:"bg-gray-100 dark:bg-gray-800 p-4 rounded mb-6",children:(0,b.jsx)("pre",{className:"text-sm",children:(0,b.jsx)("code",{children:`// cypress.config.js
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
})`})})}),(0,b.jsxs)("div",{className:"bg-green-100 dark:bg-green-900 border-l-4 border-green-500 p-4 mb-6",children:[(0,b.jsx)("p",{className:"font-semibold text-gray-900 dark:text-gray-100",children:"🟩 Example:"}),(0,b.jsx)("p",{className:"text-gray-700 dark:text-gray-300",children:"Cypress excels at testing modern React/Vue/Angular applications with its fast execution, automatic waiting, and browser-native testing approach."})]}),(0,b.jsx)("h2",{className:"text-2xl font-semibold mb-4",children:"CI/CD Integration"}),(0,b.jsx)("div",{className:"bg-gray-100 dark:bg-gray-800 p-4 rounded mb-6",children:(0,b.jsx)("pre",{className:"text-sm",children:(0,b.jsx)("code",{children:`# .github/workflows/cypress.yml
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
        wait-on: 'http://localhost:3000'`})})}),(0,b.jsxs)("div",{className:"bg-yellow-100 dark:bg-yellow-900 border-l-4 border-yellow-500 p-4 mb-6",children:[(0,b.jsx)("p",{className:"font-semibold text-gray-900 dark:text-gray-100",children:"🟧 Warning:"}),(0,b.jsx)("p",{className:"text-gray-700 dark:text-gray-300",children:"Cypress only supports Chromium-based browsers. For cross-browser testing, combine with other tools or use Cypress Cloud."})]}),(0,b.jsxs)("div",{className:"bg-purple-100 dark:bg-purple-900 border-l-4 border-purple-500 p-4 mb-6",children:[(0,b.jsx)("p",{className:"font-semibold text-gray-900 dark:text-gray-100",children:"🟪 Key Tip:"}),(0,b.jsx)("p",{className:"text-gray-700 dark:text-gray-300",children:"Use data-cy attributes for reliable element selection. Cypress recommends this over CSS selectors or IDs that may change."})]}),(0,b.jsx)("h2",{className:"text-2xl font-semibold mb-4",children:"Common Interview Questions"}),(0,b.jsxs)("ul",{className:"list-disc list-inside mb-6",children:[(0,b.jsx)("li",{children:"What makes Cypress different from Selenium?"}),(0,b.jsx)("li",{children:"How does Cypress handle asynchronous operations?"}),(0,b.jsx)("li",{children:"Explain Cypress architecture"}),(0,b.jsx)("li",{children:"How to handle file uploads in Cypress?"}),(0,b.jsx)("li",{children:"What are Cypress custom commands?"})]}),(0,b.jsx)("h2",{className:"text-2xl font-semibold mb-4",children:"Cypress Best Practices"}),(0,b.jsxs)("div",{className:"grid md:grid-cols-2 gap-6",children:[(0,b.jsxs)("div",{children:[(0,b.jsx)("h3",{className:"text-lg font-semibold mb-3",children:"Test Organization"}),(0,b.jsxs)("ul",{className:"list-disc list-inside",children:[(0,b.jsx)("li",{children:"Use descriptive test names"}),(0,b.jsx)("li",{children:"Group related tests in describe blocks"}),(0,b.jsx)("li",{children:"Use beforeEach for setup"}),(0,b.jsx)("li",{children:"Keep tests independent"}),(0,b.jsx)("li",{children:"Use Page Object Model"})]})]}),(0,b.jsxs)("div",{children:[(0,b.jsx)("h3",{className:"text-lg font-semibold mb-3",children:"Selector Strategy"}),(0,b.jsxs)("ul",{className:"list-disc list-inside",children:[(0,b.jsx)("li",{children:"Prefer data-cy attributes"}),(0,b.jsx)("li",{children:"Avoid CSS selectors that change"}),(0,b.jsx)("li",{children:"Use cy.contains() for text"}),(0,b.jsx)("li",{children:"Chain commands effectively"}),(0,b.jsx)("li",{children:"Test element visibility"})]})]})]})]})}a.s(["default",()=>c])}];

//# sourceMappingURL=%5Broot-of-the-server%5D__127980fd._.js.map