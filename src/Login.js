import React, { useContext } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import Footer from "./components/Footer";
import PrimarnyNav from "./components/PrimarnyNav";
import SecondaryNav from "./components/SecondaryNav";
import ToyContext from "./ToyContext";

function Login() {
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
    user,
    setUser,
    handleLogin,
    from,
    setFrom,
  } = useContext(ToyContext);

  const [searchParams, setSearchParams] = useSearchParams();
  setFrom(() => searchParams.get("from"));

  return (
    <>
      <PrimarnyNav />
      <SecondaryNav />
      <div className="wrapper">
        <div className="row ">
          <div className="login-container">
            <h2>Login</h2>
            <form onSubmit={handleLogin}>
              <div className="form-element">
                <label htmlFor="email">Enter email:</label>
                <input
                  type="text"
                  id="email"
                  value={user.email ?? ""}
                  onChange={(event) =>
                    setUser({ ...user, email: event.target.value })
                  }
                  name="email"
                  placeholder="user1@m.com:pass"
                />
              </div>
              <div className="form-element">
                <label htmlFor="password">Enter Password:</label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={user.password ?? ""}
                  onChange={(event) =>
                    setUser({ ...user, password: event.target.value })
                  }
                  placeholder="Enter Password"
                />
              </div>
              <div className="form-element">
                {/* <input type="submit" value="Login" className="btn" /> */}
                <button type="submit" className="btn">
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Login;
