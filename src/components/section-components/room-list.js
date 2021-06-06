import React, { Component } from "react";
import { Link } from "react-router-dom";
import {getRoomsData} from "./../Services/RoomsDataService";
import BookNow from "./../global-components/BookNow";
import Loader from "react-loader-spinner";

class RoomList extends Component {
  state = {
    rooms: [],
    Loading:true
  };
  componentDidMount = async () => {
    const response = await getRoomsData();
    const { data } = response;
    this.setState({  Loading:false,rooms: data.result.items });
  };
  render() {
    return (this.state.Loading?<div style={{textAlign:"center"}}><Loader type="ThreeDots" color="#0f172b" height="100" width="100" /></div>:
      <section className="rooms-warp list-view section-bg section-padding ">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              {this.state.rooms.map((room) => (
                <div
                  className="single-room list-style Elevations-go-top"
                  key={"roomId" + room.id}
                >
                  <div className="row align-items-center no-gutters">
                    <div className="col-lg-6">
                      <div className="room-thumb">
                        <img src={room.image1} alt="Room" />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="room-desc">
                        <div className="room-cat">
                          <p>{room.categoryName}</p>
                        </div>
                        <h4>
                          <Link to={"/roomdetails/" + room.id}>
                            {room.name}
                          </Link>
                        </h4>
                        <ul className="room-info list-inline">
                          <li>
                            <i className="fas fa-bed" />
                            {room.bed} Bed
                          </li>
                          <li>
                            <i className="fas fa-bath" />
                            {room.bath} Baths
                          </li>
                          <li>
                            <i className="fas fa-ruler-combined" />
                            {room.length}
                          </li>
                        </ul>
                        <div className="room-price">
                          <p>${room.price}</p>
                        </div>
                        <BookNow type="room" data={room} />
                      </div>
                    </div>
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

export default RoomList;
