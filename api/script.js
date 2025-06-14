export async function GET() {
  const fs = require('fs');
  const path = require('path');

  const filePath = path.join(process.cwd(), 'api', 'inject.lua');
  const code = fs.readFileSync(filePath, 'utf-8');

  return new Response(code, {
    headers: {
      'Content-Type': 'text/plain'
    }
  });
}
