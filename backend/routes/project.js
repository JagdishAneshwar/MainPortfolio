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
      gitRepoLink,
      mediumArticleLink,
      projectImage,
    } = req.body;
    try {
    const newProject = new Project({
      projectName,
      projectDescription,
      date,
      features,
      technology,
      webpageLink,
      gitRepoLink,
      mediumArticleLink,
      projectImage,
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
router.get('/projectDetails', async (req, res) => {
      try {
        const projects = await Project.find();
        console.log(projects)
        res.status(200).json(projects);
      } catch (error) {
        console.error('Error while fetching project details:', error);
        res.status(500).json({ error: 'Error while fetching project details' });
      }
    });




module.exports = router
