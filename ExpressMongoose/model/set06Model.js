const mongoose = require("mongoose");

const mySchema = mongoose.Schema({
  firstName: {
    type: String,
  },
  lastName: {
    type: String,
  },
  nameOfPC: {
    type: String,
  },
  complexion: {
    type: String,
  },
  gender: {
    type: Boolean,
  },
  phoneNo: {
    type: Number,
  },
});

const myModel = mongoose.model("Set06Data", mySchema);

module.exports = myModel;
