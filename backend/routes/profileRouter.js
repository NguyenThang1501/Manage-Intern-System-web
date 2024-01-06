const express = require("express");
const middlewareController = require("../controllers/middlewareController");
const profileController = require("../controllers/profileControllers");
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
module.exports = router;
