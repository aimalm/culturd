import React from 'react'
import './LandingW.css'
import { Link } from "react-router-dom";
import "react-alice-carousel/lib/alice-carousel.css";
import cook from '../image/cooking.png'
import dance from '../image/dance.png'
import art from '../image/art.png'
import SectionGrid from './SectionGrid';
import ContactForm from './ContactForm';
import CarouselW from './CarouselW';



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
    <CarouselW/>
    <ContactForm/>
   <div className="wrapper-service__home">
     <h4 className="h1-icon">Pick your choice!</h4>
   <section className="">
        <div className="container-service">
          <div className="row">
            <div className="box-service">
            <img src={cook} className="service-logo" alt=""/>
              <h4 className="text-service">Cooking</h4>
            </div>
            <div className="box-service">
              <img src={dance} className="service-logo"  alt=""/>
              <h4 className="text-service">Dance</h4>
            </div>
            <div className="box-service">
            <img src={art} className="service-logo"  alt=""/>
              <h4 className="text-service">Art</h4>
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
