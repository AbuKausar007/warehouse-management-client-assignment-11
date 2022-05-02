import React from "react";
import "./Overview.css";
import vegetables from "../../../images/overview/vegetables.jpg";
import fish from "../../../images/overview/fish.jpg";
import dryFruits from "../../../images/overview/dryfruits.jpg";
import meat from "../../../images/overview/meat.jpg";

const Overview = () => {
  return (
    <div>
      <section className="overview container py-lg-5 py-4 ">
        <div className=" shadow-lg">
          <img className="w-100" src={vegetables} alt="" />
          <h3 className="font-weight">Get every veges you need!</h3>
        </div>
        <div className=" shadow-lg">
          <img className="w-100" src={fish} alt="" />
          <h3>We have the best fish collection!</h3>
        </div>
        <div className=" shadow-lg">
          <img className="w-100" src={dryFruits} alt="" />
          <h3>Get any dry fruits you want!</h3>
        </div>
        <div className=" shadow-lg">
          <img className="w-100" src={meat} alt="" />
          <h3>We have lot of protine source!</h3>
        </div>
      </section>
    </div>
  );
};

export default Overview;
