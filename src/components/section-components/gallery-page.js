import React, { Component } from "react";
import getGalleryData from "./../Services/GalleryDataService";

class GalleryPage extends Component {
  state = {
    galleries: [],
  };

  componentDidMount = async () => {
    const response = await getGalleryData();
    const { data } = response;
    this.setState({ galleries: data.result.items });
    console.log("galleries ", data.result.items);
  };
  render() {
    let publicUrl = process.env.PUBLIC_URL + "/";
    const { galleries } = this.state;
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
              <li data-filter=".boutique">Boutique</li>
            </ul>
          </div>
          <div className="gallery-items">
            <div className="row gallery-filter-items">
              {/* Single Item */}
              {galleries.map((gallery) => (
                <div className={"col-lg-4 col-md-6 col-sm-6 "+gallery.type.toLowerCase()}>
                  <div
                    className="gallery-item"
                    style={{
                      backgroundImage:
                        "url(" + gallery.image + ")",
                    }}
                  >
                    <a href={gallery.image}>
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
