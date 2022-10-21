const User = require("../models/Clients.model");
const bcrypt = require("bcrypt");

const getAllUsers = async (req, res) => {
  try {
    const users = await User.find({ role: { $nin: "ADMIN" } });
    res.status(200).send({ users: users });
  } catch (error) {
    res.status(400).send(error);
  }
};
const getUserById = async (req, res) => {
  const id = req.params.ClientID;
  try {
    const user = await User.findById(id);
    res.status(200).send({ user: user, fullName: `${user.firstName} ${user.lastName}` });
  } catch (error) {
    res.status(404).send(error);
  }
};
const deleteUser = async (req, res) => {
  try {
    const id = req.params.ClientID;
    let user = await User.findOne({ _id: id });
    if (!user) {
      return res.status(400).send([{ msg: "bad credentials" }]);
    }
    await user.remove();
    res.status(200).send(user);
  } catch (error) {
    res.status(400).send(error);
  }
};
const disableUser = async (req, res) => {
  try {
    const id = req.params.ClientID;
    let user = await User.findById(id);
    if (!user) {
      return res.status(404).send([{ msg: "bad credentials" }]);
    }
    await user.updateOne({ verified: !user.verified });
    res.status(200).send(user);
  } catch (error) {
    res.status(400).send(error);
  }
};

const updateAccount = async (req, res) => {
  const value = req.body;
  const user = req.user;
  try {
    if (
      !["firstName", "lastName", "companyName", "region", "email", "password"].includes(
        Object.keys(value)[0]
      )
    ) {
      return res.status(401).send([{ msg: "unauthorized" }]);
    }
    if (!user) {
      return res.status(404).send([{ msg: "user not found" }]);
    }
    if (Object.keys(value)[0] === "password") {
      const salt = await bcrypt.genSalt(10);
      password = await bcrypt.hash(Object.values(value)[0], salt);
      await user.updateOne({ password: password });
    }
    if (Object.keys(value)[0] !== "password") {
      await user.updateOne(value);
    }
    res.status(200).send(user);
  } catch (error) {
    res.status(400).send(error);
  }
};

module.exports = { getAllUsers, getUserById, deleteUser, disableUser, updateAccount };
