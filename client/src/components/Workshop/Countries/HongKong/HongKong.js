import React from 'react';
import './HongKong.css';
import { IoTicketSharp } from "react-icons/io5";
import { BsFillLightningFill } from "react-icons/bs";
import ImageCards from '../compCountries/ImageCards/ImageCards';
import HongFood from '../../image/hongkong.jpg';
import {HongFoodInfo} from '../compCountries/ImageCards/FoodInfo';

function HongKong() {
    return (
        <div className="country-container">
            <div className="workshop-info">
                <h2>Chinese Cooking Workshop</h2>
                <div className="ticket-info">
                    <p><span className="info-icon"><IoTicketSharp /></span> E-Ticket</p>
                    <p><span className="info-icon"><BsFillLightningFill /></span> Instant Confirmation</p>
                </div>
            </div>
            <div className="workshop-container">
                <div className="container-1">
                    <ImageCards 
                        imageSrc={HongFood} 
                        foodDes_1={HongFoodInfo[0].description}
                        foodTit_1={HongFoodInfo[0].title}
                        foodDes_2={HongFoodInfo[1].description}
                        foodTit_2={HongFoodInfo[1].title}
                        foodDes_3={HongFoodInfo[2].description}
                        foodTit_3={HongFoodInfo[2].title}
                    />
                </div>
                <div className="container-1">
                    
                </div>
            </div>
        </div>
    );
}

export default HongKong;
