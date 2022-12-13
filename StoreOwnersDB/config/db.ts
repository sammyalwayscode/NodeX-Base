import mongoose from "mongoose";

const URI = "mongodb://localhost/LocalStores";
mongoose.connect(URI);
mongoose.connection
  .on("open", () => {
    console.log("DataBase Connected ✌️✌️");
  })
  .once("error", (error) => {
    console.log("Failed to Connect to Database\n", error);
  });
