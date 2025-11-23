const mongoose = require('mongoose');

// Define Car schema
const carSchema = new mongoose.Schema({
  make: {
    type: String,
    required: true
  },
  model: {
    type: String,
    required: true
  },
  year: {
    type: Number,
    required: true
  },
  pricePerDay: {
    type: Number,
    required: true
  },
  status: {
    type: String,
    enum: ['available', 'rented', 'maintenance'],
    default: 'available'
  }
}, { timestamps: true });

// Create Car model
const Car = mongoose.model('Car', carSchema);

module.exports = Car;
