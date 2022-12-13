const express = require("express");
const PORT = 2200;
const app = express();
require("./config/db");
const devRouter = require("./router/devRouter");

app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).json({
    message: "Server UP 🚀🚀🚀",
  });
});

app.use("/api", devRouter);

app.listen(PORT, () => {
  console.log(`Server Running on PORT: ${PORT}`);
});
