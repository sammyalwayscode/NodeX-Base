const express = require("express");
const PORT = 2220;
const app = express();
const profileRout = require("./router/router");
app.use(express.json());
require("./config/db");

app.get("/", (req, res) => {
  res.status(200).json({
    message: "Server Ready",
  });
});

app.use("/", profileRout);

app.listen(PORT, () => {
  console.log("Server Up");
});
