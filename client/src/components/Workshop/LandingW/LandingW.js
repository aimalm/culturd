import React from 'react'
import './LandingW.css'
import logo from '../image/poto1.png'; 
import team from '../image/aboutus.png'
import bgimage2 from '../image/bg5.png'

function LandingW() {
    return (
    <>
     <div className="container-homepage" >
         <div className="image-logo">
            <img src={logo} alt="Logo" />
         </div>
        <div className="dummy-text">
             <h1>CULTURD WORKSHOP</h1>
            <h4>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. <br></br>Aenean commodo ligula eget dolor. Aenean massa.<br></br> Cum sociis natoque penatibus et magnis dis<br></br> parturient montes, nascetur ridiculus mus. 
            <br></br>Donec quam felis, ultricies nec.</h4>
            <br></br>
            <button className="btn-one"   onclick="" type="button">
              Discover More</button>
             
        </div>
    </div>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="rgba(191,237,228,255) " fill-opacity="1" d="M0,256L48,266.7C96,277,192,299,288,266.7C384,235,480,149,576,101.3C672,53,768,43,864,48C960,53,1056,75,1152,101.3C1248,128,1344,160,1392,176L1440,192L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path>
    </svg>

    <div className="container-aboutus"
     style={{
        backgroundImage: `url(${bgimage2})`,
        height: "100vh",
        }}>
        <div className="text-aboutUS">
            <h1>WONDERFUL TEAM</h1><br></br>
             <h4>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. <br></br>Aenean commodo ligula eget dolor. Aenean massa.<br></br> Cum sociis natoque penatibus et magnis dis<br></br> parturient montes, nascetur ridiculus mus. 
            <br></br>Donec quam felis, ultricies nec.</h4>
        </div>
        <div className="image-aboutusW">
            <img src={team} alt="team"/>
        </div>
    </div>
    </>
        
    )
}

export default LandingW
