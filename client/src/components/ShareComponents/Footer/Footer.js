import React from 'react';
import './Footer.css';

function footer() {
    return (
        <div>
            <footer className="mainfooter" role="contentinfo">
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
        </div>
    )
}

export default footer
