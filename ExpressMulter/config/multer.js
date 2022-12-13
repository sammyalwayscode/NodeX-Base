const multer = require("multer");
const path = require("path");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads");
  },

  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

const fileFilter = (req, file, cb) => {
  console.log(file);
  // const ext = path.extname(file.originalname);
  // console.log(ext);
  if (file.mimetype !== "image/jpeg") {
    cb(null, new Error("Unsupported Format"), false);
  }
  console.log(typeof file.mimetype);
  console.log(file);
  cb(null, true);
};
console.log("first", fileFilter);

const imageUploader = multer({
  storage: storage,
  fileFilter: fileFilter,
  // function (req, file, cb){
  //   console.log(file)
  //   if (file.mimetype !== ".jpg")
  // },
  // limits: {
  //   fileSize: 1024 * 1024 * 2,
  // },
}).single("image");

module.exports = imageUploader;
