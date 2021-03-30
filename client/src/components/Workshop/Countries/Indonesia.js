import React from 'react';
import './Countries.css';
import { IoTicketSharp } from "react-icons/io5";
import { BsFillLightningFill } from "react-icons/bs";
import ImageCards from './compCountries/ImageCards/ImageCards';
import Accordeon from './compCountries/Accordion/Accordion';
import IndoFood from '../image/indonesia.jpg';
import {IndoFoodInfo} from './compCountries/ImageCards/FoodInfo';
import { IndoWorkshopInfo } from './compCountries/Accordion/WorkshopInfo';
import WorkshopDetails from './compCountries/WorkshopDetails/WorkshopDetails';

function Indonesia() {
    return (
        <div className="country-container">
            <div className="wrapper">
                <div className="workshop-info">
                    <h1>Indonesian Workshops</h1>
                    <div className="ticket-info">
                        <p><span className="info-icon"><IoTicketSharp /></span> E-Ticket</p>
                        <p><span className="info-icon"><BsFillLightningFill /></span> Instant Confirmation</p>
                    </div>
                </div>
                <div className="workshop-container">
                    <div className="inner-container-1">
                        <ImageCards 
                            imageSrc={IndoFood} 
                            foodDes_1={IndoFoodInfo[0].description}
                            foodTit_1={IndoFoodInfo[0].title}
                            foodDes_2={IndoFoodInfo[1].description}
                            foodTit_2={IndoFoodInfo[1].title}
                            foodDes_3={IndoFoodInfo[2].description}
                            foodTit_3={IndoFoodInfo[2].title}
                        />
                        <div className="accordeon-container">
                            <Accordeon content={IndoWorkshopInfo}/>
                        </div>
                    </div>
                    <div className="inner-container-2">
                        <WorkshopDetails />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Indonesia;
