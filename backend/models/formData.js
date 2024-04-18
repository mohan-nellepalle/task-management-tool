// models/formData.js
const mongoose = require("mongoose");

const formDataSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("FormData", formDataSchema);
