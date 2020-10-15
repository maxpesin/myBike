const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const VehicleSchema = new Schema({
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
  dateAdded: {
    type: Date,
    default: Date.now
  },
  state: {
    type: String,
    default: 'Current'
  },
  current: {
    type: String
  },
  history: {
    type: String
  },
  pic: {
    type: String,
    required: false
  },
  tires: { 
    type: Object,
    tireSize: {
      type: Object,
      tireSizeAll: String,
      tireSizeFront: String,
      tireSizeRear: String
    },
    tirePressure: {
      tirePressureAll: String,
      tirePressureFront: String,
      tirePressureRear: String
    }
  }
});

mongoose.model('vehicle', VehicleSchema);