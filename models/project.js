const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const projectSchema = new Schema({
  title: String,
  portfolioImgBackground: String,
  synopsis: String,
  deployed: String,
  logoWrapper: String,
  gitHub: String
});

const Project = mongoose.model("Project", projectSchema);

module.exports = Project;
