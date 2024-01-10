
const middlewareController = require("../controllers/middlewareController");

const teacherController = require("../controllers/teacherControllers");
const router = require("express").Router();

router.get("/teacher/profile", middlewareController.verifyTokenAndAdmin, teacherController.getProfile);

router.put("/teacher/profile", middlewareController.verifyTokenAndAdmin, teacherController.updateProfile)

module.exports = router;
