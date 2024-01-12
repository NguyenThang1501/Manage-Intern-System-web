import React, { useEffect, useState } from "react";
import Login from "./components/login/Login";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import { UserProvider } from "./context/UserContext";
import ProgressBar from "./components/common/progressbar/AlertRun";
import Home1 from "./components/home1/Home1";
import AppRoutes from "./routes/AppRoutes";
import StudentView from "./components/student/StudentView";
import PrivateRoute from "./routes/PrivateRoute";
import StudentRoutes from "./routes/StudentRoutes";
import TeacherRoutes from "./routes/TeacherRoutes";
import BusinessRoutes from "./routes/BusinessRoutes";

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

          {/* <StudentRoutes /> */}
          <StudentRoutes />
          <TeacherRoutes />
          <BusinessRoutes />

          <Routes>
            <Route path="/" exact element={<Home1 />} />
            <Route path="/login" element={<Login />} />
            <Route path="/test" element={<ProgressBar />} />

            {/* <Route
              path="/business/*"
              element={
                <PrivateRoute
                  component={<BusinessRoutes />}
                  roles={["business"]}
                />
              }
            /> */}
          </Routes>
        </UserProvider>
      </Router>
    </>
  );
};

export default App;
