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
           
            </Modal.Body>
          <Modal.Footer>         
            <button className="btn btn-secondary btn-sm btn-hotel" onClick={handleSave}>Save Changes</button>   
            <button className="btn btn-secondary btn-sm btn-hotel" onClick={handleClose}>Close</button>            
          </Modal.Footer>
        </Modal>
     
    );
};

HotelModal.propTypes ={
  title:PropTypes.element.isRequired

}
export default HotelModal;
