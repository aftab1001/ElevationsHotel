import React, { useState } from "react";
import HotelModal from "./../global-components/HotelModal";
import BookingFormHtml from "./../form-components/BookingFormHtml";
import StripePayment from "./../Payment/stripe-Payment";
import {GetBookingStatus} from "./../Services/BookingService"
import { ToastContainer, toast } from 'react-toastify';
import "./BookNow.css";
import 'react-toastify/dist/ReactToastify.css';

var BookNow = (props) => {
  const { type, data, btnExtraClass, btnText } = props;
  const formRef = React.createRef();
  const [showModel, setShowModel] = useState(false);
  const [productInfo, setproductInfo] = useState({});
  const [showPaymentModel, setShowPaymentModel] = useState(false);

  const handleClose = () => {
    setShowModel(false);
  };
  const handlePayModalClose = () => {
    setShowModel(true);
    setShowPaymentModel(true);
  };
  const handleSave = () => {
    formRef.current.elements["btnSubmitBookingForm"].click();
  };
  const handleAfterSave = async (status) => {
    if (formRef.current.checkValidity() === false) {
      return;
    }

    console.log("elements", formRef.current.elements);
    const productInfo = {};
    for (const key in formRef.current.elements) {
      if (formRef.current.elements.hasOwnProperty(key)) {
        const ele = formRef.current.elements[key];
        productInfo[ele.name] = ele.value;
      }
    }

    console.log(productInfo);
    setproductInfo(productInfo);
    debugger;
    //Check Booking Status
    const BookingStatus = await GetBookingStatus(
      productInfo.itemId,
      productInfo.startDate,
      productInfo.lastDate
    );

    if (BookingStatus.data.result.length === 0) {
      setShowModel(false);
      setShowPaymentModel(true);
    }
    else
    { toast.error("Bookings for the selected date are already in place. Please try again in a different room or apartment.");

    }
  };

  const handlePaySuccess = () => {
    setShowPaymentModel(false);
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
        buttonText={"Continue"}
      >
        <BookingFormHtml
          formRef={formRef}
          data={data}
          type={type}
          handleAfterSave={handleAfterSave}
        />
      </HotelModal>

      <HotelModal
        title="Pay Now"
        showModal={showPaymentModel}
        handleClose={handlePayModalClose}
        dlgClassName="modal-55w"
      >
        <StripePayment
          productDetails={productInfo}
          onSuccess={handlePaySuccess}
          price={productInfo.pricePaid}
        />
      </HotelModal>
      <ToastContainer />
    </>
  );
};
export default BookNow;
