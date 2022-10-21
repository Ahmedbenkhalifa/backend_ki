const express = require("express");
const {
  addPublication,
  getAllPublications,
  getPublicationByUserId,
  getAllMyPublication,
  updateStatusById,
  getAllPublishPost,
  publishPostById,
  deleteById,
} = require("../controllers/publication.controller");
const { isAdmin } = require("../middlewares/isAdmin");
const { isAuth } = require("../middlewares/isAuth");
const router = express.Router();

router.post("/addPublication", isAuth, addPublication);
router.get("/getAllPublications", isAuth, getAllPublications);
router.get("/getPubById/:ClientID", isAuth, getPublicationByUserId);
router.get("/getAllMyPub", isAuth, getAllMyPublication);
router.delete("/deleteById/:PublicationID", isAuth, deleteById);
router.get("/getPublishPost", getAllPublishPost);
router.put("/updateStatus/:PublicationID", isAdmin, updateStatusById);
router.put("/publishPost/:PublicationID", publishPostById);

module.exports = router;
