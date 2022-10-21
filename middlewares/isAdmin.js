const jwt = require("jsonwebtoken");
const User = require("../models/Clients.model");

const isAdmin = async (req, res, next) => {
  token = req.headers.authorization;
  try {
    const decoded = jwt.verify(token, process.env.SECRET);
    const user = await User.findById(decoded.userID).select("-password");
    if (!user || user.role !== "ADMIN") {
      return res.status(401).send([{ msg: "unauthorized" }]);
    }
    req.user = user;
    next();
  } catch (error) {
    res.status(401).send(error);
  }
};
module.exports = { isAdmin };
