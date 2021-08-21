import React, { useState } from "react";
import { updateReservation } from "./../Services/ReservationService";
import { toast } from "react-toastify";

const BookTable = () => {
  
  
	const [validated, setValidated] = useState(false);

  const onFormSubmit = (event) => {
    const form = event.currentTarget;
    event.preventDefault();
    if (form.checkValidity()) {
      setValidated(true);
      handleAfterSave(form);
    }
  };
  const handleAfterSave = (form) => {
    if (form.checkValidity() === false) {
      return;
    }
    const data = {};
    data.Name = form.elements["name"].value;
    data.Email = form.elements["email"].value;
    data.Message = form.elements["msg"].value;
    data.NumberOfGuest = form.elements["noOfGuests"].value;
    updateReservation(data).then((res) => {
      if (res.status === 200) {
		toast.success("email sent successfully");
      }
    });

    
  };
  const publicUrl = process.env.PUBLIC_URL + "/";

  return (
    <section className="reserv-form-section section-padding">
      <div className="container">
        <div className="row">
          <div className="col-md-5">
            {/* Section Title */}
            <div className="section-title book-table-desc">
              <span className="title-top">Book Your Table</span>
              <h1>Reservation</h1>
              <p>
                But I must explain to you how all this mistaken idea denouncing
                pleasure and praising pain was born and I will give you a
                complete account of the system, and expound the actual teachings
                of the great explorer of the truth, the master-builder of human
                hapness. No one rejects dislikes or avoids pleasure itself
              </p>
              <a href="contact.html" className="read-more">
                Get Started <i className="fas fa-long-arrow-alt-right" />
              </a>
              <div className="book-table-img">
                <img
                  src={publicUrl + "assets/img/reservation/03.jpg"}
                  alt="Image"
                />
              </div>
            </div>
          </div>
          <div className="col-lg-5 col-md-7 offset-lg-1">
            <div className="booking-form-wrap">
              <h2 className="b-form-title">Book A Table</h2>
              <div className="b-form section-bg">
                <form onSubmit={onFormSubmit} noValidate validated={validated}>
                  <label htmlFor="name">Your Full Name</label>
                  <div className="input-wrap">
                    <input
                      type="text"
                      placeholder="Your Full Name"
                      name="name"
                      id="name"
                      required
                    />
                    <i className="fas fa-user-alt" />
                  </div>
                  <label htmlFor="name">Number of Guests</label>
                  <div className="input-wrap">
                    <input
                      type="number"
                      placeholder="Number of Guests"
                      name="noOfGuests"
                      id="noOfGuests"
                      required
                    />
                    <i className="fas fa-users" />
                  </div>
                  <label htmlFor="email">Your Email Address</label>
                  <div className="input-wrap">
                    <input
                      type="email"
                      placeholder="Your Email"
                      name="email"
                      id="email"
                      required
                    />
                    <i className="far fa-envelope" />
                  </div>
                  <label htmlFor="msg">Write Message</label>
                  <div className="input-wrap text-area">
                    <textarea
                      placeholder="Write Message"
                      id="msg"
                      name="msg"
                      defaultValue={""}
                    />
                    <i className="fas fa-pencil-alt" />
                  </div>
                  <button type="submit" className="btn filled-btn">
                    Book Now <i className="fas fa-long-arrow-alt-right" />
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookTable;
