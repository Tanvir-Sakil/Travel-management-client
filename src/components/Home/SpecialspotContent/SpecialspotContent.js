import React from 'react';
import "./SpecialspotContent.css"

const SpecialspotContent = () => {
    return (
        <div className="row w-100 special-styling ">
            <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6 text-align-justify">
                <h3 className="text-center  text-uppercase">Lake Switzerland</h3>
                <p style={{textAlign: "justify"}}>Ut wisi enim ad minim veniam, quis nostrud exerci tation ulla.Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.
                Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla</p>
            </div>
            <div style={{textAlign: "justify"}} className="quote col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6 fst-italic d-flex align-items-center">
                "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt fugit ut quibusdam voluptatum earum voluptatibus ea, aliquam totam eos quis."
            </div>
        </div>
    );
};

export default SpecialspotContent;