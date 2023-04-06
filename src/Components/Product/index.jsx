const Product = ({ product }) => (
    <article className="product">
      <header>
        <h2>{product.name}</h2>
      </header>
      <main>
        <figure>
          <img src={product.image} width="200px" alt={product.name} />
        </figure>
        <p>Category: {product.category}</p>
        <p>Price: ${product.price}</p>
        <p>In stock: {product.inStock}</p>

      </main>
    </article>
  );
  
  export default Product;