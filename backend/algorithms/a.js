const fs = require('fs');

const imagePath = 'D:/khanhlyta/Li/li.jpg'; // Đường dẫn đến tệp ảnh

// Đọc nội dung của tệp ảnh
const imageBuffer = fs.readFileSync(imagePath);

// Chuyển đổi nội dung thành chuỗi base64
const base64Image = imageBuffer.toString('base64');

console.log(base64Image);
