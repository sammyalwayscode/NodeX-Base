const mongoose = require("mongoose");

const mongodbURI = mongoose
  .connect("mongodb://localhost/SetO6Data")
  .then(() => {
    console.log("Database Connected");
  });

module.exports = mongoose;
