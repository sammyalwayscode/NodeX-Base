const mongoose = require("mongoose");

const profileSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    bio: {
      type: String,
    },
    image: {
      type: String,
    },
  },
  { timeStamps: true }
);

const profileModel = mongoose.model("Profs", profileSchema);
module.exports = profileModel;
