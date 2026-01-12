export default function Home() {
  return (
    <div style={{ padding: '2rem', fontFamily: 'system-ui, sans-serif' }}>
      <h1>Gitfolio - Developer Portfolio Demo</h1>
      <p>Welcome to the GitHub Advanced Security demo repository!</p>
      
      <div style={{ marginTop: '2rem' }}>
        <h2>⚠️ Security Demo Scenarios</h2>
        <p>This repository contains intentional security vulnerabilities for educational purposes:</p>
        
        <ul>
          <li>
            <strong>Secret Scanning:</strong> Check <code>.env</code> and <code>config.js</code> 
            for exposed API keys and credentials
          </li>
          <li>
            <strong>Dependabot:</strong> Outdated dependencies with known vulnerabilities 
            in <code>package.json</code>
          </li>
          <li>
            <strong>CodeQL:</strong> Vulnerable code patterns in API routes:
            <ul>
              <li>Command Injection: <code>/api/user-search</code></li>
              <li>SQL Injection: <code>lib/db.js</code></li>
              <li>Path Traversal: <code>/api/download</code></li>
              <li>XSS: <code>/api/display-message</code></li>
            </ul>
          </li>
        </ul>
        
        <div style={{ 
          marginTop: '2rem', 
          padding: '1rem', 
          backgroundColor: '#fff3cd', 
          border: '1px solid #ffc107',
          borderRadius: '4px'
        }}>
          <strong>⚠️ WARNING:</strong> This code is intentionally insecure and should 
          NEVER be used in production. It is designed exclusively for demonstrating 
          GitHub Advanced Security features.
        </div>
      </div>
      
      <div style={{ marginTop: '2rem' }}>
        <h2>📚 Demo Instructions</h2>
        <ol>
          <li>Push this code to GitHub</li>
          <li>Enable GitHub Advanced Security in repository settings</li>
          <li>Navigate to Security → Code scanning alerts</li>
          <li>Navigate to Security → Secret scanning alerts</li>
          <li>Navigate to Security → Dependabot alerts</li>
          <li>Review and remediate the alerts</li>
        </ol>
      </div>
    </div>
  );
}
