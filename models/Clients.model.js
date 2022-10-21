const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    firstName: {
      type: String,
      required: [true, "Le prénom est requis"],
    },
    lastName: {
      type: String,
      required: [true, "le nom est requis"],
    },
    companyName: {
      type: String,
    },
    region: {
      type: String,
      required: [true, "region est requis"],
    },
    email: {
      type: String,
      require: true,
    },
    password: {
      type: String,
      require: true,
      minLength: 6,
    },
    avatar: {
      type: String,
      default: "https://edovel.com/wp-content/uploads/2019/06/Quentin.jpg",
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
    lastLogin: {
      type: Date,
    },
    role: {
      type: String,
      default:"CLIENT"
    },
    verified: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);
module.exports = mongoose.model("User", userSchema);
