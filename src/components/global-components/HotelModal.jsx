import React from "react";
import Modal from "react-bootstrap/Modal";
import PropTypes from "prop-types";

var HotelModal = (props) => {
  const { showModal, handleClose, handleSave, children, title, buttonText,dlgClassName } =
    props;

  return (
    <Modal
      show={showModal}
      onHide={handleClose}
      dialogClassName={dlgClassName?dlgClassName:"modal-70w"}
      centered={true}
    >
      <Modal.Header closeButton>
        <Modal.Title>{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>{children}</Modal.Body>
      {handleSave && (
        <Modal.Footer>
          <button
            className="btn btn-secondary btn-sm btn-hotel"
            onClick={handleSave}
          >
            {buttonText}
          </button>
        </Modal.Footer>
      )}
    </Modal>
  );
};

HotelModal.propTypes = {
  title: PropTypes.string.isRequired,
};
export default HotelModal;
