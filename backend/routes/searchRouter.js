const express = require('express');
const router = express.Router();
const studentController = require('../controllers/searchController');

// Search students by ID
router.get('/searchById/:id', studentController.searchById);

// Search students by name
router.get('/searchByName/:name', studentController.searchByName);

module.exports = router;
