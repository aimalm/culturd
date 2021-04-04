import "./App.css";
import React, { useState, useEffect } from "react";
import {axois,removeEmptyString } from "./components/Axois/Axois";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// share components
import MainNav from "./components/ShareComponents/Nav/MainNav";
import Home from "./components/ShareComponents/Home/Home";
import AboutUs from "./components/ShareComponents/AboutUs/AboutUs";
import Footer from "./components/ShareComponents/Footer/Footer";
import LogIn from "./components/ShareComponents/Registration/LogIn";
import SignUp from "./components/ShareComponents/Registration/SignUp";
import ContactUs from "./components/ShareComponents/ContactUs/ContactUs";


//workshop components
import SubNavW from "./components/Workshop/SubNavW/SubNavW";
import LandingW from "./components/Workshop/LandingW/LandingW";
import BookForm from "./components/Workshop/Booking/BookForm";
import ListW from "./components/Workshop/ListW/ListW";
// import AboutUsW from "./components/Workshop/AboutUsW/AboutUsW";
import Afghanistan from "./components/Workshop/Countries/Afghanistan";
import Congo from "./components/Workshop/Countries/Congo";
import HongKong from "./components/Workshop/Countries/HongKong";
import Indonesia from "./components/Workshop/Countries/Indonesia";

//food components
import ProductDetailsF from "./components/Food/ProductDetailsF/ProductDetailsF";
import SubnavF from "./components/Food/SubNavF/SubNavF";
import LandingF from "./components/Food/LandingF/LandingF";
import ProfileF from "./components/Food/ProfileF/ProfileF";
import ProductListF from "./components/Food/ProductListF/ProductListF";
import ShoppingCartF from "./components/Food/ShoppingCartF/ShoppingCartF";



function App() {
  const [selectedDish, setSelectedDish] = useState([]);
  const [shoppingCart, setShoppingCart] = useState([]);
  const [viewingCart, setViewingCart] = useState(false);

  const [dishData, setDishData] = useState([]);
 const [userData, setUserData] = useState([]);

   

    //Get all for food
    const getAllFood = async () => {
      const response = await axois.get("/food").catch((err) => console.log(err));
      if (response && response.data) {
        setDishData(response.data);
      }
    };

    //POST for food
 const createFood = async (values) => {
  const newObj = {
    dishName: values.dishName,
    ingredients: removeEmptyString(
      values.ingredient1,
      values.ingredient2,
      values.ingredient3,
      values.ingredient4
    ),
    keywords: removeEmptyString(
      values.keyword1,
      values.keyword2,
      values.keyword3,
      values.keyword4
    ),
    category: values.category,
    vegetarian: values.vegetarian,
    dishDescription: values.dishDescription,
    cooker: userData.firstName,
    cookerImage:
      userData.ProfilePicture === undefined
        ? "https://images.unsplash.com/photo-1497034825429-c343d7c6a68f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
        : userData.ProfilePicture,
    cookerScore: ["star", "star", "star"],
    price: values.Price,
    pickupDate: values.pickupdate.substring(0, 10),
    openingHours: values.pickupdate.substring(11, 16),
    address: values.address,
    imageUrl: values.imageUrl,
    quantity: "1",
  };

  //console.log(newObj);
  await axois
    .post("/food", newObj)
    .then((res) => getAllFood(res))
    .catch((err) => console.error(err));
};


  //Get one user
  const getUser = async (id) => {
    const response = await axois
      .get(`/user/${id}`)
      .catch((err) => console.log(err));

    if (response && response.data) {
      setUserData(response.data);
    }
  };
  useEffect(() => {
    getAllFood()
    getUser("6068fedc5207b03f7c599ec2")
  }, []);
  




  // save shopping cart to localStorage
  const LSKEY = "culturd";
  useEffect(() => {
    let localShoppingCart = JSON.parse(localStorage.getItem(LSKEY));
    if (localShoppingCart) {
      setShoppingCart(localShoppingCart);
    }
  }, []);
  useEffect(() => {
    window.localStorage.setItem(LSKEY, JSON.stringify(shoppingCart));
  }, [shoppingCart]);

  return (
    <div className="App">
      <Router>

        <Switch>
          <Route path="/workshop/bookform">
            <SubNavW />
            <BookForm />
            <Footer />
          </Route>

          <Route path="/workshop/listW">
            <SubNavW />
            <ListW />
            <Footer />
          </Route>

          <Route path="/workshop/about_us">
            <SubNavW />
            <Footer />
          </Route>

          <Route path="/workshop/Afghanistan">
            <SubNavW />
            <Afghanistan />
            <Footer />
          </Route>

          <Route path="/workshop/Congo">
            <SubNavW />
            <Congo />
            <Footer />
          </Route>

          <Route path="/workshop/HongKong">
            <SubNavW />
            <HongKong />
            <Footer />
          </Route>

          <Route path="/workshop/Indonesia">
            <SubNavW />
            <Indonesia />
            <Footer />
          </Route>

          <Route path="/food/shopping_cart">
            <SubnavF shoppingCart={shoppingCart} />
            <ShoppingCartF
             
              shoppingCart={shoppingCart}
              setShoppingCart={setShoppingCart}
            />
          </Route>

          <Route path="/food/profile">
            <SubnavF shoppingCart={shoppingCart} />
            <ProfileF
            getUser={getUser}
            dishData={dishData}
            userData={userData}
              userData={userData}
              createFood={createFood}
            />
          </Route>

          <Route path="/food/products">
            <SubnavF shoppingCart={shoppingCart} />

            <ProductDetailsF
              selectedDish={selectedDish}
              shoppingCart={shoppingCart}
              setShoppingCart={setShoppingCart}
              viewingCart={viewingCart}
              setViewingCart={setViewingCart}
            />

            <Footer />
          </Route>

          <Route path="/food/product_list">
            <SubnavF shoppingCart={shoppingCart} />
            <ProductListF
              dishData={dishData}
              setSelectedDish={setSelectedDish}
            />
          </Route>

          <Route path="/login">
            <LogIn />
            <Footer />
          </Route>

          <Route path="/signup">
            <SignUp />
            <Footer />
          </Route>

          <Route path="/about_us">
            <MainNav />
            <AboutUs />
            <Footer />
          </Route>

          <Route path="/about_us">
            <MainNav />
            <AboutUs />
            <Footer />
          </Route>

          <Route path="/food">
            <SubnavF shoppingCart={shoppingCart} />
            <LandingF setSelectedDish={setSelectedDish} dishData={dishData} />
            <Footer />
          </Route>

          <Route path="/workshop">
            <SubNavW />
            <LandingW />
            <Footer />
          </Route>
          <Route path="/contact_us">
            <MainNav />
            <ContactUs />
            <Footer />
          </Route>

          <Route path="/">
            <Home />
            <Footer />
          </Route>
        </Switch>
        <div></div>
      </Router>
    </div>
  );
}

export default App;
