import React from 'react';
import Navbar from './global-components/navbar';
import PageHeader from './global-components/page-header';
import ApartmentDetailSection from './section-components/apartment-detail-section';
import LatestRoom from './section-components/latest-room-v2';
import Brand from './section-components/brand';
import Footer from './global-components/footer';

const ApartmentDetails = () => {
    return <div>
        <Navbar />
        <PageHeader headertitle="Apartment Details" Img="blog/blog-breadcrumb.jpg" />
        <ApartmentDetailSection />
        <LatestRoom />
        <Brand Customclass="primary-bg"/>
        <Footer />
    </div>
}

export default ApartmentDetails

