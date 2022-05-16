import React from 'react';
import notFoundGif from "../../image/image_processing20200409-17748-1bxa3q5.gif"

const NotFound = () => {
    return (
        <div style={{height: "99.99vh"}} className="d-flex justify-content-center align-items-center">
        <div className="">
            <h4 className="text-center text-danger">
                Page Not Found!!!
            </h4>
            <p className="text-center">Please Try With Verified URL</p>
            <img className="img-fluid" src={notFoundGif} alt=""/>
        </div>
        </div>
    );
};

export default NotFound;