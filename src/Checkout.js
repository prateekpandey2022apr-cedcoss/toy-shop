import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Footer from "./components/Footer";
import PrimarnyNav from "./components/PrimarnyNav";
import SecondaryNav from "./components/SecondaryNav";
import ToyContext from "./ToyContext";
import { CartTotal } from "./Utils";

function Checkout() {
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
    loggedIn,
    handleSuccess,
  } = useContext(ToyContext);

  return (
    <>
      <PrimarnyNav />
      <SecondaryNav />

      {loggedIn ? (
        <>
          <div className="wrapper">
            <div className="row checkout-container">
              <div className="col-2-4 address">
                <h2>Billing Details</h2>
                <form action="/success" onSubmit={handleSuccess}>
                  <div className="form-element">
                    <input type="text" placeholder="First Name" />
                    <input type="text" placeholder="Last Name" />
                  </div>

                  <div className="form-element">
                    <input type="text" placeholder="Street Address" />
                  </div>

                  <div className="form-element">
                    <input type="text" placeholder="Appartment/Suite #" />
                  </div>

                  <div className="form-element">
                    <input type="text" placeholder="State" />
                    <input type="text" placeholder="Zip" />
                  </div>

                  <div className="form-element">
                    <input type="submit" value="CHECKOUT" className="btn" />
                    {/* <button type="submit">CHECKOUT</button> */}
                  </div>
                </form>
              </div>
              <div className="col-2-4 order-summary">
                <h4>Order Summary</h4>

                {/* <ul> */}
                {cart.map((item) => {
                  return (
                    <div className="item">
                      <div>
                        {item.name} x {item.quantity}
                      </div>
                      <div>
                        &#8377;
                        {(item.quantity * item.price).toFixed(2)}
                      </div>
                    </div>
                  );
                })}
                <hr style={{ margin: "2em 0" }} />
                <div className="item">
                  <div>Total Amount:</div>
                  <div>&#8377; {CartTotal(cart).toFixed(2)}</div>
                </div>
                {/* </ul> */}

                {/* <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.
            </p>

            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.
            </p> */}
              </div>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="wrapper checkout-no-login">
            <div className="row text-center">
              <div className="col-4 ">
                {/* <p className="no-login">
                  <img src="../images/no-login.jpg" />
                </p> */}
                <p>
                  <Link to="/login?from=checkout" className="btn">
                    Login to continue
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </>
      )}

      <Footer />
    </>
  );
}

export default Checkout;
