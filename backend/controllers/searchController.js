const Students = require('../models/Student');

const searchById = async (req, res) => {
    const studentId = req.params.id;

    try {
        const student = await Students.findById(studentId);
        if (!student) {
            return res.status(404).json({ message: 'Student not found' });
        }

        res.status(200).json(student);
    } catch (error) {
        res.status(500).json({ message: 'Server Error' });
    }
};

const searchByName = async (req, res) => {
    const studentName = req.params.name;

    try {
        const students = await Students.find({ name: { $regex: new RegExp(studentName, 'i') } });
        if (students.length === 0) {
            return res.status(404).json({ message: 'No students found with the given name' });
        }

        res.status(200).json(students);
    } catch (error) {
        res.status(500).json({ message: 'Server Error' });
    }
};

module.exports = { searchById, searchByName };


