const fs = require('fs');
const Business = require("../models/Business");
const imagePath = 'D:/khanhlyta/Li/li.jpg'; // Đường dẫn đến tệp ảnh

const saveImageForBusiness = async (businessId, imagePath) => {
    try {
        // Read the image file
        const imageData = fs.readFileSync(imagePath);

        // Encode the image data to Base64
        const base64Image = imageData.toString('base64');

        // Find the business by ID
        const business = await Business.findById(businessId);

        if (!business) {
            console.error('Business not found.');
            return;
        }
        business.image = base64Image;
        await business.save();

        console.log('Image saved and associated with business:', business);
    } catch (error) {
        console.error('Error reading, encoding, or updating image for business:', error);
    }
};

// Usage example: Assuming B0 is the business ID and 'path/to/your/image.jpg' is the image path
saveImageForBusiness('B0', imagePath);