const { it } = require("date-fns/locale");
const Business = require("../models/Business")


const businessController = {
    getAllBusiness: async (req, res) => {
        try {
            const business = await Business.find({});
            const result = business.map(item => {
                return {
                    id: item._id,
                    name: item.name,
                    describe: item.describe,
                    hr_email: item.email,
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
                hr : business.hr,
                email: business.email,
                hotline: business.phone_number 
            };

            return res.status(200).json(result);
        } catch (err) {
            console.error(err);
            return res.status(500).json({ error: 'Internal Server Error' });
        }
    },

    updateBusiness: async (req, res) => {
        try {
            const businessId = req.params.id;

            const business = await Business.findById(businessId);
            if (!business) {
                return res.status(404).json("Business not found");
            }

            // Update profile information as requested
            if (req.body.name) business.name = req.body.name;
            if (req.body.describe) business.describe = req.body.describe;
            if (req.body.address) business.address = req.body.address;
            if (req.body.hr) business.hr = req.body.hr;
            if (req.body.email) business.email = req.body.email;
            if (req.body.phone_number) business.phone_number = req.body.phone_number;

            await business.save();
            res.status(200).json("Business updated successfully");
        } catch (err) {
            res.status(500).json({ error: "Internal Server Error", details: err.message });
        }
    },

    deleteBusiness: async (req, res) => {
        try {
            const businessId = req.params.id;
            const business = await Business.findById(businessId);

            if (!business) {
                return res.status(404).json("Business not found");
            }

            await Business.findByIdAndDelete(businessId);

            res.status(200).json("Business deleted successfully");
        } catch (err) {
            res.status(500).json({ error: "Internal Server Error", details: err.message });
        }
    },

    createABusiness: async (req, res) => {
        try {
            // Extract business information from the request body
            const { _id, name, describe, address, hr, phone_number, email } = req.body;
    
            // Create a new business instance
            const newBusiness = new Business({
                _id, name, describe, address, hr, phone_number, email
            });
    
            // Save the new business to the database
            await newBusiness.save();
    
            res.status(201).json("Business created successfully");
        } catch (err) {
            res.status(500).json({ error: "Internal Server Error", details: err.message });
        }
    
    },
    // count business
    getBusinessCount: async (req, res) => {
        try {
            const businessCount = await Business.countDocuments();
            res.json({ count: businessCount });
        } catch (error) {
            console.error('Error fetching business count:', error);
            res.status(500).json({ error: 'Internal Server Error' });
        }
    }

};

module.exports = businessController;
