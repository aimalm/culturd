import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import culturd from '../image/food.png'
import workshop from '../image/workshop.png'

function Home() {
  return (
  <>
     <div class="l-flex-fix">
        <div class="l-flex-parent">
           <div class="worskhop l-flex-child l-grid-half">
              <div class="culturd-item">
              <img className="img-worskhop" src={workshop} alt="workshop"/>
              <Link to="/workshop"> CULTURD WORSHOP</Link>
               </div>
               </div>
              <div class="kitching l-flex-child l-grid-half">
              <div class="culturd-item">
              <img className="img-culturd" src={culturd} alt="culturd"/>
              <Link to="/food"> CULTURD KITCHING </Link>
               </div>
             </div>
         </div>
      </div>
  </>
  );
}

export default Home;
