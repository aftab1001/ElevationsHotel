import React, { useState } from "react";
import HotelModal from "./../global-components/HotelModal";
import BookingFormHtml from "./../form-components/BookingFormHtml";
import StripePayment from "./../Payment/stripe-Payment";
import "./BookNow.css";

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
    setShowPaymentModel(false);
  };
  const handleSave = () => {
    formRef.current.submit();
  };
  const handleAfterSave = (status) => {
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
    setShowModel(false);
    setShowPaymentModel(true);
  };

  const handlePaySuccess = () => {
    showPaymentModel(false);
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
    </>
  );
};
export default BookNow;
