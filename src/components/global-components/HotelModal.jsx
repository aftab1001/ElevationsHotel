import React, { useState,useEffect } from "react";
import Modal from "react-bootstrap/Modal";
import Button from 'react-bootstrap/Button';

var HotelModal = (props) => {
    const {showModal,handleClose,handleSave} = props;
    const [show, setShow] = useState(showModal);
       
    useEffect(()=>{
        setShow(showModal);
    },[showModal]);
  
    return ( 
        <Modal show={showModal} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleSave}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
     
    );
};

export default HotelModal;
