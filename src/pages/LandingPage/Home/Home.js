import React from "react";
import Footer from "../../Shared/Footer/Footer";
import AboutUs from "../AboutUs/AboutUs";
import Banner from "../Banner/Banner";
import Inventory from "../Inventory/Inventory";
import Overview from "../Overview/Overview";
import "./Home.css";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Overview></Overview>
      <Inventory></Inventory>
      <AboutUs></AboutUs>
      <Footer></Footer>
    </div>
  );
};

export default Home;
