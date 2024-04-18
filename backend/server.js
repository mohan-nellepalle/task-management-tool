// server.js
const express = require("express");
const mongoose = require("mongoose");
const taskRoutes = require("./routes/taskRoutes");
const FormRoutes = require("./routess");
const app = express();
const PORT = 3001;

// Connect to MongoDB
mongoose
  .connect(
    "mongodb+srv://mohannellapalle:uKcKPkqFhwt8d0Ij@taskmanagementtool.lqtoqkd.mongodb.net/",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
  });

// Middleware
app.use(express.json());

// Routes
app.use("/api/tasks", taskRoutes);
app.use("/api/tasks", FormRoutes);
// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
