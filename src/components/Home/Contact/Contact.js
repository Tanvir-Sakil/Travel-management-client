import React from 'react';
import { useForm } from "react-hook-form";
import ButtonSubmit from "../../FancyAnimation/ButtonSubmit/ButtonSubmit"
import "./Contact.css"


export default function Contact() {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);


  return (
      <div className="w-100 contact">
                      <h1 className="text-center">Always Contact With Us</h1>
                      <br/>
            <div className="d-flex justify-content-center ">
            <form className="col-9 col-sm-9 col-md-8 col-lg-7 col-xl-7 col-xxl-6" onSubmit={handleSubmit(onSubmit)}>
            
            <input placeholder="Name" className="form-control" {...register("name", { required: true })} /> 
            {errors.name && <span>Name is required</span>}

            <br/>

            <input placeholder="Subject" className="form-control" {...register("subject", { required: true })} />
            {errors.subject && <span>Subject is required</span>}

            <br/>
            <input placeholder="Email" className="form-control" {...register("email", { required: true })} />
            {errors.email && <span>Email is required</span>}

            <br/>

            <textarea placeholder="Description" className="form-control" {...register("description", { required: true })} name="" id="" cols="100%" rows="8"></textarea>
            {errors.description && <span>Description is required</span>}
        <div className="p-0 m-0">
                <br/><br/>
            <ButtonSubmit>Submit</ButtonSubmit>
        </div>
        
        </form>
        </div>
      </div>
  );
}