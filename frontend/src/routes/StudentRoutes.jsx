import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import StudentView from "../components/student/StudentView";
import NewsIntership from "../components/student/news/NewsInternship";
import Internshippositions from "../components/student/positions/Internshippositions";
import RegisterInschool from "../components/student/register/RegisterInSchool";
import RegisterOutSchool from "../components/student/register/RegisterOutSchool";
import StudentInfor from "../components/student/infor/StudentInfor";
import Fqas from "../components/student/Fqas";
import StudentNewsJobDetail from "../components/student/news/StudentNewsJobDetail";
import StudentRegularReport from "../components/student/reportIntern/StudentRegularReport";
import StudentTopic from "../components/student/reportIntern/StudentTopic";
import PrivateRoute from "./PrivateRoute";
import { useUser } from "../context/UserContext";
import Login from "../components/login/Login";
import UpdateStudent from "../components/teacher/manageStudent/UpdateStudent";
import StudentChangePass from "../components/student/changepass/StudentChangePass";

const StudentRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/student" element={<StudentView />} />
        <Route path="/student/student-infor" element={<StudentInfor />} />

        <Route path="/student/news-internship" element={<NewsIntership />} />
        <Route
          path="/student/internship-positions"
          element={<Internshippositions />}
        />
        <Route
          path="/student/student-register/in-school"
          element={<RegisterInschool />}
        />
        <Route path="/student/fqas" element={<Fqas />} />
        <Route
          path="student/student-register/out-school"
          element={<RegisterOutSchool />}
        />
        <Route
          path="/student/news-internship/st-news-detail"
          element={<StudentNewsJobDetail />}
        />
        <Route path="/student/report/report-topic" element={<StudentTopic />} />
        <Route
          path="/student/report/report-regular"
          element={<StudentRegularReport />}
        />
        <Route
          path="/teacher/mana-student/update-student"
          element={<UpdateStudent />}
        />
        <Route path="/student/change-pass" element={<StudentChangePass />} />
      </Routes>
    </>
  );
};

export default StudentRoutes;
