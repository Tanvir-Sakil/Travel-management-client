import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import "./CardContent.css"

const CardContent = ({card}) => {

    // const history = useHistory();
    // const handleClick = (id) => {
    //     history.push(`/tripBook/${id}`)
    // }
    return (
        <div className="card-body col-12 col-sm-12 col-md-12 col-lg-6 col-xl-4 col-xxl-4 ">
           {/* <!-- flip-card-container --> */}
            <div className="flip-card-container special-style-flipcard-2">
            <div className="flip-card">

                <div className="card-front">
                <figure>
                    <div className="img-bg"></div>
                    <img className="main-img" src={card.image} alt="Brohm Lake"/>
                    <figcaption>{card.tripName}</figcaption>
                </figure>
                
                <ul>
                    <li></li>
                
                </ul>
                <div className="col-xxl-12 col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
                    <div className="price-bg d-flex justify-content-center">
                       <div>
                            <h4  style={{color: "yellow"}} className="pe-2">${card.price}</h4>
                            <h5  style={{color: "yellow"}} className="pe-2">{card.duration} Days</h5>
                       </div>
                    </div>
                </div>

                </div>

                <div className="card-back">
                <figure>
                    <div className="img-bg"></div>
                    <img className="main-img" src={card.image} alt="Brohm Lake"/>
                </figure>

                <button > <Link to={`/tripBook/${card._id}`}>Book</Link> </button>
                

                <div className="design-container">
                    <span className="design design--1"></span>
                    <span className="design design--2"></span>
                    <span className="design design--3"></span>
                    <span className="design design--4"></span>
                    <span className="design design--5"></span>
                    <span className="design design--6"></span>
                    <span className="design design--7"></span>
                    <span className="design design--8"></span>
                </div>
                </div>

            </div>
            </div>
        
          

        </div>
    );
};

export default CardContent;