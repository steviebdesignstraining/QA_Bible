module.exports=[93695,(a,b,c)=>{b.exports=a.x("next/dist/shared/lib/no-fallback-error.external.js",()=>require("next/dist/shared/lib/no-fallback-error.external.js"))},17745,a=>{a.n(a.i(59250))},23303,a=>{a.n(a.i(88148))},44896,a=>{a.n(a.i(74740))},46174,a=>{a.n(a.i(83216))},78190,a=>{a.n(a.i(17921))},24251,a=>{"use strict";var b=a.i(64868);function c(){return(0,b.jsxs)("div",{className:"max-w-6xl mx-auto",children:[(0,b.jsx)("h1",{className:"text-3xl font-bold mb-6",children:"API Testing Scenario Case Studies"}),(0,b.jsx)("p",{className:"mb-6",children:"Real-world examples of API testing implementations, showcasing backend validation strategies, integration testing approaches, and API reliability improvements."}),(0,b.jsxs)("div",{className:"space-y-8",children:[(0,b.jsxs)("div",{className:"border border-gray-300 dark:border-gray-600 rounded-lg p-6",children:[(0,b.jsx)("h2",{className:"text-2xl font-semibold mb-3 text-blue-600 dark:text-blue-400",children:"Case Study 1: Elsewhen OKTA API Integration Testing"}),(0,b.jsxs)("div",{className:"bg-blue-100 dark:bg-blue-900 border-l-4 border-blue-500 p-4 mb-4",children:[(0,b.jsx)("p",{className:"font-semibold text-gray-900 dark:text-gray-100",children:"🟦 Context:"}),(0,b.jsx)("p",{className:"text-gray-700 dark:text-gray-300",children:"At Elsewhen, I tested complex OKTA authentication API integration. All automation scripts needed OKTA single sign-in with access token management for programmatic login."})]}),(0,b.jsx)("h3",{className:"text-xl font-semibold mb-2",children:"API Testing Strategy:"}),(0,b.jsxs)("ul",{className:"list-disc list-inside mb-4",children:[(0,b.jsx)("li",{children:"OKTA API endpoint validation"}),(0,b.jsx)("li",{children:"Access token lifecycle testing"}),(0,b.jsx)("li",{children:"Authentication flow automation"}),(0,b.jsx)("li",{children:"Security testing integration"})]}),(0,b.jsx)("h3",{className:"text-xl font-semibold mb-2",children:"API Test Implementation:"}),(0,b.jsx)("pre",{className:"bg-gray-100 dark:bg-gray-800 p-4 rounded mb-4",children:(0,b.jsx)("code",{children:`// OKTA API Testing with Cypress
describe('OKTA Authentication API', () => {
  it('should authenticate user and return valid token', () => {
    cy.request({
      method: 'POST',
      url: Cypress.env('okta_token_url'),
      form: true,
      body: {
        grant_type: 'password',
        username: Cypress.env('test_user'),
        password: Cypress.env('test_password'),
        scope: 'openid profile'
      }
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.have.property('access_token');
      expect(response.body.token_type).to.eq('Bearer');
      cy.wrap(response.body.access_token).as('accessToken');
    });
  });
});`})}),(0,b.jsxs)("div",{className:"bg-green-100 dark:bg-green-900 border-l-4 border-green-500 p-4 mb-4",children:[(0,b.jsx)("p",{className:"font-semibold text-gray-900 dark:text-gray-100",children:"🟩 Results:"}),(0,b.jsx)("p",{className:"text-gray-700 dark:text-gray-300",children:"Authentication reliability improved to 99.9%. Security vulnerabilities reduced by 85%. CI/CD pipeline security validation automated."})]}),(0,b.jsxs)("div",{className:"bg-purple-100 dark:bg-purple-900 border-l-4 border-purple-500 p-4",children:[(0,b.jsx)("p",{className:"font-semibold text-gray-900 dark:text-gray-100",children:"🟪 Lessons Learned:"}),(0,b.jsx)("p",{className:"text-gray-700 dark:text-gray-300",children:"API security testing requires deep understanding of authentication protocols. Token management is critical for reliable API testing."})]})]}),(0,b.jsxs)("div",{className:"border border-gray-300 dark:border-gray-600 rounded-lg p-6",children:[(0,b.jsx)("h2",{className:"text-2xl font-semibold mb-3 text-blue-600 dark:text-blue-400",children:"Case Study 2: Kubrick Group API Collection Automation"}),(0,b.jsxs)("div",{className:"bg-blue-100 dark:bg-blue-900 border-l-4 border-blue-500 p-4 mb-4",children:[(0,b.jsx)("p",{className:"font-semibold text-gray-900 dark:text-gray-100",children:"🟦 Context:"}),(0,b.jsx)("p",{className:"text-gray-700 dark:text-gray-300",children:"At Kubrick Group, I automated API collections and created comprehensive test suites. The focus was on building robust API testing frameworks from scratch."})]}),(0,b.jsx)("h3",{className:"text-xl font-semibold mb-2",children:"API Automation Framework:"}),(0,b.jsxs)("ul",{className:"list-disc list-inside mb-4",children:[(0,b.jsx)("li",{children:"Postman collection automation"}),(0,b.jsx)("li",{children:"Newman integration for CI/CD"}),(0,b.jsx)("li",{children:"API contract testing"}),(0,b.jsx)("li",{children:"Data-driven API testing"})]}),(0,b.jsx)("h3",{className:"text-xl font-semibold mb-2",children:"Postman/Newman Implementation:"}),(0,b.jsx)("pre",{className:"bg-gray-100 dark:bg-gray-800 p-4 rounded mb-4",children:(0,b.jsx)("code",{children:`// Postman test scripts
pm.test("Status code is 200", function () {
    pm.response.to.have.status(200);
});

pm.test("Response has required fields", function () {
    const jsonData = pm.response.json();
    pm.expect(jsonData).to.have.property('id');
    pm.expect(jsonData).to.have.property('name');
});

// Newman CLI execution
newman run collection.json \\
  --environment environment.json \\
  --reporters cli,json \\
  --reporter-json-export results.json`})}),(0,b.jsxs)("div",{className:"bg-green-100 dark:bg-green-900 border-l-4 border-green-500 p-4 mb-4",children:[(0,b.jsx)("p",{className:"font-semibold text-gray-900 dark:text-gray-100",children:"🟩 Results:"}),(0,b.jsx)("p",{className:"text-gray-700 dark:text-gray-300",children:"API testing coverage increased from 40% to 85%. Regression testing time reduced by 70%. API reliability improved significantly."})]}),(0,b.jsxs)("div",{className:"bg-purple-100 dark:bg-purple-900 border-l-4 border-purple-500 p-4",children:[(0,b.jsx)("p",{className:"font-semibold text-gray-900 dark:text-gray-100",children:"🟪 Lessons Learned:"}),(0,b.jsx)("p",{className:"text-gray-700 dark:text-gray-300",children:"Building API testing frameworks from scratch requires careful planning. Newman provides excellent CI/CD integration for API testing."})]})]}),(0,b.jsxs)("div",{className:"border border-gray-300 dark:border-gray-600 rounded-lg p-6",children:[(0,b.jsx)("h2",{className:"text-2xl font-semibold mb-3 text-blue-600 dark:text-blue-400",children:"Case Study 3: Curio Stripe Payment API Testing"}),(0,b.jsxs)("div",{className:"bg-blue-100 dark:bg-blue-900 border-l-4 border-blue-500 p-4 mb-4",children:[(0,b.jsx)("p",{className:"font-semibold text-gray-900 dark:text-gray-100",children:"🟦 Context:"}),(0,b.jsx)("p",{className:"text-gray-700 dark:text-gray-300",children:"At Curio, I tested Stripe payment integrations extensively. The application required robust payment processing validation and webhook testing."})]}),(0,b.jsx)("h3",{className:"text-xl font-semibold mb-2",children:"Payment API Testing:"}),(0,b.jsxs)("ul",{className:"list-disc list-inside mb-4",children:[(0,b.jsx)("li",{children:"Stripe API endpoint testing"}),(0,b.jsx)("li",{children:"Webhook validation"}),(0,b.jsx)("li",{children:"Payment flow automation"}),(0,b.jsx)("li",{children:"Error handling verification"})]}),(0,b.jsx)("h3",{className:"text-xl font-semibold mb-2",children:"Stripe API Testing:"}),(0,b.jsx)("pre",{className:"bg-gray-100 dark:bg-gray-800 p-4 rounded mb-4",children:(0,b.jsx)("code",{children:`// Stripe API testing with Cypress
describe('Stripe Payment Processing', () => {
  it('should create payment intent successfully', () => {
    cy.request({
      method: 'POST',
      url: '/api/create-payment-intent',
      body: {
        amount: 1000,
        currency: 'usd',
        payment_method_types: ['card']
      }
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.have.property('client_secret');
    });
  });
});`})}),(0,b.jsxs)("div",{className:"bg-green-100 dark:bg-green-900 border-l-4 border-green-500 p-4 mb-4",children:[(0,b.jsx)("p",{className:"font-semibold text-gray-900 dark:text-gray-100",children:"🟩 Results:"}),(0,b.jsx)("p",{className:"text-gray-700 dark:text-gray-300",children:"Payment processing reliability improved to 99.9%. Customer support tickets for payment issues decreased by 70%."})]}),(0,b.jsxs)("div",{className:"bg-purple-100 dark:bg-purple-900 border-l-4 border-purple-500 p-4",children:[(0,b.jsx)("p",{className:"font-semibold text-gray-900 dark:text-gray-100",children:"🟪 Lessons Learned:"}),(0,b.jsx)("p",{className:"text-gray-700 dark:text-gray-300",children:"Payment API testing requires specialized knowledge of financial protocols. Webhook testing is crucial for real-time payment processing."})]})]})]})]})}a.s(["default",()=>c])}];

//# sourceMappingURL=%5Broot-of-the-server%5D__85bb1925._.js.map