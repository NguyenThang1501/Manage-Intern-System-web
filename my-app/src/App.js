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
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/student" element={<StudentView />} />

          <Route path="/student/student-infor" element={<StudentInfor />} />
          <Route
            path="/student/student-register"
            element={<StudentRegister />}
          />
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
        </Routes>
      </Router>
    </>
  );
};

export default App;
