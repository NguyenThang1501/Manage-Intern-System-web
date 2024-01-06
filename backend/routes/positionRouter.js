const middlewareController = require("../controllers/middlewareController");
const positionController = require("../controllers/positionControllers");
const router = require("express").Router();

// lấy ra tất cả các vị trí
router.get("/getAllPosition", positionController.get_all_position);
module.exports = router;
