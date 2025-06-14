const fs = require("fs");
const path = require("path");

module.exports = (req, res) => {
  const filePath = path.join(__dirname, "api.lua");
  let raw = fs.readFileSync(filePath, "utf8");
  let payload = raw.replace(/\r?\n/g, "").replace(/"/g, '\\"');
  res.setHeader("Content-Type", "text/plain");
  res.status(200).send(`return "${payload}"`);
};
