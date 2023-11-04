const express = require("express");
const router = express.Router();

// Image Controllers
const {
  CreateImg,
  updateImgById,
  getAllImgs,
  getImgById,
  deleteImgById,
} = require("../controllers/imageController");

// create a new image
router.post("/", CreateImg);

// update image by id
router.patch("/:id", updateImgById);

// get all Images
router.get("/", getAllImgs);

// get image by id
router.get("/:id", getImgById);

// delete image by id
router.delete("/:id", deleteImgById);

module.exports = router;
