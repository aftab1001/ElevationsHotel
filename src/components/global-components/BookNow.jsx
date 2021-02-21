import React, { useState } from "react";
import HotelModal from "./../global-components/HotelModal";
import BookingFormHtml from "./../form-components/BookingFormHtml";
import Button from "react-bootstrap/Button";

var BookNow = (props) => {
  const { type, dataId, btnExtraClass, btnText } = props;

  const [showModel, setShowModel] = useState(false);
  const handleClose = () => {
    setShowModel(false);
  };
  const handleSave = (status) => {
    alert("save");
    setShowModel(true);
  };
  console.log("extra", btnExtraClass);
  const btnClass = btnExtraClass
    ? "btn " + btnExtraClass
    : "btn btn-secondary btn-sm btn-hotel";
  const btnNText = btnText ? btnText : "Book Now";
  return (
    <>
      <button className={btnClass} onClick={() => setShowModel(true)}>
        {btnNText} <i className="fas fa-long-arrow-alt-right" />
      </button>

      <HotelModal
        title="booking form"
        showModal={showModel}
        handleClose={handleClose}
        handleSave={handleSave}
      >
        <BookingFormHtml />
      </HotelModal>
    </>
  );
};
export default BookNow;
