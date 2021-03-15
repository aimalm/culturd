import React from 'react'
import {Link} from 'react-router-dom'

function SubNavW() {
    return (
        <div className="container-subnavW">
      <ul >
        <li>
          <Link to ="/workshop/pricing">
          <h4>Pricing</h4>
          </Link>
        </li>
        <li>
          <Link to="/workshop/event_coming_up">
          <h4>Event coming up</h4>
          </Link>
        </li>
        <li>
          <Link to="/workshop/list">
          <h4>All events</h4>
          </Link>
        </li>
        <li>
          <Link to="/workshop/about_us">
          <h4>About us</h4>
          </Link>
        </li>
       
      </ul>
      </div>
    )
}

export default SubNavW
