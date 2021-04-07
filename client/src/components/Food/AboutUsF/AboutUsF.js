import React from 'react';
import '../../Workshop/AboutUsW/AboutUs.css';
import { conceptF, missionF, visionF, peopleF } from '../AboutUsF/AboutUsFcontent';
import food from "../images/food.png";

function AboutUsF() {
    return (
        <div className="aboutUs">
            <div className="the-concept">
                <div className="the-concept-header">
                    <img className="img-food_group" src={food}  alt="" />
                </div>
                <div className="the-concept-content">
                <h2 className="h2-aboutus ">the concept</h2>
                    <p className="multiline">{conceptF}</p>
                </div>
            </div>
            <div className="trilogy">
                <div className="mis-vis-p">
                    <h3>mission</h3>
                    <p className="p-text">{missionF}</p>
                </div>
                <div className="mis-vis-p">
                    <h3>vision</h3>
                    <p className="p-text">{visionF}</p>
                </div>
                <div className="mis-vis-p">
                    <h3>people</h3>
                    <p className="p-text">{peopleF}</p>
                </div>
            </div>
        </div>
    );
}

export default AboutUsF;
