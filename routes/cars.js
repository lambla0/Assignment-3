const express = require('express');
const router = express.Router();
const Car = require('../models/Car');

// Show all cars
router.get('/', async (req, res) => {
  const cars = await Car.find();
  res.render('cars/index', { cars });
});

// Show form to add a new car
router.get('/new', (req, res) => {
  res.render('cars/new');
});

// Create a new car
router.post('/', async (req, res) => {
  const { make, model, year, pricePerDay, status } = req.body;
  await Car.create({ make, model, year, pricePerDay, status });
  res.redirect('/cars');
});

// Show form to edit a car
router.get('/:id/edit', async (req, res) => {
  const car = await Car.findById(req.params.id);
  res.render('cars/edit', { car });
});

// Update a car
router.post('/:id', async (req, res) => {
  const { make, model, year, pricePerDay, status } = req.body;
  await Car.findByIdAndUpdate(req.params.id, { make, model, year, pricePerDay, status });
  res.redirect('/cars');
});

// Delete a car
router.post('/:id/delete', async (req, res) => {
  await Car.findByIdAndDelete(req.params.id);
  res.redirect('/cars');
});

module.exports = router;
