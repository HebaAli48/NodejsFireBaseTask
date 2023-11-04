const { db } = require("../utils/admin");
const { upload } = require("../utils/multer");
const collectionName = "ImagesList";
//add new Image
const CreateImg = async (req, res, next) => {
  //   console.log("added");
  try {
    upload.single("image")(req, res, async (err) => {
      if (err) {
        // console.log(err);
        res.status(400).send({ message: "Error uploading file" });
        return;
      }

      const image = req.file;
      if (!image) {
        res.status(404).send({ message: "file is not Found " });
        return;
      }
      const data = {
        name: image.originalname,
        imageURL: image.path,
      };

      const response = await db.collection(collectionName).add(data);

      res.status(200).send("File added successfully");
    });
  } catch (error) {
    next(error);
  }
};

//update image by id
const updateImgById = async (req, res, next) => {
  const fileId = req.params.id;
  //   console.log("id", fileId);
  try {
    upload.single("image")(req, res, async (err) => {
      // Assuming the uploaded file is stored
      const fileData = req.file;

      //   console.log("uploaded", fileData);
      if (!fileData) {
        res.status(400).send({ message: "No file uploaded" });
        return;
      }

      const fileDoc = await db.collection(collectionName).doc(fileId).get();
      //   console.log("finded", fileDoc);
      if (!fileDoc.exists) {
        res.status(404).send({ message: "File is not found" });
      }

      // Update the file data in the database
      await db
        .collection(collectionName)
        .doc(fileId)
        .update({ imageURL: fileData.path, name: fileData.originalname });
      res.status(200).send({ message: "File updated successfully" });
    });
  } catch (error) {
    next(error);
  }
};

//get All image
const getAllImgs = async (req, res, next) => {
  try {
    const files = await db.collection(collectionName).get();
    let allFiles = [];

    files.forEach((doc) => {
      allFiles.push();
      allFiles.push(doc.data());
    });

    res.json(allFiles);
  } catch (error) {
    next(error);
  }
};

//get image by id
const getImgById = async (req, res, next) => {
  const fileId = req.params.id;

  const fileRef = db.collection(collectionName).doc(fileId);
  const fileSnapshot = await fileRef.get();

  if (!fileSnapshot.exists) {
    return res.status(404).send("File not found");
  }

  const file = fileSnapshot.data();
  res.send(file);
};

//delete image
const deleteImgById = async (req, res, next) => {
  try {
    const fileId = req.params.id;
    const fileDoc = await db.collection(collectionName).doc(fileId).get();

    if (!fileDoc.exists) {
      res.status(404).json({ message: "File not found" });
      return;
    }

    const fileData = fileDoc.data();
    await db.collection("AllFiles").doc(fileId).delete();

    res.json("file deleted sucessfully");
  } catch (error) {
    next(error);
  }
};

module.exports = {
  CreateImg,
  updateImgById,
  getAllImgs,
  getImgById,
  deleteImgById,
};
