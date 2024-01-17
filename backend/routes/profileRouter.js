const express = require("express");
const middlewareController = require("../controllers/middlewareController");
const profileController = require("../controllers/profileControllers");
const router = express.Router();

// Lấy tất cả các hồ sơ
router.get(
  "/teacher/student-mana",
  middlewareController.verifyTokenAndAdmin,
  profileController.getAllProfiles
);

// Lấy hồ sơ người dùng
router.get(
  "/teacher/student-mana/:id",
  middlewareController.verifyToken,
  profileController.getProfile
);

// Cập nhật hồ sơ người dùng
router.put(
  "/teacher/student-mana/:id",
  middlewareController.verifyToken,
  profileController.updateProfile
);

// Tạo hồ sơ cho sinh viên
router.post("/teacher/student-mana", profileController.createProfile);

// Xoá hồ sơ người dùng
router.delete(
  "/teacher/student-mana/:id",
  middlewareController.verifyTokenAndAdmin,
  profileController.deleteProfile
);
module.exports = router;
