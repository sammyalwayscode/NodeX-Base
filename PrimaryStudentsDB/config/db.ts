import mongoose from "mongoose";

const URI = `mongodb://localhost/stud`;
mongoose
  .connect(URI)
  .then(() => {
    console.log(`DB Connected`);
  })
  .catch((error) => {
    console.log("Failed to Connect DB");
  });
