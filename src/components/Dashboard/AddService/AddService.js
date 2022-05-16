import axios from "axios";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import ButtonSubmit from "../../FancyAnimation/ButtonSubmit/ButtonSubmit";

export default function AddService() {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const [img, setImg] = useState();
  if (img) {
    console.log(img);
  }
  const handleChange = event => {
    console.log(event.target.files[0]);
    const formData = new FormData();
    formData.set("key", "8c567236e8b238e4ddb48c860d5b0349");
    formData.append("image", event.target.files[0]);
    axios.post("https://api.imgbb.com/1/upload", formData).then(res => {
      setImg(res.data.data.display_url);
    });
  };
  const onSubmit = data => {
    const newData = { ...data, image: img };
    console.log(newData);
    fetch("https://travel-management-service.herokuapp.com/addService", {
      method: "POST",
      body: JSON.stringify(newData),
      headers: {
        "Content-type": "application/json",
      },
    })
      .then(res => res.json())
      .then(success => {
        console.log(success);
        alert("Submitted Sucessfully");
      });
  };
  return (
    <div className="d-flex justify-content-center">
      <div className="col-xxl-7 col-lg-10 col-xl-7">
        <form onSubmit={handleSubmit(onSubmit)}>
          <h5 className="text-center">
            You can add a new trip all over the world, that shows in home page{" "}
          </h5>

          <input
            placeholder="image"
            className="form-control"
            onChange={handleChange}
            type="file"
          />
          <br />

          <input
            className="form-control"
            placeholder="Trip Name"
            {...register("tripName", { required: true })}
          />
          {errors.tripName && (
            <span className="error">Trip Name is required</span>
          )}
          <br />

          <input
            className="form-control"
            placeholder="Price of Tour"
            {...register("price", { required: true })}
          />
          {errors.price && <span className="error">Price is required</span>}
          <br />

          <input
            className="form-control"
            placeholder="Duration of Tour"
            {...register("duration", { required: true })}
          />
          {errors.price && <span className="error">Price is required</span>}
          <br />

          <textarea
            className="form-control"
            name="description"
            id=""
            cols="100%"
            rows="10"
            placeholder="Describing a paragraph about this trip"
            {...register("description", { required: true })}
          />
          {errors.description && (
            <span className="error">Description is required</span>
          )}
          <br />

          <ButtonSubmit type="submit">Add New Trip</ButtonSubmit>
        </form>
      </div>
    </div>
  );
}
