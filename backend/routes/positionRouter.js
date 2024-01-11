const middlewareController = require("../controllers/middlewareController");
const positionController = require("../controllers/positionControllers");
const router = require("express").Router();

// lấy ra tất cả các vị trí
router.get("/list-positions", middlewareController.verifyToken, positionController.getAllPositions);

router.post("/teacher/create-positions", middlewareController.verifyTokenAndAdmin, positionController.postAPosition);

router.put("/teacher/update-positions/:id", middlewareController.verifyTokenAndAdmin, positionController.updatePosition);

router.delete("/teacher/delete-positions/:id", middlewareController.verifyTokenAndAdmin, positionController.deletePosition);

router.get("/checkTime", positionController.checkTime);

// count position
router.get('/teacher/count-positions', positionController.getPositionCount);

module.exports = router;
