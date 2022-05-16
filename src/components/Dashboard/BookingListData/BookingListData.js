import React from 'react';
import "./BookingListData.css"

const BookingListData = ({listSingle, index}) => {
    console.log(listSingle)
    return (
        <div className="list-data-body">
            
            <div className="ft-recipe"> 
            <div className="ft-recipe__thumb"><span id="close-modal"><i className="ion ion-md-close"></i></span>
                <h3>{listSingle.tripData.trip.tripName}</h3><img  className="list-data-img" src={listSingle.tripData.trip.image} alt="Strawberry Waffle"/>
            </div>
            <div className="ft-recipe__content">
                <header className="content__header">
                <div className="row-wrapper">
                    <h2 className="recipe-title"><span style={{color: 'orange'}}>Myself</span>, {listSingle.touristInfo.touristName}</h2>
                    {/* <div className="user-rating"></div> */}
                </div>
               <div>
                   <h6 className="p-0 m-0">I wish i visit <span style={{color: "violet"}}>{listSingle.tripData.trip.tripName}</span></h6>
                    <ul className="recipe-details">
                    <li className="recipe-details-item time"><span className="value">Price</span><span className="title">${listSingle.tripData.trip.price}</span></li>
                    <li className="recipe-details-item ingredients"><span className="value">Duration</span><span className="title">{listSingle.tripData.trip.duration}</span></li>
                    <li className="recipe-details-item servings"><span className="value">Departure Date</span><span className="title">{new Date().toDateString(listSingle.tripData.departureDate)}</span></li>
                </ul>
               </div>
                </header>
               <div>
                 <h6 className="text-center text-primary">Booking List No: {index + 1}</h6>
                 <br/>
                   <h5 className="text-center text-danger">----:Tourist's Information:----</h5>
                   <h6 className="text-center">Country Name: {listSingle.touristInfo.country}</h6>
                   <h6 className="text-center">City Name: {listSingle.touristInfo.city}</h6>
                   <h6 className="text-center">Address: {listSingle.touristInfo.address}</h6>
                   <h6 className="text-center">Phone Number: {listSingle.touristInfo.phoneNumber}</h6>
               </div>
            </div>
            </div>
        </div>
    );
};

export default BookingListData;