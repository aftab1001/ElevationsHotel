import React, { Component } from "react";
import { Link } from "react-router-dom";
import parse from "html-react-parser";

class Service extends Component {
  render() {
    let publicUrl = process.env.PUBLIC_URL + "/";
    let imagealt = "image";

    return (
      <section className="service-section section-padding">
        <div className="container">
          {/* Section Title */}
          <div className="section-title text-center">
            <span className="title-top">Our Services</span>
            <h1>
              We Provide Most Exclusive <br /> Hotel &amp; Room Services{" "}
            </h1>
          </div>

          <div className="row">
            <div className="col-lg-4 col-md-6">
              {/* SingleBox */}
              <div
                className="single-service-box text-center wow fadeIn animated"
                data-wow-duration="1500ms"
                data-wow-
                delay="400ms"
              >
                <span className="service-counter">01</span>
                <div className="service-icon">
                  <img
                    src={publicUrl + "assets/img/icons/01.png"}
                    alt="Icon"
                    className="first-icon"
                  />
                  <img
                    src={publicUrl + "assets/img/icons/01-hover.png"}
                    alt="Hover Icon"
                    className="second-icon"
                  />
                </div>
                <h4>Rooms &amp; Appartment</h4>
                <p>
                  Great explorer of the truth the ter-blde human happiness one
                  reject
                </p>
                <Link to="/moredetails" className="read-more">
                  raed more <i className="fas fa-long-arrow-alt-right" />
                </Link>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              {/* SingleBox */}
              <div
                className="single-service-box text-center wow fadeIn animated"
                data-wow-duration="1500ms"
                data-wow-
                delay="800ms"
              >
                <span className="service-counter">02</span>
                <div className="service-icon">
                  <img
                    src={publicUrl + "assets/img/icons/05.png"}
                    alt="Icon"
                    className="first-icon"
                  />
                  <img
                    src={publicUrl + "assets/img/icons/05-hover.png"}
                    alt="Hover Icon"
                    className="second-icon"
                  />
                </div>
                <h4>Event &amp; Party</h4>
                <p>
                  Great explorer of the truth the ter-blde human happiness one
                  reject
                </p>
                <Link to="/moredetails" className="read-more">
                  raed more <i className="fas fa-long-arrow-alt-right" />
                </Link>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              {/* SingleBox */}
              <div
                className="single-service-box text-center wow fadeIn animated"
                data-wow-duration="1500ms"
                data-wow-
                delay="900ms"
              >
                <span className="service-counter">03</span>
                <div className="service-icon">
                  <img
                    src={publicUrl + "assets/img/icons/06.png"}
                    alt="Icon"
                    className="first-icon"
                  />
                  <img
                    src={publicUrl + "assets/img/icons/06-hover.png"}
                    alt="Hover Icon"
                    className="second-icon"
                  />
                </div>
                <h4>GYM </h4>
                <p>
                  Great explorer of the truth the ter-blde human happiness one
                  reject
                </p>
                <Link to="/moredetails" className="read-more">
                  raed more <i className="fas fa-long-arrow-alt-right" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Service;
