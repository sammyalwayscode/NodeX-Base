const devModel = require("../model/devModel");

const postDev = async (req, res) => {
  try {
    const { firstName, lastName, gender, complexion, phoneNo, nameOfPC } =
      req.body;
    const docunment = await devModel.create({
      firstName,
      lastName,
      gender,
      complexion,
      phoneNo,
      nameOfPC,
    });
    res.status(201).json({
      message: "Data Has Been Created Sucessfully",
      data: docunment,
    });
  } catch (error) {
    res.status(400).json({
      message: "Something Dey Sup",
      data: error.message,
    });
  }
};

const getDevs = async (req, res) => {
  try {
    const getDocs = await devModel.find();
    res.status(200).json({
      message: "Data Gotten Sucessfully",
      data: getDocs,
    });
  } catch (error) {
    res.status(400).json({
      message: "Something Dey Sup",
      data: error.message,
    });
  }
};

const getOneDev = async (req, res) => {
  try {
    const getOne = await devModel.findById(req.params.id);
    res.status(200).json({
      message: "Data Gotten ",
      data: getOne,
    });
  } catch (error) {
    res.status(400).json({
      message: "Something Don Happen",
      data: error.message,
    });
  }
};

const updateDev = async (req, res) => {
  try {
    const { firstName, lastName, gender, complexion, phoneNo, nameOfPC } =
      req.body;
    const update = await devModel.findByIdAndUpdate(
      req.params.id,
      { firstName, lastName, gender, complexion, phoneNo, nameOfPC },
      { new: true }
    );
    res.status(200).json({
      message: "Data Updated Sucessfully",
      data: update,
    });
  } catch (error) {
    res.status(400).json({
      message: "Something Don Happen",
      data: error.message,
    });
  }
};

module.exports = { postDev, getDevs, getOneDev, updateDev };
