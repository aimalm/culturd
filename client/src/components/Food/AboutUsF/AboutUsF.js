import React from "react";
import "../../Workshop/AboutUsW/AboutUs.css";
import {
  conceptF,
  missionF,
  visionF,
  peopleF,
} from "../AboutUsF/AboutUsFcontent";
import food from "../images/food.png";

function AboutUsF() {
  return (
    <div className="aboutUs">
      <div className="the-concept">
        <div className="team">
          <img className="img-food_group" src={food} alt="" />
          <div className="team-overlay_food">
            <p>
              MEET THE TEAM
              <br />
              Aimal & Wing
            </p>
          </div>
        </div>
        <div className="the-concept-content">
          <h2 className="h2-aboutus ">the concept</h2>
          <p className="multiline">{conceptF}</p>
        </div>
      </div>
      <div className="trilogy">
        <div className="mis-vis-p mission">
          <h3>mission</h3>
          <p className="p-text">{missionF}</p>
        </div>
        <div className="mis-vis-p vision">
          <h3>vision</h3>
          <p className="p-text">{visionF}</p>
        </div>
        <div className="mis-vis-p people">
          <h3>people</h3>
          <p className="p-text">{peopleF}</p>
        </div>
      </div>
    </div>
  );
}

export default AboutUsF;
