const express = require('express');
const router = express.Router();
const studentController = require('../controllers/searchController');
const middlewareController = require('../controllers/middlewareController')

// Search students by ID
router.get('/searchById/:id', middlewareController.verifyTokenAndAdmin, studentController.searchById);

// Search students by name
router.get('/searchByName/:name', middlewareController.verifyTokenAndAdmin, studentController.searchByName);

module.exports = router;
