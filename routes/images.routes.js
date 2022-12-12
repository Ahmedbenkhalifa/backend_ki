const express = require("express");
const router = express.Router();

const fs = require("fs");

const GetImages = async (req, res) => {
  const imagesCarousel = [];
  fs.readdir(process.cwd() + "/assets/images", (err, files) => {
    try {
      files.forEach((file) => {
        if (process.env.NODE_ENV === "development") {
          imagesCarousel.push(
            `http://localhost:${
              process.env.PORT ? process.env.PORT : "8080"
            }/staticFiles/images/${file}`
          );
        } else {
          imagesCarousel.push(`${process.env.DOMAIN}/staticFiles/images/${file}`);
        }
      });
      res.status(200).send(imagesCarousel);
    } catch (error) {
      res.status(400).send(error);
    }
  });
};

router.get("/getImages", GetImages);

module.exports = router;
