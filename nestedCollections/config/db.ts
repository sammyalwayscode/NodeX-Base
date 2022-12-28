import mongoose from "mongoose";

const URI = "mongodb://localhost/newBookStore";
mongoose
  .connect(URI)
  .then(() => {
    console.log("Database Connected...");
  })
  .catch((err) => {
    console.log("Failed TO Connect to DB...", err);
  });
