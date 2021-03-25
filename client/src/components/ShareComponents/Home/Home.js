import React from "react";
import mainImage from "../image/test2.png";
import "./Home.css";
import workshop from "../image/workshop.png";
 import foodie from "../image/foodie.png";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
    <div className="container-homeMain">
      <div className="header-HomeMain">
            <img className="image-homeMain" src={mainImage} alt="Logo" />
           <div className="text-homeMain">
            <h4 className="h4-homeMain">
              Lorem ipsum dolor sit amet.Aenean commodo ligula eget dolor. 
            </h4>
            <br></br>
            <Link className="landing_main-button" to="/workshop/about_us">Discover More</Link>{" "}
          </div>
      </div>
      <div className="svg-main">
          <svg  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="bisque" fill-opacity="0.6" d="M0,32L720,320L1440,160L1440,0L720,0L0,0Z"></path></svg>
     </div> 
      <div className="home-section-wrapper">
        <div className="home-section-container">
         <div className="home-section-title">
           <h2>Pick your choice</h2>
           <div className="home-breakline"></div>

          </div>
          <div className="home-section">
            <img src={workshop} alt="workshop" />
            <h5>
              Experience difficult cultures with the guidance of the native
            </h5>
            <Link className="home-section-button" to="/workshop">More Info</Link>{" "}
          </div>
          <div className="home-section">
          <img src={foodie} alt="foodie" />
         
            <h5>
              To get some home food instead of boring delivery for your dinner tonight?
            </h5>
            <Link className="home-section-button" to="/food">More Info</Link>{" "}
          </div>
        </div>
        </div>
 
      </div>
    </>
  );
}

export default Home;
