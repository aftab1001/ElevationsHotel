import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

class GalleryPage extends Component {

    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'
        let imagealt = 'image'

    return <section className="gallery-warp section-padding">
		  <div className="container">
		    <div className="gallery-filter text-center Elevations-go-top">
		      <ul className="list-inline">
		        <li className="active" data-filter="*">Show All</li>
		        <li data-filter=".luxury">luxury</li>
		        <li data-filter=".twieen">Twieen</li>
		        <li data-filter=".couple">Couple</li>
		        <li data-filter=".family">Family</li>
		        <li data-filter=".conference">Conference</li>
		      </ul>
		    </div>
		    <div className="gallery-items">
		      <div className="row gallery-filter-items">
		        {/* Single Item */}
		        <div className="col-lg-4 col-md-6 col-sm-6 luxury">
		          <div className="gallery-item" style={{backgroundImage: 'url('+publicUrl+'assets/img/gallery/01.jpg)'}}>
		            <div className="gallery-content">
		              <h3><Link to="/room-details">Luxuey Hotel</Link></h3>
		              <Link to="/room-details" className="view-gallery"><i className="fas fa-long-arrow-alt-right" /></Link>
		            </div>
		          </div>
		        </div>
		        {/* Single Item */}
		        <div className="col-lg-4 col-md-6 col-sm-6 twieen">
		          <div className="gallery-item" style={{backgroundImage: 'url('+publicUrl+'assets/img/gallery/02.jpg)'}}>
		            <div className="gallery-content">
		              <h3><Link to="/room-details">Luxuey Hotel</Link></h3>
		              <Link to="/room-details" className="view-gallery"><i className="fas fa-long-arrow-alt-right" /></Link>
		            </div>
		          </div>
		        </div>
		        {/* Single Item */}
		        <div className="col-lg-4 col-md-6 col-sm-6 twieen">
		          <div className="gallery-item" style={{backgroundImage: 'url('+publicUrl+'assets/img/gallery/03.jpg)'}}>
		            <div className="gallery-content">
		              <h3><Link to="/room-details">Luxuey Hotel</Link></h3>
		              <Link to="/room-details" className="view-gallery"><i className="fas fa-long-arrow-alt-right" /></Link>
		            </div>
		          </div>
		        </div>
		        {/* Single Item */}
		        <div className="col-lg-4 col-md-6 col-sm-6 twieen">
		          <div className="gallery-item" style={{backgroundImage: 'url('+publicUrl+'assets/img/gallery/04.jpg)'}}>
		            <div className="gallery-content">
		              <h3><Link to="/room-details">Luxuey Hotel</Link></h3>
		              <Link to="/room-details" className="view-gallery"><i className="fas fa-long-arrow-alt-right" /></Link>
		            </div>
		          </div>
		        </div>
		        {/* Single Item */}
		        <div className="col-lg-4 col-md-6 col-sm-6 twieen">
		          <div className="gallery-item" style={{backgroundImage: 'url('+publicUrl+'assets/img/gallery/05.jpg)'}}>
		            <div className="gallery-content">
		              <h3><Link to="/room-details">Luxuey Hotel</Link></h3>
		              <Link to="/room-details" className="view-gallery"><i className="fas fa-long-arrow-alt-right" /></Link>
		            </div>
		          </div>
		        </div>
		        {/* Single Item */}
		        <div className="col-lg-4 col-md-6 col-sm-6 luxury">
		          <div className="gallery-item" style={{backgroundImage: 'url('+publicUrl+'assets/img/gallery/06.jpg)'}}>
		            <div className="gallery-content">
		              <h3><Link to="/room-details">Luxuey Hotel</Link></h3>
		              <Link to="/room-details" className="view-gallery"><i className="fas fa-long-arrow-alt-right" /></Link>
		            </div>
		          </div>
		        </div>
		        {/* Single Item */}
		        <div className="col-lg-4 col-md-6 col-sm-6 luxury">
		          <div className="gallery-item" style={{backgroundImage: 'url('+publicUrl+'assets/img/gallery/07.jpg)'}}>
		            <div className="gallery-content">
		              <h3><Link to="/room-details">Luxuey Hotel</Link></h3>
		              <Link to="/room-details" className="view-gallery"><i className="fas fa-long-arrow-alt-right" /></Link>
		            </div>
		          </div>
		        </div>
		        {/* Single Item */}
		        <div className="col-lg-4 col-md-6 col-sm-6 twieen">
		          <div className="gallery-item" style={{backgroundImage: 'url('+publicUrl+'assets/img/gallery/08.jpg)'}}>
		            <div className="gallery-content">
		              <h3><Link to="/room-details">Luxuey Hotel</Link></h3>
		              <Link to="/room-details" className="view-gallery"><i className="fas fa-long-arrow-alt-right" /></Link>
		            </div>
		          </div>
		        </div>
		        {/* Single Item */}
		        <div className="col-lg-4 col-md-6 col-sm-6 luxury">
		          <div className="gallery-item" style={{backgroundImage: 'url('+publicUrl+'assets/img/gallery/09.jpg)'}}>
		            <div className="gallery-content">
		              <h3><Link to="/room-details">Luxuey Hotel</Link></h3>
		              <Link to="/room-details" className="view-gallery"><i className="fas fa-long-arrow-alt-right" /></Link>
		            </div>
		          </div>
		        </div>
				{/* Single Item */}
		        <div className="col-lg-4 col-md-6 col-sm-6 couple">
		          <div className="gallery-item" style={{backgroundImage: 'url('+publicUrl+'assets/img/gallery/10.jpg)'}}>
		            <div className="gallery-content">
		              <h3><Link to="/room-details">Luxuey Hotel</Link></h3>
		              <Link to="/room-details" className="view-gallery"><i className="fas fa-long-arrow-alt-right" /></Link>
		            </div>
		          </div>
		        </div>
				{/* Single Item */}
		        <div className="col-lg-4 col-md-6 col-sm-6 couple">
		          <div className="gallery-item" style={{backgroundImage: 'url('+publicUrl+'assets/img/gallery/11.jpg)'}}>
		            <div className="gallery-content">
		              <h3><Link to="/room-details">Luxuey Hotel</Link></h3>
		              <Link to="/room-details" className="view-gallery"><i className="fas fa-long-arrow-alt-right" /></Link>
		            </div>
		          </div>
		        </div>
				{/* Single Item */}
		        <div className="col-lg-4 col-md-6 col-sm-6 family">
		          <div className="gallery-item" style={{backgroundImage: 'url('+publicUrl+'assets/img/gallery/12.jpg)'}}>
		            <div className="gallery-content">
		              <h3><Link to="/room-details">Luxuey Hotel</Link></h3>
		              <Link to="/room-details" className="view-gallery"><i className="fas fa-long-arrow-alt-right" /></Link>
		            </div>
		          </div>
		        </div>
				{/* Single Item */}
		        <div className="col-lg-4 col-md-6 col-sm-6 family">
		          <div className="gallery-item" style={{backgroundImage: 'url('+publicUrl+'assets/img/gallery/13.jpg)'}}>
		            <div className="gallery-content">
		              <h3><Link to="/room-details">Luxuey Hotel</Link></h3>
		              <Link to="/room-details" className="view-gallery"><i className="fas fa-long-arrow-alt-right" /></Link>
		            </div>
		          </div>
		        </div>
				{/* Single Item */}
		        <div className="col-lg-4 col-md-6 col-sm-6 conference">
		          <div className="gallery-item" style={{backgroundImage: 'url('+publicUrl+'assets/img/gallery/14.jpg)'}}>
		            <div className="gallery-content">
		              <h3><Link to="/room-details">Luxuey Hotel</Link></h3>
		              <Link to="/room-details" className="view-gallery"><i className="fas fa-long-arrow-alt-right" /></Link>
		            </div>
		          </div>
		        </div>
				{/* Single Item */}
		        <div className="col-lg-4 col-md-6 col-sm-6 conference">
		          <div className="gallery-item" style={{backgroundImage: 'url('+publicUrl+'assets/img/gallery/15.jpg)'}}>
		            <div className="gallery-content">
		              <h3><Link to="/room-details">Luxuey Hotel</Link></h3>
		              <Link to="/room-details" className="view-gallery"><i className="fas fa-long-arrow-alt-right" /></Link>
		            </div>
		          </div>
		        </div>
		      </div>
		    </div>
		    <div className="pagination-wrap">
		      <ul className="list-inline">
		        <li><a href="#"><i className="fas fa-angle-left" /></a></li>
		        <li className="active"><a href="#">01</a></li>
		        <li><a href="#">02</a></li>
		        <li><a href="#">03</a></li>
		        <li><a href="#"><i className="fas fa-angle-right" /></a></li>
		      </ul>
		    </div>
		  </div>
		</section>

        }
}

export default GalleryPage