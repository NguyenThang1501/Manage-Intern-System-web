import React from "react";
import Heading from "../../common/heading/Heading";
import "./Featured.css";
import FeaturedCard from "./FeaturedCard";
import "../home1.css";

const Featured = () => {
  return (
    <>
      <section className="featured background">
        <div className="container">
          <Heading title="Đối tượng sử dụng" />
          <FeaturedCard />
        </div>
      </section>
    </>
  );
};

export default Featured;
