import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Slider extends Component {

    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'

    return <section className="hero-section" id="heroSlideActive">
	  <div className="single-hero-slide bg-img-center d-flex align-items-center text-center" style={{backgroundImage: 'url('+publicUrl+'assets/img/bg/hero-bg-1.jpg)'}}>
	    <div className="container">
	      <div className="slider-text">
	        <span className="small-text" data-animation="fadeInDown" data-delay=".3s">Welcome to Elevations</span>
	        <h1 data-animation="fadeInLeft" data-delay=".6s">Luxury Hotel and Apartments</h1>
	        <Link className="btn filled-btn" to="/service" data-animation="fadeInUp" data-delay=".9s">get started <i className="fas fa-long-arrow-alt-right" /></Link>
	      </div>
	    </div>
	    <h1 className="big-text">Elevations</h1>
	  </div>	
	
	  <div className="single-hero-slide bg-img-center d-flex align-items-center text-center" style={{backgroundImage: 'url('+publicUrl+'assets/img/bg/hero-bg-5.jpg)'}}>
	    <div className="container">
	      <div className="slider-text">
	        <span className="small-text" data-animation="fadeInDown" data-delay=".3s">Welcome to Elevations</span>
	        <h1 data-animation="fadeInLeft" data-delay=".6s">Cool Place</h1>
	        <Link className="btn filled-btn" to="/service" data-animation="fadeInUp" data-delay=".9s">get started <i className="fas fa-long-arrow-alt-right" /></Link>
	      </div>
	    </div>
	    <h1 className="big-text">Elevations</h1>
	  </div>
	
	  <div className="single-hero-slide bg-img-center d-flex align-items-center text-center" style={{backgroundImage: 'url('+publicUrl+'assets/img/bg/hero-bg-6.jpg)'}}>
	    <div className="container">
	      <div className="slider-text">
	        <span className="small-text" data-animation="fadeInDown" data-delay=".3s">Welcome to Elevations</span>
	        <h1 data-animation="fadeInLeft" data-delay=".6s">Dream Place</h1>
	        <Link className="btn filled-btn" to="/service" data-animation="fadeInUp" data-delay=".9s">get started <i className="fas fa-long-arrow-alt-right" /></Link>
	      </div>
	    </div>
	    <h1 className="big-text">Elevations</h1>
	  </div>
	
	
	
	
	
	
	
	
	
	  <div className="single-hero-slide bg-img-center d-flex align-items-center text-center" style={{backgroundImage: 'url('+publicUrl+'assets/img/bg/hero-bg-2.jpg)'}}>
	    <div className="container">
	      <div className="slider-text">
	        <span className="small-text" data-animation="fadeInDown" data-delay=".3s">Welcome to Elevations</span>
	        <h1 data-animation="fadeInLeft" data-delay=".6s">Unique Like you</h1>
	        <Link className="btn filled-btn" to="/service" data-animation="fadeInUp" data-delay=".9s">get started <i className="fas fa-long-arrow-alt-right" /></Link>
	      </div>
	    </div>
	    <h1 className="big-text">Elevations</h1>
	  </div>
		<div className="single-hero-slide bg-img-center d-flex align-items-center text-center" style={{backgroundImage: 'url('+publicUrl+'assets/img/bg/hero-bg-3.jpg)'}}>
	    <div className="container">
	      <div className="slider-text">
	        <span className="small-text" data-animation="fadeInDown" data-delay=".3s">Welcome to Elevations</span>
	        <h1 data-animation="fadeInLeft" data-delay=".6s">Unique Style</h1>
	        <Link className="btn filled-btn" to="/service" data-animation="fadeInUp" data-delay=".9s">get started <i className="fas fa-long-arrow-alt-right" /></Link>
	      </div>
	    </div>
	    <h1 className="big-text">Elevations</h1>
	  </div>
		<div className="single-hero-slide bg-img-center d-flex align-items-center text-center" style={{backgroundImage: 'url('+publicUrl+'assets/img/bg/hero-bg-4.jpg)'}}>
	    <div className="container">
	      <div className="slider-text">
	        <span className="small-text" data-animation="fadeInDown" data-delay=".3s">Welcome to Elevations</span>
	        <h1 data-animation="fadeInLeft" data-delay=".6s">Unique Fashion</h1>
	        <Link className="btn filled-btn" to="/service" data-animation="fadeInUp" data-delay=".9s">get started <i className="fas fa-long-arrow-alt-right" /></Link>
	      </div>
	    </div>
	    <h1 className="big-text">Elevations</h1>
	  </div>
	</section>


        }
}

export default Slider