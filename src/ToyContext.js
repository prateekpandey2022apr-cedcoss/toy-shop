import {
  createContext,
  useState,
  useCallback,
  useEffect,
  useDebugValue,
} from "react";
import inventory, { users } from "./data";
import { useNavigate, useLocation } from "react-router-dom";

const ToyContext = createContext();

// add procuts from home page
// add floating cart icon
// add sec nav bar to show logout button
// add rating
// add breacdcrumb

export function ToyProvider({ children }) {
  console.log(users);
  const [searchVisible, setSearchVisible] = useState(false);
  const [query, setQuery] = useState("");
  const [toyCategory, setToyCategory] = useState("");
  const [ageFilter, setAgeFilter] = useState("");
  // const [priceFilter, setPriceFilter] = useState("");
  const [products, setProducts] = useState(inventory);
  const [priceSort, setPriceSort] = useState("");

  const [cart, setCart] = useState([]);
  const [loggedIn, setLoggedIn] = useState(false);
  const [user, setUser] = useState({});
  const [session, setSession] = useState({});
  const [from, setFrom] = useState("");

  const [scrollPosition, setScrollPosition] = useState(0);

  const navigate = useNavigate();
  let location = useLocation();

  const handleScroll = () => {
    setScrollPosition(window.scrollY);
  };

  useEffect(() => {
    console.log(location);

    if (location.pathname === "/" && location.search === "") {
      setProducts(inventory);
      // setIsSearchSubmit(false);
      setQuery("");
      setPriceSort("");
      setToyCategory("");
      setProducts([...inventory]);
      // navigate("/");
    }
  }, [location]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  function handleBackToTopClick() {
    moveToTop();
  }

  function moveToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function handleLogout() {
    console.log("logoput");
    setSession({});
    setLoggedIn(false);
    navigate("/");
  }

  function handleSuccess(event) {
    event.preventDefault();
    setCart([]);
    navigate("/success");
  }

  function handleLogin(event) {
    debugger;
    console.log(users);

    event.preventDefault();
    console.log("form");

    if (!user.email || !user.password) {
      alert("All fields are required");
      return;
    }

    const result = users.find(
      (u) => u.email === user.email && u.password === user.password
    );

    console.log(result);

    debugger;

    if (result) {
      setUser({});
      setLoggedIn(true);
      setSession({ ...result });

      if (from) {
        navigate(from);
        return;
      }
      navigate("/");
    } else {
      alert("Wrong username/password");
    }
  }

  function removeFromCart(event, productId) {
    event.preventDefault();
    console.log({ productId });

    setCart(
      cart.filter((_item) => {
        return _item.id !== productId;
      })
    );

    return;
  }

  function handleQtyUpdate(event, productId, op) {
    console.log({ productId });

    const cartItem = cart.find((_item) => _item.id === productId);
    if (op === "+") {
      cartItem.quantity += 1;
      setCart([...cart]);
    } else {
      setCart(
        cart.filter((cartItem) => {
          if (cartItem.id == productId) {
            if (cartItem.quantity != 1) {
              cartItem.quantity -= 1;
              return cartItem;
            } else {
              return false;
            }
          }
          return cartItem;
        })
      );
    }
  }

  function handleAddCart(event, productId) {
    event.preventDefault();
    console.log({ productId });

    const cartItem = cart.find((_item) => _item.id === productId);

    if (cartItem) {
      cartItem.quantity += 1;
      setCart([...cart]);
    } else {
      const inventoryitem = inventory.find((_item) => _item.id === productId);
      setCart([...cart, { ...inventoryitem, quantity: 1 }]);
    }
  }

  function handleSearch(event) {
    debugger;
    event.preventDefault();
    console.log(event);

    let _products;

    _products = inventory.filter((_item) =>
      _item.name.toLowerCase().includes(query)
    );

    // toy type filter

    if (toyCategory) {
      _products = _products.filter(
        (_item) => _item.category === toyCategory.toLowerCase()
      );
    }

    // age filter

    if (ageFilter) {
      _products = _products.filter((_item) => _item.age === ageFilter);
    }

    // sort

    if (priceSort) {
      if (priceSort === "ltoh") {
        _products.sort((a, b) => a.price - b.price);
      } else if (priceSort === "htol") {
        _products.sort((a, b) => b.price - a.price);
      } else {
        // sort by id
        _products.sort((a, b) => b.id - a.id);
      }
    }

    // if(query){

    // }

    setProducts([..._products]);

    navigate(`/shop/?query=${query}`);
  }

  function handlePriceSorting(event) {
    console.log(event);
    console.log(priceSort);

    let _priceSort;

    if (event.target.nodeName === "SELECT") {
      _priceSort = event.target.value;

      if (_priceSort === "ltoh") {
        products.sort((a, b) => a.price - b.price);
      } else if (_priceSort === "htol") {
        products.sort((a, b) => b.price - a.price);
      } else {
        // sort by id
        products.sort((a, b) => a.id - b.id);
      }
    } else {
      // if (priceSort === "ltoh") {
      //   filteredItems.sort((a, b) => a.price - b.price);
      // } else if (priceSort === "htol") {
      //   filteredItems.sort((a, b) => b.price - a.price);
      // }
    }

    setProducts([...products]);
    setPriceSort(_priceSort);
  }

  function handleAttrFilters(event) {
    event.preventDefault();
    debugger;
    console.log(event);

    let _products;
    let _toyCategory;
    let _ageFilter;
    let filterExecuted = 0;

    if (
      event.target.nodeName === "A" &&
      event.target.classList.contains("toy-category")
    ) {
      filterExecuted = 1;
      console.log("good to go... ");
      console.log(event.target.textContent);

      _toyCategory = event.target.textContent;

      if (_toyCategory !== "View All") {
        _products = inventory.filter(
          (_item) => _item.category === _toyCategory.toLowerCase()
        );
      } else {
        _products = inventory;
        _toyCategory = "";
      }
    }

    if (!filterExecuted) {
      if (toyCategory) {
        filterExecuted = 1;
        _products = inventory.filter(
          (_item) => _item.category === toyCategory.toLowerCase()
        );
      }
    }

    if (!filterExecuted) {
      _products = inventory;
    }

    if (
      event.target.nodeName === "A" &&
      event.target.classList.contains("age-filter")
    ) {
      filterExecuted = 1;
      console.log("good to go... ");
      console.log(event.target.textContent);

      _ageFilter = event.target.textContent;

      if (_ageFilter !== "View All") {
        _products = _products.filter((_item) => _item.age === _ageFilter);
      } else {
        _products = _products;
        _ageFilter = "";
      }
    }

    if (!filterExecuted) {
      if (ageFilter) {
        filterExecuted = 1;
        _products = _products.filter(
          (_item) => _item.age === ageFilter.toLowerCase()
        );
      }
    }

    if (priceSort) {
      if (priceSort === "ltoh") {
        _products.sort((a, b) => a.price - b.price);
      } else if (priceSort === "htol") {
        _products.sort((a, b) => b.price - a.price);
      } else {
        // sort by id
        _products.sort((a, b) => b.id - a.id);
      }
    }

    if (filterExecuted) {
      setProducts(_products ?? []);
      setToyCategory(_toyCategory ?? toyCategory);
      setAgeFilter(_ageFilter ?? ageFilter);
    }
  }

  return (
    <ToyContext.Provider
      value={{
        toyCategory,
        setToyCategory,
        ageFilter,
        setAgeFilter,
        products,
        handleAttrFilters,
        handlePriceSorting,
        priceSort,
        setPriceSort,
        query,
        setQuery,
        handleSearch,
        cart,
        handleAddCart,
        handleQtyUpdate,
        removeFromCart,
        loggedIn,
        handleLogin,
        user,
        setUser,
        setFrom,
        handleSuccess,
        handleLogout,
        scrollPosition,
        handleBackToTopClick,
        moveToTop,
      }}
    >
      {children}
    </ToyContext.Provider>
  );
}

export default ToyContext;
