const Publication = require("../models/Publications.model");

const addPublication = async (req, res) => {
  const user = req.user;
  const { impact, title, description } = req.body;
  try {
    const publication = new Publication({
      impact,
      title,
      description,
      creater: user._id,
      createrName: `${user.firstName} ${user.lastName}`,
    });
    publication.save();
    res.send(publication);
  } catch (error) {
    res.status(403).send(error);
  }
};
const getAllPublications = async (req, res) => {
  try {
    const user = req.user;
    if (user.role === "ADMIN") {
      const publications = await Publication.find().sort({ createdAt: -1 });
      res.status(200).send(publications);
    } else {
      const publications = await Publication.find({
        status: { $nin: ["Refusée", "En attente"] },
      }).sort({ createdAt: -1 });
      res.status(200).send(publications);
    }
  } catch (error) {
    res.status(400).send(error);
  }
};
const getAllMyPublication = async (req, res) => {
  try {
    const user = req.user;
    const publications = await Publication.find({ creater: user._id }).sort({ createdAt: -1 });
    res.status(200).send(publications);
  } catch (error) {
    res.status(400).send(error);
  }
};

const getPublicationByUserId = async (req, res) => {
  try {
    const id = req.params.ClientID;
    const publications = await Publication.find({ creater: id });
    res.status(200).send(publications);
  } catch (error) {
    res.status(400).send(error);
  }
};
const updateStatusById = async (req, res) => {
  try {
    const id = req.params.PublicationID;
    const { newStatus } = req.body;
    if (!["Acceptée", "Refusée", "Publiée", "En attente"].includes(newStatus)) {
      return res.status(401).send([{ msg: "unauthorized" }]);
    }
    const publication = await Publication.findById(id);
    if (!publication) {
      return res.status(404).send([{ msg: "Not found" }]);
    }
    await publication.updateOne({ status: newStatus });
    res.status(200).send(publication);
  } catch (error) {
    res.status(400).send(error);
  }
};
const deleteById = async (req, res) => {
  try {
    const id = req.params.PublicationID;
    const publication = await Publication.findById(id);
    if (!publication) {
      return res.status(404).send([{ msg: "Not found" }]);
    }
    await Publication.findByIdAndDelete(id);
    res.status(200).send({ msg: "success" });
  } catch (error) {
    res.status(400).send(error);
  }
};

const getAllPublishPost = async (req, res) => {
  try {
    const publications = await Publication.find({ status: { $eq: "Publiée" } }).sort({
      createdAt: -1,
    });

    res.status(200).send(publications);
  } catch (error) {
    res.status(400).send(error);
  }
};
const publishPostById = async (req, res) => {
  try {
    const id = req.params.PublicationID;
    const { title, description } = req.body;

    const publication = await Publication.findById(id);
    if (!publication) {
      return res.status(404).send([{ msg: "Not found" }]);
    }
    await publication.updateOne({ status: "Publiée", title: title, description: description });
    res.status(200).send(publication);
  } catch (error) {
    res.status(400).send(error);
  }
};

module.exports = {
  publishPostById,
  getAllPublications,
  addPublication,
  getPublicationByUserId,
  getAllMyPublication,
  updateStatusById,
  getAllPublishPost,
  deleteById,
};
