import React, { useState, useEffect } from "react";
import { Link, useParams, Redirect } from "react-router-dom";
import BookNow from "../global-components/BookNow";
import { getRoomById } from "../Services/RoomsDataService";
const RoomDetailSection = (props) => {
  const defaultRoomData = {
    description: "",
    image1: "",
    image2: "",
    image3: "",
    image4: "",
    image5: "",
    imageSequence: 0,
    name: "",
    title: "",
    id: null,
    price: 0,
    length: 0,
    bed: 0,
    bath: 0,
    location: "",
    features: "",
    facilities: "",
    nightlyPlan: "",
    weekendPlan: "",
    weeklyPlan: "",
    monthlyPlan: "",
    cleaningFee: "",
    cityFee: "",
    maxNumberOfDays: "",
    minNumberOfDays: "",
  };

  const { roomId } = useParams();
  const [room, setroom] = useState(defaultRoomData);

  useEffect(() => {
    const getData=async ()=>{
      const response = await getRoomById(roomId);
      const { data } = response;
  
      setroom(data.result);
    }
    getData();
  }, [roomId]);

  

  const getFeaturesList = (features) => {
    if (features && features != "" && features.indexOf(",") != -1) {
      return features.split(",").map((feature) => {
        return <li>{feature}</li>;
      });
    } else {
      return <li>{features}</li>;
    }
  };

  return (
    <section className="room-details-wrapper section-padding">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            {/* Room Details */}
            <div className="room-details">
              <div className="entry-header">
                <div className="post-thumb position-relative">
                  <div className="post-thumb-slider">
                    <div className="main-slider">
                      <div className="single-img">
                        <a href={room.image1} className="main-img">
                          <img src={room.image1} alt="Image" />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="price-tag">${room.price}</div>
                </div>
                <div className="room-cat">
                  <a href="#">{room.categoryName}</a>
                </div>
                <h2 className="entry-title">{room.name}</h2>
                <ul className="entry-meta list-inline">
                  <li>
                    <i className="fas fa-bed" />
                    {room.bed} Bed
                  </li>
                  <li>
                    <i className="fas fa-bath" />
                    {room.bath} Baths
                  </li>
                  <li>
                    <i className="fas fa-ruler-combined" />
                    {room.length} m
                  </li>
                </ul>
              </div>
              <div className="room-details-tab">
                <div className="row">
                  <div className="col-sm-3">
                    <ul className="nav desc-tab-item" role="tablist">
                      <li className="nav-item">
                        <a
                          className="nav-link active"
                          href="#desc"
                          role="tab"
                          data-toggle="tab"
                        >
                          Room Details
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          className="nav-link"
                          href="#location"
                          role="tab"
                          data-toggle="tab"
                        >
                          Location
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="col-sm-9">
                    <div className="tab-content desc-tab-content">
                      <div
                        role="tabpanel"
                        className="tab-pane fade in active show"
                        id="desc"
                      >
                        <h5 className="tab-title">Room Details </h5>
                        <div className="entry-content">
                          <p>{room.description}</p>
                          <div className="entry-gallery-img">
                            <figure className="entry-media-img">
                              <img src={room.image1} alt="Image" />
                            </figure>
                          </div>
                        </div>
                        <div className="room-specification">
                          <div className="row">
                            <div className="col-lg-6 col-md-12">
                              <div className="pricing-plan">
                                <h4 className="specific-title">
                                  {" "}
                                  Pricing Plan{" "}
                                </h4>
                                <table>
                                  <tbody>
                                    <tr>
                                      <td>Nightly: </td>
                                      <td className="big">
                                        ${room.nightlyPlan}
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>Weekends (Sat_sun): </td>
                                      <td className="big">
                                        ${room.weekendPlan}
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>Weekly (7d+): </td>
                                      <td className="big">
                                        ${room.weeklyPlan}
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>Monthly (30d+): </td>
                                      <td className="big">
                                        ${room.monthlyPlan}
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>Cleaning Fee: </td>
                                      <td className="big">
                                        ${room.cleaningFee}
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>City Fee:</td>
                                      <td className="big">
                                        ${room.cityFee} Per Stay
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>Minimum Number Of Days:</td>
                                      <td className="big">
                                        {room.minNumberOfDays}
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>Maximum Number Of Days:</td>
                                      <td className="big">
                                        {room.maxNumberOfDays}
                                      </td>
                                    </tr>
                                  </tbody>
                                </table>
                              </div>
                            </div>
                            <div className="col-lg-6 col-6">
                              <div className="feature">
                                <h4 className="specific-title"> Features </h4>
                                <ul>{getFeaturesList(room.features)}</ul>
                              </div>
                              <div className="facilities">
                                <h4 className="specific-title"> Facilities </h4>
                                <ul>{getFeaturesList(room.facilities)}</ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        role="tabpanel"
                        className="tab-pane fade"
                        id="location"
                      >
                        <h5 className="tab-title">Location</h5>
                        <div
                          style={{
                            overflow: "hidden",
                            width: "585px",
                            position: "relative",
                          }}
                        >
                          <iframe
                            width={585}
                            height={580}
                            src="https://maps.google.com/maps?width=1920&height=670&hl=en&q=London%2C%20United%20Kingdom+(Title)&ie=UTF8&t=&z=10&iwloc=B&output=embed"
                            frameBorder={0}
                            scrolling="no"
                            marginHeight={0}
                            marginWidth={0}
                          />
                          <div
                            style={{
                              position: "absolute",
                              width: "80%",
                              bottom: "10px",
                              left: 0,
                              right: 0,
                              marginLeft: "auto",
                              marginRight: "auto",
                              color: "#000",
                              textAlign: "center",
                            }}
                          >
                            <small
                              style={{
                                lineHeight: "1.8",
                                fontSize: "2px",
                                background: "#fff",
                              }}
                            >
                              Powered by{" "}
                              <a href="https://embedgooglemaps.com/es/">
                                Embedgooglemaps ES
                              </a>{" "}
                              &amp;{" "}
                              <a href="https://www.jubler.org/">
                                increase website traffic
                              </a>
                            </small>
                          </div>
                          <style
                            dangerouslySetInnerHTML={{
                              __html:
                                "#gmap_canvas img{max-width:none!important;background:none!important}",
                            }}
                          />
                        </div>
                        <br />
                        <div className="room-location">
                          <div className="row">
                            <div className="col-4">
                              <h6>City</h6>
                              <p>London, Uk</p>
                            </div>
                            <div className="col-4">
                              <h6>Phone</h6>
                              <p>+901280-89121</p>
                              <p>+901280-89121</p>
                            </div>
                            <div className="col-4">
                              <h6>Email</h6>
                              <p>room@Elevations.com</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RoomDetailSection;
