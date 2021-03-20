import React from 'react'
import './LandingW.css'
import team from '../image/aboutus.png'



function LandingW() {
    return (
    <>
     <div className="container-homepage" >
        <div className="dummy-text">
             <h1>CULTURD WORKSHOP</h1><br></br>
            <h4>We bring our Culture to you.</h4>
            <br></br>
            <button className="btn-one"   onclick="" type="button">
              Discover More</button>
             
        </div>
    </div>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#bfede4" fill-opacity="1" d="M0,192L480,224L960,256L1440,160L1440,0L960,0L480,0L0,0Z"></path>
    </svg>

    <div className="container-aboutus">
        <div className="text-aboutUS">
            <h1>Meet The Team</h1><br></br>
             <h4>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. <br></br>Aenean commodo ligula eget dolor. Aenean massa.<br></br> Cum sociis natoque penatibus et magnis dis<br></br> parturient montes, nascetur ridiculus mus. 
            <br></br>Donec quam felis, ultricies nec.</h4>
        </div>
        <div className="image-aboutusW">
            <img className="img-team" src={team} alt="team"/>
        </div>
    </div>
    
    </>
        
    )
}

export default LandingW
