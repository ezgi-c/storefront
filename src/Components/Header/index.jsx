import { useSelector } from "react-redux";

const Header = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);

  return (
    <header className="App-header">
      <h1>Virtual Store</h1>
      <p className="App-link">
        🛒 CART (<span>{cartItems.length}</span>)
      </p>
    </header>
  );
};

export default Header;
