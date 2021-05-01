import React from 'react';
import Navbar from './global-components/navbar';
import PageHeader from './global-components/page-header';
import GalleryList from './section-components/gallery-page';
import Brand from './section-components/brand';
import Footer from './global-components/footer';

const GalleryPage = () => {
    return <div>
        <Navbar />
        <PageHeader headertitle="Our Gallery" subheader="Gallery" />
        <GalleryList />
        <Brand Customclass="primary-bg"/>
        <Footer />
    </div>
}

export default GalleryPage

