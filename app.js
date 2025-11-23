// Load environment variables from .env
require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public'))); // serve CSS, images, etc.

// Set EJS as templating engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// MongoDB connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.log("MongoDB connection error:", err));

// Routes
const carRoutes = require('./routes/cars');
app.use('/cars', carRoutes);

// Home page redirect to /cars
app.get('/', (req, res) => {
  res.redirect('/cars');
});

// Start server
app.listen(port, () => console.log(`Server running on http://localhost:${port}`));
