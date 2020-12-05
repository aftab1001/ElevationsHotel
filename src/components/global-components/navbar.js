import React, { Component } from "react";
import { Link } from "react-router-dom";

class Navbar extends Component {
  render() {
    let publicUrl = process.env.PUBLIC_URL + "/";
    let imgattr = "logo";
    let anchor = "#";
    return (
      <header>
        <div className="header-top-area section-bg">
          <div className="container-fluid">
            <div className="row align-items-center">
              <div className="col-xl-4 col-lg-7 offset-xl-3 col-md-6">
                <ul className="top-contact-info list-inline">
                  <li>
                    {" "}
                    <i className="far fa-map-marker-alt" /> 205 Main Rood, New
                    York{" "}
                  </li>{" "}
                  <li>
                    {" "}
                    <i className="far fa-phone" /> +89(456) 789 999{" "}
                  </li>{" "}
                </ul>{" "}
              </div>{" "}
              <div className="col-xl-5 col-lg-5 col-md-6">
                <div className="top-right text-right">
                  <ul className="top-menu list-inline d-inline">
                    <li>
                      {" "}
                      <Link to="/"> Home </Link>
                    </li>
                    <li>
                      {" "}
                      <Link to="/contact"> Contact Us </Link>
                    </li>
                    <li>
                      {" "}
                      <Link to="/about"> About Us </Link>
                    </li>
                  </ul>{" "}
                  <ul className="top-social-icon list-inline d-inline">
                    <li>
                      {" "}
                      <a href="https://www.facebook.com/webtend/">
                        {" "}
                        <i className="fab fa-facebook-f" />{" "}
                      </a>
                    </li>
                    <li>
                      {" "}
                      <a href="https://twitter.com/webtend">
                        {" "}
                        <i className="fab fa-twitter" />{" "}
                      </a>
                    </li>
                    <li>
                      {" "}
                      <a href="https://instagram.com/webtend">
                        {" "}
                        <i className="fab fa-instagram" />{" "}
                      </a>
                    </li>
                    <li>
                      {" "}
                      <a href="https://google.com/webtend">
                        {" "}
                        <i className="fab fa-google" />{" "}
                      </a>
                    </li>
                  </ul>{" "}
                </div>{" "}
              </div>{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
        <div className="header-menu-area">
          <div className="container-fluid">
            <div className="row align-items-center">
              <div className="col-xl-3 col-lg-3 col-md-4 col-7">
                <div >
                  <Link to="/">
                    {" "}
                    <img 
                      src={publicUrl + "assets/img/logo.jpg"} className="mainAppLogo"
                      alt="Elevations"
                    />{" "}
                  </Link>{" "}
                </div>{" "}
              </div>{" "}
              <div className="col-xl-9 col-lg-9 col-md-8 col-5">
                <div className="menu-right-area text-right">
                  <div className="lag-select">
                    <div className="lag-img">
                      <img
                        src={publicUrl + "assets/img/icons/flag.png"}
                        alt="Flug"
                      />
                    </div>{" "}
                    <div className="lag-option">
                      <select>
                        <option value="English"> English </option>{" "}
                        <option value="Spanis"> Spanis </option>{" "}
                        <option value="Creol"> Spanish </option>{" "}
                      </select>{" "}
                    </div>{" "}
                  </div>{" "}
                  <nav className="main-menu">
                    <ul className="list-inline">
                      <li className="active-page">
                        <Link to="/"> Home </Link>{" "}
                       
                      </li>{" "}
                      <li className="have-submenu">
                        <Link to="/room-list"> Hotel </Link>{" "}
                        <ul className="submenu">
                          <li>
                            {" "}
                            <Link to="/room-list"> Rooms </Link>
                          </li>
                          <li>
                            {" "}
                            <Link to="/room-details"> Room Details </Link>
                          </li>
                             
                              <li>
                                {" "}
                                <Link to="/reservation">Reservation</Link>
                              </li>
                              <li>
                                {" "}
                                <Link to="/our-staff">Our Staff</Link>
                              </li>
                            
                        </ul>{" "}
                      </li>{" "}
                      <li className="have-submenu">
                        <Link to="/apartment-list"> Apartments </Link>{" "}
                        <ul className="submenu">
                          <li>
                                {" "}
                                <Link to="/apartment-details">Apartment Details </Link>
                              </li>
                        </ul>{" "}
                      </li>{" "}
                      <li>
                        {" "}
                        <Link to="/reservation"> Restaurant </Link>
                      </li>
                      <li>
                        {" "}
                        <Link to="/service"> Services </Link>
                      </li>
                      <li>
                        <Link to="/blog-grid"> News </Link>{" "}
                     
                      </li>{" "}
                  
                      <li>
                        {" "}
                        <Link to="/gallery"> Gallery </Link>
                      </li>
                      <li>
                        {" "}
                        <Link target="_blank" to="/foundation"> Foundation </Link>
                      </li>
                    </ul>{" "}
                  </nav>{" "}
                  <div className="search-wrap">
                    <a className="search-icon">
                      {" "}
                      <i className="far fa-search" />{" "}
                    </a>{" "}
                    <a className="search-icon icon-close">
                      <i className="far fa-times" />
                    </a>{" "}
                    <div className="search-form">
                      <form>
                        <input
                          type="search"
                          placeholder="TYPE AND PRESS ENTER....."
                        />
                      </form>{" "}
                    </div>{" "}
                  </div>{" "}
                  <div className="quote-btn">
                    <Link to="/contact" className="btn filled-btn">
                      {" "}
                      get a quote <i className="far fa-long-arrow-right" />{" "}
                    </Link>{" "}
                  </div>{" "}
                </div>{" "}
              </div>{" "}
            </div>{" "}
            <div className="mobilemenu" />
          </div>{" "}
        </div>{" "}
      </header>
    );
  }
}

export default Navbar;
