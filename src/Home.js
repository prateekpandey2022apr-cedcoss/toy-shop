import React, { useCallback, useContext } from "react";
import inventory from "./data";
import BestSellers from "./components/BestSellers";
import DemoCarousel from "./components/DemoCarousel";
import Footer from "./components/Footer";
import PrimarnyNav from "./components/PrimarnyNav";
import TopPicks from "./components/TopPicks";
import ToyCategories from "./components/ToyCategories";
import SecondaryNav from "./components/SecondaryNav";
import ToyContext from "./ToyContext";
import { Link } from "react-router-dom";

function Home() {
  const { cart, scrollPosition, handleBackToTopClick } = useContext(ToyContext);

  return (
    <>
      <PrimarnyNav />

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

      <a
        href="#/"
        id="button"
        className={scrollPosition > 200 ? "show" : ""}
        onClick={handleBackToTopClick}
      ></a>

      <SecondaryNav />
      <DemoCarousel />
      <BestSellers />
      <TopPicks />
      <ToyCategories />
      <Footer />
    </>
  );
}

export default Home;
