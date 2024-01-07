const mongoose = require('mongoose');

const registerTimeSchema = new mongoose.Schema({
  start_time: {
    type: Date,
    required: true,
  },
  end_time: {
    type: Date,
    required: true,
  },
});

const RegisterTime = mongoose.model('RegisterTime', registerTimeSchema);

module.exports = RegisterTime;
