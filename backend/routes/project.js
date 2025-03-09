const express = require("express");
const Project = require('../models/Project');
const router = express.Router();

router.post('/submit', async (req, res) => {
    const {
      projectName,
      projectDescription,
      date,
      features,
      technology,
      webpageLink,
      installation,
      backend,
      frontend,
      gitRepoLink,
      mediumArticleLink,
      projectImagesDesktop,
      projectImagesMobile,
      thumbnail,
      caption
    } = req.body;
    try {
    const newProject = new Project({
      projectName,
      projectDescription,
      date,
      features,
      technology,
      webpageLink,
      installation,
      backend,
      frontend,
      gitRepoLink,
      mediumArticleLink,
      projectImagesDesktop,
      projectImagesMobile,
      thumbnail,
      caption
    });

    console.log(newProject)
      await newProject.save();
      res.status(201).json({ message: 'Data saved successfully' });
    } catch (error) {
      console.error('Error while saving data:', error);
      res.status(500).json({ error: 'Error while saving data' });
    }
  });
  
  // Fetch project details
app.get("/api/project/projectDetails", async (req, res) => {
  try {
    const projects = await Project.find();  // Fetch from MongoDB
      console.log(projects)
    if (!projects || projects.length === 0) {
      return res.status(404).json({ error: "No projects found" });
    }
    res.json(projects);
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
});





module.exports = router
