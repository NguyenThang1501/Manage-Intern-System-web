import React from "react";
import Heading from "../../common/heading/Heading";
import "./hero.css";
import "../home1.css";

const Hero = () => {
  return (
    <>
      <section className="hero">
        <div className="container">
          <Heading
            title="HỆ THỐNG QUẢN LÝ CÔNG TÁC THỰC TẬP CỦA SINH VIÊN"
            subtitle="Trường Đại học Khoa học Tự nhiên - ĐHQGHN"
          />
        </div>
      </section>
    </>
  );
};

export default Hero;
