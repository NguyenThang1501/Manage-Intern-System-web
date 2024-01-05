const express = require("express");
const middlewareController = require("../controllers/middlewareController");
const accountController = require("../controllers/accountControllers");
const businessController = require("../controllers/businessControllers");
const newsController = require("../controllers/newsControllers");
const reportController = require("../controllers/reportControllers");
const profileController = require("../controllers/profileControllers");
const positionController = require("../controllers/positionControllers");
const router = express.Router();

// Lấy tất cả các hồ sơ (Chỉ Admin có quyền)
router.get("/teacher/teacher-mana", middlewareController.verifyTokenAndAdmin, profileController.getAllProfiles);

// Lấy hồ sơ người dùng (Admin hoặc người dùng)
router.get("/teacher/teacher-mana/:id", middlewareController.verifyToken, profileController.getProfile);

// Cập nhật hồ sơ người dùng (Admin hoặc người dùng)
router.put("/teacher/teacher-mana/:id", middlewareController.verifyToken, profileController.updateProfile);

// Tạo hồ sơ cho sinh viên có profile null (Chỉ Admin có quyền)
router.post("/teacher/student-mana/:id", middlewareController.verifyTokenAndAdmin, profileController.createProfile);

// Xoá hồ sơ người dùng (Chỉ Admin có quyền)
router.delete("/teacher/teacher-mana/:id", middlewareController.verifyTokenAndAdmin, profileController.deleteProfile);
//lấy thông tin báo cáo thường xuyên
router.get("/teacher/mana-intern/regular-report", middlewareController.verifyTokenAndAdmin,reportController.getRegularReport)
//lấy thông tin báo cáo thường xuyên - chi tiết
router.get("/teacher/mana-intern/regular-report/details/:id", middlewareController.verifyTokenAndAdmin,reportController.getRegularReport_details)
//chạy thuật toán matching
router.post("/runalgorithms", middlewareController.verifyTokenAndAdmin,positionController.runcode);

//lấy tin tuyển dụng
router.get("/mana-news", newsController.getNews);
// lấy tin tuyển dụng - chi tiết
router.get("/mana-news-details/:id", newsController.getNews_details);
// lấy báo cáo cuối kỳ của sinh viên theo id (dành cho giảng viên)
router.get("/teacher-intern/final-report/:id", middlewareController.verifyTokenAndAdmin,reportController.getfinalReport)
// lấy ra thông tin doanh nghiệp
router.get("/teacher/mana-business",middlewareController.verifyTokenAndAdmin,businessController.getbusiness)

module.exports = router;
