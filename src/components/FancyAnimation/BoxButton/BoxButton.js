import React from "react";
import "./BoxButton.css";

const BoxButton = ({ handleClick }) => {
  return (
    <div className="box-button-body">
      <button onClick={handleClick} className="box-button">
        Book Now
        <div className="button__horizontal" />
        <div className="button__vertical" />
      </button>
    </div>
  );
};

export default BoxButton;
