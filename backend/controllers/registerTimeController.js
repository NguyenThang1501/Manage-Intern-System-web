const RegisterTime = require('../models/RegisterTime');

exports.createRegisterTime = async (req, res) => {
  try {
    // Extract start_time and end_time from req.body
    const { start_time, end_time } = req.body;

    // Create a new register time
    const newRegisterTime = new RegisterTime({
      start_time,
      end_time,
    });

    // Save the register time to the 'registerTime' collection
    const savedRegisterTime = await newRegisterTime.save();

    res.status(201).json(savedRegisterTime);
  } catch (err) {
    res.status(500).json({ error: "Internal Server Error", details: err.message });
  }
};
