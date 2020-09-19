import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

class BookingForm extends Component {

    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'
        let imagealt = 'image'

    return <section className="booking-section">
		  <div className="container">
		    <div className="booking-form-wrap bg-img-center section-bg">
		      <form id="bookIng-form">
		        <div className="row">
		          <div className="col-lg-4 col-md-6">
		            <div className="input-wrap">
		              <input type="text" name="location" placeholder="Location" id="location" />
		              <i className="far fa-search" />
		            </div>
		          </div>
		          <div className="col-lg-4 col-md-6">
		            <div className="input-wrap">
		              <input type="text" name="arrive-date" placeholder="Arrive Date" id="arrive-date" />
		              <i className="far fa-calendar-alt" />
		            </div>
		          </div>
		          <div className="col-lg-4 col-md-6">
		            <div className="input-wrap">
		              <input type="text" name="depart-date" placeholder="Depart Date" id="depart-date" />
		              <i className="far fa-calendar-alt" />
		            </div>
		          </div>
		          <div className="col-lg-4 col-md-6">
		            <div className="input-wrap">
		              <select name="guests" id="guests">
		                <option value="Guests">Guests</option>
		                <option value="Guests">Others</option>
		              
		              </select>
		            </div>
		          </div>
		          <div className="col-lg-4 col-md-6">
		            <div className="input-wrap">
		              <select name="adult" id="adult">
		                <option value="Adult">Adult</option>
		                <option value="Adult">1</option>
		                <option value="Adult">2</option>
										<option value="Adult">3</option>
		                <option value="Adult">4</option>
										<option value="Adult">5</option>
										<option value="Adult">6</option>
										<option value="Adult">7</option>
										<option value="Adult">9</option>
		              </select>
		            </div>
		          </div>
		          <div className="col-lg-4 col-md-6">
		            <div className="input-wrap">
		              <button type="submit" className="btn filled-btn btn-block">
		                book now <i className="far fa-long-arrow-right" />
		              </button>
		            </div>
		          </div>
		        </div>
		      </form>
		      <div className="booking-shape-1">
		        <img src={publicUrl+"assets/img/shape/01.png"} alt="shape" />
		      </div>
		      <div className="booking-shape-2">
		        <img src={publicUrl+"assets/img/shape/02.png"} alt="shape" />
		      </div>
		      <div className="booking-shape-3">
		        <img src={publicUrl+"assets/img/shape/03.png"} alt="shape" />
		      </div>
		    </div>
		  </div>
		</section>

        }
}

export default BookingForm