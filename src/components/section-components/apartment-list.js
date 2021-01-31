import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ApartmentList extends Component {

	render() {

		let publicUrl = process.env.PUBLIC_URL + '/'		
		return <section className="rooms-warp list-view section-bg section-padding ">
			<div className="container">
				<div className="row">
					<div className="col-lg-12">
						{/* Single Room */}
						<div className="single-room list-style Elevations-go-top">
							<div className="row align-items-center no-gutters">
								<div className="col-lg-6">
									<div className="room-thumb">
										<img src={publicUrl + "assets/img/apartment/01.jpg"} alt="Room" />
									</div>
								</div>
								<div className="col-lg-6">
									<div className="room-desc">
										<div className="room-cat">
											<p>Guest House</p>
										</div>
										<h4><Link to="/room-details">02 Bed Apartments</Link></h4>
										<ul className="room-info list-inline">
											<li><i className="fas fa-bed" />2 Bed</li>
											<li><i className="fas fa-bath" />1 Baths</li>
											<li><i className="fas fa-ruler-combined" />72 m</li>
										</ul>
										<div className="room-price">
											<p>$180.00</p>
										</div>
									</div>
								</div>
							</div>
						</div>
						{/* Single Room */}
						<div className="single-room list-style Elevations-go-top">
							<div className="row align-items-center no-gutters">
								<div className="col-lg-6">
									<div className="room-thumb">
										<img src={publicUrl + "assets/img/apartment/02.jpg"} alt="Room" />
									</div>
								</div>
								<div className="col-lg-6">
									<div className="room-desc">
										<div className="room-cat">
											<p>Meeting Room</p>
										</div>
										<h4><Link to="/room-details">Conference Room</Link></h4>
										<ul className="room-info list-inline">
											<li><i className="fas fa-bed" />3 Bed</li>
											<li><i className="fas fa-bath" />2 Baths</li>
											<li><i className="fas fa-ruler-combined" />99 m</li>
										</ul>
										<div className="room-price">
											<p>$220.00</p>
										</div>
									</div>
								</div>
							</div>
						</div>
						{/* Single Room */}
						<div className="single-room list-style Elevations-go-top">
							<div className="row align-items-center no-gutters">
								<div className="col-lg-6">
									<div className="room-thumb">
										<img src={publicUrl + "assets/img/apartment/15.jpg"} alt="Room" />
									</div>
								</div>
								<div className="col-lg-6">
									<div className="room-desc">
										<div className="room-cat">
											<p>Guest House</p>
										</div>
										<h4><Link to="/room-details">Three Bed / Premier Suite</Link></h4>
										<ul className="room-info list-inline">
											<li><i className="fas fa-bed" />3 Bed</li>
											<li><i className="fas fa-bath" />2 Baths</li>
											<li><i className="fas fa-ruler-combined" />110 m</li>
										</ul>
										<div className="room-price">
											<p>$240.00</p>
										</div>
									</div>
								</div>
							</div>
						</div>
						{/* Single Room */}
						<div className="single-room list-style Elevations-go-top">
							<div className="row align-items-center no-gutters">
								<div className="col-lg-6">
									<div className="room-thumb">
										<img src={publicUrl + "assets/img/apartment/19.jpg"} alt="Room" />
									</div>
								</div>
								<div className="col-lg-6">
									<div className="room-desc">
										<div className="room-cat">
											<p>Meeting Room</p>
										</div>
										<h4><Link to="/room-details">Two Duplex / Royal Suite</Link></h4>
										<ul className="room-info list-inline">
											<li><i className="fas fa-bed" />2 Bed</li>
											<li><i className="fas fa-bath" />2 Baths</li>
											<li><i className="fas fa-ruler-combined" />80 m</li>
										</ul>
										<div className="room-price">
											<p>$180.00</p>
										</div>
									</div>
								</div>
							</div>
						</div>
						{/* Single Room */}
						<div className="single-room list-style Elevations-go-top">
							<div className="row align-items-center no-gutters">
								<div className="col-lg-6">
									<div className="room-thumb">
										<img src={publicUrl + "assets/img/apartment/22.jpg"} alt="Room" />
									</div>
								</div>
								<div className="col-lg-6">
									<div className="room-desc">
										<div className="room-cat">
											<p>Guest House</p>
										</div>
										<h4><Link to="/room-details">Studio Apartment</Link></h4>
										<ul className="room-info list-inline">
											<li><i className="fas fa-bed" />1 Double Bed</li>
											<li><i className="fas fa-bath" />1 Baths</li>
											<li><i className="fas fa-ruler-combined" />60 m</li>
										</ul>
										<div className="room-price">
											<p>$150.00</p>
										</div>
									</div>
								</div>
							</div>
						</div>
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
										<input type="text" placeholder="Arrive Date" id="arrive-date" />
										<i className="far fa-calendar-alt" />
									</div>
									<div className="input-wrap">
										<input type="text" placeholder="Depart Date" id="depart-date" />
										<i className="far fa-calendar-alt" />
									</div>
									<div className="input-wrap">
										<select name="rooms" id="rooms" defaultValue={'DEFAULT'}>
											<option disabled value="DEFAULT">Apartments</option>
											<option value="1">1</option>
											<option value="2">2</option>
											<option value="3">3</option>
										</select>
									</div>
									<div className="input-wrap">
										<select name="adults" id="adults" defaultValue={'DEFAULT'}>
											<option value="default" disabled >Adults</option>											
											<option value={1}>1</option>
											<option value={2}>2</option>
											<option value={3}>3</option>
											<option value={3}>4</option>
										</select>
									</div>
									<div className="input-wrap">
										<select name="child" id="child" defaultValue={'Children'}>
											<option disabled defaultValue={'Children'}>Children</option>
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
												<input type="text" id="amount" name="price" placeholder="Add Your Price" />
											</div>
										</div>
									</div>
									<div className="input-wrap">
										<div className="checkboxes">
											<p>
												<input type="checkbox" defaultValue="guest-room" id="guest-room" />
												<label htmlFor="guest-room">One-Bedroom Apartment</label>
											</p>
											<p>
												<input type="checkbox" defaultValue="meeting-room" id="meeting-room" />
												<label htmlFor="meeting-room">Two-Bedroom Apartment</label>
											</p>
											<p>
												<input type="checkbox" defaultValue="meeting-room" id="meeting-room" />
												<label htmlFor="meeting-room">Three-Bedroom Apartment</label>
											</p>
											<p>
												<input type="checkbox" defaultValue="wifi" id="wifi" />
												<label htmlFor="wifi">Free Wifi</label>
											</p>
											<p>
												<input type="checkbox" defaultValue="pet" id="pet" />
												<label htmlFor="pet">Pet Friendly</label>
											</p>
											<p>
												<input type="checkbox" defaultValue="parking" id="parking" />
												<label htmlFor="parking">Parking</label>
											</p>
											<p>
												<input type="checkbox" defaultValue="pureair" id="pureair" />
												<label htmlFor="pureair">Pure Air</label>
											</p>
											<p>
												<input type="checkbox" defaultValue="airc" id="airc" />
												<label htmlFor="airc">Air Conditioner</label>
											</p>
											<p>
												<input type="checkbox" defaultValue="nosmoke" id="nosmoke" />
												<label htmlFor="nosmoke">No Smoking</label>
											</p>
										</div>
									</div>
									<div className="input-wrap">
										<button type="submit" className="btn filled-btn btn-block">
											Filter Results <i className="fas fa-long-arrow-alt-right" />
										</button>
									</div>
								</form>
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

export default ApartmentList