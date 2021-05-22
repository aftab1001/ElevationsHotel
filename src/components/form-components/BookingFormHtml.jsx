import React from "react";
import Form from "react-bootstrap/Form";
const BookingFormHtml = ({formRef}) => {
  
  return (
    <Form ref={formRef}>
      <Form.Group controlId="formGroupEmail">
        <Form.Label>First Name</Form.Label>
        <Form.Control type="text" placeholder="First Name" name="FName" id="FName"/>
      </Form.Group>
      <Form.Group controlId="formGroupEmail">
        <Form.Label>Last Name</Form.Label>
        <Form.Control type="text" placeholder="Last Name" name="LName" id="LName"/>
      </Form.Group>
      <Form.Group controlId="formGroupPassword">
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" placeholder="Email" name="Email" id="Email"/>
      </Form.Group>
      <Form.Group controlId="formGroupPassword">
        <Form.Label>Mobile</Form.Label>
        <Form.Control type="number" placeholder="Mobile" name="Mobile" id="Mobile" />
      </Form.Group>
      

    </Form>
  );
};

export default BookingFormHtml;
