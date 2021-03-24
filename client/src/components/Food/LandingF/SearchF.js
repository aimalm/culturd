import React from 'react'
import SearchIcon from "@material-ui/icons/Search";


function SearchF() {
    return (
        <div className="home-search-container">
               <h2 className="home-search-title">
          Getting your <br></br>
          <strong>home food takeaway</strong><br></br>
          <i>slogan hereeee</i>
        </h2>
        <div className="search-bar">
          <input
            className="search-input"
            type="text"
            placeholder="Home dishes..."
          />
          <button className="search-button">
            <SearchIcon className="search-button-icon" />
          </button>
        </div>
        </div>
    )
}

export default SearchF
