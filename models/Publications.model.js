const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const publicationSchema = new Schema({
  impact: {
    type: String,
    required: [true, "L'impact est requis"],
  },
  title: {
    type: String,
    required: [true, "Le titre est requis"],
  },
  description: {
    type: String,
    required: [true, "La description est requis"],
  },
  creater: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  createrName:{
    type: String,
    required: [true, "createrName est requis"],
  },
  status:{
    type:String,
    default:"En attente"
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});
module.exports = mongoose.model("Publication", publicationSchema);
