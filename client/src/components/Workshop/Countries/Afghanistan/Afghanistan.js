import React, { useState } from 'react';
import './Afghanistan.css';
import { IoTicketSharp } from "react-icons/io5";
import { BsFillLightningFill } from "react-icons/bs";
import { FaChevronUp, FaChevronDown } from "react-icons/fa";
import ImageCards from '../compCountries/ImageCards/ImageCards';
import AfghanFood from '../../image/afghanistan.jpg';
import { AfghanFoodInfo } from '../compCountries/ImageCards/FoodInfo';
import { AfghanWorkshopInfo } from '../compCountries/Accordion/WorkshopInfo';
import { IndexLinkContainer } from 'react-router-bootstrap';

function Afghanistan() {
    const [clicked, setClicked] = useState(false);
    const toggleAngle = index => {
        if (clicked === index) {
            return setClicked(null);
        }

        setClicked(index);
    }
    return (
        <div className="country-container">
            <div className="workshop-info">
                <h2>Afghan Cooking Workshop</h2>
                <div className="ticket-info">
                    <p><span className="info-icon"><IoTicketSharp /></span> E-Ticket</p>
                    <p><span className="info-icon"><BsFillLightningFill /></span> Instant Confirmation</p>
                </div>
            </div>
            <div className="workshop-container">
                <div className="container-1">
                    <ImageCards 
                        imageSrc={AfghanFood} 
                        foodDes_1={AfghanFoodInfo[0].description}
                        foodTit_1={AfghanFoodInfo[0].title}
                        foodDes_2={AfghanFoodInfo[1].description}
                        foodTit_2={AfghanFoodInfo[1].title}
                        foodDes_3={AfghanFoodInfo[2].description}
                        foodTit_3={AfghanFoodInfo[2].title}
                    />
                    <div className="accordeon-container">
                        {AfghanWorkshopInfo.map((item, index) => {
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
                </div>
                <div className="container-1">
                    
                </div>
            </div>
        </div>
    );
}

export default Afghanistan;
