import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import TeacherHome from "../components/teacher/TeacherHome";
import TeacherInfor from "../components/teacher/teacherInfor/TeacherInfor";
import ManageStudent from "../components/teacher/manageStudent/ManageStudent";
import ManageNews from "../components/teacher/manageNews/ManageNews";
import ManageBusiness from "../components/teacher/manageBusiness/ManageBusiness";
import ListPositions from "../components/teacher/divideIntern/listPositions/ListPositions";
import OpenRegister from "../components/teacher/divideIntern/openRegister/OpenRegister";
import BusinessInfor from "../components/teacher/manageBusiness/BusinessInfor";
import ResultAllot from "../components/teacher/divideIntern/resultAllot/ResultAllot";
import ListRegister from "../components/teacher/divideIntern/listRegister/ListRegister";
import UpdatePosition from "../components/teacher/divideIntern/listPositions/UpdatePosition";
import ReportDetail from "../components/teacher/manaIntern/processReport/ReportDetail";
import DetailInfor from "../components/teacher/manageStudent/DetailInfor";
import NewsDetail from "../components/teacher/manageNews/NewsDetail";
import TopicIntern from "../components/teacher/manaIntern/processReport/TopicIntern";
import ProcessReport from "../components/teacher/manaIntern/processReport/ProcessReport";
import AddStudent from "../components/teacher/manageStudent/AddStudent";
import AddNews from "../components/teacher/manageNews/AddNews";
import { useUser } from "../context/UserContext";
import Login from "../components/login/Login";

const TeacherRoutes = () => {
  const { userInfo } = useUser();

  return (
    <div>
      <Routes>
        <Route path="/teacher" element={<TeacherHome />} />
        <Route path="/teacher/teacher-infor" element={<TeacherInfor />} />

        <Route path="/teacher/mana-student" element={<ManageStudent />} />
        <Route path="/teacher/mana-news" element={<ManageNews />} />
        <Route path="/teacher/mana-business" element={<ManageBusiness />} />
        <Route
          path="/teacher/allot-intern/list-positions"
          element={<ListPositions />}
        />
        <Route
          path="/teacher/allot-intern/open-register"
          element={<OpenRegister />}
        />
        <Route path="/teacher/mana-intern" element={<ProcessReport />} />
        <Route path="/teacher/mana-student/add" element={<AddStudent />} />
        <Route
          path="/teacher/mana-business/business-infor"
          element={<BusinessInfor />}
        />
        <Route
          path="/teacher/allot-intern/result-intern"
          element={<ResultAllot />}
        />
        <Route
          path="/teacher/allot-intern/list-register"
          element={<ListRegister />}
        />

        <Route
          path="/teacher/allot-intern/list-positions/update-position"
          element={<UpdatePosition />}
        />

        <Route
          path="/teacher/mana-intern/regular-report/detail"
          element={<ReportDetail />}
        />
        <Route
          path="/teacher/mana-intern/regular-report/topic"
          element={<TopicIntern />}
        />

        <Route path="/teacher/mana-student/infor" element={<DetailInfor />} />
        <Route path="/teacher/mana-news/add-news" element={<AddNews />} />
        <Route
          path="/teacher/mana-news/tc-news-detail"
          element={<NewsDetail />}
        />
      </Routes>
    </div>
  );
};

export default TeacherRoutes;
