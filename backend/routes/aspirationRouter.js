
const middlewareController = require("../controllers/middlewareController");

const aspirationController = require("../controllers/aspirationControllers");
const router = require("express").Router();

// thêm kết quả thực tập cho mấy đứa thực tập ngoài
router.post("/result",middlewareController.verifyToken, aspirationController.add_result);
// lấy ra tất cả kết quả thực tập 
router.get("/get_all_result", middlewareController.verifyTokenAndAdmin ,aspirationController.get_all_result);
// lấy ra kết quả thực tập của sinh viên đã đăng nhập
router.get("/get_result", middlewareController.verifyToken, aspirationController.getResult);
// thêm nguyện vọng cho sinh viên đã đăng nhập
router.post("/add_aspiration",middlewareController.verifyToken, aspirationController.add_aspiration);
// xem nguyện vọng của sinh viên (có cần đăng nhập)
router.get("/get_aspiration",middlewareController.verifyToken, aspirationController.get_aspiration);
//chạy thuật toán matching
router.post("/runalgorithms", middlewareController.verifyTokenAndAdmin,aspirationController.runcode);

module.exports = router;
