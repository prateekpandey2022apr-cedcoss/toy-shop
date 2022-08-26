import React, { Component } from "react";
import ReactDOM from "react-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

class DemoCarousel extends Component {
  render() {
    return (
      <div className="wrapper">
        <div className="carousel-container">
          <Carousel showThumbs={false}>
            <div>
              <img src="../images/car_1.webp" />
              {/* <p className="legend">Legend 1</p> */}
            </div>
            <div>
              <img src="../images/car_2.webp" />
              {/* <p className="legend">Legend 2</p> */}
            </div>
          </Carousel>
        </div>
      </div>
    );
  }
}

export default DemoCarousel;
