import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Calltoacton extends Component {

    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'

    return <section className="cta-section bg-img-center" style={{backgroundImage: 'url('+publicUrl+'assets/img/bg/cta-01.jpg)'}}>
			  <div className="container">
			    <div className="row align-items-center">
			      <div className="col-md-10">
			        <div className="cta-left-content Elevations-go-top">
			          <span>Looking For Luxury Hotel</span>
			          <h1>Booking Now</h1>
			          <Link to="/moredetails" className="btn filled-btn">Booking now <i className="fas fa-long-arrow-alt-right" /></Link>
			        </div>
			      </div>
			      <div className="col-md-2">
			        <div className="video-icon text-right">
			          <a href="https://www.youtube.com/watch?v=NpEaa2P7qZI" className="video-popup"> <i className="fas fa-play" /></a>
			        </div>
			      </div>
			    </div>
			  </div>
			</section>


        }
}

export default Calltoacton