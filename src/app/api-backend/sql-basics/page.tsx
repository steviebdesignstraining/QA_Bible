export default function Page() {
  return (
    <div className="max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">SQL Basics for QA</h1>

      <p className="mb-6">
        SQL (Structured Query Language) is essential for QA engineers testing database-driven applications. Understanding SQL allows you to verify data integrity, test database operations, and validate backend functionality.
      </p>

      <div className="bg-blue-100 dark:bg-blue-900 border-l-4 border-blue-500 p-4 mb-6">
        <p className="font-semibold text-gray-900 dark:text-gray-100">🟦 Info:</p>
        <p className="text-gray-700 dark:text-gray-300">SQL is the standard language for managing relational databases. QA engineers use SQL to verify data correctness, test database constraints, and validate application-database interactions.</p>
      </div>

      <h2 className="text-2xl font-semibold mb-4">Basic SQL Commands</h2>

      <div className="grid md:grid-cols-2 gap-6 mb-6">
        <div className="border border-gray-300 dark:border-gray-600 rounded-lg p-4">
          <h3 className="text-lg font-semibold mb-3 text-green-600 dark:text-green-400">Data Retrieval (SELECT)</h3>
          <div className="bg-gray-100 dark:bg-gray-800 p-3 rounded mb-3">
            <pre className="text-sm">
              <code>{`SELECT column1, column2
FROM table_name
WHERE condition;`}</code>
            </pre>
          </div>
          <p className="text-sm">Retrieves data from database tables</p>
        </div>

        <div className="border border-gray-300 dark:border-gray-600 rounded-lg p-4">
          <h3 className="text-lg font-semibold mb-3 text-blue-600 dark:text-blue-400">Data Modification</h3>
          <div className="bg-gray-100 dark:bg-gray-800 p-3 rounded mb-3">
            <pre className="text-sm">
              <code>{`INSERT INTO table_name (col1, col2)
VALUES ('value1', 'value2');

UPDATE table_name
SET column1 = 'new_value'
WHERE condition;

DELETE FROM table_name
WHERE condition;`}</code>
            </pre>
          </div>
          <p className="text-sm">Add, modify, or remove data</p>
        </div>
      </div>

      <h2 className="text-2xl font-semibold mb-4">Essential SQL Clauses</h2>

      <div className="space-y-4 mb-6">
        <div className="border-l-4 border-green-500 pl-4">
          <h3 className="font-semibold mb-2">WHERE Clause</h3>
          <p className="mb-2">Filters records based on conditions</p>
          <div className="bg-gray-100 dark:bg-gray-800 p-2 rounded text-sm">
            <code>SELECT * FROM users WHERE age {'>'} 18 AND status = 'active';</code>
          </div>
        </div>

        <div className="border-l-4 border-blue-500 pl-4">
          <h3 className="font-semibold mb-2">JOIN Clauses</h3>
          <p className="mb-2">Combines data from multiple tables</p>
          <div className="bg-gray-100 dark:bg-gray-800 p-2 rounded text-sm">
            <code>SELECT u.name, o.total FROM users u JOIN orders o ON u.id = o.user_id;</code>
          </div>
        </div>

        <div className="border-l-4 border-purple-500 pl-4">
          <h3 className="font-semibold mb-2">GROUP BY & HAVING</h3>
          <p className="mb-2">Groups records and filters groups</p>
          <div className="bg-gray-100 dark:bg-gray-800 p-2 rounded text-sm">
            <code>SELECT department, COUNT(*) FROM employees GROUP BY department HAVING COUNT(*) {'>'} 5;</code>
          </div>
        </div>

        <div className="border-l-4 border-orange-500 pl-4">
          <h3 className="font-semibold mb-2">ORDER BY</h3>
          <p className="mb-2">Sorts result set</p>
          <div className="bg-gray-100 dark:bg-gray-800 p-2 rounded text-sm">
            <code>SELECT * FROM products ORDER BY price DESC, name ASC;</code>
          </div>
        </div>
      </div>

      <div className="bg-green-100 dark:bg-green-900 border-l-4 border-green-500 p-4 mb-6">
        <p className="font-semibold text-gray-900 dark:text-gray-100">🟩 Example:</p>
        <p className="text-gray-700 dark:text-gray-300">To verify user registration: <code>SELECT COUNT(*) FROM users WHERE email = 'test@example.com';</code> should return 1 after successful registration.</p>
      </div>

      <h2 className="text-2xl font-semibold mb-4">Common SQL Testing Scenarios</h2>

      <div className="grid md:grid-cols-2 gap-6 mb-6">
        <div>
          <h3 className="text-lg font-semibold mb-3">Data Integrity Testing</h3>
          <ul className="list-disc list-inside space-y-1">
            <li>Check foreign key constraints</li>
            <li>Verify unique constraints</li>
            <li>Validate NOT NULL fields</li>
            <li>Test check constraints</li>
            <li>Verify data types and lengths</li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-3">Business Logic Testing</h3>
          <ul className="list-disc list-inside space-y-1">
            <li>Verify calculated fields</li>
            <li>Check trigger functionality</li>
            <li>Validate stored procedures</li>
            <li>Test complex queries</li>
            <li>Verify data relationships</li>
          </ul>
        </div>
      </div>

      <h2 className="text-2xl font-semibold mb-4">SQL Injection Prevention</h2>

      <div className="bg-red-100 dark:bg-red-900 border-l-4 border-red-500 p-4 mb-6">
        <p className="font-semibold text-gray-900 dark:text-gray-100">🟥 Error Prevention:</p>
        <p className="text-gray-700 dark:text-gray-300">SQL injection occurs when user input is not properly sanitized. Always use parameterized queries or prepared statements.</p>
      </div>

      <div className="grid md:grid-cols-2 gap-6 mb-6">
        <div className="border border-red-300 dark:border-red-600 rounded-lg p-4">
          <h3 className="text-lg font-semibold mb-3 text-red-600 dark:text-red-400">Vulnerable Code</h3>
          <div className="bg-gray-100 dark:bg-gray-800 p-3 rounded">
            <pre className="text-sm text-red-600">
              <code>{`// DON'T DO THIS
String query = "SELECT * FROM users WHERE id = '" + userId + "'";
Statement stmt = connection.createStatement();
ResultSet rs = stmt.executeQuery(query);`}</code>
            </pre>
          </div>
        </div>

        <div className="border border-green-300 dark:border-green-600 rounded-lg p-4">
          <h3 className="text-lg font-semibold mb-3 text-green-600 dark:text-green-400">Safe Code</h3>
          <div className="bg-gray-100 dark:bg-gray-800 p-3 rounded">
            <pre className="text-sm text-green-600">
              <code>{`// DO THIS INSTEAD
String query = "SELECT * FROM users WHERE id = ?";
PreparedStatement stmt = connection.prepareStatement(query);
stmt.setString(1, userId);
ResultSet rs = stmt.executeQuery();`}</code>
            </pre>
          </div>
        </div>
      </div>

      <h2 className="text-2xl font-semibold mb-4">Database Schema Testing</h2>

      <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded mb-6">
        <h3 className="font-semibold mb-3">Essential Schema Checks:</h3>
        <ul className="list-disc list-inside space-y-2">
          <li><strong>Table Structure:</strong> <code>DESCRIBE table_name;</code> or <code>SELECT * FROM information_schema.columns;</code></li>
          <li><strong>Indexes:</strong> <code>SHOW INDEXES FROM table_name;</code></li>
          <li><strong>Constraints:</strong> <code>SELECT * FROM information_schema.table_constraints;</code></li>
          <li><strong>Relationships:</strong> <code>SELECT * FROM information_schema.key_column_usage;</code></li>
          <li><strong>Data Types:</strong> Verify column types match application expectations</li>
        </ul>
      </div>

      <h2 className="text-2xl font-semibold mb-4">Performance Testing Queries</h2>

      <div className="space-y-4 mb-6">
        <div className="border border-gray-300 dark:border-gray-600 rounded-lg p-4">
          <h3 className="text-lg font-semibold mb-3">Query Execution Plans</h3>
          <div className="bg-gray-100 dark:bg-gray-800 p-3 rounded mb-3">
            <pre className="text-sm">
              <code>{`-- MySQL
EXPLAIN SELECT * FROM users WHERE email = 'test@example.com';

-- PostgreSQL
EXPLAIN ANALYZE SELECT * FROM users WHERE email = 'test@example.com';

-- SQL Server
SET SHOWPLAN_ALL ON;
SELECT * FROM users WHERE email = 'test@example.com';`}</code>
            </pre>
          </div>
          <p className="text-sm">Analyze how the database executes queries</p>
        </div>

        <div className="border border-gray-300 dark:border-gray-600 rounded-lg p-4">
          <h3 className="text-lg font-semibold mb-3">Index Usage Analysis</h3>
          <div className="bg-gray-100 dark:bg-gray-800 p-3 rounded mb-3">
            <pre className="text-sm">
              <code>{`-- Check if indexes are being used
SELECT * FROM performance_schema.events_statements_summary_by_digest
WHERE digest_text LIKE '%SELECT%users%';`}</code>
            </pre>
          </div>
          <p className="text-sm">Monitor index effectiveness</p>
        </div>
      </div>

      <h2 className="text-2xl font-semibold mb-4">Data Validation Queries</h2>

      <div className="grid md:grid-cols-2 gap-6 mb-6">
        <div>
          <h3 className="text-lg font-semibold mb-3">Completeness Checks</h3>
          <div className="bg-gray-100 dark:bg-gray-800 p-3 rounded mb-3">
            <pre className="text-sm">
              <code>{`-- Check for NULL values in required fields
SELECT COUNT(*) as null_count
FROM users
WHERE email IS NULL OR name IS NULL;

-- Verify data ranges
SELECT * FROM orders
WHERE total < 0 OR total > 10000;`}</code>
            </pre>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-3">Consistency Checks</h3>
          <div className="bg-gray-100 dark:bg-gray-800 p-3 rounded mb-3">
            <pre className="text-sm">
              <code>{`-- Check referential integrity
SELECT o.id as orphaned_order
FROM orders o
LEFT JOIN users u ON o.user_id = u.id
WHERE u.id IS NULL;

-- Verify business rules
SELECT * FROM products
WHERE price < cost;`}</code>
            </pre>
          </div>
        </div>
      </div>

      <h2 className="text-2xl font-semibold mb-4">Database Backup & Recovery Testing</h2>

      <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded mb-6">
        <h3 className="font-semibold mb-3">Backup Verification:</h3>
        <ul className="list-disc list-inside space-y-2">
          <li><strong>Restore Testing:</strong> Regularly test backup restoration procedures</li>
          <li><strong>Data Integrity:</strong> Verify backup contains all expected data</li>
          <li><strong>Recovery Time:</strong> Measure time to restore from backup</li>
          <li><strong>Point-in-Time Recovery:</strong> Test restoring to specific time points</li>
        </ul>
      </div>

      <div className="bg-yellow-100 dark:bg-yellow-900 border-l-4 border-yellow-500 p-4 mb-6">
        <p className="font-semibold text-gray-900 dark:text-gray-100">🟧 Warning:</p>
        <p className="text-gray-700 dark:text-gray-300">Never run DML operations (INSERT, UPDATE, DELETE) on production databases during testing. Use read-only queries or test databases only.</p>
      </div>

      <div className="bg-purple-100 dark:bg-purple-900 border-l-4 border-purple-500 p-4 mb-6">
        <p className="font-semibold text-gray-900 dark:text-gray-100">🟪 Key Tip:</p>
        <p className="text-gray-700 dark:text-gray-300">Learn your database's specific SQL dialect (MySQL, PostgreSQL, SQL Server, Oracle). Each has unique features and syntax differences.</p>
      </div>

      <h2 className="text-2xl font-semibold mb-4">SQL Testing Best Practices</h2>

      <div className="grid md:grid-cols-2 gap-6 mb-6">
        <div>
          <h3 className="text-lg font-semibold mb-3">Query Writing</h3>
          <ul className="list-disc list-inside">
            <li>Use meaningful aliases</li>
            <li>Format queries for readability</li>
            <li>Avoid SELECT * in production</li>
            <li>Use appropriate JOIN types</li>
            <li>Test queries with realistic data volumes</li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-3">Testing Approach</h3>
          <ul className="list-disc list-inside">
            <li>Start with simple queries</li>
            <li>Test edge cases and boundary values</li>
            <li>Verify results manually</li>
            <li>Use EXPLAIN plans for optimization</li>
            <li>Document complex queries</li>
          </ul>
        </div>
      </div>

      <h2 className="text-2xl font-semibold mb-4">Common SQL Tools for QA</h2>

      <div className="grid md:grid-cols-3 gap-4 mb-6">
        <div className="text-center p-4 border rounded-lg">
          <h3 className="font-semibold mb-2">MySQL Workbench</h3>
          <p className="text-sm">GUI for MySQL databases</p>
        </div>
        <div className="text-center p-4 border rounded-lg">
          <h3 className="font-semibold mb-2">pgAdmin</h3>
          <p className="text-sm">PostgreSQL administration</p>
        </div>
        <div className="text-center p-4 border rounded-lg">
          <h3 className="font-semibold mb-2">SQL Server Management Studio</h3>
          <p className="text-sm">Microsoft SQL Server tool</p>
        </div>
        <div className="text-center p-4 border rounded-lg">
          <h3 className="font-semibold mb-2">DBeaver</h3>
          <p className="text-sm">Universal database tool</p>
        </div>
        <div className="text-center p-4 border rounded-lg">
          <h3 className="font-semibold mb-2">HeidiSQL</h3>
          <p className="text-sm">MySQL/MariaDB/Sqlite manager</p>
        </div>
        <div className="text-center p-4 border rounded-lg">
          <h3 className="font-semibold mb-2">DataGrip</h3>
          <p className="text-sm">JetBrains database IDE</p>
        </div>
      </div>

      <h2 className="text-2xl font-semibold mb-4">SQL Testing Checklist</h2>

      <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded">
        <h3 className="font-semibold mb-3">Data Validation:</h3>
        <ul className="list-disc list-inside mb-4">
          <li>✅ Verify data types and constraints</li>
          <li>✅ Check referential integrity</li>
          <li>✅ Validate business rules</li>
          <li>✅ Test data completeness</li>
          <li>✅ Verify calculated fields</li>
        </ul>

        <h3 className="font-semibold mb-3">Performance Testing:</h3>
        <ul className="list-disc list-inside mb-4">
          <li>✅ Analyze query execution plans</li>
          <li>✅ Check index usage</li>
          <li>✅ Test with large datasets</li>
          <li>✅ Monitor query response times</li>
          <li>✅ Identify slow queries</li>
        </ul>

        <h3 className="font-semibold mb-3">Security Testing:</h3>
        <ul className="list-disc list-inside">
          <li>✅ Test for SQL injection vulnerabilities</li>
          <li>✅ Verify access controls</li>
          <li>✅ Check data encryption</li>
          <li>✅ Validate input sanitization</li>
          <li>✅ Test privilege escalation</li>
        </ul>
      </div>
    </div>
  )
}
