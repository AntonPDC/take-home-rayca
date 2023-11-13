const Project = require("../models/Project.Js");
const { verifyTokenAndAuth } = require("./verifyToken");
const router = require("express").Router();

//Create
router.post("/", async (req, res) => {
  const newProject = new Project(req.body);
  try {
    const savedProject = await newProject.save();
    res.status(200).json(savedProject);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Update Project
router.put("/:id", verifyTokenAndAuth, async (req, res) => {
  try {
    const updatedProject = await Project.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updatedProject);
  } catch (err) {
    res.status(500).json(err);
  }
});

// DELETE Project
router.delete("/:id", verifyTokenAndAuth, async (req, res) => {
  try {
    await Project.findByIdAndDelete(req.params.id);
    res.status(200).json("Project deleted");
  } catch (err) {
    res.status(500).json(err);
  }
});

// GET Project
router.get("/find/:id", async (req, res) => {
  try {
    const project = await Project.findById(req.params.id);
    res.status(200).json(project);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Get All Projects
router.get("/", async (req, res) => {
  try {
    let projects;
    projects = await Project.find();
    res.status(200).json(projects);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
