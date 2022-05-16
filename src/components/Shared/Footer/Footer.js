import React from 'react';
import "./Footer.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCopyright } from '@fortawesome/free-solid-svg-icons'

const Footer = () => {
    return (
        <div className="footer-main" style={{ backgroundColor: "#006670"}}>
          <div className="d-flex justify-content-center ">
               <div className="row w-100 footer">
               <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-3 col-xxl-3">
                   <h5>Our Services</h5>
                   <li><a href="#">Origin of Goal</a></li>
                   <li><a href="#">Origin of Goal</a></li>
                   <li><a href="#">Origin of Goal</a></li>
                   <li><a href="#">Origin of Goal</a></li>
                   <li><a href="#">Origin of Goal</a></li>
               </div>
               <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-3 col-xxl-3">
                 <h5>Our Employee</h5>
                   <li><a href="#">Main Term</a></li>
                   <li><a href="#">Main Term</a></li>
                   <li><a href="#">Main Term</a></li>
                   <li><a href="#">Main Term</a></li>
                   <li><a href="#">Main Term</a></li>
               </div>
               <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-3 col-xxl-3">
                    <h5>Our Maintanence</h5>
                   <li><a href="#">Our Team</a></li>
                   <li><a href="#">Our Team</a></li>
                   <li><a href="#">Our Team</a></li>
                   <li><a href="#">Our Team</a></li>
                   <li><a href="#">Our Team</a></li>
               </div>
               <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-3 col-xxl-3">
                 <h5>Our Guide</h5>
                   <li><a href="#">Our Management</a></li>
                   <li><a href="#">Our Management</a></li>
                   <li><a href="#">Our Management</a></li>
                   <li><a href="#">Our Management</a></li>
                   <li><a href="#">Our Management</a></li>
               </div>
           </div>
          </div>
            <div style={{height: "60px", backgroundColor: "black", display:"flex", alignItems: "center", justifyContent: "center", paddingTop: "10px"}}>
             <p  style={{fontSize: "12px", color: "white"}}> <FontAwesomeIcon icon={faCopyright}/> Copyright and All Rights Reserved by Tanvir Md. Sakil || 2022</p>
           </div>
            
        </div>
    );
};

export default Footer;