import React, { useState, useEffect } from "react";
import SideBar2 from "../../common/sidebar/SideBar2";
import studentApi from "../../../api/studentApi";
import { useUser } from "../../../context/UserContext";
import Container from "react-bootstrap/esm/Container";

const TeacherInfor = () => {
  const { user } = useUser();
  const [studentInfor, setStudentInfor] = useState([]);

  console.log(user);
  useEffect(() => {
    const fetchStudentInfor = async () => {
      try {
        let response = await studentApi.getAll();
        console.log(response);
        let data = response[0];
        setStudentInfor(data);
      } catch (error) {
        console.log("Failed to fetch student infor ", error);
      }
    };
    fetchStudentInfor();
  }, []);

  return (
    <div className="teacher-infor">
      <SideBar2 />
      <Container>
        <div className="row row-space-20 ">
          <div className="col-md-12">
            <div className="tab-content p-0">
              <div className="tab-pane active show" id="profile-about">
                <table className="table table-profile">
                  <thead>
                    <tr>
                      <th colSpan="2">THÔNG TIN CÁ NHÂN</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="field">Họ và tên</td>
                      <td className="value">{studentInfor.HoTen}</td>
                    </tr>
                    <tr>
                      <td className="field">Giới tính</td>
                      <td className="value">{studentInfor.GioiTinh}</td>
                    </tr>
                    <tr>
                      <td className="field">Ngày sinh</td>
                      <td className="value">{studentInfor.Ngaysinh}</td>
                    </tr>
                    <tr>
                      <td className="field">Địa chỉ</td>
                      <td className="value">{studentInfor.DiaChi}</td>
                    </tr>
                  </tbody>
                </table>
                <table className="table table-profile">
                  <thead>
                    <tr>
                      <th colSpan="2">BASIC INFORMATION</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="field">Mã sinh viên</td>
                      <td className="value">{studentInfor.MaSinhVien}</td>
                    </tr>
                    <tr>
                      <td className="field">Email</td>
                      <td className="value">123@hus.edu.vn</td>
                    </tr>
                    <tr>
                      <td className="field">Khoa</td>
                      <td className="value">
                        {studentInfor.KhoaID}
                        Toán - Cơ - Tin học
                      </td>
                    </tr>
                    <tr>
                      <td className="field">Ngành học</td>
                      <td className="value">Khoa học dữ liệu</td>
                    </tr>
                    <tr>
                      <td className="field">GPA</td>
                      <td className="value">{studentInfor.GPA}</td>
                    </tr>
                    <tr>
                      <td className="field">Giáo viên quản lý</td>
                      <td className="value">
                        {studentInfor.GiaoVienQuanLiID}
                        Nguyễn Văn B
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default TeacherInfor;
