// routes/taskRoutes.js
const express = require("express");
const router = express.Router();
const Task = require("../models/task");

// Define routes

router.post("/createTask", async (req, res) => {
  const { title, description } = req.body;

  try {
    const post = new Task({
      title,
      description,
    });

    const newPost = await post.save();
    res.status(201).json(newPost);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

router.get("/getTaskList", async (req, res) => {
  try {
    const tasks = await Task.find();
    res.json(tasks);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
