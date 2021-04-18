import React from 'react';
import Navbar from './global-components/navbar';
import PageHeader from './global-components/page-header';
import RoomDetailsSection from './section-components/room-detail-section';
import LatestRoom from './section-components/latest-room-v2';
import Brand from './section-components/brand';
import Footer from './global-components/footer';

const RoomDetails = () => {
    return <div>
        <Navbar />
        <PageHeader headertitle="Room Details" Img="blog/blog-breadcrumb.jpg" />
        <RoomDetailsSection />        
        <Brand Customclass="primary-bg"/>
        <Footer />
    </div>
}

export default RoomDetails

