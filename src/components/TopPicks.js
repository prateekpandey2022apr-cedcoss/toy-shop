import React, { useContext } from "react";
import { Link } from "react-router-dom";
import inventory from "../data";
import ToyContext from "../ToyContext";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

function TopPicks() {
  const topPicks = inventory.filter((_item) => _item["top-picks"] === true);

  console.log(topPicks);

  const {
    handleAddCart,
    modalOpen,
    setModalOpen,
    currentProduct,
    setCurrentProduct,
  } = useContext(ToyContext);

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
              {topPicks.map((product, idx) => {
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
