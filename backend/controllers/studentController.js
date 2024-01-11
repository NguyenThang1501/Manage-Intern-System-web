// controllers/studentsController.js
const Students = require('../models/Student');

exports.getStudentCount = async (req, res) => {
  try {
    const studentCount = await Students.countDocuments();
    res.json({ count: studentCount });
  } catch (error) {
    console.error('Error fetching student count:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

exports.getCertCount = async (req, res) => {
  try {
    const certCount = await Students.countDocuments({ cert: { $ne: 0 } });
    const noCertCount = await Students.countDocuments({ cert: 0 });

    res.json({ withCert: certCount, withoutCert: noCertCount });
  } catch (error) {
    console.error('Error fetching cert count:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};