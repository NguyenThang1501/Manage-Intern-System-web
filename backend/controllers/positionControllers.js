
const Position = require("../models/Position");
const RegisterTime = require('../models/RegisterTime');
const moment = require('moment');
const positionController = {
    getAllPositions : async (req, res) => {
        try {
          const currentTime = moment();
          const registerTimes = await RegisterTime.find({
            start_time: { $lte: currentTime },
            end_time: { $gte: currentTime },
          });
      
          if (registerTimes.length === 0) {
            // Nếu không có khoảng thời gian phù hợp, trả về thông báo
            return res.status(400).json({ message: 'Ngoài thời hạn đăng ký' });
          }
      
          // Nếu có thời gian phù hợp, lấy danh sách vị trí
          const positions = await Position.find();
          res.status(200).json(positions);
        } catch (err) {
          res.status(500).json({ error: 'Internal Server Error', details: err.message });
        }
    },

    postAPosition: async (req, res) => {
        try {
            // Lấy dữ liệu từ req.body
            const { _id, name, business, capacity, require, cpa_required } = req.body;

            // Kiểm tra xem vị trí có tồn tại không
            const existingPosition = await Position.findOne({ _id });

            if (existingPosition) {
                // Nếu vị trí đã tồn tại, trả về thông báo lỗi
                return res.status(400).json({ error: "Position already exists", details: "This position is already in use." });
            }

            // Tạo một vị trí mới
            const newPosition = new Position({
                _id,
                name,
                business,
                capacity,
                require,
                cpa_required
            });

            // Lưu vị trí vào cơ sở dữ liệu
            const savedPosition = await newPosition.save();

            res.status(201).json(savedPosition);
        } catch (err) {
            res.status(500).json({ error: "Internal Server Error", details: err.message });
        }
    },
    deletePosition: async (req, res) => {
        try {
            // Lấy id của vị trí từ req.params
            const positionId = req.params.id;
    
            // Kiểm tra xem vị trí có tồn tại không
            const existingPosition = await Position.findById(positionId);

    
            if (!existingPosition) {
                // Nếu vị trí không tồn tại, trả về thông báo lỗi
                return res.status(404).json({ error: "Position not found", details: "This position does not exist." });
            }
    
            // Xoá vị trí từ cơ sở dữ liệu
            await Position.findByIdAndDelete(positionId);
    
            res.status(200).json({ message: "Position deleted successfully" });
        } catch (err) {
            res.status(500).json({ error: "Internal Server Error", details: err.message });
        }
    },

    updatePosition: async (req, res) => {
        try {
            // Lấy id của vị trí từ req.params
            const positionId = req.params.id;
    
            // Lấy dữ liệu cập nhật từ req.body
            const { name, business, capacity, require, cpa_required } = req.body;
    
            // Kiểm tra xem vị trí có tồn tại không
            const existingPosition = await Position.findById(positionId);
    
            if (!existingPosition) {
                // Nếu vị trí không tồn tại, trả về thông báo lỗi
                return res.status(404).json({ error: "Position not found", details: "This position does not exist." });
            }
    
            // Cập nhật thông tin vị trí
            existingPosition.name = name;
            existingPosition.business = business;
            existingPosition.capacity = capacity;
            existingPosition.require = require;
            existingPosition.cpa_required = cpa_required;
    
            // Lưu vị trí đã cập nhật vào cơ sở dữ liệu
            const updatedPosition = await existingPosition.save();
    
            res.status(200).json(updatedPosition);
        } catch (err) {
            res.status(500).json({ error: "Internal Server Error", details: err.message });
        }
    },

    
    
    
    
};

module.exports = positionController;
