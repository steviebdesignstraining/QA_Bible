export default function Page() {
  return (
    <div className="max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Automation Testing Scenario Case Studies</h1>

      <p className="mb-6">
        Real-world examples of automation testing implementations across different industries, showcasing successful test automation strategies and lessons learned.
      </p>

      <div className="space-y-8">
        {/* Case Study 1 */}
        <div className="border border-gray-300 dark:border-gray-600 rounded-lg p-6">
          <h2 className="text-2xl font-semibold mb-3 text-blue-600 dark:text-blue-400">Case Study 1: Curio Web Application Automation</h2>
          <div className="bg-blue-100 dark:bg-blue-900 border-l-4 border-blue-500 p-4 mb-4">
            <p className="font-semibold text-gray-900 dark:text-gray-100">🟦 Context:</p>
            <p className="text-gray-700 dark:text-gray-300">At Curio, I automated their web testing and developed QA processes, including regression and smoke test suites using Cypress and TypeScript. The application required comprehensive test automation for reliable deployments.</p>
          </div>

          <h3 className="text-xl font-semibold mb-2">Automation Strategy:</h3>
          <ul className="list-disc list-inside mb-4">
            <li>Implemented Cypress with TypeScript for web automation</li>
            <li>Created regression and smoke test suites</li>
            <li>Automated Stripe payment testing</li>
            <li>Integrated with CI/CD pipeline</li>
          </ul>

          <h3 className="text-xl font-semibold mb-2">Implementation Details:</h3>
          <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded mb-4">
            <code>{`// Cypress Stripe Payment Test
describe('Payment Processing', () => {
  it('should process payment successfully', () => {
    cy.visit('/checkout');
    cy.get('[data-cy="card-number"]').type('4242424242424242');
    cy.get('[data-cy="expiry"]').type('1225');
    cy.get('[data-cy="cvc"]').type('123');
    cy.get('[data-cy="pay-button"]').click();
    cy.contains('Payment successful').should('be.visible');
  });
});`}</code>
          </pre>

          <h3 className="text-xl font-semibold mb-2">Key Challenges:</h3>
          <ul className="list-disc list-inside mb-4">
            <li>Handling asynchronous Stripe payment processing</li>
            <li>Test data management for payment scenarios</li>
            <li>Cross-browser compatibility with payment forms</li>
            <li>Integration with external payment APIs</li>
          </ul>

          <div className="bg-green-100 dark:bg-green-900 border-l-4 border-green-500 p-4 mb-4">
            <p className="font-semibold text-gray-900 dark:text-gray-100">🟩 Results:</p>
            <p className="text-gray-700 dark:text-gray-300">Payment processing reliability improved to 99.9%. Regression testing time reduced from 2 days to 4 hours. Customer support tickets for payment issues decreased by 70%.</p>
          </div>

          <div className="bg-purple-100 dark:bg-purple-900 border-l-4 border-purple-500 p-4">
            <p className="font-semibold text-gray-900 dark:text-gray-100">🟪 Lessons Learned:</p>
            <p className="text-gray-700 dark:text-gray-300">Payment integrations require specialized testing approaches. Cypress provides excellent tools for testing complex user interactions and external API integrations.</p>
          </div>
        </div>

        {/* Case Study 2 */}
        <div className="border border-gray-300 dark:border-gray-600 rounded-lg p-6">
          <h2 className="text-2xl font-semibold mb-3 text-blue-600 dark:text-blue-400">Case Study 2: Stadion Mobile App with Maestro</h2>
          <div className="bg-blue-100 dark:bg-blue-900 border-l-4 border-blue-500 p-4 mb-4">
            <p className="font-semibold text-gray-900 dark:text-gray-100">🟦 Context:</p>
            <p className="text-gray-700 dark:text-gray-300">At Stadion, I developed high-level automation test scripts using Maestro for mobile applications. The project required maintainable automation aligned with product needs and fast-paced development cycles.</p>
          </div>

          <h3 className="text-xl font-semibold mb-2">Automation Approach:</h3>
          <ul className="list-disc list-inside mb-4">
            <li>Implemented Maestro for mobile UI automation</li>
            <li>Created YAML-based test flows for maintainability</li>
            <li>Integrated with GitHub Actions CI/CD pipeline</li>
            <li>Automated regression testing for mobile features</li>
          </ul>

          <h3 className="text-xl font-semibold mb-2">Maestro Implementation:</h3>
          <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded mb-4">
            <code>{`# Maestro test flow for login
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
- assertVisible: "John Doe"`}</code>
          </pre>

          <h3 className="text-xl font-semibold mb-2">CI/CD Integration:</h3>
          <ul className="list-disc list-inside mb-4">
            <li>Automated test execution on PR merges</li>
            <li>Slack notifications for test results</li>
            <li>GitHub Pages integration for test reports</li>
            <li>Parallel test execution across devices</li>
          </ul>

          <div className="bg-green-100 dark:bg-green-900 border-l-4 border-green-500 p-4 mb-4">
            <p className="font-semibold text-gray-900 dark:text-gray-100">🟩 Results:</p>
            <p className="text-gray-700 dark:text-gray-300">Mobile testing efficiency improved by 60%. Release confidence increased with automated regression coverage. Team productivity enhanced through streamlined QA processes.</p>
          </div>

          <div className="bg-purple-100 dark:bg-purple-900 border-l-4 border-purple-500 p-4">
            <p className="font-semibold text-gray-900 dark:text-gray-100">🟪 Lessons Learned:</p>
            <p className="text-gray-700 dark:text-gray-300">Maestro provides excellent mobile automation capabilities with simple YAML syntax. Integration with CI/CD pipelines ensures continuous quality validation in fast-paced environments.</p>
          </div>
        </div>

        {/* Case Study 3 */}
        <div className="border border-gray-300 dark:border-gray-600 rounded-lg p-6">
          <h2 className="text-2xl font-semibold mb-3 text-blue-600 dark:text-blue-400">Case Study 3: Elsewhen Security Testing with Okta</h2>
          <div className="bg-blue-100 dark:bg-blue-900 border-l-4 border-blue-500 p-4 mb-4">
            <p className="font-semibold text-gray-900 dark:text-gray-100">🟦 Context:</p>
            <p className="text-gray-700 dark:text-gray-300">At Elsewhen, I ensured that all automation scripts were configured with OKTA authentication single sign-in. This involved complex security testing with OKTA authentication API using access tokens in Cypress and Playwright.</p>
          </div>

          <h3 className="text-xl font-semibold mb-2">Security Automation Approach:</h3>
          <ul className="list-disc list-inside mb-4">
            <li>OKTA SSO integration testing with Cypress</li>
            <li>Access token management and validation</li>
            <li>Custom commands for authentication flows</li>
            <li>Security testing for positive and negative scenarios</li>
          </ul>

          <h3 className="text-xl font-semibold mb-2">Cypress OKTA Implementation:</h3>
          <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded mb-4">
            <code>{`// cypress/support/commands.js
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
cy.contains('Welcome').should('be.visible');`}</code>
          </pre>

          <h3 className="text-xl font-semibold mb-2">Security Testing Focus:</h3>
          <ul className="list-disc list-inside mb-4">
            <li>Token expiration and refresh handling</li>
            <li>Unauthorized access prevention</li>
            <li>Session management validation</li>
            <li>Multi-factor authentication flows</li>
          </ul>

          <div className="bg-green-100 dark:bg-green-900 border-l-4 border-green-500 p-4 mb-4">
            <p className="font-semibold text-gray-900 dark:text-gray-100">🟩 Results:</p>
            <p className="text-gray-700 dark:text-gray-300">Authentication reliability improved to 99.9%. Security vulnerabilities reduced by 85%. CI/CD pipeline security validation automated and consistent.</p>
          </div>

          <div className="bg-purple-100 dark:bg-purple-900 border-l-4 border-purple-500 p-4">
            <p className="font-semibold text-gray-900 dark:text-gray-100">🟪 Lessons Learned:</p>
            <p className="text-gray-700 dark:text-gray-300">Security testing requires specialized knowledge of authentication protocols. OKTA integration testing demands careful handling of tokens and session management.</p>
          </div>
        </div>

        {/* Case Study 4 */}
        <div className="border border-gray-300 dark:border-gray-600 rounded-lg p-6">
          <h2 className="text-2xl font-semibold mb-3 text-blue-600 dark:text-blue-400">Case Study 4: CI/CD Pipeline Integration</h2>
          <div className="bg-blue-100 dark:bg-blue-900 border-l-4 border-blue-500 p-4 mb-4">
            <p className="font-semibold text-gray-900 dark:text-gray-100">🟦 Context:</p>
            <p className="text-gray-700 dark:text-gray-300">A SaaS company needed to integrate automated testing into their deployment pipeline to prevent production bugs and reduce manual QA bottlenecks.</p>
          </div>

          <h3 className="text-xl font-semibold mb-2">CI/CD Integration:</h3>
          <ul className="list-disc list-inside mb-4">
            <li>Jenkins pipeline with parallel test execution</li>
            <li>Docker containers for test environments</li>
            <li>Test result reporting and notifications</li>
            <li>Automated deployment gates</li>
          </ul>

          <h3 className="text-xl font-semibold mb-2">Jenkins Pipeline Example:</h3>
          <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded mb-4">
            <code>{`pipeline {
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
}`}</code>
          </pre>

          <h3 className="text-xl font-semibold mb-2">Quality Gates:</h3>
          <ul className="list-disc list-inside mb-4">
            <li>Test coverage minimum 80%</li>
            <li>No critical security vulnerabilities</li>
            <li>Performance benchmarks met</li>
            <li>Manual approval for production deployment</li>
          </ul>

          <div className="bg-green-100 dark:bg-green-900 border-l-4 border-green-500 p-4 mb-4">
            <p className="font-semibold text-gray-900 dark:text-gray-100">🟩 Results:</p>
            <p className="text-gray-700 dark:text-gray-300">Production bugs reduced by 75%. Deployment frequency increased from weekly to multiple times daily. Time-to-market improved by 60%.</p>
          </div>

          <div className="bg-purple-100 dark:bg-purple-900 border-l-4 border-purple-500 p-4">
            <p className="font-semibold text-gray-900 dark:text-gray-100">🟪 Lessons Learned:</p>
            <p className="text-gray-700 dark:text-gray-300">CI/CD integration requires careful test parallelization and environment management. Quality gates prevent bad deployments but must be balanced with deployment speed.</p>
          </div>
        </div>

        {/* Case Study 5 */}
        <div className="border border-gray-300 dark:border-gray-600 rounded-lg p-6">
          <h2 className="text-2xl font-semibold mb-3 text-blue-600 dark:text-blue-400">Case Study 5: Test Data Management</h2>
          <div className="bg-blue-100 dark:bg-blue-900 border-l-4 border-blue-500 p-4 mb-4">
            <p className="font-semibold text-gray-900 dark:text-gray-100">🟦 Context:</p>
            <p className="text-gray-700 dark:text-gray-300">A healthcare application had complex test data requirements with HIPAA compliance needs. Test data management was causing test failures and maintenance overhead.</p>
          </div>

          <h3 className="text-xl font-semibold mb-2">Data Management Strategy:</h3>
          <ul className="list-disc list-inside mb-4">
            <li>Test data factories for consistent data creation</li>
            <li>Database seeding with synthetic data</li>
            <li>Data cleanup and isolation between tests</li>
            <li>Compliance with data privacy regulations</li>
          </ul>

          <h3 className="text-xl font-semibold mb-2">Test Data Factory:</h3>
          <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded mb-4">
            <code>{`public class PatientDataFactory {
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
}`}</code>
          </pre>

          <h3 className="text-xl font-semibold mb-2">Data Compliance:</h3>
          <ul className="list-disc list-inside mb-4">
            <li>PHI data anonymization</li>
            <li>Test environment data isolation</li>
            <li>Automated data cleanup</li>
            <li>Audit trails for data access</li>
          </ul>

          <div className="bg-green-100 dark:bg-green-900 border-l-4 border-green-500 p-4 mb-4">
            <p className="font-semibold text-gray-900 dark:text-gray-100">🟩 Results:</p>
            <p className="text-gray-700 dark:text-gray-300">Test data management time reduced by 70%. Test stability improved from 85% to 98%. HIPAA compliance maintained throughout testing.</p>
          </div>

          <div className="bg-purple-100 dark:bg-purple-900 border-l-4 border-purple-500 p-4">
            <p className="font-semibold text-gray-900 dark:text-gray-100">🟪 Lessons Learned:</p>
            <p className="text-gray-700 dark:text-gray-300">Test data management is critical for complex applications. Data factories and proper cleanup prevent test interference and compliance issues.</p>
          </div>
        </div>
      </div>
    </div>
  )
}