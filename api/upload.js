const path = require("path");
const multer = require("multer");

var storage = multer.diskStorage({
  destination: (req, file, cb) => {
      cb(null, 'uploads')
  },
  filename: (req, file, cb) => {
      cb(null, file.originalname);
  }
});

var upload = multer({
  storage:storage,
//   limits: {
//     fileSize: 1024*100,
//   },
});

module.exports = upload;
