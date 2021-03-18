import React from 'react'
import './AboutUsW.css'
import logo from '../image/aboutus.png'
import bgimage from '../image/bg5.png'



function AboutUsW() {
    return (
    <>
        <div className="container-aboutus" 
          style={{
          backgroundImage: `url(${bgimage})`,
          height: "100vh",
         
         
        }} >
        <div className="text-aboutUS">
            <h1>WONDERFUL TEAM</h1><br></br>
             <h4>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. <br></br>Aenean commodo ligula eget dolor. Aenean massa.<br></br> Cum sociis natoque penatibus et magnis dis<br></br> parturient montes, nascetur ridiculus mus. 
            <br></br>Donec quam felis, ultricies nec.</h4>
        </div>
        <div className="image-aboutusW">
            <img src={logo} alt="Logo"/>
        </div>
    </div>
    
    </>  
    )
}

export default AboutUsW
