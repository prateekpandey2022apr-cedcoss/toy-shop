import React, { useContext } from "react";
import { Link } from "react-router-dom";
import inventory from "../data";
import ToyContext from "../ToyContext";

function TopPicks() {
  const topPicks = inventory.filter((_item) => _item["top-picks"] === true);

  console.log(topPicks);

  const { handleAddCart } = useContext(ToyContext);

  return (
    <>
      <div className="wrapper">
        <div className="row bestsellers">
          <div className="col-4 text-center">
            <h2>Top Picks</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam leo
              dolor.
            </p>
          </div>
        </div>
      </div>

      <div className="wrapper">
        <div className="row showcase">
          {/* <div className="col-1 attributes-filter">
            <div className="toy-types-filter">
              <ul>
                <li>
                  <a href="">Action Figures</a>
                </li>
                <li>
                  <a href="">Blasters</a>
                </li>
                <li>
                  <a href="">Building Blocks</a>
                </li>
                <li>
                  <a href="">Cars &amp; Trucks</a>
                </li>
                <li>
                  <a href="">Dinosaur toys</a>
                </li>
              </ul>
            </div>
          </div> */}
          <div className="col-4">
            <div className="product-list">
              {topPicks.map((product) => {
                return (
                  <>
                    <div className="product">
                      <div className="product-image">
                        <img src={product.image} />
                      </div>
                      <div className="product-title">
                        <h3 className="product-name">{product.name}</h3>
                      </div>
                      <div className="product-price">${product.price}</div>
                      <div className="cart-btn">
                        <button
                          className="buy-btn"
                          onClick={(event) => handleAddCart(event, product.id)}
                        >
                          Add to Cart
                        </button>
                      </div>
                    </div>
                  </>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      <div className="wrapper">
        <div className="row">
          <div className="col-4 text-center">
            <Link to="/shop" className="buy-btn">
              Browse More <i class="fa-solid fa-arrow-right"></i>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default TopPicks;
