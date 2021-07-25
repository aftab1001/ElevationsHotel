import React, { useEffect, useState } from "react";
import Navbar from "./global-components/navbar";
import PageHeader from "./global-components/page-header";
import LatestFood from "./section-components/latest-food";
import Foodcta from "./section-components/food-cta";
import FoodMenu from "./section-components/food-menu";
import Footer from "./global-components/footer";
import Loader from "react-loader-spinner";
import getResturantData from "./Services/ResturantDataService";

const ResturentPage = () => {
  const [resturants, setResturant] = useState([]);
  const [poster, setPoster] = useState({});
  const [latestFood, setLatestFood] = useState([]);
  const [loading, setLoading] = useState(false);

  const loadData = async () => {
    setLoading(true);
    const response = await getResturantData();
    const { data } = response;

    setResturant(data.result.items.filter((rt) => rt.category === 0));
    setLatestFood(data.result.items.filter((rt) => rt.category === 1));
    setPoster(data.result.items.filter((rt) => rt.category === 2)[0]);
    setLoading(false);
  };

  useEffect(() => {
    loadData();
  }, []);

  return loading ? (
    <div style={{ textAlign: "center" }}>
      <Loader type="ThreeDots" color="#0f172b" height="100" width="100" />
    </div>
  ) : (
    <div className="resturant">
      <Navbar />
      <PageHeader headertitle="Our Resturent" subheader="Resturent" />
      <LatestFood latestFood={latestFood} />
      <Foodcta poster={poster} />
      <FoodMenu foodList={resturants} />
      <Footer />
    </div>
  );
};

export default ResturentPage;
