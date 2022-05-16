import React from 'react';
import { useHistory } from 'react-router-dom';
import "./Navbar.css"

const Navbar = () => {
    // const history = useHistory();
    // const handleClick = () => {
    //    history.push("/home")
    // }
    return (
        <div className="sticky-top nav-all">
           <nav className="menu">
            <ol>
                <li  className="menu-item"><a href="/home">Home</a></li>
                <li className="menu-item">
                <a href="">About</a>
                <ol className="sub-menu">
                    <li className="menu-item"><a href="/contactPage">Contact Us</a></li>
                    <li className="menu-item"><a href="#">Our Mission</a></li>
                    <li className="menu-item"><a href="#">FAQ</a></li>
                </ol>
                </li>
                <li className="menu-item">
                <a href="">Destinations</a>
                <ol className="sub-menu">
                    <li className="menu-item"><a href="/bookPage">Destination List </a></li>
                    <li className="menu-item"><a href="/bookPage">Destination Slider</a></li>
                    <li className="menu-item"><a href="/bookPage">Destination Item</a></li>
                </ol>
                </li>
                <li className="menu-item"><a href="/contactPage">Contact</a></li>
                <li className="menu-item"><a href="/account">My Account</a></li>
            </ol>
            </nav>
        </div>
    );
};

export default Navbar;