## Mô tả hệ thống trang web
Web IMS được phát triển để giúp các giảng viên quản lý công việc thực tập của sinh viên. Mỗi khi đến kỳ thực tập, sinh viên có thể đăng ký các nguyện vọng thực tập trên hệ thống. Sau đó, hệ thống sẽ chạy thuật toán và phân công các vị trí thực tập phù hợp cho sinh viên. Trong suốt quá trình thực tập, sinh viên có thể gửi các báo cáo qua hệ thống. Từ đó, giúp giảng viên dễ dàng quản lý. Các doanh nghiệp cũng có thể sử dụng hệ thống để đăng tin tuyển dụng sinh viên.

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
## Giao diện một số trang chính của hệ thống
### Trang chủ
![415330162_395789656176715_9206465252843112969_n](https://github.com/NguyenThang1501/Manage-Intern-System-web/assets/109154036/b0a08b02-66cd-4e49-83c3-82936c113096)
![415275773_296326776306538_769835019151895880_n](https://github.com/NguyenThang1501/Manage-Intern-System-web/assets/109154036/6a995324-9987-43d1-b90e-7bff64d63ca5)
![415321680_1765880403883793_6064056334754903165_n](https://github.com/NguyenThang1501/Manage-Intern-System-web/assets/109154036/74408914-b86b-406e-8d73-13a8bfb6dda5)


### Trang đăng nhập
![415288006_337841842421401_122419036858181919_n](https://github.com/NguyenThang1501/Manage-Intern-System-web/assets/109154036/5f32039e-6228-4a0b-bbf5-ba02b9adf9d3)

### Trang nộp báo cáo của student
![415470512_933785234834012_1851397717937307314_n](https://github.com/NguyenThang1501/Manage-Intern-System-web/assets/109154036/6f5d23db-de09-46f2-bb2f-6d8d48ddddde)

### Trang của teacher
![415324429_351010380975328_3520855233800709211_n](https://github.com/NguyenThang1501/Manage-Intern-System-web/assets/109154036/1d803f1f-2706-4490-94a1-db70ec34cb64)

### Trang của business
![415260610_916598503476882_598458353471711780_n](https://github.com/NguyenThang1501/Manage-Intern-System-web/assets/109154036/aa584426-ac41-44e7-a75a-520eb72f1a08)







