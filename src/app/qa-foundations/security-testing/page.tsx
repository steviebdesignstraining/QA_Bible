export default function Page() {
  return (
    <div className="max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Security Testing</h1>

      <p className="mb-6">
        Security testing identifies vulnerabilities and ensures applications are protected against threats. It validates authentication, authorization, and data protection mechanisms.
      </p>

      <div className="bg-red-100 dark:bg-red-900 border-l-4 border-red-500 p-4 mb-6">
        <p className="font-semibold text-gray-900 dark:text-gray-100">🟥 Error Prevention:</p>
        <p className="text-gray-700 dark:text-gray-300">Security testing prevents data breaches, unauthorized access, and system compromises that can cost millions in damages and lost trust.</p>
      </div>

      <h2 className="text-2xl font-semibold mb-4">Types of Security Testing</h2>

      <div className="grid md:grid-cols-2 gap-6 mb-6">
        <div className="border border-gray-300 dark:border-gray-600 rounded-lg p-4">
          <h3 className="text-xl font-semibold mb-3 text-red-600 dark:text-red-400">Authentication Testing</h3>
          <p className="mb-3">Verifies user identity validation mechanisms.</p>
          <ul className="list-disc list-inside text-sm">
            <li>Login/logout functionality</li>
            <li>Password policies</li>
            <li>Multi-factor authentication</li>
            <li>Session management</li>
          </ul>
        </div>

        <div className="border border-gray-300 dark:border-gray-600 rounded-lg p-4">
          <h3 className="text-xl font-semibold mb-3 text-orange-600 dark:text-orange-400">Authorization Testing</h3>
          <p className="mb-3">Tests access control and permissions.</p>
          <ul className="list-disc list-inside text-sm">
            <li>Role-based access control</li>
            <li>Privilege escalation</li>
            <li>Resource permissions</li>
            <li>Access control lists</li>
          </ul>
        </div>

        <div className="border border-gray-300 dark:border-gray-600 rounded-lg p-4">
          <h3 className="text-xl font-semibold mb-3 text-yellow-600 dark:text-yellow-400">Data Protection Testing</h3>
          <p className="mb-3">Validates data encryption and privacy.</p>
          <ul className="list-disc list-inside text-sm">
            <li>Data encryption at rest</li>
            <li>Data in transit security</li>
            <li>GDPR compliance</li>
            <li>Personal data handling</li>
          </ul>
        </div>

        <div className="border border-gray-300 dark:border-gray-600 rounded-lg p-4">
          <h3 className="text-xl font-semibold mb-3 text-purple-600 dark:text-purple-400">Vulnerability Testing</h3>
          <p className="mb-3">Identifies security weaknesses.</p>
          <ul className="list-disc list-inside text-sm">
            <li>OWASP Top 10</li>
            <li>SQL injection</li>
            <li>XSS attacks</li>
            <li>CSRF vulnerabilities</li>
          </ul>
        </div>
      </div>

      <div className="bg-green-100 dark:bg-green-900 border-l-4 border-green-500 p-4 mb-6">
        <p className="font-semibold text-gray-900 dark:text-gray-100">🟩 Example:</p>
        <p className="text-gray-700 dark:text-gray-300">Testing login forms for SQL injection attempts by entering malicious input like ' OR '1'='1 to ensure the application sanitizes user input.</p>
      </div>

      <h2 className="text-2xl font-semibold mb-4">Security Testing Tools</h2>

      <div className="grid md:grid-cols-4 gap-4 mb-6">
        <div className="text-center p-4 border rounded-lg">
          <h3 className="font-semibold mb-2">OWASP ZAP</h3>
          <p className="text-sm">Web app scanner</p>
        </div>
        <div className="text-center p-4 border rounded-lg">
          <h3 className="font-semibold mb-2">Burp Suite</h3>
          <p className="text-sm">Web vulnerability scanner</p>
        </div>
        <div className="text-center p-4 border rounded-lg">
          <h3 className="font-semibold mb-2">Nessus</h3>
          <p className="text-sm">Vulnerability scanner</p>
        </div>
        <div className="text-center p-4 border rounded-lg">
          <h3 className="font-semibold mb-2">Metasploit</h3>
          <p className="text-sm">Penetration testing</p>
        </div>
        <div className="text-center p-4 border rounded-lg">
          <h3 className="font-semibold mb-2">Wireshark</h3>
          <p className="text-sm">Network protocol analyzer</p>
        </div>
        <div className="text-center p-4 border rounded-lg">
          <h3 className="font-semibold mb-2">Nmap</h3>
          <p className="text-sm">Network discovery</p>
        </div>
        <div className="text-center p-4 border rounded-lg">
          <h3 className="font-semibold mb-2">SQLMap</h3>
          <p className="text-sm">SQL injection tool</p>
        </div>
        <div className="text-center p-4 border rounded-lg">
          <h3 className="font-semibold mb-2">Nikto</h3>
          <p className="text-sm">Web server scanner</p>
        </div>
      </div>

      <h2 className="text-2xl font-semibold mb-4">OWASP Top 10 Security Risks</h2>

      <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded mb-6">
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <h3 className="font-semibold mb-3">Most Critical:</h3>
            <ol className="list-decimal list-inside space-y-2">
              <li><strong>A01:2021 - Broken Access Control</strong></li>
              <li><strong>A02:2021 - Cryptographic Failures</strong></li>
              <li><strong>A03:2021 - Injection</strong></li>
              <li><strong>A04:2021 - Insecure Design</strong></li>
              <li><strong>A05:2021 - Security Misconfiguration</strong></li>
            </ol>
          </div>
          <div>
            <h3 className="font-semibold mb-3">Continued:</h3>
            <ol className="list-decimal list-inside space-y-2" start={6}>
              <li><strong>A06:2021 - Vulnerable Components</strong></li>
              <li><strong>A07:2021 - Identification & Authentication Failures</strong></li>
              <li><strong>A08:2021 - Software Integrity Failures</strong></li>
              <li><strong>A09:2021 - Logging & Monitoring Failures</strong></li>
              <li><strong>A10:2021 - Server-Side Request Forgery</strong></li>
            </ol>
          </div>
        </div>
      </div>

      <h2 className="text-2xl font-semibold mb-4">Common Security Test Cases</h2>

      <div className="space-y-4 mb-6">
        <div className="border-l-4 border-blue-500 pl-4">
          <h3 className="font-semibold mb-2">SQL Injection Testing</h3>
          <pre className="bg-gray-100 dark:bg-gray-800 p-3 rounded text-sm">
            <code>{`// Test payloads for SQL injection
' OR '1'='1
' UNION SELECT username, password FROM users --
' AND 1=0 UNION SELECT version(), user() --
admin'--`}</code>
          </pre>
        </div>

        <div className="border-l-4 border-green-500 pl-4">
          <h3 className="font-semibold mb-2">XSS Testing</h3>
          <pre className="bg-gray-100 dark:bg-gray-800 p-3 rounded text-sm">
            <code>{`<script>alert('XSS')</script>
<img src=x onerror=alert('XSS')>
<svg onload=alert('XSS')>`}</code>
          </pre>
        </div>

        <div className="border-l-4 border-red-500 pl-4">
          <h3 className="font-semibold mb-2">CSRF Testing</h3>
          <pre className="bg-gray-100 dark:bg-gray-800 p-3 rounded text-sm">
            <code>{`<form action="/transfer" method="POST">
  <input name="amount" value="1000">
  <input name="toAccount" value="attacker">
</form>
<script>document.forms[0].submit()</script>`}</code>
          </pre>
        </div>
      </div>

      <h2 className="text-2xl font-semibold mb-4">Security Testing Methodology</h2>

      <div className="bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg p-6 mb-6">
        <div className="grid md:grid-cols-5 gap-4 text-center">
          <div className="p-3 border rounded">
            <div className="text-2xl mb-2">1</div>
            <h4 className="font-semibold">Recon</h4>
            <p className="text-sm">Information gathering</p>
          </div>
          <div className="p-3 border rounded">
            <div className="text-2xl mb-2">2</div>
            <h4 className="font-semibold">Scanning</h4>
            <p className="text-sm">Vulnerability scanning</p>
          </div>
          <div className="p-3 border rounded">
            <div className="text-2xl mb-2">3</div>
            <h4 className="font-semibold">Gaining Access</h4>
            <p className="text-sm">Exploitation testing</p>
          </div>
          <div className="p-3 border rounded">
            <div className="text-2xl mb-2">4</div>
            <h4 className="font-semibold">Maintaining Access</h4>
            <p className="text-sm">Persistence testing</p>
          </div>
          <div className="p-3 border rounded">
            <div className="text-2xl mb-2">5</div>
            <h4 className="font-semibold">Analysis</h4>
            <p className="text-sm">Reporting findings</p>
          </div>
        </div>
      </div>

      <h2 className="text-2xl font-semibold mb-4">Authentication Testing Checklist</h2>

      <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded mb-6">
        <h3 className="font-semibold mb-3">Login Security:</h3>
        <ul className="list-disc list-inside mb-4">
          <li>✅ Test valid/invalid username/password combinations</li>
          <li>✅ Verify password complexity requirements</li>
          <li>✅ Test account lockout after failed attempts</li>
          <li>✅ Check session timeout functionality</li>
          <li>✅ Validate "Remember Me" functionality</li>
          <li>✅ Test password reset mechanisms</li>
        </ul>

        <h3 className="font-semibold mb-3">Session Management:</h3>
        <ul className="list-disc list-inside mb-4">
          <li>✅ Verify session IDs are random and unique</li>
          <li>✅ Test session fixation vulnerabilities</li>
          <li>✅ Check concurrent session handling</li>
          <li>✅ Validate logout functionality</li>
          <li>✅ Test session cookie security flags</li>
        </ul>

        <h3 className="font-semibold mb-3">Multi-Factor Authentication:</h3>
        <ul className="list-disc list-inside">
          <li>✅ Test 2FA/3FA implementation</li>
          <li>✅ Verify backup codes functionality</li>
          <li>✅ Test authenticator app integration</li>
          <li>✅ Check SMS/email verification</li>
          <li>✅ Validate rate limiting on OTP requests</li>
        </ul>
      </div>

      <h2 className="text-2xl font-semibold mb-4">API Security Testing</h2>

      <div className="grid md:grid-cols-2 gap-6 mb-6">
        <div>
          <h3 className="text-lg font-semibold mb-3">Authentication & Authorization</h3>
          <ul className="list-disc list-inside">
            <li>JWT token validation</li>
            <li>OAuth 2.0 flows</li>
            <li>API key management</li>
            <li>Rate limiting</li>
            <li>CORS configuration</li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-3">Data Protection</h3>
          <ul className="list-disc list-inside">
            <li>HTTPS enforcement</li>
            <li>Data encryption</li>
            <li>Input validation</li>
            <li>Output encoding</li>
            <li>Error message security</li>
          </ul>
        </div>
      </div>

      <h2 className="text-2xl font-semibold mb-4">Burp Suite Example</h2>

      <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded mb-6">
        <code>{`// Burp Suite Intruder for brute force testing
POST /api/login HTTP/1.1
Host: example.com
Content-Type: application/json

{
  "username": "§admin§",
  "password": "§password§"
}

// Payload positions marked with § §
// Use wordlists for username and password fields
// Configure attack type: Pitchfork or Cluster bomb`}</code>
      </pre>

      <div className="bg-yellow-100 dark:bg-yellow-900 border-l-4 border-yellow-500 p-4 mb-6">
        <p className="font-semibold text-gray-900 dark:text-gray-100">🟧 Warning:</p>
        <p className="text-gray-700 dark:text-gray-300">Security testing should only be performed on systems you have explicit permission to test. Unauthorized security testing is illegal and unethical.</p>
      </div>

      <div className="bg-purple-100 dark:bg-purple-900 border-l-4 border-purple-500 p-4 mb-6">
        <p className="font-semibold text-gray-900 dark:text-gray-100">🟪 Key Tip:</p>
        <p className="text-gray-700 dark:text-gray-300">Implement security testing early in development (DevSecOps). Use automated security scanning tools integrated into CI/CD pipelines for continuous security validation.</p>
      </div>

      <h2 className="text-2xl font-semibold mb-4">Security Testing Standards</h2>

      <div className="grid md:grid-cols-3 gap-4 mb-6">
        <div className="text-center p-4 border rounded-lg">
          <h3 className="font-semibold mb-2">OWASP</h3>
          <p className="text-sm">Web application security</p>
        </div>
        <div className="text-center p-4 border rounded-lg">
          <h3 className="font-semibold mb-2">NIST</h3>
          <p className="text-sm">Security frameworks</p>
        </div>
        <div className="text-center p-4 border rounded-lg">
          <h3 className="font-semibold mb-2">ISO 27001</h3>
          <p className="text-sm">Information security</p>
        </div>
        <div className="text-center p-4 border rounded-lg">
          <h3 className="font-semibold mb-2">PCI DSS</h3>
          <p className="text-sm">Payment card security</p>
        </div>
        <div className="text-center p-4 border rounded-lg">
          <h3 className="font-semibold mb-2">GDPR</h3>
          <p className="text-sm">Data protection</p>
        </div>
        <div className="text-center p-4 border rounded-lg">
          <h3 className="font-semibold mb-2">HIPAA</h3>
          <p className="text-sm">Healthcare data</p>
        </div>
      </div>

      <h2 className="text-2xl font-semibold mb-4">Security Testing Report Template</h2>

      <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded">
        <h3 className="font-semibold mb-3">Executive Summary:</h3>
        <ul className="list-disc list-inside mb-4">
          <li>📊 High-risk vulnerabilities found: [count]</li>
          <li>📊 Medium-risk vulnerabilities found: [count]</li>
          <li>📊 Low-risk vulnerabilities found: [count]</li>
          <li>⏱️ Testing duration: [timeframe]</li>
          <li>🎯 Test coverage: [percentage]</li>
        </ul>

        <h3 className="font-semibold mb-3">Critical Findings:</h3>
        <ul className="list-disc list-inside mb-4">
          <li>🔴 [Vulnerability 1] - Severity: Critical - Impact: [description]</li>
          <li>🔴 [Vulnerability 2] - Severity: High - Impact: [description]</li>
          <li>🟡 [Vulnerability 3] - Severity: Medium - Impact: [description]</li>
        </ul>

        <h3 className="font-semibold mb-3">Recommendations:</h3>
        <ul className="list-disc list-inside">
          <li>✅ Immediate fixes required for critical vulnerabilities</li>
          <li>✅ Implement security headers and CSP</li>
          <li>✅ Regular security scanning in CI/CD pipeline</li>
          <li>✅ Security training for development team</li>
          <li>✅ Penetration testing schedule established</li>
        </ul>
      </div>
    </div>
  )
}