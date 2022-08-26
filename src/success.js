import React from "react";
import { Link } from "react-router-dom";
import Footer from "./components/Footer";
import PrimarnyNav from "./components/PrimarnyNav";

function Success() {
  return (
    <>
      <PrimarnyNav />
      <div className="wrapper">
        <div className="row order-success-container text-center">
          <div className=" col-4 order-success">
            <p>Thanks for your order &#127881;</p>
            &nbsp;
            <div>
              <Link to="/" className="btn">
                Back to home
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Success;
