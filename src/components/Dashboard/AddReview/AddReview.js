import React from "react";
import { useForm } from "react-hook-form";
import ButtonSubmit from "../../FancyAnimation/ButtonSubmit/ButtonSubmit";
import "./AddReview.css";

export default function AddReview() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => {
    console.log(data);
    fetch("https://travel-management-service.herokuapp.com/addReview", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-type": "application/json",
      },
    })
      .then(res => res.json())
      .then(success => {
        console.log(success);
        alert("Your review is successfully added in the home page");
      });
  };
  return (
    <div className="d-flex justify-content-center">
      <div className="col-xxl-7 col-lg-10 col-xl-7">
        <form onSubmit={handleSubmit(onSubmit)}>
          <h5 className="text-center">
            You can add your comment here, that shows in home page{" "}
          </h5>

          <input
            className="form-control"
            placeholder="Name"
            {...register("name", { required: true })}
          />
          {errors.name && <span className="error">Name is required</span>}
          <br />

          <input
            className="form-control"
            placeholder="Email"
            {...register("email", { required: true })}
          />
          {errors.email && <span className="error">Email is required</span>}
          <br />

          <textarea
            className="form-control"
            name="description"
            id=""
            cols="100%"
            rows="10"
            placeholder="Describing your comment about our service..."
            {...register("description", { required: true })}
          />
          {errors.description && (
            <span className="error">Description is required</span>
          )}
          <br />

          <ButtonSubmit type="submit">Post Comment</ButtonSubmit>
        </form>
      </div>
    </div>
  );
}
