import React, { useState } from 'react';
import './Accordion.css';
import { FaChevronUp, FaChevronDown } from "react-icons/fa";


function Accordion(accordeonProp) {
    const [clicked, setClicked] = useState(false);
    const toggleAngle = index => {
        if (clicked === index) {
            return setClicked(null);
        }

        setClicked(index);
    }
    return (
        <div>
            {accordeonProp.content.map((item, index) => {
                return (
                    <div className="info-section">
                        <div className="section-wrap" onClick={() => toggleAngle(index)} key={index}>
                            <h5>{item.title}</h5>
                            <span>{clicked === index? <FaChevronUp /> : <FaChevronDown />}</span>
                        </div>
                        {clicked === index? (
                            <div className="dropDown">
                                <p>{item.content}</p>
                            </div>  
                        ) : null}
                    </div>
                )
            })}
        </div>
    );
}

export default Accordion;
