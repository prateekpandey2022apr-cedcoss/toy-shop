import React from "react";

function ToyCategories() {
  return (
    <>
      <div className="wrapper">
        <div className="row toy-categories-head">
          <div className="col-4 text-center">
            <h2>Toy Categories</h2>
          </div>
        </div>
      </div>

      <div className="wrapper">
        <div className="row toy-categories">
          <div className="col-1-2">
            <div>
              <a href="#">
                <img src="../images/cat-1.webp" />
                <h3>Toys Under $10</h3>
              </a>
            </div>
          </div>
          <div className="col-1-2">
            <div>
              <a href="">
                <img src="../images/cat-2.webp" />
                <h3>New In</h3>
              </a>
            </div>
          </div>
          <div className="col-1-2">
            <div>
              <a href="">
                <img src="../images/cat-3.jpeg" />
                <h3>OutDoor Toys</h3>
              </a>
            </div>
          </div>
          <div className="col-1-2">
            <div>
              <a href="">
                <img src="../images/cat-4.webp" />
                <h3>Dolls &amp; Soft Toys</h3>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="wrapper">
        <div className="row toy-categories">
          <div className="col-1-2">
            <div>
              <a href="">
                <img src="../images/cat-5.jpeg" />
                <h3>Art &amp; Crafts</h3>
              </a>
            </div>
          </div>
          <div className="col-1-2">
            <div>
              <a href="">
                <img src="../images/cat-6.webp" />
                <h3>Pre-school Toys</h3>
              </a>
            </div>
          </div>
          <div className="col-1-2">
            <div>
              <a href="">
                <img src="../images/cat-7.jpeg" />
                <h3>Bikes &amp; Trikes</h3>
              </a>
            </div>
          </div>
          <div className="col-1-2">
            <div>
              <a href="">
                <img src="../images/cat-8.png" />
                <h3>Construction Toys</h3>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ToyCategories;
