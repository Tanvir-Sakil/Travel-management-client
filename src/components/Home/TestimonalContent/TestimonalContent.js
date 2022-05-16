import React from 'react';
import Carousel from 'react-elastic-carousel';
import "./TestimonalContent.css"
const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2, itemsToScroll: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 4 }
];

const TestimonalContent = ({review}) => {
    return (
        <div className="testimonal-body">
      <div className="carousel-wrapper">
        <Carousel  breakPoints={breakPoints}>
          {review.map((rev, index) => (
            <div className="carosel-single" style={{padding: "20px", margin: "15px", height: "300px",boxShadow: "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset"}} key={index}>
               <div>
                 <div className="client-img-div" style={{ height: "101px" ,textAlign:"center" }}>
                          <img style={{height: "100px", textAlign: "center"}} src="https://www.kindpng.com/picc/m/685-6851196_person-icon-grey-hd-png-download.png" alt=""/>
                         
                 </div>
                   <h4 style={{fontSize: "14px", fontWeight: "600", textAlign: "center", paddingTop: "10px"}}>{rev.name}</h4>
                   <h6 style={{fontSize: "11px", textAlign: "center"}}>{rev.email}</h6>
                   <p style={{fontSize: "10px", textAlign: "justify"}}>{rev.description}</p>
               </div>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
    );
};

export default TestimonalContent;