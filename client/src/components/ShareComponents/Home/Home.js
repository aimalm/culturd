import React from 'react'
import './Home.css'
import { Link } from "react-router-dom";


function Home() {
    return (
        <div>
            This is Home / landing page
            <Link to="./food">
        <button>go to Food</button>
      </Link>
   
      <Link to="./workshop">
        <button>go to workshop</button>
      </Link>


        </div>
    )
}

export default Home
