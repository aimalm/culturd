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
import BookForm from "./components/Workshop/Booking/BookForm";
import ListW from "./components/Workshop/ListW/ListW";
import AboutUsW from "./components/Workshop/AboutUsW/AboutUsW";


//food components
import ProductsF from "./components/Food/ProductsF/ProductsF";
import SubnavF from "./components/Food/SubNavF/SubNavF";
import LandingF from "./components/Food/LandingF/LandingF";
import ProfileF from "./components/Food/ProfileF/ProfileF";
import SearchProductsF from "./components/Food/SearchProductsF/SearchProductsF";
import ShoppingCartF from "./components/Food/ShoppingCartF/ShoppingCartF";




function App() {
  const [selectedDish, setSelectedDish] = useState([]);
  const [shoppingCart, setShoppingCart] = useState([]);
  const [viewingCart, setViewingCart] = useState(false);


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
         
          </Route>
          <Route path="/workshop/list">
            <SubNavW />
            <ListW />
          </Route>

          <Route path="/workshop/about_us">
            <SubNavW />
            <AboutUsW />
            <Footer />
          </Route>

          <Route path="/food/shopping_cart">
            <SubnavF shoppingCart={shoppingCart} setViewingCart={setViewingCart} />
            <ShoppingCartF shoppingCart={shoppingCart} setShoppingCart={setShoppingCart}/>
          </Route>

          <Route path="/food/profile">
            <SubnavF shoppingCart={shoppingCart} setViewingCart={setViewingCart} />

            <ProfileF />
          </Route>

          <Route path="/food/products">
            <SubnavF shoppingCart={shoppingCart} setViewingCart={setViewingCart} />

            <ProductsF
              selectedDish={selectedDish}
              setSelectedDish={setSelectedDish}
              shoppingCart={shoppingCart}
              setShoppingCart={setShoppingCart}
              viewingCart={viewingCart}
              setViewingCart={setViewingCart}
            />
            <Footer/>
          </Route>

          <Route path="/food/search">
            <SubnavF shoppingCart={shoppingCart} setViewingCart={setViewingCart}/>
            <SearchProductsF  setSelectedDish={setSelectedDish} />
          </Route>

  

          <Route path="/about_us">
            {/* change the Nav to Nav_Logout when the user is login */}
            <MainNav />
            <AboutUs />
            <Footer />
          </Route>

          <Route path="/food">
            <SubnavF shoppingCart={shoppingCart} setViewingCart={setViewingCart} />

            <LandingF
              selectedDish={selectedDish}
              setSelectedDish={setSelectedDish}
              selectedDish={selectedDish}
              shoppingCart={shoppingCart}
              setShoppingCart={setShoppingCart}
              viewingCart={viewingCart}
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
            {/* <MainNav /> */}
            <Home />
            <Footer />
          </Route>

          
        </Switch>
      </Router>
    </div>
  );
}

export default App;
