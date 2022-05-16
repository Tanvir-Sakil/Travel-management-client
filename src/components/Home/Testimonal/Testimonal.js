import React, { useEffect, useState } from "react";
import Loading from "../../Loading/Loading";
import TestimonalContent from "../TestimonalContent/TestimonalContent";
import "./Testimonal.css"

const Testimonal = () => {
  const [review, setReview] = useState([]);
  useEffect(() => {
    fetch("https://travel-management-service.herokuapp.com/getReview")
      .then(res => res.json())
      .then(data => setReview(data));
  }, []);
  return (
    <div className="testimonal-styling">
      <h2 className="text-center">What's Our Client Say</h2>
      {review.length === 0 ? (
        <Loading />
      ) : (
        <TestimonalContent review={review} />
      )}
    </div>
  );
};

export default Testimonal;
