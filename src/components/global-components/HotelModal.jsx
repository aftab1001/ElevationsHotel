import React from "react";
import Modal from "react-bootstrap/Modal";
import PropTypes from 'prop-types'

var HotelModal = (props) => {
    const {showModal,handleClose,handleSave,children,title} = props;
   
    return ( 
        <Modal show={showModal} onHide={handleClose}  dialogClassName="modal-70w" centered={true} >
          <Modal.Header closeButton>
            <Modal.Title>{title}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {children}           
            </Modal.Body>
          <Modal.Footer>         
            <button className="btn btn-secondary btn-sm btn-hotel" onClick={handleSave}>Continue</button>                        
          </Modal.Footer>
        </Modal>
     
    );
};

HotelModal.propTypes ={
  title:PropTypes.string.isRequired

}
export default HotelModal;
