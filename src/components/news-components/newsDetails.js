import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getNewsById } from "../Services/NewsDataService";

const NewsDetails = (props) => {
  const defaultNewsData = {
    date: "",
    description1: "",
    description2: "",
    description3: "",
    description4: "",
    description5: "",
    image1: "",
    image2: "",
    image3: "",
    image4: "",
    image5: "",
    imageSequence: 0,
    name: "",
    title: "",
    id: 0,
  };

  console.log("params", useParams());
  const { newsId } = useParams();
  const [news, setNews] = useState(defaultNewsData);

  const getDate = (inputDate) => {
    var date = new Date(inputDate);
    return new Date(date).toDateString("yyyy-MM-dd");
  };
  useEffect(async () => {
    const response = await getNewsById(newsId);
    const { data } = response;
    setNews(data.result);
  }, [newsId]);

  return (
    <section className="blog-details-wrapper section-padding section-bg">
      <div className="container">
        <div className="row">
          <div className="post-details">
            <div className="entry-header">
              <div className="post-thumb align-center">
                <img src={news.image1} alt="Image" />
              </div>
              <ul className="entry-meta list-inline">
                <li>
                  <a href="javascript:void(0)">
                    <i className="fas fa-user-alt" />
                    {news.name}
                  </a>
                </li>
                <li>
                  <a href="javascript:void(0)">
                    <i className="far fa-calendar-alt" />
                    {getDate(news.date)}
                  </a>
                </li>
              </ul>
              <h2 className="entry-title">{news.description1}</h2>
            </div>
            <div className="entry-content">
              <p>{news.description1}</p>
              <p>{news.description2}</p>
              <p>{news.description3}</p>
              <div className="entry-gallery-img">
                <div className="row">
                  <div className="col-md-6">
                    <figure className="entry-media-img">
                      <img src={news.image2} alt="Image" />
                    </figure>
                  </div>
                  <div className="col-md-6">
                    <figure className="entry-media-img">
                      <img src={news.image3} alt="Image" />
                    </figure>
                  </div>
                </div>
              </div>
              <p>{news.description4}</p>
              <p>{news.description5}</p>
            </div>
            <div className="entry-footer d-flex justify-content-md-between">
              <ul className="popular-tag list-inline">
                <li className="title">Popular Tag :</li>
                <li>
                  <Link to="/blog-grid">Hotel,</Link>
                </li>
                <li>
                  <Link to="/blog-grid">Luxury,</Link>
                </li>
                <li>
                  <Link to="/blog-grid">Living</Link>
                </li>
              </ul>
              <ul className="social-share list-inline">
                <li className="title">Share </li>
                <li>
                  <a href="#">
                    <i className="fab fa-facebook-f" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fab fa-twitter" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fab fa-google-plus-g" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fab fa-instagram" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsDetails;
