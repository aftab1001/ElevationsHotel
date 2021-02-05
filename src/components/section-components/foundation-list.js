import React, { Component } from 'react';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import FoundationDonate from './foundationDonate'


const initialState = {
	slideActive: 0,
	nextSlide: 1,
	interval: 5000,
	totalSlides: 3
};

const startupScreen = (
	<div className="test"></div>
);
class FoundationList extends Component {
	componentDidMount() {
		let publicUrl = process.env.PUBLIC_URL + '/'
		const minscript = document.createElement("script");
		minscript.async = true;
		minscript.src = publicUrl + "assets/js/main.js";

		document.body.appendChild(minscript);
	}
	state = { ...initialState }
	timeout

	constructor(props) {
		super(props)
		this.timer = this.timer.bind(this)
	}

	handleModalShowHide() {
		this.setState({ showHide: !this.state.showHide })
	}
	
	timer(e) {
		clearTimeout(this.timeout)
		if (e.currentIndex !== null) {
			this.setState({ slideActive: e.currentIndex })
			this.setState({ nextSlide: e.currentIndex + 1 })
		}

		this.timeout = setTimeout(() => {
			const slideActive = this.state.slideActive + 1
			const nextSlide = this.state.nextSlide + 1
			slideActive <= this.state.totalSlides - 1 ? this.setState({ slideActive }) : this.setState({ slideActive: 0 })
			nextSlide <= this.state.totalSlides - 1 ? this.setState({ nextSlide }) : this.setState({ nextSlide: 0 })
		}, this.state.interval)
	}
	render() {

		let publicUrl = process.env.PUBLIC_URL + '/'
		let imagealt = 'image'

		return <div>

			<div className="g-nature-navbar">
				<nav className="navbar-nav navbar-expand-md navbar-light " >
					<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav">
						<span className="navbar-toggler-icon" />
					</button>
					<div className="collapse navbar-collapse" id="navbarNav">
						<ul className="navbar-nav mr-auto col-md-auto col-lg-auto">
							
								<a 	className="nav-link" href="#">
									<img src={publicUrl + "assets/img/logo.svg"} 
									className="mainAppLogo" alt="Elevations" />
								</a>
							
						</ul>

						<ul className="navbar-nav col-md-6 col-lg-6">
							<h1 className="banner_content upper_text banner-heading">
								Contribute to the World
							</h1>
						</ul>
						 
					<FoundationDonate/>
						
					</div>
				</nav>
			</div>


			<div id="slider-container">
				<AwesomeSlider className="clsSliderStyles"					
					startupScreen={startupScreen}
					selected={this.state.slideActive}
					onTransitionEnd={(e) => this.timer(e)}>
					<div data-src="assets/images/slider-1.jpg">

						<div className="banner_content">
							<p className="upper_text slider-upper-text-1">Give a hand</p>
							<h2 className="slider-heading-2">to make the better world</h2>
							<p className="slider-1-text">
								That don't lights. Blessed land spirit creature divide our made two
								itself upon you'll dominion waters man second good you they're divided upon winged were replenish night
</p>
						</div>
					</div>
					<div data-src="assets/images/slider-2.jpg" >
						<div className="banner_content">
							<p className="upper_text">Give a hand</p>
							<h2>to make the better world</h2>
							<p>
								That don't lights. Blessed land spirit creature divide our made two
								itself upon you'll dominion waters man second good you they're divided upon winged were replenish night
</p>
						</div>
					</div>
					<div data-src="assets/images/slider-3.jpg" >
						<div className="banner_content">
							<p className="upper_text">Give a hand</p>
							<h2>to make the better world</h2>
							<p>
								That don't lights. Blessed land spirit creature divide our made two
								itself upon you'll dominion waters man second good you they're divided upon winged were replenish night
</p>
						</div>
					</div>
					<div data-src="assets/images/slider-4.jpg" >
						<div className="banner_content">
							<p className="upper_text">Give a hand</p>
							<h2>to make the better world</h2>
							<p>
								That don't lights. Blessed land spirit creature divide our made two
								itself upon you'll dominion waters man second good you they're divided upon winged were replenish night
</p>
						</div>
					</div>
				</AwesomeSlider>
			</div>


			<div className="bg-separter" />
			<div className="container-section-bg">
				
				<div className="container-section">
					<div className="section-1">
						<div className="row">
							<div className="col-md-4 column-1">
								<br />
								<img src="assets/images/icon-service-1.png" alt="" width={80} height={80} /><br /><br />
								<h3 className="column-service-title">Save Our Forest</h3>
								<div className="column-service-content">
									<p>Cras justo odio, dapibus ac facilisis in, egestas eget quam. Cras mattis consectetur purus sit amet fermentum. Nulla vitae elit libero.&nbsp;Nullam quis risus eget urna mollis ornare vel eu leo.</p>
								</div>
								<a className="column-service-read-more" href="#">Learn More</a>
								<br /><br />
							</div>
							<div className="col-md-4 column-2">
								<br />
								<img src="assets/images/icon-service-2.png" alt="" width={80} height={80} /><br /><br />
								<h3 className="column-service-title">Save Our Forest</h3>
								<div className="column-service-content">
									<p>Cras justo odio, dapibus ac facilisis in, egestas eget quam. Cras mattis consectetur purus sit amet fermentum. Nulla vitae elit libero.&nbsp;Nullam quis risus eget urna mollis ornare vel eu leo.</p>
								</div>
								<a className="column-service-read-more" href="#">Learn More</a>
								<br /><br />
							</div>
							<div className="col-md-4">
								<br />
								<img src="assets/images/icon-service-3.png" alt="" width={80} height={80} /><br /><br />
								<h3 className="column-service-title">Save Our Forest</h3>
								<div className="column-service-content">
									<p>Cras justo odio, dapibus ac facilisis in, egestas eget quam. Cras mattis consectetur purus sit amet fermentum. Nulla vitae elit libero.&nbsp;Nullam quis risus eget urna mollis ornare vel eu leo.</p>
								</div>
								<a className="column-service-read-more" href="#">Learn More</a>
								<br /><br />
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className="container-section-2">
				<div className="container-section">
					<div className="row">
						<div className="col-md-6 action-ads-item-1">
							<h3 className="action-ads-title" style={{ color: '#facc2e' }}>Make Donation</h3>
							<div className="action-ads-caption">Your money can cure this earth</div>
							<div className="action-ads-divider" style={{ background: '#facc2e' }} />
							<div className="action-ads-content">
								<p>We are a larhge froup of people who powered movement fighting for a green and peaceful future for your land, forest, ocenas, foods, climate and pass the green earth to our children. Each one of us can make small changes in our lives, but together we can change the world.</p>
								<a className="action-ads-button" href="#" style={{ backgroundColor: '#fec428' }}>Donate Now</a>
								
							</div>
						</div>
						<div className="col-md-6 action-ads-item-2">
							<h3 className="action-ads-title" style={{ color: '#5dc269' }}>Stop Drilling, Need Action!</h3>
							<div className="action-ads-caption">Your voice does matter</div>
							<div className="action-ads-divider" style={{ background: '#5dc269' }} />
							<div className="action-ads-content">
								<p>The Obama administration just granted Shell’s final permit to drill in the Alaskan Arctic this summer despite overwhelming global public opposition and the obvious risks to Arctic communities, wildlife, and our climate. But this isn’t over. The President knows what’s at stake: his climate legacy.
							</p>
								<a className="action-ads-button" href="#" style={{ backgroundColor: '#5dc269' }}>Act Now!</a>
							</div>
						</div>
					</div>
				</div>
				<br /><br />
			</div>

			<div className="container-section-3">
				<div className="container-section">
					<br />
					<div className="item-title-head">
						<h3 className="item-title"><img src="assets/images/icon-5.png" className="projecctLogo" />Our Recent Projects</h3>
						<a className="item-title-link" href="#">More Projects</a>
						<div className="clear" />
					</div>
					<div className="bg-separter-2" />
					<br />
					<div className="row">
						<div className="col-md-3 section-3-col">
							<img src="assets/images/shutterstock_161515241-540x326.jpg" className="project-image" />
							<h3 className="portfolio-title"><a href="#">Wind Energy</a></h3>
							<div className="portfolio-title-tag">
								<a href="#">ENVIRONMENT, RENEWABLE ENERGY</a>
							</div>
							<div className="portfolio-content">Lorem ipsum dolor sit amet, consectetur adipisici elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua....
						</div>
						</div>
						<div className="col-md-3 section-3-col">
							<img src="assets/images/shutterstock_133689230-540x326.jpg" className="project-image" />
							<h3 className="portfolio-title"><a href="#">Elephant Sanctuary</a></h3>
							<div className="portfolio-title-tag">
								<a href="#">African, Animals</a>
							</div>
							<div className="portfolio-content">Lorem ipsum dolor sit amet, consectetur adipisici elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua....
						</div>
						</div>
						<div className="col-md-3 section-3-col">
							<img src="assets/images/shutterstock_53600221-540x326.jpg" className="project-image" />
							<h3 className="portfolio-title"><a href="#">Conservation Volunteer</a></h3>
							<div className="portfolio-title-tag">
								<a href="#">Cleaning, Volunteer</a>
							</div>
							<div className="portfolio-content">Lorem ipsum dolor sit amet, consectetur adipisici elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua....
						</div>
						</div>
						<div className="col-md-3 section-3-col">
							<img src="assets/images/shutterstock_124871620-540x326.jpg" className="project-image" />
							<h3 className="portfolio-title"><a href="#">Engery Conservation</a></h3>
							<div className="portfolio-title-tag">
								<a href="#">ENVIRONMENT, RENEWABLE ENERGY</a>
							</div>
							<div className="portfolio-content">Lorem ipsum dolor sit amet, consectetur adipisici elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua....
						</div>
						</div>
					</div>
				</div>
			</div>
			<br />
			<div className="row section-4">
				<div className="col-md-6 section-4-side-1">
				</div>
				<div className="col-md-6 section-4-side-2">
					<br />
					<div className="section-4-items">
						<div className="list-with-icon">
							<div className="list-with-icon-image"><img src="assets/images/icon-1.png" alt="" width={46} height={46} /></div>
							<div className="list-with-icon-title">Mollis Mattis</div>
							<div className="list-with-icon-caption">
								<p>Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Sed posuere consectetur est at lobortis. Nullam quis risus eget urna mollis ornare vel eu leo. Nullam quis risus eget urna mollis ornare vel eu leo.</p>
							</div>
						</div>
						<br /><br />
						<div className="list-with-icon">
							<div className="list-with-icon-image"><img src="assets/images/icon-2.png" alt="" width={46} height={46} /></div>
							<div className="list-with-icon-title">Mollis Mattis</div>
							<div className="list-with-icon-caption">
								<p>Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Sed posuere consectetur est at lobortis. Nullam quis risus eget urna mollis ornare vel eu leo. Nullam quis risus eget urna mollis ornare vel eu leo.</p>
							</div>
						</div>
						<br /><br />
						<div className="list-with-icon">
							<div className="list-with-icon-image"><img src="assets/images/icon-3.png" alt="" width={46} height={46} /></div>
							<div className="list-with-icon-title">Mollis Mattis</div>
							<div className="list-with-icon-caption">
								<p>Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Sed posuere consectetur est at lobortis. Nullam quis risus eget urna mollis ornare vel eu leo. Nullam quis risus eget urna mollis ornare vel eu leo.</p>
							</div>
						</div>
						<br />
					</div>
				</div>
			</div>
			<div className="section-5">
				<div className="container-section">
					<div className="row">
						<div className="col-md-3 section-5-content">
							<img src="assets/images/icon-4.png" className="section-5-images" /><br /><br />
							<div className="section-5-number-title">
								1,000,000
						</div>
							<div className="section-5-number-label">
								Acres Conserved
						</div>
						</div>
						<div className="col-md-3">
							<img src="assets/images/icon-5.png" className="section-5-images" /><br /><br />
							<div className="section-5-number-title">
								700
						</div>
							<div className="section-5-number-label">
								Scientists
						</div>
						</div>
						<div className="col-md-3">
							<img src="assets/images/icon-1.png" className="section-5-images" /><br /><br />
							<div className="section-5-number-title">
								99.99%
						</div>
							<div className="section-5-number-label">
								Recycling
						</div>
						</div>
						<div className="col-md-3">
							<img src="assets/images/icon-2.png" className="section-5-images" /><br /><br />
							<div className="section-5-number-title">
								2000MW
						</div>
							<div className="section-5-number-label">
								Solar Power
						</div>
						</div>
					</div>
					<br /><br />
					<div className="bg-separter-2" />
					<br />
					<h2 className="stunning-item-title">The only way to make this happened is to take action!</h2>
					<div className="stunning-item-caption">
						<p>Praesent commodo cursus magna, vel scelerisque nislet.</p>
					</div>
					<br />
					<a className="action-ads-button stunning-item-button-1" href="#">Donate Now</a>
					<a className="action-ads-button stunning-item-button-2" href="#">Act Now!</a>
				</div>
			</div>
			<div className="section-6">
				<div className="container-section section-6-content">
					<div className="row">
						<div className="col-md-3 section-6-column-content">
							<img src="assets/images/logo-light.png" style={{ width: '170px' }} alt="" /><br /><br />
							<p className="footer-content">Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Morbi leo risus, porta. Etiam porta sem malesuada magna mollis euismod.</p>
						</div>
						<div className="col-md-3 section-6-column-content">
							<h3 className="footer-heading">
								Contact Info
						</h3>
							<p>Address: 184 Main Collins Street West Victoria 8007</p>
							<p> <span><i className="fas fa-phone-alt" /></span>  +1800-222-3333</p>
							<p> <span><i className="fas fa-mobile" /></span>  +1833-232-3443</p>
							<p> <span><i className="fas fa-envelope" /></span>  contact@greennaturewp.com</p>
						</div>
						<div className="col-md-3 section-6-column-content">
							<h3 className="footer-heading">
								Recent Works
							<div className="recent-posts">
									<a href="#"><img src="assets/images/shutterstock_161515241-150x150.jpg" className="recent-posts-image" /></a>
									<a href="#"><img src="assets/images/shutterstock_133689230-150x150.jpg" className="recent-posts-image" /></a>
									<a href="#"><img src="assets/images/shutterstock_53600221-150x150.jpg" className="recent-posts-image" /></a>
									<a href="#"><img src="assets/images/shutterstock_124871620-150x150.jpg" className="recent-posts-image" /></a>
									<a href="#"><img src="assets/images/shutterstock_281995004-150x150.jpg" className="recent-posts-image" /></a>
									<a href="#"><img src="assets/images/shutterstock_256181956-150x150.jpg" className="recent-posts-image" /></a>
								</div>
							</h3>
						</div>
						<div className="col-md-3 section-6-column-content">
							<h3 className="footer-heading">
							</h3>
						</div>
					</div>
				</div>
			</div>
			<div className="section-7">
				<div className="container-section">
					<div className="row">
						<div className="col-md-3">
							<div className="footer-social-icons">
								<a href="#"><span className="social-media-icons"><i className="fab fa-facebook-f" /></span></a>
								<a href="#"><span className="social-media-icons"><i className="fab fa-twitter" /></span></a>
								<a href="#"><span className="social-media-icons"><i className="fab fa-pinterest" /></span></a>
								<a href="#"><span className="social-media-icons"><i className="fab fa-google-plus-g" /></span></a>
								<a href="#"><span className="social-media-icons"><i className="fab fa-instagram" /></span></a>
							</div>
						</div>
						<div className="col-md-3" />
						<div className="col-md-3" />
						<div className="col-md-3">
							<p className="copyright-content">
								Copyright 2016 GoodLayers, All Right Reserved
						</p>
						</div>
					</div>
				</div>
			</div>
		</div>


	}
}

export default FoundationList