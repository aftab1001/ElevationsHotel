import React, { Component } from 'react';

class ContactForm extends Component {

    render() {

    return <section className="contact-form">
		  <div className="container ">
		    <div className="contact-form-wrap section-bg">
		      <h2 className="form-title">Send A Message</h2>
		      <form>
		        <div className="row">
		          <div className="col-md-4 col-12">
		            <div className="input-wrap">
		              <input type="text" placeholder="Your Full Name" id="name" name="name" />
		              <i className="fas fa-user-alt" />
		            </div>
		          </div>
		          <div className="col-md-4 col-12">
		            <div className="input-wrap">
		              <input type="text" placeholder="Your Email" id="email" name="email" />
		              <i className="far fa-envelope" />
		            </div>
		          </div>
		          <div className="col-md-4 col-12">
		            <div className="input-wrap">
		              <input type="text" placeholder="Your Full Name" id="website" name="website" />
		              <i className="fab fa-wordpress" />
		            </div>
		          </div>
		          <div className="col-12">
		            <div className="input-wrap text-area">
		              <textarea placeholder="Write Message" name="msg" defaultValue={""} />
		              <i className="fas fa-pencil-alt" />
		            </div>
		          </div>
		          <div className="col-12 text-center">
		            <button type="submit" className="btn filled-btn">Send Message <i className="fas fa-long-arrow-alt-right" /></button>
		          </div>
		        </div>
		      </form>
		    </div>
		  </div>
		</section>


        }
}

export default ContactForm