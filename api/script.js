export default function handler(req, res) {
  const payload = `COLOCA_AQUI_TUO_BASE64`; // <-- cola aqui
  res.setHeader("Content-Type", "text/plain");
  res.send(`return "${payload}"`);
}
