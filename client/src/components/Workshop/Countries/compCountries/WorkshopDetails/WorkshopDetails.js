import React from "react";
import { Link } from "react-router-dom";
import "./WorkshopDetails.css";
import { FaRegMoneyBillAlt, FaComment, FaMale } from "react-icons/fa";
import { ImClock } from "react-icons/im";
import { RiStarSmileLine } from "react-icons/ri";

function WorkshopDetails() {
  return (
    <div className="booking-container">
      <div className="icon-container">
        <div className="booking-details">
          <span className="booking-icon">
            <FaMale />
          </span>
          <p className="focus">number of participants</p>
          <p>2 to 15 people</p>
        </div>
        <div className="booking-details">
          <span className="booking-icon">
            <ImClock />
          </span>
          <p className="focus">duration</p>
          <p>3h</p>
        </div>
        <div className="booking-details">
          <span className="booking-icon">
            <FaComment />
          </span>
          <p className="focus">languages</p>
          <p>Dutch, English</p>
        </div>
        <div className="booking-details">
          <span className="booking-icon">
            <FaRegMoneyBillAlt />
          </span>
          <p className="focus">budget</p>
          <p>Depends on amount participants</p>
        </div>
      </div>
      <div className="review-container">
        <span className="review-icon">
          <RiStarSmileLine />
        </span>
        <div className="review-details">
          <p>followed the workshop?</p>
          <Link to="/workshop" className="review-link">
            <p>Write a review!</p>
          </Link>
        </div>
      </div>
      <Link to="/workshop/bookform" className="booking-button">
        <p>BOOK NOW</p>
      </Link>
    </div>
  );
}

export default WorkshopDetails;
