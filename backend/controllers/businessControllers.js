const Business = require("../models/Business")

const businessController = {
    getbusiness: async (req, res) => {
        try {
            const business = await Business.find({});
            const result = business.map(item => {
                return {
                    name: item.name,
                    describe: item.describe,
                    website: item.website,
                    hotline: item.phone_number 
                };
            });
    
            return res.status(200).json(result);
        } catch (err) {
            console.error(err);
            return res.status(500).json({ error: 'Internal Server Error' });
        }
    },
};

module.exports = businessController;
