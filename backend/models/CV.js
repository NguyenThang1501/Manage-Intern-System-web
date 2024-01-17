const Student = require("./Student");
const mongoose = require("mongoose");
mongoose.connect("mongodb://0.0.0.0:27017/web", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
// Thêm useNewUrlParser và useUnifiedTopology vào options
const CVSchema = new mongoose.Schema({
  student_id: {
    type: String,
    ref: Student,
    require: true,
  },
  name: {
    type: String,
    required: true,
  },
  data: {
    type: Buffer,
    required: true,
  },
});
const CV = mongoose.model("CV", CVSchema);
module.exports = CV;
