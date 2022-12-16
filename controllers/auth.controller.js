const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/Clients.model");
const { sendEmail } = require("../utils/email");

const register = async (req, res) => {
  const { firstName, lastName, companyName, email, password, region } = req.body;
  try {
    let user = await User.findOne({ email });
    if (user) {
      throw "e-mail déja existe";
    }

    user = new User({ firstName, lastName, companyName, email, password, region });
    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(password, salt);

    const payload = { user: user };
    const token = jwt.sign(payload, process.env.SECRET);

    const link = `${process.env.DOMAIN}/verify/${token}`;
    await sendEmail(user.email, "verify email", "verify", link, user.firstName, user.lastName);

    res.send({
      user: {
        role: user.role,
        firstName: user.firstName,
        lastName: user.lastName,
        companyName: user.companyName,
        region: user.region,
        email: user.email,
        _id: user._id,
      },
    });
  } catch (error) {
    res.status(403).send(error);
  }
};

const verifyEmail = async (req, res) => {
  try {
    const decoded = jwt.verify(req.params.token, process.env.SECRET);
    let user = await decoded.user;
    userVerified = new User({ ...user, verified: true });
    await userVerified.save();
    res.send("email verified sucessfully");
  } catch (error) {
    res.status(400).send("An error occured");
  }
};

const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    let user = await User.findOne({ email });
    if (!user) {
      return res.status(400).send([{ msg: "bad credentials" }]);
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).send([{ msg: "bad credentials" }]);
    }
    if (!user.verified) {
      return res.status(401).send([{ msg: "unauthorized" }]);
    }
    const payload = { userID: user._id };
    const token = jwt.sign(payload, process.env.SECRET);
    await user.updateOne({ lastLogin: Date(Date.now) });

    res.send({
      token,
      user: {
        role: user.role,
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        region: user.region,
        _id: user._id,
        avatar: user.avatar,
        companyName: user.companyName,
      },
    });
  } catch (error) {
    res.status(403).send(error);
  }
};

const getAuthUser = async (req, res) => {
  try {
    res.status(200).json({ user: req.user });
  } catch (error) {
    next(error);
  }
};

const forgotPassword = async (req, res) => {
  try {
    const { email } = req.body;

    let user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json([{ msg: "user not found" }]);
    }

    const payload = { id: user._id };
    const token = jwt.sign(payload, process.env.SECRET, { expiresIn: "1h" });
    const link = `${process.env.DOMAIN}/forgotPassword/resetPassword?token=${token}`;

    await sendEmail(
      user.email,
      "Mot de passe oublié",
      "forgotPassword",
      link,
      user.firstName,
      user.lastName
    );
    res.status(200).send("email sent sucessfully");
  } catch (error) {
    res.status(403).send(error);
  }
};

const resetPassword = async (req, res) => {
  try {
    const { password } = req.body;
    const decoded = jwt.verify(req.params.token, process.env.SECRET);
    let id = await decoded.id;
    const user = await User.findById(id);
    if (!user) {
      return res.status(404).json([{ msg: "user not found" }]);
    }
    const salt = await bcrypt.genSalt(10);
    const newPassword = await bcrypt.hash(password, salt);
    await user.updateOne({ password: newPassword });
    res.status(200).send({ email: user.email });
  } catch (error) {
    res.status(403).send(error);
  }
};
const verifyToken = async (req, res) => {
  try {
    const decoded = jwt.verify(req.params.token, process.env.SECRET);
    let id = await decoded.id;
    const user = await User.findById(id);
    if (!user) {
      return res.status(404).json([{ msg: "user not found" }]);
    }
    res.status(200).send({ msg: "token verified" });
  } catch (error) {
    res.status(403).send(error);
  }
};
module.exports = {
  register,
  login,
  getAuthUser,
  verifyEmail,
  forgotPassword,
  resetPassword,
  verifyToken,
};
