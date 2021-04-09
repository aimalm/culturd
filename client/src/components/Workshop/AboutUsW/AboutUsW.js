import React from "react";
import "./AboutUs.css";
import { conceptW, missionW, visionW, peopleW } from "./AboutUsWcontent";
import workshop from "../image/group.png";

function AboutUsW() {
  return (
    <div className="aboutUs">
      <div className="the-concept">
        <div className="team">
          <img className="img-workshop_group" src={workshop} alt="" />
          <div className="team-overlay_workshop">
            <p>
              MEET THE TEAM
              <br />
              Valerie & Ismi
            </p>
          </div>
        </div>
        <div className="the-concept-content">
          <h2 className="h2-aboutus">the concept</h2>
          <p className="multiline-concept">{conceptW}</p>
        </div>
      </div>
      <div className="trilogy">
        <div className="mis-vis-p mission">
          <h3>mission</h3>
          <p className="p-text">{missionW}</p>
        </div>
        <div className="mis-vis-p vision">
          <h3>vision</h3>
          <p className="p-text">{visionW}</p>
        </div>
        <div className="mis-vis-p people">
          <h3>people</h3>
          <p className="p-text">{peopleW}</p>
        </div>
      </div>
    </div>
  );
}

export default AboutUsW;
