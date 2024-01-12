const aspiration = require("../models/Aspiration");
aspiration
  .findOne({ _id: '21002157' })
  .populate('_id')  
  .populate('promised_positions')  
  .then(promise => {
    console.log('Thông tin về sinh viên:', promise._id);
    console.log('Danh sách vị trí đã đăng kí:');
    promise.promised_positions.forEach(position => {
      console.log('  - Vị trí:', position.name);
    });
  })
  .catch(err => {
    console.error(err);
  });
