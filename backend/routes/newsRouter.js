const express = require("express");
const middlewareController = require("../controllers/middlewareController");
const newsController = require("../controllers/newsControllers");

const router = express.Router();

// thêm tin tuyển dụng
router.post(
  "/add_news",
  middlewareController.verifyTokenAndAdmin,
  newsController.add_news
);
// công ty tự thêm tin tuyển dụng
router.post(
  "/business/add_news",
  middlewareController.verifyAdminAndBusiness,
  newsController.add_news_business
);
//lấy tất cả tin tuyển dụng
router.get("/mana-news", newsController.getNews);
//lấy tin tuyển dụng của 1 doanh nghiệp
router.get(
  "/mana-news/business/:id",
  middlewareController.verifyToken,
  newsController.get_news_business
);
//lấy tin tuyển dụng của doanh nghiệp đã đăng nhập
router.get(
  "/mana-news/self-business",
  middlewareController.verifyAdminAndBusiness,
  newsController.get_news_selfBusiness
);
// lấy tin tuyển dụng - chi tiết
router.get("/mana-news-details/:id", newsController.getNews_details);
router.post("/apply-job/:id", middlewareController.verifyToken, newsController.applied_job);
router.get("/getCv-news/:id", middlewareController.verifyAdminAndBusiness, newsController.get_AllCV);
router.get("/business/getCV/:id", middlewareController.verifyAdminAndBusiness,newsController.businessGetCV)
module.exports = router;
