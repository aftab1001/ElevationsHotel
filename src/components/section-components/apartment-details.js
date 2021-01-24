import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

class ApartmentDetail extends Component {

    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'
        let imagealt = 'image'

    return <section className="room-details-wrapper section-padding">
		  <div className="container">
		    <div className="row">
		      <div className="col-lg-8">
		        {/* Room Details */}
		        <div className="room-details">
		          <div className="entry-header">
		            <div className="post-thumb position-relative">
		              <div className="post-thumb-slider">
		                <div className="main-slider">
		                  <div className="single-img">
		                    <a href={publicUrl+"assets/img/apartment/07.jpg" }className="main-img">
		                      <img src={publicUrl+"assets/img/apartment/07.jpg"} alt="Image" />
		                    </a>
		                  </div>
		                  <div className="single-img">
		                    <a href={publicUrl+"assets/img/apartment/09.jpg"} className="main-img">
		                      <img src={publicUrl+"assets/img/apartment/09.jpg"} alt="Image" />
		                    </a>
		                  </div>
		                  <div className="single-img">
		                    <a href={publicUrl+"assets/img/apartment/11.jpg"} className="main-img">
		                      <img src={publicUrl+"assets/img/apartment/11.jpg"} alt="Image" />
		                    </a>
		                  </div>
		                  <div className="single-img">
		                    <a href={publicUrl+"assets/img/apartment/10.jpg"} className="main-img">
		                      <img src={publicUrl+"assets/img/apartment/10.jpg"} alt="Image" />
		                    </a>
		                  </div>
		                  <div className="single-img">
		                    <a href={publicUrl+"assets/img/apartment/44.jpg"} className="main-img">
		                      <img src={publicUrl+"assets/img/apartment/44.jpg"} alt="Image" />
		                    </a>
		                  </div>
		                  <div className="single-img">
		                    <a href={publicUrl+"assets/img/apartment/46.jpg"} className="main-img">
		                      <img src={publicUrl+"assets/img/apartment/46.jpg"} alt="Image" />
		                    </a>
		                  </div>
		                  <div className="single-img">
		                    <a href={publicUrl+"assets/img/apartment/05.jpg"} className="main-img">
		                      <img src={publicUrl+"assets/img/apartment/05.jpg"} alt="Image" />
		                    </a>
		                  </div>
		                  <div className="single-img">
		                    <a href={publicUrl+"assets/img/apartment/06.jpg"} className="main-img">
		                      <img src={publicUrl+"assets/img/apartment/06.jpg"} alt="Image" />
		                    </a>
		                  </div>
		                </div>
		              </div>
		             
		            </div>
		            <div className="room-cat">
		              <a href="#">Guest House</a>
		            </div>
		            <h2 className="entry-title">Two Duplex / Royal Suite</h2>
		            <ul className="entry-meta list-inline">
		              <li><i className="fas fa-bed" />3 Bed</li>
		              <li><i className="fas fa-bath" />2 Baths</li>
		              <li><i className="fas fa-ruler-combined" />80 m</li>
		            </ul>
		          </div>
		          <div className="room-details-tab">
		            <div className="row">
		              <div className="col-sm-3">
		                <ul className="nav desc-tab-item" role="tablist">
		                  <li className="nav-item">
		                    <a className="nav-link active" href="#desc" role="tab" data-toggle="tab">Room Details</a>
		                  </li>
		                  <li className="nav-item">
		                    <a className="nav-link" href="#location" role="tab" data-toggle="tab">Location</a>
		                  </li>
		                  <li className="nav-item">
		                    <a className="nav-link" href="#reviews" role="tab" data-toggle="tab">Reviews</a>
		                  </li>
		                </ul>
		              </div>
		              <div className="col-sm-9">
		                <div className="tab-content desc-tab-content">
		                  <div role="tabpanel" className="tab-pane fade in active show" id="desc">
		                    <h5 className="tab-title">Aprtment Details</h5>
		                    <div className="entry-content">
		                      <p>
													Elevations hotel offers accommodation with free WiFi and restaurant. The property, housed in a building dating from 2020.The air-conditioned apartment consists of 1 bedroom, a living room, a fully equipped kitchen with a microwave and a kettle, and 1 bathroom with a shower and free toiletries. A flat-screen TV with satellite channels is featured.The apartment offers a continental or à la carte breakfast.If you would like to discover the area, hiking is possible in the surroundings.The nearest airport is 15 km from Elevatons comfy apartment in Florida.

											We speak your language!
		                      </p>
		                      <div className="entry-gallery-img">
		                        <figure className="entry-media-img">
		                          <img src={publicUrl+"assets/img/apartment/01.jpg"} alt="Image" />
		                        </figure>
		                      </div>
		                    </div>
		                    <div className="room-specification">
		                      <div className="row">
		                        <div className="col-lg-4 col-md-12">
		                          <div className="pricing-plan">
		                            <h4 className="specific-title"> Pricing Plan </h4>
		                            <table>
		                              <tbody>
		                                <tr>
		                                  <td>Nightly: </td>
		                                  <td className="big">$180</td>
		                                </tr>
		                                <tr>
		                                  <td>Weekends (Sat_sun): </td>
		                                  <td className="big">$200</td>
		                                </tr>
		                                <tr>
		                                  <td>Weekly (7d+): </td>
		                                  <td className="big">$1200</td>
		                                </tr>
		                                <tr>
		                                  <td>Monthly (30d+): </td>
		                                  <td className="big">$3000</td>
		                                </tr>
		                                <tr>
		                                  <td>Cleaning Fee: </td>
		                                  <td className="big">$200</td>
		                                </tr>
		                                <tr>
		                                  <td>City Fee:</td>
		                                  <td className="big">$10 Per Stay</td>
		                                </tr>
		                                <tr>
		                                  <td>Minimum Number Of Days:</td>
		                                  <td className="big">1</td>
		                                </tr>
		                                <tr>
		                                  <td>Maximum Number Of Days:</td>
		                                  <td className="big">60</td>
		                                </tr>
		                              </tbody>
		                            </table>
		                          </div>
		                        </div>
		                        <div className="col-lg-4 col-6">
		                          <div className="feature">
		                            <h4 className="specific-title"> Features </h4>
		                            <ul>
		                              <li>Free WiFi </li>
		                              <li>Family rooms</li>
		                              <li>Free parking</li>
		                              <li>Fitness centre</li>
																	<li>Room service</li>
																	<li>Restaurant</li>
		                            </ul>
		                          </div>
		                          <div className="facilities">
		                            <h4 className="specific-title"> Facilities </h4>
		                            <ul>
		                              <li>Farmacy </li>
		                              <li>Free Parking</li>
		                              <li>Reception</li>
		                              <li>Security</li>
		                            </ul>
		                          </div>
		                        </div>
		                        <div className="col-lg-4 col-6">
		                          <div className="accomodation">
		                            <h4 className="specific-title"> Features </h4>
		                            <ul>
		                              <li>02 Bed Apartments</li>
		                              <li>Three Bed / Premier Suite</li>
		                              <li>Two Duplex / Royal Suite</li>
																	<li>Studio Apartment</li>
		                            </ul>
		                          </div>
		                          <div className="bedrooms">
		                            <h4 className="specific-title"> Bedrooms </h4>
		                            <ul>
		                              <li>1 Queen Size</li>
		                              <li>2 Guests</li>
		                            </ul>
		                          </div>
		                        </div>
		                      </div>
		                    </div>
		                  </div>
		                  <div role="tabpanel" className="tab-pane fade" id="location">
		                    <h5 className="tab-title">Location</h5>
			 		 			<div style={{overflow: 'hidden', width: '585px', position: 'relative'}}><iframe width={585} height={580} src="https://maps.google.com/maps?width=1920&height=670&hl=en&q=London%2C%20United%20Kingdom+(Title)&ie=UTF8&t=&z=10&iwloc=B&output=embed" frameBorder={0} scrolling="no" marginHeight={0} marginWidth={0} /><div style={{position: 'absolute', width: '80%', bottom: '10px', left: 0, right: 0, marginLeft: 'auto', marginRight: 'auto', color: '#000', textAlign: 'center'}}><small style={{lineHeight: '1.8', fontSize: '2px', background: '#fff'}}>Powered by <a href="https://embedgooglemaps.com/es/">Embedgooglemaps ES</a> &amp; <a href="https://www.jubler.org/">increase website traffic</a></small></div><style dangerouslySetInnerHTML={{__html: "#gmap_canvas img{max-width:none!important;background:none!important}" }} /></div><br />
		                    <div className="room-location">
		                      <div className="row">
		                        <div className="col-4">
		                          <h6>City</h6>
		                          <p>Florida, USA</p>
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
		                  <div role="tabpanel" className="tab-pane fade" id="reviews">
		                    <h5 className="tab-title">Reviews</h5>
		                    <div className="reviews-count">
		                      <div className="row">
		                        <div className="col-4">
		                          <div className="count-num d-flex align-items-center justify-content-center">
		                            <p> <span>6.8</span>Superb</p>
		                          </div>
		                        </div>
		                        <div className="col-8">
		                          <div className="reviews-bars">
		                            {/* Single bar */}
		                            <div className="single-bar">
		                              <p className="bar-title">Acaommodation
		                                <span>8.0</span></p>
		                              <div className="bar" data-width="80%">
		                                <div className="bar-inner" />
		                              </div>
		                            </div>
		                            {/* Single bar */}
		                            <div className="single-bar">
		                              <p className="bar-title">Destination
		                                <span>6.0</span></p>
		                              <div className="bar" data-width="60%">
		                                <div className="bar-inner" />
		                              </div>
		                            </div>
		                            {/* Single bar */}
		                            <div className="single-bar">
		                              <p className="bar-title">Transport
		                                <span>7.0</span></p>
		                              <div className="bar" data-width="70%">
		                                <div className="bar-inner" />
		                              </div>
		                            </div>
		                            {/* Single bar */}
		                            <div className="single-bar">
		                              <p className="bar-title">Overall
		                                <span>9.0</span></p>
		                              <div className="bar" data-width="90%">
		                                <div className="bar-inner" />
		                              </div>
		                            </div>
		                          </div>
		                        </div>
		                      </div>
		                    </div>
		                    <div className="comment-area">
		                      <h5 className="tab-title">All Reviews</h5>
		                      <ul className="comment-list">
		                        <li>
		                          <div className="comment-autor">
		                            <img src={publicUrl+"assets/img/apartment/14.jpg"} alt="reviews" />
		                          </div>
		                          <div className="comment-desc">
		                            <h6>Alexzeder Alex <span className="comment-date"> 25 Feb
		                                2020</span></h6>
		                            <p>’ve tried my best to furnish my apartment with all the details one can expect. I hope it would make you feel like home away from home. You’ll surely enjoy your stay.</p>
		                            <a href="#" className="reply-comment">Reply <i className="fas fa-long-arrow-alt-right" /></a>
		                            <div className="autor-rating">
		                              <i className="fa fa-star" />
		                              <i className="fa fa-star" />
		                              <i className="fa fa-star" />
		                              <i className="fa fa-star" />
		                              <i className="fa fa-star-half-alt" />
		                            </div>
		                          </div>
		                        </li>
		                      </ul>
		                    </div>
		                    <div className="review-form">
		                      <h5 className="tab-title">Write a Review</h5>
		                      <div className="star-given-box">
		                        <ul className="list-inline">
		                          <li>
		                            <p className="st-title">Acaommodation</p>
		                            <p className="rating-box">
		                              <i className="fa fa-star" />
		                              <i className="fa fa-star" />
		                              <i className="fa fa-star" />
		                              <i className="fa fa-star" />
		                              <i className="fa fa-star" />
		                            </p>
		                          </li>
		                          <li>
		                            <p className="st-title">Destination</p>
		                            <p className="rating-box">
		                              <i className="fa fa-star" />
		                              <i className="fa fa-star" />
		                              <i className="fa fa-star" />
		                              <i className="fa fa-star" />
		                              <i className="fa fa-star" />
		                            </p>
		                          </li>
		                          <li>
		                            <p className="st-title">Transport</p>
		                            <p className="rating-box">
		                              <i className="fa fa-star" />
		                              <i className="fa fa-star" />
		                              <i className="fa fa-star" />
		                              <i className="fa fa-star" />
		                              <i className="fa fa-star" />
		                            </p>
		                          </li>
		                          <li>
		                            <p className="st-title">Overall</p>
		                            <p className="rating-box">
		                              <i className="fa fa-star" />
		                              <i className="fa fa-star" />
		                              <i className="fa fa-star" />
		                              <i className="fa fa-star" />
		                              <i className="fa fa-star" />
		                            </p>
		                          </li>
		                        </ul>
		                      </div>
		                      <form>
		                        <div className="input-wrap text-area">
		                          <textarea placeholder="Write Review" defaultValue={""} />
		                          <i className="fas fa-pencil-alt" />
		                        </div>
		                        <div className="input-wrap">
		                          <input type="text" placeholder="Name" id="name" />
		                          <i className="fas fa-user-alt" />
		                        </div>
		                        <div className="input-wrap">
		                          <input type="text" placeholder="Your Email" id="email" />
		                          <i className="far fa-envelope" />
		                        </div>
		                        <div className="input-wrap">
		                          <button type="submit" className="btn btn-block">Submit</button>
		                        </div>
		                      </form>
		                    </div>
		                  </div>
		                </div>
		              </div>
		            </div>
		          </div>
		        </div>
		      </div>
		      <div className="col-lg-4">
		        {/* Sidebars Area */}
		        <div className="sidebar-wrap">
		          <div className="widget booking-widget">
		            <h4 className="widget-title">$160.00 <span>Night</span></h4>
		            <form>
		              <div className="input-wrap">
		                <input type="text" placeholder="Location" id="f-location" />
		                <i className="fas fa-search" />
		              </div>
		              <div className="input-wrap">
		                <input type="text" placeholder="Arrive Date" id="arrive-date" />
		                <i className="far fa-calendar-alt" />
		              </div>
		              <div className="input-wrap">
		                <input type="text" placeholder="Depart Date" id="depart-date" />
		                <i className="far fa-calendar-alt" />
		              </div>
		              <div className="input-wrap">
		                <select name="guests" id="guests">
		                  <option value="Guests">Guests</option>
		                  <option value="Guests">Others</option>
		            
		                </select>
		              </div>
		              <div className="input-wrap">
		                <button type="submit" className="btn filled-btn btn-block">
		                  book now <i className="fas fa-long-arrow-alt-right" />
		                </button>
		              </div>
		            </form>
		          </div>
		          <div className="widget category-widget Elevations-go-top">
		            <h4 className="widget-title">Category</h4>
		            <div className="single-cat bg-img-center" style={{backgroundImage: 'url('+publicUrl+'assets/img/apartment/24.jpg)'}}>
		              <Link to="room-details">02 Bed Apartments</Link>
		            </div>
		            <div className="single-cat bg-img-center" style={{backgroundImage: 'url('+publicUrl+'assets/img/apartment/25.jpg)'}}>
		              <Link to="room-details">03 Bed Apartments</Link>
		            </div>
		            <div className="single-cat bg-img-center" style={{backgroundImage: 'url('+publicUrl+'assets/img/apartment/26.jpg)'}}>
		              <Link to="room-details">Three Bed / Premier Suite</Link>
		            </div>
		          </div>
		          <div className="widget banner-widget Elevations-go-top" style={{backgroundImage: 'url(assets/img/apartment/27.jpg)'}}>
		            <h2>Booking Your Latest apartment</h2>
		            <p>Give us a chance and you will be happy with the Elevations hotel services. </p>
		            <Link to="/room-details" className="btn filled-btn">BOOK NOW <i className="fas fa-long-arrow-alt-right" /></Link>
		          </div>
		        </div>
		      </div>
		    </div>
		  </div>
		</section>

        }
}

export default ApartmentDetail