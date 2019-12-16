import React from "react";
import { Spinner } from "react-bootstrap";

import "./loadingAnimation.css";

const LoadingAnimation = () => {
  return (
    <div className="loadingAnimation-container d-flex justify-content-center align-items-center">
      <div className="animated bounceInDown">
        <Spinner animation="grow" variant="primary" />
      </div>
      <div className="animated delay-1s bounceInDown">
        <Spinner animation="grow" variant="success" />
      </div>
      <div className="animated delay-2s bounceInDown">
        <Spinner animation="grow" variant="danger" />
      </div>
      <div className="animated delay-3s bounceInDown">
        <Spinner animation="grow" variant="warning" />
      </div>
    </div>
  );
};

export default LoadingAnimation;
