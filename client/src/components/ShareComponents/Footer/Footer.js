import React from "react";
import "./Footer.css";
import RemoveIcon from "@material-ui/icons/Remove";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
import MailOutlineIcon from '@material-ui/icons/MailOutline';

function footer() {
  return (
    <div>
      <footer>
        <div className="footer-icon-container">
          <FacebookIcon/>
          <InstagramIcon/>
          <TwitterIcon/>
          <MailOutlineIcon/>

        </div>
        <RemoveIcon className="line" />
      </footer>

      {/* <div class="d-flex flex-column">
  
  <footer class="footer">
    <div>
      <a href="https://coreui.io">CoreUI</a>
      <span>&copy; 2020 creativeLabs.</span>
    </div>
    <div class="ml-auto">
      <span>Powered by</span>
      <a href="https://coreui.io">CoreUI</a>
    </div>
		<div className="col-md-12 copy">
			<p className="text-center">&copy; Copyright 2021 - CULTURD - All rights reserved.</p>
		</div>
	
  </footer>
</div> */}

      {/* <footer className="mainfooter" role="contentinfo">
  <div className="footer-middle">
  <div className="container">
    <div className="row">
      <div className="col-md-3 col-sm-6">
        <div className="footer-pad">
          <h4>Cul</h4>
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
			<p className="text-center">&copy; Copyright 2021 - CULTURD - All rights reserved.</p>
		</div>
	</div>
  </div>
  </div>
</footer> */}
    </div>
  );
}

export default footer;
