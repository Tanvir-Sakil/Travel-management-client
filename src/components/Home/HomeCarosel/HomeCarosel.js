import React from "react";
import { useHistory } from "react-router-dom";
import BoxButton from "../../FancyAnimation/BoxButton/BoxButton";
import "./HomeCarosel.css";

const HomeCarosel = () => {
  const history = useHistory();
  const handleClick = () => {
    history.push("/bookPage");
  };
  return (
    <div className="all-container">
      <div>
        <div>
          <h1 className="bird-h1">Explore The World</h1>
         
          <div className="d-flex justify-content-center">
            <BoxButton handleClick={handleClick} />
          </div>
        </div>
      </div>

      <div className="bird-container bird-container--one">
        <div className="bird bird--one" />
      </div>

      <div className="bird-container bird-container--two">
        <div className="bird bird--two" />
      </div>

      <div className="bird-container bird-container--three">
        <div className="bird bird--three" />
      </div>

      <div className="bird-container bird-container--four">
        <div className="bird bird--four" />
      </div>
    </div>
  );
};

export default HomeCarosel;
