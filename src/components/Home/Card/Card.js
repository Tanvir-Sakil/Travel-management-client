import React, { useEffect, useState } from "react";
import Loading from "../../Loading/Loading";
import CardContent from "../CardContent/CardContent";

const Card = () => {
  const [cardInfo, setCardInfo] = useState([]);
  console.log(cardInfo);

  useEffect(() => {
    fetch("https://travel-management-service.herokuapp.com/getService")
      .then(res => res.json())
      .then(data => setCardInfo(data));
  }, []);
  return (
    <div className="row w-100">
      <h1 className="text-center pt-5">Trips All Over The World</h1>
      {cardInfo.length === 0 ? (
        <Loading />
      ) : (
        cardInfo.map((card, index) => <CardContent key={index} card={card} />)
      )}
    </div>
  );
};

export default Card;
