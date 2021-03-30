import React from 'react';
import './Countries.css';
import { IoTicketSharp } from 'react-icons/io5';
import { BsFillLightningFill } from 'react-icons/bs';
import ImageCards from './compCountries/ImageCards/ImageCards';
import Accordeon from './compCountries/Accordion/Accordion';
import CongoFood from '../image/congo.jpg';
import {CongoFoodInfo} from './compCountries/ImageCards/FoodInfo';
import { CongoWorkshopInfo } from './compCountries/Accordion/WorkshopInfo';
import WorkshopDetails from './compCountries/WorkshopDetails/WorkshopDetails';

function Congo() {
    return (
        <div className="country-container">
            <div className="workshop-info">
                <h2>Congolese Workshops</h2>
                <div className="ticket-info">
                    <p><span className="info-icon"><IoTicketSharp /></span> E-Ticket</p>
                    <p><span className="info-icon"><BsFillLightningFill /></span> Instant Confirmation</p>
                </div>
            </div>
            <div className="workshop-container">
                <div className="inner-container">
                    <ImageCards 
                        imageSrc={CongoFood} 
                        foodDes_1={CongoFoodInfo[0].description}
                        foodTit_1={CongoFoodInfo[0].title}
                        foodDes_2={CongoFoodInfo[1].description}
                        foodTit_2={CongoFoodInfo[1].title}
                        foodDes_3={CongoFoodInfo[2].description}
                        foodTit_3={CongoFoodInfo[2].title}
                    />
                    <div className="accordeon-container">
                        <Accordeon content={CongoWorkshopInfo}/>
                    </div>
                </div>
                <div className="inner-container">
                    <WorkshopDetails />
                </div>
            </div>
        </div>
    );
}

export default Congo;
