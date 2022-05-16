import React from "react";
import aboutImg from "../../images/about.jpg";

const About = () => {
  return (
    <div className="container py-5 mt-5">
      <h1 className="text-success fw-bold">Welcome to My Fresh Grocery!</h1>
      <div>
        <img src={aboutImg} className="img-fluid" alt="" />
      </div>
      <h3 className="text-start">
        An online grocer is either a brick-and-mortar supermarket or grocery
        store that allows online ordering, or a standalone e-commerce service
        that includes grocery items. There is usually a delivery charge for this
        service.
      </h3>
      <h3 className="text-start">
        Welcome to Fresh Grocery! We’re glad you have decided to join us. We
        want to make your onboarding experience free of worry. Feel free to send
        us an email if you have any questions at any point in time. We also
        recommend checking out these resources to get you off the ground.
      </h3>
      <h3 className="text-start">
        We answer all messages we receive on email, so you can expect a message
        back within 2:00 hours. Talk to you soon!
      </h3>
    </div>
  );
};

export default About;
