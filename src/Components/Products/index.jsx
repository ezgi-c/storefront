import "./products.css";
import Product from "../Product";

const data = require("../../data.json");

const Products = () => (
  <section>
    {data.products.map((product) => (
      <Product product={product} />
    ))}
  </section>
);

export default Products;