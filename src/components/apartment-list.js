import React from 'react';
import Navbar from './global-components/navbar';
import PageHeader from './global-components/page-header';
 import ApartmentList from './section-components/apartment-list'

import Brand from './section-components/brand';
import Footer from './global-components/footer';

const ApartmentListPage = () => {
    return <div>
        <Navbar />
        <PageHeader headertitle="Our Apartments" subheader="Apartment List" />
        <ApartmentList />
        <Brand Customclass="primary-bg"/>
        <Footer />
    </div>
}

export default ApartmentListPage

