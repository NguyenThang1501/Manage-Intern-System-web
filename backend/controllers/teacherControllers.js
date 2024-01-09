const Teacher = require("../models/Teacher")

const teacherController = {
    getProfile: async (req, res) => {
        try {
            const teacherId = req.account._id; 
            const teacher = await Teacher.findById(teacherId);
    
            if (!teacher) {
                return res.status(404).json({ error: 'Teacher not found.' });
            }
    
            const { _id, ...profileInfo } = teacher._doc;
    
            res.status(200).json(profileInfo);
        } catch (err) {
            res.status(500).json({ error: 'Internal Server Error', details: err.message });
        }
    },

    updateProfile: async (req, res) => {
        try {
            const teacherId = req.account._id; 
            const teacher = await Teacher.findById(teacherId);

            if (!teacher) {
                return res.status(404).json({ error: 'Teacher not found.' });
            }

            if (req.body.name) teacher.name = req.body.name;
            if (req.body.address) teacher.address = req.body.address;
            if (req.body.position) teacher.position = req.body.position;

            await teacher.save();

            res.status(200).json({ message: 'Teacher profile updated successfully.' });
        } catch (err) {
            res.status(500).json({ error: "Internal Server Error", details: err.message });
        }
    },

};

module.exports = teacherController;
