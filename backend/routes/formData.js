const express = require("express");
const router = express.Router();
const FormData = require("../models/formData");

router.post("/register", async (req, res) => {
  try {
    const { email, firstName, lastName } = req.body;
    const newFormData = new FormData({
      email,
      firstName,
      lastName,
    });

    await newFormData.save();
    res.status(201).json(newFormData);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
