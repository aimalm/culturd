import React from "react";
import "./LandingF.css";

import {RiUserSearchFill,RiEmotionHappyLine} from 'react-icons/ri'
import {FaShoppingCart} from 'react-icons/fa'

import CarouselF from "./CarouselF";
import SearchF from "./SearchF";
import NewInCardF from "./NewInCardF";


function LandingF({ selectedDish, setSelectedDish, shoppingCart, viewingCart,searchResult, setSearchResult }) {


  return (
    <div className="food-home">
      {/* search for food start here */}
      <SearchF selectedDish={selectedDish} setSelectedDish={setSelectedDish} searchResult={searchResult} setSearchResult={setSearchResult}/>

      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#f5d98e"
          d="M0,224L720,288L1440,192L1440,320L720,320L0,320Z"
        ></path>
      </svg>

      {/* new food post start here */}
      <NewInCardF setSelectedDish={setSelectedDish} />
      
      {/* How it works start here */}
      <h3 className="how-it-works-title">How it works?</h3>

      <CarouselF/>

      <div className="how-it-works">
        <div className="step-one">
          <div>
            <h3> <RiUserSearchFill/></h3>
            <p>
              Browse for the food you like,<br></br>
              you can search by name, available date or pick up location
            </p>
          </div>
        </div>
        <div className="step-two">
          <div>
            <h3> <FaShoppingCart/></h3>
            <p>
              Add to shopping carte<br></br>
              and login to your personal account
            </p>
          </div>
        </div>
        <div className="step-three">
          <div>
            <h3> <RiEmotionHappyLine/></h3>
            <p>
              Check out and pay the deposit<br></br>
              Ready to pick up your next Home Dish on the day!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingF;
