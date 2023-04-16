import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Header = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);

  return (
    <header className="App-header">
      <Link to="/" style={{ color: "white", textDecoration: "none" }}>
        <h1>Virtual Store</h1>
      </Link>
      <Link to="/cart" className="App-link">
        🛒 CART (<span>{cartItems.length}</span>)
      </Link>
    </header>
  );
};

export default Header;
