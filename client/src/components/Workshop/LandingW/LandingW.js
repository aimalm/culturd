import React from 'react'
import './LandingW.css'
import logo from '../image/poto1.png'; 
import team from '../image/aboutus.png'
import bgimage2 from '../image/bg5.png'
import cooking from '../image/cooking.png'
import dance from '../image/dance.png'
import art from '../image/art.png'



function LandingW() {
    return (
    <>
     <div className="container-homepage" >
         <div className="image-logo">
            <img src={logo} alt="Logo" />
         </div>
        <div className="dummy-text">
             <h1>CULTURD WORKSHOP</h1><br></br><br></br>
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
    <div className="container-ourservice">
        <h1 className="text-ourservise">OUR WORKSHOP</h1>
    <div className="wrapper-cooking">
        <div className="img-cooking" >
            <img src={cooking} alt="cooking"/>
        </div>
        <div className="text-cooking">
             <h2>Cooking Workshop </h2>
             <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. <br></br>Aenean commodo ligula eget dolor. Aenean massa.<br></br> Cum sociis natoque penatibus et magnis dis<br></br> parturient montes, nascetur ridiculus mus. 
            <br></br>Donec quam felis, ultricies nec.
            </p>
        </div>
    </div>
        <div className="wrapper-dance">
        <div className="text-cooking">
          <h2>Dance Workshop </h2>
          <p>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. <br></br>Aenean commodo ligula eget dolor. Aenean massa.<br></br> Cum sociis natoque penatibus et magnis dis<br></br> parturient montes, nascetur ridiculus mus. 
            <br></br>Donec quam felis, ultricies nec.
          </p>
        </div>
        <div className="img-dance">
        <img src={dance} alt="dance"/>
      </div>
    </div>
    <div className="wrapper-art">
        <div className="img-art">
            <img src={art} alt="art"/>
        </div>
        <div className="text-cooking">
             <h2>Art Workshop </h2>
             <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. <br></br>Aenean commodo ligula eget dolor. Aenean massa.<br></br> Cum sociis natoque penatibus et magnis dis<br></br> parturient montes, nascetur ridiculus mus. 
            <br></br>Donec quam felis, ultricies nec.
            </p>
        </div>
    </div>
    </div>

 <footer className="mainfooter fixed-bottom" role="contentinfo">
  <div className="footer-middle">
  <div className="container">
    <div className="row">
      <div className="col-md-3 col-sm-6">
        <div className="footer-pad">
          <h4>Heading 1</h4>
        </div>
      </div>
      <div className="col-md-3 col-sm-6">
        <div className="footer-pad">
          <h4>Heading 2</h4>
        </div>
      </div>
      <div class="col-md-3 col-sm-6">
        <div className="footer-pad">
          <h4>Heading 3</h4>
          
        </div>
      </div>
    	<div className="col-md-3">
    		<h4>Follow Us</h4>
		</div>
    </div>
	<div className="row">
		<div className="col-md-12 copy">
			<p className="text-center">&copy; Copyright 2021 - CULTURD WORKSHOP  All rights reserved.</p>
		</div>
	</div>
  </div>
  </div>
</footer>
    </>
        
    )
}

export default LandingW
