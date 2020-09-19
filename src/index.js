import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, HashRouter, Route, Switch } from "react-router-dom";
import HomeV1 from './components/home-v1';
import HomeV2 from './components/home-v2';
import RoomList from './components/room-list';
import RoomGrid from './components/room-grid';
import RoomDetails from './components/room-details';
import Service from './components/service';
import BlogGrid from './components/blog-grid';
import BlogList from './components/blog-list';
import BlogDetails from './components/blog-details';
import Gallery from './components/gallery';
import Contact from './components/contact';
import OurStaff from './components/our-staff';
import Resturent from './components/resturent';
import Reservation from './components/reservation';
import About from './components/about';
import ScrollToTop from 'react-router-scroll-top'
import ApartmentList from './components/apartment-list';

class Root extends Component {
    render() {
        return(
                <HashRouter basename="/">
	                <div>
									<ScrollToTop>
	                <Switch>
	                    <Route exact path="/" component={HomeV1} />
	                    <Route path="/home-v2" component={HomeV1} />
	                    <Route path="/room-list" component={RoomList} />
											<Route path="/apartment-list" component={ApartmentList} />
	                    <Route path="/room-grid" component={RoomGrid} />
	                    <Route path="/room-details" component={RoomDetails} />
	                    <Route path="/service" component={Service} />
	                    <Route path="/blog-grid" component={BlogGrid} />
	                    <Route path="/blog-list" component={BlogList} />
	                    <Route path="/blog-details" component={BlogDetails} />
	                    <Route path="/gallery" component={Gallery} />
	                    <Route path="/contact" component={Contact} />
	                    <Route path="/our-staff" component={OurStaff} />
	                    <Route path="/resturent" component={Resturent} />
	                    <Route path="/reservation" component={Reservation} />
	                    <Route path="/about" component={About} />
	                </Switch>
									</ScrollToTop>
	                </div>
                </HashRouter>
        )
    }
}

export default Root;

ReactDOM.render(<Root />, document.getElementById('Elevations'));
