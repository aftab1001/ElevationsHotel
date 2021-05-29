import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import { enGB } from "date-fns/locale";
import { DateRangePicker, START_DATE, END_DATE } from "react-nice-dates";
import "react-nice-dates/build/style.css";

const BookingFormHtml = ({ formRef }) => {
  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState();
  return (
    <Form ref={formRef}>
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
            <input
              className={"form-control input" + (focus === START_DATE ? " -focused" : "")}
              {...startDateInputProps}
              placeholder="Start date"
              name="startDate"
            />
            <span className="date-range_arrow" />
            <input
              className={"form-control input" + (focus === END_DATE ? " -focused" : "")}
              {...endDateInputProps}
              placeholder="End date"
              name="lastDate"
            />
          </div>
        )}
      </DateRangePicker>
      <Form.Control type="hidden" id="itemId" name="itemId" />{" "}
      {/* roomId/ApartmentId*/}
      <Form.Control type="hidden" id="itemType" name="itemType" />{" "}
      {/* room/Apartment*/}
      <Form.Control
        type="hidden"
        id="bookingType"
        name="bookingType"
        value="customer"
      />
      <Form.Control type="hidden" id="price" name="price" value="" />{" "}
      {/* calculatedPrice*/}
      <Form.Group controlId="formGroupEmail">
        <Form.Label>Adults</Form.Label>

        <Form.Control as="select" name="adults" id="adults">
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
        </Form.Control>
      </Form.Group>
      <Form.Group controlId="formGroupFName">
        <Form.Label>First Name</Form.Label>
        <Form.Control
          type="text"
          placeholder="First Name"
          name="FName"
          id="FName"
        />
      </Form.Group>
      <Form.Group controlId="formGroupLName">
        <Form.Label>Last Name</Form.Label>
        <Form.Control
          type="text"
          placeholder="Last Name"
          name="LName"
          id="LName"
        />
      </Form.Group>
      <Form.Group controlId="formGroupEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control
          type="email"
          placeholder="Email"
          name="Email"
          id="Email"
        />
      </Form.Group>
      <Form.Group controlId="formGroupContact">
        <Form.Label>Contact</Form.Label>
        <Form.Control
          type="number"
          placeholder="Contact"
          name="Contact"
          id="Contact"
        />
      </Form.Group>
      <Form.Group controlId="formGroupContact">
        <Form.Label>Special Request</Form.Label>
        <Form.Control
          as="textarea"
          rows={3}
          id="specialRequest"
          name="specialRequest"
        />
      </Form.Group>
    </Form>
  );
};

export default BookingFormHtml;
