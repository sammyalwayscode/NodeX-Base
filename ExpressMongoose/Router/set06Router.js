const express = require("express");
const router = express.Router();
const { getStudent, createStudents } = require("../controller/set06Controller");

router.route("/students").get(getStudent);
router.route("/newstudents").post(createStudents);

module.exports = router;
