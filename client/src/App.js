import "./App.css";
import React, { useState, useEffect } from "react";
import { axois } from "./components/Axois/Axois";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// share components
import MainNav from "./components/ShareComponents/Nav/MainNav";
import Home from "./components/ShareComponents/Home/Home";
import AboutUs from "./components/ShareComponents/AboutUs/AboutUs";
import Footer from "./components/ShareComponents/Footer/Footer";
import SignUp from "./components/ShareComponents/Registration/SignUp";
import ContactUs from "./components/ShareComponents/ContactUs/ContactUs";
import Login from "./components/ShareComponents/Registration/Login";

//workshop components
import SubNavW from "./components/Workshop/SubNavW/SubNavW";
import LandingW from "./components/Workshop/LandingW/LandingW";
import BookForm from "./components/Workshop/Booking/BookForm";
import ListW from "./components/Workshop/ListW/ListW";
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
import ScrollToTop from "./components/ShareComponents/ScrollToTop/ScrollToTop";
import AboutUsF from "./components/Food/AboutUsF/AboutUsF";
import AboutUsW from "./components/Workshop/AboutUsW/AboutUsW";
// import NavLogSign from "./components/ShareComponents/NavLogSign/NavLogSign";

function App() {
  const [selectedDish, setSelectedDish] = useState([]);
  const [shoppingCart, setShoppingCart] = useState([]);
  const [dishData, setDishData] = useState([]);
  const [userData, setUserData] = useState([]);

  //Get all for food and save in dishData state
  const getAllFood = async () => {
    const response = await axois.get("/food").catch((err) => console.log(err));
    if (response && response.data) {
      setDishData(response.data);
    }
  };

  //Get one user and save in userData state
  const getUser = async (email) => {
    const response = await axois
      .get(`/user/${email}`)
      .catch((err) => console.log(err));
    if (response && response.data) {
      setUserData(response.data);
    }
  };

  const logOut = () => {
    if (localStorage.hasOwnProperty("email")) {
      window.localStorage.removeItem("email");
    }
    if (localStorage.hasOwnProperty("userID")) {
      window.localStorage.removeItem("userID");
    }
    setUserData([])
    setShoppingCart([])
  };


  // save shopping cart to localStorage
  useEffect(() => {
    if (localStorage.hasOwnProperty("culturd")) {
      setShoppingCart(JSON.parse(localStorage.getItem("culturd")));
    }
    if (localStorage.hasOwnProperty("email")) {
      getUser(localStorage.getItem("email"));
    }
    getAllFood()
  }, []);

  useEffect(() => {
    window.localStorage.setItem("culturd", JSON.stringify(shoppingCart));
  }, [shoppingCart]);
  // useEffect(() => {
  //   // const getFoodOrder = async () => {
  //   //   const response = await axois.get("/food_order").catch((err) => console.log(err));
  //   //   setOrderData(response.data.filter(order=>order.cooker_id.includes(userData._id)))
  //   // };
  //   // getFoodOrder()
  // }, [userData]);

  return (
    <div className="App">
      <Router>
        <ScrollToTop>
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
              <AboutUsW />
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
              <SubnavF shoppingCart={shoppingCart} userData={userData} setUserData={setUserData} logOut={logOut}/>
              <ShoppingCartF
                shoppingCart={shoppingCart}
                setShoppingCart={setShoppingCart}
              />
            </Route>

            <Route path="/food/profile">
              <SubnavF shoppingCart={shoppingCart} userData={userData} setUserData={setUserData} logOut={logOut}/>
              <ProfileF
                getUser={getUser}
                dishData={dishData}
                userData={userData}
                getAllFood={getAllFood}
              />
            </Route>

            <Route path="/food/products">
              <SubnavF shoppingCart={shoppingCart} userData={userData} setUserData={setUserData} logOut={logOut}/>
              <ProductDetailsF
                selectedDish={selectedDish}
                shoppingCart={shoppingCart}
                setShoppingCart={setShoppingCart}
              />
              <Footer />
            </Route>

            <Route path="/food/product_list">
              <SubnavF shoppingCart={shoppingCart} userData={userData} setUserData={setUserData} logOut={logOut} />
              <ProductListF
                dishData={dishData}
                setSelectedDish={setSelectedDish}
              />
            </Route>

            <Route path="/login">
              <Login />
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


            <Route path="/food/about_us">
              <SubnavF shoppingCart={shoppingCart} userData={userData} setUserData={setUserData} logOut={logOut}/>
              <AboutUsF />
              <Footer />
            </Route>

            <Route path="/food">
              <SubnavF shoppingCart={shoppingCart} userData={userData}  setUserData={setUserData} logOut={logOut}/>
              <LandingF setSelectedDish={setSelectedDish} dishData={dishData} />
              <Footer />
            </Route>

            <Route path="/workshop">
              <SubNavW />
              <LandingW />
              <Footer />
            </Route>
            <Route path="/contact_us">
              <ContactUs />
              <Footer />
            </Route>

            <Route path="/">
              <Home userData={userData} logOut={logOut}/>
              <Footer />
            </Route>
          </Switch>
        </ScrollToTop>
      </Router>
    </div>
  );
}

export default App;
