import React from "react";
import "./Countries.css";
import { IoTicketSharp } from "react-icons/io5";
import { BsFillLightningFill } from "react-icons/bs";
import ImageCards from "./compCountries/ImageCards/ImageCards";
import Accordeon from "./compCountries/Accordion/Accordion";
import Food from "../image/afghanFood.PNG";
import Dance from "../image/afghanDance.jpg";
import Art from "../image/afghanCarpet.jpg";
import { AfghanWorkshop } from "./compCountries/ImageCards/WorkshopDescription";
import { AfghanWorkshopInfo } from "./compCountries/Accordion/WorkshopInfo";
import WorkshopDetails from "./compCountries/WorkshopDetails/WorkshopDetails";

function Afghanistan() {
  return (
    <div className="country-container">
      <div className="wrapper">
        <div className="workshop-info">
          <h1>Afghan Workshops</h1>
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
              foodDes_1={AfghanWorkshop[0].description}
              foodTit_1={AfghanWorkshop[0].title}
              foodDes_2={AfghanWorkshop[1].description}
              foodTit_2={AfghanWorkshop[1].title}
              foodDes_3={AfghanWorkshop[2].description}
              foodTit_3={AfghanWorkshop[2].title}
            />
            <div className="accordeon-container">
              <Accordeon content={AfghanWorkshopInfo} />
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

export default Afghanistan;
