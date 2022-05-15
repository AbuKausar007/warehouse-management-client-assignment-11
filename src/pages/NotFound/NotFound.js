import React from "react";
import { useNavigate } from "react-router-dom";
import errorImg from "../../images/error.jpg";

const NotFound = () => {
  const navigate = useNavigate();
  const navigateToHome = () => {
    navigate("/");
  };
  return (
    <div className="container d-grid py-5 mt-3">
      <section className="row">
        <div className="col-lg-7 col-sm-12 ">
          <h1 className="fw-bold text-danger ">
            You are searching for invalid page!
          </h1>
          <button
            onClick={navigateToHome}
            className="btn btn-success p-2 fw-bold"
          >
            Go Home
          </button>
        </div>
        <div className="col-lg-5 col-sm-12">
          <img className="img-fluid" src={errorImg} alt="" />
        </div>
      </section>
    </div>
  );
};

export default NotFound;
