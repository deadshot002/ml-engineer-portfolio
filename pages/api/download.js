// WARNING: VULNERABLE CODE - Path Traversal Demo
// DO NOT USE IN PRODUCTION
// This API endpoint demonstrates a path traversal vulnerability for CodeQL detection

import fs from 'fs';
import path from 'path';

export default function handler(req, res) {
  const { filename } = req.query;
  
  if (!filename) {
    return res.status(400).json({ error: 'Filename is required' });
  }

  // VULNERABILITY: Path Traversal
  // User input is used directly to construct file paths
  // An attacker could use input like: "../../../../etc/passwd"
  const filePath = path.join(process.cwd(), 'uploads', filename);
  
  try {
    // Reading file without proper validation
    const fileContent = fs.readFileSync(filePath, 'utf8');
    
    res.status(200).json({ 
      filename: filename,
      content: fileContent 
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
