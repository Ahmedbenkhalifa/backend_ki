const express = require("express");
const router = express.Router();
const {
  register,
  login,
  getAuthUser,
  verifyEmail,
  forgotPassword,
  resetPassword,
  verifyToken,
} = require("../controllers/auth.controller");
const { registerRules, validator, loginRules } = require("../middlewares/bodyValidator");
const { isAuth } = require("../middlewares/isAuth");

router.post("/register", registerRules(), validator, register);
router.post("/forgetPassword", forgotPassword);
router.post("/resetPassword/:token", resetPassword);
router.post("/login", loginRules(), validator, login);
router.post("/verifyEmail/:token", verifyEmail);
router.get("/current", isAuth, getAuthUser);
router.get("/verifyToken/:token", verifyToken);

module.exports = router;
