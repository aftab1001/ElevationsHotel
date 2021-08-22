import React, { Component } from "react";
import getGalleryData from "./../Services/GalleryDataService";
import Loader from "react-loader-spinner";
class GalleryPage extends Component {
  state = {
    galleries: [],
    Loading: true,
  };

  componentDidMount = async () => {
    const response = await getGalleryData();
    const { data } = response;
    this.setState({ Loading: false, galleries: data.result.items });
    window.loadEvents();
    
  };
  render() {
    
    const { galleries, Loading } = this.state;
    return Loading ? (
      <div style={{ textAlign: "center" }}>
        <Loader type="ThreeDots" color="#0f172b" height="100" width="100" />
      </div>
    ) : (
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
              <li data-filter=".boutique">Boutique</li>
            </ul>
          </div>
          <div className="gallery-items">
            <div className="row gallery-filter-items">
              {/* Single Item */}
              {galleries.map((gallery,index) => (
                <div
                  className={
                    "col-lg-4 col-md-6 col-sm-6 " +
                    gallery.imageType.toLowerCase()
                  }
                  key={index}
                >
                  <div
                    className="gallery-item"
                    style={{
                      backgroundImage: "url(" + gallery.image + ")",
                    }}
                  >
                    <a
                      href={gallery.image}
                      className="popup"
                      title={gallery.imageTitle}
                    >
                      <div className="gallery-content">
                        <h3>
                          <a>{gallery.imageTitle}</a>
                        </h3>
                      </div>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default GalleryPage;
