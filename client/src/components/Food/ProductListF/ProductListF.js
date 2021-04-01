import React, { useState , useEffect} from "react";
import "./ProductListF.css";
import { Link } from "react-router-dom";
import AddCircleSharpIcon from "@material-ui/icons/AddCircleSharp";
import StarIcon from "@material-ui/icons/Star";

function ProductListF({ setSelectedDish, dishData }) {
  const [filteredDish, setFilteredDish] = useState(dishData);
  const [addAnimationClass, setAddAnimationClass] = useState(false);
 
  useEffect(() => {
    setFilteredDish(dishData)
  }, [dishData])

  const selectHandler = (dishID) => {
    setSelectedDish(dishData.filter((item) => item._id === dishID));
  };

  const filterHandler = (e) => {
    switch (e.target.value) {
      case "main":
        setFilteredDish(dishData.filter((food) => food.category === "main"));
        toggleClass()
        break;

      case "side":
        setFilteredDish(dishData.filter((food) => food.category === "side"));
        toggleClass()
        break;

      case "dessert":
        setFilteredDish(
          dishData.filter((food) => food.category === "dessert")
        );
        toggleClass()
        break;

      case "veg":
        setFilteredDish(dishData.filter((food) => food.vegetarian));
        toggleClass()
        break;

      default:
        setFilteredDish(dishData);
        break;
    }

  };

  const toggleClass = () =>{
    setAddAnimationClass(true)

    setTimeout(() => {
      setAddAnimationClass(false)
    }, 1500);
  }

  return (
    <div className="search-wrapper">
      <div className="search-button-container">
        <button
          className="search-filter-button all-button"
          value="all"
          onClick={(e) => filterHandler(e)}
        >
          See All
        </button>

        <button
          className="search-filter-button"
          value="main"
          onClick={(e) => filterHandler(e)}
        >
          main dish
        </button>

        <button
          className="search-filter-button"
          value="side"
          onClick={(e) => filterHandler(e)}
        >
          side dish
        </button>
        <button
          className="search-filter-button"
          value="dessert"
          onClick={(e) => filterHandler(e)}
        >
          desserts
        </button>
        <button
          className="search-filter-button"
          value="veg"
          onClick={(e) => filterHandler(e)}
        >
          Vegetarian
        </button>
      </div>

      <div className={addAnimationClass?"random-container list-container": "random-container"}>
     

        {filteredDish.map((dish) => (
          <div className="food-card"  key={dish._id}>
            <Link
             
              to={"/food/products/" + dish._id}
              onClick={() => selectHandler(dish._id)}
            >
              <div className="food-card-img">
                <img className="product-image" src={dish.imageUrl} alt="" />
              </div>
              <div className="food-info">
                <div className="more-button-wrapper">
                  <h4 className="dish-name">{dish.dishName}</h4>
                  <button className="more-button">
                    <AddCircleSharpIcon className="more-icon" />
                  </button>
                </div>
                <p className="cook-info">
                  {dish.cooker}
                  <br></br>
                  {dish.cookerScore.map((star, index) => (
                    <StarIcon key={index} className="star" />
                  ))}
                </p>
              </div>
            </Link>
          </div>
        ))}

      </div>
    </div>
  );
}

export default ProductListF;
