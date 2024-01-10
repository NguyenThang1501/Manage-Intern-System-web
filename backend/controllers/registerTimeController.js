const RegisterTime = require('../models/RegisterTime');
const registerController = {
  createRegisterTime : async (req, res) => {
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
  },

  updateRegisterTime: async (req, res) => {
    try {
      // Extract start_time and end_time from req.body
      const { start_time, end_time } = req.body;
  
      // Find the register time based on the index containing start_time and end_time
      const existingRegisterTime = await RegisterTime.findOne();
  
      // Check if the register time exists
      if (!existingRegisterTime) {
        return res.status(404).json({ error: "Register Time not found" });
      }
  
      // Update the register time with new values (only if provided)
      if (start_time !== undefined) {
        existingRegisterTime.start_time = start_time;
      }
      if (end_time !== undefined) {
        existingRegisterTime.end_time = end_time;
      }
  
      // Save the updated register time
      const updatedRegisterTime = await existingRegisterTime.save();
  
      res.status(200).json(updatedRegisterTime);
    } catch (err) {
      res.status(500).json({ error: "Internal Server Error", details: err.message });
    }
  },
  
  

}

module.exports = registerController