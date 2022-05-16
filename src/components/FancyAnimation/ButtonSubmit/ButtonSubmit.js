import React from "react";
import "./ButtonSubmit.css";

const ButtonSubmit = props => {
  return (
    <div className="buttonSubmit">
      <div className="wrap">
        <button type="submit" className="button-main">
          {props.children}
        </button>
      </div>
    </div>
  );
};

export default ButtonSubmit;
