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

    <div class="main">
  <div class="header center">
    <h1 class="top-heading">Reliable, efficient delivery<br /><strong>Powered by our Culture</strong></h1>
    <p class="sub-heading ">A well-run culture workshop can also serve as a bonding experience</p>
    
  </div>
  <div class="container center">
    <div class="column">
      <div class="card card1">
        <h3 class="title"> Cooking Fun </h3>
        <p>Monitors activity to identify project roadblocks</p>
      </div>
    </div>
    <div class="column">
      <div class="card card2">
        <h3 class="title"> Team Builder </h3>
        <p>Scans our talent network to create the optimal team for your project</p>
      </div>

      <div class="card card3">
        <h3 class="title"> Lets Dance </h3>
        <p>Regularly evaluates our talent to ensure quality</p>
      </div>
    </div>
    <div class="column">
      <div class="card card4">
        <h3 class="title">Go with Art</h3>
        <p>Uses data from past projects to provide better delivery estimates</p>
        
      </div>
    </div>
  </div>
</div>
  
    </>
        
    )
}

export default LandingW
