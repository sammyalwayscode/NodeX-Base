import mongoose from "mongoose";

const URI: string = "mongodb://localhost/carDB";

mongoose.connect(URI);
mongoose.connection
  .on("open", () => {
    console.log("DataBase Connected");
  })
  .once("error", (error) => {
    console.log(`Failed to Connect to the Database\n ${error}`);
  });
