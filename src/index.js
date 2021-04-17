import React, { Component } from "react";
import ReactDOM from "react-dom";
import {
  BrowserRouter as Router,
  HashRouter,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import Home from "./components/home";
import RoomsPage from "./components/RoomsPage";
import RoomGrid from "./components/room-grid";
import RoomDetails from "./components/RoomDetails";
import Service from "./components/service";
import NewsPage from "./components/NewsPage";
import BlogList from "./components/blog-list";
import BlogDetails from "./components/blog-details";
import NewsDetails from "./components/news-details";
import Gallery from "./components/gallery";
import Contact from "./components/contact";
import OurStaff from "./components/our-staff";
import Resturent from "./components/resturent";
import ReservationPage from "./components/reservation";
import About from "./components/about";
import ScrollToTop from "react-router-scroll-top";
import ApartmentsPage from "./components/apartmentsPage";
import ApartmentDetails from "./components/apartment-details";

import FoundationList from "./components/foundation-list";

class Root extends Component {
  render() {
    return (
      <HashRouter basename="/">
        <div>
          <ScrollToTop>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/rooms" component={RoomsPage} />
              <Route path="/apartments" component={ApartmentsPage} />
              <Route path="/room-grid" component={RoomGrid} />
              <Route path="/apartment-details" component={ApartmentDetails} />
              <Route path="/service" component={Service} />
              <Route path="/blog-list" component={BlogList} />
              <Route path="/blog-details" component={BlogDetails} />
              <Route path="/news" component={NewsPage} />
              <Route path="/gallery" component={Gallery} />
              <Route path="/contact" component={Contact} />
              <Route path="/our-staff" component={OurStaff} />
              <Route path="/resturent" component={Resturent} />
              <Route path="/reservation" component={ReservationPage} />
              <Route path="/about" component={About} />
              <Route path="/foundation" component={FoundationList} />
              <Switch>
                <Route path="/roomdetails/:roomId" component={RoomDetails} />
                <Route path="/apartmentdetails/:apartmentId" component={ApartmentDetails} />
                <Route path="/new-details/:newsId" component={NewsDetails} />
                <Redirect  exact to="/" component={Home} />
              </Switch>
              
              <Switch>
              <Route path="/apartmentdetails/:apartmentId" component={ApartmentDetails} />
                <Redirect from="/apartmentdetails/" to="/apartments" exact />
              </Switch>              
              
              <Switch>
                <Route path="/new-details/:newsId" component={NewsDetails} />
                <Redirect from="/new-details/" to="/news" exact />
              </Switch>
            </Switch>
          </ScrollToTop>
        </div>
      </HashRouter>
    );
  }
}

export default Root;

ReactDOM.render(<Root />, document.getElementById("Elevations"));
