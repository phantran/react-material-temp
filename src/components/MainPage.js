import React from "react";
import Home from "../components/views/Home"
import Navbar from "../components/views/Navbar"
import UserProfile from "../components/views/UserProfile"
import TripInformation from "../components/views/YourTrip"
import Itinerary from "../components/views/Itinerary"
import CustomerSupport from "../components/views/CustomerSupport"

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


const MainPage = () => {
  return (
    <div>
      <Router>
      <Navbar/>
        <Switch>
          <Route exact path="dashboard" component={Home} />
          <Route exact path="dashboard/profile" component={UserProfile} />
          <Route exact path="dashboard/trip" component={TripInformation} />
          <Route exact path="dashboard/itinerary" component={Itinerary} />
          <Route exact path="dashboard/support" component={CustomerSupport} />
        </Switch>
      </Router>
    </div>
  )
}

export default MainPage;