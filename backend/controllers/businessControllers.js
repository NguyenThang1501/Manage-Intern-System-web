const Business = require("../models/Business")

const businessController = {
    getAllBusiness: async (req, res) => {
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
    
    getBusiness: async (req, res) => {
        try {
            
            const businessId = req.params.id;
            const business = await Business.findById(businessId);

            if (!business) {
                return res.status(404).json({ error: 'Business not found' });
            }

            const result = {
                name: business.name,
                describe: business.describe,
                address: business.address,
                website: business.website,
                hotline: business.phone_number 
            };

            // Send the formatted result as a JSON response
            return res.status(200).json(result);
        } catch (err) {
            console.error(err);
            return res.status(500).json({ error: 'Internal Server Error' });
        }
    }

};

module.exports = businessController;
