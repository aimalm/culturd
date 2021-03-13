import React from 'react'
import { Link } from "react-router-dom";



function Nav() {
    return (
        <div className="header">
        <Link to="/">
          LOGO
        </Link>
  
       
  
        <div className="header-nav">
          <div className="header-option">
            <p>Products</p>
          </div>
  
          <Link to="/about_us">
          <div className="header-option">
            <span className="header-optionLineTwo">About Us</span>
          </div>
          </Link>
  
          <div className="header-option">
            <span className="header-optionLineTwo">Register</span>
          </div>
  
          <div className="header-option">
            <span className="header-optionLineTwo">Signin</span>
          </div>
        </div>
      </div>

    )
}

export default Nav
