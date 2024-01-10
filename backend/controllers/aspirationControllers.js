const { exec } = require("child_process");
const Student = require('../models/Student');
const Result = require("../models/InternshipResult");
const Aspiration = require("../models/Aspiration");
const RegisterTime = require('../models/RegisterTime');
const moment = require('moment');
const promiseController = {
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

  add_result: async (req, res) => {
    try {
      const studentId = req.account.id;
      const existingStudent = await Student.findById(studentId).select('name birthday sex major -_id');

      if (!existingStudent) {
        return res.status(404).json({ error: 'Student not found', success: false });
      }

      const position = req.body.position;
      const business = req.body.business;

      // Extract selected attributes from the existing student
      const { name, birthday, sex, major } = existingStudent.toObject();

      await Result.create({
        _id: studentId,
        name,
        birthday,
        sex,
        major,
        position,
        business
      });

      res.status(200).json({ success: true });
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Internal Server Error', details: err.message, success: false });
    }
  },

  get_all_result: async (req, res) => {
    try {
      const internshipResults = await Result.find();
      res.status(200).json(internshipResults);
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },

  getResult: async (req, res) => {
    try {
      const studentId = req.account.id;
      const result = await Result.findOne({ _id: studentId });

      if (!result) {
        return res.status(404).json({ error: 'Result not found for the student', success: false });
      }

      res.status(200).json({ success: true, result });
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Internal Server Error', details: err.message, success: false });
    }
  },


  add_aspiration: async (req, res) => {
    try {
      const studentId = req.account.id;

      if (!studentId) {
        return res.status(403).json({ error: "Student ID not available" });
      }

      const { promised_positions } = req.body;

      if (!Array.isArray(promised_positions) || promised_positions.length !== 3) {
        return res.status(400).json({ error: "Exactly three promised positions are required" });
      }

      // Lấy thời gian hiện tại
      const currentTime = moment();

      // Tìm một bản ghi trong registerTime có thời gian hiện tại nằm trong khoảng start_time và end_time
      const registerTime = await RegisterTime.findOne({
        start_time: { $lte: currentTime },
        end_time: { $gte: currentTime },
      });

      if (!registerTime) {
        // Nếu không có khoảng thời gian phù hợp, trả về thông báo
        return res.status(400).json({ error: 'Ngoài thời hạn đăng ký' });
      }

      // Find an existing promise for the student
      let existingPromise = await Aspiration.findById(studentId);

      if (existingPromise) {
        // If an existing promise is found, update it
        existingPromise.promised_positions = promised_positions.map(position => ({ _id: position._id }));
      } else {
        // If no existing promise is found, create a new one
        existingPromise = new Aspiration({
          _id: studentId,
          promised_positions: promised_positions.map(position => ({ _id: position._id })),
          // Add other properties of the promise schema if needed
        });
      }

      const savedPromise = await existingPromise.save();

      res.status(201).json({ promise: savedPromise });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },

  get_aspiration: async (req, res) => {
    try {
      const studentId = req.account.id;

      if (!studentId) {
        return res.status(400).json("Student ID is required");
      }

      const studentAspirations = await Aspiration.findById(studentId)
        .populate({
          path: 'promised_positions',
          model: 'Position',
          populate: {
            path: 'business',
            model: 'Business',
            select: 'name'
          }
        });

      if (!studentAspirations) {
        return res.status(404).json("Student aspirations not found");
      }

      const result = studentAspirations.promised_positions.map(position => ({
        position_id: position._id,
        // Assuming 'name' is a field in 'Position'
        position_name: position.name,
        business: position.business.name

      }));

      res.status(200).json({ aspirations: result });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },



  getAllAspirations: async (req, res) => {
    try {
      const studentsWithAspirations = await Student.aggregate([
        {
          $lookup: {
            from: 'aspirations',
            localField: '_id',
            foreignField: '_id',
            as: 'aspirations',
          },
        },
        {
          $project: {
            _id: 1,
            name: 1,
            field: 1,
            cpa: 1,
            cert: 1,
            promised_positions: '$aspirations.promised_positions',
          },
        },
      ]);

      res.status(200).json(studentsWithAspirations);
    } catch (err) {
      res.status(500).json({ error: 'Internal Server Error', details: err.message });
    }
  }


};

module.exports = promiseController;
