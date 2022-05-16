import jwt_decode from "jwt-decode";

import React, { useEffect, useState } from "react";
import BookingListData from "../BookingListData/BookingListData";

const BookingList = () => {
  const [bookingData, setBookingData] = useState([]);
  console.log(bookingData);
  useEffect(() => {
    const token = sessionStorage.getItem("token");
    const decodedToken = jwt_decode(token);
    const userEmail = decodedToken.email;
    fetch(
      `https://travel-management-service.herokuapp.com/bookingList/3?email=${userEmail}`
    )
      .then(res => res.json())
      .then(data => setBookingData(data));
  }, []);
  return (
    <div>
      <h4 className="text-center">Booking List </h4>
      {bookingData.length === 0 ? (
        <h5 className="text-center text-danger">No Booking Yet</h5>
      ) : (
        bookingData.map((dat, index) => (
          <BookingListData listSingle={dat} index={index} key={index} />
        ))
      )}
    </div>
  );
};

export default BookingList;
