import "./product.css";

const Product = ({ product }) => (
  <article className="product">
    <header>
      <figure>
        <img
          src={product.image}
          height="200px"
          width="100%"
          alt={product.name}
        />
      </figure>
    </header>
    <main>
      <h3>{product.name}</h3>
      <br></br>
      <p>Category: {product.category}</p>
      <p>Price: ${product.price}</p>
      <p>In stock: {product.inStock}</p>
    </main>
  </article>
);

export default Product;
