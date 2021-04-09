import React from "react";
import "./Countries.css";
import { IoTicketSharp } from "react-icons/io5";
import { BsFillLightningFill } from "react-icons/bs";
import ImageCards from "./compCountries/ImageCards/ImageCards";
import Accordeon from "./compCountries/Accordion/Accordion";
import Food from "../image/congoFood.jpg";
import Dance from "../image/congoDance.jpeg";
import Art from "../image/congoMask.jpg";
import { CongoWorkshop } from "./compCountries/ImageCards/WorkshopDescription";
import { CongoWorkshopInfo } from "./compCountries/Accordion/WorkshopInfo";
import WorkshopDetails from "./compCountries/WorkshopDetails/WorkshopDetails";

function Congo() {
  return (
    <div className="country-container">
      <div className="wrapper">
        <div className="workshop-info">
          <h1>Congolese Workshops</h1>
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
              foodDes_1={CongoWorkshop[0].description}
              foodTit_1={CongoWorkshop[0].title}
              foodDes_2={CongoWorkshop[1].description}
              foodTit_2={CongoWorkshop[1].title}
              foodDes_3={CongoWorkshop[2].description}
              foodTit_3={CongoWorkshop[2].title}
            />
            <div className="accordeon-container">
              <Accordeon content={CongoWorkshopInfo} />
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

export default Congo;
