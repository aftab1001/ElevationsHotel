import React, { Component } from "react";
import { Link } from "react-router-dom";
import {getNewsData} from "./../Services/NewsDataService";
class BlogGrid extends Component {
  state = {
    news: [],
  };
  componentDidMount = async () => {
    const response = await getNewsData();
    const { data } = response;
    this.setState({ news: data.result.items });
    //console.log("news", data.result.items);
  };

  getDate = (inputDate) => {
    var date = new Date(inputDate);
    return new Date(date).toDateString("yyyy-MM-dd");
  };
  render() {
    
    return (
      <section className="blog-wrapper blog-gird-view section-padding section-bg">
        <div className="container">
          <div className="post-loop Elevations-go-top">
            <div className="row">
              {this.state.news.map((news) => (
                <div className="col-lg-4 col-md-6" key={news.id}>
                  <div className="single-blog-wrap">
                    <div className="post-thumbnail">
                      <img src={news.image1} alt="Image" />
                    </div>
                    <div className="post-desc">
                      <ul className="blog-meta list-inline">
                        <li>
                          <Link to={"/new-details/" + news.id}>
                            <i className="far fa-calendar-alt" />
                            {this.getDate(news.date)}
                          </Link>
                        </li>
                      </ul>
                      <h3>
                        <Link to={"/new-details/" + news.id}>{news.name}</Link>
                      </h3>
                      <Link
                        to={"/new-details/" + news.id}
                        className="read-more"
                      >
                        Read More <i className="fas fa-long-arrow-alt-right" />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* Pagination Wrap */}
          <div className="pagination-wrap hidden">
            <ul className="list-inline">
              <li>
                <a href="#">
                  <i className="fas fa-angle-left" />
                </a>
              </li>
              <li className="active">
                <a href="#">01</a>
              </li>
              <li>
                <a href="#">02</a>
              </li>
              <li>
                <a href="#">03</a>
              </li>
              <li>
                <a href="#">
                  <i className="fas fa-angle-right" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>
    );
  }
}

export default BlogGrid;
