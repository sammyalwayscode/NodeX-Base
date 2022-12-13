const mongoose = require("mongoose");

const URI = "mongodb://localhost/profiler";
mongoose.connect(URI);
mongoose.connection
  .on("open", () => {
    console.log("DB Ready");
  })
  .once("error", (error) => {
    console.log("DB Error", error);
  });
