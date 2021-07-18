import React, { useState } from "react";
import HotelModal from "./../global-components/HotelModal";
import BookingFormHtml from "./../form-components/BookingFormHtml";
import StripePayment from "./../Payment/stripe-Payment";
import "./BookNow.css";

var BookNow = (props) => {
  const { type, data, btnExtraClass, btnText } = props;
  const formRef = React.createRef();
  const formRef1 = React.createRef();
  const [showModel, setShowModel] = useState(false);
  const [productInfo, setproductInfo] = useState({});
  const [showPaymentModel, setShowPaymentModel] = useState(false);

  const handleClose = () => {
    setShowModel(false);
  };
  const handleSave = (status) => {

    console.log("elements", formRef.current.elements);
    const productInfo={};
    for (const key in formRef.current.elements){
      if (formRef.current.elements.hasOwnProperty(key)) {
        const ele=formRef.current.elements[key];
        productInfo[ele.name]=ele.value;        
    }
    }
    
    
    
    console.log(productInfo);
    setproductInfo(productInfo)
    setShowModel(true);
    setShowPaymentModel(true);
  };
  const handlePayNow=()=>{
    formRef1.current.submit();
    
  }
  const handlePaySuccess=()=>{
    showPaymentModel(false);
  }

 
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
        <BookingFormHtml formRef={formRef} data={data} type={type} />
        
      </HotelModal>

      <HotelModal
        title="Pay Now"
        showModal={showPaymentModel}
        handleClose={handleClose}
        handleSave={handlePayNow}
        buttonText={"Pay Now"}
      >
        
        <StripePayment productDetails={productInfo} formRef={formRef1} onSuccess={handlePaySuccess}/>
      </HotelModal>
    </>
  );
};
export default BookNow;
