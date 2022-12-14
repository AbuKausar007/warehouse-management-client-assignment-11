import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <section className=" container d-lg-flex flex-lg-row justify-content-lg-around d-sm-flex flex-sm-column align-items-sm-center align-content-sm-center w-100 pt-5">
        <div className="text-lg-start text-sm-center small-device">
          <h3 className="fw-bold">Store Location</h3>
          <h5 className="fw-bold text-danger">Address:</h5>
          <p className="text-success">Rayerbag, Jatrabari, Dhaka - 1362</p>
          <h5 className="fw-bold text-danger">Email:</h5>
          <p className="text-success">fresh@grocey.com</p>
          <h5 className="fw-bold text-danger">Phone:</h5>
          <p className="text-success">01755332299</p>
        </div>
        <div className="text-lg-start text-sm-center small-device d-none d-lg-block">
          <h3 className="fw-bold">Useful links</h3>
          <p className=" text-success">Home</p>
          <p className=" text-success">About Us</p>
          <p className=" text-success">Inventory</p>
          <p className=" text-success">My Items</p>
          <p className=" text-success">Manage Items</p>
        </div>
        <div className="text-lg-start text-sm-center small-device d-none d-lg-block">
          <h3 className="fw-bold">Categories</h3>
          <p className="text-success">Vegetables</p>
          <p className="text-success">Fish</p>
          <p className="text-success">Meats</p>
          <p className="text-success">Dry Fruits</p>
          <p className="text-success">Cookies</p>
        </div>
        <div className="text-lg-start text-sm-center small-device">
          <h3 className="fw-bold">Opering hours</h3>
          <h5 className="fw-bold text-danger">Sunday - Tuesday</h5>
          <p className="text-success">9:00 - 14:00</p>
          <h5 className="fw-bold text-danger">Wednesday - Thursday</h5>
          <p className="text-success">15:00 - 20:00</p>
          <h5 className="fw-bold text-danger">Friday - Sunday</h5>
          <p className="text-success">7:00 - 11:00</p>
        </div>
      </section>
      <hr />
      <small className="">All Rights Reserved To Fresh Grocery ?? 2022</small>
    </div>
  );
};

export default Footer;
