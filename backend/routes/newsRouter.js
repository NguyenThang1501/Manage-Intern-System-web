const express = require("express");
const middlewareController = require("../controllers/middlewareController");
const newsController = require("../controllers/newsControllers");

const router = express.Router();

// thêm tin tuyển dụng
router.post(
  "/add_news",
  middlewareController.verifyAdminAndBusiness,
  newsController.add_news
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

module.exports = router;
