import React from 'react';
import Navbar from './global-components/navbar-v2';
import SliderV2 from './section-components/slider-v2';
import BookingForm from './section-components/booking-form-v2';
import Features from './section-components/features-v2';
import LatestProduct from './section-components/latest-product';
import WhyChooseUs from './section-components/why-choose-us';
import CounterUP from './section-components/counter-up';
import CallToAction from './section-components/call-to-action';
import ClientV2 from './section-components/client-v2';
import LatestBlog from './section-components/latest-blog';
import Brand from './section-components/brand';
import Footer from './global-components/footer';

const Home_V1 = () => {
    return <div>
        <Navbar />
        <SliderV2 />
        <BookingForm />
        <Features />
        <LatestProduct />
        <WhyChooseUs />
        <CounterUP />
        <CallToAction />
        <ClientV2 />
        <LatestBlog />
        <Brand Customclass="primary-bg"/>
        <Footer />
    </div>
}

export default Home_V1

