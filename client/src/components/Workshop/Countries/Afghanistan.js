import React from 'react';
import './Countries.css';
import { IoTicketSharp } from "react-icons/io5";
import { BsFillLightningFill } from "react-icons/bs";
import ImageCards from './compCountries/ImageCards/ImageCards';
import Accordeon from './compCountries/Accordion/Accordion';
import AfghanFood from '../image/afghanistan.jpg';
import { AfghanFoodInfo } from './compCountries/ImageCards/FoodInfo';
import { AfghanWorkshopInfo } from './compCountries/Accordion/WorkshopInfo';
import WorkshopDetails from './compCountries/WorkshopDetails/WorkshopDetails';

function Afghanistan() {
    return (
        <div className="country-container">
            <div className="workshop-info">
                <h2>Afghan Workshops</h2>
                <div className="ticket-info">
                    <p><span className="info-icon"><IoTicketSharp /></span> E-Ticket</p>
                    <p><span className="info-icon"><BsFillLightningFill /></span> Instant Confirmation</p>
                </div>
            </div>
            <div className="workshop-container">
                <div className="inner-container">
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
                        <Accordeon content={AfghanWorkshopInfo}/>
                    </div>
                </div>
                <div className="inner-container">
                    <WorkshopDetails />
                </div>
            </div>
        </div>
    );
}

export default Afghanistan;
