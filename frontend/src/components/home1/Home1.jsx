import React from "react";
import Awards from "./awards/Awards";
import Featured from "./featured/Featured";
import Hero from "./hero/Hero";
import Location from "./location/Location";
import Footer from "../common/footer/Footer";
import Header from "../common/heading/Header";

const Home1 = () => {
  return (
    <>
      <Header />
      <Hero />
      <Featured />
      <Awards />
      <Location />
      <Footer />
    </>
  );
};

export default Home1;
