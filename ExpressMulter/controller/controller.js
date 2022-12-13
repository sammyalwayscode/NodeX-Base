const profileModel = require("../model/model");

const newProfile = async (req, res) => {
  try {
    const { name, bio } = req.body;
    const newFile = await profileModel.create({
      name,
      bio: bio ? bio : "default bio",
      image: req.file ? req.file.path : "uploads/ava.png",
    });
    res.status(201).json({
      message: "Profile Created",
      data: newFile,
    });
  } catch (error) {
    res.status(400).json({
      meassage: "An Error Occoured",
      data: error.message,
    });
  }
};

const getProfile = async (req, res) => {
  try {
    const data = await profileModel.find();
    res.status(200).json({
      message: "Data",
      data: data,
    });
  } catch (error) {
    res.status(400).json({
      meassage: "An Error Occoured",
      data: error.message,
    });
  }
};

module.exports = { newProfile, getProfile };
