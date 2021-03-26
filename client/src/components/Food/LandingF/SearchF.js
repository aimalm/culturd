import React, { useRef } from "react";
import SearchIcon from "@material-ui/icons/Search";
import { FoodTable } from "../Template";
import { Link } from "react-router-dom";

function SearchF({ setSelectedDish, selectedDish }) {
  //useRef can take the entry of the input
  const inputRef = useRef();
  console.log(selectedDish)
  const searchHandler = (e) => {
    e.preventDefault();

    const foodName = inputRef.current.value.toLowerCase();

    if (foodName === "") return;

    let searchResult = FoodTable.filter((food) => food.keywords.includes(foodName))
    
    setSelectedDish(searchResult)
  };

  return (
    <div className="home-search-container">
      <h2 className="home-search-title">
        Getting your <br></br>
        <strong>home food takeaway</strong>
        <br></br>
        <i>slogan hereeee</i>
      </h2>
      <form className="search-bar">
        <input
          ref={inputRef}
          className="search-input"
          type="text"
          placeholder="Home dishes..."
        />
        <button className="search-button" onClick={searchHandler}>
          <SearchIcon className="search-button-icon" />
        </button>
        
          {selectedDish.length > 0 ? (
            <div className="search-suggestion">{selectedDish.map((food) => 
              <Link key={food.id} to={"/food/products/" + food.id}>
            <p key={food.id} >{food.dishName}</p>
            </Link>
            )}</div>
          ) : (
            ""
          )}
        
      </form>
    </div>
  );
}

export default SearchF;
