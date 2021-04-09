import React from "react";
import "./Countries.css";
import { IoTicketSharp } from "react-icons/io5";
import { BsFillLightningFill } from "react-icons/bs";
import ImageCards from "./compCountries/ImageCards/ImageCards";
import Accordeon from "./compCountries/Accordion/Accordion";
import Food from "../image/indoFood.jpg";
import Dance from "../image/indoDance.PNG";
import Art from "../image/indoArt.jpg";
import { IndoWorkshop } from "./compCountries/ImageCards/WorkshopDescription";
import { IndoWorkshopInfo } from "./compCountries/Accordion/WorkshopInfo";
import WorkshopDetails from "./compCountries/WorkshopDetails/WorkshopDetails";

function Indonesia() {
  return (
    <div className="country-container">
      <div className="wrapper">
        <div className="workshop-info">
          <h1>Indonesian Workshops</h1>
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
              foodDes_1={IndoWorkshop[0].description}
              foodTit_1={IndoWorkshop[0].title}
              foodDes_2={IndoWorkshop[1].description}
              foodTit_2={IndoWorkshop[1].title}
              foodDes_3={IndoWorkshop[2].description}
              foodTit_3={IndoWorkshop[2].title}
            />
            <div className="accordeon-container">
              <Accordeon content={IndoWorkshopInfo} />
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
