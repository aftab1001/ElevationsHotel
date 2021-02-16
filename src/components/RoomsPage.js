import React from 'react';
import Navbar from './global-components/navbar';
import PageHeader from './global-components/page-header';
import RoomList from './section-components/room-list';
import Brand from './section-components/brand';
import Footer from './global-components/footer';

const RoomsPage = () => {
    return <div>
        <Navbar />
        <PageHeader headertitle="Our Rooms" subheader="Rooms" />
        <RoomList />        
        <Footer />
    </div>
}

export default RoomsPage

