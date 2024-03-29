import React from 'react';
import Navbar from './global-components/navbar';
import PageHeader from './global-components/page-header';

import BookTable from './section-components/book-table';
import Brand from './section-components/brand';
import Footer from './global-components/footer';

const ReservationPage = () => {
    return <div>
        <Navbar />
        <PageHeader headertitle="Our Reservation" subheader="Reservation" />        
        <BookTable />
        <Brand Customclass="primary-bg"/>
        <Footer />
    </div>
}

export default ReservationPage

