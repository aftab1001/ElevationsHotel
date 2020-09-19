import React from 'react';
import Navbar from './global-components/navbar';
import PageHeader from './global-components/page-header';
import BlogList from './blog-components/blog-list';
import Brand from './section-components/brand';
import Footer from './global-components/footer';

const BlogListPage = () => {
    return <div>
        <Navbar />
        <PageHeader headertitle="Blog Standard" subheader="Blogs" Img="blog/blog-breadcrumb.jpg" />
        <BlogList />
        <Brand Customclass="primary-bg"/>
        <Footer />
    </div>
}

export default BlogListPage

