const Experiment = require('../models/experiment');

// Get all experiments
exports.getAllExperiments = async (req, res) => {
  try {
    const experiments = await Experiment.find().sort({ createdAt: -1 });
    res.status(200).json(experiments);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching experiments', error });
  }
};

// Get single experiment
exports.getExperimentById = async (req, res) => {
  try {
    const experiment = await Experiment.findById(req.params.id);
    if (!experiment) {
      return res.status(404).json({ message: 'Experiment not found' });
    }
    res.status(200).json(experiment);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching experiment', error });
  }
};

// Create new experiment
exports.createExperiment = async (req, res) => {
  try {
    const newExperiment = new Experiment(req.body);
    const savedExperiment = await newExperiment.save();
    res.status(201).json(savedExperiment);
  } catch (error) {
    res.status(400).json({ message: 'Error creating experiment', error });
  }
};

// Update experiment
exports.updateExperiment = async (req, res) => {
  try {
    const updatedExperiment = await Experiment.findByIdAndUpdate(
      req.params.id, 
      req.body, 
      { new: true, runValidators: true }
    );
    if (!updatedExperiment) {
      return res.status(404).json({ message: 'Experiment not found' });
    }
    res.status(200).json(updatedExperiment);
  } catch (error) {
    res.status(400).json({ message: 'Error updating experiment', error });
  }
};

// Delete experiment
exports.deleteExperiment = async (req, res) => {
  try {
    const deletedExperiment = await Experiment.findByIdAndDelete(req.params.id);
    if (!deletedExperiment) {
      return res.status(404).json({ message: 'Experiment not found' });
    }
    res.status(200).json({ message: 'Experiment deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting experiment', error });
  }
};
