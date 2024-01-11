const accountController = require("../controllers/accountControllers");
const middlewareController = require("../controllers/middlewareController");

const router = require("express").Router();
// đăng ký
router.post("/register", accountController.registerUser);
// đăng nhập
router.post("/login", accountController.loginUser);
// Log out
router.post("/logout", middlewareController.verifyToken, accountController.userLogout);
router.post("/updatePassword", middlewareController.verifyToken, accountController.updatePassword)
module.exports = router;
