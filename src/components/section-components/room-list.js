import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import BookNow from './../global-components/BookNow';

class RoomList extends Component {

    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'
   

    return <section className="rooms-warp list-view section-bg section-padding ">
		  <div className="container">
		    <div className="row">
		      <div className="col-lg-12">
		        {/* Single Room */}
		        <div className="single-room list-style Elevations-go-top">
		          <div className="row align-items-center no-gutters">
		            <div className="col-lg-6">
		              <div className="room-thumb">
		                <img src={publicUrl+"assets/img/rooms/10.jpg"} alt="Room" />
		              </div>
		            </div>
		            <div className="col-lg-6">
		              <div className="room-desc">
		                <div className="room-cat">
		                  <p>Guest House</p>
		                </div>
		                <h4><Link to="/moredetails">Modern Guest Rooms</Link></h4>
		                <ul className="room-info list-inline">
		                  <li><i className="fas fa-bed" />3 Bed</li>
		                  <li><i className="fas fa-bath" />2 Baths</li>
		                  <li><i className="fas fa-ruler-combined" />72 m</li>
		                </ul>
		                <div className="room-price">
		                  <p>$180.00</p>
		                </div>
						<BookNow type="room" dataId=""/>
		              </div>
		            </div>
		          </div>
		        </div>
		        {/* Single Room */}
		        <div className="single-room list-style Elevations-go-top">
		          <div className="row align-items-center no-gutters">
		            <div className="col-lg-6">
		              <div className="room-thumb">
		                <img src={publicUrl+"assets/img/rooms/11.jpg"} alt="Room" />
		              </div>
		            </div>
		            <div className="col-lg-6">
		              <div className="room-desc">
		                <div className="room-cat">
		                  <p>Meeting Room</p>
		                </div>
		                <h4><Link to="/moredetails">Conference Room</Link></h4>
		                <ul className="room-info list-inline">
		                  <li><i className="fas fa-bed" />3 Bed</li>
		                  <li><i className="fas fa-bath" />2 Baths</li>
		                  <li><i className="fas fa-ruler-combined" />72 m</li>
		                </ul>
		                <div className="room-price">
		                  <p>$180.00</p>
		                </div>
						<BookNow type="room" dataId=""/>
		              </div>
		            </div>
		          </div>
		        </div>
		        {/* Single Room */}
		        <div className="single-room list-style Elevations-go-top">
		          <div className="row align-items-center no-gutters">
		            <div className="col-lg-6">
		              <div className="room-thumb">
		                <img src={publicUrl+"assets/img/rooms/12.jpg"} alt="Room" />
		              </div>
		            </div>
		            <div className="col-lg-6">
		              <div className="room-desc">
		                <div className="room-cat">
		                  <p>Guest House</p>
		                </div>
		                <h4><Link to="/moredetails">Deluxe Couple Room</Link></h4>
		                <ul className="room-info list-inline">
		                  <li><i className="fas fa-bed" />3 Bed</li>
		                  <li><i className="fas fa-bath" />2 Baths</li>
		                  <li><i className="fas fa-ruler-combined" />72 m</li>
		                </ul>
		                <div className="room-price">
		                  <p>$180.00</p>
		                </div>
						<BookNow type="room" dataId=""/>
		              </div>
		            </div>
		          </div>
		        </div>
		        {/* Single Room */}
		        <div className="single-room list-style Elevations-go-top">
		          <div className="row align-items-center no-gutters">
		            <div className="col-lg-6">
		              <div className="room-thumb">
		                <img src={publicUrl+"assets/img/rooms/13.jpg"} alt="Room" />
		              </div>
		            </div>
		            <div className="col-lg-6">
		              <div className="room-desc">
		                <div className="room-cat">
		                  <p>Meeting Room</p>
		                </div>
		                <h4><Link to="/moredetails">Conference Room</Link></h4>
		                <ul className="room-info list-inline">
		                  <li><i className="fas fa-bed" />3 Bed</li>
		                  <li><i className="fas fa-bath" />2 Baths</li>
		                  <li><i className="fas fa-ruler-combined" />72 m</li>
		                </ul>
		                <div className="room-price">
		                  <p>$180.00</p>
		                </div>
						<BookNow type="room" dataId=""/>
		              </div>
		            </div>
		          </div>
		        </div>
		        {/* Single Room */}
		        <div className="single-room list-style Elevations-go-top">
		          <div className="row align-items-center no-gutters">
		            <div className="col-lg-6">
		              <div className="room-thumb">
		                <img src={publicUrl+"assets/img/rooms/14.jpg"} alt="Room" />
		              </div>
		            </div>
		            <div className="col-lg-6">
		              <div className="room-desc">
		                <div className="room-cat">
		                  <p>Guest House</p>
		                </div>
		                <h4><Link to="/moredetails">Deluxe Couple Room</Link></h4>
		                <ul className="room-info list-inline">
		                  <li><i className="fas fa-bed" />3 Bed</li>
		                  <li><i className="fas fa-bath" />2 Baths</li>
		                  <li><i className="fas fa-ruler-combined" />72 m</li>
		                </ul>
		                <div className="room-price">
		                  <p>$180.00</p>
		                </div>
						<BookNow type="room" dataId=""/>
		              </div>
		            </div>
		          </div>
		        </div>
		      </div>
		      
		    </div>
		    <div className="row">
		      <div className="col-12">
		        <div className="pagination-wrap">
		          <ul className="list-inline">
		            <li><a href=""><i className="fas fa-angle-left" /></a></li>
		            <li className="active"><a href="">01</a></li>
		            <li><a href="">02</a></li>
		            <li><a href="">03</a></li>
		            <li><a href=""><i className="fas fa-angle-right" /></a></li>
		          </ul>
		        </div>
		      </div>
		    </div>
		  </div>
		</section>


        }
}

export default RoomList