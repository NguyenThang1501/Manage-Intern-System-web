const { exec } = require("child_process");
const Student = require('../models/Student');
const Result = require("../models/InternshipResult");
const Position = require("../models/Position");

const positionController = {
    runcode: async (req, res) => {
        exec("python .\\algorithms\\demo.py", (error, stdout, stderr) => {
          if (error) {
            console.error(`Error executing the Python script: ${error}`);
            return res.status(500).send("Internal Server Error");
          }
    
          try {
            const jsonData = JSON.parse(stdout);
            res.json(jsonData);
          } catch (parseError) {
            console.error(`Error parsing JSON: ${parseError}`);
            res.send(stdout.replace(/\n/g, "<br>"));
          }
        });
    },
    //add kết quả thực tập cho mấy đứa thực tập ngoài, chỉ cần nhập id, tên vị trí và tên doanh nghiệp
    // mấy thuộc tính khác tự động được thêm nếu id valid
    add_result: async (req, res) => {
        try {
            const studentId = req.account.id;
            const existingStudent = await Student.findById(studentId).select('name birthday sex major -_id');
    
            if (!existingStudent) {
                return res.status(404).json({ error: 'Student not found', success: false });
            }
    
            const position = req.body.position;
            const business = req.body.business;
            const instructor = req.body.instructor;
            const instructorphone = req.body.phone;
            const instructormail = req.body.mail;
            // Extract selected attributes from the existing student
            const { name, birthday, sex, major } = existingStudent.toObject();
    
            await Result.create({
                _id: studentId,
                name,
                birthday,
                sex,
                major,
                position,
                business,
                instructor,
                instructorphone,
                instructormail
            });
    
            res.status(200).json({ success: true });
        } catch (err) {
            console.error(err);
            res.status(500).json({ error: 'Internal Server Error', details: err.message, success: false });
        }
    },

    get_result: async (req, res) => {
        try {
            const internshipResults = await Result.find();
            res.status(200).json(internshipResults);
        } catch (err) {
            console.error(err);
            res.status(500).json({ error: 'Internal Server Error' });
        }
    },

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
