import React, { Component } from 'react';
class WhyCooseUsSingle extends Component {

    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'
       

    return <section className="wcu-section section-padding">
  <div className="container">
    <div className="row align-items-center">
      <div className="col-lg-6">
        {/* Section Title */}
        <div className="section-title">
          <span className="title-top">Why Choose Us</span>
          <h1>We Provides <br /> Professional Service</h1>
        </div>
        <div className="feature-accordion accordion" id="featureAccordion">
          <div className="card">
            <div className="card-header ">
              <button type="button" className="active-accordion" data-toggle="collapse" data-target="#featureOne">
              Accommodation
                <span className="open-icon"><i className="far fa-eye-slash" /></span>
                <span className="close-icon"><i className="far fa-eye" /></span>
              </button>
            </div>
            <div id="featureOne" className="collapse show" data-parent="#featureAccordion">
              <div className="card-body">
              With all the natural elements taking centre stage, Elevation Hotel rooms are all self contained with some rooms having balcon designed to enhance the views of the green coverings of the hotel gardens, nestled on Kampala Highway and the Residential vicinities.
              </div>
            </div>
          </div>
          <div className="card">
            <div className="card-header">
              <button type="button" data-toggle="collapse" data-target="#featureTwo">
              Personal Security
                <span className="open-icon"><i className="far fa-eye-slash" /></span>
                <span className="close-icon"><i className="far fa-eye" /></span>
              </button>
            </div>
            <div id="featureTwo" className="collapse" data-parent="#featureAccordion">
              <div className="card-body">
              The hotel will ensure that guests and stakeholders utilizing our facilities are accorded all the necessary security for protection against any harm or loss within the premises of the hotel. The hotel guide and notices are always availed to help inform our clients of their obligations and best comfort in this regard.
              </div>
            </div>
          </div>
          <div className="card">
            <div className="card-header">
              <button type="button" data-toggle="collapse" data-target="#featureThree">
              Conferences and Events
                <span className="open-icon"><i className="far fa-eye-slash" /></span>
                <span className="close-icon"><i className="far fa-eye" /></span>
              </button>
            </div>
            <div id="featureThree" className="collapse" data-parent="#featureAccordion">
              <div className="card-body">
              The Hotel has fine venues for meetings/conferences, private parties, banquets and corporate functions. 
              </div>
            </div>
          </div>
          <div className="card">
            <div className="card-header">
              <button type="button" data-toggle="collapse" data-target="#featureFour">
              Payment flexibility for our Services:
                <span className="open-icon"><i className="far fa-eye-slash" /></span>
                <span className="close-icon"><i className="far fa-eye" /></span>
              </button>
            </div>
            <div id="featureFour" className="collapse" data-parent="#featureAccordion">
              <div className="card-body">
              ou can decide to Pay using a Credit Card (Visa, Master card, Visa electron, Union pay, American express, Mobile Money Transfers), Cash, etc.
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-6">
        <div className="feature-accordion-img text-right">
          <img src={publicUrl+"assets/img/tile-gallery/03.jpg"} alt="Image single" />
          <div className="degin-shape">
            <div className="shape-one">
              <img src={publicUrl+"assets/img/shape/11.png"} alt="Shape" />
            </div>
            <div className="shape-two">
              <img src={publicUrl+"assets/img/shape/12.png" }alt="Shape" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>


        }
}

export default WhyCooseUsSingle