import React from 'react';
import "./Counter.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserAlt, faCar, faBriefcase, faComment } from '@fortawesome/free-solid-svg-icons'
import CounterContent from '../CounterContent/CounterContent';

const CounterInfo = [
    {
        digit: "1442909",
        image: faUserAlt,
        title: "Happy Clients"
    },
      {
        digit: "2440",
        image: faCar,
        title: "Amazings Tours"
    },
      {
        digit: "15469",
        image: faBriefcase,
        title: "In Business"
    },
      {
        digit: "154689",
        image: faComment,
        title: "Support Cases"
    }
    
]


const Counter = () => {
  
    return (
        <div className="w-100 d-flex justify-content-center ps-3 pt-5 pb-5 row">
           {
               CounterInfo.map((info, index) =>  <CounterContent key={index} info={info}></CounterContent> )
           }
        </div>
    );
};

export default Counter;