module.exports=[93695,(a,b,c)=>{b.exports=a.x("next/dist/shared/lib/no-fallback-error.external.js",()=>require("next/dist/shared/lib/no-fallback-error.external.js"))},17745,a=>{a.n(a.i(59250))},23303,a=>{a.n(a.i(88148))},44896,a=>{a.n(a.i(74740))},46174,a=>{a.n(a.i(83216))},78190,a=>{a.n(a.i(17921))},51661,a=>{"use strict";var b=a.i(64868);function c(){return(0,b.jsxs)("div",{className:"max-w-4xl mx-auto",children:[(0,b.jsx)("h1",{className:"text-3xl font-bold mb-6",children:"CI/CD Basics"}),(0,b.jsx)("p",{className:"mb-4",children:"CI/CD (Continuous Integration/Continuous Deployment) automates the process of integrating code changes, running tests, and deploying applications. It ensures quality and speed in software delivery."}),(0,b.jsxs)("div",{className:"bg-blue-100 dark:bg-blue-900 border-l-4 border-blue-500 p-4 mb-4",children:[(0,b.jsx)("p",{className:"font-semibold text-gray-900 dark:text-gray-100",children:"🟦 Info:"}),(0,b.jsx)("p",{className:"text-gray-700 dark:text-gray-300",children:"CI/CD enables teams to deliver software faster and more reliably by automating testing and deployment processes."})]}),(0,b.jsx)("h2",{className:"text-2xl font-semibold mb-4",children:"What is CI/CD?"}),(0,b.jsx)("h3",{className:"text-xl font-semibold mb-2",children:"Continuous Integration (CI)"}),(0,b.jsx)("p",{className:"mb-4",children:"Developers regularly merge code changes into a shared repository. Automated builds and tests run to catch integration issues early."}),(0,b.jsxs)("div",{className:"bg-green-100 dark:bg-green-900 border-l-4 border-green-500 p-4 mb-4",children:[(0,b.jsx)("p",{className:"font-semibold text-gray-900 dark:text-gray-100",children:"🟩 Example:"}),(0,b.jsx)("p",{className:"text-gray-700 dark:text-gray-300",children:"Every time a developer pushes code, the CI system automatically builds the application and runs unit tests."})]}),(0,b.jsx)("h3",{className:"text-xl font-semibold mb-2",children:"Continuous Deployment (CD)"}),(0,b.jsx)("p",{className:"mb-4",children:"Automated release process that deploys code changes to production after passing all quality gates."}),(0,b.jsx)("h3",{className:"text-xl font-semibold mb-2",children:"Continuous Delivery"}),(0,b.jsx)("p",{className:"mb-4",children:"Similar to CD but requires manual approval before production deployment. Ensures deployability without automatic releases."}),(0,b.jsx)("h2",{className:"text-2xl font-semibold mb-4",children:"CI/CD Pipeline Stages"}),(0,b.jsx)("pre",{className:"bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 p-4 rounded mb-4 text-center",children:(0,b.jsx)("code",{children:`Source Code
     ↓
   Build
     ↓
   Test
     ↓
  Deploy
     ↓
 Monitor`})}),(0,b.jsx)("h2",{className:"text-2xl font-semibold mb-4",children:"Key CI/CD Concepts"}),(0,b.jsx)("h3",{className:"text-xl font-semibold mb-2",children:"1. Pipeline"}),(0,b.jsx)("p",{className:"mb-4",children:"Automated sequence of steps that process code from commit to deployment. Defines the workflow for quality assurance."}),(0,b.jsx)("h3",{className:"text-xl font-semibold mb-2",children:"2. Triggers"}),(0,b.jsx)("p",{className:"mb-4",children:"Events that start pipeline execution. Common triggers include code commits, pull requests, and scheduled builds."}),(0,b.jsx)("h3",{className:"text-xl font-semibold mb-2",children:"3. Stages"}),(0,b.jsx)("p",{className:"mb-4",children:"Logical grouping of pipeline steps. Examples: build, test, deploy, monitor."}),(0,b.jsx)("h3",{className:"text-xl font-semibold mb-2",children:"4. Jobs"}),(0,b.jsx)("p",{className:"mb-4",children:"Individual units of work within a stage. Can run sequentially or in parallel."}),(0,b.jsx)("h3",{className:"text-xl font-semibold mb-2",children:"5. Artifacts"}),(0,b.jsx)("p",{className:"mb-4",children:"Files generated during pipeline execution. Include build outputs, test reports, and deployment packages."}),(0,b.jsx)("h2",{className:"text-2xl font-semibold mb-4",children:"Popular CI/CD Tools"}),(0,b.jsx)("h3",{className:"text-xl font-semibold mb-2",children:"Jenkins"}),(0,b.jsx)("pre",{className:"bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 p-4 rounded mb-4",children:(0,b.jsx)("code",{children:`pipeline {
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
}`})}),(0,b.jsx)("h3",{className:"text-xl font-semibold mb-2",children:"GitHub Actions"}),(0,b.jsx)("pre",{className:"bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 p-4 rounded mb-4",children:(0,b.jsx)("code",{children:`name: CI/CD Pipeline
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
    - run: npm test`})}),(0,b.jsx)("h3",{className:"text-xl font-semibold mb-2",children:"GitLab CI"}),(0,b.jsx)("pre",{className:"bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 p-4 rounded mb-4",children:(0,b.jsx)("code",{children:`stages:
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
    - main`})}),(0,b.jsxs)("div",{className:"bg-yellow-100 dark:bg-yellow-900 border-l-4 border-yellow-500 p-4 mb-4",children:[(0,b.jsx)("p",{className:"font-semibold text-gray-900 dark:text-gray-100",children:"🟧 Warning:"}),(0,b.jsx)("p",{className:"text-gray-700 dark:text-gray-300",children:"Long-running tests can slow down CI/CD pipelines. Optimize test execution time and consider parallelization."})]}),(0,b.jsx)("h2",{className:"text-2xl font-semibold mb-4",children:"Testing in CI/CD"}),(0,b.jsx)("h3",{className:"text-xl font-semibold mb-2",children:"Test Pyramid in CI/CD"}),(0,b.jsx)("pre",{className:"bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 p-4 rounded mb-4 text-center",children:(0,b.jsx)("code",{children:`Unit Tests (Fast, Many)
     ↓ Run on every commit
Integration Tests (Medium)
     ↓ Run on pull requests
E2E Tests (Slow, Few)
     ↓ Run before deployment`})}),(0,b.jsx)("h3",{className:"text-xl font-semibold mb-2",children:"Quality Gates"}),(0,b.jsxs)("ul",{className:"list-disc list-inside mb-4",children:[(0,b.jsx)("li",{children:"Code coverage thresholds"}),(0,b.jsx)("li",{children:"Test failure policies"}),(0,b.jsx)("li",{children:"Security scan results"}),(0,b.jsx)("li",{children:"Performance benchmarks"}),(0,b.jsx)("li",{children:"Manual approval requirements"})]}),(0,b.jsx)("h2",{className:"text-2xl font-semibold mb-4",children:"Parallel Test Execution"}),(0,b.jsx)("pre",{className:"bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 p-4 rounded mb-4",children:(0,b.jsx)("code",{children:`# Parallel execution strategies
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
</suite>`})}),(0,b.jsx)("h2",{className:"text-2xl font-semibold mb-4",children:"Environment Management"}),(0,b.jsxs)("ul",{className:"list-disc list-inside mb-4",children:[(0,b.jsxs)("li",{children:[(0,b.jsx)("strong",{children:"Development:"})," Local developer environments"]}),(0,b.jsxs)("li",{children:[(0,b.jsx)("strong",{children:"Testing:"})," Automated test execution environment"]}),(0,b.jsxs)("li",{children:[(0,b.jsx)("strong",{children:"Staging:"})," Pre-production validation"]}),(0,b.jsxs)("li",{children:[(0,b.jsx)("strong",{children:"Production:"})," Live user environment"]})]}),(0,b.jsxs)("div",{className:"bg-purple-100 dark:bg-purple-900 border-l-4 border-purple-500 p-4 mb-4",children:[(0,b.jsx)("p",{className:"font-semibold text-gray-900 dark:text-gray-100",children:"🟪 Key Tip:"}),(0,b.jsx)("p",{className:"text-gray-700 dark:text-gray-300",children:"Implement proper rollback strategies. Automated deployments should include automated rollback capabilities."})]}),(0,b.jsx)("h2",{className:"text-2xl font-semibold mb-4",children:"Monitoring and Feedback"}),(0,b.jsxs)("ul",{className:"list-disc list-inside mb-4",children:[(0,b.jsx)("li",{children:"Pipeline execution metrics"}),(0,b.jsx)("li",{children:"Test failure analysis"}),(0,b.jsx)("li",{children:"Deployment success rates"}),(0,b.jsx)("li",{children:"Performance monitoring"}),(0,b.jsx)("li",{children:"User feedback integration"}),(0,b.jsx)("li",{children:"Continuous improvement tracking"})]}),(0,b.jsx)("h2",{className:"text-2xl font-semibold mb-4",children:"Best Practices"}),(0,b.jsxs)("ol",{className:"list-decimal list-inside mb-4",children:[(0,b.jsx)("li",{children:"Use declarative pipeline definitions"}),(0,b.jsx)("li",{children:"Implement proper error handling"}),(0,b.jsx)("li",{children:"Secure sensitive configuration"}),(0,b.jsx)("li",{children:"Optimize for speed and reliability"}),(0,b.jsx)("li",{children:"Monitor pipeline performance"}),(0,b.jsx)("li",{children:"Document pipeline processes"}),(0,b.jsx)("li",{children:"Implement proper access controls"}),(0,b.jsx)("li",{children:"Regular pipeline maintenance"})]}),(0,b.jsx)("h2",{className:"text-2xl font-semibold mb-4",children:"Common Challenges"}),(0,b.jsxs)("ul",{className:"list-disc list-inside mb-4",children:[(0,b.jsx)("li",{children:"Flaky tests causing false failures"}),(0,b.jsx)("li",{children:"Long execution times"}),(0,b.jsx)("li",{children:"Resource constraints"}),(0,b.jsx)("li",{children:"Environment inconsistencies"}),(0,b.jsx)("li",{children:"Complex dependency management"}),(0,b.jsx)("li",{children:"Security and compliance requirements"})]}),(0,b.jsx)("h2",{className:"text-2xl font-semibold mb-4",children:"Resources"}),(0,b.jsxs)("ul",{className:"list-disc list-inside mb-4",children:[(0,b.jsx)("li",{children:(0,b.jsx)("a",{href:"https://jenkins.io",className:"text-blue-600 hover:underline",children:"Jenkins Documentation"})}),(0,b.jsx)("li",{children:(0,b.jsx)("a",{href:"https://docs.github.com/actions",className:"text-blue-600 hover:underline",children:"GitHub Actions"})}),(0,b.jsx)("li",{children:(0,b.jsx)("a",{href:"https://docs.gitlab.com/ee/ci/",className:"text-blue-600 hover:underline",children:"GitLab CI/CD"})}),(0,b.jsx)("li",{children:(0,b.jsx)("a",{href:"https://circleci.com",className:"text-blue-600 hover:underline",children:"CircleCI"})})]})]})}a.s(["default",()=>c])}];

//# sourceMappingURL=%5Broot-of-the-server%5D__b6e3e158._.js.map