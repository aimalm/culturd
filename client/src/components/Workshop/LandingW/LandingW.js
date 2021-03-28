import React from 'react'
import './LandingW.css'
import { AiFillEnvironment } from 'react-icons/ai';
import { BiTimeFive } from 'react-icons/bi';
import { FaRegSmileWink } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
import { Link } from "react-router-dom";
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";
import image1 from '../image/1.jpg'
import image2 from '../image/2.jpg'
import image3 from '../image/3.jpg'
import image4 from '../image/4.jpg'
import group from '../image/bg2.png'
import SearchDropdown from './SearchDropdown';


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

    <section className="header-extra-div">
        <div className="container">
          <div className="row">
            <div className="extra-div col-lg-4 col-md-4 col-12">
              <i class="fa fa-copy fa-2x"></i>
              <h2 className="text-uppercase">Learning & Fun</h2>
              <p>A wide variety of activities to stimulate variety workshop, such as arts , cooking and Dancing.</p>
            </div>
            <div className="extra-div col-lg-4 col-md-4 col-12">
              <i class="fa fa-users fa-2x"></i>
              <h2 className="text-uppercase">Qualified People</h2>
              <p>Our experienced Workshop encourage people to Learn about our Culture,brings togetherness and creatively.</p>
            </div>
            <div className="extra-div col-lg-4 col-md-4 col-12">
             <i class="fas fa-mug-hot fa-2x"></i>
              <h2 className="text-uppercase">Fun Cooking</h2>
              <p>Organic food, variety food, and alot of igredient delivered cooking together brings togetherness.</p>
            </div>
          </div>
        </div>
      </section>

    
    <SearchDropdown/>
    <div className="carousel">
     <AliceCarousel autoPlay autoPlayInterval="1000">
      <img src={image1} className="sliderimg" alt=""/>
      <img src={image2} className="sliderimg" alt=""/>
      <img src={image3} className="sliderimg" alt=""/>
      <img src={image4} className="sliderimg" alt=""/>

    </AliceCarousel>
    </div>

    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#bfede4" fill-opacity="1" d="M0,192L1440,0L1440,320L0,320Z"></path>
    </svg>
   <div className="wrapper-service__home">
    <IconContext.Provider value={{ color: '#f59d87', size: 30 }}>
     <h1 className="h1-icon" > Why Culturd Workshop?</h1>
      <div className="container-service">
          <div className='icon-home'>
              <AiFillEnvironment />
          </div>
           <div className="text-service">
              <h4 className="h4-icon">Inspiration: With more  activities we have something suitable for everyone.</h4>
            </div>
            <div className='icon-home'>
              <BiTimeFive />
            </div>
            <div className="text-service">
              <h4 className="h4-icon">Save time: Easily find the teambuilding fit to your needs.</h4>
            </div>
            <div className='icon-home'>
              <FaRegSmileWink />
              </div>
            <div className="text-service">
              <h4 className="h4-icon">we professional screened partners and we employ the same sharp prices as them, without any extra cost.</h4>
            </div>
            <div className='icon-home'>
              <AiFillEnvironment />
              </div>
              <div className="text-service">
             <div className="icon-home">
              <h4 className="h4-icon">Everything is possible, from only one simple activity till a festival with all the trimmings. The pleasure and the togetherness.</h4>
            </div>
            </div>
      </div>
      </IconContext.Provider>
      <br></br><br></br><br></br>
      <Link className="button-about" to="/workshop/listW">Find your ideal workshop</Link>{" "}
    </div>

   

      

    </>
        
    )
}

export default LandingW
