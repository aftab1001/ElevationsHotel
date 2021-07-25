import React from "react";

const FoodMenu = ({ foodList }) => {
 
  return (
    <section className="food-section section-padding">
      <div className="container">
        <div className="section-title text-center">
          <span className="title-top">Regular Food</span>
          <h1>Main Menu / Food List1</h1>
        </div>
        <div className="regular-food-wrap">
          <div className="row">
            {foodList.length > 0 &&
              foodList.map((fl) => (
                <div className="col-lg-6">
                  <div className="single-regular-food d-flex justify-content-between align-items-center">
                    <div className="food-img">
                      <img
                        src={fl.image}
                        alt="Food"
                      />
                    </div>
                    <div className="food-dec">
                      <h4>{fl.name}</h4>
                      <p>
                        {fl.description}
                      </p>
                      <p className="price">$ {fl.price}</p>
                    </div>
                  </div>
                </div>
              ))}
           
          </div>
        </div>
      </div>
    </section>
  );
};

export default FoodMenu;
