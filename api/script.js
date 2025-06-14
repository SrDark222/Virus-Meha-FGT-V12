// api/script.js

import fs from 'fs/promises';
import path from 'path';

export async function GET(req, res) {
  const filePath = path.join(process.cwd(), 'api', 'inject.lua');
  const code = await fs.readFile(filePath, 'utf-8');
  return new Response(code, {
    status: 200,
    headers: {
      'Content-Type': 'text/plain',
      'Access-Control-Allow-Origin': '*'
    }
  });
}
