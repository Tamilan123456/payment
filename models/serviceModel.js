const mongoose = require('mongoose');

const serviceSchema = new mongoose.Schema({
  name: { type: String, required: true },
  isActive: { type: Boolean, default: false }
});

module.exports = mongoose.model('Service', serviceSchema);
// 