import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

class ClientV2 extends Component {

    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'
        let imagealt = 'image'

    return <section className="feedback-section-two section-padding">
		  <div className="container">
		    {/* Section Title */}
		    <div className="section-title text-center">
		      <span className="title-top">Clients Feedback</span>
		      <h1>Our Satisfaction People Say <br /> About Our Services</h1>
		    </div>
		    <div className="feedback-slider-two" id="feedSliderTWo">
		      <div className="single-feedback-slide">
		        <div className="row">
		          <div className="col-lg-6">
		            <div className="client-big-img">
		              <img src={publicUrl+"assets/img/man-image/01.jpg"} alt="Clients" />
		            </div>
		          </div>
		          <div className="col-lg-5 offset-lg-1">
		            <div className="feedback-desc">
		              <div className="feedback-client-desc d-flex align-items-center">
		                <div className="client-img">
		                  <img src={publicUrl+"assets/img/man-image/man-small-02.png"} alt="Clients" />
		                </div>
		                <div className="client-name">
		                  <h3>Cristian  </h3>
		                  <span className="client-job">Business Manager</span>
		                </div>
		              </div>
		              <p>
					  We all have choices on where we spend our hard earned money. In America, most people get very limited vacation time and when you've been saving all year for that one or two week vacation with your family you have the right to expect to be taken care of. Elevations takes care of you. In fact, in my experience Elevations goes above and beyond to always cater to the needs of their customers so their guests can have one less thing to worry about when they finally have free time to relax with family and friends. 
					  </p>
		              <span className="quote-icon"><img src={publicUrl+"assets/img/icons/quote.png"} alt="quote" /></span>
		            </div>
		          </div>
		        </div>
		      </div>
		      <div className="single-feedback-slide">
		        <div className="row">
		          <div className="col-lg-6">
		            <div className="client-big-img">
		              <img src={publicUrl+"assets/img/man-image/01.jpg"} alt="Clients" />
		            </div>
		          </div>
		          <div className="col-lg-5 offset-lg-1">
		            <div className="feedback-desc">
		              <div className="feedback-client-desc d-flex align-items-center">
		                <div className="client-img">
		                  <img src={publicUrl+"assets/img/man-image/man-small-02.png"} alt="Clients" />
		                </div>
		                <div className="client-name">
		                  <h3>Fred </h3>
		                  <span className="client-job">Tourist</span>
		                </div>
		              </div>
		              <p>
					  Quality for rooms and service were very good. I felt safe and well protected. Shops and restaurants inside the hotel were very well priced and very good quality as well.
					  </p>
		              <span className="quote-icon"><img src="assets/img/icons/quote.png" alt="quote" /></span>
		            </div>
		          </div>
		        </div>
		      </div>
		      <div className="single-feedback-slide">
		        <div className="row">
		          <div className="col-lg-6">
		            <div className="client-big-img">
		              <img src={publicUrl+"assets/img/man-image/01.jpg"} alt="Clients" />
		            </div>
		          </div>
		          <div className="col-lg-5 offset-lg-1">
		            <div className="feedback-desc">
		              <div className="feedback-client-desc d-flex align-items-center">
		                <div className="client-img">
		                  <img src={publicUrl+"assets/img/man-image/man-small-02.png"} alt="Clients" />
		                </div>
		                <div className="client-name">
		                  <h3>George </h3>
		                  <span className="client-job">Tourist</span>
		                </div>
		              </div>
		              <p>
					  During my business travel days, if I were visiting a city I’ve never been to and have no idea as to the safety or the cleanliness I would always choose a Elevations Hotel. Why? Because could always be assured that the sheets on the bed were changed. There was always a restaurant either in the Hotel or next door, their safety procedures are superior. 
					  </p>
		              <span className="quote-icon"><img src="assets/img/icons/quote.png" alt="quote" /></span>
		            </div>
		          </div>
		        </div>
		      </div>
		      <div className="single-feedback-slide">
		        <div className="row">
		          <div className="col-lg-6">
		            <div className="client-big-img">
		              <img src={publicUrl+"assets/img/man-image/01.jpg"} alt="Clients" />
		            </div>
		          </div>
		          <div className="col-lg-5 offset-lg-1">
		            <div className="feedback-desc">
		              <div className="feedback-client-desc d-flex align-items-center">
		                <div className="client-img">
		                  <img src={publicUrl+"assets/img/man-image/man-small-02.png"} alt="Clients" />
		                </div>
		                <div className="client-name">
		                  <h3>Michelle</h3>
		                  <span className="client-job">Tourist</span>
		                </div>
		              </div>
		              <p>Elevations has always provided high quality service at an affordable price. Comfort along with friendly, personal service is always to be expected at the many Elevations Hotels I've had the pleasure of staying in.</p>
		              <span className="quote-icon"><img src="assets/img/icons/quote.png" alt="quote" /></span>
		            </div>
		          </div>
		        </div>
		      </div>
		    </div>
		  </div>
		</section>


        }
}

export default ClientV2