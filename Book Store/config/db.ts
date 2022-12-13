import mongoose from "mongoose";

const URI: string = "mongodb://localhost/booksDB";
// const lifeURI: string =
//   "mongodb+srv://W8PypVqIRJXDReMh:W8PypVqIRJXDReMh@cluster0.1nq2x.mongodb.net/?retryWrites=true&w=majority";

mongoose.connect(URI);
mongoose.connection
  .on("open", () => {
    console.log("DataBase Connected");
  })
  .once("error", (error) => {
    console.log(`Failed to Connect to the Database\n ${error}`);
  });
