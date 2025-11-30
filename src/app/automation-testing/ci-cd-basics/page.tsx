export default function Page() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">CI/CD Basics</h1>

      <p className="mb-4">
        CI/CD (Continuous Integration/Continuous Deployment) automates the process of integrating code changes, running tests, and deploying applications. It ensures quality and speed in software delivery.
      </p>

      <div className="bg-blue-100 dark:bg-blue-900 border-l-4 border-blue-500 p-4 mb-4">
        <p className="font-semibold text-gray-900 dark:text-gray-100">🟦 Info:</p>
        <p className="text-gray-700 dark:text-gray-300">CI/CD enables teams to deliver software faster and more reliably by automating testing and deployment processes.</p>
      </div>

      <h2 className="text-2xl font-semibold mb-4">What is CI/CD?</h2>

      <h3 className="text-xl font-semibold mb-2">Continuous Integration (CI)</h3>
      <p className="mb-4">
        Developers regularly merge code changes into a shared repository. Automated builds and tests run to catch integration issues early.
      </p>

      <div className="bg-green-100 dark:bg-green-900 border-l-4 border-green-500 p-4 mb-4">
        <p className="font-semibold text-gray-900 dark:text-gray-100">🟩 Example:</p>
        <p className="text-gray-700 dark:text-gray-300">Every time a developer pushes code, the CI system automatically builds the application and runs unit tests.</p>
      </div>

      <h3 className="text-xl font-semibold mb-2">Continuous Deployment (CD)</h3>
      <p className="mb-4">
        Automated release process that deploys code changes to production after passing all quality gates.
      </p>

      <h3 className="text-xl font-semibold mb-2">Continuous Delivery</h3>
      <p className="mb-4">
        Similar to CD but requires manual approval before production deployment. Ensures deployability without automatic releases.
      </p>

      <h2 className="text-2xl font-semibold mb-4">CI/CD Pipeline Stages</h2>
      <pre className="bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 p-4 rounded mb-4 text-center">
        <code>{`Source Code
     ↓
   Build
     ↓
   Test
     ↓
  Deploy
     ↓
 Monitor`}</code>
      </pre>

      <h2 className="text-2xl font-semibold mb-4">Key CI/CD Concepts</h2>

      <h3 className="text-xl font-semibold mb-2">1. Pipeline</h3>
      <p className="mb-4">
        Automated sequence of steps that process code from commit to deployment. Defines the workflow for quality assurance.
      </p>

      <h3 className="text-xl font-semibold mb-2">2. Triggers</h3>
      <p className="mb-4">
        Events that start pipeline execution. Common triggers include code commits, pull requests, and scheduled builds.
      </p>

      <h3 className="text-xl font-semibold mb-2">3. Stages</h3>
      <p className="mb-4">
        Logical grouping of pipeline steps. Examples: build, test, deploy, monitor.
      </p>

      <h3 className="text-xl font-semibold mb-2">4. Jobs</h3>
      <p className="mb-4">
        Individual units of work within a stage. Can run sequentially or in parallel.
      </p>

      <h3 className="text-xl font-semibold mb-2">5. Artifacts</h3>
      <p className="mb-4">
        Files generated during pipeline execution. Include build outputs, test reports, and deployment packages.
      </p>

      <h2 className="text-2xl font-semibold mb-4">Popular CI/CD Tools</h2>

      <h3 className="text-xl font-semibold mb-2">Jenkins</h3>
      <pre className="bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 p-4 rounded mb-4">
        <code>{`pipeline {
  agent any
  stages {
    stage('Build') {
      steps {
        sh 'npm install'
      }
    }
    stage('Test') {
      steps {
        sh 'npm run test'
      }
    }
    stage('Deploy') {
      steps {
        sh 'npm run deploy'
      }
    }
  }
}`}</code>
      </pre>

      <h3 className="text-xl font-semibold mb-2">GitHub Actions</h3>
      <pre className="bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 p-4 rounded mb-4">
        <code>{`name: CI/CD Pipeline
on: [push, pull_request]
jobs:
  test:
    runs-on: ubuntu-latest
    steps:
    - uses: actions/checkout@v3
    - name: Setup Node.js
      uses: actions/setup-node@v3
      with:
        node-version: '18'
    - run: npm ci
    - run: npm run build
    - run: npm test`}</code>
      </pre>

      <h3 className="text-xl font-semibold mb-2">GitLab CI</h3>
      <pre className="bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 p-4 rounded mb-4">
        <code>{`stages:
  - build
  - test
  - deploy

build_job:
  stage: build
  script:
    - npm install

test_job:
  stage: test
  script:
    - npm run test
  dependencies:
    - build_job

deploy_job:
  stage: deploy
  script:
    - npm run deploy
  only:
    - main`}</code>
      </pre>

      <div className="bg-yellow-100 dark:bg-yellow-900 border-l-4 border-yellow-500 p-4 mb-4">
        <p className="font-semibold text-gray-900 dark:text-gray-100">🟧 Warning:</p>
        <p className="text-gray-700 dark:text-gray-300">Long-running tests can slow down CI/CD pipelines. Optimize test execution time and consider parallelization.</p>
      </div>

      <h2 className="text-2xl font-semibold mb-4">Testing in CI/CD</h2>

      <h3 className="text-xl font-semibold mb-2">Test Pyramid in CI/CD</h3>
      <pre className="bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 p-4 rounded mb-4 text-center">
        <code>{`Unit Tests (Fast, Many)
     ↓ Run on every commit
Integration Tests (Medium)
     ↓ Run on pull requests
E2E Tests (Slow, Few)
     ↓ Run before deployment`}</code>
      </pre>

      <h3 className="text-xl font-semibold mb-2">Quality Gates</h3>
      <ul className="list-disc list-inside mb-4">
        <li>Code coverage thresholds</li>
        <li>Test failure policies</li>
        <li>Security scan results</li>
        <li>Performance benchmarks</li>
        <li>Manual approval requirements</li>
      </ul>

      <h2 className="text-2xl font-semibold mb-4">Parallel Test Execution</h2>
      <pre className="bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 p-4 rounded mb-4">
        <code>{`# Parallel execution strategies
1. Split by test type (unit, integration, e2e)
2. Split by functionality (auth, checkout, admin)
3. Split by browser/device combinations
4. Dynamic splitting based on test duration

# Example: Jest parallel execution
jest --maxWorkers=4 --coverage

# Example: TestNG parallel execution
<suite name="ParallelSuite" parallel="tests" thread-count="4">
  <test name="Test1">...</test>
  <test name="Test2">...</test>
</suite>`}</code>
      </pre>

      <h2 className="text-2xl font-semibold mb-4">Environment Management</h2>
      <ul className="list-disc list-inside mb-4">
        <li><strong>Development:</strong> Local developer environments</li>
        <li><strong>Testing:</strong> Automated test execution environment</li>
        <li><strong>Staging:</strong> Pre-production validation</li>
        <li><strong>Production:</strong> Live user environment</li>
      </ul>

      <div className="bg-purple-100 dark:bg-purple-900 border-l-4 border-purple-500 p-4 mb-4">
        <p className="font-semibold text-gray-900 dark:text-gray-100">🟪 Key Tip:</p>
        <p className="text-gray-700 dark:text-gray-300">Implement proper rollback strategies. Automated deployments should include automated rollback capabilities.</p>
      </div>

      <h2 className="text-2xl font-semibold mb-4">Monitoring and Feedback</h2>
      <ul className="list-disc list-inside mb-4">
        <li>Pipeline execution metrics</li>
        <li>Test failure analysis</li>
        <li>Deployment success rates</li>
        <li>Performance monitoring</li>
        <li>User feedback integration</li>
        <li>Continuous improvement tracking</li>
      </ul>

      <h2 className="text-2xl font-semibold mb-4">Best Practices</h2>
      <ol className="list-decimal list-inside mb-4">
        <li>Use declarative pipeline definitions</li>
        <li>Implement proper error handling</li>
        <li>Secure sensitive configuration</li>
        <li>Optimize for speed and reliability</li>
        <li>Monitor pipeline performance</li>
        <li>Document pipeline processes</li>
        <li>Implement proper access controls</li>
        <li>Regular pipeline maintenance</li>
      </ol>

      <h2 className="text-2xl font-semibold mb-4">Common Challenges</h2>
      <ul className="list-disc list-inside mb-4">
        <li>Flaky tests causing false failures</li>
        <li>Long execution times</li>
        <li>Resource constraints</li>
        <li>Environment inconsistencies</li>
        <li>Complex dependency management</li>
        <li>Security and compliance requirements</li>
      </ul>

      <h2 className="text-2xl font-semibold mb-4">Resources</h2>
      <ul className="list-disc list-inside mb-4">
        <li><a href="https://jenkins.io" className="text-blue-600 hover:underline">Jenkins Documentation</a></li>
        <li><a href="https://docs.github.com/actions" className="text-blue-600 hover:underline">GitHub Actions</a></li>
        <li><a href="https://docs.gitlab.com/ee/ci/" className="text-blue-600 hover:underline">GitLab CI/CD</a></li>
        <li><a href="https://circleci.com" className="text-blue-600 hover:underline">CircleCI</a></li>
      </ul>
    </div>
  )
}
