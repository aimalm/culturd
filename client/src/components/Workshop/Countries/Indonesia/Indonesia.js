import React from 'react';
import './Indonesia.css';
import { IoTicketSharp } from "react-icons/io5";
import { BsFillLightningFill } from "react-icons/bs";

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
        </div>
    );
}

export default Indonesia;
