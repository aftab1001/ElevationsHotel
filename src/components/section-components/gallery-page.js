import React, { Component } from "react";
import getGalleryData from "./../Services/GalleryDataService";

class GalleryPage extends Component {

  state={
    galleries:[]
  }

  componentDidMount=()=>{
    const response = await getGalleryData();
    const { data } = response;
    this.setState({ galleries: data.result.items });
    //console.log("news", data.result.items);
  }
  render() {
    let publicUrl = process.env.PUBLIC_URL + "/";
    const {galleries}=this.state;
    return (
      <section className="gallery-warp section-padding">
        <div className="container">
          <div className="gallery-filter text-center Elevations-go-top">
            <ul className="list-inline">
              <li className="active" data-filter="*">
                Show All
              </li>
              <li data-filter=".rooms">Rooms</li>
              <li data-filter=".apartments">Apartments</li>
              <li data-filter=".gym">Gym</li>
              <li data-filter=".firstaid">First Aid</li>
            </ul>
          </div>
          <div className="gallery-items">
            <div className="row gallery-filter-items">
              {/* Single Item */}
              <div className="col-lg-4 col-md-6 col-sm-6 rooms">
                <div
                  className="gallery-item"
                  style={{
                    backgroundImage:
                      "url(" + publicUrl + "assets/img/gallery/01.jpg)",
                  }}
                >
                  <a href={publicUrl + "assets/img/gallery/01.jpg"}>
                    <div className="gallery-content">
                      <h3>
                        <a>Luxuey Hotel</a>
                      </h3>
                    </div>
                  </a>
                </div>
              </div>
              {/* Single Item */}
              <div className="col-lg-4 col-md-6 col-sm-6 apartments">
                <div
                  className="gallery-item"
                  style={{
                    backgroundImage:
                      "url(" + publicUrl + "assets/img/gallery/02.jpg)",
                  }}
                >
                  <a href={publicUrl + "assets/img/gallery/02.jpg"}>
                    <div className="gallery-content">
                      <h3>
                        <a>Luxuey Hotel</a>
                      </h3>
                    </div>
                  </a>
                </div>
              </div>
              {/* Single Item */}
              <div className="col-lg-4 col-md-6 col-sm-6 apartments">
                <div
                  className="gallery-item"
                  style={{
                    backgroundImage:
                      "url(" + publicUrl + "assets/img/gallery/03.jpg)",
                  }}
                >
                  <a href={publicUrl + "assets/img/gallery/03.jpg"}>
                    <div className="gallery-content">
                      <h3>
                        <a>Luxuey Hotel</a>
                      </h3>
                    </div>
                  </a>
                </div>
              </div>
              {/* Single Item */}
              <div className="col-lg-4 col-md-6 col-sm-6 apartments">
                <div
                  className="gallery-item"
                  style={{
                    backgroundImage:
                      "url(" + publicUrl + "assets/img/gallery/04.jpg)",
                  }}
                >
                  <a href={publicUrl + "assets/img/gallery/04.jpg"}>
                    <div className="gallery-content">
                      <h3>
                        <a>Luxuey Hotel</a>
                      </h3>
                    </div>
                  </a>
                </div>
              </div>
              {/* Single Item */}
              <div className="col-lg-4 col-md-6 col-sm-6 apartments">
                <div
                  className="gallery-item"
                  style={{
                    backgroundImage:
                      "url(" + publicUrl + "assets/img/gallery/05.jpg)",
                  }}
                >
                  <a href={publicUrl + "assets/img/gallery/05.jpg"}>
                    <div className="gallery-content">
                      <h3>
                        <a>Luxuey Hotel</a>
                      </h3>
                    </div>
                  </a>
                </div>
              </div>
              {/* Single Item */}
              <div className="col-lg-4 col-md-6 col-sm-6 rooms">
                <div
                  className="gallery-item"
                  style={{
                    backgroundImage:
                      "url(" + publicUrl + "assets/img/gallery/06.jpg)",
                  }}
                >
                  <a href={publicUrl + "assets/img/gallery/06.jpg"}>
                    {" "}
                    <div className="gallery-content">
                      <h3>
                        <a>Luxuey Hotel</a>
                      </h3>
                    </div>
                  </a>
                </div>
              </div>
              {/* Single Item */}
              <div className="col-lg-4 col-md-6 col-sm-6 rooms">
                <div
                  className="gallery-item"
                  style={{
                    backgroundImage:
                      "url(" + publicUrl + "assets/img/gallery/07.jpg)",
                  }}
                >
                  <a href={publicUrl + "assets/img/gallery/07.jpg"}>
                    <div className="gallery-content">
                      <h3>
                        <a>Luxuey Hotel</a>
                      </h3>
                    </div>
                  </a>
                </div>
              </div>
              {/* Single Item */}
              <div className="col-lg-4 col-md-6 col-sm-6 apartments">
                <div
                  className="gallery-item"
                  style={{
                    backgroundImage:
                      "url(" + publicUrl + "assets/img/gallery/08.jpg)",
                  }}
                >
                  <a href={publicUrl + "assets/img/gallery/08.jpg"}>
                    <div className="gallery-content">
                      <h3>
                        <a>Luxuey Hotel</a>
                      </h3>
                    </div>
                  </a>
                </div>
              </div>
              {/* Single Item */}
              <div className="col-lg-4 col-md-6 col-sm-6 rooms">
                <div
                  className="gallery-item"
                  style={{
                    backgroundImage:
                      "url(" + publicUrl + "assets/img/gallery/09.jpg)",
                  }}
                >
                  <a href={publicUrl + "assets/img/gallery/09.jpg"}>
                    <div className="gallery-content">
                      <h3>
                        <a>Luxuey Hotel</a>
                      </h3>
                    </div>
                  </a>
                </div>
              </div>
              {/* Single Item */}
              <div className="col-lg-4 col-md-6 col-sm-6 gym">
                <div
                  className="gallery-item"
                  style={{
                    backgroundImage:
                      "url(" + publicUrl + "assets/img/gallery/10.jpg)",
                  }}
                >
                  <a href={publicUrl + "assets/img/gallery/10.jpg"}>
                    <div className="gallery-content">
                      <h3>
                        <a>Luxuey Hotel</a>
                      </h3>
                    </div>
                  </a>
                </div>
              </div>
              {/* Single Item */}
              <div className="col-lg-4 col-md-6 col-sm-6 gym">
                <div
                  className="gallery-item"
                  style={{
                    backgroundImage:
                      "url(" + publicUrl + "assets/img/gallery/11.jpg)",
                  }}
                >
                  <a href={publicUrl + "assets/img/gallery/11.jpg"}>
                    <div className="gallery-content">
                      <h3>
                        <a>Luxuey Hotel</a>
                      </h3>
                    </div>
                  </a>
                </div>
              </div>
              {/* Single Item */}
              <div className="col-lg-4 col-md-6 col-sm-6 firstaid">
                <div
                  className="gallery-item"
                  style={{
                    backgroundImage:
                      "url(" + publicUrl + "assets/img/gallery/12.jpg)",
                  }}
                >
                  <a href={publicUrl + "assets/img/gallery/12.jpg"}>
                    <div className="gallery-content">
                      <h3>
                        <a>Luxuey Hotel</a>
                      </h3>
                    </div>
                  </a>
                </div>
              </div>
              {/* Single Item */}
              <div className="col-lg-4 col-md-6 col-sm-6 firstaid">
                <div
                  className="gallery-item"
                  style={{
                    backgroundImage:
                      "url(" + publicUrl + "assets/img/gallery/13.jpg)",
                  }}
                >
                  <a href={publicUrl + "assets/img/gallery/13.jpg"}>
                    <div className="gallery-content">
                      <h3>
                        <a>Luxuey Hotel</a>
                      </h3>
                    </div>
                  </a>
                </div>
              </div>
              {/* Single Item */}
              <div className="col-lg-4 col-md-6 col-sm-6 apartments">
                <div
                  className="gallery-item"
                  style={{
                    backgroundImage:
                      "url(" + publicUrl + "assets/img/gallery/14.jpg)",
                  }}
                >
                  <a href={publicUrl + "assets/img/gallery/14.jpg"}>
                    <div className="gallery-content">
                      <h3>
                        <a>Luxuey Hotel</a>
                      </h3>
                    </div>
                  </a>
                </div>
              </div>
              {/* Single Item */}
              <div className="col-lg-4 col-md-6 col-sm-6 apartments">
                <div
                  className="gallery-item"
                  style={{
                    backgroundImage:
                      "url(" + publicUrl + "assets/img/gallery/15.jpg)",
                  }}
                >
                  <a href={publicUrl + "assets/img/gallery/15.jpg"}>
                    <div className="gallery-content">
                      <h3>
                        <a>Luxuey Hotel</a>
                      </h3>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default GalleryPage;
