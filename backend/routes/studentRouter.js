// routes/studentsRoutes.js
const express = require('express');
const studentsController = require('../controllers/studentController');

const router = express.Router();

// API to get the number of students
router.get('/teacher/homepage/student-count', studentsController.getStudentCount);

// API to get the number of students with cert and others
router.get('/teacher/homepage/cert-count', studentsController.getCertCount);

module.exports = router;