import React, { Component } from 'react';
class BookingForm extends Component {

    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'
    
    return <section className="booking-section">
		  <div className="container">
		    <div className="booking-form-wrap bg-img-center section-bg">
		      <form id="bookIng-form">
		        <div className="row">
		          
		          <div className="col-lg-4 col-md-6">
		            <div className="input-wrap">
		              <input type="text" name="arrive-date" placeholder="Check In" id="arrive-date" />
		              <i className="far fa-calendar-alt" />
		            </div>
		          </div>
		          <div className="col-lg-4 col-md-6">
		            <div className="input-wrap">
		              <input type="text" name="depart-date" placeholder="Check Out" id="depart-date" />
		              <i className="far fa-calendar-alt" />
		            </div>
		          </div>
		          <div className="col-lg-4 col-md-6">
		            <div className="input-wrap">
		              <select name="guests" id="guests">
		                <option value="Children">Children</option>
		                <option value="Children">Others</option>
		              
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
		                book now <i className="fas fa-long-arrow-alt-right" />
		              </button>
		            </div>
		          </div>
		        </div>
		      </form>
		      
		    </div>
		  </div>
		</section>

        }
}

export default BookingForm