import React, { useRef } from "react";
import SearchIcon from "@material-ui/icons/Search";
import { FoodTable } from "../Template";

function SearchF({setSelectedDish}) {
  //useRef can take the entry of the input
  const inputRef = useRef();

  const searchHandler = (e) => {
    e.preventDefault()
    const foodName = inputRef.current.value;

    if (foodName === "") return;

    //let dishArray = FoodTable.map((food) => food.dishName);
    console.log(foodName);
      setSelectedDish(FoodTable.filter(food=>food.dishName.includes(foodName)))
    

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
      </form>
    </div>
  );
}

export default SearchF;
