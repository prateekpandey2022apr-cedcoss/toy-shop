import logo from "./logo.svg";
import "./App.css";
import Home from "./Home";
import { Routes, Route, Link } from "react-router-dom";
import ProductList from "./ProductList";
import Cart from "./Cart";
import Login from "./Login";
import Success from "./success";
import { ToyProvider } from "./ToyContext";
import Checkout from "./Checkout";

function App() {
  return (
    <>
      <ToyProvider>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/shop" element={<ProductList />}></Route>
          <Route path="/cart" element={<Cart />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/success" element={<Success />}></Route>
          <Route path="/checkout" element={<Checkout />}></Route>
        </Routes>
      </ToyProvider>
    </>
  );
}

export default App;
