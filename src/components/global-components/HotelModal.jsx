import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from 'react-bootstrap/Button';
import PropTypes from 'prop-types'

var HotelModal = (props) => {
    const {showModal,handleClose,handleSave,children,title} = props;
   
    return ( 
        <Modal show={showModal} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>{title}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {children}
            Woohoo, you're reading this text in a modal!</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button className="btn filled-btn btn-block" onClick={handleSave}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
     
    );
};

HotelModal.propTypes ={
  title:PropTypes.element.isRequired

}
export default HotelModal;
