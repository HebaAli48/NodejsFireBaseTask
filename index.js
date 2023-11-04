// Import required modules
const express = require("express");
const dotenv = require("dotenv").config();

// Create an Express application
const app = express();

// Import route handlers
const UrlRouter = require("./routes/UrlShortingRouter");
const imgRouter = require("./routes/imageRoutes");

// Set up the Express application
app.use(express.json());

// Define the port on which the server will listen
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

// Initialize and configure the Express application
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Define routes for handling URL shortening and image-related requests
app.use("/Shorturl", UrlRouter);
app.use("/images", imgRouter);

// Not found middleware: Handle requests for routes that don't exist
app.use((req, res) => {
  res.status(404).json({ message: "Page not found" });
});

// Error middleware: Handle errors and send an error response
app.use((error, req, res, next) => {
  res.status(500).json({ message: error + "" });
});
