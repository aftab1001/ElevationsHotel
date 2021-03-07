import React, { Component } from 'react';

class Welcome extends Component {

    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'

    return <section className="welcome-section section-padding">
			  <div className="container">
			    <div className="row align-items-center no-gutters">
			      {/* Tile Gallery */}
			      <div className="col-lg-6">
			        <div className="tile-gallery">
			          <img src={publicUrl+"assets/img/tile-gallery/01.jpg"} alt="Tile Gallery" />
			          
			        </div>
			      </div>
			      {/* End tile Gallery */}
			      <div className="col-lg-5 offset-lg-1">
			        {/* Section Title */}
			        <div className="section-title">
			          <span className="title-top with-border">About Us</span>
			          <h1>Welcome To Elevations Modern Hotel Room Sells Services</h1>
			          <p>But I must explain to you how all this mistaken idea denouncing
			            pleasure and praising pain was born and I will give you a complec
			            ount of the system, and expound the actual teachin reatexplorer of the truth, the
			            master-builder of
			            human happiness. No ways
			            one rejdislikes, or avoids pleasure itself, because</p>
			        </div>
			        
			      </div>
			    </div>
			  </div>
			</section>

        }
}

export default Welcome