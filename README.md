# Hướng Dẫn Cài Đặt và Chạy Chương Trình

## Các Bước Cài Đặt và Chạy Code
### 1. Clone Repository:
- Copy đường link repo.git:
- Mở terminal và chạy lệnh sau để sao chép repository về máy local:
```
git clone 
```

### 2. Mở Folder và Di Chuyển tới Thư Mục Backend:
- Mở folder vừa clone về trong VSCode.
- Mở terminal trong VSCocde, di chuyển tới thư mục web:
```
cd backend
```

### 3. Cài Đặt Dependencies Cho Server:
- Di chuyển vào thư mục /backend và chạy các lệnh sau:
```
npm install express
node index.js
```
- Sau khi chạy thành công lệnh inline code `node index.js`, terminal sẽ hiển thị:
> Server is running 
> Connected to database
- Tiếp theo, mở một terminal mới và di chuyển vào lại thư mục /frontend
```
cd frontend
npm install react-scripts --save
```

### 4. Cài Đặt Dependencies Cho React App:
```
cd ..
npm install
npm install react-router-dom
npm start
```







