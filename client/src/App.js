import "./App.css";
import React, { useState, useEffect } from "react";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// share components
import MainNav from "./components/ShareComponents/Nav/MainNav";
import Home from "./components/ShareComponents/Home/Home";
import AboutUs from "./components/ShareComponents/AboutUs/AboutUs";
import Footer from "./components/ShareComponents/Footer/Footer";

//workshop components
import SubNavW from "./components/Workshop/SubNavW/SubNavW";
import LandingW from "./components/Workshop/LandingW/LandingW";
import PricingW from "./components/Workshop/PricingW/PricingW";
import EventComingUpW from "./components/Workshop/EventComingUpW/EventComingUpW";
import ListW from "./components/Workshop/ListW/ListW";
import AboutUsW from "./components/Workshop/AboutUsW/AboutUsW";

//food components
import ProductsF from "./components/Food/ProductsF/ProductsF";
import SubnavF from "./components/Food/SubNavF/SubNavF";
import LandingF from "./components/Food/LandingF/LandingF";
import ProfileF from "./components/Food/ProfileF/ProfileF";
import SearchByDateF from "./components/Food/SearhByDateF/SearchByDateF";
import SearchByLocationF from "./components/Food/SearchByLocationF/SearchByLocationF";

function App() {
  const [selectedDish, setSelectedDish] = useState([]);
  const [shoppingCart, setShoppingCart] = useState([]);

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
          <Route path="/workshop/pricing">
            <SubNavW />
            <PricingW />
          </Route>

          <Route path="/workshop/event_coming_up">
            <SubNavW />
            <EventComingUpW />
          </Route>

          <Route path="/workshop/list">
            <SubNavW />
            <ListW />
          </Route>

          <Route path="/workshop/about_us">
            <SubNavW />
            <AboutUsW />
          </Route>

          <Route path="/food/profile">
            <SubnavF shoppingCart={shoppingCart} />
            <ProfileF />
          </Route>

          <Route path="/food/products">
            <SubnavF shoppingCart={shoppingCart} />
            <ProductsF
              selectedDish={selectedDish}
              setSelectedDish={setSelectedDish}
              shoppingCart={shoppingCart}
              setShoppingCart={setShoppingCart}
            />
          </Route>

          <Route path="/food/search_by_location">
            <SubnavF shoppingCart={shoppingCart} />
            <SearchByLocationF />
          </Route>

          <Route path="/food/search_by_date">
            <SubnavF shoppingCart={shoppingCart} />
            <SearchByDateF />
          </Route>

          <Route path="/about_us">
            {/* change the Nav to Nav_Logout when the user is login */}
            <MainNav />
            <AboutUs />
            <Footer />
          </Route>

          <Route path="/food">
            <SubnavF shoppingCart={shoppingCart} />
            <LandingF
              setSelectedDish={setSelectedDish}
              selectedDish={selectedDish}
              shoppingCart={shoppingCart}
              setShoppingCart={setShoppingCart}
            />
            <Footer />
          </Route>

          <Route path="/workshop">
            <SubNavW />
            <LandingW />
            <Footer />
          </Route>

          <Route path="/">
            {/* change the Nav to Nav_Logout when the user is login */}
            <MainNav />
            <Home />
            <Footer />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
