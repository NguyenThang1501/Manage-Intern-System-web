const express = require("express");
const middlewareController = require("../controllers/middlewareController");
const CVController = require("../controllers/CVControllers")
const router = express.Router();

const multer = require('multer');
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });


// Tải lên CV
router.post("/upload_CV", upload.single('file'), middlewareController.verifyToken, CVController.uploadCV);

// Xem CV 
router.get("/view_CV/:id", middlewareController.verifyToken, CVController.viewCV);

module.exports = router;
