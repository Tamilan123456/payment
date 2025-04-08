const Service = require('../models/serviceModel'); // Import the service model

// Create a new service
exports.createService = async (req, res) => {
  const { name, description, price } = req.body;
  try {
    const newService = new Service({ name, description, price });
    await newService.save();
    res.status(201).json({  message: 'Service created successfully', service: newService });
  } catch (err) {
    res.status(500).json({ message: 'Error creating service', error: err });
  }
};

// Get all services
exports.getAllServices = async (req, res) => {
  try {
    const services = await Service.find();
    res.status(200).json(services);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching services', error: err });
  }
};
