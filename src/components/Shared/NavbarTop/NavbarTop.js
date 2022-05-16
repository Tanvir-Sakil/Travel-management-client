import React from 'react';
import "./NavbarTop.css"
import logo from "../../../image/logo.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faStreetView, faPhoneVolume } from '@fortawesome/free-solid-svg-icons'


const NavbarTop = () => {
    return (
      
          <div className="w-100 row d-flex justify-content-center align-items-center">
               <div className="navbar-top-padding navbartop-special-centering col-12 col-sm-12 col-md-2 col-lg-4 col-xl-4 col-xxl-4">
             <img style={{height: "90px", width: "100px"}}  src={logo} alt=""/>
           </div>
           <div className="col-12 col-sm-12 col-md-10 col-lg-8 col-xl-7 col-xxl-7 row">
                  <div className=" navbar-top-padding col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
               <div className="text-center"><FontAwesomeIcon icon={faEnvelope}/><span className="logo-font">Mail Us Today</span></div>
               <div className="text-center"> <span className="logo-font-down">info@yourdomain.com</span> </div>
                </div>
                <div className="navbar-top-padding col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                    <div className="text-center"><FontAwesomeIcon icon={faStreetView}/><span className="logo-font">Company Location</span></div>
                    <div className="text-center"> <span className="logo-font-down">121 King Street, Melbourne</span> </div>
                </div>
                <div className="navbar-top-padding col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                    <div className="text-center"><FontAwesomeIcon icon={faPhoneVolume}/><span className="logo-font">+(012) 345 6789</span></div>
                    <div className="text-center"> <span className="logo-font-down">Call us for more details</span> </div>
                </div>
           </div>
          </div>

    );
};

export default NavbarTop;