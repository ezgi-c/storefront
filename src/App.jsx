import "./App.css";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Products from "./Components/Products";
import Categories from "./Components/Categories";
import Cart from "./Components/Cart";
import { loadProducts } from "./store/productSlice";
import { loadCategories } from "./store/categorySlice";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadProducts());
    dispatch(loadCategories());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // const doUpdateProduct = () => {
  //   dispatch(updateProduct({ product: products[0], stockAmount: -2 }));
  // };

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
