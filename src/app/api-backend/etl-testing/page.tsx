export default function Page() {
  return (
    <div className="max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">ETL Testing Overview</h1>

      <p className="mb-6">
        ETL (Extract, Transform, Load) testing validates data warehouse and business intelligence systems. ETL processes extract data from sources, transform it according to business rules, and load it into target systems for analysis and reporting.
      </p>

      <div className="bg-blue-100 dark:bg-blue-900 border-l-4 border-blue-500 p-4 mb-6">
        <p className="font-semibold text-gray-900 dark:text-gray-100">🟦 Info:</p>
        <p className="text-gray-700 dark:text-gray-300">ETL testing ensures data integrity, accuracy, and reliability in data warehouse systems. It covers data extraction from multiple sources, transformation according to business rules, and proper loading into target databases.</p>
      </div>

      <h2 className="text-2xl font-semibold mb-4">ETL Process Components</h2>

      <div className="grid md:grid-cols-3 gap-6 mb-6">
        <div className="border border-blue-300 dark:border-blue-600 rounded-lg p-4 bg-blue-50 dark:bg-blue-900/20">
          <h3 className="text-lg font-semibold mb-3 text-blue-700 dark:text-blue-400">Extract</h3>
          <ul className="list-disc list-inside space-y-1">
            <li>Read data from source systems</li>
            <li>Handle different data formats</li>
            <li>Manage incremental vs full loads</li>
            <li>Validate source connectivity</li>
            <li>Handle data volume constraints</li>
          </ul>
        </div>

        <div className="border border-green-300 dark:border-green-600 rounded-lg p-4 bg-green-50 dark:bg-green-900/20">
          <h3 className="text-lg font-semibold mb-3 text-green-700 dark:text-green-400">Transform</h3>
          <ul className="list-disc list-inside space-y-1">
            <li>Apply business rules</li>
            <li>Data cleansing and validation</li>
            <li>Aggregation and calculations</li>
            <li>Data type conversions</li>
            <li>Handle missing or invalid data</li>
          </ul>
        </div>

        <div className="border border-purple-300 dark:border-purple-600 rounded-lg p-4 bg-purple-50 dark:bg-purple-900/20">
          <h3 className="text-lg font-semibold mb-3 text-purple-700 dark:text-purple-400">Load</h3>
          <ul className="list-disc list-inside space-y-1">
            <li>Insert data into target systems</li>
            <li>Handle duplicate records</li>
            <li>Manage referential integrity</li>
            <li>Optimize loading performance</li>
            <li>Handle load failures gracefully</li>
          </ul>
        </div>
      </div>

      <div className="bg-green-100 dark:bg-green-900 border-l-4 border-green-500 p-4 mb-6">
        <p className="font-semibold text-gray-900 dark:text-gray-100">🟩 Example:</p>
        <p className="text-gray-700 dark:text-gray-300">An e-commerce ETL process extracts sales data from multiple stores, transforms currency values to USD, aggregates daily totals, and loads the results into a central data warehouse for business reporting.</p>
      </div>

      <h2 className="text-2xl font-semibold mb-4">ETL Testing Types</h2>

      <div className="space-y-6 mb-6">
        <div className="border border-gray-300 dark:border-gray-600 rounded-lg p-4">
          <h3 className="text-lg font-semibold mb-3">Source-to-Target Testing</h3>
          <p className="mb-3">Verify data flows correctly from source systems to target databases</p>
          <div className="bg-gray-100 dark:bg-gray-800 p-3 rounded">
            <strong>Test Cases:</strong>
            <ul className="list-disc list-inside mt-2 text-sm">
              <li>Record counts match between source and target</li>
              <li>All required fields are populated</li>
              <li>Data types are preserved during transformation</li>
              <li>Business key relationships are maintained</li>
              <li>No duplicate records in target system</li>
            </ul>
          </div>
        </div>

        <div className="border border-gray-300 dark:border-gray-600 rounded-lg p-4">
          <h3 className="text-lg font-semibold mb-3">Data Quality Testing</h3>
          <p className="mb-3">Ensure data accuracy, completeness, and consistency</p>
          <div className="bg-gray-100 dark:bg-gray-800 p-3 rounded">
            <strong>Quality Dimensions:</strong>
            <ul className="list-disc list-inside mt-2 text-sm">
              <li><strong>Accuracy:</strong> Data values are correct</li>
              <li><strong>Completeness:</strong> All required data is present</li>
              <li><strong>Consistency:</strong> Data is consistent across systems</li>
              <li><strong>Timeliness:</strong> Data is up-to-date</li>
              <li><strong>Validity:</strong> Data conforms to business rules</li>
            </ul>
          </div>
        </div>

        <div className="border border-gray-300 dark:border-gray-600 rounded-lg p-4">
          <h3 className="text-lg font-semibold mb-3">Performance Testing</h3>
          <p className="mb-3">Validate ETL process performance under various conditions</p>
          <div className="bg-gray-100 dark:bg-gray-800 p-3 rounded">
            <strong>Performance Metrics:</strong>
            <ul className="list-disc list-inside mt-2 text-sm">
              <li>Processing time for expected data volumes</li>
              <li>Memory usage during transformation</li>
              <li>Network bandwidth utilization</li>
              <li>Database I/O performance</li>
              <li>Concurrent job execution capacity</li>
            </ul>
          </div>
        </div>
      </div>

      <h2 className="text-2xl font-semibold mb-4">Common ETL Testing Scenarios</h2>

      <div className="grid md:grid-cols-2 gap-6 mb-6">
        <div>
          <h3 className="text-lg font-semibold mb-3">Data Transformation Testing</h3>
          <ul className="list-disc list-inside">
            <li>Test mathematical calculations</li>
            <li>Verify data type conversions</li>
            <li>Check string manipulations</li>
            <li>Validate date/time transformations</li>
            <li>Test conditional logic</li>
            <li>Verify lookup operations</li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-3">Error Handling Testing</h3>
          <ul className="list-disc list-inside">
            <li>Test invalid data handling</li>
            <li>Verify error logging</li>
            <li>Check recovery mechanisms</li>
            <li>Test threshold limits</li>
            <li>Validate alert notifications</li>
            <li>Verify rollback procedures</li>
          </ul>
        </div>
      </div>

      <h2 className="text-2xl font-semibold mb-4">ETL Testing Tools</h2>

      <div className="grid md:grid-cols-4 gap-4 mb-6">
        <div className="text-center p-4 border rounded-lg">
          <h3 className="font-semibold mb-2">Informatica</h3>
          <p className="text-sm">Enterprise ETL platform</p>
        </div>
        <div className="text-center p-4 border rounded-lg">
          <h3 className="font-semibold mb-2">Talend</h3>
          <p className="text-sm">Open-source ETL tool</p>
        </div>
        <div className="text-center p-4 border rounded-lg">
          <h3 className="font-semibold mb-2">SSIS</h3>
          <p className="text-sm">Microsoft SQL Server tool</p>
        </div>
        <div className="text-center p-4 border rounded-lg">
          <h3 className="font-semibold mb-2">Apache Nifi</h3>
          <p className="text-sm">Data flow automation</p>
        </div>
        <div className="text-center p-4 border rounded-lg">
          <h3 className="font-semibold mb-2">Pentaho</h3>
          <p className="text-sm">Business intelligence suite</p>
        </div>
        <div className="text-center p-4 border rounded-lg">
          <h3 className="font-semibold mb-2">QuerySurge</h3>
          <p className="text-sm">ETL testing automation</p>
        </div>
        <div className="text-center p-4 border rounded-lg">
          <h3 className="font-semibold mb-2">ICEDQ</h3>
          <p className="text-sm">Data quality testing</p>
        </div>
        <div className="text-center p-4 border rounded-lg">
          <h3 className="font-semibold mb-2">Custom SQL Scripts</h3>
          <p className="text-sm">Manual validation queries</p>
        </div>
      </div>

      <h2 className="text-2xl font-semibold mb-4">ETL Testing Best Practices</h2>

      <div className="grid md:grid-cols-2 gap-6 mb-6">
        <div>
          <h3 className="text-lg font-semibold mb-3">Test Data Management</h3>
          <ul className="list-disc list-inside">
            <li>Use representative test data</li>
            <li>Create test data subsets</li>
            <li>Maintain data consistency</li>
            <li>Handle sensitive data properly</li>
            <li>Generate synthetic test data</li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-3">Testing Strategy</h3>
          <ul className="list-disc list-inside">
            <li>Test incrementally by component</li>
            <li>Validate each ETL phase</li>
            <li>Use automated testing where possible</li>
            <li>Document test cases thoroughly</li>
            <li>Include performance benchmarks</li>
          </ul>
        </div>
      </div>

      <h2 className="text-2xl font-semibold mb-4">ETL Failure Scenarios</h2>

      <div className="bg-red-100 dark:bg-red-900 border-l-4 border-red-500 p-4 mb-6">
        <p className="font-semibold text-gray-900 dark:text-gray-100">🟥 Error Prevention:</p>
        <p className="text-gray-700 dark:text-gray-300">Test ETL processes under failure conditions to ensure robust error handling and data recovery.</p>
      </div>

      <div className="space-y-4 mb-6">
        <div className="border-l-4 border-red-500 pl-4">
          <h3 className="font-semibold mb-2">Source System Failures</h3>
          <ul className="list-disc list-inside text-sm">
            <li>Database connection failures</li>
            <li>Source system downtime</li>
            <li>Network connectivity issues</li>
            <li>Source data corruption</li>
            <li>Authentication failures</li>
          </ul>
        </div>

        <div className="border-l-4 border-orange-500 pl-4">
          <h3 className="font-semibold mb-2">Data Quality Issues</h3>
          <ul className="list-disc list-inside text-sm">
            <li>Missing or null values</li>
            <li>Data type mismatches</li>
            <li>Invalid data formats</li>
            <li>Duplicate records</li>
            <li>Referential integrity violations</li>
          </ul>
        </div>

        <div className="border-l-4 border-yellow-500 pl-4">
          <h3 className="font-semibold mb-2">Target System Issues</h3>
          <ul className="list-disc list-inside text-sm">
            <li>Database space constraints</li>
            <li>Index maintenance issues</li>
            <li>Lock contention problems</li>
            <li>Transaction timeout errors</li>
            <li>Constraint violation errors</li>
          </ul>
        </div>
      </div>

      <h2 className="text-2xl font-semibold mb-4">ETL Monitoring & Logging</h2>

      <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded mb-6">
        <h3 className="font-semibold mb-4">Key Metrics to Monitor:</h3>

        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-semibold mb-3">Performance Metrics</h4>
            <ul className="list-disc list-inside text-sm">
              <li>Job execution time</li>
              <li>Records processed per second</li>
              <li>Memory utilization</li>
              <li>CPU usage</li>
              <li>Network throughput</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-3">Data Quality Metrics</h4>
            <ul className="list-disc list-inside text-sm">
              <li>Records successfully loaded</li>
              <li>Records rejected/errors</li>
              <li>Data completeness percentage</li>
              <li>Data accuracy validation</li>
              <li>Duplicate record detection</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-yellow-100 dark:bg-yellow-900 border-l-4 border-yellow-500 p-4 mb-6">
        <p className="font-semibold text-gray-900 dark:text-gray-100">🟧 Warning:</p>
        <p className="text-gray-700 dark:text-gray-300">ETL testing requires careful planning of test data and environments. Large data volumes can make testing slow and expensive, so focus on representative samples and critical business scenarios.</p>
      </div>

      <div className="bg-purple-100 dark:bg-purple-900 border-l-4 border-purple-500 p-4 mb-6">
        <p className="font-semibold text-gray-900 dark:text-gray-100">🟪 Key Tip:</p>
        <p className="text-gray-700 dark:text-gray-300">Implement comprehensive ETL testing to ensure data warehouse reliability. Combine automated testing with manual validation to catch both technical issues and business logic errors.</p>
      </div>

      <h2 className="text-2xl font-semibold mb-4">ETL Testing Checklist</h2>

      <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded">
        <h3 className="font-semibold mb-3">Extract Phase Testing:</h3>
        <ul className="list-disc list-inside mb-4">
          <li>✅ Source system connectivity</li>
          <li>✅ Data extraction accuracy</li>
          <li>✅ Incremental vs full load logic</li>
          <li>✅ Source data validation</li>
          <li>✅ Extraction performance</li>
        </ul>

        <h3 className="font-semibold mb-3">Transform Phase Testing:</h3>
        <ul className="list-disc list-inside mb-4">
          <li>✅ Business rule application</li>
          <li>✅ Data type conversions</li>
          <li>✅ Calculation accuracy</li>
          <li>✅ Lookup operations</li>
          <li>✅ Error handling logic</li>
        </ul>

        <h3 className="font-semibold mb-3">Load Phase Testing:</h3>
        <ul className="list-disc list-inside mb-4">
          <li>✅ Target system loading</li>
          <li>✅ Duplicate handling</li>
          <li>✅ Referential integrity</li>
          <li>✅ Load performance</li>
          <li>✅ Recovery procedures</li>
        </ul>

        <h3 className="font-semibold mb-3">End-to-End Testing:</h3>
        <ul className="list-disc list-inside">
          <li>✅ Complete data flow validation</li>
          <li>✅ Business report accuracy</li>
          <li>✅ Data warehouse queries</li>
          <li>✅ Performance benchmarks</li>
          <li>✅ Error recovery testing</li>
        </ul>
      </div>
    </div>
  )
}
