const express = require('express');
const router = express.Router();
const registerTimeController = require('../controllers/registerTimeController');
const middlewareController = require("../controllers/middlewareController")

router.post('/teacher/open-register', middlewareController.verifyTokenAndAdmin, registerTimeController.createRegisterTime);

router.put('/teacher/update-register', middlewareController.verifyTokenAndAdmin, registerTimeController.updateRegisterTime)

module.exports = router;