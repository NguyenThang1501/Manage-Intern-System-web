import React, { useEffect, useState } from 'react'
import Header from './components/common/heading/Header'
import Login from './components/login/Login';
import Home from './components/home/Home';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css"
import StudentView from './components/student/StudentView';
import StudentInfor from './components/student/StudentInfor';
import SideBar from './components/common/sidebar/SideBar';
import StudentRegister from './components/student/StudentRegister';
import NewsIntership from './components/student/NewsInternship';
import Internshippositons from './components/student/Internshippositons';
import Fqas from './components/student/Fqas';
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' exact element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/student' element={<StudentView />} />
          <Route path='/student/student-infor' element={<StudentInfor/>}/>
          <Route path='/student/student-register' element={<StudentRegister/>}/>
          <Route path='/student/news-internship' element={<NewsIntership/>}/>
          <Route path='/student/internship-positions' element={<Internshippositons/>}/>
          <Route path='/student/fqas' element={<Fqas/>}/>
        </Routes>
      </Router>
    </>
  )
}

export default App
