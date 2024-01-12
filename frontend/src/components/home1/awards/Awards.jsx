import React from "react";
import Heading from "../../common/heading/Heading";
import { awards } from "../dataHome/Data";
import "./awards.css";
import "../home1.css";

const Awards = () => {
  return (
    <>
      <section className="awards padding">
        <div className="container">
          <Heading
            title="Trường Đại học Khoa học Tự nhiên - ĐHQGHN"
            subtitle="Thành tựu nổi bật"
          />

          <div className="content grid4 mtop">
            {awards.map((val, index) => (
              <div className="box" key={index}>
                <div className="icon">
                  <span>{val.icon}</span>
                </div>
                <h1>{val.num}</h1>
                <p>{val.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Awards;
