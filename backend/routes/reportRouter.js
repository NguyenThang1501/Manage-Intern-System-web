const express = require("express");
const middlewareController = require("../controllers/middlewareController");

const reportController = require("../controllers/reportControllers");
const router = express.Router();

// thêm báo cáo hàng tuần cho sinh viên (có cần đăng nhâp)
router.post("/report", middlewareController.verifyToken, reportController.weekly_report);
//thêm báo cáo cuối kì cho sinh viên (có cần đăng nhập)
router.post("/final_report", middlewareController.verifyToken, reportController.final_report);

//giảng viên lấy thông tin báo cáo thường xuyên
router.get("/teacher/mana-intern/regular-report", middlewareController.verifyTokenAndAdmin,reportController.getRegularReport)
//lấy thông tin báo cáo thường xuyên - chi tiết
router.get("/teacher/mana-intern/regular-report/details/:id", middlewareController.verifyToken,reportController.getRegularReport_details)
// giảng viên lấy báo cáo cuối kỳ của sinh viên theo id (dành cho giảng viên)
router.get("/teacher-intern/final-report/:id", middlewareController.verifyTokenAndAdmin,reportController.getfinalReport)
//sinh viên lấy báo cáo cuối kỳ
router.get("/student-intern/final-report", middlewareController.verifyToken, reportController.get_self_finalReport)
// sửa tên đề tài và mô tả cho sinh viên
router.put("/student/update-project",middlewareController.verifyToken,reportController.updateProject)
// sửa điểm cho sinh viên
router.put("/teacher/mana-intern/update-score/:id",middlewareController.verifyTokenAndAdmin,reportController.updateScore)
module.exports = router;
