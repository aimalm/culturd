import React, { useState } from "react";
import "./Accordion.css";
import { FaChevronUp, FaChevronDown } from "react-icons/fa";

function Accordion(accordionProp) {
  const [clicked, setClicked] = useState(false);
  const toggleAngle = (index) => {
    if (clicked === index) {
      return setClicked(null);
    }

    setClicked(index);
  };
  return (
    <div>
      {accordionProp.content.map((item, index) => {
        return (
          <div className="info-section" key={index}>
            <div className="section-wrap" onClick={() => toggleAngle(index)}>
              <h5>{item.title}</h5>
              <span>
                {clicked === index ? <FaChevronUp /> : <FaChevronDown />}
              </span>
            </div>
            {clicked === index ? (
              <div className="dropDown">{item.content}</div>
            ) : null}
          </div>
        );
      })}
    </div>
  );
}

export default Accordion;
