const myModel = require("../model/set06Model");

const getStudent = async (req, res) => {
  try {
    const students = await myModel.find();
    res.status(200).json({
      message: "Data Gotten Sucessfully",
      data: students,
    });
  } catch (error) {
    res.status(404).json({
      message: "An Error Occoured",
      data: error.message,
    });
  }
};

const createStudents = async (req, res) => {
  try {
    const { firstName, lastName, nameOfPC, complexion, gender, phoneNo } =
      req.body;
    const newStudents = await myModel.create({
      firstName,
      lastName,
      nameOfPC,
      complexion,
      gender,
      phoneNo,
    });
    res.status(201).json({
      message: "Data Created Sucessfully",
      data: newStudents,
    });
  } catch (error) {
    res.status(404).json({
      message: "An Error Occoured",
      data: error.message,
    });
  }
};

module.exports = { getStudent, createStudents };
