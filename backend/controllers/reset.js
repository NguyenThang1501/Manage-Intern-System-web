const Result = require("../models/InternshipResult");

const resetData = {
  resetResult: async (req, res) => {
    try {
      // Xóa hết dữ liệu trong collection
      await Result.deleteMany({});
      
      return res.status(200).json({ message: "Reset successful" });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: "An error occurred" });
    }
  }
};

module.exports = resetData;