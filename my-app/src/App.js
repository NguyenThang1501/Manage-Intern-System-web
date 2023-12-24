import React, { useEffect, useState } from "react";
import Header from "./components/common/heading/Header";
import Login from "./components/login/Login";
import Home from "./components/home/Home";

import "bootstrap/dist/css/bootstrap.min.css";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import StudentView from "./components/student/StudentView";
import StudentInfor from "./components/student/infor/StudentInfor";
import SideBar from "./components/common/sidebar/SideBar";
import StudentRegister from "./components/student/register/StudentRegister";
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
import AllotIntern from "./components/teacher/divideIntern/AllotIntern";
import ManaIntern from "./components/teacher/manaIntern/ManaIntern";
import AddStudent from "./components/teacher/manageStudent/AddStudent";
import BusinessInfor from "./components/teacher/manageBusiness/BusinessInfor";
import ResultAllot from "./components/teacher/divideIntern/resultAllot/ResultAllot";
import ListRegister from "./components/teacher/divideIntern/listRegister/ListRegister";

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
              path="/student/student-register"
              element={<StudentRegister />}
            />
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
            <Route path="/teacher/allot-intern" element={<AllotIntern />} />

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
            <Route path="/teacher/mana-intern" element={<ManaIntern />} />
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
          </Routes>
        </UserProvider>
      </Router>
    </>
  );
};

export default App;
