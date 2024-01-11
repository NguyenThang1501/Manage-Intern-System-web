const News = require('../models/News')
const { format } = require('date-fns');
const { vi } = require('date-fns/locale');
const CV = require("../models/CV")
const JSZip = require('jszip');
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
            const { business, position, endTime, describe, requirement, profit, address, daily_time } = req.body;
    
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
                daily_time
            };
    
            // Save recruitment news to the database
            const recruitmentNews = await News.create(newsData);
    
            res.status(201).json({ message: 'Recruitment information saved successfully', recruitmentNews });
        } catch (err) {
            console.error(err);
    
            if (err.code === 11000) {
                // Duplicate key error
                res.status(409).json({ error: 'Duplicate Key Error', details: err.message });
            } else {
                res.status(500).json({ error: 'Internal Server Error', details: err.message });
            }
        }
    },
    
    
    
    add_news_business: async (req, res) => {
        try {
            const business = req.account.id;
            const { position, endTime, describe, requirement, profit, address } = req.body;

            const latestNews = await News.findOne({}, {}, { sort: { '_id': -1 } });
            let nextId;
            if (latestNews) {
                const currentIdNumber = parseInt(latestNews._id.replace('news', ''), 10);
                nextId = `news${currentIdNumber + 1}`;
            } else {
                // If no existing news, start from news0
                nextId = 'news0';
            }
    
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
    
            res.status(201).json({ message: 'Recruitment information saved successfully', recruitmentNews });
        } catch (err) {
            console.error(err);
            res.status(500).json({ error: 'Internal Server Error', details: err.message });
        }
    },    

    getNews: async (req, res) => {
        try {
            // Use populate to get the business information for each news item
            const newsList = await News.find({}).populate('business');
            
            const currentTime = new Date(); 
    
            const result = newsList.map(newsItem => {
                const endTime = getFormattedDate(newsItem.end_time);
                const timeDifference = endTime.getTime() - currentTime.getTime();
                const daysDifference = Math.round(timeDifference / (1000 * 60 * 60 * 24)); 
                
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
            return res.status(500).json({ error: 'Internal Server Error' });
        }
    },
    get_news_business: async (req, res) => {
        try {
            const businessId = req.params.id; // Corrected line based on your route configuration
    
            // Use populate to get the business information for each news item
            const newsList = await News.find({ business: businessId }).populate('business');
    
            const currentTime = new Date();
    
            const result = newsList.map(newsItem => {
                const endTime = getFormattedDate(newsItem.end_time);
                const timeDifference = endTime.getTime() - currentTime.getTime();
                const daysDifference = Math.round(timeDifference / (1000 * 60 * 60 * 24));
    
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
            return res.status(500).json({ error: 'Internal Server Error' });
        }
    },
    get_news_selfBusiness: async (req, res) => {
        try {
            const businessId = req.account.id; 
            const newsList = await News.find({ business: businessId }).populate('business');
    
            const currentTime = new Date();
    
            const result = newsList.map(newsItem => {
                const endTime = getFormattedDate(newsItem.end_time);
                const timeDifference = endTime.getTime() - currentTime.getTime();
                const daysDifference = Math.round(timeDifference / (1000 * 60 * 60 * 24));
    
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
            return res.status(500).json({ error: 'Internal Server Error' });
        }
    },
    
    getNews_details: async (req, res) => {
        try {
            const { id } = req.params; 
            const newsItem = await News.findById(id).populate('business');
    
            if (!newsItem) {
                return res.status(404).json({ error: 'News not found' });
            }
    
            const formattedEndTime = format(new Date(newsItem.end_time), 'dd MM yyyy', { locale: vi });
    
            const result = {
                id: newsItem.id,
                position: newsItem.position,
                business: newsItem.business.name,
                end_time: formattedEndTime,
                describe: newsItem.describe,
                require: newsItem.require,
                profit: newsItem.profit,
                address: newsItem.address,
                time: newsItem.daily_time
            };
    
            return res.status(200).json(result);
        } catch (err) {
            console.error(err);
            return res.status(500).json({ error: 'Internal Server Error' });
        }
    },
    applied_job: async(req,res) => {
        const newsId = req.params.id;
        const cvId = req.account.id;

        try {
            const news = await News.findById(newsId);
            if (!news) {
                return res.status(404).json({ error: 'Tin tức không tồn tại' });
            }
            const cv = await CV.findById(cvId);
            if (!cv) {
                return res.status(404).json({ error: 'CV không tồn tại' });
            }
            const appliedCVInfo = {
                _id: cvId,
                name: cv.name,
            };
            news.applied_cv.push(appliedCVInfo);

            const updatedNews = await news.save();
            res.status(200).json({
                message: 'CV đã được áp dụng cho tin tức thành công',
                updatedNews,
            });
        } catch (err) {
            console.error(err);
            res.status(500).json({ error: 'Lỗi Server' });
        }
    },

    get_cv: async(req,res) => {
        const newsId = req.params.id;

        try {
            // Tìm tin tuyển dụng
            const news = await News.findById(newsId).populate('applied_cv');

            if (!news) {
                return res.status(404).json({
                    message: 'Tin tuyển dụng không tồn tại',
                });
            }

            const appliedCVs = news.applied_cv;
            for (const appliedCV of appliedCVs) {
                const cv = await CV.findById(appliedCV._id);

                if (!cv) {
                    console.error(`CV not found for ID: ${appliedCV._id}`);
                    continue;
                }
                res.setHeader('Content-Type', 'application/pdf');
                res.setHeader('Content-Disposition', `attachment; filename=${appliedCV.name}`);
                res.send(appliedCV.data);
            }
        } catch (err) {
            console.error(err);
            return res.status(500).json({
                message: 'Lỗi Server',
                error: err.message,
            });
        }
    }
    
};


module.exports = newsController;
