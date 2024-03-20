const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema({
    projectName: String,
    projectDescription: String,
    date: Date,
    features: String,
    technology: String,
    webpageLink: String,
    gitRepoLink: String,
    installation:[String],
    backend:[String],
    frontend:String,
    caption:[String],
    mediumArticleLink: String,
    projectImagesDesktop: [String],
    projectImagesMobile:[String],
    thumbnail:String,
  });

  module.exports = mongoose.model('project', projectSchema)
