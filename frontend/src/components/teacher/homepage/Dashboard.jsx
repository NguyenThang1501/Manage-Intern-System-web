import React, { useState, useEffect } from "react";
import axios from "axios";
import StudentsChart from "./StudentsChart";
// import RecruitmentChart from './RecruitmentChart';
import "./dashboard.css";

const Dashboard = () => {
  const [studentsCount, setStudentsCount] = useState(0);
  const [businessesCount, setBusinessesCount] = useState(0);
  const [positionsCount, setPositionsCount] = useState(0);

  useEffect(() => {
    // Fetch data for the number of students
    axios
      .get("http://localhost:8000/teacher/homepage/student-count")
      .then((response) => setStudentsCount(response.data.count))
      .catch((error) => console.error("Error fetching students count:", error));

    // Fetch data for the number of businesses
    axios
      .get("http://localhost:8000/teacher/business-count")
      .then((response) => setBusinessesCount(response.data.count))
      .catch((error) =>
        console.error("Error fetching businesses count:", error)
      );

    // Fetch data for the number of positions
    axios
      .get("http://localhost:8000/teacher/count-positions")
      .then((response) => setPositionsCount(response.data.count))
      .catch((error) =>
        console.error("Error fetching positions count:", error)
      );
  }, []); // Empty dependency array ensures the effect runs once on mount

  return (
    <div className="dashboard">
      <div className="info-box">
        <div className="info-text">Số sinh viên:</div>
        <div className="info-number">{studentsCount}</div>
      </div>
      <div className="info-box">
        <div className="info-text">Số doanh nghiệp:</div>
        <div className="info-number">{businessesCount}</div>
      </div>
      <div className="info-box">
        <div className="info-text">Số vị trí thực tập:</div>
        <div className="info-number">{positionsCount}</div>
      </div>

      <div className="chart-container">
        <StudentsChart />
        {/* <RecruitmentChart /> */}
      </div>
    </div>
  );
};

export default Dashboard;
