const News = require('../models/News')
const { format } = require('date-fns');
const { vi } = require('date-fns/locale');
const newsController = {

    // thêm tin tuyển dụng, id của news sẽ cho tăng dần, ví dụ trong collection đang là id news18 rồi thì tin tiếp theo
    // được thêm vào sẽ có id là news19

    add_news: async (req, res) => {
        try {
            const { business, position, title, startTime, endTime, describe, requirement, profit, address } = req.body;

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
                const timeDifference = newsItem.end_time.getTime() - currentTime.getTime();
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
                const timeDifference = newsItem.end_time.getTime() - currentTime.getTime();
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
                const timeDifference = newsItem.end_time.getTime() - currentTime.getTime();
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
    
    getNews_details: async (req, res) => {
        try {
            const { id } = req.params; 
            const newsItem = await News.findById(id);
    
            if (!newsItem) {
                return res.status(404).json({ error: 'News not found' });
            }
    
            const formattedEndTime = format(new Date(newsItem.end_time), 'dd MMMM yyyy', { locale: vi });
    
            const result = {
                id: newsItem.id,
                position: newsItem.position,
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
    
};


module.exports = newsController;
