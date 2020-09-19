import React from 'react';
import Navbar from './global-components/navbar';
import PageHeader from './global-components/page-header';
import RoomList from './section-components/room-grid';
import Brand from './section-components/brand';
import Footer from './global-components/footer';

const RoomGridPage = () => {
    return <div>
        <Navbar />
        <PageHeader headertitle="Our Room" subheader="Room Grid" />
        <RoomList />
        <Brand Customclass="primary-bg"/>
        <Footer />
    </div>
}

export default RoomGridPage

