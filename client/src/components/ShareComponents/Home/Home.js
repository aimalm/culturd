import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";


function Home() {
  return (
  <>
     <div class="l-flex-fix">
        <div class="l-flex-parent">
           <div class="worskhop l-flex-child l-grid-half">
              <div class="culturd-item">
              <Link to="/workshop"> CULTURD WORSHOP</Link>
               </div>
               </div>
              <div class="kitching l-flex-child l-grid-half">
              <div class="culturd-item">
              <Link to="/food"> CULTURD KITCHING </Link>
               </div>
             </div>
         </div>
      </div>
  </>
  );
}

export default Home;
