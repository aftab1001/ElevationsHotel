import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

class Brand extends Component {

    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'
        let imagealt = 'image'
        let Customclass = this.props.Customclass ? this.props.Customclass : ''

    return <section className={"brands-section "+Customclass}>
		  <div className="container">
		    <div id="brandsSlideActive" className="row">
		      <div className="col-lg-2">
		        <div className="brand-item text-center">
		          <img src={publicUrl+"assets/img/brands/01.png"} alt="Brands" />
		        </div>
		      </div>
		      <div className="col-lg-2">
		        <div className="brand-item text-center">
		          <img src={publicUrl+"assets/img/brands/02.png"} alt="Brands" />
		        </div>
		      </div>
		      <div className="col-lg-2">
		        <div className="brand-item text-center">
		          <img src={publicUrl+"assets/img/brands/03.png"} alt="Brands" />
		        </div>
		      </div>
		      <div className="col-lg-2">
		        <div className="brand-item text-center">
		          <img src={publicUrl+"assets/img/brands/04.png"} alt="Brands" />
		        </div>
		      </div>
		      <div className="col-lg-2">
		        <div className="brand-item text-center">
		          <img src={publicUrl+"assets/img/brands/05.png"} alt="Brands" />
		        </div>
		      </div>
		      <div className="col-lg-2">
		        <div className="brand-item text-center">
		          <img src={publicUrl+"assets/img/brands/06.png"} alt="Brands" />
		        </div>
		      </div>
		      <div className="col-lg-2">
		        <div className="brand-item text-center">
		          <img src={publicUrl+"assets/img/brands/01.png"} alt="Brands" />
		        </div>
		      </div>
		      <div className="col-lg-2">
		        <div className="brand-item text-center">
		          <img src={publicUrl+"assets/img/brands/02.png"} alt="Brands" />
		        </div>
		      </div>
		      <div className="col-lg-2">
		        <div className="brand-item text-center">
		          <img src={publicUrl+"assets/img/brands/03.png"} alt="Brands" />
		        </div>
		      </div>
		      <div className="col-lg-2">
		        <div className="brand-item text-center">
		          <img src={publicUrl+"assets/img/brands/04.png"} alt="Brands" />
		        </div>
		      </div>
		      <div className="col-lg-2">
		        <div className="brand-item text-center">
		          <img src={publicUrl+"assets/img/brands/05.png"} alt="Brands" />
		        </div>
		      </div>
		      <div className="col-lg-2">
		        <div className="brand-item text-center">
		          <img src={publicUrl+"assets/img/brands/06.png"} alt="Brands" />
		        </div>
		      </div>
		    </div>
		  </div>
		</section>

        }
}

export default Brand