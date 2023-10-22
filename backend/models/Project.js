<<<<<<< HEAD
const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema({
    projectName: String,
    projectDescription: String,
    date: Date,
    features: String,
    technology: String,
    webpageLink: String,
    gitRepoLink: String,
    mediumArticleLink: String,
    projectImage: String,
  });

  module.exports = mongoose.model('project', projectSchema)
=======
const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema({
    projectName: String,
    projectDescription: String,
    date: Date,
    features: String,
    technology: String,
    webpageLink: String,
    gitRepoLink: String,
    mediumArticleLink: String,
    projectImage: String,
  });

  module.exports = mongoose.model('project', projectSchema)
>>>>>>> 4709fd4 (Add all my files)
