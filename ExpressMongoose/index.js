const express = require("express");
const PORT = 2030;
const app = express();
require("./config/db");
const set06Router = require("./Router/set06Router");
app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).json({ message: "Server Up🚀🚀🚀" });
});
app.use("/api", set06Router);

app.listen(PORT, () => {
  console.log(`Server Up on PORT: ${PORT}`);
});
