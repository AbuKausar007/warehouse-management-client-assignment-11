import React from "react";
import "./Banner.css";

const Banner = () => {
  return (
    <div className="banner-area ">
      <section className="img"></section>
      <section className="banner-text ">
        <h5 className=" fw-bold text-success text-start heading">
          Welcome To My Fresh Grocery
        </h5>
        <h1 className=" display-3 fw-bold text-start red pt-2">Order Now To</h1>
        <h1 className=" display-3 fw-bold text-start red">
          To Get Fresh Grocery!
        </h1>
        <h4 className="fw-normal text-success text-start pt-2">
          This is a warehouse for my Fresh Grocery.
        </h4>
        <h4 className="fw-normal text-success text-start">
          Here I keep my all inventory items.
        </h4>
        <div className=" text-start pt-3 small">
          <button className="btn btn-danger fw-bold">See Products</button>
        </div>
      </section>
    </div>
  );
};

export default Banner;
