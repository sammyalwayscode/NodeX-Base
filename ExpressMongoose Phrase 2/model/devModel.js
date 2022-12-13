const mongoose = require("mongoose");

const devSchema = mongoose.Schema({
  firstName: {
    type: String,
  },
  lastName: {
    type: String,
  },
  gender: {
    type: Boolean,
  },
  complexion: {
    type: String,
  },
  phoneNo: {
    type: Number,
  },
  nameOfPC: {
    type: String,
  },
});

const devModel = mongoose.model("devData", devSchema);
module.exports = devModel;
