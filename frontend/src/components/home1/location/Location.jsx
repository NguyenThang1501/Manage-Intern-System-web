import React from "react";
import Heading from "../../common/heading/Heading";
import { location } from "../dataHome/Data";
import "./style.css";
import "../home1.css";

const Location = () => {
  return (
    <>
      <section className="location padding">
        <div className="container">
          <Heading title="Doanh nghiệp hợp tác với nhà trường" />

          <div className="content grid3 mtop">
            {location.map((item, index) => (
              <div className="box" key={index}>
                <img src={item.cover} alt="" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Location;
