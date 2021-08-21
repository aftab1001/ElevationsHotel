import React from 'react';
import Navbar from './global-components/navbar';
import PageHeader from './global-components/page-header';
import ApartmentDetailSection from './section-components/apartment-detail-section';

import Brand from './section-components/brand';
import Footer from './global-components/footer';

const ApartmentDetails = (props) => {
    return <div>
        <Navbar />
        <PageHeader headertitle="Apartment Details" Img="apartment/20.jpg" />
        <ApartmentDetailSection />
        
        <Brand Customclass="primary-bg"/>
        <Footer />
    </div>
}

export default ApartmentDetails

