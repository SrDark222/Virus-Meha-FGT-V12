// api/script.js

import fs from 'fs';
import path from 'path';

export default function handler(req, res) {
  const filePath = path.join(process.cwd(), 'api', 'inject.lua');
  const code = fs.readFileSync(filePath, 'utf-8');
  
  res.status(200)
     .setHeader('Content-Type', 'text/plain')
     .setHeader('Access-Control-Allow-Origin', '*')
     .send(code);
}
