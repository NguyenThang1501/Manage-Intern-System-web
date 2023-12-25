import React, { useEffect, useState } from "react";
import SideBar from "../../common/sidebar/SideBar";
import "../student.css";
import studentApi from "../../../api/studentApi";
import { useUser } from "../../../context/UserContext";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/Col";

const StudentInfor = () => {
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
    <div>
      <SideBar />
      <Container>
        <div className="row row-space-20 student-infor">
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
                      <td className="field">Mã sinh viên</td>
                      <td className="value">{studentInfor.MaSinhVien}</td>
                    </tr>
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
                      <td className="field">Khoa</td>
                      <td className="value">{studentInfor.KhoaID}</td>
                    </tr>
                    <tr>
                      <td className="field">Ngành học</td>
                      <td className="value"></td>
                    </tr>
                    <tr>
                      <td className="field">Số điện thoại</td>
                      <td className="value"></td>
                    </tr>
                    <tr>
                      <td className="field">Email</td>
                      <td className="value"></td>
                    </tr>
                  </tbody>
                </table>
                <table className="table table-profile">
                  <thead>
                    <tr>
                      <th colSpan="2">Kết quả học tập</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="field">CPA</td>
                      <td className="value"></td>
                    </tr>
                  </tbody>
                </table>

                <button className="add-english">
                  Thêm chứng chỉ ngoại ngữ (nếu có)
                </button>

                <table className="table table-profile">
                  <thead>
                    <tr>
                      <th colSpan="2">Chứng chỉ ngoại ngữ</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="field">IELTS</td>
                      <td className="value"></td>
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

export default StudentInfor;
