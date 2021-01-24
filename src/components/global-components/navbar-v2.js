import React, { Component } from "react";
import { Link } from "react-router-dom";

class NavbarV2 extends Component {
  render() {
    let publicUrl = process.env.PUBLIC_URL + "/";
    let imgattr = "logo";
    let anchor = "#";
    return (
      <header className="header-two">
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-lg-3 col-md-6 col-7">
              <div className="logo-wrap d-flex justify-content-between align-items-center">
                <div className="logo">
                  <Link to="/">
                    {" "}
                    <img
                      src={publicUrl + "assets/img/logo-transparent.png"}
                      alt="Elevations"
                    />{" "}
                  </Link>{" "}
                </div>{" "}
                <p className="phone-num">
                  {" "}
                  <i className="fas fa-phone" /> +89(456) 789 999{" "}
                </p>{" "}
              </div>{" "}
            </div>{" "}
            <div className="col-lg-9 col-md-6 col-5">
              <div className="menu-right-area text-right">
                <nav className="main-menu">
                  <ul className="list-inline">
                    <li className="active-page">
                      <Link to="/"> Home </Link>{" "}
                     
                    </li>
                    <li className="have-submenu">
                      <Link to="/room-list"> Rooms </Link>{" "}
                      <ul className="submenu">
                        <li>
                          {" "}
                          <Link to="/room-list"> Rooms </Link>
                        </li>
                        <li>
                          {" "}
                          <Link to="/room-grid">Apartments</Link>
                        </li>
                        <li>
                          {" "}
                          <Link to="/room-details"> Room Details </Link>
                        </li>
                      </ul>{" "}
                    </li>{" "}
                    <li>
                      {" "}
                      <Link to="/service"> Services </Link>
                    </li>
                    <li className="have-submenu">
                      <Link to="/blog-grid"> News </Link>{" "}
                      <ul className="submenu">
                        <li>
                          {" "}
                          <Link to="/blog-grid"> News Gird </Link>
                        </li>
                        <li>
                          {" "}
                          <Link to="/blog-list"> News Standard </Link>
                        </li>
                        <li>
                          {" "}
                          <Link to="/blog-details"> News Details </Link>
                        </li>
                      </ul>{" "}
                    </li>{" "}
                    <li className="have-submenu">
                      <a href="#"> Pages </a>{" "}
                      <ul className="submenu">
                        <li>
                          {" "}
                          <Link to="/"> Home </Link>{" "}
                         
                        </li>{" "}
                        <li>
                          {" "}
                          <Link to="/about"> About Us </Link>
                        </li>
                        <li className="have-submenu">
                          <Link to="/room-gird"> Hotel </Link>{" "}
                          <ul className="submenu">
                            <li>
                              {" "}
                              <Link to="/room-list"> Rooms </Link>
                            </li>
                            <li>
                              {" "}
                              <Link to="/room-gird">Apartments</Link>
                            </li>
                            <li>
                              {" "}
                              <Link to="/room-details">Room Details</Link>
                            </li>
                            <li>
                                {" "}
                                <Link to="/room-details">Apartment Details</Link>
                              </li>
                              <li>
                                {" "}
                                <Link to="/room-details">Resaturent</Link>
                              </li>
                          </ul>{" "}
                        </li>{" "}
                        <li>
                          <Link to="/service"> Services </Link>{" "}
                        </li>{" "}
                        <li className="have-submenu">
                          {" "}
                          <Link to="/blog-grid"> News </Link>{" "}
                          <ul className="submenu">
                            <li>
                              {" "}
                              <Link to="/blog-gird"> News Gird </Link>
                            </li>
                            <li>
                              {" "}
                              <Link to="/blog-list"> News Standard </Link>
                            </li>
                            <li>
                              {" "}
                              <Link to="/blog-details"> News Details </Link>
                            </li>
                          </ul>{" "}
                        </li>{" "}
                        <li>
                          {" "}
                          <Link to="/gallery"> Gallery </Link>
                        </li>
                        <li>
                          {" "}
                          <Link to="/contact"> Contact </Link>
                        </li>
                        <li>
                          {" "}
                          <Link to="/our-staff"> Our Staff </Link>
                        </li>
                        <li>
                          {" "}
                          <Link to="/resturent"> Resturent </Link>
                        </li>
                        <li>
                          {" "}
                          <Link to="/reservation"> Reservation </Link>
                        </li>
                      </ul>{" "}
                    </li>{" "}
                    <li>
                      {" "}
                      <Link to="/gallery"> Gallery </Link>
                    </li>
                    <li>
                      {" "}
                      <Link to="/contact"> Contact </Link>
                    </li>
                  </ul>{" "}
                </nav>{" "}
                <div className="search-wrap">
                  <a href="#" className="search-icon">
                    {" "}
                    <i className="fas fa-search" />{" "}
                  </a>{" "}
                  <a href="#" className="search-icon icon-close">
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
                    get a quote <i className="fas fa-long-arrow-alt-right" />{" "}
                  </Link>{" "}
                </div>{" "}
              </div>{" "}
            </div>{" "}
          </div>{" "}
          <div className="mobilemenu" />
        </div>{" "}
      </header>
    );
  }
}

export default NavbarV2;
