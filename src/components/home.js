import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Navbar from "./global-components/navbar";
import Slider from "./section-components/slider";
import BookingForm from "./section-components/booking-form";
import Welcome from "./section-components/welcome";
import LatestRoom from "./section-components/latest-room";
import Service from "./section-components/service";
import CallToActoin from "./section-components/call-to-action";
import Gallery from "./section-components/gallery";
import Features from "./section-components/features";
import Client from "./section-components/client";
import Contact from "./section-components/contact";
import Brand from "./section-components/brand";
import Footer from "./global-components/footer";
import HotelModal from "./global-components/HotelModal";
import BookingFormHtml from "./form-components/BookingFormHtml";

const Home = () => {
  const [showModel, setShowModel] = useState(false);
  const handleClose = () => {    
    setShowModel(false);
  }
  const handleSave = (status) => {
    alert("save");
    setShowModel(true);
  }
  return (
    <div>
      {/*<Button variant="primary" onClick={() => setShowModel(true)}>
        Open Modal
  </Button>*/}
      <HotelModal title="booking form" showModal={showModel} handleClose={handleClose} handleSave={handleSave}><BookingFormHtml/></HotelModal>
      <Navbar />
      <Slider />
      <BookingForm />
      <Welcome />
      <LatestRoom />
      <Service />
      <CallToActoin />
      <Gallery />
      <Features />
      <Client />
      <Contact />
      <Brand CustomClass="section-bg" />
      <Footer />
    </div>
  );
};

export default Home;
