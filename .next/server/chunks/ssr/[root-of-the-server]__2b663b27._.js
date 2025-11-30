module.exports=[93695,(a,b,c)=>{b.exports=a.x("next/dist/shared/lib/no-fallback-error.external.js",()=>require("next/dist/shared/lib/no-fallback-error.external.js"))},17745,a=>{a.n(a.i(59250))},23303,a=>{a.n(a.i(88148))},44896,a=>{a.n(a.i(74740))},46174,a=>{a.n(a.i(83216))},78190,a=>{a.n(a.i(17921))},73754,a=>{"use strict";var b=a.i(64868);function c(){return(0,b.jsxs)("div",{className:"max-w-6xl mx-auto",children:[(0,b.jsx)("h1",{className:"text-3xl font-bold mb-6",children:"Automation Testing Scenario Case Studies"}),(0,b.jsx)("p",{className:"mb-6",children:"Real-world examples of automation testing implementations across different industries, showcasing successful test automation strategies and lessons learned."}),(0,b.jsxs)("div",{className:"space-y-8",children:[(0,b.jsxs)("div",{className:"border border-gray-300 dark:border-gray-600 rounded-lg p-6",children:[(0,b.jsx)("h2",{className:"text-2xl font-semibold mb-3 text-blue-600 dark:text-blue-400",children:"Case Study 1: Curio Web Application Automation"}),(0,b.jsxs)("div",{className:"bg-blue-100 dark:bg-blue-900 border-l-4 border-blue-500 p-4 mb-4",children:[(0,b.jsx)("p",{className:"font-semibold text-gray-900 dark:text-gray-100",children:"🟦 Context:"}),(0,b.jsx)("p",{className:"text-gray-700 dark:text-gray-300",children:"At Curio, I automated their web testing and developed QA processes, including regression and smoke test suites using Cypress and TypeScript. The application required comprehensive test automation for reliable deployments."})]}),(0,b.jsx)("h3",{className:"text-xl font-semibold mb-2",children:"Automation Strategy:"}),(0,b.jsxs)("ul",{className:"list-disc list-inside mb-4",children:[(0,b.jsx)("li",{children:"Implemented Cypress with TypeScript for web automation"}),(0,b.jsx)("li",{children:"Created regression and smoke test suites"}),(0,b.jsx)("li",{children:"Automated Stripe payment testing"}),(0,b.jsx)("li",{children:"Integrated with CI/CD pipeline"})]}),(0,b.jsx)("h3",{className:"text-xl font-semibold mb-2",children:"Implementation Details:"}),(0,b.jsx)("pre",{className:"bg-gray-100 dark:bg-gray-800 p-4 rounded mb-4",children:(0,b.jsx)("code",{children:`// Cypress Stripe Payment Test
describe('Payment Processing', () => {
  it('should process payment successfully', () => {
    cy.visit('/checkout');
    cy.get('[data-cy="card-number"]').type('4242424242424242');
    cy.get('[data-cy="expiry"]').type('1225');
    cy.get('[data-cy="cvc"]').type('123');
    cy.get('[data-cy="pay-button"]').click();
    cy.contains('Payment successful').should('be.visible');
  });
});`})}),(0,b.jsx)("h3",{className:"text-xl font-semibold mb-2",children:"Key Challenges:"}),(0,b.jsxs)("ul",{className:"list-disc list-inside mb-4",children:[(0,b.jsx)("li",{children:"Handling asynchronous Stripe payment processing"}),(0,b.jsx)("li",{children:"Test data management for payment scenarios"}),(0,b.jsx)("li",{children:"Cross-browser compatibility with payment forms"}),(0,b.jsx)("li",{children:"Integration with external payment APIs"})]}),(0,b.jsxs)("div",{className:"bg-green-100 dark:bg-green-900 border-l-4 border-green-500 p-4 mb-4",children:[(0,b.jsx)("p",{className:"font-semibold text-gray-900 dark:text-gray-100",children:"🟩 Results:"}),(0,b.jsx)("p",{className:"text-gray-700 dark:text-gray-300",children:"Payment processing reliability improved to 99.9%. Regression testing time reduced from 2 days to 4 hours. Customer support tickets for payment issues decreased by 70%."})]}),(0,b.jsxs)("div",{className:"bg-purple-100 dark:bg-purple-900 border-l-4 border-purple-500 p-4",children:[(0,b.jsx)("p",{className:"font-semibold text-gray-900 dark:text-gray-100",children:"🟪 Lessons Learned:"}),(0,b.jsx)("p",{className:"text-gray-700 dark:text-gray-300",children:"Payment integrations require specialized testing approaches. Cypress provides excellent tools for testing complex user interactions and external API integrations."})]})]}),(0,b.jsxs)("div",{className:"border border-gray-300 dark:border-gray-600 rounded-lg p-6",children:[(0,b.jsx)("h2",{className:"text-2xl font-semibold mb-3 text-blue-600 dark:text-blue-400",children:"Case Study 2: Stadion Mobile App with Maestro"}),(0,b.jsxs)("div",{className:"bg-blue-100 dark:bg-blue-900 border-l-4 border-blue-500 p-4 mb-4",children:[(0,b.jsx)("p",{className:"font-semibold text-gray-900 dark:text-gray-100",children:"🟦 Context:"}),(0,b.jsx)("p",{className:"text-gray-700 dark:text-gray-300",children:"At Stadion, I developed high-level automation test scripts using Maestro for mobile applications. The project required maintainable automation aligned with product needs and fast-paced development cycles."})]}),(0,b.jsx)("h3",{className:"text-xl font-semibold mb-2",children:"Automation Approach:"}),(0,b.jsxs)("ul",{className:"list-disc list-inside mb-4",children:[(0,b.jsx)("li",{children:"Implemented Maestro for mobile UI automation"}),(0,b.jsx)("li",{children:"Created YAML-based test flows for maintainability"}),(0,b.jsx)("li",{children:"Integrated with GitHub Actions CI/CD pipeline"}),(0,b.jsx)("li",{children:"Automated regression testing for mobile features"})]}),(0,b.jsx)("h3",{className:"text-xl font-semibold mb-2",children:"Maestro Implementation:"}),(0,b.jsx)("pre",{className:"bg-gray-100 dark:bg-gray-800 p-4 rounded mb-4",children:(0,b.jsx)("code",{children:`# Maestro test flow for login
appId: com.stadion.app
---
- launchApp
- tapOn: "Login"
- inputText: "user@example.com"
- tapOn: "Password"
- inputText: "password123"
- tapOn: "Sign In"
- assertVisible: "Welcome back"
---
- scroll
- tapOn: "Profile"
- assertVisible: "John Doe"`})}),(0,b.jsx)("h3",{className:"text-xl font-semibold mb-2",children:"CI/CD Integration:"}),(0,b.jsxs)("ul",{className:"list-disc list-inside mb-4",children:[(0,b.jsx)("li",{children:"Automated test execution on PR merges"}),(0,b.jsx)("li",{children:"Slack notifications for test results"}),(0,b.jsx)("li",{children:"GitHub Pages integration for test reports"}),(0,b.jsx)("li",{children:"Parallel test execution across devices"})]}),(0,b.jsxs)("div",{className:"bg-green-100 dark:bg-green-900 border-l-4 border-green-500 p-4 mb-4",children:[(0,b.jsx)("p",{className:"font-semibold text-gray-900 dark:text-gray-100",children:"🟩 Results:"}),(0,b.jsx)("p",{className:"text-gray-700 dark:text-gray-300",children:"Mobile testing efficiency improved by 60%. Release confidence increased with automated regression coverage. Team productivity enhanced through streamlined QA processes."})]}),(0,b.jsxs)("div",{className:"bg-purple-100 dark:bg-purple-900 border-l-4 border-purple-500 p-4",children:[(0,b.jsx)("p",{className:"font-semibold text-gray-900 dark:text-gray-100",children:"🟪 Lessons Learned:"}),(0,b.jsx)("p",{className:"text-gray-700 dark:text-gray-300",children:"Maestro provides excellent mobile automation capabilities with simple YAML syntax. Integration with CI/CD pipelines ensures continuous quality validation in fast-paced environments."})]})]}),(0,b.jsxs)("div",{className:"border border-gray-300 dark:border-gray-600 rounded-lg p-6",children:[(0,b.jsx)("h2",{className:"text-2xl font-semibold mb-3 text-blue-600 dark:text-blue-400",children:"Case Study 3: Elsewhen Security Testing with Okta"}),(0,b.jsxs)("div",{className:"bg-blue-100 dark:bg-blue-900 border-l-4 border-blue-500 p-4 mb-4",children:[(0,b.jsx)("p",{className:"font-semibold text-gray-900 dark:text-gray-100",children:"🟦 Context:"}),(0,b.jsx)("p",{className:"text-gray-700 dark:text-gray-300",children:"At Elsewhen, I ensured that all automation scripts were configured with OKTA authentication single sign-in. This involved complex security testing with OKTA authentication API using access tokens in Cypress and Playwright."})]}),(0,b.jsx)("h3",{className:"text-xl font-semibold mb-2",children:"Security Automation Approach:"}),(0,b.jsxs)("ul",{className:"list-disc list-inside mb-4",children:[(0,b.jsx)("li",{children:"OKTA SSO integration testing with Cypress"}),(0,b.jsx)("li",{children:"Access token management and validation"}),(0,b.jsx)("li",{children:"Custom commands for authentication flows"}),(0,b.jsx)("li",{children:"Security testing for positive and negative scenarios"})]}),(0,b.jsx)("h3",{className:"text-xl font-semibold mb-2",children:"Cypress OKTA Implementation:"}),(0,b.jsx)("pre",{className:"bg-gray-100 dark:bg-gray-800 p-4 rounded mb-4",children:(0,b.jsx)("code",{children:`// cypress/support/commands.js
Cypress.Commands.add('loginByOktaApi', (username, password) => {
  cy.request({
    method: 'POST',
    url: Cypress.env('okta_token_url'),
    form: true,
    body: {
      grant_type: 'password',
      username: username,
      password: password,
      scope: 'openid profile'
    }
  }).then((response) => {
    window.localStorage.setItem('access_token', response.body.access_token);
  });
});

// Usage in tests
cy.loginByOktaApi('user@example.com', 'password');
cy.visit('/dashboard');
cy.contains('Welcome').should('be.visible');`})}),(0,b.jsx)("h3",{className:"text-xl font-semibold mb-2",children:"Security Testing Focus:"}),(0,b.jsxs)("ul",{className:"list-disc list-inside mb-4",children:[(0,b.jsx)("li",{children:"Token expiration and refresh handling"}),(0,b.jsx)("li",{children:"Unauthorized access prevention"}),(0,b.jsx)("li",{children:"Session management validation"}),(0,b.jsx)("li",{children:"Multi-factor authentication flows"})]}),(0,b.jsxs)("div",{className:"bg-green-100 dark:bg-green-900 border-l-4 border-green-500 p-4 mb-4",children:[(0,b.jsx)("p",{className:"font-semibold text-gray-900 dark:text-gray-100",children:"🟩 Results:"}),(0,b.jsx)("p",{className:"text-gray-700 dark:text-gray-300",children:"Authentication reliability improved to 99.9%. Security vulnerabilities reduced by 85%. CI/CD pipeline security validation automated and consistent."})]}),(0,b.jsxs)("div",{className:"bg-purple-100 dark:bg-purple-900 border-l-4 border-purple-500 p-4",children:[(0,b.jsx)("p",{className:"font-semibold text-gray-900 dark:text-gray-100",children:"🟪 Lessons Learned:"}),(0,b.jsx)("p",{className:"text-gray-700 dark:text-gray-300",children:"Security testing requires specialized knowledge of authentication protocols. OKTA integration testing demands careful handling of tokens and session management."})]})]}),(0,b.jsxs)("div",{className:"border border-gray-300 dark:border-gray-600 rounded-lg p-6",children:[(0,b.jsx)("h2",{className:"text-2xl font-semibold mb-3 text-blue-600 dark:text-blue-400",children:"Case Study 4: CI/CD Pipeline Integration"}),(0,b.jsxs)("div",{className:"bg-blue-100 dark:bg-blue-900 border-l-4 border-blue-500 p-4 mb-4",children:[(0,b.jsx)("p",{className:"font-semibold text-gray-900 dark:text-gray-100",children:"🟦 Context:"}),(0,b.jsx)("p",{className:"text-gray-700 dark:text-gray-300",children:"A SaaS company needed to integrate automated testing into their deployment pipeline to prevent production bugs and reduce manual QA bottlenecks."})]}),(0,b.jsx)("h3",{className:"text-xl font-semibold mb-2",children:"CI/CD Integration:"}),(0,b.jsxs)("ul",{className:"list-disc list-inside mb-4",children:[(0,b.jsx)("li",{children:"Jenkins pipeline with parallel test execution"}),(0,b.jsx)("li",{children:"Docker containers for test environments"}),(0,b.jsx)("li",{children:"Test result reporting and notifications"}),(0,b.jsx)("li",{children:"Automated deployment gates"})]}),(0,b.jsx)("h3",{className:"text-xl font-semibold mb-2",children:"Jenkins Pipeline Example:"}),(0,b.jsx)("pre",{className:"bg-gray-100 dark:bg-gray-800 p-4 rounded mb-4",children:(0,b.jsx)("code",{children:`pipeline {
    agent any
    stages {
        stage('Test') {
            parallel {
                stage('Unit Tests') {
                    steps {
                        sh 'mvn test'
                    }
                }
                stage('API Tests') {
                    steps {
                        sh 'mvn test -Dtest=ApiTestSuite'
                    }
                }
                stage('UI Tests') {
                    steps {
                        sh 'mvn test -Dtest=UITestSuite'
                    }
                }
            }
        }
    }
}`})}),(0,b.jsx)("h3",{className:"text-xl font-semibold mb-2",children:"Quality Gates:"}),(0,b.jsxs)("ul",{className:"list-disc list-inside mb-4",children:[(0,b.jsx)("li",{children:"Test coverage minimum 80%"}),(0,b.jsx)("li",{children:"No critical security vulnerabilities"}),(0,b.jsx)("li",{children:"Performance benchmarks met"}),(0,b.jsx)("li",{children:"Manual approval for production deployment"})]}),(0,b.jsxs)("div",{className:"bg-green-100 dark:bg-green-900 border-l-4 border-green-500 p-4 mb-4",children:[(0,b.jsx)("p",{className:"font-semibold text-gray-900 dark:text-gray-100",children:"🟩 Results:"}),(0,b.jsx)("p",{className:"text-gray-700 dark:text-gray-300",children:"Production bugs reduced by 75%. Deployment frequency increased from weekly to multiple times daily. Time-to-market improved by 60%."})]}),(0,b.jsxs)("div",{className:"bg-purple-100 dark:bg-purple-900 border-l-4 border-purple-500 p-4",children:[(0,b.jsx)("p",{className:"font-semibold text-gray-900 dark:text-gray-100",children:"🟪 Lessons Learned:"}),(0,b.jsx)("p",{className:"text-gray-700 dark:text-gray-300",children:"CI/CD integration requires careful test parallelization and environment management. Quality gates prevent bad deployments but must be balanced with deployment speed."})]})]}),(0,b.jsxs)("div",{className:"border border-gray-300 dark:border-gray-600 rounded-lg p-6",children:[(0,b.jsx)("h2",{className:"text-2xl font-semibold mb-3 text-blue-600 dark:text-blue-400",children:"Case Study 5: Test Data Management"}),(0,b.jsxs)("div",{className:"bg-blue-100 dark:bg-blue-900 border-l-4 border-blue-500 p-4 mb-4",children:[(0,b.jsx)("p",{className:"font-semibold text-gray-900 dark:text-gray-100",children:"🟦 Context:"}),(0,b.jsx)("p",{className:"text-gray-700 dark:text-gray-300",children:"A healthcare application had complex test data requirements with HIPAA compliance needs. Test data management was causing test failures and maintenance overhead."})]}),(0,b.jsx)("h3",{className:"text-xl font-semibold mb-2",children:"Data Management Strategy:"}),(0,b.jsxs)("ul",{className:"list-disc list-inside mb-4",children:[(0,b.jsx)("li",{children:"Test data factories for consistent data creation"}),(0,b.jsx)("li",{children:"Database seeding with synthetic data"}),(0,b.jsx)("li",{children:"Data cleanup and isolation between tests"}),(0,b.jsx)("li",{children:"Compliance with data privacy regulations"})]}),(0,b.jsx)("h3",{className:"text-xl font-semibold mb-2",children:"Test Data Factory:"}),(0,b.jsx)("pre",{className:"bg-gray-100 dark:bg-gray-800 p-4 rounded mb-4",children:(0,b.jsx)("code",{children:`public class PatientDataFactory {
    public static Patient createValidPatient() {
        return Patient.builder()
            .firstName("John")
            .lastName("Doe")
            .dateOfBirth(LocalDate.of(1980, 1, 1))
            .medicalRecordNumber("MRN123456")
            .build();
    }

    public static Patient createPatientWithAllergies() {
        Patient patient = createValidPatient();
        patient.addAllergy(new Allergy("Penicillin", Severity.HIGH));
        return patient;
    }
}`})}),(0,b.jsx)("h3",{className:"text-xl font-semibold mb-2",children:"Data Compliance:"}),(0,b.jsxs)("ul",{className:"list-disc list-inside mb-4",children:[(0,b.jsx)("li",{children:"PHI data anonymization"}),(0,b.jsx)("li",{children:"Test environment data isolation"}),(0,b.jsx)("li",{children:"Automated data cleanup"}),(0,b.jsx)("li",{children:"Audit trails for data access"})]}),(0,b.jsxs)("div",{className:"bg-green-100 dark:bg-green-900 border-l-4 border-green-500 p-4 mb-4",children:[(0,b.jsx)("p",{className:"font-semibold text-gray-900 dark:text-gray-100",children:"🟩 Results:"}),(0,b.jsx)("p",{className:"text-gray-700 dark:text-gray-300",children:"Test data management time reduced by 70%. Test stability improved from 85% to 98%. HIPAA compliance maintained throughout testing."})]}),(0,b.jsxs)("div",{className:"bg-purple-100 dark:bg-purple-900 border-l-4 border-purple-500 p-4",children:[(0,b.jsx)("p",{className:"font-semibold text-gray-900 dark:text-gray-100",children:"🟪 Lessons Learned:"}),(0,b.jsx)("p",{className:"text-gray-700 dark:text-gray-300",children:"Test data management is critical for complex applications. Data factories and proper cleanup prevent test interference and compliance issues."})]})]})]})]})}a.s(["default",()=>c])}];

//# sourceMappingURL=%5Broot-of-the-server%5D__2b663b27._.js.map