import React, { useState, createRef } from "react";
import Modal from "react-bootstrap/Modal";
import StripePayment from "../Payment/stripe-Payment";
import HotelModal from "../global-components/HotelModal";
import "react-awesome-slider/dist/styles.css";

const FoundationDonate = ({ btnClass }) => {
  const [showHide, setShowHide] = useState(false);
  const [showHidePayment, setShowHidePayment] = useState(false);
  const [productInfo, setProductInfo] = useState({});
  const [validated, setValidated] = useState(false);
  const formRef = createRef();

  const handleShowModal = () => {
    setShowHide(true);
  };

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    event.preventDefault();
    event.stopPropagation();
    if (form.checkValidity()) {
      setValidated(true);
      handleSavePaymentDetails();
    }
  };
  const handleDonateNow = () => {
    formRef.current.elements["btnSubmitDonateForm"].click();
  };

  const handleSavePaymentDetails = () => {
    setProductInfo({
      pricePaid: formRef.current.elements["paymentAmount"].value,
      AdditionalNotes: formRef.current.elements["additionalNotes"].value,
      Address: formRef.current.elements["address"].value,
      Email: formRef.current.elements["additionalNotes"].value,
      FirstName: formRef.current.elements["firstName"].value,
      LastName: formRef.current.elements["lastName"].value,
      Phone: formRef.current.elements["lastName"].value,
    });
    setShowHide(false);
    setShowHidePayment(true);
  };
  const handlePriceValue = (value) => {
    document.getElementById("paymentAmount").value = value;
  };
  const handlePaySuccess = () => {
    setShowHidePayment(false);
  };
  return (
    <>
      <a
        onClick={handleShowModal}
        className={
          btnClass && btnClass !== ""
            ? btnClass
            : "primary_btn yellow_btn text-white"
        }
      >
        Donate Now
      </a>

      <Modal show={showHide} size="lg" scrollable>
        <Modal.Header closeButton onClick={() => setShowHide(false)}>
          <Modal.Title>
            You are donating to : <b>Greennature Foundation</b>
          </Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <form ref={formRef} onSubmit={handleSubmit} validated={validated}>
            <div className="greennature-payment-amount">
              <div className="greennature-payment-amount-head">
                How much would you like to donate?
              </div>

              <div className="row">
                <div className="col-md-8">
                  <a
                    className="greennature-payment-price-preset"
                    data-val="10"
                    onClick={() => handlePriceValue(10)}
                  >
                    $10
                  </a>
                  <a
                    className="greennature-payment-price-preset"
                    data-val="20"
                    onClick={() => handlePriceValue(20)}
                  >
                    $20
                  </a>
                  <a
                    className="greennature-payment-price-preset greennature-active"
                    data-val="30"
                    onClick={() => handlePriceValue(30)}
                  >
                    $30
                  </a>
                  <a
                    className="greennature-payment-price-preset greennature-active"
                    data-val="50"
                    onClick={() => handlePriceValue(50)}
                  >
                    $50
                  </a>
                  <a
                    className="greennature-payment-price-preset greennature-active"
                    data-val="100"
                    onClick={() => handlePriceValue(100)}
                  >
                    $100
                  </a>

                  <a
                    className="greennature-payment-price-preset greennature-active"
                    data-val="500"
                    onClick={() => handlePriceValue(500)}
                  >
                    $500
                  </a>
                </div>
                <div className="col-md-4">
                  <input
                    type="text"
                    class="payment-other-amount"
                    placeholder="Your Amount(USD)"
                    id="paymentAmount"
                    name="paymentAmount"
                    value={20}
                    required
                  />
                </div>
              </div>
            </div>

            <div className="greennature-paypal-attribute">
              <div className="row">
                <div className="col-md-6">
                  <div class="form-group">
                    <label for="firstName">First Name *</label>
                    <input
                      type="text"
                      class="form-control"
                      placeholder=""
                      id="firstName"
                      name="firstName"
                      required
                      tabIndex={1}
                    />
                  </div>
                  <div class="form-group">
                    <label for="email">Email *</label>
                    <input
                      type="email"
                      class="form-control"
                      placeholder=""
                      id="email"
                      name="email"
                      required
                      tabIndex={3}
                    />
                  </div>
                  <div class="form-group">
                    <label for="address">Address</label>
                    <textarea
                      class="form-control"
                      id="address"
                      name="address"
                      rows="3"
                      spellcheck="false"
                      required
                      tabIndex={5}
                    ></textarea>
                  </div>
                </div>
                <div className="col-md-6">
                  <div class="form-group">
                    <label for="lastName">Last Name *</label>
                    <input
                      type="text"
                      class="form-control"
                      placeholder=""
                      id="lastName"
                      name="lastName"
                      required
                      tabIndex={2}
                    />
                  </div>
                  <div class="form-group">
                    <label for="phone">Phone</label>
                    <input
                      type="text"
                      class="form-control"
                      placeholder=""
                      id="phone"
                      name="phone"
                      required
                      tabIndex={4}
                    />
                  </div>
                  <div class="form-group">
                    <label for="addadditionalNote">Additional Note</label>
                    <textarea
                      class="form-control"
                      id="additionalNotes"
                      name="additionalNotes"
                      rows="3"
                      tabIndex={7}
                    ></textarea>
                  </div>
                </div>
              </div>
            </div>
            <button type="submit" className="hidden" name="btnSubmitDonateForm">
              Submit form
            </button>
          </form>
          <div class="greennature-payment-method">
            <img
              src="assets/images/stripe.png"
              alt="stripe"
              class="greennature-active"
            />
            <input type="hidden" name="payment-method" value="stripe" />
          </div>
        </Modal.Body>
        <Modal.Footer>
          <button
            type="button"
            class="btn btn-success btn-sm btn-block btnDonate"
            onClick={handleDonateNow}
          >
            DONATE NOW
          </button>
        </Modal.Footer>
      </Modal>

      <HotelModal
        title="Pay Now"
        showModal={showHidePayment}
        handleClose={() => setShowHidePayment(false)}
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

export default FoundationDonate;
