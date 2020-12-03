import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Footer_v1 extends Component {

    componentDidMount() {
        let publicUrl = process.env.PUBLIC_URL+'/'
        const minscript = document.createElement("script");
        minscript.async = true;
        minscript.src = publicUrl + "assets/js/main.js";

        document.body.appendChild(minscript);
    }

    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'
        let imgattr = "Footer logo"

        return (
             <footer>
			  <div className="container">
			    <div className="footer-top">
			      <div className="row">
			        <div className="col-lg-4 col-md-6">
			          <div className="widget footer-widget">
			            <div className="footer-logo">
			              <img style= {{height:'200px'}} src={publicUrl+"assets/img/logo.jpg"} alt="Logo" />
			            </div>
			            <p>Avoids pleasure itself, because pleasure, but because those who do not</p>
			            <ul className="social-icons">
			              <li><a href="https://www.facebook.com/webtend/"><i className="fab fa-facebook-f" /></a></li>
			              <li><a href="https://twitter.com/webtend"><i className="fab fa-twitter" /></a></li>
			              <li><a href="https://instagram.com/webtend"><i className="fab fa-instagram" /></a></li>
			              <li><a href="https://google.com/webtend"><i className="fab fa-google" /></a></li>
			            </ul>
			          </div>
			        </div>
			        <div className="col-lg-4 col-md-6">
			          <div className="widget footer-widget">
			            <h4 className="widget-title">Quick Links</h4>
			            <ul className="nav-widget clearfix">
			              <li><Link to="/room-list">Hoel Rooms</Link></li>
			              <li><Link to="/room-details">Restaurants</Link></li>
						  <li><Link to="/room-details">Rooms Detail</Link></li>
			              <li><Link to="/room-details">Restaurants Detail</Link></li>
			              <li><Link to="/apartment-list">Apartments</Link></li>
			              <li><Link to="/apartment-details">Apartments Details</Link></li>
			              <li><Link to="/blog-grid">News</Link></li>
			              <li><Link to="/gallery">Gallery</Link></li>
			              
			            </ul>
			          </div>
			        </div>
			        <div className="col-lg-4">
			          <div className="widget footer-widget">
			            <h4 className="widget-title">Recent News</h4>
			            <ul className="recent-post Elevations-go-top">
			              <li>
			                <div className="recent-post-img">
			                  <img src={publicUrl+"assets/img/recent-post/01.jpg"} alt="News" />
			                </div>
			                <h6><Link to="/blog-details">Parsing Hotel ‘Hygiene Theater’ From Truly Effective Health Protocols</Link></h6>
			                <span className="recent-post-date">22 Aug 20</span>
			              </li>
			              <li>
			                <div className="recent-post-img">
			                  <img src={publicUrl+"assets/img/recent-post/02.jpg"} alt="News" />
			                </div>
			                <h6><Link to="/blog-details">Shanghai Marriott Hotel expanded its portfolio of hotels in China.</Link></h6>
			                <span className="recent-post-date">20 June 20</span>
			              </li>
			            </ul>
			          </div>
			        </div>
			      </div>
			    </div>
			    <div className="footer-bottom">
			      <a href="#" className="back-to-top"><i className="far fa-angle-up" /></a>
			      <div className="row">
			        <div className="col-md-6 Elevations-go-top">
			          <ul className="footer-nav">
			            <li><Link to="/">Home</Link></li>
			            <li><Link to="/about">About</Link></li>
			            <li><Link to="/service">Services</Link></li>
			          </ul>
			        </div>
			        <div className="col-md-6">
			          <p className="copy-right text-right">Copyright ©2020. All Rights Reserved</p>
			        </div>
			      </div>
			    </div>
			  </div>
			</footer>


        )
    }
}


export default Footer_v1