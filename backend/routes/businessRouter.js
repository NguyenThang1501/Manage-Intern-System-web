const express = require("express");
const middlewareController = require("../controllers/middlewareController");
const businessController = require("../controllers/businessControllers");
const router = express.Router();


// lấy ra thông tin tất cả doanh nghiệp
router.get("/teacher/business-mana", middlewareController.verifyTokenAndAdmin,businessController.getAllBusiness)
// lấy ra thông tin 1 doanh nghiệp
router.get("/teacher/business-mana/:id", middlewareController.verifyTokenAndAdmin,businessController.getBusiness)

router.put("/teacher/business-mana/:id", middlewareController.verifyTokenAndAdmin, businessController.updateBusiness);

router.delete("/teacher/business-mana/:id", middlewareController.verifyTokenAndAdmin, businessController.deleteBusiness);

router.post("/teacher/business-mana", middlewareController.verifyTokenAndAdmin, businessController.createABusiness)

module.exports = router;
