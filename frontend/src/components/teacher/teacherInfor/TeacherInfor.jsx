import React, { useState, useEffect } from "react";
import SideBar2 from "../../common/sidebar/SideBar2";
import studentApi from "../../../api/studentApi";
import { useUser } from "../../../context/UserContext";
import Container from "react-bootstrap/esm/Container";
import teacherApi from "../../../api/teacherAPI";

const TeacherInfor = () => {
  const { userInfo } = useUser();
  const [teacherInfor, setTeacherInfor] = useState([]);

  useEffect(() => {
    const fetchTeacherInfor = async () => {
      try {
        let response = await teacherApi.getTeacherInfor(userInfo.accessToken);
        console.log(response);
        let data = response;
        setTeacherInfor(data);
      } catch (error) {
        console.log("Failed to fetch teacher infor ", error);
      }
    };
    fetchTeacherInfor();
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
                      <td className="value">{teacherInfor.name}</td>
                    </tr>
                    <tr>
                      <td className="field">Chức vụ</td>
                      <td className="value">{teacherInfor.position}</td>
                    </tr>
                    <tr>
                      <td className="field">Lĩnh vực nghiên cứu</td>
                      <td className="value">{teacherInfor.field}</td>
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
