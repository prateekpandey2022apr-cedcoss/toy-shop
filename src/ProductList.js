import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import Footer from "./components/Footer";
import PrimarnyNav from "./components/PrimarnyNav";
import SecondaryNav from "./components/SecondaryNav";
import inventory from "./data";
import ToyContext from "./ToyContext";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

function ProductList() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  function removeId(event) {}

  const {
    toyCategory,
    setToycategory,
    ageFilter,
    products,
    handleAttrFilters,
    handlePriceSorting,
    priceSort,
    setPriceSort,
    handleAddCart,
    cart,
    scrollPosition,
    handleBackToTopClick,
    moveToTop,
    modalOpen,
    setModalOpen,
    currentProduct,
    setCurrentProduct,
  } = useContext(ToyContext);

  // console.log({ products });

  const style = {
    textAlign: "center",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };

  return (
    <>
      <>
        <Modal open={modalOpen} onClose={() => setModalOpen(false)}>
          <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              {currentProduct?.name}
            </Typography>
            <Typography>
              <img src={currentProduct?.image} />
            </Typography>
            <Typography>${currentProduct?.price}</Typography>
            <Typography className="modal-rating">
              {Array(currentProduct.rating)
                .fill(0)
                .map((_item) => {
                  return (
                    <span>
                      <i class="fa-solid fa-star"></i>
                    </span>
                  );
                })}
            </Typography>
            <Typography id="modal-modal-title" variant="h6" component="h4">
              Product Details: <br />
              Duis mollis, est non commodo luctus, nisi
            </Typography>
          </Box>
        </Modal>
      </>

      <PrimarnyNav />
      <SecondaryNav />
      <a
        href="#/"
        id="button"
        className={scrollPosition > 200 ? "show" : ""}
        onClick={handleBackToTopClick}
      ></a>
      {cart.length > 0 && (
        <div id="floating-cart">
          <Link
            to="/cart"
            className={scrollPosition > 200 ? "show" : ""}
            onClick={handleBackToTopClick}
          ></Link>
          <span id="cart-count">{cart.length}</span>
        </div>
      )}
      <div className="wrapper">
        <div className="col-4 search-results text-center">
          <p>{products.length} results found.</p>
        </div>
      </div>
      <div className="wrapper">
        <div className="row listing">
          <div className="col-1 attributes-filter">
            <div className="toy-types-filter">
              <h3>Product Categories</h3>
              <ul onClick={handleAttrFilters}>
                <li>
                  <a
                    href="#/"
                    className={`toy-category ${
                      toyCategory === "Action Figures" ? "active" : ""
                    }`}
                  >
                    Action Figures
                  </a>
                </li>
                <li>
                  <a
                    href="#/"
                    className={`toy-category ${
                      toyCategory === "Puzzles" ? "active" : ""
                    }`}
                  >
                    Puzzles
                  </a>
                </li>
                <li>
                  <a
                    href="#/"
                    className={`toy-category ${
                      toyCategory === "Cars & Trucks" ? "active" : ""
                    }`}
                  >
                    Cars &amp; Trucks
                  </a>
                </li>
                <li>
                  <a
                    href="#/"
                    className={`toy-category ${
                      toyCategory === "Dinosaur toys" ? "active" : ""
                    }`}
                  >
                    Dinosaur toys
                  </a>
                </li>
                <li>
                  <a
                    href="#/"
                    className={`toy-category ${
                      toyCategory === "" ? "active" : ""
                    }`}
                  >
                    View All
                  </a>
                </li>
              </ul>
            </div>

            <div className="age-filter">
              <h3>Age Filter</h3>
              <ul onClick={handleAttrFilters}>
                <li>
                  <a
                    href="#/"
                    className={`age-filter ${
                      ageFilter === "0-18 months" ? "active" : ""
                    }`}
                  >
                    0-18 months
                  </a>
                </li>
                <li>
                  <a
                    href="#/"
                    className={`age-filter ${
                      ageFilter === "18-36 months" ? "active" : ""
                    }`}
                  >
                    18-36 months
                  </a>
                </li>
                <li>
                  <a
                    href="#/"
                    className={`age-filter ${
                      ageFilter === "3-5 years" ? "active" : ""
                    }`}
                  >
                    3-5 years
                  </a>
                </li>
                <li>
                  <a
                    href="#/"
                    className={`age-filter ${
                      ageFilter === "5-7 years" ? "active" : ""
                    }`}
                  >
                    5-7 years
                  </a>
                </li>
                <li>
                  <a
                    href="#/"
                    className={`age-filter ${
                      ageFilter === "7-9 years" ? "active" : ""
                    }`}
                  >
                    7-9 years
                  </a>
                </li>
                <li>
                  <a
                    href="#/"
                    className={`age-filter ${ageFilter === "" ? "active" : ""}`}
                  >
                    View All
                  </a>
                </li>
              </ul>
            </div>

            {/* <div className="Price-filter">
              <h3>Price Filter</h3>
              <ul>
                <li>
                  <a href="">$0 - $15</a>
                </li>
                <li>
                  <a href="">$15 - $19.99</a>
                </li>
                <li>
                  <a href="">$15 - $29.99</a>
                </li>
                <li>
                  <a href="">$30 - $45.99</a>
                </li>
                <li>
                  <a href="">$45 &gt;</a>
                </li>
              </ul>
            </div> */}
          </div>

          <div className="col-3-4">
            <div className="horizontal-filters">
              <div className="price-sort">
                <form>
                  <select
                    value={priceSort}
                    onChange={(event) => {
                      setPriceSort(event.target.value);
                      handlePriceSorting(event);
                    }}
                  >
                    <option value="">Price sorting (default)</option>
                    <option value="ltoh">Low to High</option>
                    <option value="htol">High to Low</option>
                  </select>
                </form>
              </div>
            </div>

            {products.length > 0 ? (
              <div className="product-list">
                {products.map((product, idx) => {
                  return (
                    <>
                      <div className="product">
                        <div className="product-image">
                          <img src={product.image} />
                        </div>
                        <div className="product-title">
                          <h3 className="product-name">
                            <a
                              id={idx}
                              href="#/"
                              onClick={(event) => {
                                setModalOpen(true);
                                setCurrentProduct(product);
                              }}
                            >
                              {product.name}
                            </a>
                          </h3>
                        </div>
                        <div className="product-rating">
                          {Array(product.rating)
                            .fill(0)
                            .map((_item) => {
                              return (
                                <span>
                                  <i class="fa-solid fa-star"></i>
                                </span>
                              );
                            })}
                        </div>
                        <div className="product-price">${product.price}</div>
                        <div className="cart-btn">
                          <button
                            className="buy-btn"
                            onClick={(event) =>
                              handleAddCart(event, product.id)
                            }
                          >
                            Buy Now
                          </button>
                        </div>
                      </div>
                    </>
                  );
                })}
              </div>
            ) : (
              <>{/* <div>No products found</div> */}</>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default ProductList;
