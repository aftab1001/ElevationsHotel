import React from 'react';
import Navbar from './global-components/navbar';
import PageHeader from './global-components/page-header';
import BlogGrid from './blog-components/blog-grid';
import Brand from './section-components/brand';
import Footer from './global-components/footer';

const NewsPage = () => {
    return <div>
        <Navbar />
        <PageHeader headertitle="News" subheader="News" Img="blog/blog-breadcrumb.jpg" />
        <BlogGrid />
        <Brand Customclass="primary-bg"/>
        <Footer />
    </div>
}

export default NewsPage

