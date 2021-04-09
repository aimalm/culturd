import React, { useRef, useState } from "react";
import SearchIcon from "@material-ui/icons/Search";
import { Link } from "react-router-dom";

function SearchF({ setSelectedDish, dishData }) {
  const inputRef = useRef();

  const [isSearching, setIsSearching] = useState(false);
  const [searchResult, setSearchResult] = useState([]);

  const searchHandler = (e) => {
    e.preventDefault();

    const foodName = inputRef.current.value.toLowerCase();

    if (foodName === "") return;

    let searchingArray = dishData.filter((food) =>
      food.keywords.includes(foodName)
    );

    setSearchResult(searchingArray);
    setIsSearching(true);

    setTimeout(() => {
      setIsSearching(false);
    }, 3000);
  };

  const resultHandler = (searchID) => {
    setSelectedDish(dishData.filter((item) => item._id === searchID));
  };

  return (
    <div className="home-search-container">
      <h2 className="home-search-title">
        Getting your <br></br>
        <strong>home food takeaway</strong>
      </h2>
      <form className="search-bar">
        <input
          ref={inputRef}
          className="search-input"
          type="text"
          placeholder="Home dishes"
        />

        <button className="search-button" onClick={searchHandler}>
          <SearchIcon className="search-button-icon" />
        </button>

        <div className="search-result-display">
          {searchResult.length > 0 ? (
            <div className="search-suggestion">
              {searchResult.map((food) => (
                <Link
                  key={food._id}
                  to={"/food/products/" + food._id}
                  onClick={() => resultHandler(food._id)}
                >
                  <p key={food._id}>{food.dishName}</p>
                </Link>
              ))}
            </div>
          ) : (
            ""
          )}

          {isSearching && searchResult.length === 0 ? (
            <div className="search-suggestion">
              <p>no matching dish yet</p>
            </div>
          ) : (
            ""
          )}
        </div>
      </form>
    </div>
  );
}

export default SearchF;
