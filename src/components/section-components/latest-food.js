import React from "react";

const LatestFood = ({ latestFood }) => {
  return (
    <section className="latest-food section-padding">
      <div className="container">
        <div className="section-title text-center">
          <span className="title-top">Latest Food</span>
          <h1>Popular Dishes</h1>
        </div>
        {/* Foods Wrap */}
        <div className="row">
          {latestFood.length > 0 &&
            latestFood.map((lf) => (
              <div className="col-lg-3 col-md-6 col-sm-6">
                <div className="single-latest-food">
                  <div className="food-img">
                    <img src={lf.image} alt="Food" />
                  </div>
                  <div className="l-food-desc d-flex justify-content-between align-items-center">
                    <h4>{lf.name}</h4>
                    <p className="price">
                      <span className="price-currency">$</span> {lf.price}
                    </p>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default LatestFood;
