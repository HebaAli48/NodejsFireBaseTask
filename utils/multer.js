const multer = require("multer");

// Configure storage options for multer
const storage = multer.diskStorage({
  // Set the destination directory for uploaded files
  destination: (req, file, callback) => {
    callback(null, "./uploads/");
  },
  // Set the filename for uploaded files
  filename: (req, file, callback) => {
    callback(null, file.originalname);
  },
});

// Initialize multer with the configured storage options
const upload = multer({ storage });

module.exports = {
  upload,
};
