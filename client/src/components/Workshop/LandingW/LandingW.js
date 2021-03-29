import React from 'react'
import './LandingW.css'
import { Link } from "react-router-dom";
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";
import image1 from '../image/1.jpg'
import image2 from '../image/2.jpg'
import image3 from '../image/3.jpg'
import image4 from '../image/4.jpg'
import cook from '../image/cooking.png'
import dance from '../image/dance.png'
import art from '../image/art.png'
import SectionGrid from './SectionGrid';


function LandingW() {

    return (
    <>
     <div className="container-homepage" >
        <div className="dummy-text">
        <h2 className="h1-animation"><span>CULTURD</span><span>WORKSHOP</span></h2><br></br>
            <h4 className="h4-homeW"> " We bring our Culture to you "</h4>
            <br></br>
            <Link className="landing_main-button" to="/workshop/about_us">Discover More</Link>{" "}
        </div>
    </div>

    <SectionGrid/>
    <div className="carousel">
     <AliceCarousel autoPlay autoPlayInterval="1000">
      <img src={image1} className="sliderimg" alt=""/>
      <img src={image2} className="sliderimg" alt=""/>
      <img src={image3} className="sliderimg" alt=""/>
      <img src={image4} className="sliderimg" alt=""/>

    </AliceCarousel>
    </div>
  
    
   <div className="wrapper-service__home">
     <h1 className="h1-icon">Pick your choice!</h1>
   <section className="header-extra-div margin">
        <div className="container">
          <div className="row">
            <div className="extra-div col-lg-4 col-md-4 col-12">
            <img src={cook} alt=""/>
              <h2 className="text-uppercase">Cooking</h2>
            </div>
            <div className="extra-div col-lg-4 col-md-4 col-12">
              <img src={dance} alt=""/>
              <h2 className="text-uppercase">Dance</h2>
            </div>
            <div className="extra-div col-lg-4 col-md-4 col-12">
            <img src={art} alt=""/>
              <h2 className="text-uppercase">Art</h2>
            </div>
          </div>
        </div>
        <Link className="button-about" to="/workshop/listW">Find your ideal workshop</Link>{" "}
      </section>
    </div>

    


      

    </>
        
    )
}

export default LandingW
