import React from 'react';
import "./CounterContent.css"
import CountUp from 'react-countup';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const CounterContent = ({info}) => {
    return (
        <div className=" d-flex justify-content-center col-7 col-sm-7 col-md-4 col-lg-2 col-xl-2 col-xxl-2">
            <div className="text-center">
                <FontAwesomeIcon className="counter-icon" icon={info.image}/>
             <CountUp
                start={1}
                end={info.digit}
                duration={7.75}
                delay={0}
                >
                {({ countUpRef }) => (
                    <div>
                    <span className="counter-digit" ref={countUpRef} />
                    </div>
                )}
            </CountUp>
            <h4 className="counter-h4">{info.title}</h4>
            </div>
        </div>
    );
};

export default CounterContent;