const { exec } = require("child_process");
const Student = require('../models/Student');
const Result = require("../models/InternshipResult");
const Position = require("../models/Position");

const positionController = {
    get_all_position : async (req, res) => {
        try {
            // Sử dụng Mongoose để truy vấn tất cả các vị trí từ cơ sở dữ liệu và populate thông tin của công ty
            const positions = await Position.find({}, { "_id": 1, "name": 1, "business": 1 })
                .populate({ path: 'business', select: 'name' });
    
            // Chuyển đổi kết quả để đáp ứng yêu cầu cụ thể
            const formattedPositions = positions.map(position => ({
                _id: position._id,
                name: position.name,
                business: position.business ? position.business.name : null
            }));
    
            // Trả về dữ liệu trong phản hồi
            res.status(200).json({ positions: formattedPositions });
        } catch (error) {
            // Xử lý lỗi nếu có bất kỳ vấn đề nào xảy ra trong quá trình truy vấn cơ sở dữ liệu
            console.error(error);
            res.status(500).json({ error: 'Internal Server Error' });
        }
    }
    
    
    
    
};

module.exports = positionController;
