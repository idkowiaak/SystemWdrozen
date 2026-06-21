const express = require("express");
const cors = require("cors");
const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

require("dotenv").config();
const REQUIRED_ENV = ["JWT_SECRET", "HASH_ADMIN", "HASH_UZYTKOWNIK"];
REQUIRED_ENV.forEach((k) => {
  if (!Process.env[k]) {
    Process.exit(1);
  }
});

app.get("api/test", (req, res) => {
  res.json({ message: "backend działa" });
});

app.listen(PORT, () => {
  console.log("server node.js ruszyl na porcie ${PORT}");
});
