const express = require('express');
const { createService, getAllServices } = require('../controllers/serviceController');
const router = express.Router();

router.post('/services/create', createService); // 🛠 Changed route
router.get('/services', getAllServices);

module.exports = router;
