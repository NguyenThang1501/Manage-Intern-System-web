import React from "react";

const Head = () => {
  return (
    <>
      <section className="head">
        <div className="container flexSB head-content">
          <div className="logo">
            <div className="logo-img-wrapper">
              <img
                className="logo-img"
                src="./images/logo.png"
                alt="logo-hus"
              />
            </div>

            <div>
              <h2 className="school-name">HUS - VNU</h2>
              <div className="page-name">
                STUDENT INTERNSHIP MANAGEMENT SYSTEM
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Head;
