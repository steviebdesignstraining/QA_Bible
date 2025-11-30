export default function Page() {
  return (
    <div className="max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Security Basics for API Testing</h1>

      <p className="mb-6">
        API security testing ensures that applications are protected against common vulnerabilities, unauthorized access, and malicious attacks. Security testing validates authentication, authorization, data protection, and secure communication.
      </p>

      <div className="bg-blue-100 dark:bg-blue-900 border-l-4 border-blue-500 p-4 mb-6">
        <p className="font-semibold text-gray-900 dark:text-gray-100">🟦 Info:</p>
        <p className="text-gray-700 dark:text-gray-300">Security testing identifies vulnerabilities before attackers can exploit them. It covers authentication, authorization, input validation, encryption, and secure communication protocols.</p>
      </div>

      <h2 className="text-2xl font-semibold mb-4">Authentication Testing</h2>

      <div className="grid md:grid-cols-2 gap-6 mb-6">
        <div className="border border-gray-300 dark:border-gray-600 rounded-lg p-4">
          <h3 className="text-lg font-semibold mb-3 text-green-600 dark:text-green-400">Authentication Methods</h3>
          <ul className="list-disc list-inside space-y-1">
            <li><strong>Basic Authentication:</strong> Username/password</li>
            <li><strong>API Keys:</strong> Simple key-based access</li>
            <li><strong>OAuth 2.0:</strong> Token-based authorization</li>
            <li><strong>JWT:</strong> JSON Web Tokens</li>
            <li><strong>Certificate-based:</strong> Client certificates</li>
          </ul>
        </div>

        <div className="border border-gray-300 dark:border-gray-600 rounded-lg p-4">
          <h3 className="text-lg font-semibold mb-3 text-red-600 dark:text-red-400">Common Vulnerabilities</h3>
          <ul className="list-disc list-inside space-y-1">
            <li><strong>Weak Passwords:</strong> Easily guessable credentials</li>
            <li><strong>Token Leakage:</strong> Exposed authentication tokens</li>
            <li><strong>Session Fixation:</strong> Predictable session IDs</li>
            <li><strong>Brute Force:</strong> Automated credential guessing</li>
            <li><strong>Credential Stuffing:</strong> Reused compromised credentials</li>
          </ul>
        </div>
      </div>

      <h2 className="text-2xl font-semibold mb-4">Authorization Testing</h2>

      <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded mb-6">
        <h3 className="font-semibold mb-4">Testing Access Controls:</h3>

        <div className="space-y-4">
          <div className="border-l-4 border-green-500 pl-4">
            <h4 className="font-semibold mb-2">Role-Based Access Control (RBAC)</h4>
            <ul className="list-disc list-inside text-sm">
              <li>Test user role permissions</li>
              <li>Verify role hierarchy</li>
              <li>Check privilege escalation</li>
              <li>Test role changes</li>
            </ul>
          </div>

          <div className="border-l-4 border-blue-500 pl-4">
            <h4 className="font-semibold mb-2">Attribute-Based Access Control (ABAC)</h4>
            <ul className="list-disc list-inside text-sm">
              <li>Test attribute-based rules</li>
              <li>Verify policy enforcement</li>
              <li>Check dynamic permissions</li>
              <li>Test attribute validation</li>
            </ul>
          </div>

          <div className="border-l-4 border-red-500 pl-4">
            <h4 className="font-semibold mb-2">Broken Access Control</h4>
            <ul className="list-disc list-inside text-sm">
              <li>IDOR (Insecure Direct Object References)</li>
              <li>Parameter manipulation</li>
              <li>URL tampering</li>
              <li>API endpoint exposure</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-green-100 dark:bg-green-900 border-l-4 border-green-500 p-4 mb-6">
        <p className="font-semibold text-gray-900 dark:text-gray-100">🟩 Example:</p>
        <p className="text-gray-700 dark:text-gray-300">Test that a regular user cannot access admin endpoints by modifying the user ID parameter in API calls from 123 to 1 (admin user ID).</p>
      </div>

      <h2 className="text-2xl font-semibold mb-4">Input Validation & Injection Testing</h2>

      <div className="space-y-6 mb-6">
        <div className="border border-gray-300 dark:border-gray-600 rounded-lg p-4">
          <h3 className="text-lg font-semibold mb-3">SQL Injection Testing</h3>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <h4 className="font-semibold mb-2">Vulnerable Input:</h4>
              <code className="block bg-red-100 dark:bg-red-900 p-2 rounded text-sm mb-2">
                username: ' OR '1'='1
              </code>
              <p className="text-sm">Bypasses authentication</p>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Safe Implementation:</h4>
              <code className="block bg-green-100 dark:bg-green-900 p-2 rounded text-sm mb-2">
                Prepared statements with parameters
              </code>
              <p className="text-sm">Prevents injection attacks</p>
            </div>
          </div>
        </div>

        <div className="border border-gray-300 dark:border-gray-600 rounded-lg p-4">
          <h3 className="text-lg font-semibold mb-3">Cross-Site Scripting (XSS) Testing</h3>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <h4 className="font-semibold mb-2">XSS Payload:</h4>
              <code className="block bg-red-100 dark:bg-red-900 p-2 rounded text-sm mb-2">
                <script>alert('XSS')</script>
              </code>
              <p className="text-sm">Executes malicious JavaScript</p>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Prevention:</h4>
              <code className="block bg-green-100 dark:bg-green-900 p-2 rounded text-sm mb-2">
                Input sanitization & output encoding
              </code>
              <p className="text-sm">Neutralizes script tags</p>
            </div>
          </div>
        </div>

        <div className="border border-gray-300 dark:border-gray-600 rounded-lg p-4">
          <h3 className="text-lg font-semibold mb-3">Command Injection Testing</h3>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <h4 className="font-semibold mb-2">Dangerous Input:</h4>
              <code className="block bg-red-100 dark:bg-red-900 p-2 rounded text-sm mb-2">
                filename: test.txt; rm -rf /
              </code>
              <p className="text-sm">Executes system commands</p>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Safe Approach:</h4>
              <code className="block bg-green-100 dark:bg-green-900 p-2 rounded text-sm mb-2">
                Whitelist validation & safe APIs
              </code>
              <p className="text-sm">Prevents command execution</p>
            </div>
          </div>
        </div>
      </div>

      <h2 className="text-2xl font-semibold mb-4">Data Protection Testing</h2>

      <div className="grid md:grid-cols-2 gap-6 mb-6">
        <div>
          <h3 className="text-lg font-semibold mb-3">Encryption Testing</h3>
          <ul className="list-disc list-inside">
            <li>Test data encryption at rest</li>
            <li>Verify data in transit encryption</li>
            <li>Check encryption key management</li>
            <li>Test encryption algorithm strength</li>
            <li>Verify secure key storage</li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-3">Data Leakage Testing</h3>
          <ul className="list-disc list-inside">
            <li>Test for sensitive data in logs</li>
            <li>Check error message content</li>
            <li>Verify API response filtering</li>
            <li>Test cache data exposure</li>
            <li>Check backup data security</li>
          </ul>
        </div>
      </div>

      <h2 className="text-2xl font-semibold mb-4">OWASP API Security Top 10</h2>

      <div className="space-y-4 mb-6">
        <div className="border border-red-300 dark:border-red-600 rounded-lg p-4">
          <div className="flex items-center mb-3">
            <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold mr-3">API1:2023</span>
            <h3 className="text-lg font-semibold">Broken Object Level Authorization</h3>
          </div>
          <p className="mb-3">APIs fail to properly check if users can access specific objects</p>
          <ul className="list-disc list-inside text-sm">
            <li>Test with different user IDs in API calls</li>
            <li>Verify object ownership validation</li>
            <li>Check access control enforcement</li>
          </ul>
        </div>

        <div className="border border-orange-300 dark:border-orange-600 rounded-lg p-4">
          <div className="flex items-center mb-3">
            <span className="bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-bold mr-3">API2:2023</span>
            <h3 className="text-lg font-semibold">Broken Authentication</h3>
          </div>
          <p className="mb-3">Authentication mechanisms are improperly implemented</p>
          <ul className="list-disc list-inside text-sm">
            <li>Test weak authentication methods</li>
            <li>Verify token validation</li>
            <li>Check session management</li>
          </ul>
        </div>

        <div className="border border-yellow-300 dark:border-yellow-600 rounded-lg p-4">
          <div className="flex items-center mb-3">
            <span className="bg-yellow-500 text-white px-3 py-1 rounded-full text-sm font-bold mr-3">API3:2023</span>
            <h3 className="text-lg font-semibold">Broken Object Property Level Authorization</h3>
          </div>
          <p className="mb-3">Users can access sensitive object properties they shouldn't</p>
          <ul className="list-disc list-inside text-sm">
            <li>Test property-level access controls</li>
            <li>Verify field-level permissions</li>
            <li>Check data filtering</li>
          </ul>
        </div>

        <div className="border border-green-300 dark:border-green-600 rounded-lg p-4">
          <div className="flex items-center mb-3">
            <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-bold mr-3">API4:2023</span>
            <h3 className="text-lg font-semibold">Unrestricted Resource Consumption</h3>
          </div>
          <p className="mb-3">APIs don't properly restrict resource usage</p>
          <ul className="list-disc list-inside text-sm">
            <li>Test rate limiting effectiveness</li>
            <li>Verify resource quotas</li>
            <li>Check DoS protection</li>
          </ul>
        </div>

        <div className="border border-blue-300 dark:border-blue-600 rounded-lg p-4">
          <div className="flex items-center mb-3">
            <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-bold mr-3">API5:2023</span>
            <h3 className="text-lg font-semibold">Broken Function Level Authorization</h3>
          </div>
          <p className="mb-3">Users can access functions they're not authorized for</p>
          <ul className="list-disc list-inside text-sm">
            <li>Test endpoint access controls</li>
            <li>Verify method-level permissions</li>
            <li>Check admin function exposure</li>
          </ul>
        </div>
      </div>

      <h2 className="text-2xl font-semibold mb-4">Security Testing Tools</h2>

      <div className="grid md:grid-cols-4 gap-4 mb-6">
        <div className="text-center p-4 border rounded-lg">
          <h3 className="font-semibold mb-2">OWASP ZAP</h3>
          <p className="text-sm">Automated security scanner</p>
        </div>
        <div className="text-center p-4 border rounded-lg">
          <h3 className="font-semibold mb-2">Burp Suite</h3>
          <p className="text-sm">Web vulnerability scanner</p>
        </div>
        <div className="text-center p-4 border rounded-lg">
          <h3 className="font-semibold mb-2">Postman Security</h3>
          <p className="text-sm">API security testing</p>
        </div>
        <div className="text-center p-4 border rounded-lg">
          <h3 className="font-semibold mb-2">Insomnia</h3>
          <p className="text-sm">API client with security features</p>
        </div>
      </div>

      <h2 className="text-2xl font-semibold mb-4">HTTPS & SSL/TLS Testing</h2>

      <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded mb-6">
        <h3 className="font-semibold mb-4">SSL/TLS Security Checks:</h3>

        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-semibold mb-3">Certificate Validation</h4>
            <ul className="list-disc list-inside text-sm">
              <li>Verify certificate validity</li>
              <li>Check certificate chain</li>
              <li>Test expired certificates</li>
              <li>Validate certificate revocation</li>
              <li>Check certificate pinning</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-3">Protocol Security</h4>
            <ul className="list-disc list-inside text-sm">
              <li>Test TLS version support</li>
              <li>Verify cipher suite strength</li>
              <li>Check for deprecated protocols</li>
              <li>Test perfect forward secrecy</li>
              <li>Validate HSTS headers</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-yellow-100 dark:bg-yellow-900 border-l-4 border-yellow-500 p-4 mb-6">
        <p className="font-semibold text-gray-900 dark:text-gray-100">🟧 Warning:</p>
        <p className="text-gray-700 dark:text-gray-300">Security testing should be conducted carefully to avoid disrupting production systems. Always get permission and coordinate with security teams before running penetration tests.</p>
      </div>

      <div className="bg-purple-100 dark:bg-purple-900 border-l-4 border-purple-500 p-4 mb-6">
        <p className="font-semibold text-gray-900 dark:text-gray-100">🟪 Key Tip:</p>
        <p className="text-gray-700 dark:text-gray-300">Implement security testing early in development and make it part of your regular testing cycle. Security is not a one-time activity but an ongoing process.</p>
      </div>

      <h2 className="text-2xl font-semibold mb-4">API Security Testing Checklist</h2>

      <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded">
        <h3 className="font-semibold mb-3">Authentication & Authorization:</h3>
        <ul className="list-disc list-inside mb-4">
          <li>✅ Test authentication bypass methods</li>
          <li>✅ Verify authorization controls</li>
          <li>✅ Test privilege escalation</li>
          <li>✅ Check session management</li>
          <li>✅ Validate token security</li>
        </ul>

        <h3 className="font-semibold mb-3">Input Validation:</h3>
        <ul className="list-disc list-inside mb-4">
          <li>✅ Test for injection vulnerabilities</li>
          <li>✅ Verify input sanitization</li>
          <li>✅ Check parameter validation</li>
          <li>✅ Test boundary conditions</li>
          <li>✅ Validate file upload security</li>
        </ul>

        <h3 className="font-semibold mb-3">Data Protection:</h3>
        <ul className="list-disc list-inside mb-4">
          <li>✅ Verify data encryption</li>
          <li>✅ Test for data leakage</li>
          <li>✅ Check secure communication</li>
          <li>✅ Validate error handling</li>
          <li>✅ Test backup security</li>
        </ul>

        <h3 className="font-semibold mb-3">Infrastructure Security:</h3>
        <ul className="list-disc list-inside">
          <li>✅ Test rate limiting</li>
          <li>✅ Verify SSL/TLS configuration</li>
          <li>✅ Check CORS settings</li>
          <li>✅ Test API versioning</li>
          <li>✅ Validate security headers</li>
        </ul>
      </div>
    </div>
  )
}
