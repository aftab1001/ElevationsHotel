import React from "react";

const FoodCta = ({ poster }) => {
  
  return (
    <section
      className="food-cta bg-img-center Elevations-go-top"
      style={{
        backgroundImage: "url(" + poster.image  ,
      }}
    >
      <div className="container">
        <div className="food-cta-text">
          <h1>
			  {poster.description}            
          </h1>
        </div>
      </div>
      
    </section>
  );
};

export default FoodCta;
