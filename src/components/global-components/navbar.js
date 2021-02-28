import React, { Component } from "react";
import { Link } from "react-router-dom";

class Navbar extends Component {
  render() {
    let publicUrl = process.env.PUBLIC_URL + "/";
    return (
      <header>
        
        <div className="header-menu-area">
          <div className="container-fluid">
            <div className="row align-items-center">
              <div className="col-xl-2 col-lg-2 col-md-3 col-7">
                <div>
                  <Link to="/">
                    {" "}
                    <img
                      src={publicUrl + "assets/img/logo.svg"}
                      className="mainAppLogo"
                      alt="Elevations"
                    />{" "}
                  </Link>{" "}
                </div>{" "}
              </div>{" "}
              <div className="col-xl-10 col-lg-10 col-md-9 col-5">
                <div className="menu-right-area text-right">
                  <div className="lag-select">
                    <div className="lag-img">
                      <img
                        src={publicUrl + "assets/img/icons/flag1.jpg"}
                        alt="Flug"
                      />
                    </div>{" "}
                    <div className="lag-option">
                      <select id="languageSelect">
                        <option value="English" data-href="#googtrans(en|en)" data-lang="en"> English </option>{" "}
                        <option value="Spanish" data-href="#googtrans(es|es)" data-lang="es"> Spanish </option>{" "}
                      </select>{" "}
                    </div>{" "}
                  </div>{" "}
                  <nav className="main-menu">
                    <ul className="list-inline">
                      <li>
                        <Link to="/"> Home </Link>{" "}
                      </li>{" "}
                      <li className="have-submenu">
                        <Link to="/rooms"> Hotel </Link>{" "}
                        <ul className="submenu">
                          <li>
                            {" "}
                            <Link to="/rooms"> Rooms </Link>
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
                      <li>
                        <Link to="/apartments"> Apartments </Link>{" "}
                      </li>{" "}
                      <li>
                        {" "}
                        <Link to="/resturent"> Restaurant </Link>
                      </li>
                      <li>
                        {" "}
                        <Link to="/service"> Services </Link>
                      </li>
                      <li>
                        <Link to="/news"> News </Link>{" "}
                      </li>{" "}
                      <li>
                        {" "}
                        <Link to="/gallery"> Gallery </Link>
                      </li>
                      <li>
                        {" "}
                        <Link target="_blank" to="/foundation">
                          {" "}
                          Foundation{" "}
                        </Link>
                      </li>
                    </ul>{" "}
                  </nav>{" "}
                  <div className="quote-btn">
                    <Link to="/" className="btn filled-btn">
                      {" "}
                      get a quote <i className="fas fa-long-arrow-alt-right" />{" "}
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
