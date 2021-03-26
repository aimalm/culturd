import React from "react";
// import mainImage from "../image/test2.png";
import "./Home.css";
// import { Button } from "react-bootstrap";
// import workshop from "../image/workshop.png";
// import foodie from "../image/foodie.png";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home-wrapper">
      
      <Link to="/workshop" className="home-workshop-section">
       
          <p>img here</p>
          <h5 className="home-workshop-button">click to see more</h5>

      </Link>
      <Link to="/food" className="home-food-section">
        
          <p>img here</p>
          <h5 className="home-food-button">click to see more</h5>
        
      </Link>
      <Link to="/workshop" className="home-workshop-text">
        
          <h3>culturd workshop</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores,
            labore.
          </p>
        
      </Link>
      <Link to="/food" className="home-food-text">
     
          <h3>culturd home food</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores,
            labore.
          </p>
        
      </Link>

      
    </div>
  );
}

export default Home;
