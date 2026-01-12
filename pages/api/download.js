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

  // Securely construct a path under the uploads directory
  const uploadsRoot = path.join(process.cwd(), 'uploads');
  const resolvedPath = path.resolve(uploadsRoot, String(filename));

  // Ensure the resolved path is within the uploads root to prevent path traversal
  if (!resolvedPath.startsWith(uploadsRoot + path.sep) && resolvedPath !== uploadsRoot) {
    return res.status(400).json({ error: 'Invalid filename' });
  }

  try {
    const fileContent = fs.readFileSync(resolvedPath, 'utf8');
    
    res.status(200).json({ 
      filename: filename,
      content: fileContent 
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
