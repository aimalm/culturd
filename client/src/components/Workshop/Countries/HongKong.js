import React from "react";
import "./Countries.css";
import { IoTicketSharp } from "react-icons/io5";
import { BsFillLightningFill } from "react-icons/bs";
import ImageCards from "./compCountries/ImageCards/ImageCards";
import Accordeon from "./compCountries/Accordion/Accordion";
import Food from "../image/hongFood.jpg";
import Dance from "../image/hongDance.jpg";
import Art from "../image/hongArt.jpg";
import { HongWorkshop } from "./compCountries/ImageCards/WorkshopDescription";
import { HongWorkshopInfo } from "./compCountries/Accordion/WorkshopInfo";
import WorkshopDetails from "./compCountries/WorkshopDetails/WorkshopDetails";

function HongKong() {
  return (
    <div className="country-container">
      <div className="wrapper">
        <div className="workshop-info">
          <h1>Chinese Workshops</h1>
          <div className="ticket-info">
            <p>
              <span className="info-icon">
                <IoTicketSharp />
              </span>{" "}
              E-Ticket
            </p>
            <p>
              <span className="info-icon">
                <BsFillLightningFill />
              </span>{" "}
              Instant Confirmation
            </p>
          </div>
        </div>
        <div className="workshop-container">
          <div className="inner-container-1">
            <ImageCards
              imageSrc1={Food}
              imageSrc2={Dance}
              imageSrc3={Art}
              foodDes_1={HongWorkshop[0].description}
              foodTit_1={HongWorkshop[0].title}
              foodDes_2={HongWorkshop[1].description}
              foodTit_2={HongWorkshop[1].title}
              foodDes_3={HongWorkshop[2].description}
              foodTit_3={HongWorkshop[2].title}
            />
            <div className="accordeon-container">
              <Accordeon content={HongWorkshopInfo} />
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

export default HongKong;
