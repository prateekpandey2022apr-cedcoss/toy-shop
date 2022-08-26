import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Footer from "./components/Footer";
import PrimarnyNav from "./components/PrimarnyNav";
import SecondaryNav from "./components/SecondaryNav";
import ToyContext from "./ToyContext";
import { CartTotal } from "./Utils";

function Cart() {
  const {
    toyCategory,
    setToycategory,
    ageFilter,
    products,
    handleAttrFilters,
    handlePriceSorting,
    priceSort,
    setPriceSort,
    query,
    setQuery,
    handleSearch,
    cart,
    handleQtyUpdate,
    removeFromCart,
    scrollPosition,
    handleBackToTopClick,
  } = useContext(ToyContext);

  return (
    <>
      <PrimarnyNav />
      <SecondaryNav />

      {cart.length === 0 && (
        <div className="wrapper">
          <div className="row cart-page-container text-center">
            <div className=" col-4 empty-cart">
              <img src="../images/empty-cart.png" alt="empty-cart-imag" />
              <p>Your cart is empty!</p>
            </div>
          </div>
        </div>
      )}

      {cart.length > 0 && (
        <div className="wrapper">
          <div className="row cart-page-container">
            <div className="col-3 cart-container">
              {cart.map((cartItem) => {
                return (
                  <>
                    <div className="cart-item">
                      <div className="product-image">
                        <img src={cartItem.image} alt={cartItem.name} />
                      </div>
                      <div className="product-details">
                        <h3 className="product-name">{cartItem.name}</h3>
                        <p class="description">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Etiam leo dolor.
                        </p>
                        <div className="btn-group">
                          <button
                            className="decrement"
                            // onClick={(event) =>
                            //   handleQtyUpdate(event, cartItem.id, "-")
                            // }
                            onClick={(event) => {
                              if (cartItem.quantity !== 1) {
                                handleQtyUpdate(event, cartItem.id, "-");
                              } else if (window.confirm("Are you sure?")) {
                                handleQtyUpdate(event, cartItem.id, "-");
                                // onClick={(event) => handleQtyUpdate(event, item.id)}
                              }
                            }}
                          >
                            <i class="fa-solid fa-circle-minus"></i>
                          </button>
                          &nbsp;
                          <span className="item-quantity">
                            {cartItem.quantity}
                          </span>
                          &nbsp;
                          <button
                            className="increment"
                            onClick={(event) =>
                              handleQtyUpdate(event, cartItem.id, "+")
                            }
                          >
                            <i class="fa-solid fa-circle-plus"></i>
                          </button>
                        </div>
                        <div className="price">
                          ${cartItem.price * cartItem.quantity}
                        </div>
                      </div>

                      <button
                        className="remove-item"
                        onClick={(event) => {
                          if (window.confirm("Are you sure?")) {
                            removeFromCart(event, cartItem.id);
                          }
                        }}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          class="remove-icon"
                        >
                          <path
                            fill="#000"
                            fill-rule="evenodd"
                            d="M9.031 8l6.756-6.756a.731.731 0 0 0 0-1.031.732.732 0 0 0-1.031 0L8 6.969 1.244.213a.732.732 0 0 0-1.031 0 .731.731 0 0 0 0 1.03L6.969 8 .213 14.756a.731.731 0 0 0 0 1.031.732.732 0 0 0 1.031 0L8 9.031l6.756 6.756a.732.732 0 0 0 1.031 0 .731.731 0 0 0 0-1.03L9.031 8z"
                          ></path>
                        </svg>
                      </button>
                    </div>
                  </>
                );
              })}

              {/* <div className="cart-item">
                <div className="product-image">
                  <img src="../images/p2.jpeg" />
                </div>
                <div className="product-details">
                  <h3 className="product-name">Noise</h3>
                  <p className="description">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Etiam leo dolor.
                  </p>
                  <div className="btn-group">
                    <button className="decrement">
                      <i class="fa-solid fa-circle-minus"></i>
                    </button>
                    &nbsp;
                    <span className="item-quantity">1</span>
                    &nbsp;
                    <button className="increment">
                      <i class="fa-solid fa-circle-plus"></i>
                    </button>
                  </div>
                  <div className="price">$12</div>
                </div>

                <button className="remove-item">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    class="remove-icon"
                  >
                    <path
                      fill="#000"
                      fill-rule="evenodd"
                      d="M9.031 8l6.756-6.756a.731.731 0 0 0 0-1.031.732.732 0 0 0-1.031 0L8 6.969 1.244.213a.732.732 0 0 0-1.031 0 .731.731 0 0 0 0 1.03L6.969 8 .213 14.756a.731.731 0 0 0 0 1.031.732.732 0 0 0 1.031 0L8 9.031l6.756 6.756a.732.732 0 0 0 1.031 0 .731.731 0 0 0 0-1.03L9.031 8z"
                    ></path>
                  </svg>
                </button>
              </div> */}
            </div>

            <div className="col-1 particulars">
              {/* <div className="price-head">
              <span>PRICE DETAILS (2 items)</span>
            </div>
            <div className="price-details">
              <span>Total MRP</span>
              <span>$20</span>
            </div>
            <div className="discount-details">
              <span>Discount on MRP</span>
              <span>$20</span>
            </div>
            <div className="convenience-details">
              <span>Convenience Fee</span>
              <span>FREE</span>
            </div>
            <div className="total-amount">
              <span>Total Amount</span>
              <span>$50</span>
            </div>

            <div className="place-order-container">
              <button>PLACE ORDER</button>
            </div> */}
              <div className="price-head">
                <span>PRICE DETAILS ({cart.length} items)</span>
              </div>
              <table>
                <tr>
                  <td>Total MRP</td>
                  <td>${CartTotal(cart)}</td>
                </tr>
                <tr>
                  <td>Discount on MRP</td>
                  <td>$10</td>
                </tr>
                <tr>
                  <td>Convenience Fee</td>
                  <td>$10</td>
                </tr>
                <tr className="total">
                  <td colSpan={2}>Total : ${CartTotal(cart) + 20}</td>
                </tr>
              </table>
              <div className="place-order-container">
                <Link to="/checkout" className="btn">PLACE ORDER</Link>
              </div>
            </div>
          </div>
        </div>
      )}
      <Footer />
    </>
  );
}

export default Cart;
