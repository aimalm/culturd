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

      {/* <div className="container-homeMain">
        <img className="image-logo" src={mainImage} alt="Logo" />
        <div className="text-homeMain">
          <h4 className="h4-homeMain">
            Lorem ipsum dolor sit amet.Aenean commodo ligula eget dolor. Aenean
            massa. Cum sociis natoque penatibus et magnis dis parturient montes,
            nascetur ridiculus mus. Donec quam felis, ultricies necLorem ipsum
            Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque
            penatibus et magnis Donec quam felis,.
          </h4>
          <br></br>
          <Link to="/aboutus">
            <Button>
              <span>Discover now</span>
            </Button>
          </Link>
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
 
      </div> */}
    </div>
  );
}

export default Home;
