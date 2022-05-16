import React from "react";
import "./Notice.css";

const Notice = () => {
  return (
    <div className="notice-body row">
      <h5 className="text-center notice-title-bg col-3 col-sm-3 col-md-3 col-lg-4 col-xl-4 col-xxl-3">
        Notice
      </h5>
      <div className="notice-slider-body col-9 col-sm-9 col-md-9 col-lg-8 col-xl-8 col-xxl-9">
        <div className="slider-notice">
          <div className="slide-track-notice">
            <div>
              <h4 style={{ color: "red", paddingLeft: "500px" }}>
                Can provide you with a multilingual tour guide services. A tour
                guide took us around the city. She even served as tour guide,
                pointing out landmarks and recounting local history. A
                journalist, who liked traveling, started a new career in her
                forties as a tour guide.
              </h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Notice;
