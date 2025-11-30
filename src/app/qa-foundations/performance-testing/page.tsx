export default function Page() {
  return (
    <div className="max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Performance Testing</h1>

      <p className="mb-6">
        Performance testing evaluates how a system performs under various conditions. It ensures applications meet speed, scalability, and stability requirements.
      </p>

      <div className="bg-blue-100 dark:bg-blue-900 border-l-4 border-blue-500 p-4 mb-6">
        <p className="font-semibold text-gray-900 dark:text-gray-100">🟦 Info:</p>
        <p className="text-gray-700 dark:text-gray-300">Performance testing identifies bottlenecks and ensures optimal user experience under load.</p>
      </div>

      <h2 className="text-2xl font-semibold mb-4">Types of Performance Testing</h2>

      <div className="grid md:grid-cols-2 gap-6 mb-6">
        <div className="border border-gray-300 dark:border-gray-600 rounded-lg p-4">
          <h3 className="text-xl font-semibold mb-3 text-green-600 dark:text-green-400">Load Testing</h3>
          <p className="mb-3">Tests application behavior under expected load conditions.</p>
          <ul className="list-disc list-inside text-sm">
            <li>Simulates normal user traffic</li>
            <li>Identifies performance baselines</li>
            <li>Validates scalability</li>
          </ul>
        </div>

        <div className="border border-gray-300 dark:border-gray-600 rounded-lg p-4">
          <h3 className="text-xl font-semibold mb-3 text-orange-600 dark:text-orange-400">Stress Testing</h3>
          <p className="mb-3">Tests application behavior under extreme conditions.</p>
          <ul className="list-disc list-inside text-sm">
            <li>Tests beyond normal capacity</li>
            <li>Finds breaking points</li>
            <li>Validates recovery mechanisms</li>
          </ul>
        </div>

        <div className="border border-gray-300 dark:border-gray-600 rounded-lg p-4">
          <h3 className="text-xl font-semibold mb-3 text-purple-600 dark:text-purple-400">Spike Testing</h3>
          <p className="mb-3">Tests sudden increases in user load.</p>
          <ul className="list-disc list-inside text-sm">
            <li>Simulates traffic spikes</li>
            <li>Tests auto-scaling</li>
            <li>Validates system elasticity</li>
          </ul>
        </div>

        <div className="border border-gray-300 dark:border-gray-600 rounded-lg p-4">
          <h3 className="text-xl font-semibold mb-3 text-blue-600 dark:text-blue-400">Volume Testing</h3>
          <p className="mb-3">Tests large amounts of data processing.</p>
          <ul className="list-disc list-inside text-sm">
            <li>Tests database performance</li>
            <li>Validates data handling capacity</li>
            <li>Checks storage limits</li>
          </ul>
        </div>
      </div>

      <div className="bg-green-100 dark:bg-green-900 border-l-4 border-green-500 p-4 mb-6">
        <p className="font-semibold text-gray-900 dark:text-gray-100">🟩 Example:</p>
        <p className="text-gray-700 dark:text-gray-300">An e-commerce site load test simulates 10,000 concurrent users making purchases to ensure checkout performance.</p>
      </div>

      <h2 className="text-2xl font-semibold mb-4">Performance Testing Tools</h2>

      <div className="grid md:grid-cols-3 gap-4 mb-6">
        <div className="text-center p-4 border rounded-lg">
          <h3 className="font-semibold mb-2">JMeter</h3>
          <p className="text-sm">Open-source load testing tool</p>
        </div>
        <div className="text-center p-4 border rounded-lg">
          <h3 className="font-semibold mb-2">LoadRunner</h3>
          <p className="text-sm">Enterprise performance testing</p>
        </div>
        <div className="text-center p-4 border rounded-lg">
          <h3 className="font-semibold mb-2">Gatling</h3>
          <p className="text-sm">Scala-based load testing</p>
        </div>
        <div className="text-center p-4 border rounded-lg">
          <h3 className="font-semibold mb-2">k6</h3>
          <p className="text-sm">Modern load testing with JavaScript</p>
        </div>
        <div className="text-center p-4 border rounded-lg">
          <h3 className="font-semibold mb-2">Locust</h3>
          <p className="text-sm">Python-based swarm testing</p>
        </div>
        <div className="text-center p-4 border rounded-lg">
          <h3 className="font-semibold mb-2">Artillery</h3>
          <p className="text-sm">Cloud-native load testing</p>
        </div>
      </div>

      <h2 className="text-2xl font-semibold mb-4">Key Performance Metrics</h2>

      <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded mb-6">
        <h3 className="font-semibold mb-3">Response Time Metrics:</h3>
        <ul className="list-disc list-inside mb-4">
          <li><strong>Response Time:</strong> Time to complete a request</li>
          <li><strong>Latency:</strong> Network delay time</li>
          <li><strong>Throughput:</strong> Requests processed per second</li>
          <li><strong>Concurrent Users:</strong> Simultaneous user capacity</li>
        </ul>

        <h3 className="font-semibold mb-3">System Metrics:</h3>
        <ul className="list-disc list-inside mb-4">
          <li><strong>CPU Usage:</strong> Processor utilization</li>
          <li><strong>Memory Usage:</strong> RAM consumption</li>
          <li><strong>Disk I/O:</strong> Storage read/write operations</li>
          <li><strong>Network I/O:</strong> Bandwidth utilization</li>
        </ul>

        <h3 className="font-semibold mb-3">Error Metrics:</h3>
        <ul className="list-disc list-inside">
          <li><strong>Error Rate:</strong> Percentage of failed requests</li>
          <li><strong>Timeout Rate:</strong> Requests exceeding time limits</li>
          <li><strong>Resource Exhaustion:</strong> System resource limits reached</li>
        </ul>
      </div>

      <h2 className="text-2xl font-semibold mb-4">Performance Testing Process</h2>

      <div className="bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg p-6 mb-6">
        <div className="grid md:grid-cols-4 gap-4 text-center">
          <div className="p-3 border rounded">
            <div className="text-2xl mb-2">1</div>
            <h4 className="font-semibold">Planning</h4>
            <p className="text-sm">Define objectives, scenarios, metrics</p>
          </div>
          <div className="p-3 border rounded">
            <div className="text-2xl mb-2">2</div>
            <h4 className="font-semibold">Scripting</h4>
            <p className="text-sm">Create test scripts and scenarios</p>
          </div>
          <div className="p-3 border rounded">
            <div className="text-2xl mb-2">3</div>
            <h4 className="font-semibold">Execution</h4>
            <p className="text-sm">Run tests and monitor results</p>
          </div>
          <div className="p-3 border rounded">
            <div className="text-2xl mb-2">4</div>
            <h4 className="font-semibold">Analysis</h4>
            <p className="text-sm">Analyze results and recommendations</p>
          </div>
        </div>
      </div>

      <h2 className="text-2xl font-semibold mb-4">JMeter Example</h2>

      <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded mb-6">
        <code>{`// JMeter Test Plan Structure
Test Plan
├── Thread Group (Users)
│   ├── HTTP Request Defaults
│   ├── HTTP Cookie Manager
│   ├── HTTP Request (Login)
│   ├── HTTP Request (API Call)
│   └── Response Assertion
├── View Results Tree
├── Summary Report
└── Aggregate Report

// Sample JMeter Script
<ThreadGroup guiclass="ThreadGroupGui" testclass="ThreadGroup" testname="Users">
  <stringProp name="ThreadGroup.on_sample_error">continue</stringProp>
  <stringProp name="TestPlan.comments">User load simulation</stringProp>
  <intProp name="ThreadGroup.num_threads">100</intProp>
  <intProp name="ThreadGroup.ramp_time">30</intProp>
  <longProp name="ThreadGroup.start_time">1</longProp>
  <longProp name="ThreadGroup.end_time">1</longProp>
  <boolProp name="ThreadGroup.scheduler">false</boolProp>
  <stringProp name="ThreadGroup.duration"></stringProp>
  <stringProp name="ThreadGroup.delay"></stringProp>
</ThreadGroup>`}</code>
      </pre>

      <h2 className="text-2xl font-semibold mb-4">Performance Testing Best Practices</h2>

      <div className="grid md:grid-cols-2 gap-6 mb-6">
        <div>
          <h3 className="text-lg font-semibold mb-3">Test Environment</h3>
          <ul className="list-disc list-inside">
            <li>Use production-like environment</li>
            <li>Isolate test environment</li>
            <li>Monitor all system resources</li>
            <li>Use realistic test data</li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-3">Test Design</h3>
          <ul className="list-disc list-inside">
            <li>Define clear success criteria</li>
            <li>Include think time in scripts</li>
            <li>Use correlation for dynamic data</li>
            <li>Implement proper error handling</li>
          </ul>
        </div>
      </div>

      <div className="bg-yellow-100 dark:bg-yellow-900 border-l-4 border-yellow-500 p-4 mb-6">
        <p className="font-semibold text-gray-900 dark:text-gray-100">🟧 Warning:</p>
        <p className="text-gray-700 dark:text-gray-300">Performance testing in production can impact real users. Always test in staging environments first.</p>
      </div>

      <div className="bg-purple-100 dark:bg-purple-900 border-l-4 border-purple-500 p-4 mb-6">
        <p className="font-semibold text-gray-900 dark:text-gray-100">🟪 Key Tip:</p>
        <p className="text-gray-700 dark:text-gray-300">Start performance testing early in development. Use automated monitoring tools for continuous performance validation.</p>
      </div>

      <h2 className="text-2xl font-semibold mb-4">Performance Testing Checklist</h2>

      <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded">
        <h3 className="font-semibold mb-3">Pre-Test Preparation:</h3>
        <ul className="list-disc list-inside mb-4">
          <li>✅ Define performance requirements (SLA)</li>
          <li>✅ Identify critical user journeys</li>
          <li>✅ Set up monitoring tools</li>
          <li>✅ Prepare test data and environment</li>
          <li>✅ Configure load generation tools</li>
        </ul>

        <h3 className="font-semibold mb-3">During Testing:</h3>
        <ul className="list-disc list-inside mb-4">
          <li>✅ Monitor system resources continuously</li>
          <li>✅ Capture response times and throughput</li>
          <li>✅ Log errors and failures</li>
          <li>✅ Validate under different load patterns</li>
        </ul>

        <h3 className="font-semibold mb-3">Post-Test Analysis:</h3>
        <ul className="list-disc list-inside">
          <li>✅ Analyze performance bottlenecks</li>
          <li>✅ Compare results against SLAs</li>
          <li>✅ Generate performance reports</li>
          <li>✅ Provide optimization recommendations</li>
        </ul>
      </div>
    </div>
  )
}