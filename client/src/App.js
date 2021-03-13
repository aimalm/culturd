import "./App.css";
import React from "react";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import MainNav from "./components/ShareComponents/Nav/MainNav";
import Home from "./components/ShareComponents/Home/Home";
import AboutUs from "./components/ShareComponents/AboutUs/AboutUs";
import SubnavF from "./components/Food/SubNavF/SubNavF";
import LandingF from "./components/Food/LandingF/LandingF";
import ProfileF from "./components/Food/ProfileF/ProfileF";
import SearchByDateF from "./components/Food/SearhByDateF/SearchByDateF";
import SearchByLocationF from "./components/Food/SearchByLocationF/SearchByLocationF";
import SubNavW from "./components/Workshop/SubNavW/SubNavW";
import LandingW from "./components/Workshop/LandingW/LandingW";
import PricingW from "./components/Workshop/PricingW/PricingW";
import EventComingUpW from "./components/Workshop/EventComingUpW/EventComingUpW";
import ListW from "./components/Workshop/ListW/ListW";
import AboutUsW from "./components/Workshop/AboutUsW/AboutUsW";

function App() {
  return (
    <div className="App">
      <Router>
        {/* change the Nav to Nav_Logout when the user is login */}
        <MainNav />

        <Switch>
          <Route path="/workshop/pricing">
            <SubNavW />
            <PricingW />
          </Route>

          <Route path="/workshop/event_coming_up">
            <SubNavW />
            <EventComingUpW/>
          </Route>

          <Route path="/workshop/list">
            <SubNavW />
            <ListW/>
          </Route>

          <Route path="/workshop/about_us">
            <SubNavW/>
            <AboutUsW/>
          </Route>

          <Route path="/food/profile">
            <SubnavF />
            <ProfileF />
          </Route>

          <Route path="/food/search_by_location">
            <SubnavF />
            <SearchByLocationF />
          </Route>

          <Route path="/food/search_by_date">
            <SubnavF />
            <SearchByDateF />
          </Route>

          <Route path="/about_us">
            <AboutUs />
          </Route>

          <Route path="/food">
            <SubnavF />
            <LandingF />
          </Route>

          <Route path="/workshop">
            <SubNavW />
            <LandingW />
          </Route>

          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
