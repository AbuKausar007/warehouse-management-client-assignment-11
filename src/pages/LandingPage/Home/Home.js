import React from "react";
import Footer from "../../Shared/Footer/Footer";
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
      <Footer></Footer>
    </div>
  );
};

export default Home;
