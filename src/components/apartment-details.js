import React from 'react';
import Navbar from './global-components/navbar';
import PageHeader from './global-components/page-header';
import ApartmentDetail from './section-components/apartment-details';
import LatestRoom from './section-components/latest-room-v2';
import Brand from './section-components/brand';
import Footer from './global-components/footer';

const ApartmentDetails = () => {
    return <div>
        <Navbar />
        <PageHeader headertitle="Apartment Details" Img="apartment/20.jpg" />
        <ApartmentDetail />
        <LatestRoom />
        <Brand Customclass="primary-bg"/>
        <Footer />
    </div>
}

export default ApartmentDetails

