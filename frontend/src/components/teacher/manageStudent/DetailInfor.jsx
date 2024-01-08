import React, { useEffect, useState } from "react";
import SideBar from "../../common/sidebar/SideBar";
import studentApi from "../../../api/studentApi";
import { useUser } from "../../../context/UserContext";
import Container from "react-bootstrap/esm/Container";
import SideBar2 from "../../common/sidebar/SideBar2";
import { useLocation } from "react-router-dom";

const DetailInfor = () => {
  const { userInfo } = useUser();
  const [studentInfor, setStudentInfor] = useState([]);
  const location = useLocation();
  const data = location.state ? location.state.data : null;

  //call API
  useEffect(() => {
    const fetchStudentInfor = async () => {
      try {
        let response = await studentApi.get(data._id, userInfo.accessToken);
        console.log(response);
        setStudentInfor(response);
      } catch (error) {
        console.log("Failed to fetch student infor ", error);
      }
    };
    fetchStudentInfor();
  }, []);

  return (
    <div>
      <SideBar2 />
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
                      <td className="value">{studentInfor._id}</td>
                    </tr>
                    <tr>
                      <td className="field">Họ và tên</td>
                      <td className="value">{studentInfor.name}</td>
                    </tr>
                    <tr>
                      <td className="field">Giới tính</td>
                      <td className="value">{studentInfor.sex}</td>
                    </tr>
                    <tr>
                      <td className="field">Ngày sinh</td>
                      <td className="value">{studentInfor.birthday}</td>
                    </tr>
                    <tr>
                      <td className="field">Khoa</td>
                      <td className="value">{studentInfor.field}</td>
                    </tr>
                    <tr>
                      <td className="field">Ngành học</td>
                      <td className="value">{studentInfor.major}</td>
                    </tr>
                    <tr>
                      <td className="field">Số điện thoại</td>
                      <td className="value">{studentInfor.phone}</td>
                    </tr>
                    <tr>
                      <td className="field">Email</td>
                      <td className="value">{studentInfor.email}</td>
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
                      <td className="value">{studentInfor.cpa}</td>
                    </tr>
                  </tbody>
                </table>

                <table className="table table-profile table-cert">
                  <thead>
                    <tr>
                      <th colSpan="2">Chứng chỉ ngoại ngữ</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="field">TOIEC</td>
                      <td className="value">{studentInfor.english}</td>
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

export default DetailInfor;
