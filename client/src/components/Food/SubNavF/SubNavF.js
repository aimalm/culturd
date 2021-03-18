import React from "react";
import './SubNavF.css'

import {Link} from "react-router-dom"
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';

function SubnavF() {
  return (
    <div className='sub-nav'>
      <ul >
        <li>
          <Link to ="/food/search_by_date">
          <h4>Search by Date</h4>
          </Link>
        </li>
        <li>
          <Link to="/food/search_by_location">
          <h4>Search by location</h4>
          </Link>
        </li>
        <li>
          <Link to="/food/profile">
          <h4>profile</h4>
          </Link>
        </li>
        <li className="sub-nav-basket">
          
          <ShoppingBasketIcon className="basket-icon"/>
          <p>0</p>
          
        </li>
      </ul>
    </div>
  );
}

export default SubnavF;
