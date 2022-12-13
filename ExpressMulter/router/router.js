const express = require("express");
const { newProfile, getProfile } = require("../controller/controller");
const uploader = require("../config/multer");
const router = express.Router();

router.route("/profile/new").post(uploader, newProfile);
router.route("/profile").get(getProfile);

module.exports = router;
