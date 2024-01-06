const express = require("express");
const middlewareController = require("../controllers/middlewareController");
const businessController = require("../controllers/businessControllers");
const router = express.Router();


// lấy ra thông tin tất cả doanh nghiệp
router.get("/teacher/mana-business",middlewareController.verifyTokenAndAdmin,businessController.getAllBusiness)
// lấy ra thông tin 1 doanh nghiệp
router.get("/teacher/mana-business/:id",middlewareController.verifyTokenAndAdmin,businessController.getBusiness)

module.exports = router;
