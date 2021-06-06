import React, { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import { enGB } from "date-fns/locale";
import { DateRangePicker, START_DATE, END_DATE } from "react-nice-dates";
import Figure from "react-bootstrap/Figure";
import "react-nice-dates/build/style.css";

const BookingFormHtml = ({ formRef, data, type }) => {
  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState();

  useEffect(() => {
    if (startDate != undefined && endDate != undefined) {
      const days = Math.floor((endDate - startDate) / (1000 * 60 * 60 * 24));
      const form = document.getElementById("bookingForm");
      form.elements["pricePaid"].value =
        days * form.elements["price"].value;

      console.log(
        "days",
        Math.floor((endDate - startDate) / (1000 * 60 * 60 * 24))
      );
    }
  }, [startDate, endDate]);
  return (
    <Form ref={formRef} id="bookingForm">
      <Figure>
        <Figure.Image
          width={171}
          height={180}
          alt="171x180"
          src={data.image1}
        />
        <Figure.Caption>
          {data.name}
          <br/>
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
            <label class="form-label" for="formGroupDate">
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
              />
              <input
                className={
                  "form-control input" + (focus === END_DATE ? " -focused" : "")
                }
                {...endDateInputProps}
                placeholder="End date"
                name="lastDate"
              />
            </div>
          </div>
        )}
      </DateRangePicker>
      <Form.Control type="hidden"  name="itemId" />{" "}
      {/* roomId/ApartmentId*/}
      <Form.Control
        type="hidden"        
        name="itemType"
        value={type}
      />{" "}
      {/* room/Apartment*/}
      <Form.Control
        type="hidden"        
        name="bookingType"
        value="customer"
      />
      <Form.Control type="hidden" name="price" value={data.price} />{" "}
      {/* pricePaid*/}
      <div className="field-holder">
        <Form.Group >
          <Form.Label>First Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="First Name"
            name="FName"            
          />
        </Form.Group>
        <Form.Group >
          <Form.Label>Last Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Last Name"
            name="LName"            
          />
        </Form.Group>
      </div>
      <div className="field-holder">
        <Form.Group >
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Email"
            name="Email"            
          />
        </Form.Group>
        <Form.Group >
          <Form.Label>Contact</Form.Label>
          <Form.Control
            type="number"
            placeholder="Contact"
            name="Contact"            
          />
        </Form.Group>
      </div>
      <div className="field-holder">
        <Form.Group >
          <Form.Label>Calculated Price</Form.Label>
          <Form.Control
            type="text"
            readOnly={true}
            name="pricePaid"            
            value={0}
          />
        </Form.Group>
        <Form.Group >
          <Form.Label>Adults</Form.Label>
          <Form.Control as="select" name="adults">
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </Form.Control>
        </Form.Group>
      </div>
      <Form.Group >
        <Form.Label>Special Request</Form.Label>
        <Form.Control
          as="textarea"
          rows={3}          
          name="specialRequest"
        />
      </Form.Group>
    </Form>
  );
};

export default BookingFormHtml;
