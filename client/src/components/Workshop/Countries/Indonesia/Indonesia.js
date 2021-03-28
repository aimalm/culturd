import React from 'react';
import './Indonesia.css';
import { IoTicketSharp } from "react-icons/io5";
import { BsFillLightningFill } from "react-icons/bs";
import ImageCards from '../compCountries/ImageCards/ImageCards';
import IndoFood from '../../image/indonesia.jpg';
import {IndoFoodInfo} from '../compCountries/ImageCards/FoodInfo';

function Indonesia() {
    return (
        <div className="country-container">
            <div className="workshop-info">
                <h2>Indonesian Cooking Workshop</h2>
                <div className="ticket-info">
                    <p><span className="info-icon"><IoTicketSharp /></span> E-Ticket</p>
                    <p><span className="info-icon"><BsFillLightningFill /></span> Instant Confirmation</p>
                </div>
            </div>
            <div className="workshop-container">
                <div className="container-1">
                    <ImageCards 
                        imageSrc={IndoFood} 
                        foodDes_1={IndoFoodInfo[0].description}
                        foodTit_1={IndoFoodInfo[0].title}
                        foodDes_2={IndoFoodInfo[1].description}
                        foodTit_2={IndoFoodInfo[1].title}
                        foodDes_3={IndoFoodInfo[2].description}
                        foodTit_3={IndoFoodInfo[2].title}
                    />
                </div>
                <div className="container-1">
                    hellloooo
                </div>
            </div>
        </div>
    );
}

export default Indonesia;
