import axios from "axios";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import ButtonSubmit from "../../FancyAnimation/ButtonSubmit/ButtonSubmit";

export default function AddAdmin() {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const [img, setImg] = useState();
  if (img) {
    console.log(img);
  }
  const handleChange = event => {
    console.log(event.target.files[0]);
    const formData = new FormData();
    formData.set("key", "8897f21df2c90980c2d6d7d920468407");
    formData.append("image", event.target.files[0]);
    axios.post("https://api.imgbb.com/1/upload", formData).then(res => {
      setImg(res.data.data.display_url);
    });
  };
  const onSubmit = data => {
    const newData = { ...data, image: img };
    console.log(newData);
    fetch("https://travel-management-service.herokuapp.com/addAdmin", {
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
          <h5 className="text-center">Add New Admin</h5>

          <label htmlFor="">Admin Photo</label>
          <input
            placeholder="image"
            className="form-control"
            onChange={handleChange}
            type="file"
          />
          <br />

          <label htmlFor="">Admin Name</label>
          <input
            className="form-control"
            placeholder="Admin Name"
            {...register("adminName", { required: true })}
          />
          {errors.adminName && (
            <span className="error">Admin Name is required</span>
          )}
          <br />

          <label htmlFor="">Admin Email Account</label>
          <input
            className="form-control"
            placeholder="Email Account"
            {...register("email", { required: true })}
          />
          {errors.email && <span className="error">Email is required</span>}
          <br />

          <label htmlFor="">Admin Country</label>
          <input
            className="form-control"
            placeholder="Country"
            {...register("country", { required: true })}
          />
          {errors.country && <span className="error">Country is required</span>}
          <br />

          <label htmlFor="">Admin Address</label>
          <input
            className="form-control"
            placeholder="Address"
            {...register("address", { required: true })}
          />
          {errors.address && <span className="error">Address is required</span>}
          <br />

          <ButtonSubmit type="submit">Add New Admin</ButtonSubmit>
        </form>
      </div>
    </div>
  );
}
