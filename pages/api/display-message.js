// WARNING: VULNERABLE CODE - XSS (Cross-Site Scripting) Demo
// DO NOT USE IN PRODUCTION
// This API endpoint demonstrates XSS vulnerabilities for CodeQL detection

function escapeHtml(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

export default function handler(req, res) {
  const { message } = req.query;
  
  if (!message) {
    return res.status(400).json({ error: 'Message is required' });
  }

  // VULNERABILITY: Reflected XSS
  // User input is directly embedded into HTML response without sanitization
  // An attacker could inject: "<script>alert('XSS')</script>"
  const html = `
    <!DOCTYPE html>
    <html>
      <head>
        <title>Message Display</title>
      </head>
      <body>
        <h1>Your Message:</h1>
        <div>${escapeHtml(message)}</div>
      </body>
    </html>
  `;

  res.setHeader('Content-Type', 'text/html');
  res.status(200).send(html);
}
