import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import workshop from '../image/WORKSHOP.png'
import food from '../image/food.png'


function Home() {
  return (

   
    <div className="home-wrapper">
      <div class="back-web">BACK</div>
  <div class="back-office">BACK</div>
      
      <Link to="/workshop" className="home-workshop-section">
       
        <img src={workshop}  className="workshop-img" alt=""/>
          <h5 className="home-workshop-button">click to see more</h5>

      </Link>
      <Link to="/food" className="home-food-section">
        
            <img src={food} className="food-img" alt=""/>
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
