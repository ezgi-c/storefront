import "./products.css";
import Product from "../Product";
import { useSelector } from "react-redux";

// const data = require("../../data.json");

const Products = () => {
  const products = useSelector((state) => state.product.products);
  return (
    <section>
      {products.map((product) => (
        <Product product={product} />
      ))}
    </section>
  );
};

export default Products;
