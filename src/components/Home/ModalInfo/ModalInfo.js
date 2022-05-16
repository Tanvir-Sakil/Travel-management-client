import jwt_decode from "jwt-decode";
import * as React from "react";
import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { UserContext } from "../../../App";
import StripePayment from "../StripePayment/StripePayment";
import "./ModalInfo.css";
import ModalUnstyled from "@mui/core/ModalUnstyled";
import { styled, Box } from "@mui/system";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe(
  "pk_test_51Jhd2PLhqwaMtq9KZFvX5o8jJit9pklRui4cNAAcgjwtl4DcIU1b5dfQl65yuNg1HEkFJ0u96Nqk3Vk2uFUdZBIH00X0L3sxSD"
);

const StyledModal = styled(ModalUnstyled)`
  position: fixed;
  z-index: 1300;
  right: 0;
  bottom: 0;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Backdrop = styled("div")`
  z-index: -1;
  position: fixed;
  right: 0;
  bottom: 0;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  -webkit-tap-highlight-color: transparent;
`;

const style = {
  width: 500,
  bgcolor: "#EAB5F7",
  borderRadius: "4px",
  p: 2,
  px: 4,
  pb: 3,
};

export default function ModalInfo({ tripData }) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [touristInfo, setTouristInfo] = useState(null);
  const [paymentMethodInfo, setPaymentMethodInfo] = useState({});
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);

  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => {
    setTouristInfo(data);
  };

  const successPayment = paymentMethod => {
    const token = sessionStorage.getItem("token");
    const decodedToken = jwt_decode(token);
    const userEmail = decodedToken.email;
    setPaymentMethodInfo(paymentMethod);

    const newData = { tripData, paymentMethod, touristInfo, email: userEmail };

    if (paymentMethodInfo && touristInfo && userEmail) {
      console.log(newData);
      fetch("https://travel-management-service.herokuapp.com/bookingList", {
        method: "POST",
        body: JSON.stringify(newData),
        headers: {
          "Content-type": "application/json",
        },
      })
        .then(res => res.json())
        .then(success => {
          alert(
            "Congrasulations! We get your booking info and yor booking confirmation is successfull"
          );
          console.log(success);
        });
    }
  };

  return (
    <div>
      <button
        type="button"
        className="btn btn-success form-control"
        onClick={handleOpen}
      >
        Book Now
      </button>
      <StyledModal
        aria-labelledby="unstyled-modal-title"
        aria-describedby="unstyled-modal-description"
        open={open}
        onClose={handleClose}
        BackdropComponent={Backdrop}
        className="modal-body"
      >
        <Box sx={style}>
          <form
            style={{ display: touristInfo ? "none" : "block" }}
            onSubmit={handleSubmit(onSubmit)}
          >
            <h5 className="text-center">Additional Info</h5>
            <input
              placeholder="Tourist Name"
              className="form-control"
              {...register("touristName", { required: true })}
            />
            {errors.touristName && (
              <span className="error">Tourist Name is required</span>
            )}
            <br />

            <input
              placeholder="Country Name"
              className="form-control"
              {...register("country", { required: true })}
            />
            {errors.country && (
              <span className="error">Country Name is required</span>
            )}
            <br />

            <input
              placeholder="City Name"
              className="form-control"
              {...register("city", { required: true })}
            />
            {errors.city && (
              <span className="error">City Name is required</span>
            )}
            <br />

            <input
              placeholder="Address"
              className="form-control"
              {...register("address", { required: true })}
            />
            {errors.address && (
              <span className="error">Address is required</span>
            )}
            <br />

            <input
              placeholder="Phone Number"
              className="form-control"
              {...register("phoneNumber", { required: true })}
            />
            {errors.phonenumber && (
              <span className="error">Phone Number is required</span>
            )}
            <br />

            <input className="btn btn-primary form-control" type="submit" />
          </form>

          <div style={{ display: touristInfo ? "block" : "none" }}>
            <h5 className="text-center">Card Details</h5>
            <Elements stripe={stripePromise}>
              <StripePayment successPayment={successPayment} />
            </Elements>
          </div>
        </Box>
      </StyledModal>
    </div>
  );
}
