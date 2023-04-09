import "./App.css";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Products from "./Components/Products";
import Categories from "./Components/Categories";
import Cart from "./Components/Cart";

function App() {
  return (
    <>
      <Header />
      <Cart />
      <Categories />
      <Products />
      <Footer />
    </>
  );
}

export default App;
