import React from 'react';
import Navbar from './global-components/navbar';
import PageHeader from './global-components/page-header';
import LatestFood from './section-components/latest-food';
import Foodcta from './section-components/food-cta';
import FoodMenu from './section-components/food-menu';
import Brand from './section-components/brand';
import Footer from './global-components/footer';

const ResturentPage = () => {
    return <div className="resturant">
        <Navbar />
        <PageHeader headertitle="Our Resturent" subheader="Resturent" />
        <LatestFood />
        <Foodcta />
        <FoodMenu />
        <Brand Customclass="primary-bg"/>
        <Footer />
    </div>
}

export default ResturentPage

