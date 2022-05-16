import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import ModalInfo from "../ModalInfo/ModalInfo";
import "./TripBooking.css";

const TripBooking = props => {
  const { id } = useParams();

  const [trip, setTrip] = useState({});
  const [tripData, setTripData] = useState({});

  useEffect(() => {
    fetch("https://travel-management-service.herokuapp.com/getService")
      .then(res => res.json())
      .then(data => {
        const searchedData = data.find(dat => dat._id === id);
        setTrip(searchedData);
      });
  }, []);

  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => {
    const newData = { ...data, trip };
    setTripData(newData);
  };
  return (
    <div className="main-iamge-bg">
      <img style={{ height: "600px", width: "100%" }} src={trip.image} alt="" />
      <h1 className="text-center pt-5">{trip.tripName} Tour</h1>
      <p className="p-5 tour-description">{trip.description}</p>

      <div className="modal-icon-bg">
        <h5 className="text-center">Total Price: ${trip.price}</h5>
        <h5 className="text-center">Tour Duration: {trip.duration} Days</h5>

        <div className="d-flex justify-content-center pb-5">
          <form
            className="col-10 col-sm-10 col-md-9 col-lg-7 col-xl-7 col-xxl-6"
            onSubmit={handleSubmit(onSubmit)}
          >
            <label htmlFor="">Select Departure Date of Your Tour</label>
            <select
              className="form-control"
              {...register("departureDate", { required: true })}
            >
              <option value="From 07-10-21">From 07-10-21 </option>
              <option value="From 12-10-21">From 12-10-21</option>
              <option value="From 18-10-21 ">From 18-10-21</option>
              <option value="From 23-10-21 ">From 23-10-21</option>
              <option value="From 28-10-21 ">From 28-10-21</option>
            </select>
            {errors.departureDate && <span>Departure Date is required</span>}

            <br />
            {/* for modal popup */}
            <ModalInfo tripData={tripData} />
          </form>
        </div>
      </div>
    </div>
  );
};

export default TripBooking;
