const News = require("../models/News");
const { format } = require("date-fns");
const { vi } = require("date-fns/locale");
const CV = require("../models/CV");
const getFormattedDate = (dateString) => {
  // Chuyển đổi từ string sang đối tượng Date
  const dateObject = new Date(dateString);
  return dateObject;
};

const newsController = {
  // thêm tin tuyển dụng, id của news sẽ cho tăng dần, ví dụ trong collection đang là id news18 rồi thì tin tiếp theo
  // được thêm vào sẽ có id là news19

  add_news: async (req, res) => {
    try {
      const {
        business,
        position,
        endTime,
        describe,
        requirement,
        profit,
        address,
        daily_time,
      } = req.body;

      // Generate a random 3-digit number
      const randomThreeDigitNumber = Math.floor(100 + Math.random() * 900);

      // Generate the next news ID
      const nextId = `news${randomThreeDigitNumber}`;

      // Create news data object
      const newsData = {
        _id: nextId,
        business,
        position,
        end_time: endTime,
        describe,
        require: requirement,
        profit,
        address,
        daily_time,
      };

      // Save recruitment news to the database
      const recruitmentNews = await News.create(newsData);

      res
        .status(201)
        .json({
          message: "Recruitment information saved successfully",
          recruitmentNews,
        });
    } catch (err) {
      console.error(err);

      if (err.code === 11000) {
        // Duplicate key error
        res
          .status(409)
          .json({ error: "Duplicate Key Error", details: err.message });
      } else {
        res
          .status(500)
          .json({ error: "Internal Server Error", details: err.message });
      }
    }
  },

  add_news_business: async (req, res) => {
    try {
      const business = req.account.id;
      const { position, endTime, describe, requirement, profit, address } =
        req.body;
      const randomThreeDigitNumber = Math.floor(100 + Math.random() * 900);

      // Generate the next news ID
      const nextId = `news${randomThreeDigitNumber}`;

      const newsData = {
        _id: nextId,
        business: business,
        position: position,
        end_time: endTime,
        describe,
        require: requirement,
        profit,
        address,
      };

      const recruitmentNews = await News.create(newsData);

      res
        .status(201)
        .json({
          message: "Recruitment information saved successfully",
          recruitmentNews,
        });
    } catch (err) {
      console.error(err);
      res
        .status(500)
        .json({ error: "Internal Server Error", details: err.message });
    }
  },

  getNews: async (req, res) => {
    try {
      // Use populate to get the business information for each news item
      const newsList = await News.find({}).populate("business");

      const currentTime = new Date();

      const result = newsList.map((newsItem) => {
        const endTime = getFormattedDate(newsItem.end_time);
        const timeDifference = endTime.getTime() - currentTime.getTime();
        const daysDifference = Math.round(
          timeDifference / (1000 * 60 * 60 * 24)
        );

        // Access the populated business field to get the business name
        const businessName = newsItem.business ? newsItem.business.name : null;

        return {
          id: newsItem.id,
          position: newsItem.position,
          business: businessName,
          address: newsItem.address,
          count_down: daysDifference,
        };
      });

      return res.status(200).json(result);
    } catch (err) {
      console.error(err);
      return res.status(500).json({ error: "Internal Server Error" });
    }
  },
  get_news_business: async (req, res) => {
    try {
      const businessId = req.params.id; // Corrected line based on your route configuration

      // Use populate to get the business information for each news item
      const newsList = await News.find({ business: businessId }).populate(
        "business"
      );

      const currentTime = new Date();

      const result = newsList.map((newsItem) => {
        const endTime = getFormattedDate(newsItem.end_time);
        const timeDifference = endTime.getTime() - currentTime.getTime();
        const daysDifference = Math.round(
          timeDifference / (1000 * 60 * 60 * 24)
        );

        // Access the populated business field to get the business name
        const businessName = newsItem.business ? newsItem.business.name : null;

        return {
          id: newsItem.id,
          position: newsItem.position,
          business: businessName,
          address: newsItem.address,
          count_down: daysDifference,
        };
      });

      return res.status(200).json(result);
    } catch (err) {
      console.error(err);
      return res.status(500).json({ error: "Internal Server Error" });
    }
  },
  get_news_selfBusiness: async (req, res) => {
    try {
      const businessId = req.account.id;
      const newsList = await News.find({ business: businessId }).populate(
        "business"
      );

      const currentTime = new Date();

      const result = newsList.map((newsItem) => {
        const endTime = getFormattedDate(newsItem.end_time);
        const timeDifference = endTime.getTime() - currentTime.getTime();
        const daysDifference = Math.round(
          timeDifference / (1000 * 60 * 60 * 24)
        );

        const businessName = newsItem.business ? newsItem.business.name : null;

        return {
          id: newsItem.id,
          position: newsItem.position,
          business: businessName,
          address: newsItem.address,
          count_down: daysDifference,
        };
      });

      return res.status(200).json(result);
    } catch (err) {
      console.error(err);
      return res.status(500).json({ error: "Internal Server Error" });
    }
  },

  getNews_details: async (req, res) => {
    try {
      const { id } = req.params;
      const newsItem = await News.findById(id).populate("business");

      if (!newsItem) {
        return res.status(404).json({ error: "News not found" });
      }

      const formattedEndTime = format(
        new Date(newsItem.end_time),
        "dd MM yyyy",
        { locale: vi }
      );

      const result = {
        id: newsItem.id,
        position: newsItem.position,
        business: newsItem.business.name,
        end_time: formattedEndTime,
        describe: newsItem.describe,
        require: newsItem.require,
        profit: newsItem.profit,
        address: newsItem.address,
        time: newsItem.daily_time,
      };

      return res.status(200).json(result);
    } catch (err) {
      console.error(err);
      return res.status(500).json({ error: "Internal Server Error" });
    }
  },
  applied_job: async (req, res) => {
    try {
      const newsId = req.params.id;
      const pdfId = req.account.id; // Assuming the ID is sent in the request body

      const news = await News.findById(newsId);
      if (!news) {
        return res.status(404).json({ error: "Tin tức không tồn tại" });
      }

      if (!req.file) {
        // No file attached to the request
        return res.status(400).json({
          message: "No file attached to the request",
        });
      }

      const { originalname, buffer } = req.file;

      // Add CV information to the News model
      const appliedCVInfo = {
        _id: pdfId,
        name: originalname,
      };

      news.applied_cv.push(appliedCVInfo);

      // Save the updated News model
      const updatedNews = await news.save();

      // Save the CV as a separate document in the CV collection
      const newCV = new CV({
        student_id: pdfId,
        name: originalname,
        data: buffer,
      });

      const savedCV = await newCV.save();

      res.status(200).json({
        message: "CV đã được áp dụng cho tin tức thành công",
        updatedNews,
        savedCV,
      });
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: "Lỗi Server", chiTiet: err.message });
    }
  },

  get_AllCV: async (req, res) => {
    const newsId = req.params.id;

    try {
      // Find the job posting
      const news = await News.findById(newsId);

      if (!news) {
        return res.status(404).json({
          message: "Tin tuyển dụng không tồn tại",
        });
      }

      // Check if the requester is the business associated with the job posting
      if (news.business.toString() === req.account.id) {
        const appliedCVs = news.applied_cv;

        return res.status(200).json(appliedCVs);
      } else {
        return res.status(403).json("You're not allowed");
      }
    } catch (err) {
      console.error(err);
      return res.status(500).json({
        message: "Lỗi Server",
        error: err.message,
      });
    }
  },

  businessGetCV: async (req, res) => {
    try {
      const businessID = req.account.id;
      const studentID = req.params.id;

      // Find news posted by the business
      const news = await News.findOne({ business: businessID });

      if (!news) {
        return res.status(404).json({
          message: "Business has not posted any news",
        });
      }

      // Check if the news has applied_cv array
      if (!news.applied_cv || news.applied_cv.length === 0) {
        return res.status(404).json({
          message: "No CVs applied for this news",
        });
      }

      // Check if the applied_cv array contains the specified studentID
      const cvID = news.applied_cv.find((appliedCV) => appliedCV === studentID);

      if (!cvID) {
        return res.status(404).json({
          message: "No CV found for the specified student",
        });
      }

      // Retrieve the CV using the found CV ID
      const cv = await CV.findOne({ student_id: cvID });
      console.log(cv);
      if (!cv) {
        return res.status(404).json({
          message: "CV not found for the specified student",
        });
      }
      res.setHeader("Content-Type", "application/pdf");
      res.setHeader("Content-Disposition", `attachment; filename=${cv.name}`);
      res.send(cv.data);
    } catch (err) {
      console.error(err);
      return res.status(500).json({
        message: "Internal Server Error",
        error: err.message,
      });
    }
  },
};

module.exports = newsController;
