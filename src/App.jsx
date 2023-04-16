import "./App.css";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { loadProducts } from "./store/productSlice";
import { loadCategories } from "./store/categorySlice";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Storefront from "./Components/Storefront";
import ProductDetails from "./Components/ProductDetails";
import HomePage from "./Components/Home";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadProducts());
    dispatch(loadCategories());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Storefront />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/product/:name" element={<ProductDetails />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
