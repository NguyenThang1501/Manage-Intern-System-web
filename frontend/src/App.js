import React, { useEffect, useState } from "react";
import Login from "./components/login/Login";
import Home from "./components/home/Home";

import "bootstrap/dist/css/bootstrap.min.css";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import StudentView from "./components/student/StudentView";
import StudentInfor from "./components/student/infor/StudentInfor";
import SideBar from "./components/common/sidebar/SideBar";
import NewsIntership from "./components/student/news/NewsInternship";
import Internshippositions from "./components/student/positions/Internshippositions";
import Fqas from "./components/student/Fqas";
import RegisterInschool from "./components/student/register/RegisterInSchool";
import RegisterOutSchool from "./components/student/register/RegisterOutSchool";
import ProtectedRoute from "./auth/ProtectedRoute";
import { AuthProvider } from "./auth/AuthContext";
import TeacherHome from "./components/teacher/TeacherHome";
import ManageStudent from "./components/teacher/manageStudent/ManageStudent";
import ManageNews from "./components/teacher/manageNews/ManageNews";
import ManageBusiness from "./components/teacher/manageBusiness/ManageBusiness";
import ListPositions from "./components/teacher/divideIntern/listPositions/ListPositions";
import OpenRegister from "./components/teacher/divideIntern/openRegister/OpenRegister";
import { UserProvider } from "./context/UserContext";
import PrivateRoute from "./route/PrivateRoute";
import TeacherInfor from "./components/teacher/teacherInfor/TeacherInfor";
import AddStudent from "./components/teacher/manageStudent/AddStudent";
import BusinessInfor from "./components/teacher/manageBusiness/BusinessInfor";
import ResultAllot from "./components/teacher/divideIntern/resultAllot/ResultAllot";
import ListRegister from "./components/teacher/divideIntern/listRegister/ListRegister";
import ProcessReport from "./components/teacher/manaIntern/processReport/ProcessReport";
import ReportDetail from "./components/teacher/manaIntern/processReport/ReportDetail";
import BusinessInformation from "./components/business/BusinessInformation";
import BusinessNews from "./components/business/BusinessNews";
import BusinessHome from "./components/business/BusinessHome";
import BusinessAddNews from "./components/business/BusinessAddNews";
import BusinessNewsDetail from "./components/business/BusinessNewsDetail";
import TopicIntern from "./components/teacher/manaIntern/processReport/TopicIntern";
import StudentNewsJobDetail from "./components/student/news/StudentNewsJobDetail";
import StudentTopic from "./components/student/reportIntern/StudentTopic";
import StudentRegularReport from "./components/student/reportIntern/StudentRegularReport";
import DetailInfor from "./components/teacher/manageStudent/DetailInfor";
import AddNews from "./components/teacher/manageNews/AddNews";
import UpdatePosition from "./components/teacher/divideIntern/listPositions/UpdatePosition";
import NewsDetail from "./components/teacher/manageNews/NewsDetail";
import ProgressBar from "./components/common/progressbar/ProgressBar";

const App = () => {
  return (
    <>
      <Router>
        <UserProvider>
          {/* <PrivateRoute
            path="/student"
            element={<StudentView />}
            roles={["student"]}
          /> */}
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/login" element={<Login />} />

            <Route path="/student" element={<StudentView />} />

            <Route path="/student/student-infor" element={<StudentInfor />} />

            <Route
              path="/student/news-internship"
              element={<NewsIntership />}
            />
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
            <Route path="/business" element={<BusinessHome />} />
            <Route
              path="/business/business-information"
              element={<BusinessInformation />}
            />
            <Route path="/business/manage-news" element={<BusinessNews />} />
            <Route
              path="/business/manage-news/add-news"
              element={<BusinessAddNews />}
            />
            <Route path="/news-detail" element={<BusinessNewsDetail />} />
            <Route
              path="/student/news-internship/st-news-detail"
              element={<StudentNewsJobDetail />}
            />
            <Route
              path="/teacher/mana-intern/regular-report/topic"
              element={<TopicIntern />}
            />
            <Route
              path="/student/report/report-topic"
              element={<StudentTopic />}
            />
            <Route
              path="/student/report/report-regular"
              element={<StudentRegularReport />}
            />
            <Route
              path="/teacher/mana-student/infor"
              element={<DetailInfor />}
            />
            <Route path="/teacher/mana-news/add-news" element={<AddNews />} />
            <Route
              path="/teacher/mana-news/tc-news-detail"
              element={<NewsDetail />}
            />
            <Route path="/test" element={<ProgressBar />} />
          </Routes>
        </UserProvider>
      </Router>
    </>
  );
};

export default App;
