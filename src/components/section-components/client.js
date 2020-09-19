import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

class Client extends Component {

    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'
        let imagealt = 'image'

    return <section className="feedback-section section-padding">
		  <div className="container">
		    {/* Section Title */}
		    <div className="section-title text-center">
		      <span className="title-top">Clients Feedback</span>
		      <h1>Our Satisfaction People Say <br /> About Our Services </h1>
		    </div>
		    <div className="feadback-slide row" id="feedbackSlideActive">
		      <div className="col-lg-6">
		        <div className="single-feedback-box">
				<p>Very good service.This hotel is a great location.Easy to find any transportation and very near to market. Awesome stay.</p>
		          <h5 className="feedback-author">James M. Varney</h5>
		        </div>
		      </div>
		      <div className="col-lg-6">
		        <div className="single-feedback-box">
				<p>Excellent hotel. Good food and clean rooms with affordable prices and very good staffs . This hotel is a great location.</p>
		          <h5 className="feedback-author">David K. Vinson</h5>
		        </div>
		      </div>
		      <div className="col-lg-6">
		        <div className="single-feedback-box">
		          <p>The hotel is very nice for stay also the hotel staff is very very co operative and good
Hotel room is very neat and clean.</p>
		          <h5 className="feedback-author">Sekhar Sain</h5>
		        </div>
		      </div>
		      <div className="col-lg-6">
		        <div className="single-feedback-box">
		          <p>It was a great stay there with awesome food and liesure.The service was great and ontime. A very good place to stay.</p>
		          <h5 className="feedback-author">Deepak Saini</h5>
		        </div>
		      </div>
		      <div className="col-lg-6">
		        <div className="single-feedback-box">
		          <p>Hotel is clean as well as rooms and restaurant. Although in the center, it is very silent. Service is perfect. Breakfast is good with large variety. </p>
		          <h5 className="feedback-author">Paul</h5>
		        </div>
		      </div>
		      <div className="col-lg-6">
		        <div className="single-feedback-box">
		          <p>I love this place! Only stayed there once, so far, but will again, someday! Great location, great staff, great food, great rooms, great rates!</p>
		          <h5 className="feedback-author">Joanna</h5>
		        </div>
		      </div>
		      <div className="col-lg-6">
		        <div className="single-feedback-box">
		          <p>We were delighted by the very friendly and helpful reception staff in this hotel. They gave us advice about how to see the attractions. </p>
		          <h5 className="feedback-author">Chris</h5>
		        </div>
		      </div>
		      <div className="col-lg-6">
		        <div className="single-feedback-box">
		          <p>A nice cosy hotel which was located in the city center. A very convenient location because all the attractions were at a walking distance.</p>
		          <h5 className="feedback-author">JP</h5>
		        </div>
		      </div>
		    </div>
		  </div>
		</section>


        }
}

export default Client