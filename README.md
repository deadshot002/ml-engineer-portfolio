# Gitfolio - GitHub Advanced Security Demo

Minimal and modern developer portfolio template built with Next.js - **intentionally vulnerable for educational purposes**.

## ⚠️ Important Security Notice

**THIS REPOSITORY CONTAINS INTENTIONAL SECURITY VULNERABILITIES**

This is a demonstration repository for teaching GitHub Advanced Security features. It includes:
- Exposed secrets and API keys
- Vulnerable dependencies
- Insecure code patterns

**DO NOT USE THIS CODE IN PRODUCTION**

## 🎯 Demo Scenarios

### 1. Secret Scanning Demo 🔐

**Files to review:**
- [.env](.env) - Environment variables with exposed secrets
- [config.js](config.js) - Hardcoded API keys and credentials

**What will be detected:**
- Stripe API keys
- AWS credentials
- Azure connection strings
- GitHub tokens
- Database passwords

**Expected behavior:** GitHub Secret Scanning will automatically detect these patterns and create alerts in the Security tab.

### 2. Dependabot Demo 📦

**Files to review:**
- [package.json](package.json)

**Vulnerable dependencies included:**
- `axios@0.21.1` - Known CVE for Server-Side Request Forgery
- `lodash@4.17.19` - Multiple security vulnerabilities
- `express@4.17.1` - Potential security issues
- `next@12.0.0` - Outdated version
- `react@17.0.2` - Outdated version

**Expected behavior:** Dependabot will:
1. Scan dependencies on push
2. Create alerts for known vulnerabilities
3. Automatically open pull requests with suggested updates

### 3. CodeQL Analysis Demo 🔍

**Vulnerable API endpoints:**

#### Command Injection
- **File:** [pages/api/user-search.js](pages/api/user-search.js)
- **Vulnerability:** User input directly concatenated into shell command
- **Attack example:** `username=admin; rm -rf /`

#### SQL Injection
- **File:** [lib/db.js](lib/db.js)
- **Vulnerability:** Unsanitized user input in SQL queries
- **Attack example:** `username=admin' OR '1'='1`

#### Path Traversal
- **File:** [pages/api/download.js](pages/api/download.js)
- **Vulnerability:** Unrestricted file path access
- **Attack example:** `filename=../../../../etc/passwd`

#### Cross-Site Scripting (XSS)
- **File:** [pages/api/display-message.js](pages/api/display-message.js)
- **Vulnerability:** Unsanitized user input rendered in HTML
- **Attack example:** `message=<script>alert('XSS')</script>`

**Expected behavior:** CodeQL will trace data flow from user inputs to dangerous sinks and create security alerts.

## 🚀 Setup Instructions

### Prerequisites
- Node.js 14+ installed
- GitHub account with Advanced Security enabled
- Git configured locally

### Quick Start

### Enable GitHub Advanced Security

1. **Push code to GitHub:**
```bash
git add .
git commit -m "Add security demo scenarios"
git push origin security-for-beginners
```
2. **Enable Advanced Security features:**
   - Go to repository Settings → Security & analysis
   - Enable Dependency graph
   - Enable Dependabot alerts
   - Enable Dependabot security updates
   - Enable Secret scanning
   - Enable Code scanning (CodeQL analysis)

3. **View security alerts:**
   - Navigate to Security tab
   - Check "Code scanning" for CodeQL alerts
   - Check "Secret scanning" for exposed credentials
   - Check "Dependabot" for vulnerable dependencies

## 🛡️ Remediation Examples

### Fix Secret Scanning Issues:
1. Remove hardcoded secrets from code
2. Use environment variables properly
3. Add `.env` to `.gitignore`
4. Rotate exposed credentials
5. Use GitHub Secrets for CI/CD

### Fix Dependabot Issues:
1. Review Dependabot PRs
2. Test updated dependencies
3. Merge security updates
4. Configure Dependabot settings

### Fix CodeQL Issues:
1. **Command Injection:** Use parameterized commands or allowlists
2. **SQL Injection:** Use prepared statements/parameterized queries
3. **Path Traversal:** Validate and sanitize file paths
4. **XSS:** Sanitize user input, use React's built-in escaping

## 📚 Educational Resources

- [GitHub Advanced Security Documentation](https://docs.github.com/en/code-security)
- [CodeQL Documentation](https://codeql.github.com/docs/)
- [Secret Scanning Patterns](https://docs.github.com/en/code-security/secret-scanning/secret-scanning-patterns)
- [Dependabot Documentation](https://docs.github.com/en/code-security/dependabot)

## 🎓 Learning Objectives

After working through this demo, you should understand:
1. How GitHub automatically detects security vulnerabilities
2. The difference between Secret Scanning, Dependabot, and CodeQL
3. How to interpret and remediate security alerts
4. Best practices for secure coding
5. How to configure security policies for your repositories

---

**Remember:** This repository is for educational purposes only. Never deploy vulnerable code to production!
