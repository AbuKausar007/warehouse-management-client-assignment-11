import React from "react";
import aboutImg from "../../../images/coupleBuying.jpg";
import "./AboutUs.css";

const AboutUs = () => {
  return (
    <div className="container py-5">
      <div className=" d-grid">
        <div className="row gap-4">
          <div className=" col-lg-5 col-sm-12">
            <img className="img-fluid" src={aboutImg} alt="" />
          </div>
          <div className=" col-lg-6 col-sm-12">
            <h1 className="fw-bold text-danger">
              We Give The Lowest Price On Grocery Item
            </h1>
            <p className="text-start">
              An online grocer is either a brick-and-mortar supermarket or
              grocery store that allows online ordering, or a standalone
              e-commerce service that includes grocery items. There is usually a
              delivery charge for this service.
            </p>
            <p className="text-start d-none d-lg-block">
              Welcome to Fresh Grocery! We’re glad you have decided to join us.
              We want to make your onboarding experience free of worry. Feel
              free to send us an email if you have any questions at any point in
              time. We also recommend checking out these resources to get you
              off the ground.
            </p>
            <p className="text-start">
              We answer all messages we receive on email, so you can expect a
              message back within 2:00 hours. Talk to you soon!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
