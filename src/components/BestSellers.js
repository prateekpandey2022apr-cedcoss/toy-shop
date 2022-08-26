import React, { useContext } from "react";
import ToyContext from "../ToyContext";

function BestSellers() {
  const { cart, scrollPosition, handleBackToTopClick, handleAddCart } =
    useContext(ToyContext);
  return (
    <>
      <div className="wrapper">
        <div className="row bestsellers">
          <div className="col-4 text-center">
            <h2>Bestsellers</h2>
          </div>
        </div>
      </div>

      <div className="wrapper">
        <div className="row bestseller-items">
          <div className="col-2-4">
            <div className="item">
              <div className="product-image">
                <a href="#">
                  <img src="../images/best-seller-2.webp" />
                </a>
              </div>
              <div className="product-name">
                <h3>Ready Steady Dough</h3>
                <div>
                  <button
                    href="#"
                    className="buy-btn"
                    onClick={(event) => handleAddCart(event, 13)}
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-2-4">
            <div className="item">
              <div className="product-image">
                <a href="#">
                  <img src="../images/best-seller-1.webp" />
                </a>
              </div>

              <div className="product-name">
                <h3>Shop Akedo</h3>
                <div>
                  <button
                    href="#"
                    className="buy-btn"
                    onClick={(event) => handleAddCart(event, 14)}
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default BestSellers;
