import React from 'react';
import './AboutUsW.css';
import { concept, mission, vision, people } from './AboutUsWcontent';

function AboutUsW() {
    return (
        <div className="aboutUs">
            <div className="the-concept">
                <div className="the-concept-header">
                    <h2>the concept</h2>
                </div>
                <div className="the-concept-content">
                    <p className="multiline">{concept}</p>
                </div>
            </div>
            <div className="trilogy">
                <div className="mission">
                    <h3>mission</h3>
                    <p>{mission}</p>
                </div>
                <div className="vision">
                    <h3>vision</h3>
                    <p>{vision}</p>
                </div>
                <div className="people">
                    <h3>people</h3>
                    <p>{people}</p>
                </div>
            </div>
        </div>
    );
}

export default AboutUsW;
