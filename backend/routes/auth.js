const accountController = require("../controllers/accountControllers");
const middlewareController = require("../controllers/middlewareController");
const businessController = require("../controllers/businessControllers");
const newsController = require("../controllers/newsControllers");
const reportController = require("../controllers/reportControllers");
const profileController = require("../controllers/profileControllers");
const positionController = require("../controllers/positionControllers");
const aspirationController = require("../controllers/aspirationControllers");
const router = require("express").Router();
// đăng ký
router.post("/register", accountController.registerUser);
// đăng nhập
router.post("/login", accountController.loginUser);
// thêm báo cáo hàng tuần cho sinh viên (có cần đăng nhâp)
router.post("/report", middlewareController.verifyToken, reportController.weekly_report);
// thêm tin tuyển dụng
router.post("/add_news", newsController.add_news);
//thêm báo cáo cuối kì cho sinh viên (có cần đăng nhập)
router.post("/final_report", middlewareController.verifyToken, reportController.final_report);
// thêm kết quả thực tập cho mấy đứa thực tập ngoài
router.post("/result",middlewareController.verifyToken, positionController.add_result);
// lấy ra tất cả kết quả thực tập
router.get("/get_result", positionController.get_result);
// Log out
router.post("/logout", middlewareController.verifyToken, accountController.userLogout);
// lấy ra tất cả các vị trí
router.get("/getAllPosition", positionController.get_all_position);
// thêm nguyện vọng cho sinh viên đã đăng nhập
router.post("/add_aspiration",middlewareController.verifyToken, aspirationController.add_aspiration);
// xem nguyện vọng của sinh viên (có cần đăng nhập)
router.get("/get_aspiration",middlewareController.verifyToken, aspirationController.get_aspiration);
module.exports = router;
