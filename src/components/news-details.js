import React from 'react';
import Navbar from './global-components/navbar';
import PageHeader from './global-components/page-header';
import NewsDetails from './news-components/newsDetails';
import Footer from './global-components/footer';

const NewsDetailsPage = () => {
    return <div>
        <Navbar />
        <PageHeader headertitle="News Details"  Img="bg/breadcrumb-02.jpg" />
        <NewsDetails />
        
        <Footer />
    </div>
}

export default NewsDetailsPage

