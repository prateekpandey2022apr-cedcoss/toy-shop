import React, { useContext } from "react";
import { Link } from "react-router-dom";
import ToyContext from "../ToyContext";

function SecondaryNav() {
  const { loggedIn, handleLogout } = useContext(ToyContext);

  return (
    <div className="sec-nav-container">
      <div className="wrapper">
        <ul className="row sec-nav">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/shop">Shop</Link>
          </li>
          <li>
            <a href="#/">Blog</a>
          </li>
          <li>
            <a href="#/">Contact</a>
          </li>
          {loggedIn ? (
            <li>
              <a href="#/" onClick={handleLogout}>
                Logout
              </a>
            </li>
          ) : (
            <li>
              <Link to="/login">Login</Link>
            </li>
          )}
        </ul>
      </div>
    </div>
  );
}

export default SecondaryNav;
