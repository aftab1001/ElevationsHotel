import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class FoodCta extends Component {

    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'

    return <section className="food-cta bg-img-center Elevations-go-top" style={{backgroundImage: 'url('+publicUrl+'assets/img/food/food-cta.jpg)'}}>
		  <div className="container">
		    <div className="food-cta-text">
		      <h1>Special Offer <span>For Burgers</span></h1>
		      <Link to="/service" className="btn filled-btn">SHOP NOW <i className="fas fa-long-arrow-alt-right" /></Link>
		    </div>
		  </div>
		  <h1 className="big-text">
		    Burgers
		  </h1>
		</section>

        }
}

export default FoodCta