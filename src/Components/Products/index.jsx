import "./products.css";
import Product from "../Product";
import { filteredProducts } from "../../store/product";
import { useSelector } from "react-redux";

// const data = require("../../data.json");

const Products = () => {
  // const products = useSelector((state) => state.product.products);
    const products = useSelector(filteredProducts);

  return (
    <section>
      {products.map((product) => (
        <Product product={product} />
      ))}
    </section>
  );
};

export default Products;
