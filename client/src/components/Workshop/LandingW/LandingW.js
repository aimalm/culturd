import React from 'react'
import './LandingW.css'
import { AiFillEnvironment } from 'react-icons/ai';
import { BiTimeFive } from 'react-icons/bi';
import { FaRegSmileWink } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
import { Link } from "react-router-dom";
import team from '../image/bg2.png'




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
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#bfede4" fill-opacity="1" d="M0,128L720,256L1440,96L1440,0L720,0L0,0Z"></path>
    </svg>
      <div className="container-aboutus">
        <div className="text-aboutUS">
            <h1 className="h1-aboutus">Meet The Team</h1><br></br>
             <h4 className="h4-aboutus">Lorem ipsum dolor sit amet, consectetuer adipiscing elit.Aenean commodo ligula eget dolor. Aenean massa.Cum sociis natoque penatibus et magnis disparturient montes, nascetur.</h4>
        </div>
        <div className="image-aboutusW">
            <img className="img-team" src={team} alt="team"/>
        </div>
    </div>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill=" #bfede4" fill-opacity="1" d="M0,64L720,160L1440,0L1440,320L720,320L0,320Z"></path>
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
      <Link className="button-about" to="/workshop/about_us">Find your ideal workshop</Link>{" "}
    </div>

   

      

    </>
        
    )
}

export default LandingW
