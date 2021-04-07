import React from 'react';
import './AboutUs.css';
import { concept, mission, vision, people } from './AboutUsWcontent';
import workshop from "../image/group.png";

function AboutUsW() {
    return (
        <div className="aboutUs">
            <div className="the-concept">
                <img className="img-workshop_group" src={workshop}  alt="" />
                <div className="the-concept-content">
                    <h2 className="h2-aboutus">the concept</h2>
                    <p className="multiline-concept">{concept}</p>
                </div>
            </div>
            <div className="trilogy">
                <div className="mis-vis-p">
                    <h3>mission</h3>
                    <p className="p-text">{mission}</p>
                </div>
                <div className="mis-vis-p">
                    <h3>vision</h3>
                    <p className="p-text">{vision}</p>
                </div>
                <div className="mis-vis-p">
                    <h3>people</h3>
                    <p className="p-text">{people}</p>
                </div>
            </div>
        </div>
    );
}

export default AboutUsW;
