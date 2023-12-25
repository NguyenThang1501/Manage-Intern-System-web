import React from "react";
import "./button.css";

const CustomButton = ({ buttonText, onClick }) => {
  return (
    <button onClick={onClick} className="my-button">
      {buttonText}
    </button>
  );
};

export default CustomButton;
