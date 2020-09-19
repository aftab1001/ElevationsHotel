import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class BlogGrid extends Component {
  render() {
    let publicUrl = process.env.PUBLIC_URL+'/'
    let imagealt = 'image'
    return (
      <section className="blog-wrapper blog-gird-view section-padding section-bg">
		  <div className="container">
		    <div className="post-loop Elevations-go-top">
		      <div className="row">
		        <div className="col-lg-4 col-md-6">
		          <div className="single-blog-wrap">
		            <div className="post-thumbnail">
		              <img src={publicUrl+"assets/img/blog/gird-01.jpg" }alt="Image" />
		            </div>
		            <div className="post-desc">
		              <ul className="blog-meta list-inline">
		                <li><Link to="/blog-details"><i className="far fa-calendar-alt" />20 June
		                    2020</Link></li>
		              </ul>
		              <h3><Link to="/blog-details">Shanghai Marriott Hotel expanded its portfolio of hotels in China.</Link></h3>
		              <Link to="/blog-details" className="read-more">Read More <i className="far fa-long-arrow-right" /></Link>
		            </div>
		          </div>
		        </div>
		        <div className="col-lg-4 col-md-6">
		          <div className="single-blog-wrap">
		            <div className="post-thumbnail">
		              <img src={publicUrl+"assets/img/blog/gird-02.jpg"} alt="Image" />
		            </div>
		            <div className="post-desc">
		              <ul className="blog-meta list-inline">
		                <li><Link to="/blog-details"><i className="far fa-calendar-alt" />25 June
		                    2020</Link></li>
		              </ul>
		              <h3><Link to="/blog-details">Accor has opened the first internationally branded hotel in Khao Yai, Thailand.</Link></h3>
		              <Link to="/blog-details" className="read-more">Read More <i className="far fa-long-arrow-right" /></Link>
		            </div>
		          </div>
		        </div>
		        <div className="col-lg-4 col-md-6">
		          <div className="single-blog-wrap">
		            <div className="post-thumbnail">
		              <img src={publicUrl+"assets/img/blog/gird-03.jpg"} alt="Image" />
		            </div>
		            <div className="post-desc">
		              <ul className="blog-meta list-inline">
		                <li><Link to="/blog-details"><i className="far fa-calendar-alt" />01 July
		                    2020</Link></li>
		              </ul>
		              <h3><Link to="/blog-details">Evolution Of Business Travel: Adjusting Your Corporate Travel Strategy For Recovery </Link></h3>
		              <Link to="/blog-details" className="read-more">Read More <i className="far fa-long-arrow-right" /></Link>
		            </div>
		          </div>
		        </div>
		        <div className="col-lg-4 col-md-6">
		          <div className="single-blog-wrap">
		            <div className="post-thumbnail">
		              <img src={publicUrl+"assets/img/blog/gird-04.jpg"} alt="Image" />
		            </div>
		            <div className="post-desc">
		              <ul className="blog-meta list-inline">
		                <li><Link to="/blog-details"><i className="far fa-calendar-alt" />05 Aug
		                    2020</Link></li>
		              </ul>
		              <h3><Link to="/blog-details">The Westin Maldives Miriandhoo Resort
Beautifully situated on the UNESCO Biosphere Reserve in Baa Atoll.</Link></h3>
		              <Link to="/blog-details" className="read-more">Read More <i className="far fa-long-arrow-right" /></Link>
		            </div>
		          </div>
		        </div>
		        <div className="col-lg-4 col-md-6">
		          <div className="single-blog-wrap">
		            <div className="post-thumbnail">
		              <img src={publicUrl+"assets/img/blog/gird-05.jpg"} alt="Image" />
		            </div>
		            <div className="post-desc">
		              <ul className="blog-meta list-inline">
		                <li><Link to="/blog-details"><i className="far fa-calendar-alt" />08 Aug
		                    2020</Link></li>
		              </ul>
		              <h3><Link to="/blog-details">Occupancy Rates for China’s Hotels Show First Year-Over-Year Growth Since Pandemic’s Start</Link></h3>
		              <Link to="/blog-details" className="read-more">Read More <i className="far fa-long-arrow-right" /></Link>
		            </div>
		          </div>
		        </div>
		        <div className="col-lg-4 col-md-6">
		          <div className="single-blog-wrap">
		            <div className="post-thumbnail">
		              <img src={publicUrl+"assets/img/blog/gird-06.jpg"} alt="Image" />
		            </div>
		            <div className="post-desc">
		              <ul className="blog-meta list-inline">
		                <li><Link to="/blog-details"><i className="far fa-calendar-alt" />10 Aug
		                    2020</Link></li>
		              </ul>
		              <h3><Link to="/blog-details">Reopening Costa Rica: Hotel Recovery in the New Normal Supported by a WTTC Safe Travel Stamp. </Link></h3>
		              <Link to="/blog-details" className="read-more">Read More <i className="far fa-long-arrow-right" /></Link>
		            </div>
		          </div>
		        </div>
		        <div className="col-lg-4 col-md-6">
		          <div className="single-blog-wrap">
		            <div className="post-thumbnail">
		              <img src={publicUrl+"assets/img/blog/gird-07.jpg"} alt="Image" />
		            </div>
		            <div className="post-desc">
		              <ul className="blog-meta list-inline">
		                <li><Link to="/blog-details"><i className="far fa-calendar-alt" />22 Aug
		                    2020</Link></li>
		              </ul>
		              <h3><Link to="/blog-details">Parsing Hotel ‘Hygiene Theater’ From Truly Effective Health Protocols</Link></h3>
		              <Link to="/blog-details" className="read-more">Read More <i className="far fa-long-arrow-right" /></Link>
		            </div>
		          </div>
		        </div>
		        <div className="col-lg-4 col-md-6">
		          <div className="single-blog-wrap">
		            <div className="post-thumbnail">
		              <img src={publicUrl+"assets/img/blog/gird-08.jpg"} alt="Image" />
		            </div>
		            <div className="post-desc">
		              <ul className="blog-meta list-inline">
		                <li><Link to="/blog-details"><i className="far fa-calendar-alt" />30 Aug
		                    2020</Link></li>
		              </ul>
		              <h3><Link to="/blog-details">California Boutique Hotelier Deploys Big-Brand Tactics to Seize Growth Opportunities.</Link></h3>
		              <Link to="/blog-details" className="read-more">Read More <i className="far fa-long-arrow-right" /></Link>
		            </div>
		          </div>
		        </div>
		        <div className="col-lg-4 col-md-6">
		          <div className="single-blog-wrap">
		            <div className="post-thumbnail">
		              <img src={publicUrl+"assets/img/blog/gird-09.jpg"} alt="Image" />
		            </div>
		            <div className="post-desc">
		              <ul className="blog-meta list-inline">
		                <li><Link to="/blog-details"><i className="far fa-calendar-alt" />10 Sep
		                    2020</Link></li>
		              </ul>
		              <h3><Link to="/blog-details">Accor Just Restructured the Company in the Middle of a Pandemic: Why Now? </Link></h3>
		              <Link to="/blog-details" className="read-more">Read More <i className="far fa-long-arrow-right" /></Link>
		            </div>
		          </div>
		        </div>
		      </div>
		    </div>
		    {/* Pagination Wrap */}
		    <div className="pagination-wrap">
		      <ul className="list-inline">
		        <li><a href="#"><i className="far fa-angle-left" /></a></li>
		        <li className="active"><a href="#">01</a></li>
		        <li><a href="#">02</a></li>
		        <li><a href="#">03</a></li>
		        <li><a href="#"><i className="far fa-angle-right" /></a></li>
		      </ul>
		    </div>
		  </div>
		</section>

    )
  }
}

export default BlogGrid;
