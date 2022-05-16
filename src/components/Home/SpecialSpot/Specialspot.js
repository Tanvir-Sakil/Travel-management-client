import React from 'react';
import "./SpecialSpot.css"
import ButtonSubmit from "../../FancyAnimation/ButtonSubmit/ButtonSubmit"
import { useHistory } from 'react-router-dom';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

const Specialspot = () => {
    // const history = useHistory();
    // const handleClick = () => {
    //    history.push("/bookPage")
    // }
    return (
        <div className="w-100 special-spot">
            <h4 className="text-center pt-5">LAKE SWITZERLAND</h4>
            <Link style={{textDecoration: "none"}} to="/bookPage"><ButtonSubmit>Book This Trip</ButtonSubmit></Link>
        </div>
    );
};

export default Specialspot;