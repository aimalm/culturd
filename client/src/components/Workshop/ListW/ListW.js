import React from 'react'
import './ListW.css'
import { Link } from "react-router-dom";
import image1 from '../image/1.jpg'
import image2 from '../image/2.jpg'
import image3 from '../image/3.jpg'
import image4 from '../image/4.jpg'


function ListW() {
  return (
   <div className="main">
     <div className="h1-list">
      </div>
     
    <h1 className="h1-text__list">CHOOSE YOUR WORKSHOP</h1>
     <div className="cards-flex">
       <div className="card_content">
          <div className="card_image"><img className="img-cards" src={image1} alt=""/></div>
          <h2 className="card_title">Indonesia</h2>
          <p className="card_text">Indonesia is centrally-located along ancient trading routes between the Far East, South Asia and the Middle East,</p>
          <Link to="/workshop/Indonesia" className="btn-listW">Read More</Link>{" "}
        </div>
      
      <div className="card_content">
          <div className="card_image"><img className="img-cards" src={image2} alt=""/></div>
          <h2 className="card_title">Afganistan</h2>
          <p className="card_text">Indonesia is centrally-located along ancient trading routes between the Far East, South Asia and the Middle East,</p>
          <Link to="/workshop/Afghanistan" className="btn-listW">Read More</Link>{" "}
      </div>
    </div>
    <div className="cards-flex_two">
      <div className="card_content">
          <div className="card_image"><img className="img-cards" src={image3} alt=""/></div>
          <h2 className="card_title">Congo</h2>
          <p className="card_text">Indonesia is centrally-located along ancient trading routes between the Far East, South Asia and the Middle East,</p>
          <Link to="/workshop/Congo" className="btn-listW">Read More</Link>{" "}
      </div>
      <div className="card_content">
          <div className="card_image"><img className="img-cards" src={image4} alt=""/></div>
          <h2 className="card_title">Chinese</h2>
          <p className="card_text">Indonesia is centrally-located along ancient trading routes between the Far East, South Asia and the Middle East,</p>
          <Link to="/workshop/Hongkong" className="btn-listW">Read More </Link>{" "}
      </div>
    </div>
  </div>
  

  )
}

export default ListW
