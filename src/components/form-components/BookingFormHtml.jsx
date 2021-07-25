import React, { useState, useEffect } from "react";
import {Form,Button} from "react-bootstrap";
import { enGB } from "date-fns/locale";
import { DateRangePicker, START_DATE, END_DATE } from "react-nice-dates";
import Figure from "react-bootstrap/Figure";
import "react-nice-dates/build/style.css";

const BookingFormHtml = ({ formRef, data, type,handleAfterSave }) => {
  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState();
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    event.preventDefault();
      event.stopPropagation();
    if (form.checkValidity()) {
      setValidated(true);
      handleAfterSave();  
    }

    
  };
  useEffect(() => {
    if (startDate !== undefined && endDate !== undefined) {
      const days = Math.floor((endDate - startDate) / (1000 * 60 * 60 * 24));
      const form = document.getElementById("bookingForm");
      form.elements["pricePaid"].value = days * form.elements["price"].value;
    }
  }, [startDate, endDate]);
  return (
    <Form
      ref={formRef}
      id="bookingForm"
      noValidate
      validated={validated}
      onSubmit={handleSubmit}
    >
      <Figure>
        <Figure.Image
          width={171}
          height={180}
          alt="171x180"
          src={data.image1}
        />
        <Figure.Caption>
          {data.name}
          <br />
          <label>Per Day Price: ${data.price}</label>
        </Figure.Caption>
      </Figure>
      <DateRangePicker
        startDate={startDate}
        endDate={endDate}
        onStartDateChange={setStartDate}
        onEndDateChange={setEndDate}
        minimumDate={new Date()}
        minimumLength={1}
        format="dd MMM yyyy"
        locale={enGB}
      >
        {({ startDateInputProps, endDateInputProps, focus }) => (
          <div className="form-group">
            <label className="form-label" htmlFor="formGroupDate">
              Booking Date
            </label>
            <div>
              <input
                className={
                  "form-control input" +
                  (focus === START_DATE ? " -focused" : "")
                }
                {...startDateInputProps}
                placeholder="Start date"
                name="startDate"
                required
              />
              <input
                className={
                  "form-control input" + (focus === END_DATE ? " -focused" : "")
                }
                {...endDateInputProps}
                placeholder="End date"
                name="lastDate"
                required
              />
            </div>
          </div>
        )}
      </DateRangePicker>
      <Form.Control type="hidden" name="itemId" value={data.id} />
      <Form.Control type="hidden" name="itemType" value={type} />{" "}
      {/* room/Apartment*/}
      <Form.Control type="hidden" name="bookingType" value="customer" />
      <Form.Control type="hidden" name="price" value={data.price} />{" "}
      {/* pricePaid*/}
      <div className="field-holder">
        <Form.Group>
          <Form.Label>First Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="First Name"
            name="FName"
            required
          />
          <Form.Control.Feedback type="invalid">
            Please provide a valid First Name.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group>
          <Form.Label>Last Name</Form.Label>
          <Form.Control type="text" placeholder="Last Name" name="LName" required/>
          <Form.Control.Feedback type="invalid">
            Please provide a valid Last Name.
          </Form.Control.Feedback>
        </Form.Group>
      </div>
      <div className="field-holder">
        <Form.Group>
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Email" name="Email" required />
          <Form.Control.Feedback type="invalid">
            Please provide a valid Email.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group>
          <Form.Label>Contact</Form.Label>
          <Form.Control type="number" placeholder="Contact" name="Contact" required />
          <Form.Control.Feedback type="invalid">
            Please provide a valid Contact Number.
          </Form.Control.Feedback>
        </Form.Group>
      </div>
      <div className="field-holder">
        <Form.Group>
          <Form.Label>Calculated Price</Form.Label>
          <Form.Control
            type="text"
            readOnly={true}
            name="pricePaid"
            value={0}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Adults</Form.Label>
          <Form.Control as="select" name="adults" required>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </Form.Control>
          <Form.Control.Feedback type="invalid">
            Please Select Number of Adults.
          </Form.Control.Feedback>
        </Form.Group>
      </div>
      <Form.Group>
        <Form.Label>Special Request</Form.Label>
        <Form.Control as="textarea" rows={3} name="specialRequest" />
      </Form.Group>
      <Button type="submit" className="hidden" name="btnSubmitBookingForm">Submit form</Button>
    </Form>
  );
};

export default BookingFormHtml;
