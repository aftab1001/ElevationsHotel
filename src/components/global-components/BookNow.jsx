import React, { useState } from "react";
import HotelModal from "./../global-components/HotelModal";
import BookingFormHtml from "./../form-components/BookingFormHtml";
import Button from "react-bootstrap/Button";

var BookNow = (props) => {
  const { type, dataId, btnExtraClass, btnText } = props;
  const formRef = React.createRef();
  const [showModel, setShowModel] = useState(false);
  const handleClose = () => {
    setShowModel(false);
  };
  const handleSave = (status) => {
   
    console.log("elements", formRef.current.elements);
    //setShowModel(true);
  };

 
  //console.log("extra", btnExtraClass);
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
        title="Book Now"
        showModal={showModel}
        handleClose={handleClose}
        handleSave={handleSave}
      >
        <BookingFormHtml formRef={formRef}  />
      </HotelModal>
    </>
  );
};
export default BookNow;
