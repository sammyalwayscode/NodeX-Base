const express = require("express");
const router = express.Router();
const {
  postDev,
  getDevs,
  getOneDev,
  updateDev,
} = require("../controller/devController");

router.route("/devs").post(postDev);
router.route("/allDevs").get(getDevs);
router.route("/oneDev/:id").get(getOneDev);
router.route("/updateDev/:id").patch(updateDev);

module.exports = router;
