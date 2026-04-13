const mongoose = require('mongoose');

const experimentSchema = new mongoose.Schema({
  title: { type: String, required: true },
  topic: { type: String, required: true },
  date: { type: Date, required: true },
  hypothesis: { type: String },
  materials: { type: String },
  procedure: { type: String },
  observations: { type: String },
  results: { type: String },
  conclusion: { type: String },
  status: { type: String, enum: ['Draft', 'Ongoing', 'Completed'], default: 'Draft' }
}, { timestamps: true });

module.exports = mongoose.model('Experiment', experimentSchema);
