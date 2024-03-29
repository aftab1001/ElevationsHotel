import React, { Component } from "react";
import { Link } from "react-router-dom";
import BookNow from "./../global-components/BookNow";
import { getApartmentsData } from "./../Services/ApartmentsDataService";
import Loader from "react-loader-spinner";

class ApartmentList extends Component {
  state = {
    apartments: [],
    Loading:true
  };
  componentDidMount = async () => {
    
    const response = await getApartmentsData();
    const { data } = response;   
    this.setState({ Loading:false,apartments: data.result.items });
  };
  render() {
    return ( this.state.Loading?<div style={{textAlign:"center"}}><Loader type="ThreeDots" color="#0f172b" height="100" width="100" /></div>:
      <section className="rooms-warp list-view section-bg section-padding ">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              {this.state.apartments &&
                this.state.apartments.map((apartment) => (
                  <div
                    className="single-room list-style Elevations-go-top"
                    key={"apartmentkey" + apartment.id}
                  >
                    <div className="row align-items-center no-gutters">
                      <div className="col-lg-6">
                        <div className="room-thumb">
                          <img src={apartment.image1} alt="Apartment" />
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="room-desc">
                          <div className="room-cat">
                            <p>{apartment.categoryName}</p>
                          </div>
                          <h4>
                            <Link to={"/apartmentdetails/" + apartment.id}>
                              {apartment.name}
                            </Link>
                          </h4>
                          <ul className="room-info list-inline">
                            <li>
                              <i className="fas fa-bed" />
                              {apartment.bed} Bed
                            </li>
                            <li>
                              <i className="fas fa-bath" />
                              {apartment.bath} Baths
                            </li>
                            <li>
                              <i className="fas fa-ruler-combined" />
                              {apartment.length}
                            </li>
                          </ul>
                          <div className="room-price">
                            <p>${apartment.price}</p>
                          </div>
                          <BookNow
                            type="apartment"
                            data={apartment}
                            btnText="Book Tour"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
            <div className="col-lg-4 d-none">
              <div className="sidebar-wrap">
                <div className="widget fillter-widget">
                  <h4 className="widget-title">Your Reservation</h4>
                  <form>
                    <div className="input-wrap">
                      <input type="text" placeholder="Location" id="location" />
                      <i className="fas fa-search" />
                    </div>
                    <div className="input-wrap">
                      <input
                        type="text"
                        placeholder="Arrive Date"
                        id="arrive-date"
                      />
                      <i className="far fa-calendar-alt" />
                    </div>
                    <div className="input-wrap">
                      <input
                        type="text"
                        placeholder="Depart Date"
                        id="depart-date"
                      />
                      <i className="far fa-calendar-alt" />
                    </div>
                    <div className="input-wrap">
                      <select name="rooms" id="rooms" defaultValue={"DEFAULT"}>
                        <option disabled value="DEFAULT">
                          Apartments
                        </option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                      </select>
                    </div>
                    <div className="input-wrap">
                      <select
                        name="adults"
                        id="adults"
                        defaultValue={"DEFAULT"}
                      >
                        <option value="default" disabled>
                          Adults
                        </option>
                        <option value={1}>1</option>
                        <option value={2}>2</option>
                        <option value={3}>3</option>
                        <option value={3}>4</option>
                      </select>
                    </div>
                    <div className="input-wrap">
                      <select name="child" id="child" defaultValue={"Children"}>
                        <option disabled defaultValue={"Children"}>
                          Children
                        </option>
                        <option value={1}>1</option>
                        <option value={2}>2</option>
                        <option value={3}>3</option>
                        <option value={3}>4</option>
                      </select>
                    </div>
                    <div className="input-wrap">
                      <div className="price-range-wrap">
                        <div className="slider-range">
                          <div id="slider-range" />
                        </div>
                        <div className="price-ammount">
                          <input
                            type="text"
                            id="amount"
                            name="price"
                            placeholder="Add Your Price"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="input-wrap">
                      <div className="checkboxes">
                        <p>
                          <input
                            type="checkbox"
                            defaultValue="guest-room"
                            id="guest-room"
                          />
                          <label htmlFor="guest-room">
                            One-Bedroom Apartment
                          </label>
                        </p>
                        <p>
                          <input
                            type="checkbox"
                            defaultValue="meeting-room"
                            id="meeting-room"
                          />
                          <label htmlFor="meeting-room">
                            Two-Bedroom Apartment
                          </label>
                        </p>
                        <p>
                          <input
                            type="checkbox"
                            defaultValue="meeting-room"
                            id="meeting-room"
                          />
                          <label htmlFor="meeting-room">
                            Three-Bedroom Apartment
                          </label>
                        </p>
                        <p>
                          <input
                            type="checkbox"
                            defaultValue="wifi"
                            id="wifi"
                          />
                          <label htmlFor="wifi">Free Wifi</label>
                        </p>
                        <p>
                          <input type="checkbox" defaultValue="pet" id="pet" />
                          <label htmlFor="pet">Pet Friendly</label>
                        </p>
                        <p>
                          <input
                            type="checkbox"
                            defaultValue="parking"
                            id="parking"
                          />
                          <label htmlFor="parking">Parking</label>
                        </p>
                        <p>
                          <input
                            type="checkbox"
                            defaultValue="pureair"
                            id="pureair"
                          />
                          <label htmlFor="pureair">Pure Air</label>
                        </p>
                        <p>
                          <input
                            type="checkbox"
                            defaultValue="airc"
                            id="airc"
                          />
                          <label htmlFor="airc">Air Conditioner</label>
                        </p>
                        <p>
                          <input
                            type="checkbox"
                            defaultValue="nosmoke"
                            id="nosmoke"
                          />
                          <label htmlFor="nosmoke">No Smoking</label>
                        </p>
                      </div>
                    </div>
                    <div className="input-wrap">
                      <button
                        type="submit"
                        className="btn filled-btn btn-block"
                      >
                        Filter Results{" "}
                        <i className="fas fa-long-arrow-alt-right" />
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          </div>
      </section>
    );
  }
}

export default ApartmentList;
