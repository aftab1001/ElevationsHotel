import React, { Component } from "react";
import Modal from "react-bootstrap/Modal";
import "react-awesome-slider/dist/styles.css";

class FoundationDonate extends Component {
  state = {};

  handleModalShowHide() {
    this.setState({ showHide: !this.state.showHide });
  }

  render() {
    return (
      <ul className="col-md-3 col-lg-3">
        <a
          onClick={() => this.handleModalShowHide()}
          className="primary_btn yellow_btn text-white"
        >
          Donate Now
        </a>

        <Modal show={this.state.showHide} size="lg" scrollable>
          <Modal.Header closeButton onClick={() => this.handleModalShowHide()}>
            <Modal.Title>
              You are donating to : <b>Greennature Foundation</b>
            </Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <div className="greennature-payment-amount">
              <div className="greennature-payment-amount-head">
                How much would you like to donate?
              </div>
              <div className="row">
                <div className="col-md-8">
                  <a className="greennature-payment-price-preset" data-val="10">
                    $10
                  </a>
                  <a className="greennature-payment-price-preset" data-val="20">
                    $20
                  </a>
                  <a
                    className="greennature-payment-price-preset greennature-active"
                    data-val="30"
                  >
                    $30
                  </a>

                  <a
                    className="greennature-payment-price-preset greennature-active"
                    data-val="30"
                  >
                    $50
                  </a>

                  <a
                    className="greennature-payment-price-preset greennature-active"
                    data-val="30"
                  >
                    $100
                  </a>

                  <a
                    className="greennature-payment-price-preset greennature-active"
                    data-val="30"
                  >
                    $500
                  </a>
                </div>
                <div className="col-md-4">
                  <input
                    type="text"
                    class="payment-other-amount"
                    placeholder="Or Your Amount(USD)"
                    id="amount"
                  />
                </div>
              </div>
            </div>

            <div className="greennature-paypal-attribute">
              <span className="greennature-head">
                Would you like to make regular donations?
              </span>
              <span className="greennature-subhead">
                I would like to make donation(s)
              </span>
              <select
                name="t3"
                className="greennature-recurring-option"
                font-size="14px"
              >
                <option value="0">one time</option>
                <option value="W">Weekly</option>
                <option value="M">Monthly</option>
                <option value="Y">Yearly</option>
              </select>

              <div className="row">
                <div className="col-md-6">
                  <div class="form-group">
                    <label for="firstName">First Name *</label>
                    <input
                      type="text"
                      class="form-control"
                      placeholder=""
                      id="firstName"
                    />
                  </div>
                  <div class="form-group">
                    <label for="email">Email *</label>
                    <input
                      type="email"
                      class="form-control"
                      placeholder=""
                      id="email"
                    />
                  </div>
                  <div class="form-group">
                    <label for="address">Address</label>
                    <textarea
                      class="form-control"
                      id="Textarea1"
                      rows="3"
                      spellcheck="false"
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
                    />
                  </div>
                  <div class="form-group">
                    <label for="phone">Phone</label>
                    <input
                      type="text"
                      class="form-control"
                      placeholder=""
                      id="phone"
                    />
                  </div>
                  <div class="form-group">
                    <label for="addadditionalNote">Additional Note</label>
                    <textarea
                      class="form-control"
                      id="Textarea1"
                      rows="3"
                    ></textarea>
                  </div>
                </div>
              </div>
            </div>
            <div class="greennature-payment-method">
              <img class="" src="assets/images/paypal.png" alt="paypal" />
              <img
                src="assets/images/stripe.png"
                alt="stripe"
                class="greennature-active"
              />
              <input type="hidden" name="payment-method" value="stripe" />{" "}
            </div>
          </Modal.Body>
          <Modal.Footer>
            <button
              type="button"
              class="btn btn-success btn-sm btn-block btnDonate"
            >
              DONATE NOW
            </button>
          </Modal.Footer>
        </Modal>
      </ul>
    );
  }
}

export default FoundationDonate;
